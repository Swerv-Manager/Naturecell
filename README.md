# NatureCell – forside-sektion: augustkampagne med eksfolieringshandske

Dette repo indeholder de temafiler, der er ændret for at bygge kampagnesektionen
"Gratis eksfolieringshandske ved køb over 900 kr." til forsiden på naturecell.dk.

Det er ikke et fuldt tema-mirror, kun de filer opgaven berører.

## Hvor er det lagt op

| | |
|---|---|
| Butik | Naturecell.dk |
| Tema | Kopi af Swerv // Produkt title opdeling (ID `204657721682`, upubliceret) |
| Live tema | Swerv // Produkt title opdeling (ID `201401368914`) er urørt |

## Filer

| Fil | Hvad |
|---|---|
| `sections/nc-august-campaign-banner.liquid` | Selve sektionen. Nyoprettet. |
| `templates/index.json` | Forsiden, med sektionen indsat som nr. 3, direkte under hero-slideshowet. |

Sektionen er også tilgængelig under "Tilføj sektion" i temaeditoren som
**NC augustkampagne banner**, hvis den skal bruges andre steder eller flyttes.

## Sådan er designet oversat

Designet kommer fra handoff-pakken `design_handoff_august_glove_banner`
(Design Component mod NatureCell Design System). Farver, spacing, radier,
skygge, states og responsiv opførsel er hentet 1:1 fra handoff'en:

- Bannerkort `#3E5D58`, radius 18px, dekorativ sage-wash øverst til højre.
- Sidebaggrund `--paper` `#F6F4EE`, indhold maks. 1240px.
- Eyebrow i sand `#DDBFA3`, H2 i display-fonten, brødtekst i hvid 82%.
- Primær CTA hvid med grøn tekst, sekundær outline i hvid 45%. Pille-form,
  `padding 15px 32px`, mindst 44px høj, hover `translateY(-1px)`,
  `140ms cubic-bezier(0.4, 0, 0.2, 1)` (`--dur-fast` / `--ease-soft`).
- Tre chips i outline, `letter-spacing .06em`, ikke uppercase.
- Packshot på hvid flade, `aspect-ratio 1.15/1`, `object-fit: contain`.
- Gratis-boblen i pink `#F9B5C4` med berry tekst `#84334E`, aldrig roteret,
  eneste skygge i sektionen: `0 12px 28px rgba(44,70,61,0.18)`.
- Bundstribe med fin print. Handoff'en havde et hvidt logo-lockup nederst til
  højre, men det er bevidst udeladt: det tilføjede ikke noget på et banner, der
  allerede står på brandets egen forside.

Alt er fluid via `clamp()` og `flex-wrap`, ingen media queries, bortset fra
`prefers-reduced-motion`, hvor hover-transform og transitions slås fra.
Paletten er låst i sektionen: der er bevidst ingen farveindstillinger, så der
ikke kan introduceres hex-værdier uden for designsystemet.

## Indstillinger i temaeditoren

Tekst (overlinjer, overskrift, brødtekst), de to knapper med links, tre chips,
gaveprodukt, billed- og alt-tekst-overstyring, boblens overskrift og værdi,
tæller (antal i kampagnen, antal hentede, vis/skjul), fin print, logo-overstyring,
fontvalg og aria-label.

Standardværdier er sat, så sektionen er komplet i det øjeblik den tilføjes.

Værd at vide:

- **Boblens værdi** er tom som standard og udfyldes automatisk med gaveproduktets
  faktiske pris i shoppen, altså "Værdi 129 kr." fra
  `exfoliating-hanske` (129,00 kr., aktiv, 1.090 på lager pr. 31. juli 2026).
  Ændrer prisen sig, følger boblen med af sig selv.
- **Fin print** er et compliance-krav. Tømmes feltet, falder sektionen tilbage til
  standardteksten, så linjen ikke kan forsvinde ved et uheld.
- **Tælleren** vises kun når den er slået til OG antal hentede er over 0. Tallet
  skal komme fra en reel kilde, ikke et gæt: et forkert tal er en
  markedsføringsretlig risiko. Den er slået fra som standard.
- **Gave-mekanikken** (automatisk tilføjelse ved 900 kr., loft på 500 stk., én pr.
  ordre) hører i kurv-/rabatlogikken og er ikke en del af sektionen. Når de 500 er
  uddelt, eller kampagnen slutter, skjules sektionen i temaeditoren.

## Bevidste afvigelser fra handoff'en

**Logo.** Logoet i bundstriben er fjernet efter aftale. Bundstriben indeholder nu
kun fin print.

**Fonte.** Brandguiden foreskriver Philosopher til overskrifter og Roboto Flex til
brødtekst. Ingen af dem findes i Shopifys fontbibliotek (temaet kører i dag
Tenor Sans og Twentieth Century), så de hentes fra Google Fonts, præcis som
designsystemet selv gør det. Indstillingen **Brug brandets egne fonte** er slået
til som standard. Slås den fra, bruger sektionen temaets egne fonte, og der
hentes intet eksternt, hvilket kan være relevant af hensyn til Cookiebot og
tredjepartskald.

## Verifikation

- Første version af sektionen blev lagt op og verificeret byte-identisk med
  repoet, og `templates/index.json` blev sammenlignet felt for felt med versionen
  før ændringen: eneste forskel var den tilføjede sektion og dens plads i `order`.
  Ingen eksisterende sektion, blok eller indstilling blev ændret.
- Denne revision (brødtekst "vores nye Exfoliating Handske" og logo fjernet) er
  endnu ikke lagt op på temaet: Shopify-connectoren skiftede undervejs til en
  anden butik, så skrivningen blev afvist. Filerne her i repoet er den gældende
  version og skal lægges op, når connectoren peger på Naturecell.dk igen.
- Selve storefront-renderingen er ikke set i browser fra dette miljø, fordi
  naturecell.dk og Shopifys CDN ikke kan nås gennem proxyen. Sektionen skal
  derfor gennemses i temaeditorens preview.
