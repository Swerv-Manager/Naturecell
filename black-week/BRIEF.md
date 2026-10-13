# NatureCell® Black Week 2026 – creative brief & build contract

Every agent working on this mockup reads this file first. It is the single source of truth.

## The goal

A Black Week homepage for **naturecell.dk** that converts like the best pop-culture e-commerce brands
(SKIMS, Glossier, Rhode, Gymshark, Aesop drops) and looks *more* crafted than any of them – AAA polish in
every detail: type, spacing, textures, light, motion, physics, micro-interactions, mobile – while being
unmistakably **NatureCell®**: calm, exclusive, natural, Danish, honest. Built with **Three.js** for the
hero moments.

## Creative concept: "Black Week – i ro og mag"

Black Week is normally loud. NatureCell® is the calm, trustworthy Danish alternative. The page turns that
tension into the idea: **the quietest, most beautiful Black Week in Denmark**. The "black" of Black Week is
NatureCell's own **night green** (`--sage-900 #28403b`, raised `--sage-800 #324e48`), never pure black.
Dark night-green panels with a matte paper grain alternate with warm paper (`--paper #f6f4ee`) sections.
Light in the 3D scenes is soft, warm, early-evening Nordic light. Motion is **viscous, oil-like and damped**
(think a drop of skin oil, a bubble rising slowly through serum) – physics that feels premium, never bouncy,
never springy, never spectacle-parallax.

Signature elements:
- **Amber glass + sage label** – the real product family (amber dropper bottles, sage cartons, white
  airless pumps with sage labels). The packshots in `assets/products/` are transparent WebP.
- **Bobler (bubbles)** – flat brand-colour discs carrying a claim/price; never rotated. In 3D they may
  become soft glass/oil spheres (decorative, no text) drifting with buoyancy.
- **Threads** – one thin diagonal hairline in mauve/pink/sand/sage per composition (packaging reference).
- **Dotted feature lines** – any line pinpointing a product feature is dashed/dotted, never solid.
- **The bindrune mark** (logo mark) – protection & resilience. Never call it a leaf/tree/plant.

## Campaign facts (use exactly these)

- Black Week runs **mandag 23. – mandag 30. november 2026**, ends **30. november kl. 23.59**.
- The mockup simulates "now" = **fredag 27. november 2026 kl. 10.00** (Black Friday); `ctx.clock.now()` ticks from there.
- **25% på hele hudplejeserien** – singles and Sampakker (automatic, no code). This is a *proposal*.
- **Gratis CBD Lip Balm (værdi 79 kr.) ved køb over 699 kr.**
- **Fri fragt over 399 kr.** (existing NatureCell offer)
- Products & prices: `src/core/data.js` (`ctx.products`, `ctx.byId`). Show Black Week price + `Førpris 499 kr.`
  (the Danish § 9 a wording – førpris = lowest price in the prior 30 days). Never invent other prices.
- CBD drops/extracts and the love lubricant are **not** part of this page.
- Trust facts that are TRUE and may be used: *Danmarks første godkendte CBD-hudpleje* (approved 2019),
  *e-mærket webshop*, *dansk virksomhed*, *testet til under 0,2% THC – analysecertifikat pr. parti*,
  *vegansk*, *uden syntetisk parfume*, *til alle hudtyper*, *GMP/ISO-certificeret olieproduktion*,
  family-run, 14 dages fortrydelsesret (Danish law).
- Do **not** invent statistics (no "50.000 tilfredse kunder", no review counts, no star averages, no
  "kun 3 tilbage", no fake stock or fake "X ser på dette nu"). Honest urgency only: the real end date.
- Customer stories: real NatureCell kundecase names are Annette, Christian, Pia, Jan, Mai-Britt, Luna.
  Quotes are **mockup stand-ins** to be replaced with verbatim kundecase quotes; keep them modest,
  first-person, compliant (no treatment claims, nothing about warts/sun damage/skin cancer).

## Copy rules (non-negotiable – NatureCell BrandGuide + Danish law)

- Danish, sentence case, "du/dig" + "vi/vores". Warm, calm, grown-up, never hype, no slang, no emoji.
- Always **NatureCell®** with ® (at least first + prominent mentions).
- Dashes: always spaced en-dash ` – `, **never** em-dash `—`.
- Cosmetic language only. NEVER: behandler, helbreder, kurerer, lindrer, eksem, hudlidelser, medicin-like
  claims. OK: "giver intensiv fugtighed til tør hud", "beskytter mod udtørring", "hjælper med at
  opretholde en jævn og velplejet hud", "efterlader huden blød".
- Correct package names: **Komplet Pakken**, **All Day Facial**, **Vidunder Olien** (= the 1000 mg oil).
- The website disclaimer must appear (footer), verbatim:
  "Disclaimer: Vores produkter er hudpleje, ikke medicin. Individuelle resultater kan variere, og vi
  garanterer ikke samme effekt som beskrevet i kundehistorien. Anvend ikke vores produkter som erstatning
  for medicinsk behandling. Konsultér altid en sundhedsprofessionel ved sundhedsrelaterede bekymringer."
- Commerce microcopy: `Læg i kurv`, `Hurtig visning`, `Spar 125 kr.`, `Fri fragt over 399 kr.`, `Udsolgt`.

## Visual system (from the NatureCell design system – `ds/`)

- Tokens: `src/core/00-tokens.css` (all `--sage-*`, `--paper`, `--sand-*`, `--accent-*`, spacing, radii,
  shadows). Use tokens, never ad-hoc hex values outside the palette. Colour weighting: greens + neutrals
  dominate; pink/mauve/berry only as small accents. Sale flags = berry `--accent-berry #84334e`.
- Type: **Philosopher** for headlines and editorial quotes (italic for quotes); **Roboto Flex** for
  everything else (eyebrows uppercase 0.12em semibold). Self-hosted in `assets/fonts`.
- Shared components (`src/core/02-components.css`): `.nc-btn` (+ `--light --outline --outline-light --lg`),
  `.nc-price`, `.nc-bubble--sale/pink/sage/sand`, `.nc-chip`, `.nc-card`, `.nc-dotline`, `.nc-section`,
  `.nc-section__head/__title/__lead`, `.on-night`, `.nc-grain`, `.nc-container` (max 1240px). USE THEM.
  You may extend them inside your section's CSS (scoped to your section) but keep the same language.
- Logo: only white, sage `#80A097` or stone `#8C8F8F` (`assets/logo-*-white|sage|stone.svg`). Never dark.
- Badges/icons: `assets/badges/*.svg` (sampakke + claim bobler), `assets/icons/*.svg` (pil arrows,
  stars, hearts, quote marks), `assets/seals/*.png` (Danish seals). Directional arrows = the `pil*`
  arrows, not generic ones. UI affordance icons: inline stroke SVG, 1.75px, round caps, currentColor.
- Radii: 12px default, 18px cards/media, pills for buttons/chips. Shadows soft, green-tinted, low.
- Product shadows consistent in direction/softness across the page; relative product sizes truthful.
- Accessibility: real `<button>`/`<a href>`/`<input>`+`<label>`, focus-visible, aria-labels on icon
  buttons, text contrast ≥ 4.5:1, touch targets ≥ 44px, `prefers-reduced-motion` respected.
- Must be flawless at **1440px desktop and 390px mobile** (no horizontal scroll, nothing clipped).

## Build contract (how the code is organised)

```
black-week/
  sections.json                 order of sections on the page
  src/index.template.html       page shell
  src/core/                     tokens, fonts, base, components (CSS) + core.js, data.js, three-utils.js
  src/sections/<id>/<id>.html   the section markup: ONE root element with data-section="<id>"
  src/sections/<id>/<id>.css    section CSS – every selector scoped under [data-section="<id>"] or a
                                .<id>- prefixed class
  src/sections/<id>/<id>.js     export default function init(root, ctx) { ... }  (optional; may import
                                'three' and 'three/examples/jsm/...', and ../../core/*.js)
  assets/                       images/fonts – reference from HTML/CSS as ../assets/… (relative to dist/),
                                from JS as ctx.asset('products/skin-oil.webp')
```

- **Only edit files inside your own `src/sections/<id>/` folder** (other agents work in parallel). If you
  truly need a shared change, describe it in your final report instead of making it.
- Build your section alone: `node tools/build.mjs --only <id>` → `dist/preview-<id>.html`.
- Screenshot: `node tools/shoot.mjs preview-<id>.html shots/<id>/work --el '[data-section="<id>"]' --frames 2`
  (desktop 1440×900 and mobile 390×844 @2x, WebGL via SwiftShader – slow but real). Read the PNGs to
  look at your work. Add `--query open=1` / `--click <sel>` / `--hover <sel>` to stage states.
- `ctx` = `{ store, clock, fmt, products, byId, campaign, asset, prefersReducedMotion, isMobile }`.
  `store.add(id, qty)`, `store.on((type, detail, state) => …)` with events `cart:add`, `cart:change`,
  `cart:open`; `store.count()`, `store.subtotal()`; `store.openCart()`. `fmt.kr(374)` → `374 kr.`
- Reveal-on-scroll: put `data-reveal` on elements (core adds `.is-in`). Keep it subtle (≤14px, fades).
- WebGL: one renderer per 3D section, `antialias: true`, DPR capped at 2 (`three-utils.js dpr()`),
  pause the render loop when off-screen (`visibilityGate`), handle resize, provide a static fallback
  (packshot image) if WebGL is unavailable, and keep it smooth (target 60fps on a laptop). No external
  network: no CDN models/HDRIs – build environments procedurally (RoomEnvironment, canvas textures,
  custom shaders). three@0.170 is installed.
- Section order / ids: see "Page structure (v2)" below.

## Page structure (v2) – the live theme + three Black Week sections

The page is the **live naturecell.dk homepage** (Swerv's custom NatureCell theme, source in `theme-src/`,
synced from the live theme 13-10-2026) with a Black Week takeover. Everything is the theme's **standard
sections, ported 1:1**, except three bespoke Black Week sections:

| order | id | what |
|---|---|---|
| 1 | `theme-header` | theme `nc-header` (announcement bar text = Black Week message) |
| 2 | **`hero`** | **Black Week hero (Three.js)** – replaces `nc-hero` |
| 3 | **`offers`** | **3-column Black Week offer highlight grid** (new) |
| 4 | `theme-trust-bar` | theme `nc-trust-bar` (trust2 items) |
| 5 | **`deals`** | **Black Week product grid** – replaces `nc-bestsellers` |
| 6 | `theme-shop-tabs` | theme `nc-shop-tabs` |
| 7 | `theme-trust` | theme `nc-trust-bar` (with Trustpilot block) |
| 8 | `theme-lifestyle` | theme `nc-lifestyle` |
| 9 | `theme-press` | theme `nc-press` |
| 10 | `theme-cases` | theme `nc-cases-teaser` |
| 11 | `theme-testimonials` | theme `nc-testimonials` |
| 12 | `theme-story` | theme `nc-story` |
| 13 | `theme-footer` | theme `nc-footer` |
| 14 | `theme-cart` | theme `nc-cart-drawer` (wired to `ctx.store`) |

- Global CSS = the theme's own `src/core/03-theme.css` (copy of `theme-src/assets/nc-theme.css`, asset urls →
  `../assets/theme/`). Theme images/fonts/video are in `assets/theme/`. Theme section settings/content come from
  `theme-src/templates/index.json`, `theme-src/sections/header-group.json`, `footer-group.json`.
- The three Black Week sections get `data-bw` on their root automatically (build step); the Black Week component
  layer (`02-components.css`: `.nc-btn` variants, `.nc-bubble`, `.nc-price`, …) is scoped to `[data-bw]`, so the
  theme sections keep exactly the live theme's look. Black Week sections should *harmonise* with the theme
  (same container width/gutters as the theme's `.nc-container`, same type scale feel, same button language),
  while being the spectacular part of the page.
- Truthful claims already used on the live site may be reused (Trustpilot 4,7 / 615 anmeldelser pr.
  07-10-2026, "7.000+ kunder", "Første danske CBD hudpleje · 2019", GMP- & ISO-certificeret, e-mærket).
