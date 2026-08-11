
class Component extends DCLogic {
  state = {
    route: { name: 'home' },
    lang: 'da',
    megaOpen: false,
    aboutMenu: false,
    megaTab: 'area',
    mobileNavOpen: false,
    cartOpen: false,
    cart: {},
    isMobile: false,
    isNarrow: false,
    collFilter: null,
    caseArea: 'all',
    caseQuery: '',
    collQuery: '',
    ingQuery: '',
    ingChipsOpen: false,
    gsearch: '',
    cbdSkinIdx: 0,
    cbdPropIdx: 0,
    articleTag: 'Alle',
    articleQuery: '',
    pdpQty: 1,
    quizStep: 0,
    quizArea: null,
    quizNeed: null,
    heroIndex: 0,
    shopTab: 'area',
    openFaq: 0,
    uspIndex: 0,
    pdpImg: 0,
    openPdpAcc: 'beskrivelse',
  };
  HERO_COUNT = 4;
  MILESTONES = {
    '2026': { year: '2026', mgo: () => this.go('milestone', { id: '2026' }), title: 'Et komplet univers', eyebrow: 'I dag', img: 'https://naturecell.dk/cdn/shop/files/Naturecell_CBD_skincare_pige_vasker_ansigt_kopier.webp?v=1757146053',
      lead: 'Fra én olie til et fuldt sortiment — stadig dansk, stadig ærligt.',
      paras: ['I dag dækker NatureCell hele kroppen: ansigt, krop, hænder, fødder og hår. Rens, serum, dag- og natcreme, hudolie, bodylotion, håndcreme, fodcreme, læbepomade, shampoo og balsam — plus ALFALAB, vores serie udviklet til mænd.','Fundamentet er det samme som i 2018: CBD i samspil med naturlige planteolier, antioxidanter og fugtgivende ingredienser. Vegansk, uden syntetisk parfume, udviklet og testet i Danmark.','Vi lover fortsat ikke mirakler. I stedet lader vi vores kunder fortælle om deres egne oplevelser — du finder deres historier under kundecases.'],
      facts: [{ k: 'Produkter', v: '30+ i sortimentet' }, { k: 'Kategorier', v: 'Ansigt · Krop · Hår · Herre' }, { k: 'Produktion', v: 'Dansk' }] },
    '2021': { year: '2021', mgo: () => this.go('milestone', { id: '2021' }), title: 'Løvens Hule', eyebrow: 'Investering', img: 'assets/lovens-hule.jpg',
      lead: 'Jesper Buch træder ind som investor — og NatureCell når ud til flere danske hjem.',
      paras: ['Turen i Løvens Hule var en oplevelse, der fik adrenalinen til at pumpe. At stå foran nogle af landets skarpeste investorer og forsvare en helt ny kategori i dansk hudpleje krævede, at vi kunne dokumentere hvert eneste led — fra råvare til godkendelse.','Jesper Buch valgte at gå ind som investor. Det gav både kapital og erfaring til at nå bredere ud, og i årene efter kom NatureCell i flere butikker og hjem over hele landet.','Investeringen ændrede ikke på, hvordan vi arbejder. Vi er stadig en familiedrevet virksomhed med rødder på Møllerup Gods, og vi træffer stadig vores valg ud fra ærlighed frem for løfter.'],
      facts: [{ k: 'Investor', v: 'Jesper Buch' }, { k: 'Program', v: 'Løvens Hule' }, { k: 'Effekt', v: 'Bredere distribution' }] },
    '2019': { year: '2019', mgo: () => this.go('milestone', { id: '2019' }), title: 'Først godkendt i Danmark', eyebrow: 'Milepæl', img: 'https://naturecell.dk/cdn/shop/files/NatureCell_Sortiment_Hudpleje_0725.webp?v=1752671972',
      lead: 'NatureCell bliver den første CBD-hudplejeserie godkendt til salg i Danmark.',
      paras: ['Da vi startede, blev CBD i Danmark betragtet som et medicinsk stof, og ingrediensen var endnu ikke anerkendt til kosmetik. Derfor gik vi den lange vej: i dialog med både Miljøstyrelsen og medicinalbranchen dokumenterede vi råvarens oprindelse, renhed og sikkerhed.','I 2019 fik vi som de første tilladelse til at producere, sælge og markedsføre CBD-hudpleje i Danmark — og samme år kom serien i Matas. Det var startskuddet til en helt ny kategori på det danske marked.','To år senere, i 2021, blev cannabidiol optaget i EU’s kosmetikdatabase CosIng. I dag er CBD en anerkendt kosmetisk ingrediens i hele Europa.'],
      facts: [{ k: 'Godkendt', v: 'Første i Danmark' }, { k: 'Lancering', v: 'Matas, 2019' }, { k: 'Sortiment', v: '7 produkter' }] },
    '2018': { year: '2018', mgo: () => this.go('milestone', { id: '2018' }), title: 'Idéen fødes', eyebrow: 'Begyndelsen', img: 'assets/founders.jpg',
      lead: 'På Møllerup Gods tager en ambition om ærlig, plantebaseret CBD-hudpleje form.',
      paras: ['Idéen opstod gennem Allans familieforbindelse til Møllerup Gods på Djursland. Godset ejes af hans brors familie, som var blandt de første i Danmark til at få tilladelse til at dyrke industriel hamp.','Her fik Allan interessen for hampens mange anvendelsesmuligheder — og særligt for de naturlige cannabinoider i planten. Sammen med Lizbeth begyndte arbejdet med at oversætte den viden til hudpleje, man kunne stå inde for.','Vi samlede et hold af specialister inden for kosmetisk kemi og formulering, og Anne Sophie Gamborg fra Møllerup bidrog med sin viden om hamp. Målet var enkelt: hudpleje baseret på dokumentation og åbenhed — ikke på løfter.'],
      facts: [{ k: 'Sted', v: 'Møllerup Gods, Djursland' }, { k: 'Grundlæggere', v: 'Lizbeth Falk & Allan Gamborg' }, { k: 'Fokus', v: 'Industriel hamp' }] },
  };
  STORE_USPS = [
    { label: 'Fri fragt over 399 kr.', d: 'M5 18H3V6h12v4 M14 9h4l3 3v6h-2 M7.5 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3 M17.5 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3' },
    { label: 'Dansk produktion & test', d: 'M20 6 9 17l-5-5' },
    { label: 'Vegansk & plantebaseret', d: 'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z' },
    { label: 'e-mærket webshop · tryg handel', d: 'M12 2 4 5v6c0 5 3.5 8 8 11 4.5-3 8-6 8-11V5Z' },
    { label: '30 dages returret', d: 'M3 12a9 9 0 1 0 3-6.7L3 8 M3 3v5h5' },
  ];

  componentDidMount() {
    this._onFavs = () => this.forceUpdate();
    window.addEventListener('nc-favs-changed', this._onFavs);
    this._onResize = () => {
      const m = window.innerWidth < 1040;
      const nw = window.innerWidth < 700;
      if (nw !== this.state.isNarrow) this.setState({ isNarrow: nw });
      if (m !== this.state.isMobile) this.setState({ isMobile: m });
    };
    this._onResize();
    window.addEventListener('resize', this._onResize);
    this._heroTimer = setInterval(() => this.setState(s => ({ heroIndex: (s.heroIndex + 1) % this.HERO_COUNT })), 7000);
    this._uspTimer = setInterval(() => this.setState(s => ({ uspIndex: (s.uspIndex + 1) % this.STORE_USPS.length })), 3000);
    this._applyLifestyleDefaults();
    this._applyPalette();
    this._applyFeel();
  }
  componentDidUpdate() { this._applyLifestyleDefaults(); this._applyPalette(); this._applyFeel(); }
  get NC_SWATCHES() {
    return [
      { g: 'PMS 5477 — tint ladder', items: [['100%','#3E5D58'],['90%','#516D69'],['80%','#657D79'],['70%','#788E8A'],['60%','#8B9E9B'],['50%','#9FAEAC'],['40%','#B2BEBC'],['30%','#C5CECD'],['20%','#D8DFDE'],['10%','#ECEFEE']] },
      { g: 'PMS 624 — tint ladder', items: [['100%','#80A097'],['90%','#8DAAA1'],['80%','#99B3AC'],['70%','#A6BDB6'],['60%','#B3C6C1'],['50%','#C0D0CB'],['40%','#CCD9D5'],['30%','#D9E3E0'],['20%','#E6ECEA'],['10%','#F2F6F5']] },
      { g: 'Papir & hvid', items: [['Paper','#F6F4EE'],['Paper 2','#FBFAF5'],['Hvid','#FFFFFF']] },
      { g: 'Neutraler & accent', items: [['Stone 500','#8C8F8F'],['Sand 500','#DDBFA3'],['Linen 500','#D5D1C3'],['Ink 900','#233330'],['Mauve','#B07A7F'],['Pink','#F9B5C4'],['Berry','#84334E']] },
    ];
  }
  get NC_TARGETS() {
    return [
      { grp: 'Globalt', keys: [['containerGreen','Container-grøn','#80A097'],['hoverGreen','Hover-grøn','#657D79'],['textGreen','Tekst-grøn','#3E5D58'],['softGreen','Blød grøn (20% 624)','#E6ECEA'],['paleGreen','Bleg grøn (30% 624)','#D9E3E0'],['bodyText','Brødtekst','#516D69'],['mutedText','Dæmpet tekst','#788E8A'],['paperColor','Papir','#F6F4EE'],['cardColor','Kort','#FFFFFF'],['accentBerry','Accent (berry)','#84334E']] },
      { grp: 'Header & footer', keys: [['announceColor','Annoncebjælke','#3E5D58'],['footerColor','Footer (lysere grøn)','#657D79']] },
      { grp: 'Forside', keys: [['heroBg','Hero','#80A097'],['trustBg','Trust-bar (10% 624)','#F2F6F5'],['lifestyleBg','Livsstilsbånd (20% 624)','#E6ECEA'],['bestsellersBg','Bestsellers (10% 624)','#F2F6F5'],['testimonialsBg','Testimonials (20% 624)','#E6ECEA'],['storyBg','Historie-strib','#80A097']] },
      { grp: 'Produktside', keys: [['pdpBandBg','USP-bånd','#80A097'],['founderVidBg','Founder-video (10% 624)','#F2F6F5'],['founderBg','Ambassadør (10% 624)','#F2F6F5'],['reviewsBg','Anmeldelser (20% 624)','#E6ECEA']] },
      { grp: 'Kundecases', keys: [['caseHeroBg','Case-hero','#80A097'],['caseCtaBg','Produkt-CTA','#80A097']] },
    ];
  }
  get NC_PALETTE() {
    return {
      'Sage 900 · #28403B': '#28403B', 'Sage 800 · #324E48': '#324E48', 'Sage 700 (Pantone 5477) · #3E5D58': '#3E5D58',
      'Sage 600 · #5A7A72': '#5A7A72', 'Sage 500 (Pantone 624) · #80A097': '#80A097', 'Sage 400 · #9AB4AC': '#9AB4AC',
      'Sage 300 · #B6C9C2': '#B6C9C2', 'Sage 200 · #D2DFDB': '#D2DFDB', 'Sage 100 · #E7EEEB': '#E7EEEB', 'Sage 50 · #F2F6F4': '#F2F6F4',
      'Stone 600 · #6F7271': '#6F7271', 'Stone 500 · #8C8F8F': '#8C8F8F', 'Stone 300 · #B9BBB8': '#B9BBB8', 'Stone 100 · #E4E4E0': '#E4E4E0',
      'Sand 500 · #DDBFA3': '#DDBFA3', 'Sand 300 · #E8D6C3': '#E8D6C3', 'Sand 100 · #F4ECE3': '#F4ECE3',
      'Linen 500 · #D5D1C3': '#D5D1C3', 'Linen 300 · #E3E0D6': '#E3E0D6', 'Linen 100 · #F1EFE8': '#F1EFE8',
      'Paper · #F6F4EE': '#F6F4EE', 'Paper 2 · #FBFAF5': '#FBFAF5', 'Hvid · #FFFFFF': '#FFFFFF',
      'Ink 900 · #233330': '#233330', 'Ink 700 · #3C4744': '#3C4744', 'Ink 500 · #5E6764': '#5E6764',
      'Ink 400 · #828A87': '#828A87', 'Ink 300 · #AAB0AD': '#AAB0AD', 'Ink 200 · #D3D6D1': '#D3D6D1', 'Ink 100 · #E7E8E2': '#E7E8E2',
      'Mauve · #B07A7F': '#B07A7F', 'Pink · #F9B5C4': '#F9B5C4', 'Berry · #84334E': '#84334E',
    };
  }
  _hex(v, fallback) {
    if (!v) return fallback;
    if (v.charAt(0) === '#') return v;
    return this.NC_PALETTE[v] || fallback;
  }
  _applyFeel() {
    const P = this.props;
    const corner = P.cornerStyle || 'Blød (standard)';
    const mood = P.imageMood || 'Naturlig';
    const motion = P.motionLevel || 'Balanceret';
    const CORNERS = {
      'Skarp — redaktionel': ['3px','4px','6px','8px','999px'],
      'Blød (standard)': ['8px','12px','18px','24px','999px'],
      'Organisk — meget rund': ['14px','22px','30px','40px','999px'],
    };
    const MOODS = {
      'Naturlig': 'none',
      'Varm & solbeskinnet': 'saturate(1.06) sepia(0.10) brightness(1.02)',
      'Rolig & afdæmpet': 'saturate(0.78) contrast(0.96)',
      'Klinisk & lys': 'saturate(0.92) brightness(1.06) contrast(1.03)',
    };
    const MOTION = { 'Levende': [38, 4500], 'Balanceret': [60, 7000], 'Rolig': [95, 12000], 'Ingen bevægelse': [0, 0] };
    const c = CORNERS[corner] || CORNERS['Blød (standard)'];
    const r = document.documentElement.style;
    ['--radius-sm','--radius-md','--radius-lg','--radius-xl','--radius-pill'].forEach((k, i) => r.setProperty(k, c[i]));
    const mv = MOTION[motion] || MOTION['Balanceret'];
    let el = document.getElementById('nc-feel');
    if (!el) { el = document.createElement('style'); el.id = 'nc-feel'; document.head.appendChild(el); }
    const filt = MOODS[mood] || 'none';
    el.textContent = [
      filt === 'none' ? '' : 'main img{filter:' + filt + ';}',
      mv[0] ? '.nc-rail{animation-duration:' + mv[0] + 's !important;}' : '.nc-rail{animation:none !important;}',
      mv[0] ? '' : '*{animation-play-state:paused !important;transition-duration:0ms !important;}',
    ].join('\n');
    const iv = mv[1];
    if (this._heroIv !== iv) {
      this._heroIv = iv;
      clearInterval(this._heroTimer);
      if (iv) this._heroTimer = setInterval(() => this.setState(s => ({ heroIndex: (s.heroIndex + 1) % this.HERO_COUNT })), iv);
    }
  }
  _paletteState() {
    if (this._pal) return this._pal;
    try { this._pal = JSON.parse(localStorage.getItem('nc_palette') || '{}'); } catch (e) { this._pal = {}; }
    return this._pal;
  }
  _setPaletteColor(key, hex) {
    const p = this._paletteState();
    p[key] = hex;
    try { localStorage.setItem('nc_palette', JSON.stringify(p)); } catch (e) {}
    this.forceUpdate();
  }
  _resetPalette() {
    this._pal = {};
    try { localStorage.removeItem('nc_palette'); } catch (e) {}
    this.forceUpdate();
  }
  _applyPalette() {
    const r = document.documentElement.style;
    const P = this._paletteState();
    const H = (v, f) => this._hex(v, f);
    const text = H(P.textGreen, '#3E5D58');
    const paper = H(P.paperColor, '#F6F4EE');
    r.setProperty('--sage-500', H(P.containerGreen, '#80A097'));
    r.setProperty('--sage-600', H(P.hoverGreen, '#657D79'));
    r.setProperty('--sage-700', text);
    r.setProperty('--sage-50', H(P.softGreen, '#E6ECEA'));
    r.setProperty('--sage-100', H(P.paleGreen, '#D9E3E0'));
    r.setProperty('--ink-700', H(P.bodyText, '#516D69'));
    r.setProperty('--ink-500', H(P.mutedText, '#788E8A'));
    r.setProperty('--paper', paper);
    r.setProperty('--cloud', H(P.cardColor, '#FFFFFF'));
    r.setProperty('--accent-berry', H(P.accentBerry, '#84334E'));
    r.setProperty('--nc-announce', H(P.announceColor, '#3E5D58'));
    r.setProperty('--nc-footer', H(P.footerColor, '#657D79'));
    r.setProperty('--nc-product-tint', 'color-mix(in srgb, ' + text + ' ' + (P.productTint ?? 10) + '%, #FFFFFF)');
    const sec = {
      '--nc-hero-bg': P.heroBg, '--nc-trust-bg': P.trustBg, '--nc-lifestyle-bg': P.lifestyleBg,
      '--nc-bestsellers-bg': P.bestsellersBg, '--nc-testimonials-bg': P.testimonialsBg, '--nc-story-bg': P.storyBg,
      '--nc-pdpband-bg': P.pdpBandBg, '--nc-foundervid-bg': P.founderVidBg, '--nc-founder-bg': P.founderBg,
      '--nc-reviews-bg': P.reviewsBg, '--nc-casehero-bg': P.caseHeroBg, '--nc-casecta-bg': P.caseCtaBg,
    };
    const secDefaults = { '--nc-trust-bg': '#F2F6F5', '--nc-lifestyle-bg': '#E6ECEA', '--nc-bestsellers-bg': '#F2F6F5', '--nc-testimonials-bg': '#E6ECEA', '--nc-foundervid-bg': '#F2F6F5', '--nc-founder-bg': '#F2F6F5', '--nc-reviews-bg': '#E6ECEA' };
    Object.keys(secDefaults).forEach(k => { if (!sec[k]) sec[k] = secDefaults[k]; });
    const fbg = H(P.footerColor, '#80A097');
    r.setProperty('--nc-footer-bg', fbg);
    const lum = (function(hex){ const c = hex.replace('#',''); const f = (i) => { const v = parseInt(c.substr(i,2),16)/255; return v <= 0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055, 2.4); }; return 0.2126*f(0)+0.7152*f(2)+0.0722*f(4); })(fbg);
    const onLight = lum > 0.45;
    r.setProperty('--nc-footer-text', onLight ? '#1F342F' : '#FFFFFF');
    r.setProperty('--nc-footer-link', onLight ? '#1F342F' : '#FFFFFF');
    r.setProperty('--nc-footer-head', onLight ? '#1F342F' : '#FFFFFF');
    r.setProperty('--nc-footer-dim', onLight ? '#1F342F' : 'rgba(255,255,255,0.88)');
    r.setProperty('--nc-footer-border', onLight ? 'rgba(31,52,47,0.22)' : 'rgba(246,244,238,0.4)');
    r.setProperty('--nc-footer-input', onLight ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.12)');
    Object.keys(sec).forEach(k => { const v = sec[k] ? this._hex(sec[k], null) : null; if (v) r.setProperty(k, v); else r.removeProperty(k); });
    document.body.style.background = paper;
  }
  _applyLifestyleDefaults() {
    const defs = {
      'home-lifestyle-featured': 'https://naturecell.dk/cdn/shop/files/Naturecell_CBD_skincare_pige_vasker_ansigt_kopier.webp?v=1757146053',
      'home-lifestyle-2': 'https://naturecell.dk/cdn/shop/files/NatureCell_CBD_skincare_billed_pige_ser_paa_produkterne_kopier.webp?v=1757145901',
      'home-lifestyle-3': 'https://naturecell.dk/cdn/shop/articles/kvinde_pigmentpletter_badevaerelse_aa646aae-9aec-4b09-ae91-921566456862.jpg?v=1780837322',
    };
    requestAnimationFrame(() => {
      Object.keys(defs).forEach(id => {
        const el = document.getElementById(id);
        if (el && !el.getAttribute('src')) el.setAttribute('src', defs[id]);
      });
    });
  }
  componentWillUnmount() { window.removeEventListener('resize', this._onResize); clearInterval(this._heroTimer); clearInterval(this._uspTimer); }
  heroSet(i) { this.setState({ heroIndex: ((i % this.HERO_COUNT) + this.HERO_COUNT) % this.HERO_COUNT }); clearInterval(this._heroTimer); this._heroTimer = setInterval(() => this.setState(s => ({ heroIndex: (s.heroIndex + 1) % this.HERO_COUNT })), 7000); }

  get DATA() {
    if (this._data) return this._data;
    const P = 'assets/products/';
    const products = [
      { id: 'skin-oil', name: 'CBD Hudplejeolie 1000 mg', size: '30 ml', eyebrow: 'NatureCell', price: 499, rating: 4.8, ratingCount: 126, img: 'https://naturecell.dk/cdn/shop/files/CBD_OIL_1000_MG.webp?v=1702385984', images: ['https://naturecell.dk/cdn/shop/files/CBD_OIL_1000_MG.webp?v=1702385984','https://naturecell.dk/cdn/shop/files/NatureCell_CBD_Hudpleje_1000mg_Hudolie.webp?v=1773930936','https://naturecell.dk/cdn/shop/files/CBD_OIL_1000_MG_MED_KASSE.webp?v=1773953753','https://naturecell.dk/cdn/shop/files/CBD_OIL_1000_MG_KASSE.webp?v=1773930936'], areas: ['ansigt','krop','haender','foedder'], needs: ['toer','fugt','genopbygning'], hero: true,
        desc: 'Fugtgivende CBD olie for intens pleje og fugt til din hud. Nu endnu mere raffineret med en klarere farve og mildere duft. CBD indgår i samspil med MCT-olie, der er kendt for sine fugtgivende og blødgørende egenskaber. Olien har en let konsistens og kan også blandes i andre kosmetiske produkter.',
        bullets: ['1000 mg CBD i 30 ml', 'Med MCT-olie — fugtgivende & blødgørende', 'Absorberes hurtigt, fedter ikke', 'Vegansk · uden syntetisk parfume'] },
      { id: 'day-cream', name: 'CBD Dagcreme', size: '50 ml', eyebrow: 'NatureCell', price: 399, rating: 4.7, ratingCount: 89, img: 'https://naturecell.dk/cdn/shop/files/DAY_CREME.webp?v=1702043004', images: ['https://naturecell.dk/cdn/shop/files/DAY_CREME.webp?v=1702043004','https://naturecell.dk/cdn/shop/files/Dayshop.webp?v=1702043004','https://naturecell.dk/cdn/shop/files/DAY_CREME_MED_AeSKE-1.webp?v=1773953753','https://naturecell.dk/cdn/shop/files/DAY_CREME_AeSKE.webp?v=1702043004'], areas: ['ansigt'], needs: ['fugt','sensitiv'],
        desc: 'Effektiv anti-ageing dagcreme med 250 mg CBD (cannabis), der bringer din hud i perfekt balance. Sammensætningen gør cremen velegnet til alle hudtyper – også tør, olieret og uren hud.',
        bullets: ['250 mg CBD', 'Aloe vera, sheasmør & agurkeekstrakt', 'Dermatologisk testet "Sehr Gut"', 'Til alle hudtyper · vegansk'] },
      { id: 'night-cream', name: 'CBD Natcreme', size: '50 ml', eyebrow: 'NatureCell', price: 449, rating: 4.8, ratingCount: 73, img: 'https://naturecell.dk/cdn/shop/files/NIGHT_CREAM_45336bf2-dec2-4016-91e7-19fd9e221993.webp?v=1718179141', images: ['https://naturecell.dk/cdn/shop/files/NIGHT_CREAM_45336bf2-dec2-4016-91e7-19fd9e221993.webp?v=1718179141','https://naturecell.dk/cdn/shop/files/NatureCell_CBD_Hudpleje_Natcreme.webp?v=1757865814','https://naturecell.dk/cdn/shop/files/NIGHT_CREAM_m_Kasse.webp?v=1773953753','https://naturecell.dk/cdn/shop/files/Naturecell_cbd_Nightcream.webp?v=1757865814','https://naturecell.dk/cdn/shop/files/NatureCellCBDHudplejeNatcremeZZZ.webp?v=1757865834'], areas: ['ansigt'], needs: ['toer','moden','genopbygning'],
        desc: 'Fugtighedsbevarende og vitaminrig natcreme med 250 mg CBD. Indeholder olier rige på antioxidanter — bl.a. mandelolie, squalane og mangokerneolie med naturligt A-, B- og C-vitamin — der ved gentagen brug bidrager til at opbygge hudens naturlige fugt om natten.',
        bullets: ['250 mg CBD', 'Mandelolie, squalane & mangokerneolie', 'Dermatologisk testet "Sehr Gut"', 'Til alle hudtyper · vegansk'] },
      { id: 'alfalab-day', name: 'ALFALAB Dagcreme', size: '50 ml', eyebrow: 'ALFALAB', price: 399, rating: 4.7, ratingCount: 18, img: 'https://naturecell.dk/cdn/shop/files/DAY-cream-skin-care-ALFALAB-pack-product.webp?v=1779818312', images: ['https://naturecell.dk/cdn/shop/files/DAY-cream-skin-care-ALFALAB-pack-product.webp?v=1779818312','https://naturecell.dk/cdn/shop/files/DAY-cream-skin-care-ALFALAB-pack.webp?v=1779818312','https://naturecell.dk/cdn/shop/files/DAY-cream-skin-care-ALFALAB-product.webp?v=1779818312'], areas: ['ansigt'], needs: ['fugt','sensitiv'],
        desc: 'ALFALAB Dagcreme — se skarp ud hele dagen. Let, hurtig og effektiv: den tilfører fugt, udjævner huden og trænger hurtigt ind uden at fedte. Du smører den på om morgenen — resten klarer den selv. Uden parfume, til alle hudtyper.',
        bullets: ['Holder huden fugtet hele dagen', 'Trænger hurtigt ind — fedter ikke', 'Mere ensartet, velplejet look', 'Uden parfume · til alle hudtyper'] },
      { id: 'alfalab-night', name: 'ALFALAB Natcreme', size: '50 ml', eyebrow: 'ALFALAB', price: 449, rating: 4.8, ratingCount: 14, img: 'https://naturecell.dk/cdn/shop/files/NIGHT-cream-skin-care-ALFALAB-pack-product.webp?v=1779818763', images: ['https://naturecell.dk/cdn/shop/files/NIGHT-cream-skin-care-ALFALAB-pack-product.webp?v=1779818763','https://naturecell.dk/cdn/shop/files/NIGHT-cream-skin-care-ALFALAB-pack.webp?v=1779818762','https://naturecell.dk/cdn/shop/files/NIGHT-cream-skin-care-ALFALAB-product.webp?v=1779818762'], areas: ['ansigt'], needs: ['toer','genopbygning'],
        desc: 'ALFALAB Natcreme — arbejder, mens du sover. Den tilfører fugt, blødgør huden og hjælper den med at finde balance igen efter en lang dag. Let, men effektiv konsistens, der trænger ind uden at fedte. Du sover, den arbejder — du vågner og ser skarpere ud. Vegansk, uden parfume.',
        bullets: ['Fugter & plejer huden natten igennem', 'Blødere, mere ensartet hud', 'Trænger hurtigt ind — fedter ikke', 'Vegansk · uden parfume'] },
      { id: 'alfalab-glow', name: 'GLOW ALFALAB Hudolie', size: '30 ml', eyebrow: 'ALFALAB', price: 499, rating: 4.8, ratingCount: 16, img: 'https://naturecell.dk/cdn/shop/files/GLOW-skin-oil-skin-care-ALFALAB-pack-product.webp?v=1779818979', images: ['https://naturecell.dk/cdn/shop/files/GLOW-skin-oil-skin-care-ALFALAB-pack-product.webp?v=1779818979','https://naturecell.dk/cdn/shop/files/GLOW-skin-oil-skin-care-ALFALAB-pack.webp?v=1779818981','https://naturecell.dk/cdn/shop/files/GLOW-skin-oil-skin-care-ALFALAB-product.webp?v=1779818980'], areas: ['ansigt','krop'], needs: ['fugt','genopbygning'],
        desc: 'GLOW ALFALAB Hudolie — når huden skal spille. Et par dråber giver huden et synligt løft: mere glød, mere liv. Trænger hurtigt ind, fedter ikke og efterlader huden skarp og velplejet. Brug den alene eller under din creme. Vegansk, uden parfume.',
        bullets: ['Giver huden en synlig glød', 'Gør huden blødere & mere jævn', 'Trænger hurtigt ind — fedter ikke', 'Vegansk · uden parfume'] },
      { id: 'alfalab-pakke', name: 'ALFALAB Pakketilbud — 3 produkter', size: 'Dag · Nat · Glow', eyebrow: 'ALFALAB Sampakke', price: 899, compareAt: 1347, save: 'Spar 33%', rating: 4.9, ratingCount: 12, img: 'https://naturecell.dk/cdn/shop/files/DAY-NIGHT-GLOW-BUNDEL_1.webp?v=1779962039', images: ['https://naturecell.dk/cdn/shop/files/DAY-NIGHT-GLOW-BUNDEL_1.webp?v=1779962039','https://naturecell.dk/cdn/shop/files/DAY-cream-skin-care-ALFALAB-pack-product.webp?v=1779818312','https://naturecell.dk/cdn/shop/files/NIGHT-cream-skin-care-ALFALAB-pack-product.webp?v=1779818763','https://naturecell.dk/cdn/shop/files/GLOW-skin-oil-skin-care-ALFALAB-pack-product.webp?v=1779818979'], bundle: true, areas: ['ansigt'], needs: ['fugt','toer'],
        desc: 'Den komplette ansigtsrutine — enkel, effektiv og lavet til mænd. Dagcreme (50 ml), Natcreme (50 ml) og GLOW Hudolie (30 ml) samlet i én pakke. Ingen 12 trin, intet unødvendigt fyld — bare det, du rent faktisk har brug for. Du sparer 33% mod løskøb.',
        bullets: ['Dagcreme · Natcreme · GLOW olie', 'Hudpleje uden bullshit — til mænd', 'Sundere, mere ensartet hud', 'Spar 33% vs. løskøb'] },
      { id: 'collagen', name: 'Collagen med hyaluronsyre', size: '300 g', eyebrow: 'NatureCell Kosttilskud', price: 399, rating: 4.8, ratingCount: 47, kost: true, img: 'https://cdn.shopify.com/s/files/1/0600/7111/6981/files/MARINE_COLLAGENkopier.webp?v=1701851451', images: ['https://cdn.shopify.com/s/files/1/0600/7111/6981/files/MARINE_COLLAGENkopier.webp?v=1701851451','https://cdn.shopify.com/s/files/1/0600/7111/6981/products/IMG_2235.webp?v=1701851451','https://cdn.shopify.com/s/files/1/0600/7111/6981/products/IMG_2237.webp?v=1701851451'], areas: ['ansigt'], needs: ['moden','fugt'],
        desc: 'Hudens fugtbooster (hud–hår–negle). Et proteintilskud i pulverform med marint kollagen fra dybhavsfisk beriget med hyaluronsyre. Hydrolyseret, så kroppen let optager det — neutral smag, let at indtage. En bøtte på 300 g er til 60 dages forbrug.',
        bullets: ['Marint kollagen 4800 mg + hyaluronsyre 200 mg pr. dosis', 'Styrker hud, hår, slimhinder og negle', 'Hydrolyseret — nem optagelse', 'Dokumenteret PFAS-frit (dybhavsfisk, FAO 27)'] },
      { id: 'collagen-3pak', name: '3-PAK Collagen med hyaluronsyre', size: '3 × 300 g', eyebrow: 'NatureCell Kosttilskud', price: 949, compareAt: 1197, save: 'Spar 21%', rating: 4.9, ratingCount: 18, kost: true, bundle: true, img: 'https://cdn.shopify.com/s/files/1/0600/7111/6981/files/MARINE_COLLAGEN3pak.webp?v=1701852054', images: ['https://cdn.shopify.com/s/files/1/0600/7111/6981/files/MARINE_COLLAGEN3pak.webp?v=1701852054','https://cdn.shopify.com/s/files/1/0600/7111/6981/files/Collagen.webp?v=1701852053','https://cdn.shopify.com/s/files/1/0600/7111/6981/files/collagenpic.webp?v=1701852053'], areas: ['ansigt'], needs: ['moden','fugt'],
        desc: 'Spar stort med tre bøtter Collagen med hyaluronsyre — nok til et halvt års daglig kur. Samme marine kollagen + hyaluronsyre, hydrolyseret for nem optagelse og dokumenteret PFAS-frit.',
        bullets: ['3 bøtter — ca. 6 måneders forbrug', 'Marint kollagen + hyaluronsyre', 'Spar 21% mod løskøb', 'Dokumenteret PFAS-frit'] },
      { id: 'cleansing-gel', name: 'CBD Rensegel', size: '100 ml', eyebrow: 'NatureCell', price: 299, rating: 4.6, ratingCount: 54, img: 'https://naturecell.dk/cdn/shop/files/Naturecell-CBD-CleansingGel-100ml-1200x1200px.webp?v=1752644963', images: ['https://naturecell.dk/cdn/shop/files/Naturecell-CBD-CleansingGel-100ml-1200x1200px.webp?v=1752644963','https://naturecell.dk/cdn/shop/files/NatureCell_CBD_Hudpleje_Rens.webp?v=1757865743','https://naturecell.dk/cdn/shop/files/Naturecell-CBD-CleansingGel-100ml_pack_og_box_1200x1200px.webp?v=1773953753','https://naturecell.dk/cdn/shop/files/Naturecell-CBD-CleansingGel-100ml-pack-1200x1200px.webp?v=1757865743'], areas: ['ansigt'], needs: ['uren','sensitiv'],
        desc: 'Mild ansigtsrens med CBD, der renser huden nænsomt og samtidig bevarer dens naturlige fugtbalance. Velegnet til daglig brug på alle hudtyper.',
        bullets: ['Mild, daglig ansigtsrens', 'Bevarer hudens fugtbalance', 'CBD & plejende planteolier', 'Til alle hudtyper · vegansk'] },
      { id: 'handcreme', name: 'CBD Håndcreme', size: '100 ml', eyebrow: 'NatureCell', price: 249, rating: 4.8, ratingCount: 96, img: 'https://naturecell.dk/cdn/shop/files/NatureCell_Hand_Cream_m_skygge_e94b32dd-03fa-48bc-a6d4-a18daa999c16.webp?v=1754304208', images: ['https://naturecell.dk/cdn/shop/files/NatureCell_Hand_Cream_m_skygge_e94b32dd-03fa-48bc-a6d4-a18daa999c16.webp?v=1754304208','https://naturecell.dk/cdn/shop/files/NatureCellCBDHudplejeHaanscreme.webp?v=1757865908'], areas: ['haender'], needs: ['toer','fugt'],
        desc: 'Blødgørende og beskyttende håndcreme med 250 mg CBD. Absorberes hurtigt uden at fedte og har en let forfriskende duft af pebermynte. Velegnet til daglig pleje og til hænder, der udsættes for hyppig håndvask.',
        bullets: ['250 mg CBD', 'Aloe vera, sheasmør & planteolier', 'Let duft af pebermynte', 'Absorberes uden at fedte'] },
      { id: 'serum', name: 'CBD Hyaluronic Serum', size: '30 ml', eyebrow: 'NatureCell', price: 299, rating: 4.9, ratingCount: 41, img: 'https://naturecell.dk/cdn/shop/files/Hyaluronic_Serum.webp?v=1718180256', images: ['https://naturecell.dk/cdn/shop/files/Hyaluronic_Serum.webp?v=1718180256','https://naturecell.dk/cdn/shop/files/NatureCellCBDHudplejeHyaluronicSerum.webp?v=1757866101','https://naturecell.dk/cdn/shop/files/NatureCell_Hyaluron_Serum_300_mg_30ml_Boxog_flaske.webp?v=1757866101','https://naturecell.dk/cdn/shop/files/NatureCell_Hyaluron_Serum_300_mg_30ml_Box.webp?v=1757866101'], areas: ['ansigt'], needs: ['fugt','moden'],
        desc: 'Fugtboostende serum med hyaluronsyre og 300 mg CBD, der tilfører huden intens fugt og giver et mere ensartet og udhvilet hududtryk. Bruges under dag- eller natcreme.',
        bullets: ['300 mg CBD + hyaluronsyre', 'Intens fugt', 'Brug under dag- eller natcreme', 'Til alle hudtyper · vegansk'] },
      { id: 'lip-balm', name: 'CBD Lip Balm', size: '6 ml', eyebrow: 'NatureCell', price: 79, rating: 4.8, ratingCount: 52, img: 'https://naturecell.dk/cdn/shop/files/LIP_BALM.webp?v=1701702437', images: ['https://naturecell.dk/cdn/shop/files/LIP_BALM.webp?v=1701702437','https://naturecell.dk/cdn/shop/files/NatureCell_CBD_Hudpleje_Lip_Balm_Pack.webp?v=1757864612','https://naturecell.dk/cdn/shop/files/NatureCell_CBD_Hudpleje_Lip_Balm_Cathrine.webp?v=1757864612'], areas: ['ansigt'], needs: ['toer','sensitiv'],
        desc: 'CBD Lip Balm til daglig læbepleje med fokus på fugt og komfort. Den bløde balm plejer den sarte hud på læberne, så de føles bløde og velplejede. Formuleret med 100% ingredienser af naturlig oprindelse (ISO 16128) — nem at have med på farten.',
        bullets: ['60 mg CBD', '100% naturlig oprindelse', 'Fugter & blødgør tørre læber', 'Nem at have med'] },
      { id: 'eye-gel', name: 'CBG Eye Gel', size: '30 ml', eyebrow: 'NatureCell', price: 349, rating: 4.8, ratingCount: 28, img: 'https://naturecell.dk/cdn/shop/files/CBG_Eye_Gel_6f45642e-fcbe-4257-bc70-abbb748f86ba.webp?v=1718181810', images: ['https://naturecell.dk/cdn/shop/files/CBG_Eye_Gel_6f45642e-fcbe-4257-bc70-abbb748f86ba.webp?v=1718181810','https://naturecell.dk/cdn/shop/files/NatureCellCBDHudplejeEyeGel.webp?v=1757866390','https://naturecell.dk/cdn/shop/files/CBG_Eye_Gel_Total.webp?v=1757866390','https://naturecell.dk/cdn/shop/files/CBG_Eye_Gel_kasse.webp?v=1757866390'], areas: ['ansigt'], needs: ['moden','fugt'],
        desc: 'En specialiseret formel til den følsomme hud omkring øjnene. Et mildt serum rigt på CBG, niacinamid, hyaluronsyre og nærende ingredienser, der hjælper med at udglatte, opstramme og fugte øjenområdet. 97,7% ingredienser af naturlig oprindelse (ISO 16128).',
        bullets: ['Med CBG, niacinamid & hyaluronsyre', 'Udglatter & opstrammer øjenområdet', 'Let, fugtgivende gel', '97,7% naturlig oprindelse'] },
      { id: 're-new-balm', name: 'CBD Re-New Balm', size: '30 ml', eyebrow: 'NatureCell', price: 369, rating: 4.9, ratingCount: 24, img: 'https://naturecell.dk/cdn/shop/files/NatureCell-CBD-Re-New-Balm-900mg-30ml-1200x1200px_356bfda4-f43f-4e86-b676-83497cd20105.webp?v=1756392796', images: ['https://naturecell.dk/cdn/shop/files/NatureCell-CBD-Re-New-Balm-900mg-30ml-1200x1200px_356bfda4-f43f-4e86-b676-83497cd20105.webp?v=1756392796','https://naturecell.dk/cdn/shop/files/NatureCell-CBD-Re-New-Balm-900mg-30ml-1200x1200px-Miljoe.webp?v=1756392796'], areas: ['ansigt','krop','haender'], needs: ['toer','genopbygning'],
        desc: 'Intensiv hudpleje med hele 900 mg CBD kombineret med nærende planteolier og bivoks. Tilfører intensiv fugt til tør hud, hjælper med at bevare hudens naturlige barriere og efterlader huden blød og velplejet. 100% ingredienser af naturlig oprindelse (ISO 16128).',
        bullets: ['Hele 900 mg CBD', 'Med planteolier & bivoks', 'Til tørre områder & læber', '100% naturlig oprindelse'] },
      { id: 'body-lotion', name: 'CBD Bodylotion', size: '200 ml', eyebrow: 'NatureCell', price: 249, rating: 4.8, ratingCount: 112, img: 'https://naturecell.dk/cdn/shop/files/NatureCell_Body_Lotion_m_skygge.webp?v=1718175750', images: ['https://naturecell.dk/cdn/shop/files/NatureCell_Body_Lotion_m_skygge.webp?v=1718175750','https://naturecell.dk/cdn/shop/files/NatureCell_CBD_Hudpleje_Bodylotion.webp?v=1757865516'], areas: ['krop','haender','foedder'], needs: ['toer','fugt'],
        desc: 'Fugtgivende CBD bodylotion med sheasmør og æbleekstrakt, der plejer, blødgør og forbedrer hudens elasticitet. Cremet konsistens, der absorberes hurtigt uden at fedte, med en let forfriskende duft af citrus.',
        bullets: ['200 mg CBD', 'Med sheasmør & æbleekstrakt', 'Forbedrer hudens elasticitet', 'Absorberes uden at fedte · til alle hudtyper'] },
      { id: 'body-oil', name: 'CBD Body Oil', size: '100 ml', eyebrow: 'NatureCell', price: 299, rating: 4.8, ratingCount: 44, img: 'https://naturecell.dk/cdn/shop/files/NatureCell-CBD-Body-Oil-100ml-packshot-1200x1200px.webp?v=1740562816', images: ['https://naturecell.dk/cdn/shop/files/NatureCell-CBD-Body-Oil-100ml-packshot-1200x1200px.webp?v=1740562816','https://naturecell.dk/cdn/shop/files/NatureCell-CBD-Body-Oil-100ml-miljoe-1200x1200px_4d0687a7-72ca-4c3c-9117-cde1de98dd7b.webp?v=1740562890','https://naturecell.dk/cdn/shop/files/NatureCellCBDHudplejeBodyOilHaand.webp?v=1757866537','https://naturecell.dk/cdn/shop/files/NatureCellCBDHudplejeBodyOil.webp?v=1757866546'], areas: ['krop','haender','foedder'], needs: ['toer','fugt'],
        desc: 'Body Oil med 500 mg CBD, skånsomt formuleret med mandel- og jojobaolie og E-vitamin. 100% ingredienser af naturlig oprindelse (ISO 16128). Let forfriskende duft af lavendel og geranium — også fantastisk til massage.',
        bullets: ['500 mg CBD', 'Mandel- & jojobaolie + E-vitamin', '100% naturlig oprindelse', 'Duft af lavendel & geranium'] },
      { id: 'deodorant', name: 'CBD Deodorant', size: '50 ml', eyebrow: 'NatureCell', price: 129, rating: 4.6, ratingCount: 37, img: 'https://naturecell.dk/cdn/shop/files/DEODORANT_300_MG.webp?v=1701702716', images: ['https://naturecell.dk/cdn/shop/files/DEODORANT_300_MG.webp?v=1701702716','https://naturecell.dk/cdn/shop/files/NatureCellCBDHudplejeDeoLF.webp?v=1757866430','https://naturecell.dk/cdn/shop/files/NatureCellCBDHudplejeDeo.webp?v=1757866437','https://naturecell.dk/cdn/shop/files/NatureCellCBDHudplejeDeoBad.webp?v=1757866454'], areas: ['krop'], needs: ['sensitiv'],
        desc: 'Mild roll-on deodorant med 300 mg CBD og 97% ingredienser af naturlig oprindelse — uden aluminium og syntetisk parfume. Reducerer uønsket lugt og efterlader huden frisk og velplejet. Let, frisk duft til både kvinder og mænd.',
        bullets: ['300 mg CBD', 'Uden aluminium', '97% naturlig oprindelse', 'Mild · til daglig brug'] },
      { id: 'fodcreme', name: 'CBD Fodcreme', size: '100 ml', eyebrow: 'NatureCell', price: 299, rating: 4.7, ratingCount: 41, img: 'https://naturecell.dk/cdn/shop/files/Naturecell-CBD-Foot-Cream-100ml-1200x1200px.webp?v=1757362917', images: ['https://naturecell.dk/cdn/shop/files/Naturecell-CBD-Foot-Cream-100ml-1200x1200px.webp?v=1757362917','https://naturecell.dk/cdn/shop/files/NatureCellCBDHudplejeFodcreme.webp?v=1757865625','https://naturecell.dk/cdn/shop/files/NatureCell-Foot_Cream_Stemning.webp?v=1757865625'], areas: ['foedder'], needs: ['toer'],
        desc: 'Forfriskende og blødgørende fodcreme med 250 mg CBD til daglig pleje af fødderne. Fugtighedsbevarende urea og glycerin binder fugt i huden, mens sheasmør og planteolier blødgør. Menthol og eucalyptus giver en frisk, kølende fornemmelse. Rig konsistens, der efterlader fødderne bløde og smidige.',
        bullets: ['250 mg CBD', 'Med urea, glycerin & sheasmør', 'Kølende menthol & eucalyptus', 'Til tørre fødder & hæle'] },
      { id: 'shampoo', name: 'CBD Shampoo 750 mg', size: '300 ml', eyebrow: 'NatureCell', price: 299, rating: 4.5, ratingCount: 38, img: 'https://naturecell.dk/cdn/shop/files/NatureCell-CBD-Shampoo-300ml-packshot-1200x1200px.webp?v=1740562781', images: ['https://naturecell.dk/cdn/shop/files/NatureCell-CBD-Shampoo-300ml-packshot-1200x1200px.webp?v=1740562781','https://naturecell.dk/cdn/shop/files/NatureCell-CBD-Shampoo-300ml-miljoe-1200x1200px.webp?v=1740562781'], areas: ['haar'], needs: ['sensitiv'],
        desc: 'Shampoo med 750 mg CBD, skånsomt formuleret med kokosbaserede tensider for en mild, men effektiv rens. Hydrolyseret silke- og hvedeprotein understøtter hårets styrke, mens havtornolie og CBD bidrager med antioxidanter og pleje til hår og hovedbund. Let duft af citrus.',
        bullets: ['750 mg CBD', 'Med silke- & hvedeprotein', 'Havtornolie & antioxidanter', 'Til alle hår- og hudtyper'] },
      { id: 'conditioner', name: 'CBD Conditioner', size: '300 ml', eyebrow: 'NatureCell', price: 299, rating: 4.6, ratingCount: 31, img: 'https://naturecell.dk/cdn/shop/files/NatureCell-CBD-Conditioner-300ml-packshot-1200x1200px.webp?v=1740562752', images: ['https://naturecell.dk/cdn/shop/files/NatureCell-CBD-Conditioner-300ml-packshot-1200x1200px.webp?v=1740562752','https://naturecell.dk/cdn/shop/files/NatureCell-CBD-Conditioner-300ml-miljoe-1200x1200px.webp?v=1740562752'], areas: ['haar'], needs: ['toer','sensitiv'],
        desc: 'Conditioner med 750 mg CBD, skånsomt formuleret med sheasmør og proteiner fra hvede og silke, der bevarer hårets fugtbalance og gør det nemmere at rede ud. Havtornolie og CBD bidrager med pleje til hår og hovedbund. Let duft af citrus.',
        bullets: ['750 mg CBD', 'Sheasmør + silke- & hvedeprotein', 'Bevarer fugtbalance, nem at rede ud', 'Til alle hår- og hudtyper'] },
      { id: 'love', name: 'CBD Love Lubricant', size: '30 ml', eyebrow: 'NatureCell', price: 129, rating: 4.7, ratingCount: 23, img: 'https://naturecell.dk/cdn/shop/files/LOVE_75_MG.webp?v=1701704999', images: ['https://naturecell.dk/cdn/shop/files/LOVE_75_MG.webp?v=1701704999','https://naturecell.dk/cdn/shop/files/NatureCellCBDHudplejeLove.webp?v=1757866862','https://naturecell.dk/cdn/shop/files/LOVE_75_MG_MED_KASSE.webp?v=1757866862','https://naturecell.dk/cdn/shop/files/LOVE.webp?v=1757866862'], areas: ['intim'], needs: ['fugt','sensitiv'],
        desc: 'Vandbaseret intimglidecreme med 75 mg CBD, blidt og beroligende formuleret til at nære og fugte huden. Kompatibel med silikone- og gummilegetøj samt latex-, polyurethan- og polyisopren-kondomer. Skylles nemt af med vand. 99,2% ingredienser af naturlig oprindelse.',
        bullets: ['75 mg CBD · vandbaseret', 'Fugter & beroliger huden', 'Kondom- & legetøjsvenlig', '99,2% naturlig oprindelse'] },
      { id: 'drops-500', name: 'CBD Olie 5% · 500 mg', size: '10 ml', eyebrow: 'NatureCell', price: 199, rating: 4.7, ratingCount: 64, img: 'https://naturecell.dk/cdn/shop/files/CBD_DROPS_500_MG_AeSKEkopier.webp?v=1740461056', images: ['https://naturecell.dk/cdn/shop/files/CBD_DROPS_500_MG_AeSKEkopier.webp?v=1740461056','https://naturecell.dk/cdn/shop/files/CBD_DROPS_500MG_MED_AeSKE2.webp?v=1740461056','https://naturecell.dk/cdn/shop/files/CBD_DROPS_500_MG_AeSKEkopier_1.webp?v=1740461056','https://naturecell.dk/cdn/shop/files/NatureCell_CBD_oile_5_hudpleje.webp?v=1740461056'], kraft: true, areas: ['krop'], needs: ['genopbygning'],
        desc: 'CBD olie 5% — mild styrke med 500 mg CBD i 10 ml. Koldpresset hampfrøolie beriget med fuldspektret hampekstrakt, naturlige terpener og antioxidanter. Et godt sted at starte. Registreret som kosmetik med CPNP-nummer.',
        bullets: ['5% · 500 mg CBD i 10 ml', 'Mild styrke — god at starte med', 'Koldpresset hampfrøolie', '100% naturlig · kosmetisk brug'] },
      { id: 'drops-1000', name: 'CBD Olie 10% · 1000 mg', size: '10 ml', eyebrow: 'NatureCell', price: 399, rating: 4.8, ratingCount: 207, img: 'https://naturecell.dk/cdn/shop/files/CBD_DROPS_1000_MG.webp?v=1701848353', images: ['https://naturecell.dk/cdn/shop/files/CBD_DROPS_1000_MG.webp?v=1701848353','https://naturecell.dk/cdn/shop/files/CBD_DROPS_1000_MG_AeSKE.webp?v=1701848353','https://naturecell.dk/cdn/shop/files/CBD_DROPS_1000_MG_AeSKEkopier.webp?v=1701843524','https://naturecell.dk/cdn/shop/files/CBD_DROPS_1000_MG-3pcs.webp?v=1730010341'], kraft: true, areas: ['krop'], needs: ['genopbygning'],
        desc: 'CBD olie 10% med 1000 mg CBD i 10 ml. Koldpresset hampfrøolie beriget med fuldspektret hampekstrakt, naturlige terpener og antioxidanter. Registreret som kosmetik med CPNP-nummer — brug 2-3 dråber morgen og aften på områder, hvor intens pleje ønskes.',
        bullets: ['10% · 1000 mg CBD i 10 ml', 'Koldpresset hampfrøolie', 'Rig på terpener & antioxidanter', '100% naturlig · kosmetisk brug'] },
      { id: 'drops-1500', name: 'CBD Olie 15% · 1500 mg', size: '10 ml', eyebrow: 'NatureCell', price: 499, rating: 4.9, ratingCount: 142, img: 'https://naturecell.dk/cdn/shop/files/CBD_DROPS_1500_MG.webp?v=1740460585', images: ['https://naturecell.dk/cdn/shop/files/CBD_DROPS_1500_MG.webp?v=1740460585','https://naturecell.dk/cdn/shop/files/CBD_DROPS_1500_MG_AeSKE.webp?v=1740460585','https://naturecell.dk/cdn/shop/files/CBD_DROPS_1500_MG_MED_AeSKE.webp?v=1740460585','https://naturecell.dk/cdn/shop/files/NatureCell_CBD_oile_15_hudpleje.webp?v=1740460585'], kraft: true, areas: ['krop'], needs: ['genopbygning'],
        desc: 'CBD olie 15% — vores mest valgte styrke med 1500 mg CBD i 10 ml. Koldpresset hampfrøolie beriget med fuldspektret hampekstrakt, naturlige terpener og antioxidanter. Registreret som kosmetik med CPNP-nummer.',
        bullets: ['15% · 1500 mg CBD i 10 ml', 'Vores mest valgte styrke', 'Koldpresset hampfrøolie', '100% naturlig · kosmetisk brug'] },
      { id: 'drops-2000', name: 'CBD Olie 20% · 2000 mg', size: '10 ml', eyebrow: 'NatureCell', price: 599, rating: 4.9, ratingCount: 96, img: 'https://naturecell.dk/cdn/shop/files/CBD_DROPS_2000_MGkopier1.webp?v=1740460824', images: ['https://naturecell.dk/cdn/shop/files/CBD_DROPS_2000_MGkopier1.webp?v=1740460824','https://naturecell.dk/cdn/shop/files/CBD_DROPS_2000_MG_MED_AeSKE.webp?v=1740460824','https://naturecell.dk/cdn/shop/files/CBD_DROPS_2000_MGkopier2.webp?v=1740460824','https://naturecell.dk/cdn/shop/files/NatureCell_CBD_oile_20_hudpleje.webp?v=1740460740'], kraft: true, areas: ['krop'], needs: ['genopbygning'],
        desc: 'CBD olie 20% med maksimal styrke — 2000 mg CBD i 10 ml. Koldpresset hampfrøolie beriget med fuldspektret hampekstrakt, naturlige terpener og antioxidanter. Registreret som kosmetik med CPNP-nummer.',
        bullets: ['20% · 2000 mg CBD i 10 ml', 'Maksimal styrke', 'Koldpresset hampfrøolie', '100% naturlig · kosmetisk brug'] },
      { id: 'complete', name: 'Komplet CBD Hudpleje', size: 'Rens · Dag · Nat · Olie', eyebrow: 'NatureCell Sampakke', price: 1198, compareAt: 1646, save: 'Spar 27%', rating: 4.9, ratingCount: 64, img: 'https://naturecell.dk/cdn/shop/files/Naturecell-CBD-Hudpleje-Kompletpakken_1200x1200px.webp?v=1773953753', images: ['https://naturecell.dk/cdn/shop/files/Naturecell-CBD-Hudpleje-Kompletpakken_1200x1200px.webp?v=1773953753','https://naturecell.dk/cdn/shop/files/NIGHT_CREAM_m_Kasse.webp?v=1773953753','https://naturecell.dk/cdn/shop/files/CBD_OIL_1000_MG_MED_KASSE.webp?v=1773953753','https://naturecell.dk/cdn/shop/files/DAY_CREME_MED_AeSKE-1.webp?v=1773953753','https://naturecell.dk/cdn/shop/files/Naturecell-CBD-CleansingGel-100ml_pack_og_box_1200x1200px.webp?v=1773953753','https://naturecell.dk/cdn/shop/files/IMG_4876.jpg?v=1773953753'], bundle: true, areas: ['ansigt'], needs: ['fugt','toer','moden'],
        desc: 'Få effektiv pleje døgnet rundt med vores komplette CBD-hudplejesæt. Pakken indeholder CBD Rensegel, Dagcreme, Natcreme og CBD Hudplejeolie 1000 mg — alt du behøver til en effektiv daglig rutine, og du sparer 27% mod løskøb. Anbefalet af kosmetolog Heidi Sommer.',
        bullets: ['Rens · Dagcreme · Natcreme · Olie 1000 mg', 'Anbefalet af kosmetolog Heidi Sommer', 'Dag- & natcreme dermatologisk testet (Dermatest)', 'Spar 27% vs. løskøb · til alle hudtyper'] },
      { id: 'all-day-skin', name: 'All Day CBD Skin Care', size: 'Dagcreme + Natcreme', eyebrow: 'NatureCell Sampakke', price: 679, compareAt: 848, save: 'Spar 20%', rating: 4.9, ratingCount: 47, img: 'https://naturecell.dk/cdn/shop/files/DAY_CREME_MED_AeSKE-1.webp?v=1773953753', images: ['https://naturecell.dk/cdn/shop/files/DAY_CREME_MED_AeSKE-1.webp?v=1773953753','https://naturecell.dk/cdn/shop/files/NIGHT_CREAM_m_Kasse.webp?v=1773953753','https://naturecell.dk/cdn/shop/files/DAY_CREME.webp?v=1702043004','https://naturecell.dk/cdn/shop/files/NIGHT_CREAM_45336bf2-dec2-4016-91e7-19fd9e221993.webp?v=1718179141'], bundle: true, areas: ['ansigt'], needs: ['fugt','toer'],
        desc: 'Den perfekte dag-til-nat-rutine: CBD Dagcreme og CBD Natcreme samlet i én pakke. Pleje og fugt døgnet rundt til alle hudtyper — og du sparer 20% mod løskøb.',
        bullets: ['Dagcreme + Natcreme', 'Pleje morgen og aften', 'Dermatologisk testet (Dermatest)', 'Spar 20% vs. løskøb'] },
      { id: 'hand-sampakke', name: 'Hånd-Sampakke', size: 'Håndcreme + Olie', eyebrow: 'NatureCell Sampakke', price: 599, compareAt: 748, save: 'Spar 20%', rating: 4.9, ratingCount: 38, img: 'https://naturecell.dk/cdn/shop/files/NatureCell_Hand_Cream_m_skygge_e94b32dd-03fa-48bc-a6d4-a18daa999c16.webp?v=1754304208', images: ['https://naturecell.dk/cdn/shop/files/NatureCell_Hand_Cream_m_skygge_e94b32dd-03fa-48bc-a6d4-a18daa999c16.webp?v=1754304208','https://naturecell.dk/cdn/shop/files/CBD_OIL_1000_MG.webp?v=1702385984','https://naturecell.dk/cdn/shop/files/NatureCellCBDHudplejeHaanscreme.webp?v=1757865908'], bundle: true, areas: ['haender'], needs: ['toer','fugt'],
        desc: 'Den ideelle pleje til tørre, belastede hænder: CBD Håndcreme og CBD Hudplejeolie 1000 mg samlet. Olien giver intens pleje, håndcremen forsegler og blødgør — du sparer 20% mod løskøb.',
        bullets: ['Håndcreme + Olie 1000 mg', 'Til tørre, slidte hænder', 'Absorberes uden at fedte', 'Spar 20% vs. løskøb'] },
      { id: 'hair-sampakke', name: 'Komplet Hårpleje', size: 'Shampoo + Conditioner', eyebrow: 'NatureCell Sampakke', price: 448, compareAt: 598, save: 'Spar 25%', rating: 4.7, ratingCount: 29, img: 'https://naturecell.dk/cdn/shop/files/NatureCell-CBD-Shampoo-300ml-packshot-1200x1200px.webp?v=1740562781', images: ['https://naturecell.dk/cdn/shop/files/NatureCell-CBD-Shampoo-300ml-packshot-1200x1200px.webp?v=1740562781','https://naturecell.dk/cdn/shop/files/NatureCell-CBD-Conditioner-300ml-packshot-1200x1200px.webp?v=1740562752','https://naturecell.dk/cdn/shop/files/NatureCell-CBD-Shampoo-300ml-miljoe-1200x1200px.webp?v=1740562781'], bundle: true, areas: ['haar'], needs: ['toer','sensitiv'],
        desc: 'Komplet hårplejerutine med CBD: Shampoo og Conditioner med 750 mg CBD hver. Skånsom rens og dybdegående pleje til hår og hovedbund — du sparer 25% mod løskøb.',
        bullets: ['Shampoo + Conditioner', '750 mg CBD i hver', 'Silke- & hvedeprotein', 'Spar 25% vs. løskøb'] },
      { id: 'krop-sampakke', name: 'Hel Kropspleje CBD & CBG', size: 'Olie + Body Oil + Eye Gel', eyebrow: 'NatureCell Sampakke', price: 919, compareAt: 1147, save: 'Spar 20%', rating: 4.9, ratingCount: 22, img: 'https://naturecell.dk/cdn/shop/files/CBD_OIL_1000_MG.webp?v=1702385984', images: ['https://naturecell.dk/cdn/shop/files/CBD_OIL_1000_MG.webp?v=1702385984','https://naturecell.dk/cdn/shop/files/NatureCell-CBD-Body-Oil-100ml-packshot-1200x1200px.webp?v=1740562816','https://naturecell.dk/cdn/shop/files/CBG_Eye_Gel_6f45642e-fcbe-4257-bc70-abbb748f86ba.webp?v=1718181810'], bundle: true, areas: ['krop','ansigt'], needs: ['fugt','genopbygning'],
        desc: 'Pleje fra top til tå med CBD og CBG: Hudplejeolie 1000 mg, Body Oil og CBG Eye Gel samlet i én pakke. Du sparer 20% mod løskøb.',
        bullets: ['Olie + Body Oil + Eye Gel', 'CBD & CBG i samspil', 'Til ansigt og krop', 'Spar 20% vs. løskøb'] },
      { id: 'all-day-facial', name: 'Facial CBD Care', size: 'Dag · Nat · Olie', eyebrow: 'NatureCell Sampakke', price: 899, compareAt: 1347, save: 'Spar 33%', rating: 4.9, ratingCount: 31, img: 'https://naturecell.dk/cdn/shop/files/DAY_CREME_MED_AeSKE-1.webp?v=1773953753', images: ['https://naturecell.dk/cdn/shop/files/DAY_CREME_MED_AeSKE-1.webp?v=1773953753','https://naturecell.dk/cdn/shop/files/NIGHT_CREAM_m_Kasse.webp?v=1773953753','https://naturecell.dk/cdn/shop/files/CBD_OIL_1000_MG_MED_KASSE.webp?v=1773953753'], bundle: true, areas: ['ansigt'], needs: ['fugt','moden'],
        desc: 'Den komplette ansigtsrutine med CBD: Dagcreme, Natcreme og Hudplejeolie 1000 mg. Pleje og fugt morgen og aften — du sparer hele 33% mod løskøb.',
        bullets: ['Dagcreme · Natcreme · Olie', 'Komplet ansigtsrutine', 'Til alle hudtyper', 'Spar 33% vs. løskøb'] },
    ];
    const byId = Object.fromEntries(products.map(p => [p.id, p]));
    const areas = [
      { key: 'ansigt', label: 'Ansigt', img: P + 'day-cream.webp', desc: 'Creme, serum & rens' },
      { key: 'haender', label: 'Hænder', img: P + 'skin-oil.webp', desc: 'Tørre, slidte hænder' },
      { key: 'krop', label: 'Krop', img: P + 'body-lotion.webp', desc: 'Lotion & olie' },
      { key: 'foedder', label: 'Fødder', img: P + 'skin-oil.webp', desc: 'Tørre hæle & fødder' },
      { key: 'haar', label: 'Hår', img: P + 'shampoo.webp', desc: 'Shampoo & pleje' },
      { key: 'intim', label: 'Intim', img: P + 'love-lubricant.webp', desc: 'Skånsom pleje' },
    ];
    const needs = [
      { key: 'toer', label: 'Tør hud', img: P + 'night-cream.webp', tint: 'var(--sand-100)', desc: 'Nærende fugt' },
      { key: 'fugt', label: 'Fugt', img: P + 'hyaluron-serum.webp', tint: 'var(--sage-50)', desc: 'Boost & balance' },
      { key: 'moden', label: 'Moden hud', img: P + 'night-cream.webp', tint: 'var(--linen-100)', desc: 'Fasthed & glød' },
      { key: 'sensitiv', label: 'Sensitiv hud', img: P + 'cleansing-gel.webp', tint: 'var(--sage-50)', desc: 'Mild & rolig' },
      { key: 'uren', label: 'Uren hud', img: P + 'cleansing-gel.webp', tint: 'var(--sand-100)', desc: 'Rens & balance' },
      { key: 'genopbygning', label: 'Genopbygning', img: P + 'skin-oil.webp', tint: 'var(--linen-100)', desc: 'Reparation' },
    ];
    const areaLabels = Object.fromEntries(areas.map(a => [a.key, a.label]));
    const needLabels = Object.fromEntries(needs.map(n => [n.key, n.label]));
    const NA = 'https://naturecell.dk/cdn/shop/articles/';
    const cases = [
      { id: 'birgit', name: 'Birgit Kortbæk', area: 'haender', title: 'Håndcreme der ikke fedter', hasVideo: true, yt: 'dMDaX1Q3XS4', products: ['body-lotion','skin-oil'], img: NA + 'IMG_6576_c13f8f50-a5d4-49f6-acb7-cd2b966a735d_640x640_crop_center.jpg?v=1781707452',
        quote: 'Endelig en håndcreme, der ikke fedter – så jeg kan male videre med det samme.',
        paras: ['Da vi besøgte Birgit Kortbæk i hendes atelier, var hun i fuld gang med at male. Farverne fyldte lærredet, penslerne lå klar, og hænderne arbejdede koncentreret med de små detaljer.','Som kunstner bruger Birgit sine hænder hele dagen, og hun havde længe ledt efter en håndcreme, der plejede uden at efterlade en fedtet hinde. NatureCells håndpleje blev en fast del af hendes hverdag i atelieret.'],
        author: 'Lizbeth Falk', videoId: 'dMDaX1Q3XS4', tags: ['Håndcreme','Tørre hænder'],
        body: [
          { t: 'p', x: 'Da vi besøgte Birgit Kortbæk i hendes atelier, var hun i fuld gang med at male. Farverne fyldte lærredet, penslerne lå klar, og hænderne arbejdede koncentreret med de små detaljer.' },
          { t: 'q', x: 'Men inden hun gik i gang, gjorde hun noget, vi ikke havde forventet. Hun smurte håndcreme på.' },
          { t: 'q', x: 'Jeg bruger faktisk håndcremen både før og efter jeg maler, fortæller Birgit.' },
          { t: 'p', x: 'For Birgit er kunsten en stor passion i fritiden, og derfor bruger hun mange timer ved staffeliet. Samtidig betyder det også meget for hende, at hendes hænder ser pæne og velplejede ud i hverdagen og på arbejdet. Derfor passer hun generelt godt på sine hænder.' },
          { t: 'h', x: 'Derfor bruger Birgit håndcreme før hun maler' },
          { t: 'p', x: 'Noget af det, Birgit sætter størst pris på ved NatureCell Håndcreme, er, at den trænger hurtigt ind og ikke fedter.' },
          { t: 'p', x: 'Men der er også en anden grund til, at hun bruger den, inden hun går i gang med at male.' },
          { t: 'q', x: 'Jeg oplever, at malingen ikke sætter sig så meget fast på hænderne, når jeg har smurt håndcreme på først. Ofte kan jeg næsten nuldre malingen af bagefter uden at skulle skrubbe hænderne så meget.' },
          { t: 'p', x: 'For Birgit betyder det, at hun ikke behøver at vaske eller rense hænderne lige så hårdt efter arbejdet ved staffeliet.' },
          { t: 'p', x: 'Samtidig sætter hun pris på, at håndcremen hurtigt absorberes af huden, så hun kan fortsætte sit arbejde uden at føle sig fedtet på hænderne.' },
          { t: 'h', x: 'Pleje både under og efter arbejdet' },
          { t: 'p', x: 'For Birgit er håndcremen ikke kun noget, hun bruger før hun maler. Den er også blevet en fast del af rutinen bagefter.' },
          { t: 'p', x: 'Efter en dag med maling, håndvask og rengøring bruger hun håndcremen igen som en del af sin daglige håndpleje.' },
          { t: 'p', x: 'NatureCell Håndcreme er udviklet med fokus på både komfort, fugt og daglig pleje af hænderne.' },
          { t: 'p', x: 'CBD indgår som en aktiv ingrediens i formuleringen og arbejder sammen med blandt andet aloe vera, glycerin, sheasmør og planteolier, som er kendt for deres fugtgivende og plejende egenskaber. Kombinationen er udviklet med henblik på at give huden komfort og pleje – også ved hyppig brug.' },
          { t: 'p', x: 'Håndcremen indeholder desuden E-vitamin, panthenol og niacinamid, som er velkendte ingredienser i moderne hudpleje og bidrager til et velplejet udseende af huden.' },
          { t: 'p', x: 'For at gøre formuleringen ekstra nærende er den beriget med planteolier fra blandt andet solsikke, saflor, kokos og hyben. Sammen med sheasmør giver de håndcremen dens rige karakter, samtidig med at den absorberes hurtigt og ikke efterlader hænderne fedtede.' },
          { t: 'q', x: 'Det er netop balancen mellem de mange plejende ingredienser og den hurtige indtrængning, som Birgit fremhæver som en af grundene til, at håndcremen er blevet en fast del af hendes hverdag.' },
          { t: 'h', x: 'Ikke kun kunstnere vælger denne håndcreme' },
          { t: 'p', x: 'Selvom Birgit bruger håndcremen i sit atelier, er hun langt fra den eneste.' },
          { t: 'p', x: 'Vi møder kunder fra mange forskellige erhverv og brancher, som fortæller, at de sætter pris på en håndcreme, der trænger hurtigt ind og ikke efterlader huden fedtet.' },
          { t: 'p', x: 'Det gælder blandt andet mennesker, der arbejder med mad, kokke, tandlæger og andre faggrupper, som vasker eller afspritter hænder mange gange i løbet af dagen.' },
          { t: 'p', x: 'Vi har også kunder, som bruger håndcremen på kroppen efter bad, fordi den er nem at fordele og hurtigt absorberes af huden.' },
          { t: 'p', x: 'Fælles for mange af dem er ønsket om en creme, der passer ind i en travl hverdag, hvor man hurtigt skal videre til næste opgave.' },
          { t: 'h', x: 'Den passer bare ind i min hverdag' },
          { t: 'p', x: 'Når vi spørger Birgit, hvorfor hun bliver ved med at bruge håndcremen, er svaret enkelt:' },
          { t: 'q', x: 'Den passer bare ind i min hverdag – og giver mig bløde og velplejede hænder, og så er den dansk produceret.' },
          { t: 'p', x: 'Nogle gange er det netop de små detaljer, der gør den største forskel.' },
        ] },
      { id: 'annette', name: 'Annette Mortensen', area: 'ansigt', title: 'Fra ubehag til en mere balanceret hud', hasVideo: true, yt: '8h-TJ92uN8Q', products: ['cleansing-gel','serum','day-cream'], img: NA + 'Annette_Mortensen_kundecase_naturecell_IMG_4227_26e480dc-7732-471e-83e7-a761063b6a1d_640x640_crop_center.jpg?v=1777113771',
        quote: 'Min hud føles mere fri og rolig, end den har gjort i lang tid.',
        paras: ['En ærlig kundeudtalelse – med Annettes egne ord: "I lang tid har jeg haft svært ved at finde hudpleje, som jeg faktisk kunne tåle."','Annette arbejder som sygeplejerske og har en sart hud, der nemt reagerer. Efter at have skiftet til en enkel rutine med NatureCell beskriver hun selv huden som mere fri og balanceret i hverdagen.'],
        author: 'Lizbeth Falk', videoId: '8h-TJ92uN8Q', tags: ['Sensitiv hud','Ansigt','CBD'],
        body: [
          { t: 'h', x: 'En ærlig kundeudtalelse – med Annettes egne ord' },
          { t: 'q', x: 'I lang tid har jeg haft svært ved at finde hudpleje, som jeg faktisk kunne tåle.' },
          { t: 'q', x: 'Min hud føles mere fri og balanceret, og jeg oplever ikke længere det samme ubehag.' },
          { t: 'h', x: 'Se Annettes video' },
          { t: 'p', x: 'I videoen viser Annette også, hvordan hun bruger kompletpakken og CBD olien 15% som del af sin daglige rutine.' },
          { t: 'h', x: 'Kundens egen fortælling' },
          { t: 'q', x: 'Jeg hedder Annette og arbejder til dagligt som sygeplejerske. I lang tid har jeg haft svært ved at finde hudpleje, som jeg faktisk kunne tåle. Jeg oplevede ofte, at min hud føltes lukket, og det gav mig ubehag – endda ondt i halsen. Efter at have brugt NatureCells kompletpleje dagligt gennem en længere periode, har jeg endelig fundet noget, der fungerer for mig. Min hud føles mere fri og balanceret, og jeg oplever ikke længere det samme ubehag. Jeg må bare sige: Jeg er fan. Og jeg kan varmt anbefale NatureCells produkter. – Annette Mortensen' },
          { t: 'h', x: 'Vigtigt at vide' },
          { t: 'p', x: 'Dette er Annettes personlige oplevelse. Hud er forskellig, og resultater kan variere. Oplevelser med hudplejeprodukter er individuelle. NatureCell olier og cremer er kosmetiske produkter, udviklet til pleje af huden i hverdagen. Videoen og teksten bygger udelukkende på Annettes personlige erfaring og deles med hendes samtykke.' },
        ] },
      { id: 'christian', name: 'Christian Laursen', age: 44, area: 'ansigt', title: 'Hudpleje til mænd – med fokus på tør hud', hasVideo: true, yt: 'RHGezLkTcO8', products: ['day-cream','night-cream'], img: NA + 'Christian_Laursen_B_IG_b89dca71-db63-42f5-baec-7ecd76535e56_640x640_crop_center.jpg?v=1773765895',
        quote: 'Jeg kæmpede med tør hud før – det gør jeg ikke på samme måde i dag.',
        paras: ['I denne kundecase deler Christian sin personlige oplevelse med hudpleje. Christian fortæller, at han tidligere oplevede tør hud.','I dag har han fået en fast rutine med dag- og natcreme, og han fremhæver, hvor enkelt det er at holde fast i den om morgenen og aftenen.'],
        author: 'Lizbeth Falk', videoId: 'RHGezLkTcO8', tags: ['Ansigt','CBD','Tørt ansigt'],
        body: [
          { t: 'p', x: 'I denne kundecase deler Christian sin personlige oplevelse med hudpleje.' },
          { t: 'p', x: 'Christian fortæller, at han tidligere oplevede tør hud, og at han i dag har fået en fast rutine med dag- og natcreme. Han blev introduceret til produkterne gennem sit naboskab med Lizbeth og Allan fra NatureCell.' },
          { t: 'p', x: 'I videoen fortæller han med egne ord om sin oplevelse af at pleje huden dagligt, og hvordan en fast rutine er blevet en del af hans hverdag.' },
          { t: 'p', x: 'Kundecasen er et eksempel på en individuel oplevelse med hudpleje. Hud er forskellig fra person til person, og oplevelser og resultater kan variere.' },
          { t: 'h', x: 'Citat fra Christians video' },
          { t: 'q', x: 'Jeg kæmpede med tør hud før – det gør jeg ikke på samme måde i dag.' },
          { t: 'p', x: 'Her kan du høre hans egne ord om CBD hudpleje.' },
          { t: 'p', x: 'Denne kundecase bygger på en individuel kundes personlige oplevelse. Oplevelser kan variere fra person til person. Vores produkter er kosmetik og ikke medicin, og er ikke beregnet til at diagnosticere, behandle eller forebygge sygdom.' },
        ] },
      { id: 'annette-pigment', name: 'Annette', area: 'ansigt', title: 'Pigmentpletter i moden hud', hasVideo: true, yt: 'rLmWKcLsG9E', products: ['complete','serum','night-cream'], img: NA + 'Annette_kundecase_IMG_7593_2_99e11dbe-6e1f-4586-b3b7-b68ebe4e6c95_640x640_crop_center.jpg?v=1773765978',
        quote: 'Med en komplet rutine føles min modne hud mere ensartet og velplejet.',
        paras: ['Annettes oplevelse med en komplet CBD hudplejerutine. Mange oplever, at huden ændrer sig med alderen.','I denne kundehistorie fortæller Annette om sin daglige hudplejerutine og sine oplevelser med NatureCells CBD hudpleje på en moden hud med pigmentpletter.'] },
      { id: 'michelle', name: 'Michelle', area: 'haender', title: 'Pleje af hænder som kokkeelev', hasVideo: true, yt: 'cDkV5mnGvQ4', products: ['body-lotion','skin-oil'], img: NA + 'michelle_90528e7e-d3a6-4ba9-8aef-faee5dec5106_640x640_crop_center.jpg?v=1771002422',
        quote: 'Med hyppig håndvask hele dagen er hænderne blevet meget bedre at have med at gøre.',
        paras: ['Tørre og belastede hænder er noget mange oplever – især i fag med hyppig håndvask.','Her deler Michelle sin personlige oplevelse som kokkeelev og viser sine egne billeder og video af, hvordan hænderne fik det bedre med en fast plejerutine.'] },
      { id: 'marianne', name: 'Marianne', age: 73, area: 'haender', title: 'Meget tørre hænder', hasVideo: false, yt: null, products: ['body-lotion','skin-oil'], img: NA + 'toerre_fingre_udvikling_med_CBD_NatureCell_haandpleje_2f16d524-c45b-4e7f-8222-bbdbc4ea2374_640x640_crop_center.jpg?v=1771774088',
        quote: 'Efter mange år som klinikassistent har mine hænder endelig fået ro.',
        paras: ['En kundehistorie om pleje af tør hud på hænderne. Marianne på 73 år fortæller, at hun i mange år arbejdede som klinikassistent – en tid, hvor man ofte vaskede hænder.','Med en daglig plejerutine oplever hun nu, at de meget tørre hænder og fingre føles blødere.'] },
      { id: 'emma', name: 'Emma', area: 'ansigt', title: 'Før og efter med CBD hudpleje', hasVideo: true, yt: 'PCFwLqqGngE', products: ['cleansing-gel','day-cream','serum'], img: NA + 'F2F2F2_2fc05dd9-c974-43c4-935c-f99ce0c9b370_640x640_crop_center.png?v=1771004662',
        quote: 'Jeg har brugt NatureCells produkter i cirka et par måneder – og forskellen er tydelig.',
        paras: ['Vi har modtaget følgende besked og billeder fra vores kunde Emma, som har givet samtykke til, at vi deler hendes oplevelse:','"Hej, jeg har brugt NatureCells produkter i cirka et par måneder, og jeg er virkelig glad for resultatet." Emma har delt sine egne før- og efterbilleder.'] },
      { id: 'anja', name: 'Anja', area: 'foedder', title: 'Tørre fødder og sprækkede hæle', hasVideo: true, yt: '-RLNo6dma4A', products: ['skin-oil','body-lotion'], img: NA + 'IMG_0486_75fe5bdc-9596-48be-bfbc-58001735b2cf_640x640_crop_center.jpg?v=1771004526',
        quote: 'Efter lang tid med tør hud på fødderne har fodcremen gjort en mærkbar forskel.',
        paras: ['Når tørre fødder fylder i hverdagen. Anja har valgt at dele sin personlige oplevelse med NatureCell fodcreme.','Efter i lang tid at have været udfordret af meget tør hud på fødder og hæle, fortæller hun om sin daglige rutine og de billeder, hun selv har taget undervejs.'] },
      { id: 'luna', name: 'Luna', area: 'haender', title: 'Håndcreme og olie i rutinen', hasVideo: false, yt: null, products: ['body-lotion','skin-oil'], img: NA + 'Opslag_haand_Luna_2_abaacf69-cd74-4ee0-ba27-449c16a6c397_640x640_crop_center.jpg?v=1768562812',
        quote: 'Kombinationen af håndcreme og olie er blevet min faste rutine.',
        paras: ['Hos NatureCell deler vi ægte kundehistorier, fordi vi ved, at mange gerne vil høre, hvordan andre oplever vores produkter i hverdagen.','Her kan du læse om Lunas oplevelse med vores håndcreme og olie – med hendes egne før- og efterbilleder.'] },
      { id: 'gitte', name: 'Gitte', area: 'haender', title: 'Min datter kæmpede med tør hud', hasVideo: true, yt: 'hTJ9owDsF1I', products: ['body-lotion','skin-oil'], img: NA + 'IMG_0113_e863e88f-786b-411a-a14f-039e7112f8d9_640x640_crop_center.jpg?v=1765988346',
        quote: 'Først da jeg smurte min datter med håndcreme fra NatureCell, fandt jeg noget, der virkede.',
        paras: ['Gitte fra Skanderborg havde prøvet alt, men først da hun smurte sin datter med håndcreme fra NatureCell, fandt hun noget, der rent faktisk virkede mod tør hud.','Hendes 10-årige datter havde længe haft tør hud, og en enkelt creme blev forskellen i hverdagen.'] },
      { id: 'birte', name: 'Birte', area: 'ansigt', title: 'Mere jævn og ensartet hud', hasVideo: false, yt: null, products: ['serum','day-cream','complete'], img: NA + 'Birte-foer_827394ca-9e86-48f8-abe6-09c4e9b1021d_640x640_crop_center.webp?v=1771773489',
        quote: 'Jeg opdagede NatureCell, da jeg søgte produkter til mine sarte læber – nu bruger jeg meget mere.',
        paras: ['Birte fortæller til os: "Jeg opdagede NatureCell sidste år, da jeg søgte efter produkter til mine sarte læber."','Siden er det blevet til en fast rutine, og hun beskriver sin hud som mere jævn og ensartet i overfladen.'] },
      { id: 'vivi', name: 'Vivi Frydenlund Poulsen', area: 'ansigt', title: 'Tør og rød hud – en daglig rutine', hasVideo: true, yt: 'HwVoEwGZmyc', products: ['complete','day-cream','serum'], img: NA + 'Vivi-Frydenlund-IMG_9587_fac5a0d2-fb34-4001-a166-45986f1643c9_640x640_crop_center.jpg?v=1772528645',
        quote: 'Jeg følte hurtigt, at produkterne gjorde noget godt for min hud.',
        paras: ['For lidt over et år siden købte jeg kompletpakken fra NatureCell og følte meget hurtigt, at produkterne gjorde noget godt for min hud, som havde en tendens til meget røde områder.','Vivi deler sin erfaring med en daglig hudplejerutine til tør og rød hud.'] },
      { id: 'hanne', name: 'Hanne Mathiasen', age: 52, area: 'ansigt', title: 'Min hud har aldrig været finere', hasVideo: true, yt: 'js65Coj5Agg', products: ['complete','day-cream','night-cream'], img: NA + 'Kunde-Hanne-Mathiasen-7019_8c86dd0a-8684-4ee4-9158-6be6d0730093_640x640_crop_center.jpg?v=1772721616',
        quote: 'Min hud har aldrig været finere.',
        paras: ['Mange oplever tør eller rød hud i ansigtet og søger en enkel hudplejerutine.','Her deler Hanne (52 år) fra Skanderborg sin personlige oplevelse efter at have brugt en daglig hudplejerutine fra NatureCell.'] },
      { id: 'lise', name: 'Lise Fosgrau', area: 'haender', title: 'Tørre hænder og sart hud', hasVideo: true, yt: 'vfD2ATrMZ0k', products: ['body-lotion','skin-oil'], img: NA + 'Lise_Fosgrau_Thumbs_Up_1af9fe42-533e-42f2-9e9e-aa66babfb887_640x640_crop_center.webp?v=1770125819',
        quote: 'Tørre hænder, revner og irritation – en ny rutine gjorde forskellen.',
        paras: ['En personlig fortælling om tør hud og en ny rutine. Tørre hænder, revner og irritation er noget, mange af os kender til – især i de kolde måneder.','Lise deler sin personlige plejerutine til tørre hænder og sart hud.'] },
      { id: 'lone-toft', name: 'Lone H. Toft', area: 'ansigt', title: 'En hverdag med mere ro i huden', hasVideo: true, yt: 'wqloczTinpU', products: ['skin-oil','body-lotion','serum'], img: NA + 'Lone-H-Toft_f742d573-fce9-462c-ad4d-aa247a038133_640x640_crop_center.jpg?v=1752756839',
        quote: 'Ansigtsolie og bodyolie er blevet en fast del af min rutine.',
        paras: ['Hos NatureCell modtager vi løbende personlige fortællinger fra vores kunder, der bruger CBD hudpleje som en fast del af deres rutine.','Her deler Lone sin erfaring med både ansigtsolie og bodyolie – og en hverdag med mere ro i huden.'] },
      { id: 'lone-lange', name: 'Lone Lange', area: 'ansigt', title: 'Solpåvirket og tør hud', hasVideo: false, yt: null, products: ['serum','day-cream','skin-oil'], img: NA + 'Kundecase-Lone-Lange-Solskader_9cfc448b-e9df-4356-a9ee-2382882e02ec_640x640_crop_center.jpg?v=1770063115',
        quote: 'Efter mange års hududfordringer har en fast rutine hjulpet min solpåvirkede hud.',
        paras: ['Lones egne ord om CBD Hudpleje. Vi har modtaget følgende besked fra vores kunde Lone Lange, som har givet samtykke til, at vi deler hendes personlige oplevelse.','Efter mange års hududfordringer med solpåvirket og tør hud fortæller hun om sin oplevelse med en daglig rutine.'] },
      { id: 'kis', name: 'Kis Laursen', area: 'haender', title: 'Fra eksem-plaget til bløde hænder', hasVideo: true, yt: '5aO05MSuyEk', products: ['body-lotion','skin-oil'], img: NA + 'Foer_d055ea54-2d0e-402b-96c3-7a6ceab4e69d_640x640_crop_center.webp?v=1768654099',
        quote: 'Efter mange år med tør og følsom hud har jeg endelig fundet noget, der passer.',
        paras: ['Kis Laursen har i mange år haft meget tør og følsom hud på hænderne. Hun har tidligere prøvet mange forskellige løsninger uden at finde noget, der passede til hendes behov.','Med NatureCells håndcreme oplever hun nu blødere hænder, og hun deler sine egne før- og efterbilleder.'] },
      { id: 'jan-grethe', name: 'Jan & Grethe', area: 'haender', title: 'Når hudpleje deles i hverdagen', hasVideo: false, yt: null, products: ['body-lotion','skin-oil'], img: NA + 'NatureCell_Jan_Haand_FOeR_EFTER_480x480px_32e4091a-5581-41e7-a6b1-073165041feb_640x640_crop_center.jpg?v=1770818699',
        quote: 'Grethe havde allerede rutinen – så begyndte Jan også.',
        paras: ['Denne kundecase er en personlig fortælling om, hvordan hudpleje for Jan og Grethe blev noget, de delte i hverdagen.','Grethe havde allerede en fast rutine med NatureCells CBD hudpleje, og efterhånden blev det også en del af Jans hverdag.'] },
      { id: 'astrid', name: 'Astrid', area: 'ansigt', title: 'Solpåvirket og tørt ansigt', hasVideo: true, yt: '7_Bpx7LJIGc', products: ['serum','day-cream','night-cream'], img: NA + 'IMG_53881_46694ffc-55a0-4525-8651-0c67ace93896_640x640_crop_center.jpg?v=1770816336',
        quote: 'Efter mange år i solen føltes huden sart – nu føles den mere rolig.',
        paras: ['Når huden gennem årene har været udsat for sol, kan den føles mere sart og vise tydelige spor. Mange oplever, at huden kan føles tør eller urolig.','Astrid deler sin oplevelse med en daglig rutine til et solpåvirket og tørt ansigt.'] },
      { id: 'karin', name: 'Karin Bauer', area: 'foedder', title: 'Tør hud på fødderne', hasVideo: false, yt: null, products: ['skin-oil','body-lotion'], img: NA + 'IMG_0927_cddac1d4-53fb-40d5-a25b-82f6eb8e6eaa_640x640_crop_center.jpg?v=1768759317',
        quote: 'Huden på min ene fod føltes meget tør – cremen forandrede det.',
        paras: ['Karin Bauer fra Hadsten har sendt os en mail og delt billeder fra sin egen hudplejerutine:','"Jeg har gennem flere år oplevet, at huden på min ene fod føltes meget tør." Karin fortæller om sin personlige oplevelse med CBD creme til fødderne.'] },
      { id: 'maja', name: 'Maja Bang', area: 'haender', title: 'Tørre hænder i hverdagen', hasVideo: true, yt: 'lEVQ31osKxM', products: ['body-lotion','skin-oil'], img: NA + 'Maja_Bang_040524_2b7b80e1-698a-4e48-9268-b4c1462271f1_640x640_crop_center.jpg?v=1768667065',
        quote: 'I en periode var huden på mine hænder meget tør – håndcremen hjalp.',
        paras: ['En personlig kundehistorie om tørre hænder. Majas egne ord om sin daglige hudplejerutine:','"Hej, jeg hedder Maja. I en periode oplevede jeg, at huden på mine hænder var meget tør." Maja deler sin oplevelse med CBD håndcreme.'] },
      { id: 'samira', name: 'Samira', area: 'haender', title: 'Skånsom pleje til børns hænder', hasVideo: false, yt: null, products: ['body-lotion','skin-oil'], img: NA + 'IMG_2069_4707bd39-8867-4a5d-82de-df0a7f57f48a_640x640_crop_center.jpg?v=1770817625',
        quote: 'Som forælder søgte jeg en skånsom pleje til mit barns hænder.',
        paras: ['Kundehistorie: Når forældre søger skånsom pleje til børns hænder.','Denne kundehistorie er delt af Samira, som har givet samtykke til, at vi må dele både hendes fortælling og de billeder, hun selv har taget.'] },
      { id: 'andreas', name: 'Andreas', age: 22, area: 'haender', title: 'Daglig plejerutine med CBD olie', hasVideo: false, yt: null, products: ['skin-oil','body-lotion'], img: NA + '290224_Andreas_vorter_9e5a83dd-125d-445d-b380-f4b7ecae0a2e_640x640_crop_center.jpg?v=1758742455',
        quote: 'Jeg har været udfordret på hænder og fødder, så længe jeg kan huske.',
        paras: ['Andreas, 22 år fra Horsens, har gennem mange år været udfordret på sine hænder og fødder – så længe han selv husker det.','I foråret 2024 valgte Andreas at give CBD olie en chance som en del af sin daglige plejerutine.'] },
    ];
    const press = ['Berlingske','Politiken','Femina','Euroman','Costume','Børsen','Løvens Hule','ALT for damerne','Woman','Bo Bedre'];
    const testimonials = [
      { name: 'Mette K.', meta: 'Verificeret køb · CBD Hudplejeolie', text: 'Jeg er vild med olien. Den trækker hurtigt ind og min hud føles blød hele dagen.' },
      { name: 'Lars P.', meta: 'Verificeret køb · Komplet pakke', text: 'Hele sættet er bare gennemtænkt. Fragten var hurtig, og jeg sparede en del på pakken.' },
      { name: 'Camilla B.', meta: 'Verificeret køb · Dagcreme', text: 'Endelig en dagcreme der ikke strammer. Let og fugtgivende — den er fast i min rutine nu.' },
      { name: 'Jonas H.', meta: 'Verificeret køb · Bodylotion', text: 'Bruger den efter træning hver dag. Ingen parfume, bare god pleje.' },
      { name: 'Rikke S.', meta: 'Verificeret køb · Serum', text: 'Serummet giver lige det ekstra fugt min hud manglede. Mærkbar forskel.' },
      { name: 'Thomas E.', meta: 'Verificeret køb · CBD Drops', text: 'Tryg handel og dansk produktion. Det betyder noget for mig.' },
      { name: 'Bente', meta: 'Verificeret køb · CBD Hudplejeolie', text: 'Efter kun 3 uger med olien ser min hud meget roligere og mere ensartet ud — fantastisk.' },
      { name: 'Emma', meta: 'Verificeret køb · Komplet pakke', text: 'Min hud føltes rød og irriteret. Efter en måned føles den mere rolig og velplejet.' },
      { name: 'Birte', meta: 'Verificeret køb · CBD Hudplejeolie', text: 'Jeg brugte olien før cremen — efter et par måneder føltes huden mere jævn. Helt vildt.' },
      { name: 'Julie', meta: 'Verificeret køb · CBD Rensegel', text: 'Jeg bruger rens og olie hver aften. Min hud føles nu mere i balance.' },
      { name: 'Sally', meta: 'Verificeret køb · CBD Hudplejeolie', text: 'Allerede fra første påføring føltes min hud mere rolig og i bedre balance.' },
      { name: 'Karin', meta: 'Verificeret køb · CBD Håndcreme', text: 'Efter en måneds brug virkede huden mere rolig og velplejet. Jeg har kun godt at sige.' },
      { name: 'Jan', meta: 'Verificeret køb · Komplet pakke', text: 'NatureCells CBD hudpleje har gjort en forskel for min hud. Rigtig gode produkter.' },
      { name: 'Pernille M.', meta: 'Verificeret køb · Natcreme', text: 'Natcremen er blevet mit lille aftenritual. Huden føles mere udhvilet om morgenen.' },
    ];
    const ingredients = [
      { id: 'urea', name: 'Urea', latin: 'Urea', tag: 'Fugt', accent: 'var(--sage-500)', img: 'https://cdn.shopify.com/s/files/1/0600/7111/6981/files/NatureCell_Ingrediens_Slider_Urea_180x480px.jpg?v=1762792242', functions: ['Humectant', 'Keratolytic'],
        intro: 'Urea er en fugtbindende ingrediens, som huden selv danner. I hudpleje bruges den til at tilføre fugt og blødgøre hård, fortykket hud.',
        paras: [
          'Urea virker som en humectant: den binder vand i hudens øverste lag og hjælper huden med at holde på sin fugt. Netop derfor er den et naturligt valg til meget tør hud — særligt på hæle, fødder og hænder, hvor huden er tykkere og hurtigere bliver stram og ru.',
          'I højere koncentrationer har urea også en blødgørende effekt, der løsner døde hudceller og gør overfladen mere glat og smidig. Vi bruger den derfor i vores fodcreme, hvor behovet for både fugt og blødgøring er størst.',
        ],
        benefits: ['Binder fugt i hudens øverste lag', 'Blødgør hård og fortykket hud', 'Ideel til tørre fødder, hæle og hænder'] },
      { id: 'niacinamide', name: 'Niacinamide', latin: 'Niacinamide (B3)', tag: 'Udstråling', accent: 'var(--sand-500)', img: 'https://cdn.shopify.com/s/files/1/0600/7111/6981/files/NatureCell_Ingrediens_Slider_Niacinamide_180x480px.jpg?v=1762792242', functions: ['Skin conditioning', 'Smoothing'],
        intro: 'Niacinamide er en form for B3-vitamin og en af hudplejens mest velundersøgte ingredienser — kendt for at give huden et mere ensartet og udhvilet udtryk.',
        paras: [
          'Niacinamide understøtter hudens naturlige barriere og hjælper den med at fremstå mere jævn i tone og tekstur. Mange oplever, at huden ser mindre træt ud og får en roligere, mere ensartet overflade ved daglig brug.',
          'Ingrediensen er mild og tolereres godt af de fleste hudtyper, også sart hud. Vi kombinerer den med CBD og fugtgivende ingredienser, så den arbejder som en del af en balanceret rutine frem for alene.',
        ],
        benefits: ['Giver et mere ensartet hududtryk', 'Understøtter hudens barriere', 'Mild — også til sart hud'] },
      { id: 'mango', name: 'Mango Butter', latin: 'Mangifera Indica Seed Butter', tag: 'Pleje', accent: 'var(--sand-500)', img: 'https://cdn.shopify.com/s/files/1/0600/7111/6981/files/NatureCell_Ingrediens_Slider_Mangifera_Indica_Seed_Butter_180x480px.jpg?v=1762792241', functions: ['Emollient', 'Skin conditioning'],
        intro: 'Mangokernesmør er et blødt plantesmør presset af mangofrugtens kerne — rigt på fedtsyrer og en behagelig, nærende følelse på huden.',
        paras: [
          'Som emollient lægger mangosmør sig blødt i hudens overflade og udglatter fornemmelsen af tørhed og ruhed. Det smelter ved hudtemperatur og trænger derfor pænt ind uden at efterlade en tung film.',
          'Vi bruger det især i natcremen og i vores rigere formuleringer, hvor huden har tid til at optage næringen mens du sover.',
        ],
        benefits: ['Nærer og blødgør tør hud', 'Smelter ved hudtemperatur', 'Behagelig, ikke-fedtet følelse'] },
      { id: 'tocopherol', name: 'E-vitamin', latin: 'Tocopherol', tag: 'Beskyttelse', accent: 'var(--stone-500)', img: 'https://cdn.shopify.com/s/files/1/0600/7111/6981/files/NatureCell_Ingrediens_Slider_Tocopherol_180x480px.jpg?v=1762792241', functions: ['Antioxidant'],
        intro: 'E-vitamin (tocopherol) er en naturlig antioxidant, der både beskytter huden og holder olierne i formuleringen friske.',
        paras: [
          'Som antioxidant hjælper E-vitamin med at beskytte hudens overflade mod de frie radikaler, vi udsættes for i hverdagen — sol, vind og luftforurening. Det er en af grundene til, at den findes i næsten al god hudpleje med planteolier.',
          'Samtidig virker E-vitamin stabiliserende på selve produktet, så de nærende olier bevarer deres kvalitet gennem hele holdbarheden. Den arbejder godt sammen med CBD, som også er antioxidant.',
        ],
        benefits: ['Antioxidant, der beskytter hudens overflade', 'Holder planteolierne friske', 'Arbejder i samspil med CBD'] },
      { id: 'cbg', name: 'CBG', latin: 'Cannabigerol', tag: 'Hudpleje', accent: 'var(--sage-500)', img: 'https://cdn.shopify.com/s/files/1/0600/7111/6981/files/NatureCell_Ingrediens_Slider_CBG_180x480px.jpg?v=1762792242', functions: ['Skin conditioning'],
        intro: 'CBG (cannabigerol) kaldes ofte hampeplantens “moder-cannabinoid”, fordi de øvrige cannabinoider dannes ud fra den. I hudpleje bruges den for sine plejende egenskaber.',
        paras: [
          'CBG findes naturligt i hampeplanten i mindre mængder end CBD, men er interessant som konditionerende ingrediens i hudpleje. Ligesom CBD er den ikke psykoaktiv.',
          'Vi bruger CBG i vores Eye Gel, hvor huden er tynd og sart og har brug for en let, nænsom formulering — her kombineres den med niacinamide og hyaluronsyre.',
        ],
        benefits: ['Plejende cannabinoid fra hampeplanten', 'Let og nænsom — velegnet til øjenpartiet', 'Ikke psykoaktiv'] },
      { id: 'mandelolie', name: 'Mandelolie', latin: 'Prunus Amygdalus Dulcis Oil', tag: 'Næring', accent: 'var(--sand-500)', img: 'https://cdn.shopify.com/s/files/1/0600/7111/6981/files/NatureCell_Ingrediens_Slider_Mandelolie_180x480px.jpg?v=1762792242', functions: ['Emollient', 'Skin conditioning'],
        intro: 'Mandelolie er en mild, klassisk planteolie presset af sødmandler — let i konsistensen og nem for huden at optage.',
        paras: [
          'Olien er rig på fedtsyrer og virker blødgørende på tør og stram hud. Den er let nok til at kunne bruges i ansigtet og nærende nok til krop, hænder og fødder.',
          'Mandelolie har en meget mild karakter og bruges derfor ofte i produkter til sart hud. Vi kombinerer den med CBD, squalane og glycerin, så fugt og næring følges.',
        ],
        benefits: ['Blødgør tør og stram hud', 'Let konsistens — optages nemt', 'Mild og velegnet til sart hud'] },
      { id: 'cbd', name: 'CBD', latin: 'Cannabidiol', tag: 'Balance', accent: 'var(--sage-500)', img: 'https://cdn.shopify.com/s/files/1/0600/7111/6981/files/NatureCell_Ingrediens_Slider_CBD_180x480px.jpg?v=1762184205', functions: ['Skin conditioning', 'Antioxidant'],
        intro: 'CBD (cannabidiol) er hjertet i al NatureCell-hudpleje. Det udvindes af hampeplanten og bruges i kosmetik for sine plejende, balancerende og antioxidante egenskaber.',
        paras: [
          'CBD er en af de mere end hundrede naturligt forekommende cannabinoider i hampeplanten. I hudpleje værdsættes det først og fremmest som en antioxidant, der hjælper med at beskytte hudens overflade mod hverdagens miljøpåvirkninger, og som en konditionerende ingrediens, der efterlader huden blød og mere ensartet.',
          'Vores CBD er fuldspektret og udvundet skånsomt, så plantens naturlige følgestoffer bevares. Det indarbejdes i en fugtgivende oliebase, så det optages nænsomt og føles behageligt på huden — uden at fedte. CBD er ikke psykoaktivt, og alle vores produkter er testet til under 0,2% THC.',
        ],
        benefits: ['Antioxidant, der beskytter mod miljøpåvirkninger', 'Konditionerer og balancerer hudens overflade', 'Skånsom og velegnet til sart hud'] },
      { id: 'shea', name: 'Sheasmør', latin: 'Butyrospermum Parkii Butter', tag: 'Beskyttende', accent: 'var(--sand-500)', img: 'https://cdn.shopify.com/s/files/1/0600/7111/6981/files/NatureCell_Ingrediens_Slider_Sheasmoer_180x480px.jpg?v=1762792242', functions: ['Occlusive', 'Skin conditioning'],
        intro: 'Sheasmør er et rigt, naturligt plantesmør udvundet af nødderne fra sheatræet i Vestafrika — kendt for at beskytte og blødgøre selv meget tør hud.',
        paras: [
          'Sheasmør er rigt på fedtsyrer og naturlige vitaminer, der lægger sig som et beskyttende lag på huden. Det hjælper med at mindske fugttab og giver en mærkbar, langvarig følelse af komfort — særligt på områder, der har tendens til at blive stramme eller ru.',
          'Vi bruger sheasmør i vores mere nærende cremer og balms, hvor det bidrager til en blød, smidig overflade. Det er et af de mest velkendte og veldokumenterede plejestoffer i naturlig kosmetik.',
        ],
        benefits: ['Danner et beskyttende lag mod fugttab', 'Blødgør tør og stram hud', 'Rig på naturlige fedtsyrer'] },
      { id: 'lavendel', name: 'Lavendelolie', latin: 'Lavandula Angustifolia Oil', tag: 'Duft & ro', accent: 'var(--accent-mauve)', img: 'https://cdn.shopify.com/s/files/1/0600/7111/6981/files/NatureCell_Ingrediens_Slider_Lavendelolie_180x480px.jpg?v=1762792242', functions: ['Fragrance', 'Skin conditioning'],
        intro: 'Ægte lavendelolie giver vores produkter deres rolige, naturlige duft — og bidrager samtidig med milde plejende egenskaber.',
        paras: [
          'Lavendelolie udvindes ved dampdestillation af lavendelblomster og er en af de mest klassiske botaniske dufte i naturlig hudpleje. Den giver en blød, urteagtig duft, der opleves beroligende, og som erstatter behovet for syntetisk parfume.',
          'Udover duften har lavendelolie milde konditionerende egenskaber. Vi doserer den med omtanke, så produkterne dufter naturligt og nænsomt — også for dem med sart hud.',
        ],
        benefits: ['Naturlig duft uden syntetisk parfume', 'Opleves rolig og afbalanceret', 'Mild og plejende'] },
      { id: 'cannabis', name: 'Cannabis Sativa', latin: 'Cannabis Sativa Seed Oil', tag: 'Næring', accent: 'var(--sage-600)', img: 'https://cdn.shopify.com/s/files/1/0600/7111/6981/files/NatureCell_Ingrediens_Slider_Cannabis_Sativa_Leaf_Extract_180x480px.jpg?v=1762792242', functions: ['Emollient', 'Skin conditioning'],
        intro: 'Hampefrøolie presses af frøene fra Cannabis Sativa og er en let, nærende olie med en naturlig balance af essentielle fedtsyrer.',
        paras: [
          'Hampefrøolie er rig på omega-fedtsyrer i et forhold, der harmonerer godt med hudens egne lipider. Det gør den til en effektiv blødgørende ingrediens, der nærer huden uden at føles tung eller fedtet.',
          'Vi bruger den koldpresset for at bevare så mange af de naturlige næringsstoffer som muligt. Den indgår især i vores olier og nærende formuleringer, hvor den supplerer CBD og giver huden en smidig, velplejet overflade.',
        ],
        benefits: ['Rig på essentielle omega-fedtsyrer', 'Nærer uden at føles tung', 'Koldpresset for maksimal næring'] },
      { id: 'mct', name: 'MCT-olie', latin: 'Caprylic/Capric Triglyceride', tag: 'Fugt', accent: 'var(--sage-400)', img: 'https://cdn.shopify.com/s/files/1/0600/7111/6981/files/NatureCell_Ingrediens_Slider_Caprylic_Capric_Triglyceride_180x480px.jpg?v=1762792242', functions: ['Emollient', 'Skin conditioning'],
        intro: 'MCT-olie er en let, ren bæreolie udvundet af kokos. Den fordeler de aktive ingredienser jævnt og giver en silkeblød finish.',
        paras: [
          'MCT står for "medium-chain triglycerides" — en gruppe lette fedtmolekyler, der absorberes hurtigt og ikke efterlader en fedtet film. Det gør MCT-olie til en ideel base for CBD, som er fedtopløseligt og dermed fordeles jævnt i olien.',
          'Udover at være bærer fungerer MCT-olie selv som en blødgørende ingrediens, der fugter og glatter hudens overflade. Den er stabil, lugtneutral og mild — også for sart hud.',
        ],
        benefits: ['Bærer og fordeler CBD jævnt', 'Absorberes hurtigt uden at fedte', 'Mild og lugtneutral'] },
      { id: 'aloe', name: 'Aloe Vera', latin: 'Aloe Barbadensis Leaf Juice', tag: 'Beroligende', accent: 'var(--sage-500)', img: 'https://cdn.shopify.com/s/files/1/0600/7111/6981/files/NatureCell_Ingrediens_Slider_Aloe_Barbadensis_Leaf_180x480px.jpg?v=1762792242', functions: ['Soothing', 'Humectant'],
        intro: 'Aloe vera-gel fra bladene af aloe-planten er en af naturens mest klassiske beroligende ingredienser — vandrig, frisk og let.',
        paras: [
          'Aloe vera består primært af vand sammen med naturlige polysakkarider, der hjælper med at binde fugt i hudens overflade. Det giver en umiddelbar følelse af forfriskning og komfort, som mange forbinder med pleje af sart eller solpåvirket hud.',
          'Vi bruger aloe vera i vores lettere cremer og gels, hvor den bidrager med fugt og en rolig, behagelig fornemmelse — uden at tynge huden.',
        ],
        benefits: ['Binder fugt i hudens overflade', 'Frisk, let og beroligende', 'Velegnet til sart og påvirket hud'] },
      { id: 'squalane', name: 'Squalane', latin: 'Squalane', tag: 'Barriere', accent: 'var(--stone-500)', img: 'https://cdn.shopify.com/s/files/1/0600/7111/6981/files/NatureCell_Ingrediens_Slider_Tocopherol_180x480px.jpg?v=1762792241', functions: ['Emollient', 'Skin conditioning'],
        intro: 'Squalane er en hudidentisk olie — den minder om et stof, huden selv producerer — og er derfor exceptionelt nærsom og let optagelig.',
        paras: [
          'Hudens egen talg indeholder squalen, men mængden falder med alderen. Plantebaseret squalane er en stabil, forædlet version, der efterligner hudens naturlige lipider og dermed hjælper med at styrke hudens barriere.',
          'Squalane er let, lugtfri og ikke-komedogen. Den giver en silkeblød finish uden fedtet film og indgår i vores formuleringer, hvor en næret, smidig hud er målet.',
        ],
        benefits: ['Hudidentisk — styrker hudens barriere', 'Let og ikke-fedtet finish', 'Stabil og nærsom'] },
      { id: 'hyaluron', name: 'Hyaluronsyre', latin: 'Sodium Hyaluronate', tag: 'Fugt', accent: 'var(--sage-400)', img: 'https://cdn.shopify.com/s/files/1/0600/7111/6981/files/NatureCell_Ingrediens_Slider_Hyaluronsyre_180x480px.jpg?v=1762792241', functions: ['Humectant', 'Skin conditioning'],
        intro: 'Hyaluronsyre er et af hudplejens mest effektive fugtbindende stoffer — det kan binde mange gange sin egen vægt i vand.',
        paras: [
          'Vi bruger sodium hyaluronate, saltformen af hyaluronsyre, som har en lavere molekylevægt og derfor fordeler sig let i hudens øverste lag. Her fungerer det som en magnet for fugt og bidrager til et mere fyldigt, glat og udhvilet udtryk.',
          'Hyaluronsyre indgår især i vores serum og fugtgivende cremer. Den arbejder godt sammen med olierne i vores formuleringer: hyaluronsyren trækker fugt til, og olierne hjælper med at holde på den.',
        ],
        benefits: ['Binder fugt og giver et glat udtryk', 'Let optagelig i hudens overflade', 'Arbejder i samspil med plejende olier'] },
    ];
    const AB = 'https://naturecell.dk/cdn/shop/articles/';
    const articles = [
      { slug: 'mit-sommerhack-eye-gel-med-niacinamid-og-cbg-til-ansigt-og-hals', title: 'Mit SOMMERHACK: Eye Gel med niacinamid og CBG til ansigt og hals', tag: 'Eye Gel', img: AB + 'sommerhack_lizbeth_Naturecell_CBD_Eye_Gel_IMG_4677_c414fbc6-7e85-45c7-8c21-f76d4b7b7bee.jpg?v=1781858216', excerpt: 'Der findes produkter, som stille og roligt bliver en fast del af ens hudplejerutine. Sådan har jeg det med vores CBG Eye Gel. Selvom den er udviklet til området omkring øjnene, bruger jeg den faktisk på hele ansigtet og halsen.' },
      { slug: 'hudpleje-efter-sol', title: 'Efter en dag i solen: De 3 uundværlige lag, min hud ikke kan leve uden', tag: 'Solpåvirket hud', img: AB + 'kvinde_pigmentpletter_badevaerelse_aa646aae-9aec-4b09-ae91-921566456862.jpg?v=1780837322', excerpt: 'Det er de lange, lyse aftener på terrassen. Det er gåturene i SMUK-skoven, en formiddag ved vandet. Solen er skøn — men huden har brug for ekstra omsorg bagefter. Her er de tre lag, min hud ikke kan undvære.' },
      { slug: 'pigmentpletter-og-ujaevn-hudtone', title: 'Pigmentpletter? Læs om sol, hudpleje og antioxidanter', tag: 'pigmentpletter', img: AB + 'kvinde_pigmentpletter_badevaerelse_aa646aae-9aec-4b09-ae91-921566456862.jpg?v=1780837322', excerpt: 'Pigmentpletter og ujævn hudtone er noget, mange oplever med alderen. For nogle viser de sig som små mørke pletter, for andre som en mere ujævn tone. Her ser vi på sol, fugt og antioxidanter.' },
      { slug: 'et-ar-siden-vi-sendte-denne-video-ansogning-til-lovens-hule', title: 'Et år siden vi sendte denne video ansøgning til Løvens Hule', tag: 'NatureCell', img: AB + 'ansoegning_til_loevens_hule_video_IMG_5916_64f369a5-2eca-4db0-b6e5-bb2915b4f319.jpg?v=1780655140', excerpt: 'For præcis ét år siden stod Allan og jeg i Skanderborg og optog denne video. Det var vores ansøgning til Løvens Hule. Når vi ser den i dag, kan vi mærke, hvor langt vi er kommet.' },
      { slug: 'handcreme-til-meget-torre-haender-og-sprukken-hud', title: 'Håndcreme til meget tørre hænder og sprukken hud', tag: 'Tørre hænder', img: AB + 'Gemini_Generated_Image_56ydk256ydk256yd_6944f2ae-9833-48c1-a3b1-c8cfb1bcfb71.png?v=1780143075', excerpt: 'Når dine hænder føles stramme, ru eller begynder at sprække, har du brug for mere end en tilfældig creme i tasken. NatureCell tilbyder en håndcreme til meget tørre hænder og sprukken hud.' },
      { slug: 'fodpleje-guide-ekspertens-rad-til-torre-fodder-og-haelrevner', title: 'Fodpleje guide: Ekspertens råd til tørre fødder og hælrevner', tag: 'Fødder', img: AB + 'Foedder_i_natur_guide_om_fodpleje_f04a8ea9-2c8c-44c3-bc66-42de93424216.png?v=1779038446', excerpt: 'Tørre fødder, hård hud og hælrevner er noget, mange danskere oplever – især i de kolde måneder eller om sommeren i sandaler. Eksperten deler sine bedste råd.' },
      { slug: 'moden-hud-hvilke-ingredienser-giver-fugt-og-smidighed', title: 'Moden hud: hvilke ingredienser giver fugt og smidighed', tag: 'Moden hud', img: AB + 'DSF6043_9ae35b3a-2321-4a3e-a9b8-c36d2189200d.jpg?v=1774872279', excerpt: 'Moden hud har sjældent kun ét behov. Den kan være tør på kinderne, mere blank i T-zonen, lidt mere sensitiv end tidligere og samtidig have et tydeligere behov for komfort.' },
      { slug: 'vindere-af-vores-konkurrencer-vind-med-naturecell', title: 'Vinderlisten – Se de heldige vindere af NatureCells konkurrencer', tag: 'NatureCell', img: AB + 'NatureCell_Lizbeth_Sortiment_1224_LilleNyhavn_fc947dc6-27a1-4a31-921a-a4ebabcb61ca.webp?v=1772980995', excerpt: 'Hver måned trækker vi lod om en komplet hudpleje pakke blandt alle, der modtager vores nyhedsmail. Tilmeld dig én gang og vær med hver måned 💚' },
      { slug: 'vores-oplevelse-i-lovens-hule', title: 'Vores oplevelse i Løvens Hule', tag: 'NatureCell', img: AB + 'NatureCell_Allan_og_Lizbeth_fik_investering_i_Lovens_hule_31f96359-1452-4758-9053-23954b6098b1.jpg?v=1774018649', excerpt: 'Du har måske set, at vi var med i Løvens Hule. Det er en oplevelse, der får adrenalinen til at pumpe, når man står foran nogle af landets skarpeste investorer.' },
      { slug: 'uren-hud-hos-voksne-derfor-opstar-den-og-sadan-plejer-du-den', title: 'Uren hud hos voksne: derfor opstår den, og sådan plejer du den', tag: 'uren hud', img: AB + 'uren-hud-hos-voksne-compressed_7dd1b66d-cf6f-4e16-b16b-b08b65cdf096.jpg?v=1773473586', excerpt: 'Mange bliver overraskede, når bumser og tilstoppede porer ikke forsvinder med teenageårene, men i stedet dukker op igen i 30’erne, 40’erne eller senere. Uren hud hos voksne er langt fra usædvanligt.' },
      { slug: 'cbd-hudpleje-den-komplette-guide-og-faq-fra-naturecell', title: 'CBD hudpleje: Den komplette guide og FAQ fra NatureCell', tag: 'CBD', img: AB + 'NatureCell_Lizbeth_Sortiment_1224_LilleNyhavn_fc947dc6-27a1-4a31-921a-a4ebabcb61ca.webp?v=1772980995', excerpt: 'CBD hudpleje er blevet en ingrediens, mange er nysgerrige på. I denne guide forklarer vi, hvad CBD hudpleje er, hvordan cannabidiol bruges i hudpleje, og hvad reglerne siger.' },
      { slug: '10-sporgsmal-om-cbd-handcreme-det-sporger-mange-om', title: '10 spørgsmål om CBD håndcreme – det spørger mange om', tag: 'Håndcreme', img: AB + 'Cathrine_NatureCell_CBD_Hand_Cream_fe208ba4-0643-4603-9f9b-5711a5b7c0d3.jpg?v=1770490815', excerpt: 'Tørre hænder eller tør hud er noget, mange oplever – især i perioder med kulde, håndvask og håndsprit. Her samler vi svar på de 10 spørgsmål, vi oftest får om CBD håndcreme.' },
      { slug: 'tor-hud-her-er-forklaringen', title: 'Tør hud? Her er forklaringen', tag: 'tørt ansigt', img: AB + 'NatureCell_CBD_Night_Cream_1717e122-c58c-47cf-925f-712ea8e3b981.webp?v=1770458297', excerpt: 'De fleste af os kan ikke lide vinterkulden – og det kan vores hud i høj grad heller ikke. Med kulden følger også den lave luftfugtighed, som trækker fugt ud af huden.' },
      { slug: 'vores-tre-bedste-tips-og-tricks-skansom-hudpleje-i-vinterkulden', title: 'Vores tre bedste tips og tricks: Skånsom hudpleje i vinterkulden', tag: 'Hudplejetips', img: AB + 'vinter_billede_af_Lizbeth_2993_46758950-09a0-40d0-9688-eb5f394cc5e6.jpg?v=1767880318', excerpt: 'Pyha, det er koldt udenfor – og hvordan hjælper man bedst sin (tørre) vinterhud? ❄️ I forbindelse med temperaturskift oplever mange et “skift” i huden.' },
      { slug: 'interview-pa-mollerup-gods-her-begynder-historien-bag-naturecell', title: 'Interview på Møllerup Gods: Her begynder historien bag NatureCell', tag: 'NatureCell', img: AB + 'Billede_af_Anne_Sophie_Gamborg_og_Allan_Falk_Gamborg_cc5b96e7-f77f-46c0-958e-5d64cb69441f.jpg?v=1767017225', excerpt: 'I dette blogindlæg inviterer vi dig med tilbage til rødderne af NatureCell – til stedet og den familiehistorie, hvor interessen for hamp tog form for længe siden.' },
      { slug: 'naturecell-historien-bag-dansk-hudpleje-med-cbd', title: 'NatureCell – historien bag dansk hudpleje med CBD', tag: 'NatureCell', img: AB + 'IMG_1499_83aa9fb6-145d-4447-94e2-2f6a480f24e4.jpg?v=1773177808', excerpt: 'Idéen til NatureCell opstod i 2017 gennem Allans familieforbindelse til Møllerup Gods på Djursland. Godset ejes af Allan Gamborgs brors familie.' },
      { slug: 'cbd-hudpleje-10-sporgsmal-og-svar', title: 'CBD hudpleje: Myte eller mirakel? Her er hvad du skal vide', tag: 'CBD', img: AB + 'NatureCell_CBD_Hudpleje_1000mg_Hudolie_70de95ab-a948-4478-b407-d00bcda6f43d.webp?v=1773426960', excerpt: 'CBD i hudpleje. Måske har du hørt om det. Måske har du undret dig. “Er det overhovedet lovligt?” “Kan man blive høj af det?” Du er langt fra alene.' },
      { slug: 'torre-haender-sadan-plejer-du-dem-bedst-isaer-nar-kulden-kommer', title: 'Tørre hænder? Sådan plejer du dem bedst – især når kulden kommer', tag: 'Tørre hænder', img: AB + 'NatureCellCBDHudplejeHaanscreme_5e9e6fcf-80f2-4ff3-a4fa-abac3e70b4de.webp?v=1758733431', excerpt: 'Når vi går efteråret og vinteren i møde, begynder mange at mærke det samme problem: tørre hænder. Kulde, håndvask og håndsprit er hårdt for huden.' },
      { slug: 'naturens-hemmelighed-vores-sang-til-naturen-huden-og-hjertet', title: '🎶 Naturens Hemmelighed – Vores sang til naturen, huden og hjertet', tag: 'NatureCell', img: AB + 'NatureCell_Naturens_Hemmelighed_Cover_1_c57b0cdc-5a51-44f3-8efe-9cc7606a6adc.jpg?v=1754479390', excerpt: '“Naturens Hemmelighed” er NatureCells egen sang. I mange år har vi arbejdet for at skabe mere ro, tryghed og ærlighed – og nu har vi sat det til musik.' },
      { slug: 'naturecell-stotter-verdensballetten-pa-mollerup-gods', title: 'NatureCell – værdierne bag vores danske CBD hudpleje', tag: 'NatureCell', img: AB + 'Verdensballetten_Moellerup_Gods_IMG_3976_62f87ac9-56d2-4dda-9185-ff7410ba5e01.jpg?v=1773091512', excerpt: 'Hos NatureCell handler vores arbejde ikke kun om hudpleje – men også om de værdier, virksomheden er bygget på. Vi tror på fællesskab, ansvar og ærlighed.' },
      { slug: 'kosmetologens-guide-til-cbd-hudpleje-ved-solskadet-og-sensitiv-hud', title: 'Kosmetologens guide til CBD hudpleje ved solskadet og sensitiv hud', tag: 'Kosmetolog', img: AB + 'Heidi-Sommer-Hudpleje-Ekspert-NatureCell-CBD-Komplet-1320x1320px_7c527778-5c3c-4315-8bf0-4babd7eab216.webp?v=1750684767', excerpt: 'Hos NatureCell er CBD ikke bare en ingrediens – det er kernen i vores hudpleje. Kosmetolog Heidi Sommer guider dig gennem pleje af solskadet og sensitiv hud.' },
      { slug: 'ekspertudtalelse-derfor-anbefaler-jeg-en-komplet-hudplejerutine-med-naturecell', title: 'Ekspertudtalelse: Derfor anbefaler jeg en komplet hudplejerutine', tag: 'Ekspert', img: AB + 'Hudplejeekspert-Heidi-Sommer_e6f35291-20fb-45cf-83ba-a0cdfcb7031f.jpg?v=1750351535', excerpt: 'Hos NatureCell samarbejder vi med fagfolk, der har både viden og mange års praktisk erfaring. En af dem er Heidi Sommer, kosmetolog med stor erfaring.' },
      { slug: 'naturecell-body-oil-i-ude-og-hjemme-se-omtalen-i-nyt-pa-hylden', title: 'NatureCell Body Oil i Ude og Hjemme: Se omtalen i "Nyt på Hylden"', tag: 'Presseomtale', img: AB + 'NatureCell_Artikel_Ude_og_Hjemme_0625_FB_1080x1080px_Plante.jpg?v=1749050269', excerpt: 'I denne uge er NatureCell med i Ude og Hjemme, hvor forbrugerjournalist Gitte Gerner Eriksen har udvalgt vores CBD Body Oil til ugens “Nyt på Hylden”.' },
      { slug: 'hvordan-vaelger-du-den-rette-hudpleje-1', title: 'Hvordan vælger du den rette hudpleje?', tag: 'Hudplejetips', img: AB + 'AKP_Hydpyramide2-KVADRAT-600x600_bb058db1-f001-4c27-88d4-3a6a4287ccf0.jpg?v=1772903959', excerpt: 'Når vi står overfor et hav af hudplejeprodukter, kan det være en udfordring at finde det rette. Vi dykker ned i Anettes Hudplejepyramide og NatureCells produkter.' },
      { slug: 'helse-magasin-cbd-hudpleje-naturecell-2019', title: 'NatureCell omtalt i Helse-magasinet allerede i 2019', tag: 'Presseomtale', img: 'https://naturecell.dk/cdn/shop/files/NatureCell_Sortiment_Hudpleje_0725.webp?v=1752671972', excerpt: 'NatureCell omtalt i pressen — læs hele omtalen.' },
      { slug: 'alt-beauty', title: 'NatureCell omtalt i ALT Beauty om CBD hudpleje (2019)', tag: 'Presseomtale', img: 'https://naturecell.dk/cdn/shop/files/Naturecell_CBD_skincare_pige_vasker_ansigt_kopier.webp?v=1757146053', excerpt: 'NatureCell omtalt i pressen — læs hele omtalen.' },
      { slug: 'naturecell-i-b-rsen-pleasure-dansk-cbd-hudpleje-omtalt', title: 'NatureCell i Børsen Pleasure: Dansk CBD hudpleje omtalt', tag: 'Presseomtale', img: 'https://naturecell.dk/cdn/shop/articles/DSF6043_9ae35b3a-2321-4a3e-a9b8-c36d2189200d.jpg?v=1774872279', excerpt: 'NatureCell omtalt i pressen — læs hele omtalen.' },
      { slug: 'beautyspace-dk', title: 'NatureCell omtalt i Beautyspace: Hvad CBD gør for din hud', tag: 'Presseomtale', img: 'https://naturecell.dk/cdn/shop/articles/kvinde_pigmentpletter_badevaerelse_aa646aae-9aec-4b09-ae91-921566456862.jpg?v=1780837322', excerpt: 'NatureCell omtalt i pressen — læs hele omtalen.' },
      { slug: 'medie-omtale-ude-hjemme', title: 'Medie omtale Ude & Hjemme', tag: 'Presseomtale', img: 'https://naturecell.dk/cdn/shop/files/NatureCell_Sortiment_Hudpleje_0725.webp?v=1752671972', excerpt: 'NatureCell omtalt i pressen — læs hele omtalen.' },
      { slug: 'pressemeddelelse', title: 'Pressemeddelelse', tag: 'Presseomtale', img: 'https://naturecell.dk/cdn/shop/files/Naturecell_CBD_skincare_pige_vasker_ansigt_kopier.webp?v=1757146053', excerpt: 'NatureCell omtalt i pressen — læs hele omtalen.' },
      { slug: 'cbd-soevn-danmark', title: 'CBD og søvn – hvad siger forskningen, og er CBD olie lovligt i Danmark?', tag: 'CBD', img: 'https://naturecell.dk/cdn/shop/articles/DSF6043_9ae35b3a-2321-4a3e-a9b8-c36d2189200d.jpg?v=1774872279', excerpt: 'Viden om CBD fra NatureCell — læs hele artiklen.' },
      { slug: 'cbd-i-traening-og-restitution', title: 'CBD i træning og restitution', tag: 'CBD', img: 'https://naturecell.dk/cdn/shop/articles/kvinde_pigmentpletter_badevaerelse_aa646aae-9aec-4b09-ae91-921566456862.jpg?v=1780837322', excerpt: 'Viden om CBD fra NatureCell — læs hele artiklen.' },
      { slug: 'hvad-er-det-endocannabinoide-system', title: 'Hvad er det endocannabinoide system?', tag: 'CBD', img: 'https://naturecell.dk/cdn/shop/files/NatureCell_Sortiment_Hudpleje_0725.webp?v=1752671972', excerpt: 'Viden om CBD fra NatureCell — læs hele artiklen.' },
      { slug: 'fuld-og-bredspektrede-cbd-olier', title: 'Fuld- og bredspektrede CBD olier', tag: 'CBD', img: 'https://naturecell.dk/cdn/shop/files/Naturecell_CBD_skincare_pige_vasker_ansigt_kopier.webp?v=1757146053', excerpt: 'Viden om CBD fra NatureCell — læs hele artiklen.' },
      { slug: 'naturecell-hudpleje-cbd-indholdsguide', title: 'Info guide: CBD-indhold i NatureCell hudpleje', tag: 'CBD', img: 'https://naturecell.dk/cdn/shop/articles/DSF6043_9ae35b3a-2321-4a3e-a9b8-c36d2189200d.jpg?v=1774872279', excerpt: 'Viden om CBD fra NatureCell — læs hele artiklen.' },
      { slug: 'cbd-hudpleje-forskning-cannabidiol-hud', title: 'CBD i hudpleje – hvad siger forskningen om cannabidiol og huden?', tag: 'CBD', img: 'https://naturecell.dk/cdn/shop/articles/kvinde_pigmentpletter_badevaerelse_aa646aae-9aec-4b09-ae91-921566456862.jpg?v=1780837322', excerpt: 'Viden om CBD fra NatureCell — læs hele artiklen.' },
      { slug: 'bivirkninger-ved-cbd-olie', title: 'Bivirkninger ved CBD olie – guide til førstegangsbrugere', tag: 'CBD', img: 'https://naturecell.dk/cdn/shop/files/NatureCell_Sortiment_Hudpleje_0725.webp?v=1752671972', excerpt: 'Viden om CBD fra NatureCell — læs hele artiklen.' },
      { slug: 'studie-cbd-viser-en-positiv-effekt-pa-angst-og-sovnproblemer', title: 'Studie: CBD viser en positiv effekt på angst og søvnproblemer', tag: 'CBD', img: 'https://naturecell.dk/cdn/shop/files/Naturecell_CBD_skincare_pige_vasker_ansigt_kopier.webp?v=1757146053', excerpt: 'Viden om CBD fra NatureCell — læs hele artiklen.' },
      { slug: 'kan-cbd-have-en-positiv-effekt-pa-uren-hud-og-akne', title: 'Kan CBD have en positiv effekt på uren hud og akne?', tag: 'CBD', img: 'https://naturecell.dk/cdn/shop/articles/DSF6043_9ae35b3a-2321-4a3e-a9b8-c36d2189200d.jpg?v=1774872279', excerpt: 'Viden om CBD fra NatureCell — læs hele artiklen.' },
      { slug: 'cbd-hudpleje-og-kroppens-eget-system', title: 'CBD-hudpleje og kroppens eget system', tag: 'CBD', img: 'https://naturecell.dk/cdn/shop/articles/kvinde_pigmentpletter_badevaerelse_aa646aae-9aec-4b09-ae91-921566456862.jpg?v=1780837322', excerpt: 'Viden om CBD fra NatureCell — læs hele artiklen.' },
      { slug: '5-gode-tips-til-hudpleje', title: '5 gode tips til hudpleje', tag: 'Hudplejetips', img: 'https://naturecell.dk/cdn/shop/files/NatureCell_Sortiment_Hudpleje_0725.webp?v=1752671972', excerpt: 'Hudplejetips fra NatureCell — læs hele guiden.' },
      { slug: 'vejen-til-flotte-velplejede-fodder', title: 'Vejen til flotte velplejede fødder', tag: 'Hudplejetips', img: 'https://naturecell.dk/cdn/shop/files/Naturecell_CBD_skincare_pige_vasker_ansigt_kopier.webp?v=1757146053', excerpt: 'Hudplejetips fra NatureCell — læs hele guiden.' },
      { slug: 'solskader-og-hudpleje-en-fire-trins-rutine-med-cbd-hudpleje-fra-naturecell', title: 'Solskader og hudpleje: En fire-trins rutine med CBD hudpleje', tag: 'Hudplejetips', img: 'https://naturecell.dk/cdn/shop/articles/DSF6043_9ae35b3a-2321-4a3e-a9b8-c36d2189200d.jpg?v=1774872279', excerpt: 'Hudplejetips fra NatureCell — læs hele guiden.' },
      { slug: 'cbd-hudpleje-hvad-er-forskellen-pa-body-lotion-handcreme-og-fodcreme', title: 'Hvad er forskellen på body lotion, håndcreme og fodcreme?', tag: 'Hudplejetips', img: 'https://naturecell.dk/cdn/shop/articles/kvinde_pigmentpletter_badevaerelse_aa646aae-9aec-4b09-ae91-921566456862.jpg?v=1780837322', excerpt: 'Hudplejetips fra NatureCell — læs hele guiden.' },
      { slug: 'fa-bugt-med-torre-haender-sadan-plejer-du-din-hud-bedst', title: 'Få bugt med tørre hænder – sådan plejer du din hud bedst', tag: 'Hudplejetips', img: 'https://naturecell.dk/cdn/shop/files/NatureCell_Sortiment_Hudpleje_0725.webp?v=1752671972', excerpt: 'Hudplejetips fra NatureCell — læs hele guiden.' },
      { slug: 'fa-blode-haender-med-vores-effektive-handcreme-losningen-til-torre-haender-og-spraekker', title: 'Få blødere hænder med vores nærende håndcreme', tag: 'Hudplejetips', img: 'https://naturecell.dk/cdn/shop/files/Naturecell_CBD_skincare_pige_vasker_ansigt_kopier.webp?v=1757146053', excerpt: 'Hudplejetips fra NatureCell — læs hele guiden.' },
      { slug: 'sommerhud-pa-overarbejde-giv-den-ro-med-cbd-hudpleje', title: 'Sommerhud på overarbejde? Giv den ro med CBD hudpleje', tag: 'Hudplejetips', img: 'https://naturecell.dk/cdn/shop/articles/DSF6043_9ae35b3a-2321-4a3e-a9b8-c36d2189200d.jpg?v=1774872279', excerpt: 'Hudplejetips fra NatureCell — læs hele guiden.' },
      { slug: 'en-dag-i-lizbeths-hudplejerutine-sadan-opnar-jeg-stralende-hud-med-naturecell', title: 'Min NatureCell hudplejerutine (54 år) – sund og glødende hud', tag: 'Hudplejetips', img: 'https://naturecell.dk/cdn/shop/articles/kvinde_pigmentpletter_badevaerelse_aa646aae-9aec-4b09-ae91-921566456862.jpg?v=1780837322', excerpt: 'Hudplejetips fra NatureCell — læs hele guiden.' },
      { slug: 'oplev-og-laer-trin-for-trin-hudpleje-og-makeup-for-modne-kvinder', title: 'CBD hudpleje og makeup: trin-for-trin for modne kvinder', tag: 'Hudplejetips', img: 'https://naturecell.dk/cdn/shop/files/NatureCell_Sortiment_Hudpleje_0725.webp?v=1752671972', excerpt: 'Hudplejetips fra NatureCell — læs hele guiden.' },
      { slug: 'cbd-hudpleje-naturlig-pleje-til-din-hud-med-naturecell-kompletpakke', title: 'CBD hudpleje: Naturlig pleje med NatureCell Kompletpakke', tag: 'Hudplejetips', img: 'https://naturecell.dk/cdn/shop/files/Naturecell_CBD_skincare_pige_vasker_ansigt_kopier.webp?v=1757146053', excerpt: 'Hudplejetips fra NatureCell — læs hele guiden.' },
      { slug: 'oplev-hudplejerevolutionen-med-naturecell-cbd-en-markant-forskel', title: 'Oplev hudplejerevolutionen med NatureCell CBD', tag: 'Hudplejetips', img: 'https://naturecell.dk/cdn/shop/articles/DSF6043_9ae35b3a-2321-4a3e-a9b8-c36d2189200d.jpg?v=1774872279', excerpt: 'Hudplejetips fra NatureCell — læs hele guiden.' },
      { slug: 'naturecell-testpanelets-oplevelser', title: 'NatureCell: Testpanelets oplevelser', tag: 'NatureCell', img: 'https://naturecell.dk/cdn/shop/articles/kvinde_pigmentpletter_badevaerelse_aa646aae-9aec-4b09-ae91-921566456862.jpg?v=1780837322', excerpt: 'Nyt fra NatureCell — læs hele historien.' },
      { slug: 'flere-unge-gar-til-kosmetolog-paen-hud-oger-selvvaerdet', title: 'Flere unge søger hjælp til hudproblemer – læs med hos Hair.dk', tag: 'NatureCell', img: 'https://naturecell.dk/cdn/shop/files/NatureCell_Sortiment_Hudpleje_0725.webp?v=1752671972', excerpt: 'Nyt fra NatureCell — læs hele historien.' },
      { slug: 'tech-giganter-dikterer-spillereglerne', title: 'Tech-giganter dikterer spillereglerne', tag: 'NatureCell', img: 'https://naturecell.dk/cdn/shop/files/Naturecell_CBD_skincare_pige_vasker_ansigt_kopier.webp?v=1757146053', excerpt: 'Nyt fra NatureCell — læs hele historien.' },
      { slug: 'gron-hele-vejen-igennem-ogsa-pa-rejsen-hjem-til-dig', title: 'Kend os på den grønne farve – også på rejsen hjem til dig', tag: 'NatureCell', img: 'https://naturecell.dk/cdn/shop/articles/DSF6043_9ae35b3a-2321-4a3e-a9b8-c36d2189200d.jpg?v=1774872279', excerpt: 'Nyt fra NatureCell — læs hele historien.' },
      { slug: 'fantastisk-abningsdag-i-lille-nyhavn', title: 'Fantastisk åbningsdag i Lille Nyhavn', tag: 'NatureCell', img: 'https://naturecell.dk/cdn/shop/articles/kvinde_pigmentpletter_badevaerelse_aa646aae-9aec-4b09-ae91-921566456862.jpg?v=1780837322', excerpt: 'Nyt fra NatureCell — læs hele historien.' },
      { slug: 'blev-angrebet-af-en-blaeksprutte-da-jeg-badede-i-skanderborg-so', title: 'Blev angrebet af en blæksprutte, da jeg badede i Skanderborg Sø!', tag: 'NatureCell', img: 'https://naturecell.dk/cdn/shop/files/NatureCell_Sortiment_Hudpleje_0725.webp?v=1752671972', excerpt: 'Nyt fra NatureCell — læs hele historien.' },
      { slug: 'dansk-tryghed-med-naturecell-virkelige-kundehistorier-om-cbd-hudpleje', title: 'Sikker e-handel & CBD: kunders ærlige oplevelser', tag: 'NatureCell', img: 'https://naturecell.dk/cdn/shop/files/Naturecell_CBD_skincare_pige_vasker_ansigt_kopier.webp?v=1757146053', excerpt: 'Nyt fra NatureCell — læs hele historien.' },
      { slug: 'naturecell-s-rodder-pa-mollerup-gods-vores-familie-rammes-af-branden', title: 'NatureCell’s rødder på Møllerup Gods – familien rammes af branden', tag: 'NatureCell', img: 'https://naturecell.dk/cdn/shop/articles/DSF6043_9ae35b3a-2321-4a3e-a9b8-c36d2189200d.jpg?v=1774872279', excerpt: 'Nyt fra NatureCell — læs hele historien.' },
      { slug: 'deltag-pa-live-laer-kenneth-adelhardts-tips-til-en-enkel-men-effektiv-hudpleje-og-make-up-rutine', title: 'Deltag på LIVE: Kenneth Adelhardts hudpleje- og makeup-tips', tag: 'NatureCell', img: 'https://naturecell.dk/cdn/shop/articles/kvinde_pigmentpletter_badevaerelse_aa646aae-9aec-4b09-ae91-921566456862.jpg?v=1780837322', excerpt: 'Nyt fra NatureCell — læs hele historien.' },
    ];
    this._data = { products, byId, areas, needs, areaLabels, needLabels, cases, press, testimonials, ingredients, articles };
    return this._data;
  }

  fmtKr(n) { return Math.round(n).toLocaleString('da-DK') + ' kr.'; }
  usvg(d, size) { const s = size || 20; return React.createElement('svg', { width: s, height: s, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }, React.createElement('path', { d: d })); }
  tier(qty) { return qty >= 3 ? 0.15 : qty === 2 ? 0.10 : 0; }

  get T() {
    const dict = {
      da: { shop: 'Shop', cases: 'Kundecases', articles: 'Artikler', about: 'Om os', b2b: 'B2B login', kundeklub: 'Kundeklub', viewAll: 'Se alle', shopNow: 'Shop nu' },
      en: { shop: 'Shop', cases: 'Customer cases', articles: 'Articles', about: 'About us', b2b: 'B2B login', kundeklub: 'Loyalty club', viewAll: 'View all', shopNow: 'Shop now' },
      de: { shop: 'Shop', cases: 'Kundenfälle', articles: 'Artikel', about: 'Über uns', b2b: 'B2B-Login', kundeklub: 'Kundenklub', viewAll: 'Alle ansehen', shopNow: 'Jetzt shoppen' },
    };
    return dict[this.state.lang] || dict.da;
  }

  go(name, extra) { this.setState({ route: Object.assign({ name }, extra || {}), megaOpen: false, mobileNavOpen: false, aboutMenu: false }); window.scrollTo(0, 0); }
  addToCart(id, qty) {
    const q = qty || 1;
    this.setState(s => ({ cart: Object.assign({}, s.cart, { [id]: (s.cart[id] || 0) + q }), cartOpen: true, megaOpen: false }));
  }
  setLine(id, qty) {
    this.setState(s => {
      const c = Object.assign({}, s.cart);
      if (qty <= 0) delete c[id]; else c[id] = qty;
      return { cart: c };
    });
  }

  renderVals() {
    const D = this.DATA, S = this.state, t = this.T;
    const r = S.route;
    const cartIds = Object.keys(S.cart);
    const cartCount = cartIds.reduce((a, id) => a + S.cart[id], 0);

    // cart computations
    let subtotal = 0, savings = 0;
    const cartLines = cartIds.map(id => {
      const p = D.byId[id]; const qty = S.cart[id];
      const base = p.price * qty;
      const qd = base * this.tier(qty);
      const lineTotal = base - qd;
      subtotal += lineTotal;
      savings += qd + (p.compareAt ? (p.compareAt - p.price) * qty : 0);
      return { id, name: p.name, img: p.img, qty,
        totalLabel: this.fmtKr(lineTotal),
        hasQtyDisc: qd > 0, qtyDiscPct: Math.round(this.tier(qty) * 100) + '%',
        inc: () => this.setLine(id, qty + 1), dec: () => this.setLine(id, qty - 1), remove: () => this.setLine(id, 0) };
    });
    const FREE = 399;
    const freeShipPct = Math.min(100, Math.round((subtotal / FREE) * 100)) + '%';

    const mk = (p) => p;
    const bestIds = ['skin-oil','complete','day-cream','serum','night-cream','drops-1000','body-lotion','all-day-facial'];

    const langs = ['da','en','de'].map(code => ({ code, go: () => this.setState({ lang: code }),
      bg: S.lang === code ? 'var(--sage-500)' : 'transparent', fg: S.lang === code ? '#fff' : 'var(--ink-500)' }));

    const tabBg = (k) => S.megaTab === k ? 'var(--sage-500)' : 'transparent';
    const tabFg = (k) => S.megaTab === k ? '#fff' : 'var(--ink-700)';

    const areas = D.areas.map(a => Object.assign({}, a, { go: () => this.go('collection', { filter: { area: a.key } }) }));
    const needs = D.needs.map(n => Object.assign({}, n, { go: () => this.go('collection', { filter: { need: n.key } }) }));
    const megaBest = bestIds.slice(0, 8).map(id => { const p = D.byId[id]; return { id, name: p.name, img: p.img, priceLabel: this.fmtKr(p.price), go: () => this.openProduct(id) }; });

    const casesTeaser = D.cases.slice(0, 10).map(c => Object.assign({}, c, { areaLabel: D.areaLabels[c.area], who: c.age ? (c.name + ', ' + c.age + ' år') : c.name, go: () => this.openCase(c.id) }));

    const footerShop = [
      { label: 'Alle produkter', go: () => this.go('collection', { filter: null }) },
      { label: 'CBD Hudpleje', go: () => this.go('collection', { filter: { area: 'ansigt' } }) },
      { label: 'Krop & hænder', go: () => this.go('collection', { filter: { area: 'krop' } }) },
      { label: 'CBD Drops', go: () => this.go('collection', { filter: { kraft: true } }) },
      { label: 'Sampakker', go: () => this.go('collection', { filter: { bundle: true } }) },
      { label: 'Herre hudpleje', go: () => this.go('collection', { filter: { men: true } }) },
      { label: 'Tilbud', go: () => this.go('collection', { filter: { sale: true } }) },
    ];

    const footerAbout = [
      { label: 'Vores historie', go: () => this.go('about') },
      { label: 'Om CBD', go: () => this.go('omcbd') },
      { label: 'Ingredienser', go: () => this.go('ingredients') },
      { label: 'Kundecases', go: () => this.go('cases') },
      { label: 'Artikler', go: () => this.go('articles') },
      { label: 'Kundeklub', go: () => this.go('kundeklub') },
    ];
    const footerService = [
      { label: 'Kontakt & åbningstider', go: () => this.go('kontakt') },
      { label: 'Ofte stillede spørgsmål', go: () => this.go('faq') },
      { label: 'Hudpleje-quiz', go: () => { this.setState({ quizStep: 0, quizArea: null, quizNeed: null }); this.go('quiz'); } },
      { label: 'Gavekort', go: () => this.go('gavekort') },
      { label: 'Handelsbetingelser', go: () => this.go('vilkaar') },
      { label: 'Privatlivspolitik', go: () => this.go('privatliv') },
    ];
    const footerErhverv = [
      { label: 'B2B login', go: () => this.go('b2b') },
      { label: 'Bliv forhandler', go: () => this.go('forhandlere') },
    ];

    const icon = (d) => React.createElement('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.9, strokeLinecap: 'round', strokeLinejoin: 'round' }, React.createElement('path', { d }));
    const trustItems = [
      { label: 'Godkendt i Danmark · 2019', icon: icon('M20 6 9 17l-5-5') },
      { label: 'Vegansk & plantebaseret', icon: icon('M12 2 4 5v6c0 5 3.5 8 8 11 4.5-3 8-6 8-11V5Z') },
      { label: 'e-mærket webshop', icon: icon('M12 2 4 5v6c0 5 3.5 8 8 11 4.5-3 8-6 8-11V5Z') },
      { label: 'GMP- & ISO-certificeret', icon: icon('M20 6 9 17l-5-5') },
    ];

    // ---- collection ---- (combinable: area + need + special)
    const f = r.name === 'collection' ? (r.filter || {}) : {};
    const isMen = (p) => (p.id || '').indexOf('alfalab') === 0 || (p.eyebrow || '').toUpperCase().indexOf('ALFALAB') === 0;
    const bundleFirst = (arr) => arr.slice().sort((a, b) => (b.bundle ? 1 : 0) - (a.bundle ? 1 : 0));
    const isMenFilter = !!f.men;
    // main-ingredient map (for ingredient filter + search text)
    const INGL = { cbd: 'CBD', cbg: 'CBG', hampolie: 'Hampolie', hyaluron: 'Hyaluronsyre', urea: 'Urea', niacinamide: 'Niacinamide', squalane: 'Squalane', shea: 'Sheasmør', mandelolie: 'Mandelolie', mango: 'Mango Butter', tocopherol: 'E-vitamin', mct: 'MCT-olie', aloe: 'Aloe Vera', lavendel: 'Lavendel' };
    const PING = { 'skin-oil': ['cbd','mct','hampolie','tocopherol'], 'day-cream': ['cbd','aloe','shea','niacinamide'], 'night-cream': ['cbd','mandelolie','squalane','mango'], 'cleansing-gel': ['cbd','aloe','mct'], 'serum': ['hyaluron','cbd','niacinamide'], 'handcreme': ['cbd','aloe','shea','niacinamide'], 'body-lotion': ['cbd','shea','mandelolie'], 'body-oil': ['cbd','mandelolie','tocopherol','lavendel'], 'fodcreme': ['urea','cbd','shea','mango'], 'eye-gel': ['cbg','niacinamide','hyaluron'], 'lip-balm': ['cbd','shea','tocopherol'], 're-new-balm': ['cbd','shea','mango'], 'deodorant': ['cbd','aloe','tocopherol'], 'shampoo': ['cbd','niacinamide'], 'conditioner': ['cbd','shea'], 'love': ['cbd','aloe'], 'complete': ['cbd','hyaluron','shea','urea'], 'all-day-facial': ['cbd','hyaluron','niacinamide','shea'], 'drops-500': ['cbd','hampolie'], 'drops-1000': ['cbd','hampolie'], 'drops-1500': ['cbd','hampolie'], 'drops-2000': ['cbd','hampolie'], 'collagen': ['hyaluron'], 'collagen-3pak': ['hyaluron'], 'alfalab-day': ['cbd','hyaluron','niacinamide'], 'alfalab-night': ['cbd','squalane','mango'], 'alfalab-glow': ['cbd','tocopherol'], 'alfalab-pakke': ['cbd','hyaluron'] };
    const pIng = (p) => PING[p.id] || ['cbd'];
    const collQ = (S.collQuery || '').trim().toLowerCase();
    let collProducts;
    if (f.men) { collProducts = D.products.filter(isMen); }
    else {
      collProducts = D.products.filter(p => !isMen(p));
      if (f.area) collProducts = collProducts.filter(p => (p.areas || []).includes(f.area));
      if (f.need) collProducts = collProducts.filter(p => (p.needs || []).includes(f.need));
      if (f.bundle) collProducts = collProducts.filter(p => p.bundle);
      if (f.kraft) collProducts = collProducts.filter(p => p.kraft);
      if (f.sale) collProducts = collProducts.filter(p => p.compareAt || p.save);
    }
    if (collQ) collProducts = collProducts.filter(p => (p.name + ' ' + (p.eyebrow || '') + ' ' + (p.desc || '') + ' ' + (p.bullets || []).join(' ') + ' ' + pIng(p).map(k => INGL[k] || '').join(' ')).toLowerCase().includes(collQ));
    collProducts = bundleFirst(collProducts);
    let collTitle = 'Alle produkter', collDesc = 'Hele NatureCell-sortimentet — plantebaseret CBD-hudpleje til alle hudtyper.';
    if (f.men) { collTitle = 'Herre hudpleje'; collDesc = 'ALFALAB — effektiv, enkel hudpleje udviklet til mænd. Ingen unødvendige trin.'; }
    else {
      const parts = [];
      if (f.area) parts.push(D.areaLabels[f.area]);
      if (f.need) parts.push((D.needLabels[f.need] || '').toLowerCase());
      if (f.bundle) parts.push('Sampakker');
      if (f.kraft) parts.push('CBD Drops');
      if (f.sale) parts.push('Tilbud');
      if (parts.length) { collTitle = parts.join(' · '); collDesc = 'Filtreret udvalg' + (f.area ? ' til ' + (D.areaLabels[f.area] || '').toLowerCase() : '') + (f.need ? (f.area ? ', ' : ' — ') + (D.needLabels[f.need] || '').toLowerCase() : '') + '.'; }
      if (collQ) { collTitle = 'Søgeresultater'; collDesc = 'Viser produkter der matcher "' + (S.collQuery || '').trim() + '".'; }
    }
    const chipStyle = (on) => on
      ? { bd: 'var(--sage-500)', bg: 'var(--sage-500)', fg: '#fff' }
      : { bd: 'var(--border-default)', bg: 'transparent', fg: 'var(--ink-700)' };
    const setF = (patch) => { const nf = Object.assign({}, f, patch); Object.keys(nf).forEach(k => { if (!nf[k]) delete nf[k]; }); this.go('collection', { filter: Object.keys(nf).length ? nf : null }); };
    const areaChips = [{ key: null, label: 'Alle' }].concat(D.areas.map(a => ({ key: a.key, label: a.label }))).map(c => {
      const on = c.key === null ? (!f.area && !f.men) : (f.area === c.key);
      return Object.assign({ label: c.label, go: () => setF({ area: (c.key === null || f.area === c.key) ? null : c.key, men: null }) }, chipStyle(on)); });
    const menChip = Object.assign({ label: 'Herre hudpleje', go: () => this.go('collection', { filter: { men: true } }) }, chipStyle(isMenFilter));
    const saleChip = Object.assign({ label: 'Tilbud', go: () => this.go('collection', { filter: { sale: true } }) }, chipStyle(!!f.sale));
    // ---- SEO bundtekst pr. kollektion ----
    const areaSeo = {
      ansigt: ['Ansigtspleje med CBD til alle hudtyper', ['NatureCells ansigtspleje samler rens, serum, dag- og natcreme i én gennemtænkt rutine, hvor CBD (cannabidiol) er den bærende ingrediens. CBD kombineres med aloe vera, hyaluronsyre, squalane og plejende planteolier, der bidrager til fugt, ro og balance i huden – uanset om du har tør, fedtet, kombineret, moden eller sensitiv hud.', 'En enkel daglig rutine morgen og aften er ofte nok: rens huden nænsomt, tilfør serum eller olie, og afslut med creme. Alle produkter er veganske, uden syntetisk parfume og udviklet samt testet i Danmark. Vores dag- og natcreme er dermatologisk testet af Dermatest med topkarakter.']],
      haender: ['Håndcreme og pleje til tørre hænder', ['Hænderne er blandt de mest udsatte steder på kroppen – hyppig håndvask, sprit og kulde tørrer huden ud. NatureCells håndpleje med CBD, sheasmør og aloe vera nærer i dybden, styrker hudens barriere og trækker hurtigt ind uden at fedte.', 'Brug håndcremen flere gange dagligt, især efter håndvask og inden sengetid. Til meget tørre hænder kan du blande et par dråber CBD Skin Oil i cremen for ekstra pleje.']],
      krop: ['Kropspleje med CBD – lotion og olie', ['Vores kropspleje giver langvarig fugt til tør og stram hud. Bodylotion og Body Oil med CBD, planteolier og E-vitamin blødgør og beskytter, og trækker hurtigt ind, så huden føles blød hele dagen.', 'Påfør på let fugtig hud efter bad for bedst optag. Produkterne er parfumefri i syntetisk forstand og velegnede til daglig brug på hele kroppen.']],
      foedder: ['Fodcreme til tørre fødder og hæle', ['Tørre fødder, hård hud og revnede hæle er noget mange kender. NatureCells fodcreme med urea, CBD og sheasmør blødgør hård hud, tilfører fugt og giver en behagelig, plejet fornemmelse.', 'Smør fødderne hver aften – gerne med en bomuldsstrømpe over natten ved meget tør hud – og fjern jævnligt døde hudceller med en fodfil for det bedste resultat.']],
      haar: ['Hårpleje med CBD – shampoo og balsam', ['Vores hårpleje med CBD, silke- og hvedeprotein renser og plejer nænsomt både hår og hovedbund. Formuleringen er mild og velegnet til daglig brug og til sart hovedbund.', 'Kombinér shampoo og balsam for et blødere, mere håndterbart hår. Produkterne er veganske og uden unødvendige tilsætningsstoffer.']],
      intim: ['Skånsom intimpleje med CBD', ['NatureCells intimpleje er formuleret med naturlige, organiske ingredienser og CBD til en skånsom oplevelse. Produktet er udviklet med fokus på mildhed og velegnet til sart hud.']],
    };
    const needSeo = {
      toer: ['Hudpleje til tør hud', ['Tør hud mangler både fugt og fedt og føles ofte stram. NatureCells produkter til tør hud kombinerer CBD med fugtbindende og blødgørende ingredienser som glycerin, mandelolie, squalane og sheasmør, der genopretter hudens fugtbalance og styrker barrieren.']],
      fugt: ['Fugtgivende CBD-hudpleje', ['Har din hud brug for et fugtboost, er hyaluronsyre og CBD en stærk kombination. Vores serum og cremer tilfører intens fugt og hjælper huden med at fremstå mere udhvilet, glat og ensartet.']],
      moden: ['Hudpleje til moden hud', ['Moden hud har ofte brug for ekstra næring og fugt. Med CBD, antioxidanter og ingredienser som squalane, ginkgo biloba og vitaminerne C og E bidrager NatureCells produkter til en glattere, mere smidig hud og understøtter elasticiteten.']],
      sensitiv: ['Mild hudpleje til sensitiv hud', ['Sensitiv og sart hud trives bedst med enkle, milde formuleringer. NatureCells produkter er uden syntetisk parfume og udvalgt med fokus på ro og komfort – velegnet til hud, der let bliver rød eller irriteret.']],
      uren: ['CBD-hudpleje til uren hud', ['CBD har talgregulerende (anti-sebum) egenskaber, der bidrager til at balancere huden og give et mere mat og ensartet udtryk. Kombineret med en mild rens hjælper det med at pleje uren hud uden at udtørre.']],
      genopbygning: ['Genopbyggende hudpleje', ['Til hud, der trænger til reparation og ro, tilbyder NatureCell nærende olier og cremer med CBD, der understøtter hudens naturlige genopbygning – særligt om natten, hvor huden regenererer.']],
    };
    // Ahrefs-informed keyword paragraphs + FAQ (DK volumes checked 2026-08).
    const seoExtra = {
      area_ansigt: 'Leder du efter ansigtspleje med CBD, finder du her både dagcreme, natcreme, rensegel og serum. Kombinationen af en CBD creme morgen og aften og en mild rens er den enkleste vej til en fast rutine – uanset om din hud er tør, fedtet, kombineret eller sensitiv.',
      area_haender: 'Håndcreme til tørre hænder er et af vores mest solgte produkter. Den plejer hænder, der vaskes ofte, og efterlader ikke en fedtet film – så du kan bruge den flere gange dagligt, også på arbejdet.',
      area_krop: 'Søger du bodylotion til tør hud, giver vores kropspleje med CBD langvarig fugt til stramme områder som lægge, albuer og knæ. Body Oil kan bruges alene eller lag på lag med lotion ved meget tør hud.',
      area_foedder: 'Fodcreme til hælrevner og hård hud virker bedst som fast aftenrutine. Urea blødgør, CBD og sheasmør plejer, og resultatet bliver en glattere, mere velplejet hudoverflade på fødder og hæle.',
      area_haar: 'Mild shampoo og balsam med CBD kan bruges af hele familien – både kvinder, mænd og unge, der ønsker en skånsom hårpleje uden unødvendige ingredienser.',
      need_toer: 'Hudpleje til tør hud handler om at tilføre fugt og holde den inde. Vælg en fugtgivende CBD creme til ansigtet, bodylotion til kroppen og en rigere olie de dage, hvor huden føles ekstra stram – og påfør altid på let fugtig hud for bedst optag.',
      need_fugt: 'Et serum med hyaluronsyre lægges under din dagcreme eller natcreme, så fugten låses inde. Det er den enkleste opgradering af en rutine, der føles tør i løbet af dagen.',
      need_moden: 'Hudpleje til moden hud og hudpleje 50+ er kernen i NatureCell®. Vores primære kunder er kvinder på 45+, og hele serien er formuleret til hud, der har brug for mere næring, fugt og blidhed – uden unødvendige ingredienser og uden at koste en formue.',
      need_sensitiv: 'Har du sensitiv hud, anbefaler vi at starte med ét produkt ad gangen, så du roligt kan mærke, hvordan din hud reagerer. Alle produkter er uden syntetisk parfume.',
      need_uren: 'Hudpleje til uren hud fungerer bedst, når du ikke overrenser. Brug en mild rensegel morgen og aften, og følg op med en let, fugtgivende creme – huden har stadig brug for fugt, selv når den er fedtet.',
      need_genopbygning: 'Brug en nærende natcreme eller hudplejeolie som sidste trin om aftenen, hvor huden regenererer, og giv rutinen nogle uger. Resultater varierer fra person til person – vi lover ikke mirakler.',
      men: 'Hudpleje til mænd behøver ikke være kompliceret. DAY, NIGHT og GLOW dækker det væsentlige: fugt om morgenen, genopbygning om aftenen og et olieboost efter behov – tre trin, ingen overflødige produkter.',
      bundle: 'Sampakkerne – blandt andet Komplet Pakken, All Day Facial, Hånd Sampakken og Fod Sampakken – er den mest økonomiske måde at komme i gang med en hel rutine. Du får produkter, der er sammensat til at fungere sammen, til en lavere samlet pris.',
      all: 'Uanset om du søger CBD creme, CBD hudplejeolie, dagcreme, natcreme, håndcreme eller fodcreme, finder du det i sortimentet. Alle produkter er kosmetiske, plantebaserede og produceret i Danmark – og du kan filtrere efter både område og behov for hurtigt at finde det rigtige.',
    };
    // Ahrefs DK volumes (aug 2026) drive the topical depth blocks below.
    const seoBlocks = {
      all: [
        ['Sådan vælger du den rigtige hudpleje', 'Start med hudens behov frem for produktnavnet. Er huden tør og stram, skal du have fugt og fedt – en fugtighedscreme morgen og aften plus en olie som sidste trin. Er huden fedtet eller uren, holder du en let creme og en mild rensegel. Er huden moden, prioriterer du næring, antioxidanter og en rigere natcreme. Du kan filtrere sortimentet efter både område og behov på én gang.'],
        ['Ingredienserne der gør forskellen', 'CBD (cannabidiol) er seriens omdrejningspunkt og kombineres med hyaluronsyre og urea, der binder fugt, sheasmør og mandelolie, der blødgør og beskytter, samt niacinamide og E-vitamin, der understøtter en ensartet, velplejet hud. Alt er plantebaseret, vegansk og uden syntetisk parfume – du kan læse om hver enkelt ingrediens på vores ingrediensside.'],
        ['Dansk hudpleje du kan regne med', 'NatureCell® er et dansk familieejet brand og den første CBD-hudplejeserie godkendt til salg i Danmark. Produktionen sker på GMP- og ISO-certificerede faciliteter, webshoppen er e-mærket, og vi lover ikke mirakler – vi lader vores kunder fortælle deres egne historier under kundecases.'],
      ],
      area_ansigt: [
        ['Din ansigtsrutine – trin for trin', 'En god rutine behøver ikke være kompliceret. Rens ansigtet morgen og aften med en mild rensegel, læg et serum med hyaluronsyre på fugtig hud, og afslut med dagcreme om morgenen og natcreme om aftenen. Har du meget tør hud i ansigtet, kan du tilføje et par dråber hudplejeolie som sidste trin.'],
        ['Dagcreme eller natcreme?', 'Dagcremen er lettere og trækker hurtigt ind, så den kan bruges under makeup. Natcremen er rigere og understøtter huden i de timer, hvor den regenererer. Mange bruger begge – men starter du forfra, er en fugtighedscreme og en mild rens det vigtigste fundament.'],
        ['Ansigtspleje til alle hudtyper', 'Serien er formuleret til tør, fedtet, kombineret, moden, sensitiv og uren hud. Er din hud reaktiv, så introducér ét produkt ad gangen. Alle ansigtsprodukter er veganske og uden syntetisk parfume.'],
      ],
      area_haender: [
        ['Hvorfor bliver hænderne så tørre?', 'Hænderne vaskes oftere end resten af kroppen, og hver vask fjerner en del af hudens naturlige fedtlag. Derfor bliver huden stram, ru og nogle gange revnet – især om vinteren og i job med meget håndvask. Løsningen er at tilføre fugt igen, hver gang: en håndcreme der ikke fedter, så du faktisk får den brugt.'],
        ['Sådan bruger du håndcremen', 'Smør efter hver håndvask og altid før du går ud i kulden. Massér ekstra ind omkring knoer og neglebånd, hvor huden er tyndest. Ved meget tørre hænder kan du lægge et lag på om aftenen og eventuelt sove med bomuldshandsker.'],
        ['Hvad gør CBD i en håndcreme?', 'CBD er rig på antioxidanter og fedtsyrer og kombineres her med fugtbindende og blødgørende ingredienser, der giver intensiv fugt til tør hud og beskytter mod udtørring. Produktet er kosmetisk.'],
      ],
      area_krop: [
        ['Bodylotion eller body oil?', 'Bodylotion er let, trækker hurtigt ind og er til daglig brug over hele kroppen. Body Oil er rigere og velegnet til meget tør hud – alene eller som et lag oven på lotionen. Begge indeholder CBD og planteolier.'],
        ['Timing er det halve af effekten', 'Påfør altid på let fugtig hud lige efter bad. Så binder produktet den fugt, huden allerede har, i stedet for at skulle arbejde mod en tør overflade. Lægge, albuer, knæ og skinneben har typisk mest brug for det.'],
        ['Kropspleje året rundt', 'Om vinteren tørrer indendørs varme huden ud, og om sommeren har huden brug for pleje efter sol og saltvand. Efter en dag i solen vil CBD hjælpe med at opretholde en velplejet hud og bidrage til en mere jævn, balanceret, fugtig og rolig hud.'],
      ],
      area_foedder: [
        ['Tørre fødder og hælrevner', 'Hård hud og revner opstår, hvor huden bærer vægt og gnider – typisk hæle og trædepuder. Nøglen er en fast aftenrutine: fjern jævnligt død hud med en fodfil, og smør derefter, mens huden er modtagelig. Urea blødgør den hårde hud, og sheasmør og CBD plejer.'],
        ['Sådan får du det bedste resultat', 'Smør fødderne hver aften. Ved meget tør hud kan du tage en bomuldsstrømpe på over natten, så cremen bliver på huden i stedet for i sengetøjet. Mange oplever blødere fødder inden for et par uger – resultater varierer fra person til person.'],
        ['Hvad gør urea?', 'Urea er fugtbindende og blødgør hård hud. Derfor er det en central ingrediens i fodpleje, hvor huden er tykkere og mere tørkeudsat end andre steder på kroppen.'],
      ],
      area_haar: [
        ['Mild hårpleje til hele familien', 'Vores milde shampoo er produceret uden unødvendige ingredienser og kan bruges af hele familien – både kvinder, mænd og unge, der ønsker en skånsom hårpleje. Kombinér med balsam for et blødere og mere håndterbart hår.'],
        ['Tørt hår og sart hovedbund', 'Er hovedbunden sart, handler det om at rense nænsomt frem for kraftigt. Formuleringen med CBD, silke- og hvedeprotein er mild nok til daglig brug og efterlader håret rent uden at stramme.'],
        ['Sådan bruger du produkterne', 'Massér shampooen ind i hovedbunden, skyl grundigt, og fordel balsam fra midten og ud – undgå hovedbunden, hvis håret hurtigt bliver fedtet.'],
      ],
      need_toer: [
        ['Hvad tør hud egentlig mangler', 'Tør hud mangler både fugt (vand) og fedt (lipider). Derfor virker det bedst at kombinere fugtbindende ingredienser som glycerin, hyaluronsyre og urea med blødgørende olier som mandelolie, squalane og sheasmør – det ene holder fugten inde, det andet genopbygger barrieren.'],
        ['Rutinen der virker på tør hud', 'Mild rens morgen og aften (aldrig kraftig sæbe), fugt på let fugtig hud, og en olie eller rigere creme som sidste trin. Til kroppen: bodylotion efter bad, eventuelt med Body Oil ovenpå de tørreste steder.'],
        ['Tør hud i ansigtet om vinteren', 'Kold luft udefra og tør varme indendørs er en hård kombination. Skift til en rigere creme om aftenen i vintermånederne, og undgå meget varme bade, som fjerner hudens fedtlag.'],
      ],
      need_fugt: [
        ['Hyaluronsyre – kort forklaret', 'Hyaluronsyre er fugtbindende og hjælper huden med at holde fast på det vand, den har. Resultatet er en hud, der fremstår mere glat, udhvilet og ensartet. Den virker bedst påført på let fugtig hud og med en creme ovenpå, der låser fugten inde.'],
        ['Serum eller creme først?', 'Serum først, creme bagefter. Serummet er tyndere og trænger ind, cremen lægger et beskyttende lag, så fugten ikke forsvinder i løbet af dagen.'],
        ['Fugt til alle hudtyper', 'Også fedtet hud har brug for fugt – vælg en let creme frem for at springe trinnet over. Springer du fugt over, reagerer huden ofte med at producere mere talg.'],
      ],
      need_moden: [
        ['Hudpleje til moden hud og 50+', 'Moden hud har typisk brug for mere næring og fugt end tidligere, og barrieren er mere sart. Vores primære kunder er kvinder på 45+, og hele serien er formuleret med det for øje: CBD, antioxidanter, squalane, ginkgo biloba og vitamin C og E, der bidrager til en glattere, mere smidig hud og understøtter elasticiteten.'],
        ['Pigmentpletter og ujævn hudtone', 'Produkterne reducerer synligheden af pigmentpletter og understøtter en ensartet hudfarve. De behandler ikke pigmentpletter – de er kosmetiske og har ingen medicinsk effekt.'],
        ['Kvalitet uden at koste en formue', 'Vi ved, at mange af vores kunder ønsker høj kvalitet til en fornuftig pris. Derfor findes sortimentet også som sampakker, hvor en hel rutine samlet koster mindre end produkterne enkeltvis.'],
      ],
      need_sensitiv: [
        ['Mild hudpleje til sensitiv hud', 'Sart hud trives bedst med korte ingredienslister og ingen syntetisk parfume. Alle NatureCell®-produkter er formuleret uden tilsat syntetisk duft, og duften kommer alene fra de naturlige ingredienser.'],
        ['Sådan starter du roligt', 'Introducér ét produkt ad gangen og giv din hud cirka en uge, før du tilføjer det næste. Så ved du præcis, hvad din hud reagerer på.'],
        ['Rødme og ubehag', 'Undgå kraftig rens, meget varmt vand og hyppig eksfoliering. Fokusér i stedet på fugt og en rolig, forudsigelig rutine.'],
      ],
      need_uren: [
        ['CBD og fedtet hud', 'CBD har talgregulerende (anti-sebum) egenskaber, der bidrager til at balancere huden og give et mere mat og ensartet udtryk. Det gør den til en interessant ingrediens i pleje af uren hud.'],
        ['Den mest almindelige fejl', 'Overrens ikke. Kraftig eller hyppig rens fjerner hudens beskyttende lag, og huden svarer ofte med at producere mere talg. Mild rens to gange dagligt og en let fugtcreme er nok.'],
        ['Hudpleje til tør og uren hud', 'Huden kan godt være fedtet i T-zonen og tør på kinderne samtidig. Brug en let creme over hele ansigtet og tilføj kun en olie eller rigere creme dér, hvor huden er tørrest.'],
      ],
      need_genopbygning: [
        ['Huden arbejder om natten', 'Hudens naturlige fornyelse er mest aktiv, mens du sover. Derfor giver en nærende natcreme eller en hudplejeolie som sidste trin om aftenen det bedste udgangspunkt.'],
        ['Giv det nogle uger', 'En ny rutine skal have tid. Mange oplever en mere velplejet hud efter nogle ugers fast brug. Resultater varierer fra person til person – vi lover ikke mirakler.'],
        ['Lag på lag', 'Læg altid det letteste produkt først og det rigeste sidst: serum, creme, olie. Så trænger hvert lag ind, som det skal.'],
      ],
      men: [
        ['Tre trin – ikke tolv', 'DAY, NIGHT og GLOW dækker det væsentlige: fugt om morgenen, genopbygning om aftenen og et olieboost efter behov. Ingen unødvendige trin og ingen produkter, du ikke får brugt.'],
        ['Hudpleje til mænd efter barbering', 'Barbering fjerner både hår og en del af hudens overflade, og derfor kan huden føles stram bagefter. Produkterne er uden syntetisk parfume og milde nok til at bruge direkte på nybarberet hud.'],
        ['ALFALAB og NatureCell®', 'ALFALAB er vores serie målrettet mænd. Den bygger på samme plantebaserede tilgang og produceres i Danmark under samme krav til kvalitet og dokumentation.'],
      ],
      bundle: [
        ['Derfor er en sampakke billigere', 'Sampakkerne samler de produkter, der er tænkt til at fungere sammen, og koster mindre end produkterne enkeltvis. Det er den mest økonomiske måde at komme i gang med en hel rutine.'],
        ['Hvilken pakke passer til dig?', 'Komplet Pakken dækker en hel ansigtsrutine. All Day Facial er til dag- og aftenpleje. Hånd Sampakken og Fod Sampakken er til de områder, der oftest bliver tørre.'],
        ['Den nemme gave', 'Sampakkerne er blandt vores mest købte gaver, fordi de rummer en komplet rutine frem for et enkelt produkt. Er du i tvivl om modtagerens hudtype, passer serien til alle hudtyper.'],
      ],
      kraft: [
        ['Styrkerne forklaret', 'CBD Drops fås i 5%, 10%, 15% og 20%. Procenten angiver CBD-indholdet. Har du ikke prøvet CBD før, er en lavere styrke et naturligt sted at starte.'],
        ['Kvalitet og dokumentation', 'Produkterne fremstilles på GMP- og ISO-certificerede faciliteter, og hvert parti testes. Opbevar køligt og mørkt, og luk godt efter brug.'],
        ['Hvad er CBD?', 'CBD (cannabidiol) er en cannabinoid, der udvindes fra hampeplantens blade. Den er rig på antioxidanter og fedtsyrer, og du kan læse mere om baggrunden på vores side om CBD.'],
      ],
    };
    const seoFaq = {
      area_ansigt: [
        { q: 'I hvilken rækkefølge bruger jeg produkterne?', a: 'Rens først, derefter serum, og til sidst dagcreme om morgenen eller natcreme om aftenen. Hudplejeolien kan bruges som sidste trin eller blandes i din creme.' },
        { q: 'Kan jeg bruge både dagcreme og natcreme?', a: 'Ja. Dagcremen er lettere og beregnet til dagtimerne, mens natcremen er rigere og understøtter huden om natten, hvor den regenererer.' },
        { q: 'Passer produkterne til sensitiv hud?', a: 'Serien er uden syntetisk parfume og udviklet til alle hudtyper – også sart og sensitiv hud. Har du meget reaktiv hud, så start med ét produkt ad gangen.' },
        { q: 'Hvor længe holder en 50 ml creme?', a: 'Ved daglig brug morgen og aften holder 50 ml typisk halvanden til to måneder.' },
      ],
      area_haender: [
        { q: 'Fedter håndcremen?', a: 'Nej. Den trækker hurtigt ind, så du kan bruge den flere gange om dagen – også lige før du skal gribe om noget.' },
        { q: 'Hvor ofte skal jeg bruge den?', a: 'Efter hver håndvask, hvis dine hænder er meget tørre. Ellers morgen og aften samt efter behov.' },
        { q: 'Kan jeg bruge den på neglebånd?', a: 'Ja. Massér lidt ekstra ind omkring neglebånd og knoer, hvor huden ofte er tørrest.' },
      ],
      area_krop: [
        { q: 'Lotion eller olie – hvad skal jeg vælge?', a: 'Bodylotion er let og til daglig brug. Body Oil er rigere og god ved meget tør hud eller som lag oven på lotion.' },
        { q: 'Hvornår påfører jeg bedst?', a: 'På let fugtig hud lige efter bad – så binder produktet fugten i huden.' },
        { q: 'Kan jeg bruge kropspleje i ansigtet?', a: 'Vi anbefaler ansigtsprodukterne til ansigtet, da de er formuleret til den tyndere hud der.' },
      ],
      area_foedder: [
        { q: 'Hvor hurtigt mærker jeg forskel på hælene?', a: 'Mange oplever blødere fødder inden for et par uger med daglig brug. Resultater varierer fra person til person.' },
        { q: 'Skal jeg bruge fodfil sammen med cremen?', a: 'Ja, gerne. Fjern jævnligt død hud med en fodfil, og smør bagefter – så trænger cremen bedre ind.' },
        { q: 'Hvad gør urea?', a: 'Urea er fugtbindende og blødgør hård hud, og gør derfor cremen effektiv på hæle og trædepuder.' },
      ],
      area_haar: [
        { q: 'Kan hele familien bruge shampooen?', a: 'Ja. Vores milde shampoo er produceret uden unødvendige ingredienser og kan bruges af hele familien – både kvinder, mænd og unge, der ønsker en skånsom hårpleje.' },
        { q: 'Er den egnet til sart hovedbund?', a: 'Formuleringen er mild og velegnet til daglig brug, også på sart hovedbund.' },
      ],
      need_toer: [
        { q: 'Hvorfor føles min hud stram efter rens?', a: 'Det sker typisk, hvis rensen er for kraftig. Brug en mild rensegel og påfør fugt på let fugtig hud umiddelbart efter.' },
        { q: 'Hvilke produkter anbefaler I til tør hud?', a: 'Rensegel, en fugtgivende creme og hudplejeolien som sidste trin. Til kroppen: bodylotion, eventuelt med Body Oil ovenpå.' },
        { q: 'Kan jeg bruge flere produkter oven på hinanden?', a: 'Ja. Læg det letteste først og det rigeste sidst – serum, creme, olie.' },
      ],
      need_fugt: [
        { q: 'Hvad gør hyaluronsyre?', a: 'Hyaluronsyre er fugtbindende og hjælper huden med at holde fast på fugt, så den fremstår mere glat og udhvilet.' },
        { q: 'Serum før eller efter creme?', a: 'Serum først, creme ovenpå. Cremen låser fugten fra serummet inde.' },
      ],
      need_moden: [
        { q: 'Er serien udviklet til moden hud?', a: 'Ja. Vores primære kunder er kvinder 45+, og produkterne er formuleret med fokus på næring, fugt og mildhed.' },
        { q: 'Hvad kan jeg forvente?', a: 'Produkterne bidrager til en glattere og mere smidig hud og understøtter elasticiteten. De er kosmetiske og har ingen medicinsk effekt.' },
        { q: 'Reducerer produkterne pigmentpletter?', a: 'De reducerer synligheden af pigmentpletter og understøtter en ensartet hudfarve. De behandler ikke pigmentpletter.' },
      ],
      need_sensitiv: [
        { q: 'Indeholder produkterne parfume?', a: 'Ingen syntetisk parfume. Duften kommer alene fra de naturlige ingredienser.' },
        { q: 'Hvordan starter jeg forsigtigt?', a: 'Begynd med ét produkt, og giv din hud en uge, før du tilføjer det næste.' },
      ],
      need_uren: [
        { q: 'Kan CBD bruges på fedtet hud?', a: 'Ja. CBD har talgregulerende (anti-sebum) egenskaber, der bidrager til at balancere huden og give et mere mat udtryk.' },
        { q: 'Skal jeg undlade fugtcreme, hvis min hud er fedtet?', a: 'Nej. Fedtet hud har også brug for fugt – vælg en let creme frem for at springe trinnet over.' },
      ],
      need_genopbygning: [
        { q: 'Hvornår virker produkterne bedst?', a: 'Om aftenen, hvor huden regenererer. Brug en nærende natcreme eller olie som sidste trin.' },
        { q: 'Hvor lang tid skal jeg give det?', a: 'Giv rutinen nogle uger. Resultater varierer fra person til person – vi lover ikke mirakler.' },
      ],
      men: [
        { q: 'Hvad er forskellen på DAY, NIGHT og GLOW?', a: 'DAY er en let dagcreme, NIGHT en rigere natcreme, og GLOW en hudolie, du kan bruge som boost eller blande i din creme.' },
        { q: 'Er ALFALAB det samme som NatureCell?', a: 'ALFALAB er vores serie målrettet mænd. Den bygger på samme plantebaserede tilgang og produceres i Danmark.' },
        { q: 'Kan jeg bruge produkterne efter barbering?', a: 'Ja. Produkterne er uden syntetisk parfume og milde nok til at bruge på nybarberet hud.' },
      ],
      bundle: [
        { q: 'Hvor meget sparer jeg på en sampakke?', a: 'Besparelsen står på hver pakke. Du får altid en lavere samlet pris end ved at købe produkterne enkeltvis.' },
        { q: 'Hvilken pakke skal jeg vælge?', a: 'Komplet Pakken dækker en hel ansigtsrutine. All Day Facial er til dag- og aftenpleje, mens Hånd- og Fod Sampakken er til specifikke områder.' },
        { q: 'Kan en pakke gives som gave?', a: 'Ja. Sampakkerne er vores mest købte gaver, netop fordi de rummer en hel rutine.' },
      ],
      kraft: [
        { q: 'Hvilken styrke skal jeg vælge?', a: 'Styrkerne 5%, 10%, 15% og 20% angiver CBD-indholdet. Har du ikke prøvet CBD før, er en lavere styrke et naturligt sted at starte.' },
        { q: 'Hvordan opbevarer jeg dem?', a: 'Køligt og mørkt, og luk godt efter brug.' },
        { q: 'Hvor produceres de?', a: 'På GMP- og ISO-certificerede faciliteter.' },
      ],
      all: [
        { q: 'Hvad er CBD-hudpleje?', a: 'Hudpleje, hvor CBD (cannabidiol) indgår som aktiv ingrediens sammen med planteolier, antioxidanter og fugtgivende ingredienser. Produkterne er kosmetiske.' },
        { q: 'Er NatureCell godkendt i Danmark?', a: 'Ja. NatureCell blev i 2019 den første CBD-hudplejeserie godkendt til salg i Danmark.' },
        { q: 'Passer produkterne til alle hudtyper?', a: 'Serien er tænkt som en one-size-fits-all løsning til tør, fedtet, kombineret, moden, sensitiv og uren hud.' },
        { q: 'Er produkterne veganske?', a: 'Ja – veganske, uden syntetisk parfume og udviklet i Danmark.' },
        { q: 'Hvad koster fragt?', a: 'Fri fragt ved køb over 399 kr.' },
        { q: 'Hvordan finder jeg det rigtige produkt?', a: 'Filtrér efter område (ansigt, hænder, krop, fødder, hår) og efter behov (tør hud, fugt, moden hud, sensitiv, uren) – du kan kombinere begge.' },
      ],
    };
    let collSeo;
    if (f.men) collSeo = { h: 'Herre hudpleje – enkel, effektiv CBD-pleje til mænd', paras: ['ALFALAB er NatureCells hudplejeserie udviklet til mænd, der vil have en enkel og effektiv rutine uden unødvendige trin. Dagcreme, natcreme og GLOW hudolie plejer huden med CBD, hyaluronsyre og antioxidanter og giver en sundere, mere ensartet hud.', 'Mænds hud er ofte tykkere og producerer mere talg, og derfor er en fugtgivende, balancerende pleje et godt udgangspunkt. Alle ALFALAB-produkter er veganske, uden syntetisk parfume og udviklet i Danmark.'] };
    else if (f.area && areaSeo[f.area]) collSeo = { h: areaSeo[f.area][0], paras: areaSeo[f.area][1] };
    else if (f.need && needSeo[f.need]) collSeo = { h: needSeo[f.need][0], paras: needSeo[f.need][1] };
    else if (f.bundle) collSeo = { h: 'Sampakker – spar på hele rutinen', paras: ['NatureCells sampakker samler de produkter, der passer bedst sammen, i én pakke – så du får en komplet rutine og sparer i forhold til at købe produkterne enkeltvis. Uanset om du er ny til CBD-hudpleje eller vil have hele serien, er en sampakke et nemt sted at starte.'] };
    else if (f.kraft) collSeo = { h: 'CBD Drops – fuldspektret CBD-olie', paras: ['Vores CBD Drops fås i flere styrker og er fremstillet på GMP- og ISO-certificerede faciliteter. Produkterne er fuldspektrede med naturlige terpener og cannabinoider fra hampeplanten.'] };
    else if (f.sale) collSeo = { h: 'Tilbud på CBD-hudpleje', paras: ['Her finder du aktuelle tilbud og nedsatte produkter fra NatureCell. Sammensæt din rutine af plantebaseret CBD-hudpleje til en god pris – samme kvalitet, dansk produktion og ærlighed som altid.'] };
    else collSeo = { h: 'NatureCell – dansk CBD-hudpleje til hele familien', paras: ['NatureCell blev i 2019 den første CBD-hudplejeserie godkendt til salg i Danmark. Hele sortimentet er bygget på CBD (cannabidiol) i samspil med naturlige planteolier, antioxidanter og fugtgivende ingredienser – veganske, uden syntetisk parfume og udviklet i Danmark.', 'Serien er tænkt som en one-size-fits-all løsning, der passer til alle hudtyper: tør, fedtet, kombineret, moden, sensitiv og uren hud. Vi lover ikke mirakler – vi lader vores kunder fortælle om deres egne oplevelser, og du kan læse deres historier under kundecases.'] };
    const seoKey = f.men ? 'men' : (f.area ? 'area_' + f.area : (f.need ? 'need_' + f.need : (f.bundle ? 'bundle' : (f.kraft ? 'kraft' : 'all'))));
    if (seoExtra[seoKey]) collSeo = { h: collSeo.h, paras: collSeo.paras.concat([seoExtra[seoKey]]) };
    const collSeoBlocks = (seoBlocks[seoKey] || seoBlocks.all).map(function (p) { return { title: p[0], text: p[1] }; });
    const seoLinkDefs = [
      ['CBD creme', { area: 'ansigt' }], ['Dagcreme', { area: 'ansigt' }], ['Natcreme', { need: 'genopbygning' }],
      ['Håndcreme til tørre hænder', { area: 'haender' }], ['Fodcreme til hælrevner', { area: 'foedder' }],
      ['Bodylotion til tør hud', { area: 'krop' }], ['Serum med hyaluronsyre', { need: 'fugt' }],
      ['Hudpleje til tør hud', { need: 'toer' }], ['Hudpleje til moden hud', { need: 'moden' }],
      ['Hudpleje til uren hud', { need: 'uren' }], ['Mild hudpleje til sensitiv hud', { need: 'sensitiv' }],
      ['Hudpleje til mænd', { men: true }], ['Sampakker', { bundle: true }], ['Hele sortimentet', null],
    ];
    const collSeoLinks = seoLinkDefs.map(function (d) { return { label: d[0], go: () => this.go('collection', { filter: d[1] }) }; }.bind(this));
    const collFaqSrc = seoFaq[seoKey] || seoFaq.all;
    const collFaq = collFaqSrc.map((qa, i) => ({ q: qa.q, a: qa.a, isOpen: S.openCollFaq === i, rot: S.openCollFaq === i ? 'rotate(180deg)' : 'none', toggle: () => this.setState(s => ({ openCollFaq: s.openCollFaq === i ? -1 : i })) }));
    const menBanner = { img: 'https://naturecell.dk/cdn/shop/files/DAY-NIGHT-GLOW-skin-care-ALFALAB-rocks.webp?v=1779961975' };
    const allChip = Object.assign({ label: 'Hele sortimentet', go: () => this.go('collection', { filter: null }) }, chipStyle(!f.area && !f.need && !f.men && !f.bundle && !f.kraft && !f.sale && !f.ing));
    const needChips = D.needs.map(n => {
      const on = f.need === n.key;
      return Object.assign({ label: n.label, go: () => setF({ need: (f.need === n.key) ? null : n.key, men: null }) }, chipStyle(on)); });
    const ingChips = ['cbd','hyaluron','urea','shea','niacinamide','squalane','hampolie','aloe','mango','tocopherol'].filter(k => D.products.some(p => !isMen(p) && pIng(p).includes(k))).map(k => {
      const on = f.ing === k;
      return Object.assign({ label: INGL[k], go: () => setF({ ing: (f.ing === k) ? null : k, men: null }) }, chipStyle(on)); });

    // ---- product detail + upsell ----
    const prod = r.name === 'product' ? D.byId[r.id] : null;
    let pdpTiers = [], pdpAddLabel = '', related = [];
    if (prod) {
      pdpTiers = [1, 2, 3].map(q => {
        const tr = this.tier(q); const unit = prod.price * (1 - tr); const total = unit * q;
        const on = S.pdpQty === q;
        return { qty: q, label: q === 1 ? '1 stk.' : q + ' stk.', sub: q === 1 ? 'Standardpris' : 'Spar ' + Math.round(tr * 100) + '%',
          unitLabel: this.fmtKr(unit) + ' / stk.', totalLabel: this.fmtKr(total), popular: q === 2, hasDisc: tr > 0,
          active: on, bd: on ? 'var(--sage-500)' : 'var(--border-default)', bg: on ? 'var(--sage-50)' : 'var(--cloud)',
          go: () => this.setState({ pdpQty: q }) };
      });
      pdpAddLabel = 'Tilføj til kurv · ' + this.fmtKr(prod.price * (1 - this.tier(S.pdpQty)) * S.pdpQty);
      const curMen = isMen(prod);
      related = D.products.filter(p => p.id !== prod.id && !p.bundle && isMen(p) === curMen && (p.areas || []).some(a => (prod.areas || []).includes(a))).slice(0, 10);
      if (related.length < 5) related = D.products.filter(p => p.id !== prod.id && !p.bundle && isMen(p) === curMen).slice(0, 10);
    }
    let pdpStory = [], pdpReviews = [], pdpFaq = [], pdpVids = [], pdpFounderSlot = '', pdpUsps = [], pdpAcc = [], pdpFounderVideo = null;
    if (prod) {
      const areaLab = prod.areas && prod.areas[0] ? D.areaLabels[prod.areas[0]].toLowerCase() : 'din hud';
      const gimgs = (prod.images && prod.images.length) ? prod.images : [prod.img];
      const storyImgA = gimgs.length > 1 ? gimgs[1] : gimgs[0];
      const storyImgB = gimgs[0];
      const usageById = {
        'skin-oil': 'Dryp et par dråber i håndfladen og massér blidt ind i ren hud morgen og/eller aften — alene eller under din creme. Kan også blandes i din lotion eller creme.',
        'day-cream': 'Massér ind i ren hud hver morgen som sidste plejetrin, inden evt. solcreme og makeup.',
        'night-cream': 'Massér ind i ren hud hver aften som det sidste trin i din rutine, så huden genopbygges mens du sover.',
        'cleansing-gel': 'Massér en lille mængde ind i fugtig hud morgen og aften, og skyl grundigt med lunkent vand.',
        'serum': 'Påfør et par dråber på ren hud før din dag- eller natcreme, morgen og aften.',
        'handcreme': 'Massér ind i hænderne efter håndvask og inden sengetid — så ofte du har brug for det.',
        'body-lotion': 'Massér ind i huden efter bad, mens huden stadig er let fugtig, for bedst optag.',
        'body-oil': 'Massér ind i ren, let fugtig hud efter bad — alene eller oven på din bodylotion.',
        'fodcreme': 'Massér ind i rene, tørre fødder om aftenen — gerne med en bomuldsstrømpe over natten ved meget tør hud.',
        'eye-gel': 'Dup blidt en lille mængde omkring øjenpartiet morgen og aften med ringfingeren.',
        'lip-balm': 'Påfør på læberne efter behov gennem dagen — særligt i kulde og blæst.',
        're-new-balm': 'Påfør et tyndt lag på tørre eller udsatte områder efter behov, ansigt såvel som krop.',
        'deodorant': 'Påfør på ren, tør hud efter behov.',
        'shampoo': 'Massér ind i vådt hår og hovedbund, og skyl grundigt. Følg op med balsam.',
        'conditioner': 'Fordel i vasket hår, lad virke et par minutter, og skyl grundigt.',
        'love': 'Påfør efter behov. Vandbaseret og kondomvenlig.',
        'complete': 'Følg rutinen morgen og aften: rens, olie, dagcreme om dagen og natcreme om aftenen.',
        'all-day-facial': 'Byg din rutine op med rens, serum, olie og creme — morgen og aften.',
      };
      const kraftUsage = 'Fuldspektret CBD-olie til udvortes kosmetisk brug. Følg anvisningen på pakken. Opbevares køligt og mørkt.';
      const kostUsage = 'Bland én dosis i vand, kaffe, smoothie eller yoghurt. Nem at indtage dagligt som en del af din rutine.';
      const alfaUsage = 'Enkel herrerutine: massér ind i ren hud morgen og aften. Ingen unødvendige trin.';
      let useBody;
      if (usageById[prod.id]) useBody = usageById[prod.id];
      else if (prod.kost) useBody = kostUsage;
      else if (prod.kraft) useBody = kraftUsage;
      else if ((prod.id || '').indexOf('alfalab') === 0) useBody = alfaUsage;
      else useBody = 'Påfør på ren hud morgen og/eller aften. ' + (prod.bullets || []).slice(0, 1).join('') + '. Til udvortes brug — opbevares køligt og mørkt.';
      const PSTORY = {
        'skin-oil': { t1: 'Vores mest elskede — Vidunder Olien', t2: 'Et par dråber er alt der skal til' },
        'day-cream': { t1: 'Let fugt til dagen', t2: 'Morgenrutinen på ét minut' },
        'night-cream': { t1: 'Nærende ro mens du sover', t2: 'Dit lille aftenritual' },
        'cleansing-gel': { t1: 'En mild start på din rutine', t2: 'Rens uden at stramme' },
        'serum': { t1: 'Fugtboost med hyaluronsyre', t2: 'Laget under din creme' },
        'handcreme': { t1: 'Til hænder der tager skæld ud', t2: 'Pleje der følger dig gennem dagen' },
        'body-lotion': { t1: 'Blød hud fra top til tå', t2: 'Bedst på let fugtig hud' },
        'body-oil': { t1: 'Silkeblød glød til kroppen', t2: 'Forkæl huden efter bad' },
        'fodcreme': { t1: 'Bløde fødder igen', t2: 'Aftenritual for trætte fødder' },
        'eye-gel': { t1: 'Vågn op til et friskere blik', t2: 'Blid pleje omkring øjnene' },
        'lip-balm': { t1: 'Læber der aldrig strammer', t2: 'Din faste følgesvend i lommen' },
        'complete': { t1: 'Hele rutinen i én pakke', t2: 'Pleje morgen og aften' },
        'all-day-facial': { t1: 'Den komplette ansigtsrutine', t2: 'Trin for trin til en hud i balance' },
      };
      const ps = PSTORY[prod.id] || {};
      pdpStory = [
        { eyebrow: 'Derfor elsker vores kunder den', title: ps.t1 || ('Skabt til ' + areaLab), body: prod.desc, img: storyImgA, imgOrder: 1 },
        { eyebrow: 'Sådan bruger du den', title: ps.t2 || 'En enkel del af din daglige rutine', body: useBody, img: storyImgB, imgOrder: 3 },
      ];
      pdpFounderVideo = { title: 'Hør Lizbeth fortælle om ' + prod.name };
      pdpVids = [
        { name: 'Mette', href: 'https://www.youtube.com/watch?v=VRJSZeNlCoQ', img: 'https://img.youtube.com/vi/VRJSZeNlCoQ/hqdefault.jpg' },
        { name: 'Christian', href: 'https://www.youtube.com/watch?v=RHGezLkTcO8', img: 'https://img.youtube.com/vi/RHGezLkTcO8/hqdefault.jpg' },
        { name: 'Astrid', href: 'https://www.youtube.com/watch?v=7_Bpx7LJIGc', img: 'https://img.youtube.com/vi/7_Bpx7LJIGc/hqdefault.jpg' },
        { name: 'Vivi', href: 'https://www.youtube.com/watch?v=HwVoEwGZmyc', img: 'https://img.youtube.com/vi/HwVoEwGZmyc/hqdefault.jpg' },
      ];
      pdpFounderSlot = 'assets/founders.jpg';
      pdpReviews = [
        { name: 'Mette K.', meta: 'Verificeret køb', text: 'Jeg er så glad for ' + prod.name + '. Den er blevet helt fast i min rutine.' },
        { name: 'Anders L.', meta: 'Verificeret køb', text: 'Mærkbar forskel efter et par uger. Ingen parfume, bare god pleje.' },
        { name: 'Sofie R.', meta: 'Verificeret køb', text: 'Dejlig konsistens og trækker hurtigt ind. Præcis hvad jeg søgte.' },
        { name: 'Camilla B.', meta: 'Verificeret køb', text: 'God kvalitet, tryg dansk handel og hurtig levering. Køber igen.' },
        { name: 'Henrik J.', meta: 'Verificeret køb', text: 'Min hud føles mere rolig og velplejet. Helt klart pengene værd.' },
        { name: 'Pia M.', meta: 'Verificeret køb', text: 'Bruger den hver dag nu. En fast del af min morgenrutine.' },
        { name: 'Lars P.', meta: 'Verificeret køb', text: 'Skøn dansk kvalitet. Man kan mærke, der er tænkt over ingredienserne.' },
        { name: 'Rikke S.', meta: 'Verificeret køb', text: 'Lige det min hud manglede. Føles nærende uden at være fedtet.' },
        { name: 'Bente A.', meta: 'Verificeret køb', text: 'Efter et par uger ser huden mere ensartet ud. Meget tilfreds.' },
        { name: 'Thomas E.', meta: 'Verificeret køb', text: 'Tryg handel, hurtig levering og et produkt der holder, hvad det lover.' },
        { name: 'Julie N.', meta: 'Verificeret køb', text: 'Min nye favorit. Mild og behagelig på huden hver dag.' },
        { name: 'Karin B.', meta: 'Verificeret køb', text: 'Jeg har kun godt at sige. Huden føles blød og velplejet.' },
        { name: 'Emma D.', meta: 'Verificeret køb', text: 'Let konsistens der trækker hurtigt ind. Ingen klistret følelse.' },
        { name: 'Jan F.', meta: 'Verificeret køb', text: 'Har gjort en forskel for min hud. Rigtig god kvalitet.' },
      ];
      const pid = prod.id || '';
      const pn = prod.name;
      const useFaq = {
        'skin-oil': [{ q: 'Hvordan bruger jeg hudplejeolien?', a: 'Et par dråber i håndfladen, varm den mellem hænderne og tryk den ind i huden som sidste trin – morgen, aften eller kun om aftenen. Du kan også blande en dråbe i din creme.' }, { q: 'Bliver huden fedtet af olien?', a: 'Nej. Olien er let og trækker relativt hurtigt ind. Start med få dråber og justér efter, hvad din hud kan optage.' }, { q: 'Hvad betyder 1000 mg?', a: 'Det angiver mængden af CBD i flasken. Alle partier testes, og analysecertifikat findes pr. parti.' }],
        'day-cream': [{ q: 'Hvornår bruger jeg dagcremen?', a: 'Om morgenen på ren hud – eventuelt oven på et serum. Den er let og trækker hurtigt ind, så den kan bruges under makeup.' }, { q: 'Er den fugtgivende nok til tør hud?', a: 'Ja, den giver intensiv fugt og beskytter mod udtørring. Er din hud meget tør, kan du lægge en dråbe hudplejeolie oven på.' }],
        'night-cream': [{ q: 'Hvorfor en særlig natcreme?', a: 'Om natten regenererer huden. Natcremen er rigere end dagcremen og understøtter huden i de timer, hvor den arbejder mest.' }, { q: 'Kan jeg bruge den om dagen?', a: 'Du kan godt, men konsistensen er rigere. Til dagtimerne anbefaler vi dagcremen.' }],
        'cleansing-gel': [{ q: 'Hvor ofte skal jeg rense?', a: 'Morgen og aften. Overrens ikke – en mild rens to gange dagligt er nok, også ved uren hud.' }, { q: 'Strammer huden efter rens?', a: 'Rensegelen er formuleret mild, så huden ikke skal føles stram. Påfør fugt på let fugtig hud umiddelbart efter.' }],
        'serum': [{ q: 'Serum før eller efter creme?', a: 'Serum først på ren hud, creme ovenpå. Cremen låser fugten fra serummet inde.' }, { q: 'Hvad gør hyaluronsyre?', a: 'Hyaluronsyre er fugtbindende og hjælper huden med at holde fast på fugt, så den fremstår mere glat og udhvilet.' }],
        'handcreme': [{ q: 'Fedter håndcremen?', a: 'Nej. Den trækker hurtigt ind, så du kan bruge den flere gange om dagen – også på arbejdet.' }, { q: 'Hvor ofte kan jeg bruge den?', a: 'Så ofte du har brug for det – gerne efter hver håndvask, hvis dine hænder er meget tørre.' }],
        'fodcreme': [{ q: 'Hvordan får jeg det bedste resultat på hælene?', a: 'Smør fødderne hver aften – gerne med en bomuldsstrømpe over natten ved meget tør hud – og fjern jævnligt død hud med en fodfil.' }, { q: 'Hvad gør urea i cremen?', a: 'Urea er fugtbindende og blødgør hård hud, hvilket gør cremen effektiv på hæle og trædepuder.' }],
        'body-lotion': [{ q: 'Hvornår påfører jeg bedst?', a: 'På let fugtig hud lige efter bad, så fugten bindes i huden.' }, { q: 'Kan jeg bruge den i ansigtet?', a: 'Vi anbefaler ansigtsprodukterne til ansigtet, da de er formuleret til den tyndere hud der.' }],
        'body-oil': [{ q: 'Olie eller lotion?', a: 'Olien er rigere og god ved meget tør hud – alene eller som lag oven på bodylotion.' }, { q: 'Efterlader den pletter på tøjet?', a: 'Lad olien trække ind et par minutter, før du tager tøj på.' }],
        'lip-balm': [{ q: 'Hvor ofte kan jeg bruge den?', a: 'Så ofte du har lyst – gerne flere gange dagligt og altid før du går ud i kold eller blæsende vejr.' }],
        'eye-gel': [{ q: 'Hvordan påfører jeg omkring øjnene?', a: 'En lille mængde duppes forsigtigt ind med ringfingeren på orbitalbenet – ikke helt inde ved øjenkanten.' }],
        'deodorant': [{ q: 'Indeholder den aluminium?', a: 'Nej. Deodoranten er formuleret uden aluminiumssalte og uden syntetisk parfume.' }],
        'shampoo': [{ q: 'Kan hele familien bruge den?', a: 'Ja. Vores milde shampoo er produceret uden unødvendige ingredienser og kan bruges af hele familien – både kvinder, mænd og unge, der ønsker en skånsom hårpleje.' }],
        'conditioner': [{ q: 'Hvor meget skal jeg bruge?', a: 'En lille mængde fordeles i håret fra midten og ud – undgå hovedbunden, hvis dit hår hurtigt bliver fedtet.' }],
      };
      const bundleFaq = [{ q: 'Hvad sparer jeg ved at købe pakken?', a: 'Pakken koster mindre end de enkelte produkter tilsammen – besparelsen står på produktsiden.' }, { q: 'Hvilken rækkefølge bruger jeg produkterne i?', a: 'Rens først, derefter serum, så creme – og eventuelt hudplejeolien som sidste trin.' }, { q: 'Kan pakken gives som gave?', a: 'Ja. Sampakkerne er blandt vores mest købte gaver, fordi de rummer en hel rutine.' }];
      const kraftFaq = [{ q: 'Hvilken styrke skal jeg vælge?', a: 'Styrken angiver CBD-indholdet. Har du ikke prøvet CBD før, er en lavere styrke et naturligt sted at starte.' }, { q: 'Hvordan opbevarer jeg produktet?', a: 'Køligt og mørkt, og luk godt efter brug.' }];
      const specific = useFaq[pid] || (prod.bundle ? bundleFaq : (prod.kraft ? kraftFaq : [{ q: 'Hvordan bruger jeg ' + pn + '?', a: 'Påfør på ren, tør hud og massér blidt ind. Til daglig brug morgen og/eller aften.' }]));
      const faqRaw = specific.concat([
        { q: 'Passer ' + pn + ' til min hudtype?', a: 'Serien er tænkt som en one-size-fits-all løsning og passer til tør, fedtet, kombineret, moden, sensitiv og uren hud. Er din hud meget reaktiv, så start med ét produkt ad gangen.' },
        { q: 'Er produktet vegansk og uden parfume?', a: 'Ja. Vores produkter er veganske og uden tilsatte syntetiske duftstoffer – duften kommer alene fra de naturlige ingredienser.' },
        { q: 'Hvor produceres det?', a: 'Det udvikles og produceres på GMP- og ISO-certificerede faciliteter i Danmark.' },
        { q: 'Hvor hurtigt ser jeg resultater?', a: 'Det varierer fra person til person. Mange oplever en mere velplejet hud efter nogle ugers fast rutine. Vi lover ikke mirakler – du kan læse rigtige kunders egne oplevelser under kundecases.' },
        { q: 'Hvordan opbevarer jeg det?', a: 'Køligt og mørkt, og luk godt efter brug. Produktet er til udvortes brug.' },
        { q: 'Hvad koster fragt, og kan jeg returnere?', a: 'Fri fragt ved køb over 399 kr. Du har 30 dages returret på uåbnede varer.' },
      ]);
      pdpFaq = faqRaw.map((f, i) => ({ q: f.q, a: f.a, isOpen: S.openFaq === i, rot: S.openFaq === i ? 'rotate(180deg)' : 'none', toggle: () => this.setState(s => ({ openFaq: s.openFaq === i ? -1 : i })) }));
      const shortUsp = (s) => { const t = s.split('—')[0].split(' · ')[0].trim(); return t.length > 26 ? s.trim() : t; };
      // Official brand "Claim badges" (SVG artwork in assets/badges/).
      const matchClaim = (s) => { const t = s.toLowerCase();
        if (/vegansk/.test(t)) return 'vegan';
        if (/(lab|test|gmp|iso|certificer|analysecert|thc|sporbar)/.test(t)) return 'lab';
        if (/(barriere|beskytt|styrk|elasticitet)/.test(t)) return 'barrier';
        if (/(sol|pigment|moden|efter sol|udsat for sol)/.test(t)) return 'aftersun';
        if (/(mild|beroliger|berolig|sart|følsom|rødme|nænsom|skånsom|calm|læb)/.test(t)) return 'mild';
        if (/(absorber|hurtig|fedter|trænger|indtræng|let,|let konsist|nem)/.test(t)) return 'easy';
        if (/(fugt|hydrer|blødg|mct|hyaluron|squalane|nærende|fugtg|olie)/.test(t)) return 'moisture';
        if (/(balance|balancer|mat|sebum|uren|ensartet)/.test(t)) return 'balancing';
        if (/(alle hudtyper|til alle)/.test(t)) return 'alle';
        if (/(plante|naturlig|botanisk|organisk|hampfr|hampolie)/.test(t)) return 'vegan';
        if (/(cbd|cbg|hamp|cannabid|mg )/.test(t)) return 'cbd';
        return 'alle'; };
      const usedClaim = {}; const allClaims = ['cbd', 'moisture', 'easy', 'mild', 'barrier', 'vegan', 'balancing', 'aftersun', 'alle', 'lab'];
      const productClaims = {
        'skin-oil': ['cbd', 'moisture', 'easy'], 'day-cream': ['cbd', 'lab', 'alle'], 'night-cream': ['moisture', 'cbd', 'lab'],
        'cleansing-gel': ['mild', 'balancing', 'vegan'], 'handcreme': ['barrier', 'easy', 'cbd'], 'serum': ['moisture', 'cbd', 'balancing'],
        'lip-balm': ['moisture', 'mild', 'vegan'], 'eye-gel': ['cbd', 'barrier', 'moisture'], 're-new-balm': ['cbd', 'barrier', 'mild'],
        'body-lotion': ['moisture', 'barrier', 'alle'], 'body-oil': ['moisture', 'vegan', 'mild'], 'deodorant': ['cbd', 'vegan', 'mild'],
        'fodcreme': ['cbd', 'moisture', 'mild'], 'shampoo': ['cbd', 'vegan', 'alle'], 'conditioner': ['moisture', 'vegan', 'alle'],
        'love': ['mild', 'moisture', 'vegan'], 'drops-500': ['cbd', 'vegan', 'lab'], 'drops-1000': ['cbd', 'lab', 'vegan'],
        'drops-1500': ['cbd', 'lab', 'balancing'], 'drops-2000': ['cbd', 'lab', 'barrier'], 'complete': ['cbd', 'moisture', 'lab'],
        'all-day-facial': ['cbd', 'moisture', 'alle'], 'alfalab-day': ['easy', 'moisture', 'alle'], 'alfalab-night': ['moisture', 'easy', 'balancing'],
        'alfalab-glow': ['aftersun', 'easy', 'balancing'], 'alfalab-pakke': ['balancing', 'easy', 'alle'],
      };
      if (productClaims[prod.id]) {
        pdpUsps = productClaims[prod.id].map((n, i) => ({ label: shortUsp((prod.bullets || [])[i] || ''), badge: 'assets/badges/' + n + '.svg' }));
      } else {
        pdpUsps = (prod.bullets || []).slice(0, 3).map((b) => {
          let n = matchClaim(b);
          if (usedClaim[n]) { n = allClaims.find(x => !usedClaim[x]) || n; }
          usedClaim[n] = true;
          return { label: shortUsp(b), badge: 'assets/badges/' + n + '.svg' };
        });
      }
      const accSrc = [{ id: 'beskrivelse', h: 'Beskrivelse', body: prod.desc }, { id: 'brug', h: 'Sådan bruger du den', body: 'Påfør på ren, tør hud morgen og/eller aften. Til udvortes brug. Undgå direkte kontakt med øjnene. Opbevares køligt og mørkt.' }, { id: 'ingred', h: 'Ingredienser', body: 'CBD (Cannabidiol), naturlige planteolier og botaniske ekstrakter. Vegansk. Uden tilsatte syntetiske duftstoffer.' }];
      pdpAcc = accSrc.map(a => ({ h: a.h, body: a.body, isOpen: S.openPdpAcc === a.id, rot: S.openPdpAcc === a.id ? 'rotate(180deg)' : 'none', toggle: () => this.setState(s => ({ openPdpAcc: s.openPdpAcc === a.id ? '' : a.id })) }));
    }

    // ---- cases ----
    const caseChips = [{ key: 'all', label: 'Alle cases' }].concat(['ansigt', 'haender', 'foedder'].map(k => ({ key: k, label: D.areaLabels[k] }))).map(c =>
      Object.assign({ label: c.label, go: () => this.setState({ caseArea: c.key }) }, chipStyle(S.caseArea === c.key)));
    const cq = (S.caseQuery || '').trim().toLowerCase();
    let filteredCases = D.cases.filter(c => S.caseArea === 'all' || c.area === S.caseArea);
    if (cq) filteredCases = filteredCases.filter(c => (c.name + ' ' + c.title + ' ' + D.areaLabels[c.area]).toLowerCase().includes(cq));
    filteredCases = filteredCases.map(c => Object.assign({}, c, { areaLabel: D.areaLabels[c.area], who: c.age ? (c.name + ', ' + c.age + ' år') : c.name, go: () => this.openCase(c.id) }));

    // ---- single case ----
    const curCase = r.name === 'case' ? D.cases.find(c => c.id === r.id) : null;
    let caseProducts = [], caseAreaLabel = '', caseWho = '', curCaseBody = [], caseFills = [];
    if (curCase) {
      caseAreaLabel = D.areaLabels[curCase.area];
      caseWho = curCase.age ? (curCase.name + ', ' + curCase.age + ' år') : curCase.name;
      const fillsArr = [curCase.img, 'assets/founders.jpg','https://naturecell.dk/cdn/shop/articles/DSF6043_9ae35b3a-2321-4a3e-a9b8-c36d2189200d.jpg?v=1774872279','https://naturecell.dk/cdn/shop/articles/DSF6043_9ae35b3a-2321-4a3e-a9b8-c36d2189200d.jpg?v=1774872279','https://naturecell.dk/cdn/shop/articles/kvinde_pigmentpletter_badevaerelse_aa646aae-9aec-4b09-ae91-921566456862.jpg?v=1780837322'].filter(Boolean);
      let src = (curCase.body && curCase.body.length) ? curCase.body.slice() : (curCase.paras || []).map(x => ({ t: 'p', x: x }));
      // Clean single-column editorial blocks: heading · paragraph (first = lead) · pull-quote · video
      const blocks = [];
      let leadUsed = false;
      src.forEach((b) => {
        if (b.t === 'h') blocks.push({ isHeading: true, isPara: false, isQuote: false, isVideo: false, text: b.x || '' });
        else if (b.t === 'q') blocks.push({ isHeading: false, isPara: false, isQuote: true, isVideo: false, text: b.x || '' });
        else if (b.t === 'v') blocks.push({ isHeading: false, isPara: false, isQuote: false, isVideo: true, vsrc: b.id ? ('https://www.youtube.com/embed/' + b.id) : '' });
        else if (b.t === 'p') { blocks.push({ isHeading: false, isPara: true, isQuote: false, isVideo: false, text: b.x || '', isLead: !leadUsed, notLead: leadUsed }); leadUsed = true; }
      });
      if (curCase.yt && !blocks.some(x => x.isVideo)) {
        const at = blocks.findIndex(x => x.isPara);
        blocks.splice(at >= 0 ? at + 1 : 0, 0, { isHeading: false, isPara: false, isQuote: false, isVideo: true, vsrc: 'https://www.youtube.com/embed/' + curCase.yt });
      }
      curCaseBody = blocks;
      caseProducts = (curCase.products || []).map(id => D.byId[id]).filter(Boolean);
      caseFills = ['assets/founders.jpg','https://naturecell.dk/cdn/shop/articles/DSF6043_9ae35b3a-2321-4a3e-a9b8-c36d2189200d.jpg?v=1774872279','https://naturecell.dk/cdn/shop/articles/DSF6043_9ae35b3a-2321-4a3e-a9b8-c36d2189200d.jpg?v=1774872279'];
    }

    const heroDots = [0, 1, 2, 3].map(i => ({ go: () => this.heroSet(i), w: S.heroIndex === i ? '26px' : '8px', bg: S.heroIndex === i ? 'var(--paper)' : 'rgba(246,244,238,0.45)' }));

    // ---- articles ----
    const artTagKeys = ['Alle'].concat(Array.from(new Set(D.articles.map(a => a.tag))));
    const artChips = artTagKeys.map(k => Object.assign({ label: k, go: () => this.setState({ articleTag: k }) }, chipStyle(S.articleTag === k)));
    const aq = (S.articleQuery || '').trim().toLowerCase();
    let filteredArticles = D.articles.filter(a => S.articleTag === 'Alle' || a.tag === S.articleTag);
    if (aq) filteredArticles = filteredArticles.filter(a => (a.title + ' ' + a.tag + ' ' + a.excerpt).toLowerCase().includes(aq));
    const articleFeatured = (!aq && S.articleTag === 'Alle') ? D.articles[0] : null;
    const articleList = (articleFeatured ? filteredArticles.slice(1) : filteredArticles).map(a => Object.assign({}, a, { go: () => this.openArticle(a.slug) }));
    const featuredArticle = articleFeatured ? Object.assign({}, articleFeatured, { go: () => this.openArticle(articleFeatured.slug) }) : null;
    // single article
    const curArticle = r.name === 'article' ? D.articles.find(a => a.slug === r.slug) : null;
    const moreArticles = curArticle ? D.articles.filter(a => a.slug !== curArticle.slug && a.tag === curArticle.tag).slice(0, 3) : [];
    const moreArticlesFinal = (curArticle && moreArticles.length < 3)
      ? moreArticles.concat(D.articles.filter(a => a.slug !== curArticle.slug && moreArticles.indexOf(a) === -1).slice(0, 3 - moreArticles.length))
      : moreArticles;
    const curArticleMore = moreArticlesFinal.map(a => Object.assign({}, a, { go: () => this.openArticle(a.slug) }));
    const curArticleBodyHtml = (curArticle && typeof window !== 'undefined' && window.NC_ARTICLE_BODIES) ? (window.NC_ARTICLE_BODIES[curArticle.slug] || '') : '';
    const IMGB = 'https://cdn.shopify.com/s/files/1/0600/7111/6981/files/NatureCell_Ingrediens_Slider_';
    const NCA = 'https://naturecell.dk/cdn/shop/';
    const cbdSkinData = [
      { title: 'Rødme, tør eller følsom hud', img: NCA + 'articles/kvinde_pigmentpletter_badevaerelse_aa646aae-9aec-4b09-ae91-921566456862.jpg?v=1780837322', text: 'Det rige indhold af CBD kombineret med ingredienser af naturlig oprindelse som glycerin, mandelolie, hampolie og squalane plejer og beroliger tør og sensitiv hud. De fugtgivende ingredienser absorberes hurtigt og bidrager til at genoprette hudens naturlige fugtbalance ved tør og irriteret hud. CBD medvirker til at pleje og styrke hudens barriere.', slug: 'tor-hud-her-er-forklaringen', linkLabel: 'Læs mere om tør hud' },
      { title: 'Fedtet hud', img: NCA + 'files/Naturecell_CBD_skincare_pige_vasker_ansigt_kopier.webp?v=1757146053', text: 'CBD har anti-sebum egenskaber, der bidrager til at balancere huden og reducere synligheden af overskydende olie på hudens overflade. Resultatet er en mere mat, frisk og harmonisk hud med et ensartet udtryk.' },
      { title: 'Bumser og uren hud', img: NCA + 'files/NatureCell_CBD_skincare_billed_pige_ser_paa_produkterne_kopier.webp?v=1757145901', text: 'CBD har anti-sebum egenskaber, der bidrager til at balancere huden og give et mere mat og ensartet udseende. De plejende ingredienser hjælper med at reducere synligheden af urenheder og efterlader huden frisk, klar og velplejet.', slug: 'uren-hud-hos-voksne-derfor-opstar-den-og-sadan-plejer-du-den', linkLabel: 'Læs mere om uren hud' },
      { title: 'Kombineret hud', img: NCA + 'articles/DSF6043_9ae35b3a-2321-4a3e-a9b8-c36d2189200d.jpg?v=1774872279', text: 'CBD bidrager til at bevare og balancere hudens naturlige tilstand, hvilket gør NatureCell CBD hudpleje velegnet til både tørre og fedtede områder. Huden efterlades med et mere harmonisk og ensartet udseende — uanset hudtype.' },
      { title: 'Rødme og irritation', img: NCA + 'articles/kvinde_pigmentpletter_badevaerelse_aa646aae-9aec-4b09-ae91-921566456862.jpg?v=1780837322', text: 'Det rige indhold af CBD kombineret med naturlige ingredienser som glycerin, mandelolie, hampolie og squalane plejer og beroliger huden ved rødme og tørhed. De fugtgivende ingredienser absorberes hurtigt og bidrager til at genoprette hudens fugtbalance. Kan også anvendes til at pleje huden efter f.eks. insektbid — og efterlader huden blød og velplejet.', slug: 'kundecase-hudpleje-ved-rodme-og-sensitiv-hud-en-personlig-oplevelse', linkLabel: 'Læs en kundes oplevelse' },
      { title: 'Rynker og fine linjer', img: NCA + 'files/NatureCell_Sortiment_Hudpleje_0725.webp?v=1752671972', text: 'CBD bidrager til at pleje huden og støtte dens naturlige balance. Det kan medvirke til, at huden fremstår glattere og mere jævn med reduceret synlighed af fine linjer, samtidig med at den nærer tør hud og bidrager til at bevare hudens elasticitet og smidighed.', slug: 'moden-hud-hvilke-ingredienser-giver-fugt-og-smidighed', linkLabel: 'Læs mere om moden hud' },
      { title: 'Følsom og sart hud', img: NCA + 'articles/NatureCell_Lizbeth_Sortiment_1224_LilleNyhavn_fc947dc6-27a1-4a31-921a-a4ebabcb61ca.webp?v=1772980995', text: 'Alle ingredienser i NatureCell CBD hudplejeserien er nøje udvalgt, så de passer til alle hudtyper — herunder også følsom og sart hud.', slug: 'hudpleje-til-sensitiv-hud-min-personlige-oplevelse', linkLabel: 'Læs mere om sensitiv hud' },
      { title: 'Moden hud', img: NCA + 'files/DAY_CREME.webp?v=1702043004', text: 'Det rige indhold af CBD, kendt for sine antioxidative egenskaber, kombineret med plejende ingredienser som ginkgo biloba, gulerodsolie, squalane samt vitaminerne C, E og F, bidrager til at reducere synligheden af fine linjer og give huden et glattere og mere ensartet udtryk. CBD hjælper med at pleje og styrke tør hud og bidrager til at bevare hudens elasticitet og smidighed — særligt velegnet til hud, der har været udsat for sol og tendens til ujævn hudtone eller pigmentpletter.', slug: 'moden-hud-hvilke-ingredienser-giver-fugt-og-smidighed', linkLabel: 'Læs mere om moden hud' },
    ];
    const cbdPropData = [
      { title: '100% plantebaseret CBD', img: IMGB + 'CBD_180x480px.jpg?v=1762184205', text: 'NatureCell anvender 100% plantebaseret CBD, udvundet fra hampeplanter dyrket i EU for at sikre den højeste kvalitet og fuld sporbarhed. CBD’en produceres på GMP- og ISO-certificeret fabrik, hvor der stilles krav til renhed, sikkerhed og dokumenteret kvalitet i alle produktionsled. Den overholder EU’s kosmetiklovgivning og gældende regler for skadelige stoffer.' },
      { title: 'Hampfrøolie', img: IMGB + 'Cannabis_Sativa_Leaf_Extract_180x480px.jpg?v=1762792242', text: 'NatureCell-produkter er formuleret med vores egen koldpressede hampfrøolie — en olie rig på essentielle omega-fedtsyrer og proteiner. Den leverer antioxidanter (vitamin E), caroten (forløber for vitamin A), phytosteroler, phospholipider og en række mineraler som calcium, magnesium, svovl, kalium og fosfor, sammen med beskedne mængder jern og zink.' },
      { title: 'Hydrerende', img: IMGB + 'Hyaluronsyre_180x480px.jpg?v=1762792241', text: 'Fugtgivende naturlige ingredienser som glycerin, mandelolie, hampolie og squalane i kombination med CBD absorberes hurtigt af huden og sikrer hydrering.' },
      { title: 'Full Spectrum industriel hamp', img: IMGB + 'CBG_180x480px.jpg?v=1762792242', text: 'NatureCell-produkter produceres med Full Spectrum industriel hampekstrakt, der indeholder mindre end 0,2% THC. Vores hel-plante-koncept betyder, at produkterne indeholder yderligere cannabinoider og terpener, der findes naturligt i hampeplanten — for maksimal effekt.' },
      { title: 'Genopretter hudens balance', img: IMGB + 'Aloe_Barbadensis_Leaf_180x480px.jpg?v=1762792242', text: 'CBD bidrager til at bevare hudens naturlige balance og understøtter en sund og velplejet hudbarriere. Dens plejende egenskaber hjælper huden med at fremstå mere harmonisk, glat og velfugtet.' },
      { title: 'Unik terpeneprofil', img: IMGB + 'Natural_Myrcene_180x480px.jpg?v=1762792242', text: 'En kombination af terpener og cannabinoider forbedrer de gavnlige egenskaber ved vores produkter.' },
      { title: 'Gør mere med mindre', img: IMGB + 'Tocopherol_180x480px.jpg?v=1762792241', text: 'NatureCell-produkter er formuleret uden fyldstoffer, smagsstoffer eller unødvendige ingredienser. De indeholder kun Full Spectrum industriel hampekstrakt, naturlige terpener og certificerede ingredienser.' },
    ];
    const skinIdx = Math.min(S.cbdSkinIdx || 0, cbdSkinData.length - 1);
    const propIdx = Math.min(S.cbdPropIdx || 0, cbdPropData.length - 1);
    const cbdSkinList = cbdSkinData.map((s, i) => ({ title: s.title, active: i === skinIdx, bg: i === skinIdx ? 'var(--sage-500)' : 'transparent', fg: i === skinIdx ? '#fff' : 'var(--ink-700)', go: () => this.setState({ cbdSkinIdx: i }) }));
    const cbdPropList = cbdPropData.map((p, i) => ({ title: p.title, active: i === propIdx, bg: i === propIdx ? 'rgba(255,255,255,0.16)' : 'transparent', fg: i === propIdx ? '#fff' : 'rgba(246,244,238,0.72)', go: () => this.setState({ cbdPropIdx: i }) }));
    const gq = (S.gsearch || '').trim().toLowerCase();
    const gsProducts = gq ? D.products.filter(p => (p.name + ' ' + (p.eyebrow || '') + ' ' + (p.desc || '') + ' ' + (p.bullets || []).join(' ')).toLowerCase().includes(gq)).slice(0, 8) : [];
    const gsArticles = gq ? D.articles.filter(a => (a.title + ' ' + a.tag + ' ' + a.excerpt).toLowerCase().includes(gq)).map(a => Object.assign({}, a, { go: () => this.openArticle(a.slug) })).slice(0, 6) : [];
    const gsCases = gq ? D.cases.filter(c => (c.name + ' ' + c.title + ' ' + (D.areaLabels[c.area] || '')).toLowerCase().includes(gq)).map(c => Object.assign({}, c, { areaLabel: D.areaLabels[c.area], who: c.age ? (c.name + ', ' + c.age + ' år') : c.name, go: () => this.openCase(c.id) })).slice(0, 6) : [];
    const favProductsList = (function(){ var ids; try { ids = JSON.parse(localStorage.getItem('nc_favs') || '[]'); } catch (e) { ids = []; } return (ids || []).map(function(id){ return D.byId[id]; }).filter(Boolean); })();
    return {
      t,
      heroShift: (-S.heroIndex * 100) + '%',
      heroNext: () => this.heroSet(S.heroIndex + 1),
      heroPrev: () => this.heroSet(S.heroIndex - 1),
      heroDots,
      isMobile: S.isMobile,
      trustLoop: trustItems.concat(trustItems),
      heroAlign: S.isNarrow ? 'flex-end' : 'center',
      heroTextOrder: S.isNarrow ? 2 : 1,
      heroImgOrder: S.isNarrow ? 1 : 2,
      showDesktopNav: !S.isMobile,
      isHome: r.name === 'home',
      // nav handlers
      goHome: () => this.go('home'), goShop: () => this.go('collection', { filter: null }),
      goMen: () => this.go('collection', { filter: { men: true } }),
      goCases: () => this.go('cases'), goAbout: () => this.go('about'), goB2B: () => this.go('b2b'),
      toggleMega: () => this.setState(s => ({ megaOpen: !s.megaOpen, megaTab: 'area' })),
      closeMega: () => this.setState({ megaOpen: false }),
      megaOpen: S.megaOpen,
      setMegaArea: () => this.setState({ megaTab: 'area' }), setMegaNeed: () => this.setState({ megaTab: 'need' }), setMegaBest: () => this.setState({ megaTab: 'best' }),
      megaShowArea: S.megaTab === 'area', megaShowNeed: S.megaTab === 'need', megaShowBest: S.megaTab === 'best',
      tabAreaBg: tabBg('area'), tabAreaFg: tabFg('area'), tabNeedBg: tabBg('need'), tabNeedFg: tabFg('need'), tabBestBg: tabBg('best'), tabBestFg: tabFg('best'),
      toggleMobileNav: () => this.setState(s => ({ mobileNavOpen: !s.mobileNavOpen })), closeMobileNav: () => this.setState({ mobileNavOpen: false }),
      mobileNavOpen: S.mobileNavOpen,
      langs,
      // cart
      openCart: () => this.setState({ cartOpen: true }), closeCart: () => this.setState({ cartOpen: false }),
      goShopFromCart: () => { this.setState({ cartOpen: false }); this.go('collection', { filter: null }); },
      hasCart: cartCount > 0, cartCount,
      cartEmpty: cartCount === 0, cartHasItems: cartCount > 0,
      cartOverlayOpacity: S.cartOpen ? 1 : 0, cartPointer: S.cartOpen ? 'auto' : 'none', cartTransform: S.cartOpen ? 'translateX(0)' : 'translateX(100%)',
      cartLines, subtotalLabel: this.fmtKr(subtotal),
      hasSavings: savings > 0, savingsLabel: this.fmtKr(savings),
      freeShipPct, freeShipMsg: subtotal >= FREE ? 'Du har fri fragt 🎉' : 'Køb for ' + this.fmtKr(FREE - subtotal) + ' mere og få fri fragt',
      // data
      areas, needs, megaBest, bestsellers: bestIds.map(id => D.byId[id]),
      shopItems: S.shopTab === 'area' ? areas : needs,
      shopAreaActive: S.shopTab === 'area', shopNeedActive: S.shopTab === 'need',
      shopTabAreaBg: S.shopTab === 'area' ? 'var(--sage-500)' : 'transparent', shopTabAreaFg: S.shopTab === 'area' ? '#fff' : 'var(--ink-700)',
      shopTabNeedBg: S.shopTab === 'need' ? 'var(--sage-500)' : 'transparent', shopTabNeedFg: S.shopTab === 'need' ? '#fff' : 'var(--ink-700)',
      setShopArea: () => this.setState({ shopTab: 'area' }), setShopNeed: () => this.setState({ shopTab: 'need' }),
      addToCart: (id, qty) => this.addToCart(id, qty), openProduct: (id) => this.openProduct(id), openCase: (id) => this.openCase(id),
      casesTeaser, casesScrollLeft: () => { const el = document.getElementById('nc-cases-rail'); if (el) el.scrollBy({ left: -360, behavior: 'smooth' }); }, casesScrollRight: () => { const el = document.getElementById('nc-cases-rail'); if (el) el.scrollBy({ left: 360, behavior: 'smooth' }); },
      relScrollLeft: () => { const el = document.getElementById('nc-related-rail'); if (el) el.scrollBy({ left: -540, behavior: 'smooth' }); }, relScrollRight: () => { const el = document.getElementById('nc-related-rail'); if (el) el.scrollBy({ left: 540, behavior: 'smooth' }); },
      testimonials: D.testimonials, testimonialsA: D.testimonials.slice(0, 7), testimonialsB: D.testimonials.slice(7), pressLoop: D.press.concat(D.press),
      footerShop, footerAbout, footerService, footerErhverv, trustItems,
      fiveStars: [0,1,2,3,4],
      // collection
      isCollection: r.name === 'collection', collTitle, collDesc, collProducts, collCount: collProducts.length, areaChips, needChips, menChip, saleChip, allChip, ingChips,
      isMenColl: !!f.men, menBanner, collSeo, collSeoParas: collSeo.paras, collFaq, collSeoBlocks, collSeoLinks,
      collFaqA: collFaq.filter(function (_, i) { return i % 2 === 0; }), collFaqB: collFaq.filter(function (_, i) { return i % 2 === 1; }),
      collQuery: S.collQuery, onCollQuery: (e) => this.setState({ collQuery: e.target.value }), collClearQuery: () => this.setState({ collQuery: '' }),
      collEmpty: collProducts.length === 0,
      isFavoritter: r.name === 'favoritter', goFavoritter: () => this.go('favoritter'),
      isSearch: r.name === 'search', goSearch: () => { this.setState({ gsearch: '' }); this.go('search'); },
      gsearch: S.gsearch, onGsearch: (e) => this.setState({ gsearch: e.target.value }), gsearchClear: () => this.setState({ gsearch: '' }),
      gsProducts, gsArticles, gsCases, gsHasQuery: gq.length > 0,
      gsHasProducts: gsProducts.length > 0, gsHasArticles: gsArticles.length > 0, gsHasCases: gsCases.length > 0,
      gsEmpty: gq.length > 1 && !gsProducts.length && !gsArticles.length && !gsCases.length,
      gsProductCount: gsProducts.length, gsArticleCount: gsArticles.length, gsCaseCount: gsCases.length,
      isKonto: r.name === 'konto', goKonto: () => this.go('konto'),
      kontoPerks: ['Følg dine ordrer og genbestil hurtigt', 'Optjen og indløs point i Kundeklubben', 'Gem dine favoritter på tværs af enheder'],
      isPrivatliv: r.name === 'privatliv', goPrivatliv: () => this.go('privatliv'),
      privatlivSections: [
        { h: 'Dataansvarlig', t: 'NatureCell Denmark er dataansvarlig for de personoplysninger, du giver os, når du handler eller opretter en konto. Du kan altid kontakte os på kundeservice@naturecell.dk med spørgsmål om dine data.' },
        { h: 'Hvilke oplysninger vi indsamler', t: 'Vi indsamler de oplysninger, du selv giver os — navn, adresse, e-mail, telefon og ordrehistorik — samt tekniske data som IP-adresse og browseradfærd via cookies, når du bruger vores webshop.' },
        { h: 'Formål', t: 'Vi bruger dine oplysninger til at behandle og levere din ordre, yde kundeservice, sende nyhedsbreve (kun med dit samtykke) og forbedre din oplevelse på siden. Vi sælger aldrig dine data videre.' },
        { h: 'Cookies', t: 'Vi bruger nødvendige cookies for at webshoppen fungerer, samt statistik- og marketingcookies med dit samtykke. Du kan til enhver tid ændre eller tilbagekalde dit samtykke via cookie-indstillingerne nederst på siden.' },
        { h: 'Opbevaring', t: 'Vi opbevarer dine oplysninger, så længe det er nødvendigt for at opfylde formålet — typisk i henhold til bogføringsloven (5 år for ordredata). Herefter slettes eller anonymiseres dine data.' },
        { h: 'Dine rettigheder', t: 'Du har ret til indsigt i, berigtigelse og sletning af dine oplysninger, samt til at gøre indsigelse mod og begrænse behandlingen. Skriv til os, så hjælper vi dig — og du kan klage til Datatilsynet, hvis du er utilfreds.' },
      ],
      isForhandlere: r.name === 'forhandlere', goForhandlere: () => this.go('forhandlere'),
      forhandlerList: [
        { name: 'NatureCell · Lille Nyhavn', note: 'Vores egen butik i København — kom forbi og få personlig vejledning.', type: 'Flagship' },
        { name: 'Matas', note: 'Udvalgte NatureCell-produkter i Matas-butikker og på matas.dk.', type: 'Kæde' },
        { name: 'Helsekost & specialbutikker', note: 'Førende helsekostbutikker landet over fører dele af serien.', type: 'Helsekost' },
        { name: 'Klinikker & kosmetologer', note: 'Hudplejeklinikker og kosmetologer bruger og forhandler NatureCell.', type: 'Klinik' },
      ],
      favProducts: favProductsList, favCount: favProductsList.length, hasFavs: favProductsList.length > 0, favEmpty: favProductsList.length === 0,
      // product
      isProduct: r.name === 'product' && !!prod, prod: prod || {}, prodBullets: prod ? prod.bullets : [],
      showBuyBar: S.isMobile && r.name === 'product' && !!prod,
      prodIsBundle: !!(prod && prod.bundle), prodEyebrow: prod ? prod.eyebrow : '', prodSave: prod ? prod.save : null, prodHasSave: !!(prod && prod.save),
      pdpTiers, pdpAddLabel, pdpAdd: () => { if (prod) this.addToCart(prod.id, S.pdpQty); }, related,
      pdpStory, pdpReviews, pdpReviewsA: pdpReviews.slice(0, 7), pdpReviewsB: pdpReviews.slice(7), pdpFaq, pdpVids, pdpFounderSlot, pdpUsps, pdpAcc, pdpFounderVideo, pdpHasFounderVideo: !!prod, prodRatingLabel: prod ? (String(prod.rating).replace('.', ',') + '/5 · ' + prod.ratingCount + ' anmeldelser') : '',
      pdpMainImg: prod ? ((prod.images && prod.images.length) ? prod.images[Math.min(S.pdpImg, prod.images.length - 1)] : prod.img) : '',
      pdpImgLoad: (e) => { const im = e.target; if (!im || !im.naturalWidth) return; if (im.naturalWidth > im.naturalHeight * 1.05) { im.style.objectFit = 'cover'; im.style.width = '100%'; im.style.height = '100%'; im.style.maxWidth = '100%'; im.style.maxHeight = '100%'; } else { im.style.objectFit = 'contain'; im.style.width = ''; im.style.height = ''; im.style.maxWidth = '88%'; im.style.maxHeight = '88%'; } },
      pdpHasGallery: !!(prod && prod.images && prod.images.length > 1),
      pdpThumbs: (prod && prod.images && prod.images.length > 1) ? prod.images.map((im, i) => ({ img: im, bd: i === S.pdpImg ? 'var(--sage-500)' : 'var(--border-soft)', go: () => this.setState({ pdpImg: i }) })) : [],
      storeUspList: this.STORE_USPS.concat(this.STORE_USPS).map(u => ({ label: u.label, icon: this.usvg(u.d, 18) })),
      prodHowTo: 'Påfør på ren, tør hud morgen og/eller aften. Til udvortes brug. Undgå direkte kontakt med øjnene. Opbevares køligt og mørkt.',
      prodIngredients: 'CBD (Cannabidiol), naturlige planteolier og botaniske ekstrakter. Vegansk. Uden tilsatte syntetiske duftstoffer.',
      pdpHasIng: !!prod,
      pdpIngredients: (function(){ if(!prod) return []; var S='https://cdn.shopify.com/s/files/1/0600/7111/6981/files/NatureCell_Ingrediens_Slider_'; var G={cbd:['CBD','Balance','Skin conditioning · antioxidant','CBD_180x480px.jpg?v=1762184205'],cbg:['CBG','Hudpleje','Skin conditioning','CBG_180x480px.jpg?v=1762792242'],cannabis:['Hampolie','Næring','Skin conditioning','Cannabis_Sativa_Leaf_Extract_180x480px.jpg?v=1762792242'],hyaluron:['Hyaluronsyre','Fugt','Humectant','Hyaluronsyre_180x480px.jpg?v=1762792241'],urea:['Urea','Fugt','Humectant','Urea_180x480px.jpg?v=1762792242'],niacinamide:['Niacinamide','Udstråling','Skin brightening','Niacinamide_180x480px.jpg?v=1762792242'],squalane:['Squalane','Pleje','Emollient','Aloe_Barbadensis_Leaf_180x480px.jpg?v=1762792242'],shea:['Sheasmør','Beskyttende','Occlusive','Sheasmoer_180x480px.jpg?v=1762792242'],mandelolie:['Mandelolie','Næring','Emollient','Mandelolie_180x480px.jpg?v=1762792242'],mango:['Mango Butter','Pleje','Emollient','Mangifera_Indica_Seed_Butter_180x480px.jpg?v=1762792241'],tocopherol:['E-vitamin','Beskyttelse','Antioxidant','Tocopherol_180x480px.jpg?v=1762792241'],mct:['MCT-olie','Silkeblød','Emollient','Caprylic_Capric_Triglyceride_180x480px.jpg?v=1762792242'],lavendel:['Lavendel','Duft & ro','Fragrance','Lavendelolie_180x480px.jpg?v=1762792242'],aloe:['Aloe Vera','Beroligende','Soothing','Aloe_Barbadensis_Leaf_180x480px.jpg?v=1762792242']}; var M={'skin-oil':['cbd','mct','cannabis','tocopherol'],'day-cream':['cbd','aloe','shea','niacinamide'],'night-cream':['cbd','mandelolie','squalane','mango'],'cleansing-gel':['cbd','aloe','mct'],'serum':['hyaluron','cbd','niacinamide'],'handcreme':['cbd','aloe','shea','niacinamide'],'body-lotion':['cbd','shea','mandelolie'],'body-oil':['cbd','mandelolie','tocopherol','lavendel'],'fodcreme':['urea','cbd','shea','mango'],'eye-gel':['cbg','niacinamide','hyaluron'],'lip-balm':['cbd','shea','tocopherol'],'re-new-balm':['cbd','shea','mango'],'deodorant':['cbd','aloe','tocopherol'],'shampoo':['cbd','niacinamide'],'conditioner':['cbd','shea'],'love':['cbd','aloe'],'complete':['cbd','hyaluron','shea','urea'],'all-day-facial':['cbd','hyaluron','niacinamide','shea']}; var keys=M[prod.id]||(prod.kraft?['cbd','cannabis','mct']:(String(prod.eyebrow||'').indexOf('ALFALAB')===0?['cbd','hyaluron','niacinamide','tocopherol']:(prod.bundle?['cbd','hyaluron','shea','urea']:['cbd','shea','hyaluron']))); const SLUG={'CBD':'cbd','CBG':'cbg','Hampolie':'cannabis','Hyaluronsyre':'hyaluron','Urea':'urea','Niacinamide':'niacinamide','Squalane':'squalane','Sheasmør':'shea','Mandelolie':'mandelolie','Mango Butter':'mango','E-vitamin':'tocopherol','MCT-olie':'mct','Lavendel':'lavendel','Aloe Vera':'aloe'}; const self=this; return keys.map(function(k){var g=G[k];return g?{name:g[0],purpose:g[1],fn:g[2],img:S+g[3],go:function(){self.go('ingredients'); var id=SLUG[g[0]]||k; setTimeout(function(){var el=document.getElementById('ing-'+id); if(el) window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-150,behavior:'smooth'});},280);}}:null;}).filter(Boolean); }).call(this),
      pdpIngScroll: (prod ? ((({'skin-oil':4,'day-cream':4,'night-cream':4,'cleansing-gel':3,'serum':3,'handcreme':4,'body-lotion':3,'body-oil':4,'fodcreme':4,'eye-gel':3,'lip-balm':3,'re-new-balm':3,'deodorant':3,'shampoo':2,'conditioner':2,'love':2,'complete':4,'all-day-facial':4})[prod.id]) || 3) > 4 : false),
      pdpIngPrev: () => { const el = document.getElementById('nc-pdp-ing-rail'); if (el) el.scrollBy({ left: -(el.clientWidth * 0.8), behavior: 'smooth' }); },
      pdpIngNext: () => { const el = document.getElementById('nc-pdp-ing-rail'); if (el) el.scrollBy({ left: el.clientWidth * 0.8, behavior: 'smooth' }); },
      // cases
      isCases: r.name === 'cases', caseChips, filteredCases, caseCount: filteredCases.length, casesEmpty: filteredCases.length === 0,
      caseQuery: S.caseQuery, onCaseQuery: (e) => this.setState({ caseQuery: e.target.value }),
      // articles
      goArticles: () => this.go('articles'), openArticle: (slug) => this.openArticle(slug),
      goKundeklub: () => this.go('kundeklub'), isKundeklub: r.name === 'kundeklub',
      aboutMenuOpen: S.aboutMenu, openAbout: () => this.setState({ aboutMenu: true }), closeAbout: () => this.setState({ aboutMenu: false }),
      goLovensHule: () => this.openArticle('vores-oplevelse-i-lovens-hule'),
      isArticles: r.name === 'articles', artChips, articleList, articleCount: filteredArticles.length, articlesEmpty: filteredArticles.length === 0,
      articleFeatured: featuredArticle, articleHasFeatured: !!featuredArticle,
      articleQuery: S.articleQuery, onArticleQuery: (e) => this.setState({ articleQuery: e.target.value }),
      isArticle: r.name === 'article' && !!curArticle, curArticle: curArticle || {}, curArticleMore,
      curArticleHasBody: !!curArticleBodyHtml, curArticleNoBody: !curArticleBodyHtml,
      curArticleBodyEl: curArticleBodyHtml ? React.createElement('div', { dangerouslySetInnerHTML: { __html: curArticleBodyHtml } }) : null,
      aboutStats: [
        { num: '2019', label: 'Først godkendt til salg i Danmark' },
        { num: 'Vegansk', label: 'Plantebaseret & uden syntetisk parfume' },
        { num: '100%', label: 'Dansk produktion & test' },
        { num: '4,8/5', label: '2.143 anmeldelser på Trustpilot' },
      ],
      isMilestone: r.name === 'milestone' && !!this.MILESTONES[r.id],
      curMilestone: this.MILESTONES[r.id] || {},
      curMilestoneParas: (this.MILESTONES[r.id] || {}).paras || [],
      curMilestoneFacts: (this.MILESTONES[r.id] || {}).facts || [],
      milestoneOthers: Object.keys(this.MILESTONES).filter(k => k !== r.id).map(k => Object.assign({ id: k }, this.MILESTONES[k], { go: () => this.go('milestone', { id: k }) })),
      timeline: [
        { year: '2026', mgo: () => this.go('milestone', { id: '2026' }), title: 'Et komplet univers', text: 'Et fuldt sortiment til ansigt, krop, hænder, fødder og hår — stadig dansk, stadig ærligt.', img: 'https://naturecell.dk/cdn/shop/files/Naturecell_CBD_skincare_pige_vasker_ansigt_kopier.webp?v=1757146053', notLast: true },
        { year: '2021', mgo: () => this.go('milestone', { id: '2021' }), title: 'Løvens Hule', text: 'Jesper Buch investerer, og NatureCell når ud til flere danske hjem.', img: 'assets/lovens-hule.jpg', notLast: true },
        { year: '2019', mgo: () => this.go('milestone', { id: '2019' }), title: 'Først godkendt i DK', text: 'NatureCell bliver den første CBD-hudplejeserie godkendt til salg i Danmark.', img: 'https://naturecell.dk/cdn/shop/files/NatureCell_Sortiment_Hudpleje_0725.webp?v=1752671972', notLast: true },
        { year: '2018', mgo: () => this.go('milestone', { id: '2018' }), title: 'Idéen fødes', text: 'På Møllerup Gods tager en ambition om ærlig, plantebaseret CBD-hudpleje form.', img: 'assets/founders.jpg', notLast: false },
      ],
      b2bPerks: [
        'Dine egne engrospriser og rabatter — styret af os',
        'Hurtig genbestilling og samlet fakturering',
        'Markedsføringsmateriale og produkttræning',
        'Dansk produktion, GMP- & ISO-certificeret',
      ],
      kundeklubPerks: [
        { title: 'Optjen point', text: 'Tjen point på hvert køb og indløs dem til rabat på din næste ordre.', icon: React.createElement('svg', { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor' }, React.createElement('path', { d: 'm12 2 3 6.9 7.5.6-5.7 4.9 1.8 7.3L12 17.8 5.4 21.7l1.8-7.3L1.5 9.5 9 8.9Z' })) },
        { title: '10% velkomstrabat', text: 'Få 10% på din første ordre, når du melder dig ind i klubben.', icon: React.createElement('svg', { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }, [React.createElement('line', { key: 0, x1: 19, y1: 5, x2: 5, y2: 19 }), React.createElement('circle', { key: 1, cx: 6.5, cy: 6.5, r: 2.5 }), React.createElement('circle', { key: 2, cx: 17.5, cy: 17.5, r: 2.5 })]) },
        { title: 'Fødselsdagsgave', text: 'En lille overraskelse i din indbakke i din fødselsdagsmåned.', icon: React.createElement('svg', { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }, [React.createElement('rect', { key: 0, x: 3, y: 8, width: 18, height: 4, rx: 1 }), React.createElement('path', { key: 1, d: 'M5 12v9h14v-9' }), React.createElement('path', { key: 2, d: 'M12 8v13' }), React.createElement('path', { key: 3, d: 'M12 8S10.5 3.5 8 4.6 8.4 8 12 8Z' }), React.createElement('path', { key: 4, d: 'M12 8s1.5-4.5 4-3.4S15.6 8 12 8Z' })]) },
        { title: 'Tidlig adgang', text: 'Vær først med nyheder, kampagner og eksklusive medlemspriser.', icon: React.createElement('svg', { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }, [React.createElement('circle', { key: 0, cx: 12, cy: 12, r: 9 }), React.createElement('path', { key: 1, d: 'M12 7v5l3 2' })]) },
      ],
      kundeklubSteps: [
        { n: '01', title: 'Meld dig ind', text: 'Tilmeld dig gratis med din e-mail — det tager under et minut.' },
        { n: '02', title: 'Handl som vanligt', text: 'Optjen point automatisk på hvert køb i webshoppen.' },
        { n: '03', title: 'Indløs & nyd', text: 'Brug dine point og fordele på din næste hudplejerutine.' },
      ],
      // single case
      isCase: r.name === 'case' && !!curCase, curCase: curCase || {}, curCaseParas: curCase ? curCase.paras : [], curCaseProducts: caseProducts, caseAreaLabel, caseWho,
      caseProductCount: caseProducts.length, caseAddAll: () => { (curCase && curCase.products || []).forEach(id => this.addToCart(id, 1)); },
      curCaseBody, curCaseHasBody: curCaseBody.length > 0, curCaseNoBody: curCaseBody.length === 0,
      caseFill0: caseFills[0], caseFill1: caseFills[1], caseFill2: caseFills[2],
      caseFacts: curCase ? [
        { k: 'Område', v: caseAreaLabel },
        { k: 'Alder', v: curCase.age ? (curCase.age + ' år') : '—' },
        { k: 'Produkter', v: String((curCase.products || []).length) + ' i rutinen' },
        { k: 'Format', v: curCase.hasVideo ? 'Video + tekst' : 'Kundehistorie' },
      ] : [],
      curCaseAuthor: (curCase && curCase.author) ? curCase.author : 'NatureCell',
      curCaseTags: (curCase && curCase.tags) ? curCase.tags : [], curCaseHasTags: !!(curCase && curCase.tags && curCase.tags.length),
      // static pages
      isAbout: r.name === 'about', isB2B: r.name === 'b2b',
      isOmcbd: r.name === 'omcbd', goOmcbd: () => this.go('omcbd'),
      isFaq: r.name === 'faq', goFaq: () => this.go('faq'),
      isKontakt: r.name === 'kontakt', goKontakt: () => this.go('kontakt'),
      isVilkaar: r.name === 'vilkaar', goVilkaar: () => this.go('vilkaar'),
      isGavekort: r.name === 'gavekort', goGavekort: () => this.go('gavekort'),
      gavekortValues: ['200 kr.', '300 kr.', '500 kr.', '1.000 kr.'],
      isQuiz: r.name === 'quiz', goQuiz: () => { this.setState({ quizStep: 0, quizArea: null, quizNeed: null }); this.go('quiz'); },
      quizShowIntro: S.quizStep === 0, quizShowArea: S.quizStep === 1, quizShowNeed: S.quizStep === 2, quizShowResult: S.quizStep === 3,
      quizStart: () => this.setState({ quizStep: 1 }),
      quizAreaOpts: D.areas.map(a => ({ label: a.label, img: a.img, go: () => this.setState({ quizArea: a.key, quizStep: 2 }) })),
      quizNeedOpts: D.needs.map(n => ({ label: n.label, desc: n.desc, go: () => this.setState({ quizNeed: n.key, quizStep: 3 }) })),
      quizBack: () => this.setState(s => ({ quizStep: Math.max(0, s.quizStep - 1) })),
      quizRestart: () => this.setState({ quizStep: 1, quizArea: null, quizNeed: null }),
      quizProgress: (Math.min(S.quizStep, 3) / 3 * 100) + '%',
      quizResult: (function(){
        var list = D.products.filter(function(p){ return (p.id || '').indexOf('alfalab') !== 0 && !p.bundle; });
        if (S.quizArea) list = list.filter(function(p){ return (p.areas || []).includes(S.quizArea); });
        if (S.quizNeed) { var nl = list.filter(function(p){ return (p.needs || []).includes(S.quizNeed); }); if (nl.length) list = nl; }
        list = list.slice().sort(function(a, b){ return (b.rating || 0) - (a.rating || 0); });
        return list.slice(0, 3);
      })(),
      quizAreaLabel: S.quizArea ? D.areaLabels[S.quizArea] : '',
      quizNeedLabel: S.quizNeed ? D.needLabels[S.quizNeed] : '',
      vilkaarSections: [
        { h: 'Handel & priser', t: 'Alle priser er i danske kroner (DKK) inkl. moms. Vi tager forbehold for udsolgte varer, pris- og trykfejl. En bindende aftale er indgået, når du modtager en ordrebekræftelse på e-mail.' },
        { h: 'Levering', t: 'Vi afsender hver dag. Fri fragt ved køb over 399 kr. Leveringstiden er typisk 1–3 hverdage med vores fragtpartnere. Du modtager altid track & trace, så du kan følge din pakke.' },
        { h: 'Fortrydelsesret', t: 'Du har 14 dages fortrydelsesret fra den dag, du modtager din ordre. Varen skal returneres i væsentlig samme stand og mængde. Kosmetik med brudt forsegling af hygiejnehensyn kan ikke altid tages retur — kontakt os, så finder vi en løsning.' },
        { h: 'Reklamation', t: 'Købeloven giver 24 måneders reklamationsret på fejl og mangler. Kontakt vores kundeservice med dit ordrenummer, så hjælper vi dig hurtigt.' },
        { h: 'Betaling', t: 'Vi modtager de mest udbredte betalingskort og MobilePay. Beløbet trækkes først, når din ordre afsendes. Al betaling foregår krypteret og sikkert — webshoppen er e-mærket.' },
        { h: 'Persondata', t: 'Vi behandler dine oplysninger fortroligt og i henhold til GDPR. Vi deler aldrig dine data med uvedkommende. Du kan altid få indsigt i og slettet dine oplysninger ved at kontakte os.' },
      ],
      kontaktBlocks: [
        { title: 'Kundeservice', lines: ['Skriv til os — vi svarer typisk inden for én hverdag.'], link: 'hello@naturecell.dk', href: 'mailto:hello@naturecell.dk' },
        { title: 'Telefon', lines: ['Mandag – fredag 9.00 – 15.00'], link: '+45 40 55 00 42', href: 'tel:+4540550042' },
        { title: 'Butik Lille Nyhavn', lines: ['Lille Nyhavn 4-7', '8660 Skanderborg', 'Shop-in-shop med personlig vejledning'], link: '', href: '', isShop: true },
        { title: 'NatureCell Denmark ApS', lines: ['Lille Nyhavn 10, 2. tv.', '8660 Skanderborg', 'CVR 42256013'], link: '', href: '' },
      ],
      kontaktRows: [
        { k: 'E-mail', v: 'hello@naturecell.dk' },
        { k: 'Telefon', v: '+45 40 55 00 42' },
        { k: 'Telefontid', v: 'Mandag – fredag 9.00 – 15.00' },
        { k: 'Adresse', v: 'NatureCell Denmark ApS · Lille Nyhavn 10, 2. tv. · 8660 Skanderborg' },
        { k: 'CVR', v: '42256013' },
      ],
      butikRows: [
        { k: 'Adresse', v: 'Butik Lille Nyhavn · Lille Nyhavn 4-7 · 8660 Skanderborg' },
      ],
      openingRows: [
        { d: 'Mandag – fredag', h: '10.00 – 17.30' },
        { d: 'Lørdag', h: '10.00 – 15.00' },
        { d: 'Søn- & helligdage', h: 'Lukket' },
      ],
      faqGroups: [
        { cat: 'CBD & lovgivning', items: [
          { q: 'Er CBD lovligt i hudpleje i Danmark?', a: 'Ja. CBD er en tilladt kosmetisk ingrediens under EU’s kosmetikforordning. NatureCell fik som de første i Danmark tilladelse til at tilsætte CBD i hudpleje i 2019.' },
          { q: 'Kan man blive påvirket af CBD-hudpleje?', a: 'Nej. CBD er ikke psykoaktivt. Produkterne er kosmetiske, til udvortes brug, og har ingen berusende effekt.' },
          { q: 'Hvad er forskellen på CBD og THC?', a: 'CBD (cannabidiol) er ikke psykoaktivt og må anvendes i kosmetik i EU. THC er det psykoaktive stof i cannabis og anvendes ikke i vores produkter.' },
          { q: 'Hvad er forskellen på hampolie og CBD?', a: 'Hampolie presses af hampefrø og indeholder fedtsyrer og vitaminer. CBD udvindes fra plantens blade og blomster og er en cannabinoid. Begge kan indgå i hudpleje med hver sin funktion.' },
        ] },
        { cat: 'Produkter & brug', items: [
          { q: 'Hvor skal jeg starte, hvis jeg er ny?', a: 'Komplet CBD Hudpleje er et godt startpunkt: rens, olie, dagcreme og natcreme — alt du behøver til en fast rutine morgen og aften. Du kan også tage vores hudpleje-quiz.' },
          { q: 'Hvor hurtigt ser jeg resultater?', a: 'Det varierer fra person til person. Mange oplever en mere velplejet hud efter nogle ugers fast rutine. Vi lover ikke mirakler — vi lader vores kunder fortælle om deres egne oplevelser.' },
          { q: 'Kan produkterne bruges på sensitiv hud?', a: 'Ja. Serien er udviklet som en one-size-fits-all løsning til alle hudtyper — også tør, moden og sensitiv hud. Produkterne er uden syntetisk parfume.' },
          { q: 'Kan jeg kombinere NatureCell med min nuværende hudpleje?', a: 'Ja. CBD-hudpleje kan indgå i de fleste rutiner og bruges sammen med andre produkter.' },
          { q: 'Hvordan opbevarer jeg produkterne?', a: 'Køligt og mørkt, og luk godt efter brug. Produkterne er til udvortes brug — undgå direkte kontakt med øjnene.' },
          { q: 'Er dag- og natcreme testet?', a: 'Ja. Vores dag- og natcreme er dermatologisk testet af Dermatest og har opnået højeste vurdering (“Sehr Gut”).' },
        ] },
        { cat: 'Ingredienser & kvalitet', items: [
          { q: 'Er produkterne veganske?', a: 'Ja. Alle NatureCell-produkter er veganske og uden tilsatte syntetiske duftstoffer.' },
          { q: 'Hvor produceres NatureCell?', a: 'Cremerne er dansk-producerede, og vores CBD/olie fremstilles på GMP- og ISO-certificerede faciliteter — for dokumenteret kvalitet og sporbarhed.' },
          { q: 'Hvilke hovedingredienser bruger I?', a: 'CBD og CBG i samspil med hyaluronsyre, urea, sheasmør, squalane, aloe vera, mandelolie, niacinamid og E-vitamin. Du kan læse om hver enkelt ingrediens på vores ingrediensside.' },
          { q: 'Tester I på dyr?', a: 'Nej. Dyreforsøg med kosmetik er forbudt i EU, og vores produkter er veganske.' },
        ] },
        { cat: 'Levering & returnering', items: [
          { q: 'Hvad koster fragt?', a: 'Fri fragt ved køb over 399 kr. Vi afsender hver dag, og webshoppen er e-mærket for tryg handel.' },
          { q: 'Hvor lang er leveringstiden?', a: 'Typisk 1–3 hverdage med vores fragtpartnere. Du modtager altid track & trace, så du kan følge din pakke.' },
          { q: 'Kan jeg returnere min ordre?', a: 'Ja. Du har 14 dages fortrydelsesret fra du modtager ordren. Kosmetik med brudt forsegling kan af hygiejnehensyn ikke altid tages retur — kontakt os, så finder vi en løsning.' },
          { q: 'Hvilke betalingsmuligheder har I?', a: 'Vi modtager de mest udbredte betalingskort og MobilePay. Beløbet trækkes først, når din ordre afsendes.' },
        ] },
        { cat: 'Butik & kontakt', items: [
          { q: 'Kan jeg se produkterne fysisk?', a: 'Ja. NatureCell har shop-in-shop i Butik Lille Nyhavn, Lille Nyhavn 4-7, 8660 Skanderborg — kom forbi og få personlig vejledning.' },
          { q: 'Hvordan kontakter jeg jer?', a: 'Skriv til hello@naturecell.dk eller ring på +45 40 55 00 42 mandag–fredag 9.00–15.00. Vi er en dansk virksomhed med dansk kundeservice.' },
          { q: 'Hvor kan jeg ellers købe NatureCell?', a: 'Ud over webshoppen finder du NatureCell hos Matas samt i udvalgte helsekostbutikker og klinikker landet over.' },
        ] },
        { cat: 'Kundeklub & B2B', items: [
          { q: 'Hvad får jeg i Kundeklubben?', a: 'Gratis medlemskab med 10% velkomstrabat, point på hvert køb, en fødselsdagsgave og tidlig adgang til nyheder og medlemspriser.' },
          { q: 'Hvordan bliver jeg forhandler?', a: 'Sælger du i butik eller klinik? Opret en B2B-konto via “B2B login” og anmod om adgang — så vender vi tilbage med dine priser og betingelser.' },
          { q: 'Kan jeg få et gavekort?', a: 'Ja. Vores digitale gavekort sendes på e-mail, kan bruges på hele sortimentet og gælder i 3 år.' },
        ] },
      ],
      cbdSkinTypes: [
        { title: 'Rødme, tør eller følsom hud', text: 'Det rige indhold af CBD kombineret med ingredienser af naturlig oprindelse som glycerin, mandelolie, hampolie og squalane plejer og beroliger tør og sensitiv hud. De fugtgivende ingredienser absorberes hurtigt og bidrager til at genoprette hudens naturlige fugtbalance ved tør og irriteret hud. CBD medvirker til at pleje og styrke hudens barriere.' },
        { title: 'Fedtet hud', text: 'CBD har anti-sebum egenskaber, der bidrager til at balancere huden og reducere synligheden af overskydende olie på hudens overflade. Resultatet er en mere mat, frisk og harmonisk hud med et ensartet udtryk.' },
        { title: 'Bumser og uren hud', text: 'CBD har anti-sebum egenskaber, der bidrager til at balancere huden og give et mere mat og ensartet udseende. De plejende ingredienser hjælper med at reducere synligheden af urenheder og efterlader huden frisk, klar og velplejet.' },
        { title: 'Kombineret hud', text: 'CBD bidrager til at bevare og balancere hudens naturlige tilstand, hvilket gør NatureCell CBD hudpleje velegnet til både tørre og fedtede områder. Huden efterlades med et mere harmonisk og ensartet udseende — uanset hudtype.' },
        { title: 'Rødme og irritation', text: 'Det rige indhold af CBD kombineret med naturlige ingredienser som glycerin, mandelolie, hampolie og squalane plejer og beroliger huden ved rødme og tørhed. De fugtgivende ingredienser absorberes hurtigt og bidrager til at genoprette hudens fugtbalance. Kan også anvendes til at pleje huden efter f.eks. insektbid — og efterlader huden blød og velplejet.' },
        { title: 'Rynker og fine linjer', text: 'CBD bidrager til at pleje huden og støtte dens naturlige balance. Det kan medvirke til, at huden fremstår glattere og mere jævn med reduceret synlighed af fine linjer, samtidig med at den nærer tør hud og bidrager til at bevare hudens elasticitet og smidighed.' },
        { title: 'Følsom og sart hud', text: 'Alle ingredienser i NatureCell CBD hudplejeserien er nøje udvalgt, så de passer til alle hudtyper — herunder også følsom og sart hud.' },
        { title: 'Moden hud', text: 'Det rige indhold af CBD, kendt for sine antioxidative egenskaber, kombineret med plejende ingredienser som ginkgo biloba, gulerodsolie, squalane samt vitaminerne C, E og F, bidrager til at reducere synligheden af fine linjer og give huden et glattere og mere ensartet udtryk. CBD hjælper med at pleje og styrke tør hud og bidrager til at bevare hudens elasticitet og smidighed — særligt velegnet til hud, der har været udsat for sol og tendens til ujævn hudtone eller pigmentpletter.' },
      ],
      cbdProps: [
        { title: '100% plantebaseret CBD', text: 'NatureCell anvender 100% plantebaseret CBD, udvundet fra hampeplanter dyrket i EU for at sikre den højeste kvalitet og fuld sporbarhed. CBD’en produceres på GMP- og ISO-certificeret fabrik, hvor der stilles krav til renhed, sikkerhed og dokumenteret kvalitet i alle produktionsled. Den overholder EU’s kosmetiklovgivning og gældende regler for skadelige stoffer.' },
        { title: 'Hampfrøolie', text: 'NatureCell-produkter er formuleret med vores egen koldpressede hampfrøolie — en olie rig på essentielle omega-fedtsyrer og proteiner. Den leverer antioxidanter (vitamin E), caroten (forløber for vitamin A), phytosteroler, phospholipider og en række mineraler som calcium, magnesium, svovl, kalium og fosfor, sammen med beskedne mængder jern og zink.' },
        { title: 'Hydrerende', text: 'Fugtgivende naturlige ingredienser som glycerin, mandelolie, hampolie og squalane i kombination med CBD absorberes hurtigt af huden og sikrer hydrering.' },
        { title: 'Full Spectrum industriel hamp', text: 'NatureCell-produkter produceres med Full Spectrum industriel hampekstrakt, der indeholder mindre end 0,2% THC. Vores hel-plante-koncept betyder, at produkterne indeholder yderligere cannabinoider og terpener, der findes naturligt i hampeplanten — for maksimal effekt.' },
        { title: 'Genopretter hudens balance', text: 'CBD bidrager til at bevare hudens naturlige balance og understøtter en sund og velplejet hudbarriere. Dens plejende egenskaber hjælper huden med at fremstå mere harmonisk, glat og velfugtet.' },
        { title: 'Unik terpeneprofil', text: 'En kombination af terpener og cannabinoider forbedrer de gavnlige egenskaber ved vores produkter.' },
        { title: 'Gør mere med mindre', text: 'NatureCell-produkter er formuleret uden fyldstoffer, smagsstoffer eller unødvendige ingredienser. De indeholder kun Full Spectrum industriel hampekstrakt, naturlige terpener og certificerede ingredienser.' },
      ],
      omcbdComplete: { go: () => this.openProduct('complete') },
      palOpen: !!S.palOpen,
      palToggle: () => this.setState(s => ({ palOpen: !s.palOpen })),
      palReset: () => this._resetPalette(),
      palGroups: (() => {
        const ov = this._paletteState();
        const P = this.props;
        return this.NC_TARGETS.map(g => ({
          grp: g.grp,
          rows: g.keys.map(([key, label, def]) => {
            const cur = ov[key] !== undefined ? ov[key] : this._hex(P[key], def);
            return {
              key, label, cur,
              swatchGroups: this.NC_SWATCHES.map(sw => ({
                g: sw.g,
                chips: sw.items.map(([nm, hex]) => {
                  const c = hex.replace('#',''); const ch2 = (i) => { const v = parseInt(c.substr(i,2),16)/255; return v <= 0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055, 2.4); };
                  const light = (0.2126*ch2(0)+0.7152*ch2(2)+0.0722*ch2(4)) > 0.45;
                  return {
                    nm, hex, label: nm + ' ' + hex,
                    fg: light ? 'rgba(20,32,29,0.75)' : 'rgba(255,255,255,0.9)',
                    chipBar: light ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.22)',
                    ring: hex.toUpperCase() === String(cur).toUpperCase() ? '0 0 0 2px var(--sage-700)' : '0 0 0 1px rgba(0,0,0,0.12)',
                    go: () => this._setPaletteColor(key, hex),
                  };
                }),
              })),
            };
          }),
        }));
      })(),
      cbdSkinList: cbdSkinList, cbdSkinActive: cbdSkinData[skinIdx],
      cbdSkinHasLink: !!cbdSkinData[skinIdx].slug,
      cbdSkinGo: () => { if (cbdSkinData[skinIdx].slug) this.openArticle(cbdSkinData[skinIdx].slug); },
      cbdPropList: cbdPropList, cbdPropActive: cbdPropData[propIdx],
      isIngredients: r.name === 'ingredients',
      goIngredients: () => this.go('ingredients'),
      ingredients: D.ingredients.map(ig => Object.assign({}, ig, { go: () => this.go('ingredients') })),
      ingEmpty: D.ingredients.filter(ig => { const q = (S.ingQuery || '').trim().toLowerCase(); return !q || (ig.name + ' ' + (ig.latin || '') + ' ' + (ig.tag || '') + ' ' + (ig.intro || '')).toLowerCase().includes(q); }).length === 0,
      ingQuery: S.ingQuery, onIngQuery: (e) => this.setState({ ingQuery: e.target.value }), ingClearQuery: () => this.setState({ ingQuery: '' }),
      ingPicker: D.ingredients.map(ig => ({ label: ig.name, href: '#ing-' + ig.id, bd: 'var(--border-default)', bg: 'transparent', fg: 'var(--ink-700)' })),
      ingChipsCollapsed: !S.ingChipsOpen,
      ingChipsExpanded: !!S.ingChipsOpen,
      ingChipsWrap: 'nowrap',
      ingChipsOverflow: S.ingChipsOpen ? 'auto' : 'hidden',
      ingChipsExpand: () => this.setState({ ingChipsOpen: true }),
      ingChipsPrev: () => { const el = document.getElementById('nc-ing-chips'); if (el) el.scrollBy({ left: -(el.clientWidth * 0.7), behavior: 'smooth' }); },
      ingChipsNext: () => { const el = document.getElementById('nc-ing-chips'); if (el) el.scrollBy({ left: el.clientWidth * 0.7, behavior: 'smooth' }); },
      ingredientsFull: D.ingredients.filter(ig => { const q = (S.ingQuery || '').trim().toLowerCase(); return !q || (ig.name + ' ' + (ig.latin || '') + ' ' + (ig.tag || '') + ' ' + (ig.intro || '')).toLowerCase().includes(q); }).map((ig, i) => Object.assign({}, ig, { anchor: 'ing-' + ig.id, dir: i % 2 === 0 ? 'row' : 'row-reverse', bg: i % 2 === 0 ? 'var(--cloud)' : 'var(--paper-2)' })),
    };
  }

  openProduct(id) { this.go('product', { id }); this.setState({ pdpQty: 1, pdpImg: 0 }); }
  openCase(id) { this.go('case', { id }); }
  openArticle(slug) { this.go('article', { slug }); }
}
