# NatureCell – nyt Shopify-tema

Dette repo indeholder det nye tema til naturecell.dk, bygget ud fra
Claude Design-projektet `NatureCell.dc.html` (godkendt af NatureCell
10. august 2026).

| | |
|---|---|
| Butik | Naturecell.dk |
| Tema i Shopify | Swerv // Nyt tema (under udvikling) |
| Udviklingsbranch | `claude/naturecell-shopify-theme-bx3dlc` |
| Designkilde | claude.ai/design, projekt `652604f6-bce4-4375-bfb3-1de9f9a09aee` |

## Status

**Implementeret og lagt op på temaet "Swerv // Nyt tema (under
udvikling)" (ID 205218971986).** Designet fra NatureCell.dc.html er
oversat 1:1: forside (hero-karrusel, trust-bar, presse-marquee, shop
efter område/behov, livsstilsbånd med ritual-video, bestsellers,
kundecases-rail, anmeldelses-marquee, historie-strib), produktside
(galleri, badges, accordion, USP-bånd, fortælling, kundevideoer, FAQ,
relaterede), kollektioner med SEO-bundtekst og FAQ, kundecases- og
artikel-blogs, samt alle undersider (FAQ, kontakt, kundeklub, quiz,
favoritter, om os med tidslinje, B2B, forhandlere). Designkilderne
ligger i `design-src/` (udpakket fra det leverede offline-bundle).

Kendte udeståender: Horizon-restfiler på temaet kan ikke slettes via
API (policy) — ryd op via admin, eller endnu bedre: forbind temaet til
GitHub-branchen, så synker den automatisk. `locales/da.default.json`
kan først lægges op, når Horizons `en.default.json` er fjernet.

## Designsystem

Tokens er hentet fra NatureCell Design System
(`naturecell-design-system-52829db1`), som allerede dokumenteret i
`sections/nc-august-campaign-banner.liquid`:

- Farver: paper `#F6F4EE`, grøn `#3E5D58`, ink `#2C463D`, sand `#DDBFA3`,
  pink `#F9B5C4`, berry `#84334E`. Paletten er låst i koden; der er
  bevidst ingen farveindstillinger i temaeditoren.
- Fonte: Philosopher (overskrifter) og Roboto Flex (brødtekst) via
  Google Fonts, med indstilling til at slå eksterne kald fra
  (Cookiebot-hensyn).
- Form: kort-radius 18px, medie-radius 14px, pille-knapper 999px,
  indhold maks. 1240px, skygge `0 12px 28px rgba(44,70,61,0.18)`.
- Bevægelse: 140ms `cubic-bezier(0.4, 0, 0.2, 1)`, slået fra ved
  `prefers-reduced-motion`.
- Produktkort viser billede nr. 2 ved hover (godkendt 04-08-2026).

## Struktur

```
assets/nc-theme.css            Tokens + basiskomponenter (knapper, chips, kort, grid, form)
layout/theme.liquid            Dokumentramme, fonte, header/footer-grupper
sections/nc-header.liquid      Header med annonceringslinje (skelet, megamenu afventer design)
sections/nc-footer.liquid      Footer med kontakt, nyhedsbrev, compliance-linje
sections/main-*.liquid         Standard-skabelonernes indhold
sections/nc-featured-collection.liquid  Produktgrid med hover-billede
sections/nc-august-campaign-banner.liquid  Augustkampagnen (uændret fra tidligere opgave)
templates/                     JSON-skabeloner + kundekonto + gavekort
design/                        Drop-mappe til design-handoff-filerne
```

## Compliance indbygget i temaet

- Footerens disclaimer-linje ("NatureCells produkter er ikke medicin…")
  er et fast felt med default, så den ikke forsvinder ved et uheld.
- Prisvisningen skriver aldrig "SPAR X %" automatisk: besparelsesudsagn
  kræver dokumenteret 30-dages normalpris (§ 9 a) og er en redaktionel
  beslutning, ikke temaets.
- Ingen tankestreger i kundevendte standardtekster.

## Historik

Augustkampagne-sektionen (`nc-august-campaign-banner.liquid`) og dens
placering på den gamle forside er dokumenteret i git-historikken på
branchen `claude/naturecell-forside-sektion-8xrl6u`.
