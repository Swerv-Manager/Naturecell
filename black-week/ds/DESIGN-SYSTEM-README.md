# NatureCell Denmark — Design System

> Calm, Nordic, exclusive. The visual language of Denmark's first approved CBD
> skincare brand — built for honest storytelling, not hype.
> Built against **Brand Identity V10 06.2026** + the 05.2026 creative checklist.

This project is a **design system**: tokens, foundations, reusable React
components, and full UI-kit recreations of the NatureCell webshop, all driven by
a single global stylesheet (`styles.css`). Consuming projects link that one file
and pull components from the compiled bundle.

---

## 1. Company & product context

**NatureCell Denmark** (naturecell.dk) is a Danish direct-to-consumer skincare
brand built around **CBD (cannabidiol)**. It was the **first CBD skincare line
approved for sale in Denmark** (regulatory approvals secured in 2019 from
Miljøstyrelsen and the medical sector). The brand is family-run, with roots tied
to Møllerup Gods, and gained public attention after taking investment from
"Løvernes Hule" investor Jesper Buch.

**Positioning pillars**

- **Plant-based & natural** — CBD plus glycerin, almond oil, hemp oil, squalane,
  aloe vera, shea, cucumber extract. Vegan, no synthetic fragrance.
- **Honest, regulation-respecting** — every batch tested to <0.2% THC with an
  analysis certificate. They explicitly *do not promise miracles*; marketing
  leans on real, named customer stories (kundecases) with photos/video.
- **Danish trust signals** — e-mærket certified webshop, GMP/ISO-certified oil
  production, Danish manufacturing and testing.
- **One-size-fits-all** — the range is pitched as suitable for *all* skin types
  (dry, oily, combination, mature, sensitive, blemish-prone).

**Product range** (prices in DKK)

| Product | Note |
|---|---|
| CBD Hudpleje Olie 1000mg – 30ml | 499 kr — hero product |
| CBD Dagcreme – 50ml | 399 kr |
| CBD Natcreme – 50ml | 449 kr |
| CBD Rensegel – 100ml | 299 kr |
| CBD Hyaluronic Serum – 30ml | 299 kr |
| Bodylotion med CBD – 200ml | 249 kr |
| Håndcreme med CBD – 100ml | 249 kr |
| CBD Lip Balm | 79 kr |
| CBD Deodorant | 129 kr |
| CBD Body Oil – 100ml | 299 kr |
| CBD Re-New Balm | 369 kr |
| CBD Love Lubricant – 30ml | 129 kr |
| Shampoo / Conditioner | hair care line |
| **CBD Drops / Extract** 5% · 10% · 15% · 20% (199–599 kr) | "CBD CARE" kraft-brown sub-line |
| **Sampakker** (bundles): Komplet CBD Hudpleje, All Day Facial, Hånd-Sampakke, Startpakke PLUS, Jesper Buch Pakken | bundle savings, "SPAR %" flags |

Customer-facing language is **Danish**. There is an English/EU storefront
(`/da-eu/`) and the on-pack copy is **English** ("CBD SKIN CARE", "For all skin
types", "Contains natural & organic ingredients").

**Tagline:** *“– bringer din hud i balance –”* (used on business cards and
collateral, set in Philosopher, flanked by en-dashes).

### Target audience (BrandGuide V10)

**Primary: women 45+** who want uniquely formulated, high-quality skincare that
is gentle *and* economically sensible. They choose products that care for
**mature skin**, and they value **transparency and reassurance** (tryghed).

**Secondary: the whole family** — the products are gentle enough for men, women
and teens:
- The shampoo is popular with men too.
- The creams support mature skin *and* young skin prone to blemishes, because
  harmful ingredients are avoided.
- Many customers buy for the entire household.

> Communicate with **focus on women 45+**, but in a way that also appeals more
> broadly when relevant. Never let the wider mention change the overall tone.

### Sources given to build this system
- **`NatureCell Brand Identity V10 06.2026.pdf`** — the official BrandGuide
  (colour spectra with PMS/CMYK/RGB/HEX + 100/75/50 tints, fonts, primary &
  secondary logo, brand icon symbolism, target groups, tone of voice, legal
  compliance, photo gallery, website, newsletter, social, print collateral).
  Kept at `uploads/`.
- **`NatureCell Tjekliste 0526-1.pdf`** — the pre-publish creative checklist
  (colour weighting, logo placement, bubbles, dotted lines, safe zone).
  Kept at `uploads/`.
- **Official logo vectors** — `NatureCell_Logo Sekundært R White.svg` (+ PMS 877
  raster), split into `assets/logo-{lockup,mark,wordmark}-*.svg`.
- **Official icon archive** (Drive › `17U9F0gEc66hxWQgBb3xzpklwSJJB7fY2`) — 40
  SVG/PNG badges, seals, arrows, stars, hearts, quotes, bubbles.
- **18 product packshots** (`uploads/…webp`, copied into `assets/products/`).
- **Live site research**: `naturecell.dk` (home, `/collections/cbd-hudpleje`,
  product + kundecase/article pages) for copy, tone, product names, prices.
- **No codebase or Figma** was provided. The webshop is Shopify-based
  (`/collections/…`, "HURTIG VISNING" quick-view). UI-kit screens are
  faithful *recreations* from the packaging system + site structure, not
  imports of production code.

---

## 2. Content fundamentals — how NatureCell writes

**Language:** Danish for all storefront/marketing; English on packaging.

**Voice:** warm, calm, grown-up, trustworthy. The opposite of "wellness hype."
Reads like a thoughtful Danish founder talking honestly to a customer.

**Person:** addresses the reader as **"du / dig"** (informal you); speaks as
**"vi / vores"** (we). E.g. *"Vi lover ikke mirakler – vi lader vores kunder
fortælle om deres egne oplevelser."*

**Honesty as a brand mechanic.** Copy is legally careful and proud of it.
Recurring moves:
- *"Vi lover ikke mirakler"* (we don't promise miracles)
- *"Resultater kan variere fra person til person"*
- *"NatureCell's hudplejeprodukter er kosmetiske. De er ikke beregnet til at
  diagnosticere, behandle eller kurere sygdom."*
- Trust stamps stated plainly: *first approved in Denmark*, *e-mærket*,
  *GMP/ISO*, *<0,2% THC, analysecertifikat pr. parti*.

**Casing:** Sentence case for body and headings in Danish. Packaging eyebrows
are **UPPERCASE, letter-spaced** ("CBD SKIN CARE", "DENMARK"). Product titles on
pack are uppercase ("DAY CREAM", "CBD DROPS").

**Eyebrows / labels** (pulled from packs): `CBD SKIN CARE`, `CBD CARE`,
`For all skin types`, `Contains natural & organic ingredients`, volume as
`50 ml/1,7 oz e`. Strength as `1000 mg`, `10%`.

**Storytelling:** the strongest content is **named customer cases** (Annette,
Christian, Pia, Jan, Mai-Britt, Luna) — first-person, specific, never
exaggerated, often with before/after framing handled tastefully. Quote them in
the serif editorial style.

**Commerce microcopy:** `HURTIG VISNING` (quick view), `SPAR 27%` (save),
`UDSOLGT` (sold out), `Fri fragt over 399 kr.`, `Tilføj til kurv`,
`Udforsk efter behov` (shop by need), `BLIV MEDLEM` (kundeklub/loyalty points).

**Emoji:** none. Not part of the brand voice.

**BrandGuide writing rules (must-follow):**
- **Always write `NatureCell®`** with the registered mark — in every text, the
  first and ideally each prominent mention. (HUSK R.)
- **Dashes: always a short en-dash `–`** (with spaces) — never the long em-dash
  `—`. It reads more elegantly and less "AI-generated". E.g. *"Naturlig pleje –
  ægte resultater"*.
- **Use the correct package names** from the NatureCell® universe — e.g.
  **Komplet Pakken**, **All Day Facial**, **All Day Skin Care**, **Hånd
  Sampakken**, **Fod Sampakken**, **Vidunder Olien**, **Vidunder Krukken** (see
  `assets/badges/`). Don't invent descriptive substitutes.

### The twelve tone-of-voice traits (BrandGuide V10)

NatureCell® speaks **warm, credible and professional**. Not a big impersonal
beauty brand — a Danish company that prioritises customer satisfaction,
reassurance and Danish quality. Friendly, down-to-earth, engaged; informing and
guiding **without exaggerating or pressuring**.

| Trait | What it means in practice |
|---|---|
| **Varm & inkluderende** | Meet customers at eye level, never overtly sales-driven. |
| **Omsorgsfuld & troværdig** | Show understanding for women's skincare needs; genuine care. |
| **Dansk kvalitet & ansvarlighed** | Highlight being a Danish company that cares about safety, environment, transparency. |
| **Kunden i centrum** | Speak to real needs; guide the routine without lecturing. |
| **Bred anvendelighed** | Make clear products suit women, men and teens — without losing the primary focus. |
| **Økonomisk omtanke** | Respect that many customers (especially pensioners) want quality without spending a fortune. |
| **Juridisk korrekt & ansvarlig** | Every message complies with the law (see §2b). |
| **Personlig, men ikke privat** | Use "du" and "vi" to create conversation and community. |
| **Empatisk & løsningsorienteret** | Listen; give simple, usable answers. |
| **Enkel & overskuelig** | Avoid needlessly difficult words and long explanations. |
| **Ærligt & autentisk** | Never overstate effect. Only promise what can be documented. |
| **Ikke for trendy eller ungdommelig** | No slang, no overly "smart" language. Mature, elegant, timeless. |

---

## 2b. Legal & compliant communication — NON-NEGOTIABLE

NatureCell® products are **supportive skincare, not medicine**. All ads and
marketing must comply with **anprisningsloven**, **markedsføringsloven** and the
**Forbrugerombudsmandens** guidelines.

**Hard rules**
- **Never** imply the products can treat, prevent or cure disease.
- **Never** use words or phrasing that make products look like medical solutions.
- Only highlight **documented** properties; all descriptions must be
  cosmetically correct and documentable.
- All marketing must clearly communicate that the products are **cosmetic and
  have no medical effect**.

**Legal vs. illegal phrasing**

| ✅ Legal | ❌ Illegal |
|---|---|
| "Giver intensiv fugtighed til tør hud, beskytter mod udtørring og hjælper med at opretholde en jævn og velplejet hud" | "Vores creme behandler tør hud og eksem!" |
| "Reducerer synligheden af pigmentpletter" | "Slip af med hudproblemer for altid med vores creme!" |
| "Understøtter en ensartet hudfarve" / "Hjælper med at opretholde en jævn hudtone" | "Vores revolutionerende creme behandler tør hud og hudirritation!" |
| "Bidrager til hudens æstetiske ensartethed" / "Reducerer synligheden af ar" | "Vores creme lindrer hudlidelser og bekæmper eksem!" |

**Approved formulations by topic**
- **Sun exposure:** *"Efter en dag i solen vil CBD hjælpe med at opretholde en
  velplejet hud og bidrage til en mere jævn, balanceret, fugtig og rolig hud."*
  Never "solskadet hud".
- **Pigment spots:** "Reducerer synligheden af pigmentpletter", "Understøtter en
  ensartet hudfarve". May *mention* pigment spots — may not say they're treated.
- **Dry skin:** "Giver intensiv fugtighed til tør hud", "Beskytter mod udtørring".
  May mention dry skin — may not say it's treated.
- **Warts:** "Hjælper med at opretholde en ren og sund hud", "… en glat
  hudtekstur", "Bidrager til optimal hudhygiejne". **No customer cases about
  warts.**
- **Scars:** "Reducerer synligheden af ar", "Bidrager til en mere ensartet
  hudoverflade". Never "fjerner" or "behandler" scars.
- **Sun damage / skin cancer:** **no customer cases at all**, and never market
  that doctors confirm improvements.
- **Whole family:** *"Vores milde shampoo er produceret uden unødvendige
  ingredienser og kan bruges af hele familien – både kvinder, mænd og unge, der
  ønsker en skånsom hårpleje."*

**Mandatory disclaimers — paste verbatim**

Website / newsletter (always last in the text):

> Disclaimer: Vores produkter er hudpleje, ikke medicin. Individuelle resultater
> kan variere, og vi garanterer ikke samme effekt som beskrevet i
> kundehistorien. Anvend ikke vores produkter som erstatning for medicinsk
> behandling. Konsultér altid en sundhedsprofessionel ved sundhedsrelaterede
> bekymringer.

Meta / Google ads with customer cases (always last):

> Disclaimer: Dette er en personlig oplevelse delt af en kunde og er ikke en
> garanti for samme resultat. Vores produkter er baseret på naturlige
> ingredienser og er udviklet til almindelig hudpleje – ikke til behandling af
> sygdomme. Har du hudproblemer eller andre helbredsmæssige bekymringer,
> anbefaler vi, at du kontakter en sundhedsprofessionel.

See `guidelines/compliance.md` for the full reference.

---

## 3. Visual foundations

**Overall feel:** Scandinavian apothecary calm — the guide's words are **rolig,
eksklusiv og naturlig** (calm, exclusive, natural). Lots of negative space, warm
off-white paper, one confident sage green, photography on clean white. Always
harmonious, airy and premium; never heavy, loud or visually cluttered.

**Colour (official BrandGuide palette).** "Vægtning af farvebrug": the calm
**greens + neutrals dominate** the field; warm/pink accents appear **only
discreetly**, for balance and focus. The hero green is **sage `#80A097`**
(`--sage-500`) with a **deep green `#3E5D58`** (`--sage-700`) for text, dark
panels and hover. Neutrals are warm and green-tinted, never stark: **stone-grey
`#8C8F8F`**, **sand `#DDBFA3`**, **light stone `#D5D1C3`**, warm paper `#F6F4EE`
and white `#FFFFFF`; text is the deep green `#3E5D58`. **Accent colours –
use sparingly:** **mauve `#B07A7F`**, **pink `#F9B5C4`**, **berry `#84334E`**
(the deepest accent; also used for sale flags). See `tokens/colors.css`.

**Bubbles & threads.** Filled **circles ("bobler") in brand colours** are used as
graphic elements to highlight product features, names or use-cases — used singly
and balanced, never dominating. Packaging also carries **one thin diagonal
hairline** per design over a low-saturation geometric field; digitally these are
hairline accents only (`--thread-mauve/-pink/-sand/-sage`), never fills.

**Typography (official).** Headlines/overskrifter are **Philosopher** (a refined
serif; Regular 400 or Bold 700). Body/brødtekst is **Roboto Flex** (Regular/Italic
or Bold/Italic). Eyebrows, badges, prices and the typeset wordmark all use Roboto
Flex; only headings and editorial pull-quotes use Philosopher (italic for quotes).
Eyebrows: uppercase, `0.12em`, semibold. Both are the brand's real faces, loaded
from Google Fonts.

**Spacing & layout.** 8px rhythm, big section breathing room (`--space-10/12`).
Content max ~1240px; editorial measure ~680px. Generous, never dense.

**Backgrounds.** Flat warm paper or pale-sage panels. Product photography sits on
**pure white**. No photographic hero textures, no noise, no heavy gradients. At
most a *very* soft sage-to-paper wash on feature panels. Packaging itself uses a
subtle matte paper texture + fine diagonal line hatching — evoke sparingly, don't
literally tile it across screens.

**Imagery vibe.** Clean, bright, neutral-to-warm. White-ground packshots; people
photography is natural, soft daylight, real (un-retouched, real customers).

**Packshot centering.** When a packshot is centered, **center on the PRODUCT
itself — the drop shadow is secondary** and must not be counted as part of the
bounding box. Crop/align so the bottle or box sits optically centered; the shadow
floats beneath it. In code, prefer pre-cropped assets, or nudge with
`object-position` so the product (not product-plus-shadow) is centered.

**Corners & cards.** Gently rounded — `--radius-md` (12px) default, `--radius-lg`
(18px) for media/feature cards, pills for buttons/chips. Cards are **white on
paper with a hairline border and a barely-there soft shadow** (`--shadow-sm`),
not heavy elevation. Calm, not floaty.

**Shadows.** Soft, diffuse, **green-tinted** (`rgba(44,70,61,…)`), low opacity.
No hard black drop shadows. Elevation is communicated more by border + paper
contrast than by shadow.

**Borders.** Hairline 1px, warm grey `--border-default`; sage hairlines on
sage surfaces. Dividers are very light.

**Feature lines are DOTTED.** Lines used to pinpoint a feature on a product must
be **dotted/dashed** (`border-style: dashed`, or a dotted SVG stroke) — never a
solid rule. This is an explicit checklist item.

**Logo placement on creatives.** Place the logo **bottom-right**, or **centred
top or bottom** — whichever suits the format and composition. Prefer the
**secondary** NatureCell® logo so the expression stays elegant and discreet and
the logo never dominates the post. A logo is **not required on every creative**
if it is already clearly visible on the products. Always respect the **safe
zone** on all sides.

**Bubbles (bobler) as graphic elements.** Brand-coloured bubbles may highlight
product features, use cases, occasions or product names. Use them **simply and
balanced**, as a supplement — never as dominating elements; colour, size and
placement must harmonise with the layout. **Never tilt a bubble carrying text.**

**Shadows must be consistent.** Across a creative, every product shadow uses the
same direction, softness and opacity — "Er Skygger ens og retvisende?" is a
checklist gate. Likewise **relative product sizes must be truthful**
("Er Størrelsesforhold retvisende?").

**Motion.** Gentle and quiet. `--ease-out` / `--ease-soft`, 140–420ms. Fades and
small (2–4px) translate-ups on reveal. **No bounce, no spring, no parallax
spectacle.** Hover = slight darken to `--sage-600` + tiny lift; press = darken to
`--sage-700` + settle (no big scale). Respect `prefers-reduced-motion`.

**Transparency / blur.** Used lightly — a paper-tinted sticky header with a small
backdrop-blur; otherwise opaque. Not a glassmorphism brand.

**Buttons.** Pill-shaped. Primary = solid sage, white text. Secondary = sage
outline on transparent. Ghost = text + sage. Calm hover/press as above.

---

## 4. Iconography

NatureCell's own materials are **type- and photo-led**; there is no proprietary
icon font in the supplied assets. The icon that matters is the **brand icon /
logo mark** — and it is **not** botanical.

### The brand icon is a Nordic bindrune (binde-rune)

Straight from the BrandGuide, in the founders' own words:

> "Hos NatureCell er vi naturligt optaget af den helende og beskyttende effekt
> vores produkter har og netop derfor er vores brand-ikon en ikonisk stærk
> **nordisk binde-rune-konstellation**. Vores brand-ikon/binde-rune symboliserer
> bl.a. **beskyttelse og modstandsdygtighed** – netop nogle af de vigtigste
> værdier der er i produkterne fra NatureCell."
> — Lizbeth & Allan, NatureCell Danmark

So: the circular geometric glyph is a **bound-rune constellation** signifying
**protection and resilience**. Never describe or caption it as a tree, leaf or
plant — and never redraw it "more botanical". The **official vector masters** were
supplied and split into clean, recolourable SVGs:

- `assets/logo-lockup-{white,sage,stone}.svg` — full lockup (mark + NatureCell® + DENMARK)
- `assets/logo-mark-{white,sage,stone}.svg` — circular mark only
- `assets/logo-wordmark-{white,sage,stone}.svg` — wordmark only
- `assets/logo-*-current.svg` — `currentColor` versions (inherit CSS `color`)

Use white on sage / green / photo; sage or stone on paper / white.

**Logo colour rule (strict).** The logo — mark *and* wordmark — may **ONLY**
appear in **white**, **sage `#80A097`**, or **stone-grey `#8C8F8F`**. **Never** in
a dark/near-black colour, and never recoloured otherwise. The wordmark always
carries the **®** (NatureCell®). These are the official vector masters — crisp at
any size; keep the mark discreet (it isn't required on every creative if the
product already reads).

**Brand decorative marks & badges (real BrandGuide artwork).** The complete
official icon set was supplied as SVG (Drive › "Grafikker" / the icon archive)
and copied into the project. Sage is **`#81a198`**; details/strokes are white
(`1.75–1.9px`, round caps). Use **sparingly, where relevant**.

*Sampakke badges* — filled sage circles naming a product bundle, in
`assets/badges/`: `komplet-pakken`, `all-day-facial`, `all-day-skin-care`,
`after-sun-skincare`, `hand-sampakken`, `fod-sampakken`, `vidunder-olien`,
`vidunder-krukken`. See `foundations/badges.html`.

*Claim badges* — sage disc + white line-icon for a product benefit, in
`assets/badges/`: `vegan-friendly`, `lab-tested`, `cbd-indhold`,
`plantebaseret-cbd`, `for-alle-skin-types`, `balancing`, `barrier-boosting`,
`mild-calming`, `moisture-softening`, `easy-absorbed`. See
`foundations/claim-badges.html`.

*Danish seals* — sage stamp-ring + Dannebrog flag (the only place the red
`#c8102e` appears), as high-res **PNG** masters in `assets/seals/`:
`dansk-produceret-seal.png`, `dansk-firma-seal.png`, `skonne-produkter-seal.png`,
plus a compact `assets/badges/dansk-firma.svg`. See `foundations/seals.html`.

*Decorative marks* — in `assets/icons/`: `pil` / `pil-bue` / `pil-snoet`
(hand-drawn arrows), `stars-3` / `stars-2` (scattered stars), `hjerte` /
`hjerter` (sage hearts), `quote-start` / `quote-end` (gåseøjne, pale sage at
40%), `check-bubble` (tjektegn-disc), `keep-upright`, `stars-rating` (4–7/5),
`velkomstrabat` (15% disc), and `tekstboble` / `check-tekstboble` (speech
bubbles). Two product-specific icon discs ship as PNG: `hyaluron.png` (Natural
Moist Booster), `multi-balm.png` (Multi Protection). See `foundations/icons.html`.

**Arrows: always use the real `pil*` arrows from the archive** — never a
generic/Lucide arrow for a directional/pointing arrow. Tint them to fit the
background (the webshop tints `pil-bue.svg` via a CSS `mask` so it can be sage,
white, etc.). Plain chevrons (back/expand affordances) may stay Lucide.

**Bubbles never tilt.** Any bubble/badge carrying a claim or text (the `bobler`
and speech bubbles) must always sit **perfectly horizontal** — never rotated,
tilted or tipped. (Decorative packaging *lines/threads* may be diagonal; bubbles
with words may not.)

> Note: each badge/icon SVG carries the fills inline (the source `<style>` blocks
> were flattened to presentation attributes — fills + white strokes — so they
> render correctly via `<img>`). The master `NatureCell Ikonsamling.ai` lives in
> the same Drive folder if vector outlines are ever needed.

For UI affordance icons (cart, search, account, chevrons, plus/minus, stars,
trust badges) we use **[Lucide](https://lucide.dev)** via CDN — a thin,
rounded-stroke open-source set whose **1.75–2px rounded strokes** match the
brand's light, calm geometry. **This is a substitution** (no UI icon set was
supplied); swap for licensed brand icons if they exist. Rules:

- Stroke icons only, `1.75px`, `currentColor`, sized 18–24px in UI.
- Colour: inherit text colour; brand-sage for active/primary affordances.
- Brand decorative marks/badges are the real SVGs above; UI affordances stay Lucide.
- **Directional arrows** always use the `pil*` archive arrows (not Lucide).
- **No emoji** in UI chrome. Use icons sparingly ("Ikoner kan bruges hvor
  relevant, men sparsomt").
- The logo mark is a brand element, **not** a UI icon — don't use it inline in
  buttons.

The wordmark is the **official vector master** (`assets/logo-*.svg`), not typeset
— see `components/brand/Logo.jsx`. Logo placement: bottom-right or centred
top/bottom; prefer the secondary mark and keep it discreet — a logo isn't
required on every creative if it's already clear on the product.

---

## 5. Index / manifest

**Root**
- `styles.css` — the single entry point (an `@import` manifest). Link this.
- `tokens.json` — the tokens (colours, type, spacing, radii, shadows, plus font sizes, weights, line heights, letter-spacing, layout widths and z-index); `tokens.css` is compiled from it.
- `components/bundle.js` — the compiled component bundle (`window.NatureCellDesignSystem_52829d`); `components/bundle.css` — the Google Fonts import, base layer, role aliases, newsletter specs and motion that `tokens.json` does not declare; `components/index.d.ts` — the component types.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills-compatible front matter for use in Claude Code.
- `thumbnail.html` — the design system's homepage tile.

**`guidelines/`** — deeper-dive prose:
- **`compliance.md`** — ⚠️ **read before writing any copy.** Legal/illegal
  phrasings, approved formulations per topic, the two mandatory disclaimers.
- `checklist.md` — the 7-point pre-publish creative checklist, colour weighting,
  logo placement, bubbles & dotted lines.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`,
`effects.css`, `base.css` (resets + text-role helpers).

**`foundations/`** — `@dsCard` specimen cards (colours + tints + weighting, type,
spacing, logo, badges, seals, icons, checklist).

**`components/<Comp>/`** — per component: `README.md` (guidelines), `<Comp>.d.ts` (types) and `preview.html` (live preview), for `Logo`, `ProductCard`, `TrustBadge`, `Badge`, `Button`, `PriceTag`, `Rating`, `Input` and `QuantityStepper`; `components/Cover/preview.html` is the cover.

**`components/`** — reusable React primitives (each: `.jsx` + `.d.ts` +
`.prompt.md` + a directory `*.card.html`):
- `brand/` — `Logo`
- `core/` — `Button`, `Badge`, `PriceTag`, `Rating`
- `forms/` — `Input`, `QuantityStepper`
- `commerce/` — `ProductCard`, `TrustBadge`

**`ui_kits/webshop/`** — full webshop recreation: `index.html` (interactive
click-through) + `Header`, `Hero`, `ProductGrid`, `ProductDetail`, `CartDrawer`,
`Footer`, `TrustBar`.

**`slides/`** — sample branded slide deck (`index.html` + slide JSX).

**`assets/`** — `logo-{lockup,mark,wordmark}-*.svg` (official vector logo), `products/*.webp` (18 packshots), `badges/*.svg` (sampakke + claim bobler), `seals/*.png` (Danish flag seals), `icons/*.svg` (pile, stjerner, hjerter, gåseøjne, tjektegn, tekstbobler).

---

### Caveats
- **Fonts are the real brand faces** — Philosopher (headlines) + Roboto Flex
  (body), per the official BrandGuide, loaded from Google Fonts. If you have the
  exact licensed files/weights, drop them in `tokens/fonts.css`.
- **UI icons are Lucide via CDN** — substitution for an affordance-icon set that
  wasn't supplied. The decorative marks + bubble badges follow the BrandGuide.
- The **logo mark** is a raster extracted from foil packaging (slightly organic
  edges); a clean vector master would be ideal if available.
- No codebase/Figma — webshop screens are recreations from packaging + live-site
  structure, not production-code imports.
