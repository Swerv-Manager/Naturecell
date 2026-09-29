# NatureCell: Black Week VIP pre-access, runde 2 (v5 til v8)

Fire nye lodrette leadvideoer (1080 × 1920, 30 fps, H.264 + AAC), bygget på mere af
indholdet i Drive-mappen. Samme fakta og compliance som hovedvideoen og v1 til v4.

| # | Fil | Stil | Tempo | Længde | Hook (første frame) |
|---|---|---|---|---|---|
| 5 | `v5-snapchat-story-16s.mp4` | Snapchat-story med overlay | 112,5 BPM | 16,0 s | "psst 🤫" + Snap-billedtekst "Black Week starter tidligere for dem på VIP-listen" |
| 6 | `v6-promo-produkter-15s.mp4` | Salgsfremmende produktshowcase | 124 BPM house | 15,5 s | Pink "20 % PÅ HELE SHOPPEN"-stempel over et produktgrid + "7 dage før Black Friday" |
| 7 | `v7-black-week-guld-14s.mp4` | Rendyrket Black Week: sort og guldfolie | 128 BPM, mørk | 14,5 s | "BLACK WEEK" i guldfolie, "starter 20.11 for VIP" |
| 8 | `v8-vip-invitation-16s.mp4` | Personlig VIP-invitation i papir | 84 BPM vals | 16,0 s | "Du er inviteret" over en kuvert med voksegl |

## Hvad sker der i hver

**5 · Snapchat.** Fem snaps med Snapchats egen story-UI: progressbarer, afsender
"NatureCell · Sponsoreret", klassiske sorte billedtekstbjælker, "Send en chat" og et
kamera-ikon. Stickers: et nedtællingskort "Black Week VIP · 20 NOV · FRE" med "Mind
mig om det", håndtegnet cirkel om produkterne, "+5% ved 2" og "+10% ved 3" som tags,
🎁 og til sidst en pil og et link-sticker "Skriv dig på VIP-listen". Billederne er
ByChris' UGC-serie fra badeværelset (P218, P200, P208, P219, P206).

**6 · Promo.** Fem produktkort glider ind med et pink VIP-stempel, et pr. beat:
Dagcreme og Natcreme, Rensegel, Bodylotion, Håndcreme, Exfoliating Handske. Så en
stabel der vokser fra 1 til 3 produkter: "Køb 1 · 20 %", "Køb 2 · 20 % + 5 %",
"Køb 3 · 20 % + 10 %". Et kort bliver pakket ind med pink sløjfe ("+ en gave til de
første ordrer"), og videoen slutter på et CTA-kort. Kun produkter med over 600 stk.
på lager (`client_products` 29-09). Pakkerne er udeladt, fordi de har egne priser og
lavt lager.

**7 · Black Week guld.** Sort scene, guldfolie med glans der bevæger sig, guldstøv og
korn. Et spotlys fejer hen over produkterne ("Før alle andre."), et flip-ur klapper
20 og 11 på plads ("Pre-access åbner · fredag"), 20 % i folie, og slutkortet er
"VIP-listen" med en guldknap over produkterne i halvmørke.

**8 · Invitation.** En kuvert i NatureCell-grøn med voksegl, der knækker. Flappen
åbner, og kortet glider op af lommen og fylder skærmen. Teksten skrives frem i
håndskrift: "Kære dig, vi åbner Black Week for vores VIP'er fredag 20/11, 7 dage før
Black Friday. 20 % på hele shoppen · +5 % ved 2 · +10 % ved 3 · ...og en gave til de
første ordrer · De skønneste hilsner, Lizbeth & Allan 💚". Et polaroid af Lizbeth og
Allan tapes på, og en "S.U. · Skriv dig på VIP-listen 👇"-knap afslutter. Lydspor:
vals med celesta og klaver plus lyden af seglet, papiret og pennen.

## Kilder og valg

- Nyt fra Drive: ByChris' UGC-serie (P200, P204 til P208, P218, P219 i
  SWERV ADS/2026/07 Juli/02 Live), handske-billederne i Rj ads (P209, P211, P212),
  kundebilleder (P202) og sidste års Black Week-materiale (P6, P7, P98, P99 i 2025/11).
- P211 og P212 (Snapchat-billederne med handsken) er fravalgt: den indbrændte tekst
  ("det sad på min hud", "effektive følelse") er effekt-sprog, og hudbilledet på P212
  kan læses som hudtilstand. Sidste års P98 og P99 er fravalgt, fordi de indeholder
  resultatcitater og FØR/NU-billeder.
- ByChris er betalt UGC-skaber, og billederne ligger i "Live ✅". Snapchat-teksten er
  skrevet fra NatureCells konto, ikke som hendes udsagn.
- Invitationen er underskrevet "Lizbeth & Allan" med brandets faste hilsen fra
  brandprofilen.
- Al lyd er genereret (`source/synth.py`), så der er intet at licensere.

## Compliance-tjek

- Ingen effekt- eller hudtilstandsord, ingen "naturlig", intet før/efter.
- CBD er aldrig blikfang, og CBD-olierne optræder ikke.
- Ingen priser i kroner, kun rabatstrukturen. Ingen tankestreger, ingen
  henvisning til hjemmesiden, ingen lagerpres.
- Fin print "Pakker har egne priser" på v6 og v7.

## Skal afklares før brug

1. To-do 18 (tages de ekstra procent af fuld eller nedsat pris?) og § 9 a-førpriser.
   v6 viser strukturen tydeligst ("20 % + 5 %", "20 % + 10 %") og skal rettes, hvis den
   ændrer sig.
2. Antal og produkt for gaven til de første ordrer. v6 pakker handsken ind som
   illustration, uden at love at gaven er en handske.
3. Snapchat's nedtællingskort viser dato, ikke resterende tid, så det er korrekt uanset
   hvornår annoncen vises.
4. Lizbeths godkendelse.

## Genbyg

```bash
cd source
node render.js snap.html full fr_snap 16.0     # promo.html 15.5 · bw.html 14.5 · invite.html 16.0
python3 music_snap.py                          # music_promo.py · music_bw.py · music_invite.py
ffmpeg -framerate 30 -i fr_snap/f_%04d.jpg -i music_snap.wav -c:v libx264 -profile:v high \
  -pix_fmt yuv420p -crf 19 -maxrate 14M -bufsize 28M -preset slow -c:a aac -b:a 192k \
  -shortest -movflags +faststart v5-snapchat-story-16s.mp4
```
