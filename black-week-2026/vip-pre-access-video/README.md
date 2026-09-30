# NatureCell: Black Week VIP pre-access, leadvideo 9:16

Kort lodret video (TikTok, Reels, Stories) til lead-indsamlingen til VIP-listen,
der ifølge planen starter 1. oktober. Målet er tilmeldinger, ikke salg.

| | |
|---|---|
| Fil | `naturecell-black-week-vip-pre-access-9x16.mp4` |
| Format | 1080 × 1920, 30 fps, H.264 High + AAC 192 kb/s, faststart |
| Længde | 20,5 s |
| Lyd | Egenkomponeret track, 120 BPM, ca. -14 LUFS, true peak -2,4 dBFS. Ingen licens nødvendig |
| Cover | `cover-frame-0.jpg` (første frame, hvor hele hooket allerede står) |

## Forløb

| Tid | Scene | Tekst på skærmen |
|---|---|---|
| 0,0 til 2,5 | Hook over Kompletpakken ved vasken | "Black Week starter tidligere", derefter "… men kun for VIP-listen 🤫" |
| 2,5 til 5,0 | Fem hurtige klip på beatet | "Før · alle · andre. · Kun for · VIP." |
| 5,0 til 8,0 | Kalenderkort | "VIP-adgang åbner", fredag 20. november, "7 dage før Black Friday" |
| 8,0 til 12,0 | Tilbuddet | "20 % på hele shoppen", "Køb 2 · +5 % ekstra", "Køb 3 · +10 % ekstra", med fin print |
| 12,0 til 14,5 | Gaveæske der åbner | "+ en gave til de første ordrer", "Og mystery gifts hele ugen" |
| 14,5 til 17,0 | Lizbeth og Allan | "Vi glæder os til at se dig 💚", "De skønneste hilsner, Lizbeth & Allan" |
| 17,0 til 20,5 | Slutkort | "Skriv dig på VIP-listen", tre tjekpunkter, knap "Tilmeld dig her 👇" |

Hooket står fuldt fra første frame, med ét ord fremhævet og kun 3 linjer. Det
følger videolæringen fra 04-09-2026 (`naturecell-video-laering-2026-09`), som viste
at en påstand vist fra første frame virker bedst. Al vigtig tekst ligger inden for
TikToks og Reels' sikre zone, så knapper og billedtekst i bunden ikke dækker den.

## Rettelse 30-09-2026

"VIP" blev vist som "VlP", fordi det store I i Philosopher ligner et lille l. Kun bogstavet I er nu sat i Playfair Display, og det gør "VIP" entydigt. Videoen er renderet igen, og resten er uændret.

## Kilder

- **Fakta:** `naturecell-q4-2026-plan` (mødet 25-08) og
  `naturecell-salgsfald-rodaarsager-plan-2026-09-27` i Nexus. Pre-access fre 20-11,
  Black Friday fre 27-11, 20 % på hele shoppen plus 5 % ved køb af 2 og 10 % ved
  køb af 3, gave til de første X ordrer, mystery gifts hele ugen, VIP-leads fra 01-10.
- **Brand:** `naturecell-brand-profil` med tillæg 1 til 3, samt `brand_visual_dna`.
  Palet fra designsystemet (deep `#2E4A44`, green `#3E5D58`, paper `#F6F4EE`,
  sand `#DDBFA3`, pink `#F9B5C4`, berry `#84334E`), Philosopher og Roboto Flex.
- **Billeder fra Drive:** Kompletpakken ved vasken og hånden der rækker ud
  (Miljøbilleder), sortimentsbilledet (beskåret), Lizbeth og Allan (About us), og
  logoet trukket ud af P218.

## Compliance-tjek

- Ingen effekt- eller hudtilstandsord, ingen "naturlig", intet før/efter.
- CBD er aldrig blikfang. CBD-olierne (5 til 20 %) er med vilje beskåret ud af
  sortimentsbilledet. Hudpleje Olie 1000 mg står i Kompletpakken og er tilladt.
- Ingen tankestreger, ingen henvisning til hjemmesiden, ingen lagerpres.
- Ingen falsk "gratis": ordet bruges kun om at stå på listen, som reelt er gratis.
- Driftsklip med tekst der er forbudt nu ("Naturlig plantebaseret", FØR/EFTER) er
  fravalgt.

## Skal afklares før brug

1. **"20 % på hele shoppen" og "+5 / +10 %".** Rabatten er besluttet i Q4-planen,
   men to-do 18 (tages de ekstra procent af fuld pris eller af den nedsatte?) er
   ikke lukket, og alle priser skal have 30 dages normalpris (§ 9 a). Holder
   strukturen ikke, skal scenen 8 til 12 s rettes.
2. **Gaven til de første ordrer.** Antallet (X) og selve gaven er stadig ikke
   besluttet. Videoen nævner derfor hverken antal, produkt eller værdi. Er
   tilmeldingsgaven (lead-incitamentet) besluttet, bør den tilføjes, fordi den
   styrer prisen pr. lead.
3. **Lizbeths godkendelse** af det færdige produkt, som aftalt i Q4-planen.

## Genbrug og rettelser

`source/` rummer alt, der skal til for at bygge videoen igen: `video.html` er hele
animationen (render(t) er deterministisk pr. frame), `render.js` tager frames med
Playwright, og `music.py` bygger lydsporet.

```bash
cd source
npm i playwright            # eller brug en global installation
node render.js full frames 20.5
python3 music.py            # kræver numpy og scipy
ffmpeg -framerate 30 -i frames/f_%04d.jpg -i music.wav -c:v libx264 -profile:v high \
  -pix_fmt yuv420p -crf 17 -preset slow -c:a aac -b:a 192k -shortest -movflags +faststart out.mp4
```

Tekst, datoer og procenter står direkte i `video.html`, så en rettelse kræver kun
en ny rendering.
