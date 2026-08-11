# NatureCell.dc.html → Shopify theme: implementation map

Source of truth: design-src/extracted/ (component.js = data/behavior, shell.html = markup+CSS,
_ds_bundle.js = design system, article-bodies.js = article HTML, NC*.dc.html = sub-components,
resources/ = images+fonts, img-map.json = asset path → resource id).
Bundle renders in browser (serve design bundle HTML, React included) — use for screenshots.

## Real design tokens (from _applyPalette/_applyFeel — OVERRIDES the provisional scaffold tokens)

--sage-500: #80A097 (container green, hero bg, PDP band, case hero/cta, story strip; Pantone 624)
--sage-600: #657D79 (hover green)
--sage-700: #3E5D58 (text green / headings; Pantone 5477)
--sage-50:  #E6ECEA (soft green; lifestyle/testimonials/reviews bg)
--sage-100: #D9E3E0 (pale green)
--ink-700:  #516D69 (body text)
--ink-500:  #788E8A (muted text)
--paper:    #F6F4EE (page bg)  ·  --paper-2: #FBFAF5  ·  --cloud: #FFFFFF (cards)
--accent-berry: #84334E  ·  pink #F9B5C4  ·  sand-500 #DDBFA3, sand-100 #F4ECE3
--linen-500 #D5D1C3, linen-100 #F1EFE8  ·  stone-500 #8C8F8F  ·  Ink 900 #233330
--nc-announce: #3E5D58 (announcement bar)
Footer: bg #80A097 (lighter green!), text/links WHITE (luminance rule), dim rgba(255,255,255,0.88),
border rgba(246,244,238,0.4), input bg rgba(255,255,255,0.12)
Section bgs: trust #F2F6F5 · lifestyle #E6ECEA · bestsellers #F2F6F5 · testimonials #E6ECEA ·
foundervid #F2F6F5 · founder #F2F6F5 · reviews #E6ECEA · hero/story/pdpband/casehero/casecta #80A097
Product media tint: color-mix(in srgb, #3E5D58 10%, #FFFFFF)
Radii ("Blød" default): sm 8px · md 12px · lg 18px · xl 24px · pill 999px
Motion "Balanceret": rail marquee 60s, hero autoplay 7000ms, USP ticker 3000ms
Image mood "Naturlig": no filter. prefers-reduced-motion: pause everything.
Fonts: Philosopher (display) + Roboto Flex (body) — woff2 embedded in resources/ (26 files)

## Site structure (routes → Shopify)

home → templates/index.json: hero carousel (4 slides, autoplay 7s, dots) · trust marquee (4 items × loop) ·
  shop by area/need tabs (6 areas: ansigt/haender/krop/foedder/haar/intim; 6 needs: toer/fugt/moden/sensitiv/uren/genopbygning) ·
  bestsellers rail (8: skin-oil, complete, day-cream, serum, night-cream, drops-1000, body-lotion, all-day-facial) ·
  lifestyle band (3 imgs w/ defaults) · kundecases teaser rail (10) · testimonials 2 rows · press loop ·
  story strip (timeline 2018/2019/2021/2026 → milestone pages) · USP ticker
collection → collection template: chips (Alle+6 areas / 6 needs / ing chips), Herre chip, Tilbud chip, search,
  bundles first, SEO bottom: h+paras (per key), 3 seo blocks, FAQ (2 cols), seo links, men banner img
product → PDP: gallery+thumbs · eyebrow/name/size · rating · bullets · claim badges (assets/badges/*.svg via _ds?) ·
  qty tiers (1/2/3: -0%/-10%/-15%) · add to cart · accordion (beskrivelse/brug/ingred) · USP band (marquee, sage-500) ·
  2 story blocks (PSTORY t1/t2 + desc/usage, images alternate) · founder video (Lizbeth, foundervid bg) ·
  ingredient rail (per-product, links to /pages/ingredienser) · customer video rail (4 YT) · reviews 2-row marquee ·
  FAQ · related rail · mobile sticky buy bar
cases → blog 'kundecases' list: chips all/ansigt/haender/foedder + search; card: img, areaLabel chip, who, title
case → article in blog kundecases: hero (sage-500), facts (område/alder/produkter/format), quote, YT video embed,
  editorial blocks, product CTA (products in routine, add-all), fills
articles → blog 'artikler': featured (first) + grid, tag chips (from article tags), search
article → article template: body from article-bodies.js (already in store), more-articles by tag
about → page: hero, aboutStats (2019/Vegansk/100%/4.8-5 · 2143 Trustpilot), timeline → milestone pages, founders
milestone (4) → pages or section on about? → implement as page template w/ section (2018/2019/2021/2026) content in section settings/blocks
omcbd → page 'om-cbd': cbdSkinTypes tabs (8), cbdProps tabs (7, dark bg), CTA complete
ingredients → page 'ingredienser': search + chip nav + full list (15 ingredients, alternating row/row-reverse, cloud/paper-2)
faq → page 'faq': 6 groups (CBD & lovgivning / Produkter & brug / Ingredienser & kvalitet / Levering & returnering / Butik & kontakt / Kundeklub & B2B)
kontakt → page: 4 blocks (kundeservice/telefon/butik Lille Nyhavn 4-7/CVR-adresse) + openingRows (ma-fr 10-17.30, lø 10-15, søn lukket)
kundeklub → page: 4 perks (points, 10% velkomst, fødselsdagsgave, tidlig adgang) + 3 steps + signup
gavekort → gift card product page (values 200/300/500/1000)
quiz → page w/ interactive section (intro → area → need → result: top 3 by rating, filters areas/needs)
b2b → page (b2bPerks ×4, login CTA)  ·  forhandlere → page (forhandlerList ×4)
vilkaar → page (6 sections)  ·  privatliv → page (6 sections)
search → global search (products+articles+cases) — Shopify search template covers; predictive later
konto → customer account (kontoPerks)  ·  favoritter → localStorage favs (nc_favs; nc-favs-changed event)

## Commerce mechanics in design

- Qty tier discount: 2 stk -10%, 3+ -15% (design prototype!). Shopify: DO NOT hardcode price math in theme;
  render tier UI selector but price from Shopify. Volume discount needs a Shopify discount/function — OUT OF THEME SCOPE.
  → Keep tier selector visually (settings-toggleable, default ON per design), label "Spar 10/15%" text from settings; cart math stays Shopify's.
- Cart drawer: free-ship progress to 399 kr, savings line, qty steppers. Implement w/ Cart AJAX API.
- Favorites: localStorage, heart on product cards (NCProductCard sub-component) + favoritter page.
- Ratings shown as "4,8/5 · 126 anmeldelser" — from metafields if present (reviews app later), else section default/hidden.

## Store mapping (fill in after recon)

- Theme "Swerv // Nyt tema (under udvikling)" ID: ?
- Collections: alle produkter=?, ansigt/krop/haender/foedder/haar/intim=?, sampakker=?, cbd-drops=?, herre (alfalab)=?, tilbud=?
- Blogs: kundecases=?, artikler=?
- Menu handles: main-menu, footer
- Metafields to read (optional, fallback gracefully): nc.bullets, nc.areas, nc.needs, nc.claims, nc.usage, nc.rating, nc.rating_count

## Files/assets to ship in theme

- assets/: logo-wordmark.webp (r2), logo-wordmark-white.png (r1), founders.jpg (r0), lovens-hule.jpg (r3),
  badges svg? (referenced as assets/badges/<claim>.svg — check resources), Philosopher+RobotoFlex woff2 (self-host option),
  video 4ae916f6-video.mp4 (hero/founder video? locate usage in shell)
- Product/collection/article imagery = Shopify CDN URLs already in store — themes reference store objects, not hardcoded URLs (defaults in settings may use CDN URLs where needed, e.g. lifestyle band, milestone images).

## Compliance guardrails (brand profile · router)

- No auto "SPAR X%" from theme math; only render Shopify compare_at strikethrough + design's save-label from PRODUCT data (store-controlled).
- Footer disclaimer fixed-default: "NatureCells produkter er ikke medicin og kan ikke diagnosticere, behandle eller kurere sygdomme."
- Reviews/ratings only where store data exists; design's sample reviews = placeholder defaults marked editable, client-approved design copy.

## Build order

1. assets/nc-theme.css rewrite w/ real tokens + fonts self-host
2. nc-header (announce ticker w/ 5 USPs? design: announcement bar + USP ticker home-only? check shell) + mega menu (tabs area/need/best) + cart drawer + mobile nav
3. nc-footer (sage-500, 4 menus: Shop/Om NatureCell/Kundeservice/Erhverv + newsletter + payments + disclaimer)
4. home sections (hero, trust marquee, shop tabs, bestsellers, lifestyle, cases teaser, testimonials, press, story, usp ticker)
5. PDP main + sub-sections; product-card snippet w/ favorites + hover img + rating + save badge
6. collection template + filters (tag-based links) + SEO bottom section
7. cases/case (blog templates styled per design)
8. articles/article
9. pages: about, milestones ×4, omcbd, ingredienser, faq, kontakt, kundeklub, quiz, b2b, forhandlere, vilkaar, privatliv
10. cart page + drawer, search, customer account styling, gift card
11. theme-check → push → Shopify themeFilesUpsert (verify store!) → verify → changelog
