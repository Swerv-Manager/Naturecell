# Tysk version (naturecell.de): status 12-10-2026

## Temaer (vigtigt)

- Live: "Kopi af Swerv // Nyt tema (under udvikling)" (209410687314). Kan ikke skrives via connectoren.
- Arbejdstema: "Swerv // Nyt tema (under udvikling)" (205218971986), upubliceret. Indeholder alt fra
  live (synket 12-10, inkl. Cookiebot-broen) + rettelser 64-72 + ALLE tyske oversaettelser.
  Det er dette tema, der skal publiceres. De tyske tema-oversaettelser ligger pr. tema.
- Butikken har 20 temaer (Shopifys maksimum), saa nye kopier kan ikke oprettes foer et slettes.

## Tysk indhold: faerdigt og verificeret 12-10

- Revision af alt (tema, produkter, kollektioner, sider, artikler, metaobjekter, metafelter,
  menuer, politikker, shop): 589 manglende/foraeldede tekster.
- 471 registreret og laest tilbage: 470 identiske, 1 handle fik "-1" (haeufige-fragen findes i
  forvejen). Data i `de-translations-2026-10-12/`.
- Bevidst ikke oversat: app-data (Judge.me m.fl.), interne rabat-kollektioner, testindgange,
  billedfilnavne, gamle sidehandles og 7 ubrugte kollektionsskabeloner.
- Links i tyske tekster peger paa tyske, relative URL'er. Menuer og temaet oversaetter selv.
- Tysk shop-SEO uden "zugelassen"/"Bio". Trustpilot paa tysk. Grundpris vises paa tysk.

## Ved lanceringen (i denne raekkefoelge)

1. Publicér arbejdstemaet 205218971986.
2. Koer `grundpreis-mutation.json` (pris pr. 100 ml), se README.md.
3. Aktivér markedet "Tyskland" i Shopify Markets (menneskeklik).
4. Sprogskifter: paa naturecell.de er der kun tysk, saa knappen skjules af sig selv.
   Paa naturecell.dk boer den forblive skjult (show_lang: false), saa tyskere bruger .de.
5. Tjek naturecell.de i browser: forside, produkt, kurv, checkout paa tysk, Cookiebot paa tysk.

## Kraever beslutning foer lancering (ikke kode)

- Fragt til Tyskland: i dag fast 499 kr (ca. 67 €) eller CR Fragtintegration, ingen fri fragt i EUR.
  Naar beloebet er besluttet: tilfoej "EUR: <beloeb>" i temaindstillingen nc_free_shipping.
- Tyske handelsbetingelser: "59 kr. bei Bestellungen unter 399,- kr.", Naevnenes Hus og det
  lukkede EU-ODR-link (ec.europa.eu/odr, nedlagt juli 2025). Widerruf: "1.000 kr."
  Impressum mangler Geschaeftsfuehrer og USt-IdNr. (DK42256013). Tysk jurist boer laese.
- Widerrufsbutton (§ 356a BGB): tjek Avada-fortrydelsesformularens tyske knaptekster.
- Klaviyo: den danske popup VaKaSc og kladden RU7CmG skal udelukke "*naturecell.de*" eller
  have en tysk version.
- Ordrebekraeftelser m.m.: tjek Shopify-notifikationerne paa tysk (egne danske skabeloner?).
- Betalingsmetoder for Tyskland (PayPal, Klarna, giropay/SEPA) i Shopify Payments.

## Rettelser 64-72 (DK), 12-10

Paa arbejdstemaet: 64 linjeskift, 65 FAQ paa tilbud, 66 Sensitiv hovedbund (kun Haar),
67 TrustBox-karrusel, 68 quiz paa Hvor skal jeg starte, 70 Hampefroeolie, 71 cc_load_policy=0,
72/69 stoerre CBD-ikon. Data (live med det samme): shampoo-tag sensitiv-hovedbund,
ansigtsolie og Body Oil i Olier, "godkendt til salg" fjernet 4 steder.
Mangler fra kunden: skarpe billeder til Om CBD (56/69, CKAT), Drive-billeder 52-55,
undertekstspor fjernes i YouTube Studio (71).
