# NatureCell: Black Week VIP pre-access, 4 videovarianter

Fire lodrette leadvideoer (1080 × 1920, 30 fps, H.264 + AAC) til VIP-listen. De
bygger alle på samme fakta som hovedvideoen i mappen over, men har hver sin stil,
sit tempo og sit hook, så Meta og TikTok får reel kreativ variation at teste på.

| # | Fil | Stil | Tempo | Længde | Hook (første frame) |
|---|---|---|---|---|---|
| 1 | `v1-ugc-iphone-15s.mp4` | UGC, filmet med iPhone | 90 BPM lo-fi | 15,0 s | Post-it på badeværelset "HUSK! VIP-LISTEN BLACK WEEK FRE 20/11" + "okay det her Black Week-trick er for godt til ikke at dele 🤫" |
| 2 | `v2-sms-chat-16s.mp4` | Native beskedtråd mellem to veninder | 110 BPM bouncy pop | 16,2 s | "SKAT 😱 har du hørt det med NatureCell og Black Week??" |
| 3 | `v3-hype-strobe-12s.mp4` | Hurtig kinetisk typografi og strobe-klip | 150 BPM | 12,0 s | "7 DAGE FØR BLACK FRIDAY" i fuld bredde |
| 4 | `v4-editorial-17s.mp4` | Roligt, filmisk, luksus-editorial | 70 BPM klaver og strygere | 17,0 s | "Nogle venter til Black Friday." efterfulgt af "Andre er der en uge før." |

## Hvad sker der i hver

**1 · UGC iPhone.** Håndholdt kamera med rystelser, autofokus der leder ved hvert
klip, eksponering der justerer sig, korn og TikToks egen tekststil (TikTok Sans,
hvide bokse). Klip: post-it ved vasken, en finger der peger på produkterne,
natbordet med dag- og natcreme i lampelys, rensegel og cremer på vasken. Til sidst en
skærmoptagelse, hvor en e-mail skrives ind på "VIP-listen" og bliver til "Du er på
listen 💚". Lydspor: lo-fi beat med vinylknitren og rumtone, tastaturklik og et lille
kling ved tilmeldingen.

**2 · Beskedtråd.** En tråd i iOS-stil med skrivebobler, en ‼-reaktion, "Leveret"
og et linkkort. Beskederne leverer fakta i veninde-sprog: 20/11, 7 dage før Black
Friday, 20 % på hele shoppen, +5 % ved 2 og +10 % ved 3, gave til de første
ordrer, listen er gratis. Til sidst glider et brandet ark op med "Skriv dig på
VIP-listen" og en knap. Lydspor: marimba-pop med besked-lyde.

**3 · Hype.** Ét ord eller tal pr. beat, alt i Roboto Flex Condensed Black: 7 DAGE
FØR BLACK FRIDAY → VIP HANDLER FØRST. (strobe over produktbilleder) → FREDAG 20.11 →
20 % PÅ HELE SHOPPEN → +5 % → +10 % → 🎁 GAVE → et VIP-kort i 3D med holografisk
glans og knappen "SKRIV DIG PÅ LISTEN 👇". Skifter mellem sort-grøn, pink og sand.
Lydspor: 150 BPM med 808-bas, stabs og impacts på hvert sceneskift.

**4 · Editorial.** Langsomme kamerabevægelser, overtoninger, korn, lyslæk og sorte
filmbjælker. Cormorant Garamond i kursiv med små kapitæler. Lizbeth og Allan står
som indrammet foto ved "Og en gave til de første ordrer." Slutkortet er roligt, med
en tynd sandfarvet linje og "Tilmeld dig herunder". Lydspor: rullede klaverakkorder
i hal-rumklang med strygere.

## Kilder og valg

- Fakta, brand og compliance som i hovedvideoen: `naturecell-q4-2026-plan`,
  `naturecell-salgsfald-rodaarsager-plan-2026-09-27` og `naturecell-brand-profil`
  med tillæg i Nexus.
- UGC-billederne er NatureCells egne fra september (serien "husk rutinen" og
  ByChris' natbordsbillede). **Personen er beskåret væk i alle klip**, og den
  oprindelige håndskrift på post-it'en er fjernet og skrevet om, så ingen rigtig
  kunde "siger" noget, hun ikke har sagt. Teksten er skrevet som en anonym
  fortæller.
- Mailadressen i skærmoptagelsen (`sofie.jensen@mail.dk`) og veninden "Mette" i
  tråden er opdigtede.
- Tilmeldingsskærmen i v1 og arket i v2 er illustrationer af tilmeldingen, ikke
  skærmbilleder af en eksisterende side.
- Klip V112, V122 og V175 er fravalgt, fordi de har tekst, som compliance ikke
  tillader nu ("Naturlig plantebaseret", FØR/EFTER og hudtilstande).
- Al musik og alle lydeffekter er genereret fra bunden (`source/synth.py`). Der er
  ingen samples og ingen licens. På TikTok kan lyden erstattes med en trending
  lyd.

## Compliance-tjek (alle fire)

- Ingen effekt- eller hudtilstandsord, ingen "naturlig", intet før/efter.
- CBD er aldrig blikfang, og CBD-olierne (5 til 20 %) optræder ikke.
- Ingen tankestreger, ingen henvisning til hjemmesiden, ingen lagerpres.
- "Gratis" bruges kun om at stå på listen.
- "7 dage før Black Friday" og "en uge før" passer med 20.11 → 27.11.

## Skal afklares før brug (samme punkter som hovedvideoen)

1. Rabatstrukturen (to-do 18: tages de ekstra procent af fuld eller nedsat pris?)
   og § 9 a-førpriser. Det gælder alle fire videoer.
2. Antal og produkt for gaven til de første ordrer. Ingen af videoerne nævner et
   af delene.
3. Lizbeths godkendelse.

## Genbyg

```bash
cd source
node render.js ugc.html full frames_ugc 15.0     # chat.html 16.2 · hype.html 12.0 · lux.html 17.0
python3 music_ugc.py                             # music_chat.py · music_hype.py · music_lux.py
ffmpeg -framerate 30 -i frames_ugc/f_%04d.jpg -i music_ugc.wav -c:v libx264 -profile:v high \
  -pix_fmt yuv420p -crf 19 -maxrate 14M -bufsize 28M -preset slow -c:a aac -b:a 192k \
  -shortest -movflags +faststart v1-ugc-iphone-15s.mp4
```

Alle tekster, datoer og procenter står direkte i HTML-filerne.
