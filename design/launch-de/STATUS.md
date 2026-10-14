# Tysk version (naturecell.de): status 14-10-2026

## Temaer (vigtigt, opdateret 13-10)

- Live (MAIN): "Kopi af Kopi af Swerv // Nyt tema (under udvikl..." (209443258706). Kan ikke skrives via connectoren.
- NY DUBLET, DEN DER SKAL PUBLICERES: "Kopi af Kopi af Kopi af Swerv // Nyt tema (unde..." (209532977490),
  dublet af live 13-10 kl. 09:13. Indeholder alt fra live (aabningstilbud, kurv uden rabatfelt,
  Cookiebot-broen) + alle rettelser 64-72 + fri fragt EUR 55 + Shopify-video + 5.677 tyske
  temaoversaettelser (377 kopieret og verificeret 13-10, 0 mangler, 2 tekniske fokuspunkter forældede).
  Aabningstilbuddet vises kun paa dansk/DKK.
- Gamle arbejdstema 205218971986 og 209410687314 bruges ikke mere.
- Butikken har 20 temaer (Shopifys maksimum).

## Gjort 12-10 (aften)

- Fragt: ny zone "Tyskland" (DE taget ud af EU-zonen). Fra 14-10: Standardversand 8 € under 65 €,
  Kostenloser Versand fra 65 €, "2 bis 4 Werktage". Satserne er gemt i EUR.
  Temaet: nc_free_shipping = "DKK: 399 / EUR: 55" (kurvens fragtbar, PDP, FAQ).
- Priser: katalog "Tyskland (EUR, hele euro)" (MarketCatalog/208453992786) med prisliste
  PriceList/40816378194: 61 faste priser i hele euro (54,95 -> 55, 68,95 -> 69 osv.),
  uden foerpris (compare-at) i Tyskland (PAngV § 11: ingen 30-dages historik i nyt marked).
  Gavekort i Tyskland: 25/40/70/95/135 € med tyske titler, handles og vaerdier i euro
  (kundeservice udsteder koden til det betalte eurobeloeb). Priserne slaar foerst igennem, naar markedet
  aktiveres; contextualPricing viser stadig ,95 saa laenge markedet er kladde.
- Lovtekster paa tysk (oversaettelser af butikkens politikker, filer i `legal/`):
  Impressum (§ 5 DDG) i "Juridisk meddelelse", AGB, Widerrufsbelehrung efter lovens model
  med Muster-Widerrufsformular, Versand, Kontakt. Ingen kr.-beloeb, ingen EU-ODR-link
  (lukket juli 2025), Naevnenes Hus + Forbrug Europa som klageinstanser, USt-IdNr. DK42256013.
  Footeren viser alle politikker + "Vertrag widerrufen" (Avada, /pages/widerrufsformular).
- Fuld dansk-detektor over alle ressourcetyper og temaet (169 fund, 33 falske positiver):
  154 tekster i 7 ubrugte kollektionsskabeloner oversat, Loevepakken-SEO, delingsbilledets alt,
  gavekortenes kr.-vaerdier rettet. Tilbage er kun egennavne (Matas-adresser, vindere, Miljoestyrelsen).
- Tysk indhold: 137 alt-tekster (artikel-, kollektions- og mediebilleder) + 50 handles/titler
  (gamle sider, interne rabatkollektioner, blog "gemt", testmetaobjekter) registreret.
- Rettelse 71: artikler kan nu have en Shopify-hostet video (metafelt ncell.video) i stedet for
  YouTube. Valgfrie undertekster pr. sprog i ncell.video_captions (WebVTT, oversaettes i
  Translate & Adapt). Testet i Chromium: sporet indlaeses med tyske tegn.

## Gjort 14-10

- Live-aendringer fra 13-10 kl. 15:26-15:32 (PDP-galleri med video, Artikler-dropdown, start-guide-
  videoer, FAQ-link) flettet ind i 209532977490. Alle filer verificeret (md5/semantisk).
- Fragt Tyskland: 8 EUR under 65 EUR, gratis fra 65 EUR. Tema EUR: 65, AGB/Versand og 7 tyske
  FAQ-svar rettet.
- Impressum: "Vertretungsberechtigter Geschaeftsfuehrer: Allan Falk Gamborg" (bekraeft stavning).
- Kundecase-videoer skjult paa alle andre sprog end dansk (temaindstilling nc_case_videos_da_only).
- Hero slaaet til igen; skjult kun paa dansk til 2026-10-15T23:59 (hide_da_until).
- Kunden oplyser: VerpackG via Avask, CPNP anmeldt, Flatpay (PayPal, Klarna, kort) aktiveres af Allan.
- Korrektur-link: https://naturecell.dk/de?preview_theme_id=209532977490
- Tjekliste: https://claude.ai/artifact/S7KzfoNXAPKFHa38Ehe96n

## Ved lanceringen (i denne raekkefoelge)

1. Publicér den nye dublet 209532977490 (tjek foerst, om live er rettet i editoren efter 13-10 09:13).
2. Grundpris: KOERT 13-10 (20 varianter, pris pr. 100 ml, vises kun paa tysk).
3. Aktivér markedet "Tyskland" i Shopify Markets (menneskeklik).
4. Tjek naturecell.de i browser: forside, produkt (55 €, Grundpreis), kurv (fragtbar mod 55 €),
   checkout paa tysk med 7 €/0 € fragt, Cookiebot paa tysk, footer-links til Impressum m.m.

## Kraever kunden eller et menneske (ikke kode)

- Impressum: navn paa direktoeren (vertretungsberechtigter Geschäftsführer) mangler. Kan ikke
  slaas op herfra (CVR-opslag er blokeret). Tilfoej linjen "Vertreten durch: <navn>".
- Moms: OSS-registrering og tysk moms (19 %) i Shopify Tax for Tyskland.
- VerpackG: registrering i LUCID og deltagelse i et tysk emballagesystem (Duales System)
  foer foerste salg. Uden det er salg af emballerede varer til tyske forbrugere ulovligt.
- Kosmetik: tysk maerkning paa pakningen (funktion, forsigtighedsregler) og CPNP-notifikation.
  GPSR/kosmetikforordningen: ansvarlig person i EU er NatureCell selv (DK), ok.
- Betalingsmetoder for Tyskland (PayPal, Klarna, SEPA/kort) i Shopify Payments.
- Avada-fortrydelsesformularen: tjek de tyske tekster i appen.
- Klaviyo: den danske popup VaKaSc og kladden RU7CmG skal udelukke "*naturecell.de*".
- Cookiebot: tjek at tysk sprog er slaaet til i Cookiebot-kontoen (temaet sender data-culture=DE).
- Forsidens hero er slaaet fra paa live (aabningstilbud til 15/10). Paa .de vises tilbuddet ikke,
  saa forsiden starter uden hero. Slaa hero til igen foer .de-lancering / naar tilbuddet udloeber.
- Judge.me-anmeldelser er dansk brugerindhold og vises paa dansk.
- Billeder med indbraendt dansk tekst kan ikke tjekkes herfra (CDN er blokeret).
- Video (71): kunden uploader ren MP4 under Indhold > Filer og vaelger den i artiklens
  metafelt "Video (hostet i Shopify)".

## Rettelser 64-72 (DK), 12-10

Paa arbejdstemaet: 64 linjeskift, 65 FAQ paa tilbud, 66 Sensitiv hovedbund (kun Haar),
67 TrustBox-karrusel, 68 quiz paa Hvor skal jeg starte, 70 Hampefroeolie, 71 cc_load_policy=0
+ Shopify-video, 72/69 stoerre CBD-ikon. Data (live med det samme): shampoo-tag
sensitiv-hovedbund, ansigtsolie og Body Oil i Olier, "godkendt til salg" fjernet 4 steder.
Mangler fra kunden: skarpe billeder til Om CBD (56/69, CKAT), Drive-billeder 52-55.
