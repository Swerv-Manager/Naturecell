# Design-handoff: her lægges filerne fra Claude Design

Den nye hjemmeside implementeres 1:1 ud fra Claude Design-projektet
(claude.ai/design, projekt `652604f6-bce4-4375-bfb3-1de9f9a09aee`).
Designprojektet kan ikke hentes maskinelt fra udviklingsmiljøet
(kræver interaktivt claude.ai-login), så filerne skal lægges her manuelt,
fx ved at downloade/eksportere projektet og uploade via GitHub web.

Læg filerne i denne mappe med samme struktur som i designprojektet:

```
design/
  NatureCell.dc.html
  article-bodies.js
  support.js
  _ds/naturecell-design-system-52829db1-0f36-43fb-be73-a051a3b8e03c/
    _ds_bundle.js
    tokens/base.css
    tokens/colors.css
    tokens/effects.css
    tokens/fonts.css
    tokens/spacing.css
    tokens/typography.css
  assets/founders.jpg
  assets/logo-wordmark-white.png
  assets/logo-wordmark.webp
  assets/lovens-hule.jpg
```

Alternativt kan filerne uploades som zip i Slack (#naturecell-hjemmeside)
eller lægges i Google Drive. Så snart de er tilgængelige, oversættes
designet til temaets sektioner og skabeloner.
