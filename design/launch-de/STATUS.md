# Tysk version (naturecell.de): status ved pause 09-10-2026

Opgaven: "Sørg for at ALT er oversat. ALLE links virker. Alt er optimeret efter Tyskland."

## Færdigt

- Audit af alt tysk indhold mod den danske master (tema, produkter, sider, artikler,
  metaobjekter, metafelter, menuer, kollektioner, shop-SEO).
- 570 tekster oversat og kontrolleret: samme HTML og links som dansk, ingen tankestreger,
  intet "zugelassen", Sie-form. Ligger i `de-translations/wp/out-*.json`.
- Body-links i tysk indhold omskrevet til relative URLs med tyske handles
  (`de-translations/reg/merged-loc.json`).
- Tysk shop-SEO registreret: titel "NatureCell: CBD-Hautpflege, in Dänemark entwickelt",
  beskrivelse uden "zugelassen" og uden "Bio".
- Chunk c25 registreret og bekræftet: SETS-metafelter, kollektionen "Sets",
  menupunkterne "Shop", "Über CBD" og "Über uns" samt taksonomi-labels.
- Chunks c00, c05, c10, c15 registreret uden fejl. c20 er ifølge agenten registreret, men har ingen resultatfil.
- Tema (commit b0be830, uploadet til dev-tema 205218971986, md5 verificeret):
  grundpris vises på tysk, tyske kunder sendes til de.trustpilot.com.
- Grundpris-data til lanceringsdagen: `grundpreis-mutation.json` (IKKE kørt, se README.md).

## Mangler (fortsæt herfra)

1. Registrér de resterende chunks i `de-translations/reg/chunks/` (c01-c04, c06-c09,
   c11-c14, c16-c19, c20-c24). Registrering er idempotent, så kør hellere en for meget.
   Format: `{"query", "variables"}` til Shopify `translationsRegister`. Bekræft butikken
   (get-shop-info = "Naturecell.dk") før første kald.
2. Kør derefter `de-translations/reg/fix-paths.json`. Den sætter de fire sti-lister
   (kollektionschips og footer-menuer) tilbage til danske stier, som temaets nc-url selv
   oversætter. Den SKAL køres efter chunks med temaet, ellers overskrives den.
3. Læs alle oversættelser tilbage (`reg/verify-ids.json` + temaressourcen) og sammenlign
   med `reg/reg-final.json`. Agenterne kopierer værdierne manuelt, så tegn som
   hårde mellemrum kan være skiftet ud. Afvigelser registreres igen fra filen.
4. Render-tjek af /de på dev-temaet, Nexus-changelog og rapport til Frederik.
5. Slå sprogskifteren (DA/DE) til igen: Tema-editor, Header, "Vis sprogskifter (DA/DE)",
   eller `show_lang: true` i `sections/header-group.json`. Den blev skjult 09-10 (commit 981fcae).

## Flag til Frederik (beslutninger, ikke kode)

- Fragt EU: fast 499 kr (ca. 67 €) og ingen fri fragt i EUR. Kræver beslutning i Shopify.
- Impressum mangler Geschäftsführer og USt-IdNr. Handelsbetingelserne nævner DKK og
  Nævnenes Hus, og EU ODR-linket er nedlagt. Tysk jurist bør læse dem.
- Dansk shop-meta siger "godkendt til salg" og "Organiske". Rettes i Shopify Præferencer.
- Klaviyo: den aktive popup VaKaSc er dansk og vises også på naturecell.de. Den nye
  kladde RU7CmG udelukker kun naturecell.dk/de. Tilføj "*naturecell.de*" i begge.
- Indhold med effektpåstande (akne, betændelse, træning, sårheling) er oversat tro mod
  dansk. Overvej om artiklerne skal med på .de.
- Menuen "om-cbd" har et hårdkodet link til naturecell.dk/blogs/artikler (bruges ikke af det nye tema).
