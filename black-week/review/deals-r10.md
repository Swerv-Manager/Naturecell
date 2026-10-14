CRITIC (score 91/100, wowed=False): Round 10 genuinely closes six of the seven r9 points. I checked each one against the r10 screenshots, pixel samples and the source.

**r9 points**
- **#1, shadow cut-offs:** fixed. The largest horizontal luminance steps under Bodylotion and Shampoo are now on the product silhouettes, not at box edges. The contact pools fade out cleanly.
- **#2, row-1 horizon:** fixed. Komplet's bottles stand at y≈628–630 and the Olie and Serum singles at about 632–636, so the difference is under 8px. The empty floor under the singles is about 36px.
- **#4, mobile meter label:** fixed. FRI FRAGT is centred on its knob (label centre x≈583@2x, knob x≈580@2x), and GAVE likewise.
- **#5, quick-view eye on touch:** fixed. It now shows on all nine cards, and on every 2-up card it clears the carton by 3–8 CSS px.
- **#6, moving light:** fixed. On the Komplet Rens shoulder the peak moves from x≈274 to x≈301 between f1 and f2 (27px), at a peak of 223 luma against about 90 on the amber.
- **#7, set tones:** fixed. All Day Facial is now a lighter sand ('dune'), so both Sampakker sit under one evening window.
- **#3, Lip Balm render:** unchanged. It is still a render, honestly captioned 'illustration'.

**Still holding up**
- Komplet shows its 4 real products.
- Itemised bundle maths are correct (299+399+449+499 = 1.646 / 1.234 / 335 and 1.147 / 860 / 215).
- The '54 kr. fra gratis CBD Lip Balm' nudge on All Day Facial is computed and honest.
- Label-in-Name is correct ('Læg i kurv – {name}', 'Hurtig visning – {name}', 'Se pakken – Komplet Pakken').
- Tokens only, no em-dashes (the −25% uses U+2212), nothing below 11px, cosmetic language throughout.
- FLIP filters and fly-to-cart are intact, and the cart is added to via store.add.

**New defect: mobile sale flag**
The mobile 2-up stages are too short at the top. The berry −25% flag now physically touches the product on three singles:
- Dagcreme and Natcreme: it sits on the clear cap's top-left corner.
- Bodylotion: it sits on the tube's crimp.
- Serum: it clears the pump by only about 4 CSS px.

An art director sees a price sticker slapped on the pack at first glance. It is the one thing that keeps a very strong, honest, beautifully lit grid from reading as finished luxury on the device most Black Week traffic uses.

**Gift tile**
The gift tile is still the weakest moment:
- The real-scale 6 ml stick reads as a speck on mobile, about 15×62 CSS px.
- Its own value tag covers the cap.
- It is still not a photograph.

Side by side with Rhode, Aesop or SKIMS it wins on clarity, honesty and light. It is not yet AAA because of the mobile flag collisions and the gift moment.
MUST FIX:
1. On mobile (390px) the −25% sale flag collides with the product on 3 of 7 singles, and nearly does on a fourth.
- Dagcreme and Natcreme (mobile-el y≈2780–2820@2x): the flag's bottom-right (x≈493–511, y≈2803–2817@2x) sits on the clear cap's top-left corner.
- Bodylotion (y≈4905–4917@2x, x≈500–512): the flag's corner sits on the tube crimp.
- Serum (row 1): the flag's bottom is about 4 CSS px above the pump top, with horizontal overlap.

The cause is phone stage headroom. At ≤760px the CSS sets --dl-top-u:.1 and the JS sets K_UNIT_PHONE 1.12, so the unit is about 195px and the headroom only about 19.5px. The flag ends at 9+22 = 31px. Desktop is clear on all cards. [deals.css:801 (≤760px --dl-top-u:.1) and :819 (.deals-flag top:9px;height:22px); deals.js:38 K_UNIT_PHONE] -> At ≤760px, guarantee a flag lane: the tallest pack top must be at least the flag bottom plus 8px (top ≥ 39px).
- Either set `--dl-top-u: .2` in the ≤760px block, which adds about 19px per stage (≈39px headroom),
- or keep .1 and add `--dl-eye: 20px` to single-product rows on phones, so the set rows do not grow.

Do not shrink the flag below 22px or 11.5px.

Acceptance:
- In mobile-el, every single's pack bbox top is at least 8 CSS px below the flag's bottom edge.
- Dagcreme, Natcreme, Bodylotion and Serum all pass.
- The price and button rows stay aligned across each pair.
2. The gift tile's value tag covers its own product.
- Desktop: the tag's left edge (x≈1184) cuts across the Lip Balm cap and shoulder (stick x≈1168–1190), hiding about 27% of the stick's width at its top.
- Mobile: the tag's bottom-left corner sits over the cap's top-right (mobile-el x≈595–605, y≈6020–6060@2x).

On mobile the stick is also only about 15×62 CSS px, so the free gift, the second-strongest lever in the section, reads as a speck with a sticker on it. The spec rule 'UI never covers the product' is broken here in spirit. [deals.css .deals-tag / .deals-gift__art positioning (≈ lines 560–600, mobile block 868–874)] -> 1. Hang the tag with at least 8px of clear air beside the stick: `.deals-tag { left: calc(50% + var(--stick-w)/2 + 8px) }`, or mirror it to the left. Keep the sand thread running down to the tag, not across the stick.
2. On ≤760px, scale the tag to 0.86 and anchor it top-right of the art box, so its bottom ends at least 10px above the cap.
3. Strengthen the warm floor pool under the stick on mobile, at about 1.4× its current radius. The stick then reads as a lit object rather than a speck, without breaking truthful scale.

Acceptance: in both desktop-el and mobile-el, the tag's bbox and the stick's alpha bbox do not intersect, with a gap of at least 6 CSS px.
3. The free CBD Lip Balm is still a Three.js render, the only non-photograph in the grid. It is honestly captioned 'illustration', but its product truth (cap colour, label layout, stick proportions) is unverified. [lip-balm.js; src/core/data.js (lip-balm img:null); deals.js giftImg branch] -> This is a blocking hand-off for launch:
1. Save the real 6 ml packshot from naturecell.dk/products/lip-balm as assets/products/lip-balm.webp, with transparent, product-only alpha.
2. Set img in data.js. The giftImg branch then drops the 'illustration' caption automatically.
3. Give it a real alpha box in place of the [1000,1000,0,0,1000,1000] placeholder (deals.js lipShot), keeping h:0.32, so it stands on the shared floor at y≈1872.

Until the real packshot is in, get the client's written sign-off on the render.
4. Desktop quick view is an unlabeled 34px eye disc that only appears on hover. The brief's microcopy 'Hurtig visning' exists only as screen-reader text. Last round's blind judge singled out the competitor's visible 'Hurtig visning' hover pill as a useful shopping affordance. Here, a sighted mouse user gets an ambiguous icon. [deals.js:209 quick(); deals.css:373–396 .deals-quick] -> On a fine pointer (hover:hover), expand the disc on card hover into a pill. The pill shows the eye plus a visible 'Hurtig visning' label (13px, 500, sage-800 on cloud) with height 34px and padding 0 12px, anchored top:14px; right:14px. Use the same viscous 360ms easing as the chips.

After the change:
- The sr text is ' – {name}' only, so the accessible name becomes 'Hurtig visning – {name}' and still starts with the visible label.
- Touch keeps the 24px eye disc inside its 44px hit area.

Check that the pill's left edge clears every carton top. On Olie and Serum the cartons start at y≈443 against a pill bottom of ≈398, so this is fine.
BRAND/COPY VIOLATIONS: Product truth: the free CBD Lip Balm is still a generated render. It is captioned 'illustration', but it must be replaced with the real 6 ml packshot or signed off by the client before launch. | Product presentation: UI chrome sits on product on mobile. The −25% flag touches the Dagcreme and Natcreme caps and the Bodylotion crimp, and the gift tag covers the Lip Balm cap on both breakpoints. | Legal (confirm with client): 'Enkeltvis til førpriser 1.646 kr.' is acceptable wording, but NatureCell must confirm that each single's listed førpris (299/399/449/499) is its true lowest price in the 30 days before Black Week, since the bundle claim rests on them.
BUGS: Mobile 390px: the −25% flag overlaps the pack on Dagcreme, Natcreme and Bodylotion (by about 5–9 CSS px) and kisses the Serum pump (about 4px clearance). The cause is phone stage headroom: --dl-top-u:.1 gives about 19.5px, while the flag ends at 31px. | The gift value tag overlaps the Lip Balm stick's cap: about 6px of a 22px-wide stick on desktop, and its corner over the cap on mobile. | The gift lip-balm lipShot box is a placeholder [1000,1000,0,0,1000,1000]. When a real packshot lands without a measured alpha box, it will not sit on the shared floor at the truthful 0.32 height.
CONSOLE ERRORS: none
BLIND JUDGE: preferred YOUR section (confidence 6/10; desktop winner yours, mobile winner yours).
What the judge liked about yours: Clearest offer of the two. The eyebrow gives the deadline ('til og med 30. november'), the two-line serif headline with the italic '25% billigere' reads as a confident price promise, and the subline answers the main checkout worry ('trækkes automatisk i kurven, så du behøver ingen kode') and widens the offer to Sampakker. | The bundle cards argue the deal properly. Each shows the 'Førpris pr. produkt' chips (299 + 399 + 449 + 499), 'Enkeltvis til førpriser 1.646 kr.' and 'Enkeltvis i Black Week 1.234 kr.', with '335 kr. billigere end købt enkeltvis' highlighted. That gives a reason to trade up to the 899 kr. bundle rather than one cream, which is the AOV lever this section exists for. | The numbered RENS / DAG / NAT / OLIE labels under the bundle photos make the routine readable at a glance, and the photo stays clean. | The gift card is a crafted object. A hang-tag says 'VÆRDI 79 kr.' and a threshold meter marks FRI FRAGT 399 kr. and GAVE 699 kr., which makes the free-gift mechanic concrete and nudges baskets past 699. The note 'Komplet Pakken (899 kr.) udløser gaven alene' and the 'Se Komplet Pakken' CTA lead straight to the highest-value item. | Trust and compliance are covered. The trust row (fri fragt over 399 kr., e-mærket webshop, 14 dages fortrydelsesret) and the dated førpris footnote ('laveste pris i de 30 dage før Black Week… til og med mandag 30. november 2026 kl. 23.59') raise credibility and meet Danish price-marketing rules. | Every single product shows the actual bottle, tube or dropper next to its carton. The 'Vidunder Olien' hero SKU is shown as a product, not just a box. | Mobile puts the offer first. On the Komplet Pakken card, the gift line, the savings line, 899 kr. and a full-width icon CTA all come before the breakdown, so the first buy button appears sooner than on B. All four filter chips fit at 390px. | The motion is a quiet light sweep across the card imagery: it adds sheen without distracting, and it suits a premium skincare brand.
What the judge liked about the competitor: Prettier and more editorial at first glance. The headline is larger and calmer on one line, tiles are borderless with warm tonal backgrounds, products are photographed bigger and fill their frames, and the grid breathes. On pure taste it looks more premium. | Bundle cards sit on tinted panels (peach for Komplet, mint for All Day Facial) that set them apart from single SKUs without heavy borders. The 2x2 numbered contents list (Rensegel, Dagcreme, Natcreme, Hudpleje Olie) is clean. | The single-product cards are tidy and consistent: eyebrow, serif name, one line of benefit, price, savings, ghost CTA. Fewer elements per card means faster scanning. | The 'HURTIG VISNING' pill on hover is a useful interaction affordance. | On mobile the bundle hero is large and the full-width dark CTA is strong. | Weaknesses that cost it the win: CBD Hudpleje Olie (the Vidunder Olien hero) and CBD Rensegel show only the carton, so the star product has no bottle shot. The pink 'Gave' circle looks off-brand and cheap, and the gift card is mostly empty dark space. The All Day Facial card on desktop has a dead gap between image and copy and closes the grid on a weak note. Nothing explains why the bundle beats buying items separately. There is no deadline, no trust row and no '699 kr.' progress cue. The 'Sampakker' chip is cut off at the mobile edge, and the circular 'KOMPLET PAKKEN' / 'VIDUNDER OLIEN' / 'ALL DAY FACIAL' badges are too small to read and add clutter.
What the losing side must do to win (if you lost on any device, do it): Reshoot or recomposite the CBD Hudpleje Olie and CBD Rensegel tiles to show the dropper bottle and the pump bottle in front of their cartons. The hero 'Vidunder Olien' can never be a carton alone. | Add the bundle savings proof to both Sampakke cards, styled to match: 'Enkeltvis i Black Week 1.234 kr. → 899 kr. · 335 kr. billigere end købt enkeltvis' (and 860 → 645 / 215 kr. for All Day Facial), shown as one emphasised line beside the price, not a table. | Put urgency and the no-code reassurance back into the header: eyebrow 'BLACK WEEK · TIL OG MED 30. NOVEMBER' and the subline 'Rabatten trækkes automatisk i kurven – ingen kode'. | Rebuild the gift card. Remove the pink 'Gave' circle. Show the CBD Lip Balm product itself with a stated value ('Værdi 79 kr.'), a fri-fragt 399 → gave 699 threshold indicator, and fill the dark space with the product, not emptiness. Keep the tip that Komplet Pakken alone unlocks it. | Close the dead vertical gap in the All Day Facial card on desktop so copy and price sit directly under the image (or put text beside the image in a horizontal layout), and give it the same perks list (gift progress, fri fragt) as Komplet Pakken. | Add a trust strip under the grid (Fri fragt over 399 kr., e-mærket webshop, 14 dages fortrydelsesret) and the dated førpris legal footnote. | On mobile, make the filter chips fit the 390px width (shorter labels or tighter padding) or show a clear scroll fade, and move the Komplet Pakken CTA higher by putting the price and gift line before the 4-item list. | Drop or enlarge the tiny circular name badges in the image corners. They repeat the title and read as clutter. | Add a subtle ambient light sweep or sheen on the bundle imagery so the section feels alive before hover, not only the Hurtig visning pill.
