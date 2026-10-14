// DEALS – "Black Week-favoritter" product grid.
// Cards rendered from ctx.products (gift excluded) · every pack stands on ONE shared floor at ONE truthful scale
// (Sampakker are a line-up of the real single bottles they contain) · filter chips with FLIP re-layout + sliding ink ·
// damped 3D tilt with a specular light band masked to the packshot (follows the cursor, and passes along the shelf
// on reveal) · fly-to-cart arc with a soft oil trail · button morph · quick view (<dialog>) · gift tile that follows
// the cart subtotal. Motion language: viscous and critically damped – never springy, never bouncy.

import SKIN_OIL_DUO from './skin-oil-duo.js';
import DAY_DUO from './day-cream-duo.js';
import SET_BOTTLES from './set-bottles.js';
import LIP from './lip-balm.js';
import GLASS from './glass-masks.js';

// Packshot geometry: box = [imgW, imgH, x0, y0, x1, y1] = opaque alpha bbox (product only, no built-in glow).
// cyl = the x-range (% of the image) of the round bottle/tube in a composite shot: only there does the window's light
// show as a crisp vertical glint – the flat cartons catch it as a broad plane wash instead.
// h = truthful relative height in "units" (shampoo = 1). Heights are derived from the real photos:
// the group shots fix dropper : rensegel : dagcreme = .66 : .89 : 1, the singles fix bottle : carton.
const SHOT = {
  'skin-oil':      { url: SKIN_OIL_DUO,                         box: [1000, 1000, 232, 100, 769, 960],  h: 0.635 , cyl: [23, 47.5] },
  'serum':         { src: 'products/hyaluron-serum.webp',    box: [800, 1200, 108, 225, 700, 1107],  h: 0.635 , cyl: [13, 43.5] },
  'day-cream':     { url: DAY_DUO,                              box: [1200, 1200, 346, 97, 863, 1151],  h: 0.86 , cyl: [28.5, 47.5] },
  'night-cream':   { src: 'products/night-cream.webp',       box: [1200, 1200, 345, 96, 862, 1153],  h: 0.86 , cyl: [28.5, 47.5] },
  'cleansing-gel': { src: 'products/cleansing-gel-box.webp', box: [1200, 1200, 223, 64, 933, 1113],  h: 0.825 , cyl: [18.5, 45.5] },
  'body-lotion':   { src: 'products/body-lotion.webp',       box: [800, 1200, 186, 163, 601, 1138],  h: 0.92 , cyl: [22, 76] },
  'shampoo':       { src: 'products/shampoo.webp',           box: [1200, 1200, 455, 65, 764, 1148],  h: 1.00 , cyl: [36, 65] },
};
// single bottles (no carton) for the Sampakke line-ups – same unit scale as SHOT
const BOTTLE_H = { 'cleansing-gel': 0.748, 'day-cream': 0.841, 'night-cream': 0.841, 'skin-oil': 0.553 };
const BOTTLE = Object.fromEntries(Object.entries(SET_BOTTLES).map(([id, b]) => [id, { url: b.url, box: [b.w, b.h, 0, 0, b.w, b.h], h: BOTTLE_H[id], cyl: [0, 100], gm: GLASS[`set:${id}`] }]));
Object.entries(SHOT).forEach(([id, s]) => { s.gm = GLASS[id]; });
// the free 6 ml Lip Balm stick at the same truthful scale (≈ .32 of the 300 ml shampoo)
const LIP_SHOT = { url: LIP.url, box: [LIP.w, LIP.h, 0, 0, LIP.w, LIP.h], h: 0.32, cyl: [0, 100] };
const LINE_GAP = 0.12; // gap between bottles in a line-up, in units (mirrors --lgap in CSS) – grouped like a set on a shelf
// one truthful scale for the whole grid: a unit (the 300 ml shampoo) is K × one column's width. Every ROW of the grid
// is then exactly as tall as its tallest pack needs (+ head-room), so no card carries a wall of empty sky.
// Phones get a slightly larger unit (two columns, so the packs would otherwise read as thumbnails).
const K_UNIT = 1.06, K_UNIT_PHONE = 1.12;

const ORDER = ['komplet-pakken', 'skin-oil', 'serum', 'day-cream', 'night-cream', 'all-day-facial', 'cleansing-gel', 'body-lotion', 'shampoo'];
const CAT = { 'skin-oil': 'face', serum: 'face', 'day-cream': 'face', 'night-cream': 'face', 'cleansing-gel': 'face', 'body-lotion': 'body', shampoo: 'body' };
const catOf = (p) => (p.bundle ? 'sets' : CAT[p.id] || 'face');
const SHORT = { 'cleansing-gel': 'Rens', 'day-cream': 'Dag', 'night-cream': 'Nat', 'skin-oil': 'Olie' };
// product pages on naturecell.dk (handles from the live theme). Unknown handles fall back to their collection.
const SHOP = 'https://naturecell.dk';
const URL_OF = {
  'skin-oil': '/products/cbd-olie-1000mg', serum: '/products/naturecell-cbd-hyaluronic-serum', 'day-cream': '/products/dagcreme',
  'night-cream': '/products/natcreme', 'cleansing-gel': '/products/rensegel', 'body-lotion': '/products/bodylotion',
  shampoo: '/products/shampoo-300ml', 'komplet-pakken': '/products/hudpleje-startpakke-plus-1', 'all-day-facial': '/products/ansigtpleje-serie',
};
const hrefOf = (p) => SHOP + (URL_OF[p.id] || (p.handle ? `/products/${p.handle}` : '/collections/cbd-hudpleje'));
// handles verified against theme-src (index/page.start settings + the DA handle registry used for the DE launch)
// Danish category eyebrows (match the filter chips); a product nickname wins where it exists
const EYEBROW = { 'body-lotion': 'Krop', shampoo: 'Hår' };
const eyebrowOf = (p) => p.nickname || EYEBROW[p.id] || 'Ansigt';
// one-line claims for the 2-up phone grid (never clamped mid-word) – same cosmetic wording as the long claims
const CLAIM_S = {
  'skin-oil': '1000 mg CBD. Til alle hudtyper.', serum: 'Fugtboost med hyaluronsyre og CBD.',
  'day-cream': 'Let dagcreme med aloe vera og shea.', 'night-cream': 'Nærende natcreme med mandelolie.',
  'cleansing-gel': 'Mild rens, der bevarer fugtbalancen.', 'body-lotion': 'Intensiv fugtighed til tør hud.',
  shampoo: 'Mild shampoo til hele familien.',
};
// the phone's one-liners (≈ 150px of card body at 12.5px): every single card carries one true line, none more
const CLAIM_XS = {
  'skin-oil': 'Til alle hudtyper.', serum: 'Med hyaluronsyre.', 'day-cream': 'Med aloe vera og shea.',
  'night-cream': 'Med mandelolie.', 'cleansing-gel': 'Bevarer fugtbalancen.', 'body-lotion': 'Fugt til tør hud.',
  shampoo: 'Til hele familien.',
};

const ICON = {
  bag: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.6 8.25h12.8l-1.05 10.6a2 2 0 0 1-1.99 1.8H8.64a2 2 0 0 1-1.99-1.8z"/><path d="M9 10.5V7a3 3 0 0 1 6 0v3.5"/></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path class="deals-check" d="m5.5 12.6 4.1 4.1 8.9-9.4"/></svg>',
  plus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 6.5v11M6.5 12h11"/></svg>',
  tick: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 12.4 3.9 3.9L18 8"/></svg>',
  eye: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.75 12S6.1 5.75 12 5.75 21.25 12 21.25 12 17.9 18.25 12 18.25 2.75 12 2.75 12z"/><circle cx="12" cy="12" r="2.75"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/></svg>',
  truck: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 7.5h10.5v8.5H3.5z"/><path d="M14 10.5h3.6l2.9 3v2.5H14"/><circle cx="7.25" cy="17.25" r="1.75"/><circle cx="16.75" cy="17.25" r="1.75"/></svg>',
  back: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3"/><path d="M4.25 4.5v3.25H7.5"/></svg>',
  // the brand's own directional arrow (assets/icons/pil.svg), cropped to its ink and drawn in currentColor
  pil: '<svg class="deals-pil" viewBox="14.5 17 31 31" aria-hidden="true"><path d="M31.63,46.75l12.34-7.13-12.55-6.76.05,3.58c-3.88-.64-12.57-3.63-15.45-17.47,0,0,0,19.64,15.54,23.44l.06,4.33Z"/></svg>',
  gift: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.75 9.25h14.5v3.5H4.75z"/><path d="M6 12.75v7h12v-7M12 9.25v10.5"/><path d="M12 9.25c-1.4-3.3-5.2-3.9-5.2-1.6 0 1.2 1.6 1.6 5.2 1.6zM12 9.25c1.4-3.3 5.2-3.9 5.2-1.6 0 1.2-1.6 1.6-5.2 1.6z"/></svg>',
  shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.75 5.25 6.5v5c0 4.2 2.9 7.4 6.75 8.75 3.85-1.35 6.75-4.55 6.75-8.75v-5z"/><path d="m9.25 12 1.95 1.95 3.75-3.9"/></svg>',
};

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
// Danish typesetting: a one- or two-letter word never ends a line ("i én pakke" stays together – no orphans)
const nb = (s) => String(s).replace(/(^|\s)(\p{L}{1,2}) (?=\S)/gu, '$1$2\u00a0').replace(/ – /g, '\u00a0– ');
// a short sentence is never split ("1000 mg CBD. | Til alle hudtyper.", not "… Til alle | hudtyper.")
const keep = (s) => String(s).split(/(?<=\.) /).map((t) => (t.length <= 22 ? `<span class="deals-keep">${nb(esc(t))}</span>` : nb(esc(t)))).join(' ');

export default function init(root, ctx) {
  const { fmt, store } = ctx;
  const kr = (n) => fmt.kr(n).replace(/ (?=kr\.)/, ' '); // never break between amount and kr.
  const $ = (s, el = root) => el.querySelector(s);
  const $$ = (s, el = root) => [...el.querySelectorAll(s)];
  const RM = ctx.prefersReducedMotion;
  const FINE = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const VISC = 'cubic-bezier(.16, 1, .3, 1)';
  const SLOW = +((location.search.match(/[?&]dealsSlow=(\d+)/) || [])[1] || 1); // dev: slow the flight to inspect it
  const TOUCH = matchMedia('(hover: none), (pointer: coarse)').matches || (navigator.maxTouchPoints > 0 && ctx.isMobile());
  root.classList.toggle('deals-touch', TOUCH);
  const grid = $('[data-deals-grid]');
  const live = $('[data-deals-live]');
  const items = ORDER.map((id) => ctx.byId[id]).filter((p) => p && !p.gift && (SHOT[p.id] || p.bundle));
  // any further products added to data.js (non-gift, with an image) still show up, after the curated order
  ctx.products.forEach((p) => { if (!p.gift && p.img && !items.includes(p) && !/drops|lubricant/.test(p.img)) items.push(p); });

  // ------------------------------------------------------------------ markup
  const srcOf = (s, p) => (s && s.url ? s.url : ctx.asset(s ? s.src : p.img));
  // one pack on the floor: contact shadow + packshot + light masked to the packshot's own alpha.
  // The light lives in LINE coordinates (0 = left edge of the line-up, 1 = right edge): one distant window light passes
  // along a whole shelf, bottle by bottle. Each pack knows where it sits in its line (--px0/--pw) and how many box-%
  // one "unit" is (--bk), so the glint has the same physical width on every pack.
  const packW = (s) => (s.box[4] - s.box[2]) / (s.box[5] - s.box[3]) * s.h; // product width in units
  function prodHtml(s, src, alt, lbl = '', px0 = 0, pw = 1) {
    const [W, H, x0, y0, x1, y1] = s.box; const bw = x1 - x0, bh = y1 - y0;
    const geo = `width:${(W / bw * 100).toFixed(3)}%;left:${(-x0 / bw * 100).toFixed(3)}%;top:${(-y0 / bh * 100).toFixed(3)}%`;
    const gw = bw / W, wu = packW(s);
    const cy = s.cyl || [0, 100];
    return `<div class="deals-prod" data-lg="${(x0 / W * 100).toFixed(3)},${gw.toFixed(4)},${px0.toFixed(4)},${pw.toFixed(4)},${cy[0]},${cy[1]}" style="--ar:${(bw / bh).toFixed(4)};--ph:${s.h.toFixed(4)};--gx0:${(x0 / W * 100).toFixed(3)}%;--gw:${gw.toFixed(4)};--bk:${(gw / wu).toFixed(4)};--px0:${px0.toFixed(4)};--pw:${pw.toFixed(4)};--cy0:${(s.cyl || [0, 100])[0]}%;--cy1:${(s.cyl || [0, 100])[1]}%;--cyw:${(((s.cyl || [0, 100])[1] - (s.cyl || [0, 100])[0]) / 100).toFixed(4)};--by0:${(y0 / H * 100).toFixed(2)}%;--bh:${(bh / H).toFixed(4)}">
      <span class="deals-prod__shadow" aria-hidden="true"></span>
      <span class="deals-prod__pack" style="--m:url('${src}')"><img src="${src}" alt="${esc(alt)}" width="${W}" height="${H}" draggable="false" style="${geo}"><span class="deals-gloss deals-gloss--plane" aria-hidden="true" style="${geo};aspect-ratio:${W}/${H}"></span><span class="deals-gloss deals-gloss--sheen" aria-hidden="true" style="${geo};aspect-ratio:${W}/${H}"><i class="deals-beam"></i></span>${s.gm ? `<span class="deals-gloss deals-gloss--glint" aria-hidden="true" style="${geo};aspect-ratio:${W}/${H};--gm:url('${s.gm}')"><i class="deals-beam"></i></span><span class="deals-gloss deals-gloss--amber" aria-hidden="true" style="${geo};aspect-ratio:${W}/${H};--gm:url('${s.gm}')"><i class="deals-beam"></i></span>` : ''}</span>
      ${lbl}
    </div>`;
  }
  const lineW = (specs) => specs.reduce((a, s) => a + packW(s), 0) + LINE_GAP * (specs.length - 1);
  function lineHtml(p) {
    if (p.bundle) {
      const ids = (p.contains || []).filter((id) => BOTTLE[id]);
      const specs = ids.map((id) => BOTTLE[id]);
      const lw = lineW(specs);
      let x = 0;
      return `<div class="deals-line deals-line--set" style="--lw:${lw.toFixed(4)};--n:${ids.length}" role="img" aria-label="${esc(p.name)}: ${ids.map((id) => esc(ctx.byId[id]?.name || id)).join(', ')}">
        ${ids.map((id, i) => { const w = packW(BOTTLE[id]); const h = prodHtml(BOTTLE[id], BOTTLE[id].url, '', `<span class="deals-prod__lbl" aria-hidden="true"><span class="deals-no">${i + 1}</span>${SHORT[id] || ''}</span>`, x / lw, w / lw); x += w + LINE_GAP; return h; }).join('')}
      </div>`;
    }
    const s = SHOT[p.id] || { src: p.img, box: [1000, 1000, 0, 0, 1000, 1000], h: 0.8 };
    return `<div class="deals-line" style="--lw:${lineW([s]).toFixed(4)}">${prodHtml(s, srcOf(s, p), `${p.name}${p.size ? ', ' + p.size : ''}`)}</div>`;
  }
  // price: Black Week price with the struck førpris inline (§ 9 a wording), the saving on its own berry line
  const priceHtml = (p, big = false) => `
    <div class="deals-price${big ? ' deals-price--big' : ''}">
      <p class="deals-price__line"><span class="deals-price__now"><span class="nc-sr">Black Week-pris </span>${kr(p.price)}</span>
        <span class="deals-price__was">Førpris <s>${kr(p.price0)}</s></span></p>
      <p class="deals-price__save">Spar ${kr(p.save)}</p>
    </div>`;
  // Label in Name (WCAG 2.5.3): the accessible name STARTS with the visible "Læg i kurv".
  // Singles get the quiet outline button, Sampakker the one solid CTA – the hierarchy steers toward the sets.
  const addHtml = (p, extra = '') => `
    <button class="nc-btn deals-add${p.bundle ? '' : ' deals-add--ghost'}${extra}" type="button" data-add="${p.id}">
      <span class="deals-add__ink" aria-hidden="true"></span>
      <span class="deals-add__a">${ICON.bag}<span>Læg i kurv</span><span class="nc-sr"> – ${esc(p.name)}</span></span>
      <span class="deals-add__b" aria-hidden="true">${ICON.check}<span>Lagt i kurv</span></span>
    </button>`;
  const metaLine = (p) => [p.size, p.strength].filter(Boolean).join(' · ');
  // § 9 a / mfl. § 5: the ledger only shows prices a shopper can actually compare against – each item's own førpris,
  // their sum (labelled as such), and what the same items cost bought separately TODAY. All computed from ctx.byId.
  const setRows = (p) => (p.contains || []).map((id) => ctx.byId[id]).filter(Boolean);
  const setNow = (p) => setRows(p).reduce((a, r) => a + r.price, 0);        // the items bought one by one in Black Week
  const setLess = (p) => setNow(p) - p.price;                               // how much cheaper the Sampakke is than that
  const num = (n) => fmt.kr(n).replace(/\s*kr\.$/, '');
  // full ledger (quick view): every item by name with its førpris
  const contentsHtml = (p) => {
    const rows = setRows(p);
    if (!rows.length) return '';
    return `<div class="deals-set__contents">
      <p class="deals-set__cap"><span>Indhold</span><span>Førpris</span></p>
      <dl class="deals-set__list">
        ${rows.map((r, i) => `<div class="deals-set__row"><dt><span class="deals-no" aria-hidden="true">${i + 1}</span>${esc(r.name)}</dt><dd>${kr(r.price0)}</dd></div>`).join('')}
        <div class="deals-set__row deals-set__row--sum0"><dt>Samlet førpris enkeltvis</dt><dd>${kr(rows.reduce((a, r) => a + r.price0, 0))}</dd></div>
        <div class="deals-set__row deals-set__row--sum"><dt>Enkeltvis i Black Week</dt><dd>${kr(setNow(p))}</dd></div>
      </dl>
    </div>`;
  };
  // card ledger: the same proof as one readable sum – each numbered førpris maps to the numbered bottle above it
  const sumHtml = (p) => {
    const rows = setRows(p);
    if (!rows.length) return '';
    const sum0 = rows.reduce((a, r) => a + r.price0, 0);
    return `<div class="deals-set__sum">
      <p class="deals-set__cap">Førpris pr. produkt</p>
      <p class="deals-set__eq"><span class="nc-sr">${rows.map((r) => `${esc(r.name)} ${kr(r.price0)}`).join(', ')}</span><span class="deals-set__eqv" aria-hidden="true">${rows.map((r, i) => `<span class="deals-set__term"><span class="deals-no">${i + 1}</span>${num(r.price0)}</span>`).join('<span class="deals-set__op">+</span>')}</span></p>
      <p class="deals-set__tot deals-set__tot--was"><span>Samlet førpris enkeltvis</span><b>${kr(sum0)}</b></p>
      <p class="deals-set__tot"><span>Enkeltvis i Black Week</span><b>${kr(setNow(p))}</b></p>
    </div>`;
  };
  // the honest comparison, in berry, right above the price it explains
  const lessHtml = (p) => (setLess(p) > 0 ? `<p class="deals-set__less"><span class="deals-set__less-dot" aria-hidden="true"></span>${kr(setLess(p))} billigere end købt enkeltvis</p>` : '');
  const giftAt = ctx.campaign.giftThreshold, shipAt = ctx.campaign.freeShipping;
  const perksHtml = (p) => {
    const perks = [];
    if (p.price >= giftAt) perks.push([ICON.gift, `Udløser gratis CBD Lip Balm`, ' class="is-gift"']);
    // below the gift threshold: say exactly how close it gets you (computed – a nudge, not a promise)
    else perks.push([ICON.gift, `<b>${kr(giftAt - p.price)}</b> fra gratis CBD Lip Balm`, ' class="is-gift is-nudge"']);
    if (p.price >= shipAt) perks.push([ICON.tick, `Fri fragt`]);
    perks.push([ICON.tick, 'Ingen kode – trækkes i kurven']);
    return `<ul class="deals-set__perks">${perks.map(([ic, t, c = '']) => `<li${c}>${ic}<span>${t}</span></li>`).join('')}</ul>`;
  };
  const sale = (p) => `<span class="deals-flag" aria-hidden="true">−${p.pct}%</span>`;
  const quick = (p) => `<button class="deals-quick" type="button" data-qv="${p.id}">${ICON.eye}<span class="nc-sr">Hurtig visning – ${esc(p.name)}</span></button>`;
  // touch: the packshot itself is the quick-view button (no eye bubble on every single tile); hidden on a fine pointer,
  // where the image belongs to the card's product link and the eye appears on hover
  const stageBtn = (p) => `<button class="deals-stagebtn" type="button" data-qv="${p.id}"><span class="nc-sr">Hurtig visning – ${esc(p.name)}</span></button>`;
  // the truthful height (units) of the tallest pack on a card – the grid sizes each row from it
  const tallOf = (p) => (p.bundle ? Math.max(...(p.contains || []).map((id) => BOTTLE_H[id] || 0)) : (SHOT[p.id] || { h: 0.8 }).h);
  const TONE = { 'komplet-pakken': 'sand', 'all-day-facial': 'mint' };

  function cardHtml(p, i) {
    const cat = catOf(p);
    if (p.bundle) {
      const n = (p.contains || []).length;
      return `<li class="deals-item deals-item--set" data-id="${p.id}" data-cat="${cat}" data-h="${tallOf(p).toFixed(4)}" data-tone="${TONE[p.id] || 'sand'}" style="--ri:${i}">
        <article class="deals-card deals-card--set" aria-labelledby="deals-n-${p.id}">
          <div class="deals-card__stage" data-stage>
            <span class="deals-ground" aria-hidden="true"><i class="deals-win"></i><i class="deals-bloom"></i></span>
            ${lineHtml(p)}${sale(p)}
            ${quick(p)}
          </div>
          <div class="deals-card__body deals-set__body">
            <div class="deals-set__intro">
              <p class="deals-card__eyebrow">Sampakke · ${n} produkter</p>
              <h3 class="deals-card__name deals-card__name--set" id="deals-n-${p.id}"><a class="deals-card__link" href="${hrefOf(p)}">${esc(p.name)}</a></h3>
              <p class="deals-card__claim deals-card__claim--set">${nb(esc(p.claim))}</p>
              ${sumHtml(p)}
            </div>
            <div class="deals-set__side">
              ${perksHtml(p)}
              <div class="deals-card__buy">${lessHtml(p)}${priceHtml(p, true)}${addHtml(p)}</div>
            </div>
          </div>
        </article>
      </li>`;
    }
    const eyebrow = [eyebrowOf(p), p.size].filter(Boolean).join(' · ');
    return `<li class="deals-item" data-id="${p.id}" data-cat="${cat}" data-h="${tallOf(p).toFixed(4)}" style="--ri:${i};--own-h:${tallOf(p).toFixed(4)}">
      <article class="deals-card" aria-labelledby="deals-n-${p.id}">
        <div class="deals-card__stage" data-stage>
          <span class="deals-ground" aria-hidden="true"><i class="deals-win"></i><i class="deals-bloom"></i></span>
          ${lineHtml(p)}${sale(p)}${quick(p)}${stageBtn(p)}
        </div>
        <div class="deals-card__body">
          <p class="deals-card__eyebrow">${esc(eyebrow)}</p>
          <h3 class="deals-card__name" id="deals-n-${p.id}"><a class="deals-card__link" href="${hrefOf(p)}">${esc(p.name)}</a></h3>
          <p class="deals-card__claim"><span class="deals-claim-l">${keep(CLAIM_S[p.id] || p.claim)}</span>${CLAIM_XS[p.id] ? `<span class="deals-claim-xs">${nb(esc(CLAIM_XS[p.id]))}</span>` : ''}</p>
          <p class="deals-card__meta">Vegansk · uden syntetisk parfume</p>
          <div class="deals-card__buy">${priceHtml(p)}${addHtml(p)}</div>
        </div>
      </article>
    </li>`;
  }
  const gift = ctx.byId[ctx.campaign.giftId];
  const giftName = gift ? gift.name : 'CBD Lip Balm';
  const giftImg = gift && gift.img ? ctx.asset(gift.img) : '';
  // The gift stands on the same floor as every pack in the grid – same contact shadow, same window light, same scale.
  // A real Lip Balm packshot in data.js (img) takes over automatically; until then a studio render of the 6 ml stick
  // (lip-balm.js) stands in – openly captioned "illustration" in the tag's footer, never passed off as a photo.
  const lipShot = giftImg ? { src: gift.img, box: [1000, 1000, 0, 0, 1000, 1000], h: 0.32 } : LIP_SHOT;
  const lipHtml = `<div class="deals-line deals-line--gift" style="--lw:${lineW([lipShot]).toFixed(4)}">${prodHtml(lipShot, giftImg || LIP_SHOT.url, '')}</div>`;
  const giftHtml = `<li class="deals-item deals-item--gift" data-cat="gift" style="--ri:${items.length}">
    <aside class="deals-gift nc-grain" aria-labelledby="deals-gift-t">
      <span class="deals-gift__glow" aria-hidden="true"></span>
      <div class="deals-gift__in">
        <div class="deals-gift__head">
          <p class="deals-gift__eyebrow">Black Week-gave</p>
          <h3 class="deals-gift__title" id="deals-gift-t">${esc(giftName)} med i købet</h3>
        </div>
        <div class="deals-gift__art has-pack" aria-hidden="true">
          <!-- the gift stands on the row's floor line in a warm pool of light; its value tag hangs in front of it on a sand
               thread that fades up into the night -->
          <span class="deals-gift__pack">${lipHtml}</span>
          <span class="deals-tag">
            <svg class="deals-tag__string" viewBox="0 0 40 60" preserveAspectRatio="none"><defs><linearGradient id="deals-thread-fade" x1="0" y1="0" x2="0" y2="1"><stop offset=".55" stop-color="currentColor" stop-opacity="0"/><stop offset="1" stop-color="currentColor"/></linearGradient></defs><path d="M20 0 C 21 18, 26 30, 20 60" stroke="url(#deals-thread-fade)"/></svg>
            <span class="deals-tag__card">
              <span class="deals-tag__hole"></span>
              <span class="deals-tag__k">Værdi</span>
              <span class="deals-tag__v">${kr(ctx.campaign.giftValue)}</span>
              <span class="deals-tag__n">Gave · 6 ml${giftImg ? '' : '<span class="deals-tag__illu">illustration</span>'}</span>
            </span>
          </span>
        </div>
        <p class="deals-gift__copy">Gratis<span class="deals-gift__copy-x">, når du handler for</span> over\u00a0${kr(giftAt)}</p>
        <div class="deals-gift__meter">
          <div class="deals-gift__track" role="progressbar" aria-label="Fremskridt mod gratis ${esc(giftName)}" aria-valuemin="0" aria-valuemax="${giftAt}" aria-valuenow="0" aria-valuetext="0 kr. af ${giftAt} kr.">
            <span class="deals-gift__fill"></span>
            <span class="deals-gift__tick" style="--at:${(shipAt / giftAt * 100).toFixed(2)}%"></span>
            <span class="deals-gift__tick deals-gift__tick--end" style="--at:100%"></span>
          </div>
          <div class="deals-gift__labels" aria-hidden="true">
            <span style="--at:${(shipAt / giftAt * 100).toFixed(2)}%"><span class="deals-gift__lw">Fri fragt</span><span class="deals-gift__ln">${kr(shipAt)}</span></span>
            <span class="deals-gift__lend"><span class="deals-gift__lw">Gave</span><span class="deals-gift__ln">${kr(giftAt)}</span></span>
          </div>
        </div>
        <p class="deals-gift__status" data-gift-status></p>
        <button class="nc-btn nc-btn--outline-light deals-gift__cta" type="button" data-gift-cta><span class="deals-gift__cta-l">Se Komplet Pakken</span><span class="deals-gift__cta-s">Se pakken<span class="nc-sr"> – Komplet Pakken</span></span>${ICON.pil}</button>
      </div>
    </aside>
  </li>`;
  grid.innerHTML = items.map(cardHtml).join('') + giftHtml;
  // reveal the grid as ONE composition (staggered), as soon as its top edge enters the viewport
  grid.classList.add('deals-rv');
  // the head reveals with the section (own observer – not the page-wide one – so the head and grid arrive as one piece)
  const heads = $$('.deals-head [data-reveal]');
  heads.forEach((el) => { el.removeAttribute('data-reveal'); el.classList.add('deals-hd'); });
  const revealHead = () => heads.forEach((el) => el.classList.add('is-in'));
  let revealAt = 0;
  const revealAll = () => { revealHead(); grid.classList.add('is-in'); revealAt = performance.now(); };
  if (RM) { revealHead(); grid.classList.add('is-in'); }
  else {
    const ioH = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { revealHead(); ioH.disconnect(); } }, { rootMargin: '0px 0px -4% 0px' });
    ioH.observe($('.deals-head'));
    const io = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { revealAll(); io.disconnect(); } }, { rootMargin: '0px 0px -6% 0px' });
    io.observe(grid);
    // IntersectionObserver only reports when the page renders a frame; while another part of the page starves the frame
    // loop (a heavy WebGL upload, a slow device), a timer still notices the grid has arrived, so it never stays blank
    const poll = setInterval(() => {
      if (grid.classList.contains('is-in')) { clearInterval(poll); return; }
      const r = grid.getBoundingClientRect(), hr = $('.deals-head').getBoundingClientRect();
      if (hr.top < innerHeight * 0.96 && hr.bottom > 0) revealHead();
      if (r.top < innerHeight * 0.94 && r.bottom > 0) { revealAll(); io.disconnect(); ioH.disconnect(); clearInterval(poll); }
    }, 300);
  }
  const foot = $('.deals-foot');
  if (foot) { foot.removeAttribute('data-reveal'); }

  const counts = { all: items.length, face: 0, body: 0, sets: 0 };
  items.forEach((p) => counts[catOf(p)]++);
  $$('[data-count]').forEach((el) => { el.textContent = counts[el.dataset.count]; });

  // ------------------------------------------------------------------ shelf light: a slow specular band passes along the packs
  // ONCE, when the grid arrives (row by row, left to right). After that the light only moves when the shopper does:
  // it follows the cursor on a hovered card, and on touch it is tied to the scroll. Nothing repeats on its own.
  function shelfLight(delay = 0) {
    if (RM || TOUCH) return;
    const cards = lis().filter((li) => !li.hidden && li !== giftLi).map((li) => $('.deals-card', li)).filter((c) => c && !(tilt.get(c) || {}).th);
    if (!cards.length) return;
    const tops = cards.map((c) => c.getBoundingClientRect().top);
    const top0 = Math.min(...tops);
    cards.forEach((c) => {
      const r = c.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return; // only what can be seen
      const order = (r.top - top0) / 260 + r.left / 360; // left-to-right, row by row
      setTimeout(() => {
        if ((tilt.get(c) || {}).th) return;
        c.classList.remove('is-sweep'); void c.offsetWidth; c.classList.add('is-sweep');
      }, delay + order * 140);
    });
  }
  // each card's light passes once, the first time its stage is well in view (after the grid's own fade-in)
  if (!RM && !TOUCH) {
    const swept = new WeakSet();
    const ioS = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      const c = e.target.closest('.deals-card'); ioS.unobserve(e.target);
      if (!c || swept.has(c)) return; swept.add(c);
      const wait = Math.max(0, 760 - (performance.now() - (revealAt || performance.now()))) + (e.boundingClientRect.left / innerWidth) * 480;
      setTimeout(() => { if ((tilt.get(c) || {}).th) return; c.classList.remove('is-sweep'); void c.offsetWidth; c.classList.add('is-sweep'); }, wait);
    }), { threshold: 0.6 });
    $$('[data-stage]', grid).forEach((st) => ioS.observe(st));
  }
  grid.addEventListener('animationend', (e) => { if (e.animationName === 'deals-sweep') e.target.closest('.deals-card')?.classList.remove('is-sweep'); });

  // ------------------------------------------------------------------ gift progress (follows the cart)
  const gFill = $('.deals-gift__fill'), gTrack = $('.deals-gift__track'), gStatus = $('[data-gift-status]'), gTile = $('.deals-gift');
  const kp = ctx.byId['komplet-pakken'];
  // the gift tag: one damped pendulum swing (amplitude decays ~45 % per half-period), then it hangs still
  const tag = $('.deals-tag');
  let swingA = null;
  function swing(amp = 1) {
    if (RM || !tag) return;
    if (swingA && swingA.playState === 'running') return;
    const k = [1.6, -1.1, 0.62, -0.3, 0.1, 0];
    swingA = tag.animate(k.map((d, i) => ({ transform: `rotate(${(d * amp).toFixed(3)}deg)`, offset: [0, .18, .38, .58, .78, 1][i] })), { duration: 4200, easing: 'cubic-bezier(.33, 0, .3, 1)' });
  }
  if (FINE) gTile.addEventListener('pointerenter', () => swing(0.8));
  function giftRender() {
    const sub = store.subtotal();
    gFill.style.setProperty('--p', clamp(sub / giftAt, 0, 1).toFixed(4));
    gTrack.setAttribute('aria-valuenow', String(Math.min(sub, giftAt)));
    gTrack.setAttribute('aria-valuetext', `${Math.min(sub, giftAt)} kr. af ${giftAt} kr.`);
    gTile.classList.toggle('is-ship', sub >= shipAt);
    if (sub >= giftAt && !gTile.classList.contains('is-done')) swing(1.4);
    gTile.classList.toggle('is-done', sub >= giftAt);
    gTile.classList.toggle('is-empty', sub <= 0);
    let t;
    // empty cart: the reason behind the tile's one action (the Komplet Pakken alone unlocks the gift)
    if (sub <= 0) t = kp && kp.price >= giftAt ? `<b>${esc(kp.name)}</b> (${kr(kp.price)}) udløser gaven\u00a0alene.` : `Fri fragt allerede fra ${kr(shipAt)}.`;
    else if (sub < shipAt) t = `Du mangler <b>${kr(shipAt - sub)}</b> til fri fragt og <b>${kr(giftAt - sub)}</b> til din gave.`;
    else if (sub < giftAt) t = `Fri fragt er din. Du mangler <b>${kr(giftAt - sub)}</b> til din gave.`;
    else t = `<b>Din ${esc(giftName)} følger\u00a0med.</b> Fri fragt er også\u00a0din.`;
    gStatus.innerHTML = t;
  }
  giftRender();
  store.on((type) => { if (type === 'cart:add' || type === 'cart:change') giftRender(); });
  // the gift tile's one action: bring the Komplet Pakken card (899 kr. ≥ 699 kr. – it unlocks the gift) into view and focus it
  $('[data-gift-cta]').addEventListener('click', () => {
    const li = $('.deals-item[data-id="komplet-pakken"]', grid); if (!li) return;
    if (li.hidden) chips.find((c) => c.dataset.filter === 'all')?.click();
    const card = $('.deals-card', li), link = $('.deals-card__link', li);
    card.scrollIntoView({ behavior: RM ? 'auto' : 'smooth', block: 'center' });
    setTimeout(() => {
      link.focus({ preventScroll: true });
      card.classList.remove('is-spot'); void card.offsetWidth; card.classList.add('is-spot');
      if (!RM) { card.classList.remove('is-sweep'); void card.offsetWidth; card.classList.add('is-sweep'); }
    }, RM ? 0 : 650);
  });

  // ------------------------------------------------------------------ filter: chips, sliding ink, FLIP
  const bar = $('.deals-filter'), ink = $('.deals-filter__ink');
  const chips = $$('.deals-chip');
  let current = 'all';
  function moveInk(chip, snap) {
    const x = chip.offsetLeft, w = chip.offsetWidth;
    ink.style.transition = snap || RM ? 'none' : '';
    ink.style.width = `${w}px`; ink.style.transform = `translateX(${x}px)`;
    if (snap) { void ink.offsetWidth; ink.style.transition = ''; }
    ink.classList.add('is-on');
  }
  const pressed = () => chips.find((c) => c.getAttribute('aria-pressed') === 'true') || chips[0];
  requestAnimationFrame(() => moveInk(pressed(), true));
  document.fonts && document.fonts.ready.then(() => moveInk(pressed(), true));
  // phone: the chip row scrolls sideways when it does not fit – fade the edge where there is more (like the theme's rails)
  const railEdges = () => {
    const more = bar.scrollLeft + bar.clientWidth < bar.scrollWidth - 2, before = bar.scrollLeft > 2;
    bar.classList.toggle('is-more', more); bar.classList.toggle('is-before', before);
  };
  bar.addEventListener('scroll', railEdges, { passive: true });
  new ResizeObserver(() => { moveInk(pressed(), true); railEdges(); }).observe(bar);

  const lis = () => $$('.deals-item', grid);
  const giftLi = $('.deals-item--gift', grid);
  const cols = () => getComputedStyle(grid).gridTemplateColumns.split(' ').filter(Boolean).length || 1;
  const spanOf = (li) => (li.classList.contains('deals-item--set') ? Math.min(2, cols()) : 1);
  // meter labels: the end label is flush right with the track's end (its knob sits there); the start label is centred
  // on its own knob. Only where a narrow tile cannot hold both centred does the start label fall back to ending flush
  // with its knob's outer edge (a ruler mark), so the two never run together and nothing leaves the content box.
  function placeGiftLabels() {
    const lab = $('.deals-gift__labels'); if (!lab || !gTrack) return;
    const tw = gTrack.clientWidth; if (!tw) return;
    const st = lab.children[0], en = $('.deals-gift__lend', lab);
    const ew = en.offsetWidth, sw = st.offsetWidth, k = (shipAt / giftAt) * tw;
    en.style.left = `${(tw - ew).toFixed(1)}px`;
    const centred = k - sw / 2;
    const fits = centred >= 0 && centred + sw <= tw - ew - 10;
    st.classList.toggle('is-c', fits);
    st.style.left = `${(fits ? centred : clamp(k + 6 - sw, 0, tw - ew - 10 - sw)).toFixed(1)}px`;
  }
  // the packaging thread: one hairline diagonal that comes in from the section's top-right edge and runs in behind the
  // filter pill (it ends exactly where the pill's right shoulder starts) – tied to the composition, never floating
  const thread = $('.deals-thread');
  function placeThread() {
    if (!thread) return;
    if (!bar.offsetWidth || innerWidth <= 760) { thread.style.display = 'none'; return; }
    thread.style.display = '';
    // layout offsets (not client rects): the pill may still be mid-reveal (translated) when this runs
    let x = 0, y = 0;
    for (let el = bar; el && el !== root; el = el.offsetParent) { x += el.offsetLeft; y += el.offsetTop; }
    const W = root.clientWidth, h = bar.offsetHeight;
    const x1 = x + bar.offsetWidth - h * 0.5, y1 = y + 0.5; // the pill's top edge, where its right shoulder begins
    const ang = 33 * Math.PI / 180, x0 = W + 2, y0 = y1 - (x0 - x1) * Math.tan(ang);
    thread.setAttribute('viewBox', `0 0 ${W} ${(y1 + 2).toFixed(0)}`);
    thread.style.height = `${(y1 + 2).toFixed(0)}px`;
    thread.innerHTML = `<line x1="${x0.toFixed(1)}" y1="${y0.toFixed(1)}" x2="${x1.toFixed(1)}" y2="${y1.toFixed(1)}"/>`;
  }
  function placeGiftFloor(row) {
    const pack = $('.deals-gift__pack', giftLi), art = $('.deals-gift__art', giftLi);
    const mate = row.find((li) => li !== giftLi && !li.classList.contains('deals-item--set')) || row.find((li) => li !== giftLi);
    if (!pack || !art) return;
    if (!mate) { giftLi.style.removeProperty('--gfl'); fitTag(); return; } // alone on its row (a full-width banner): its own floor
    // the line's bottom edge IS the floor line (contact shadows are drawn on it); both measured from the li's own top
    // layout offsets, not client rects: mid-reveal the two tiles are translated by different amounts
    const offY = (el, anc) => { let y = 0; for (let e = el; e && e !== anc; e = e.offsetParent) y += e.offsetTop; return y; };
    const line = $('.deals-card .deals-line', mate);
    const floorY = offY(line, mate) + line.offsetHeight;
    // (never closer than 14px to the art's bottom edge: if a row ever got too short, alignment yields before overlap)
    giftLi.style.setProperty('--gfl', `${Math.max(14, Math.round(offY(art, giftLi) + art.offsetHeight - floorY))}px`);
    fitTag();
  }
  // the tag hangs over the stick's shoulder – unless that would push it out of the art (a short row): then it hangs as
  // low as the art allows and simply covers a little more of the stick
  function fitTag() {
    const tg = $('.deals-tag', giftLi), art = $('.deals-gift__art', giftLi); if (!tg || !art) return;
    tg.style.bottom = '';
    if (tg.offsetTop < 6) tg.style.bottom = `${Math.max(0, art.clientHeight - tg.offsetHeight - 6)}px`;
  }
  function layoutGift(key = current) {
    const c = cols();
    const shown = lis().filter((li) => li !== giftLi && (key === 'all' || li.dataset.cat === key));
    const used = shown.reduce((s, li) => s + spanOf(li), 0);
    const span = (c - (used % c)) % c || c;
    giftLi.style.gridColumn = `span ${span}`;
    giftLi.dataset.span = span;
    giftLi.classList.toggle('is-wide', span >= 2);
    return span;
  }
  // one truthful scale, rows sized to their content: --dl-u (px per unit) comes from the column width; each row's stage
  // height = its tallest pack + head-room (+ a label floor when a Sampakke line-up is in the row). Every pack in a row
  // stands on the same floor line, and no single pack is enlarged to fill its tile.
  function fitRows() {
    const c = cols();
    const gap = parseFloat(getComputedStyle(grid).columnGap) || 0;
    const colW = (grid.clientWidth - gap * (c - 1)) / c;
    grid.style.setProperty('--dl-u', `${((innerWidth <= 760 ? K_UNIT_PHONE : K_UNIT) * colW).toFixed(2)}px`);
    const rows = new Map();
    lis().filter((li) => !li.hidden && !li.dataset.leaving).forEach((li) => {
      const t = Math.round(li.offsetTop);
      if (!rows.has(t)) rows.set(t, []);
      rows.get(t).push(li);
    });
    rows.forEach((row) => {
      const h = Math.max(0, ...row.map((li) => +li.dataset.h || 0));
      const set = row.some((li) => li.classList.contains('deals-item--set'));
      const gr = row.includes(giftLi);
      row.forEach((li) => { li.style.setProperty('--row-h', h.toFixed(4)); li.classList.toggle('is-setrow', set); li.classList.toggle('is-giftrow', gr); });
      // one shared name block per row: if any single's name wraps to two lines, every single in the row reserves two, so
      // stages, names and price rows all line up across the row (the stage never absorbs the difference)
      const singles = row.filter((li) => !li.classList.contains('deals-item--set') && li !== giftLi);
      singles.forEach((li) => li.removeAttribute('data-name2'));
      singles.forEach((li) => li.removeAttribute('data-claim2'));
      const wraps = new Map(singles.map((li) => { const n = $('.deals-card__name', li); return [li, !!n && n.getBoundingClientRect().height > parseFloat(getComputedStyle(n).lineHeight) * 1.5]; }));
      const two = [...wraps.values()].some(Boolean);
      singles.forEach((li) => li.toggleAttribute('data-name2', two));
      // phone: a one-line name beside a two-line one does not leave a dead gap – that card carries its longer, true claim
      // on two lines instead (the price rows still meet the card bottoms, so the row stays aligned)
      const phone = innerWidth <= 760;
      singles.forEach((li) => li.toggleAttribute('data-claim2', phone && two && !wraps.get(li)));
      // the gift stands on the row's floor line: its contact shadow lands on the same y as its neighbours'
      if (gr) placeGiftFloor(row);
    });
    placeGiftLabels(); placeThread();
  }
  layoutGift(); fitRows();
  let lastCols = cols(), lastW = grid.clientWidth;
  new ResizeObserver(() => {
    const c = cols(), w = grid.clientWidth;
    if (c !== lastCols) { lastCols = c; layoutGift(); }
    if (c !== lastCols || Math.abs(w - lastW) > 0.5) { lastW = w; fitRows(); }
  }).observe(grid);
  document.fonts && document.fonts.ready.then(fitRows);

  let running = [];
  function applyFilter(key) {
    if (key === current) return;
    current = key;
    running.forEach((a) => a.cancel()); running = [];
    grid.classList.add('is-in');
    lis().forEach((li) => { li.style.position = li.style.left = li.style.top = li.style.width = li.style.height = ''; li.classList.remove('is-leaving'); if (li.dataset.leaving) { li.hidden = true; delete li.dataset.leaving; } });
    const gRect = grid.getBoundingClientRect();
    const oldH = gRect.height;
    const first = new Map(lis().filter((li) => !li.hidden).map((li) => [li, li.getBoundingClientRect()]));
    const oldSpan = giftLi.dataset.span;
    const want = (li) => li === giftLi || key === 'all' || li.dataset.cat === key;
    const leaving = [...first.keys()].filter((li) => !want(li));
    const entering = lis().filter((li) => li.hidden && want(li));
    // leaving cards: lift out of flow at their old spot, then dissolve
    leaving.forEach((li) => {
      const r = first.get(li);
      Object.assign(li.style, { position: 'absolute', left: `${r.left - gRect.left}px`, top: `${r.top - gRect.top}px`, width: `${r.width}px`, height: `${r.height}px` });
      li.classList.add('is-leaving'); li.dataset.leaving = '1';
    });
    entering.forEach((li) => { li.hidden = false; });
    const giftSpan = String(layoutGift(key));
    fitRows();
    const newH = grid.getBoundingClientRect().height;
    if (RM) { leaving.forEach((li) => { li.hidden = true; li.style.position = ''; li.classList.remove('is-leaving'); delete li.dataset.leaving; }); return; }
    leaving.forEach((li) => {
      const a = li.animate([{ opacity: 1, transform: 'none', filter: 'blur(0)' }, { opacity: 0, transform: 'translateY(6px) scale(.965)', filter: 'blur(2px)' }], { duration: 300, easing: 'cubic-bezier(.4,0,.6,1)', fill: 'forwards' });
      running.push(a);
      a.onfinish = () => { li.hidden = true; Object.assign(li.style, { position: '', left: '', top: '', width: '', height: '' }); li.classList.remove('is-leaving'); delete li.dataset.leaving; a.cancel(); };
    });
    let k = 0;
    lis().filter((li) => !li.hidden && !li.dataset.leaving).forEach((li) => {
      const r1 = li.getBoundingClientRect();
      const r0 = first.get(li);
      if (li === giftLi && oldSpan !== giftSpan) {
        running.push(li.animate([{ opacity: 0, transform: 'translateY(14px)' }, { opacity: 1, transform: 'none' }], { duration: 640, delay: 260, easing: VISC, fill: 'backwards' }));
      } else if (r0) {
        const dx = r0.left - r1.left, dy = r0.top - r1.top;
        if (Math.abs(dx) + Math.abs(dy) > 0.5) running.push(li.animate([{ transform: `translate(${dx}px, ${dy}px)` }, { transform: 'none' }], { duration: 760, easing: VISC }));
      } else {
        running.push(li.animate([{ opacity: 0, transform: 'translateY(18px) scale(.985)' }, { opacity: 1, transform: 'none' }], { duration: 720, delay: 160 + k++ * 55, easing: VISC, fill: 'backwards' }));
      }
    });
    if (Math.abs(newH - oldH) > 1) running.push(grid.animate([{ height: `${oldH}px` }, { height: `${newH}px` }], { duration: 640, easing: VISC }));
    setTimeout(() => shelfLight(0), 520);
  }
  chips.forEach((chip) => chip.addEventListener('click', () => {
    chips.forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
    moveInk(chip);
    if (bar.scrollWidth > bar.clientWidth) bar.scrollTo({ left: chip.offsetLeft - (bar.clientWidth - chip.offsetWidth) / 2, behavior: RM ? 'auto' : 'smooth' }); // pressed chip always in view
    applyFilter(chip.dataset.filter);
    const n = counts[chip.dataset.filter];
    live.textContent = `Viser ${n} ${n === 1 ? 'produkt' : 'produkter'}`;
  }));

  bar.addEventListener('keydown', (e) => {
    const i = chips.indexOf(document.activeElement); if (i < 0) return;
    const j = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : e.key === 'Home' ? 0 : e.key === 'End' ? chips.length - 1 : -1;
    if (j < 0 && e.key !== 'ArrowLeft') return;
    e.preventDefault(); chips[(j + chips.length) % chips.length].focus();
  });

  // ------------------------------------------------------------------ the light, written straight to the compositor
  // The moving light never travels through inherited custom properties (a changed custom property makes the browser
  // repaint the whole card): each beam and the window on the sweep get their own translateX, computed here from the
  // light's position along the line (lx, 0–1) and on the stage (sx, 0–1). Painted once, only ever moved.
  const lightGeo = new WeakMap();
  function geoOf(el) {
    let g = lightGeo.get(el);
    if (g) return g;
    const ri = +(getComputedStyle(el.closest('.deals-item') || el).getPropertyValue('--ri') || 0);
    g = {
      packs: $$('.deals-prod[data-lg]', el).map((pk) => {
        const [gx0, gw, px0, pw, cy0, cy1] = pk.dataset.lg.split(',').map(Number);
        return { gx0, gw, px0, pw, cy0, cy1, sheen: $('.deals-gloss--sheen > .deals-beam', pk), glass: $$('.deals-gloss--glint > .deals-beam, .deals-gloss--amber > .deals-beam', pk) };
      }),
      win: $('.deals-win', el), bloom: $('.deals-bloom', el), wo: Math.sin(ri * 1.7 + 1) * 10, last: '',
    };
    lightGeo.set(el, g);
    return g;
  }
  // each layer is --f × its parent wide (deals.css: sheen .7, glass 1.4, window 1.6, bloom .8), centred on the light
  const tx = (pos, f) => `translateX(${(pos / f - 50).toFixed(3)}%)`;
  function light(el, lx, sx) {
    const g = geoOf(el);
    const key = `${lx.toFixed(4)}|${sx.toFixed(4)}`;
    if (key === g.last) return;
    g.last = key;
    g.packs.forEach((p) => {
      if (p.sheen) p.sheen.style.transform = tx(p.gx0 + (lx - p.px0) * 100 / p.pw * p.gw, 0.7);
      const gp = p.cy0 + (p.cy1 - p.cy0) * (0.08 + clamp(lx, 0, 1) * 0.84);
      p.glass.forEach((b) => { b.style.transform = tx(gp, 1.4); });
    });
    if (g.win) g.win.style.transform = tx(sx * 100 + g.wo, 1.6);
    if (g.bloom) g.bloom.style.transform = tx(sx * 100, 0.8);
  }

  // ------------------------------------------------------------------ damped tilt + light that follows the cursor
  // Critically damped (exponential) – the card leans like a pane resting in oil; the pack parallaxes a few px
  // against the card, its contact shadow counter-moves, and a specular band masked to the packshot tracks the cursor.
  const tilt = new Map();
  let tRaf = 0, tLast = 0;
  const DRIFT = 0.18, DRIFT_HZ = 0.12; // while a card is hovered the light keeps drifting ±18 % – it reads even under a still cursor
  function tStep(now) {
    const dt = Math.min(0.05, (now - tLast) / 1000); tLast = now;
    const f = 1 - Math.exp(-dt * 7), fh = 1 - Math.exp(-dt * 6), fl = 1 - Math.exp(-dt * 4.2);
    const ts = now / 1000;
    tilt.forEach((s, card) => {
      // exponential approach, snapped once within a hair so a resting card is pixel-stable (no sub-pixel creep)
      const ease = (v, t, k) => (Math.abs(t - v) < 0.0015 ? t : v + (t - v) * k);
      s.rx = ease(s.rx, s.trx, f); s.ry = ease(s.ry, s.try, f); s.h = ease(s.h, s.th, fh);
      s.mx = ease(s.mx, s.tmx, fl); s.sx = ease(s.sx, s.tsx, fl);
      const d = Math.sin((ts - s.t0) * Math.PI * 2 * DRIFT_HZ) * DRIFT * s.dk * s.h; // slow, oil-like drift around the cursor
      // while moving: full precision; once the lean has settled the angles snap to 0.1° and the lift to whole px,
      // so Chrome re-rasterises the resting card crisp (no soft, sub-pixel packshot under a still cursor)
      // the card itself stays flat and only lifts by whole pixels, so price, ledger and button never re-rasterise soft;
      // the lean happens on the stage's pack layer alone (CSS reads --rx/--ry while .is-tilt is on)
      card.style.transform = `translateY(${Math.round(-s.h * 4)}px)`;
      card.classList.add('is-tilt');
      card.style.setProperty('--h', s.h.toFixed(4));
      // the cursor's light and the window's ambient light are blended by the lift: entering, the reflection glides from
      // the window's path to the hand; leaving, it glides back onto the path – never a jump
      const a = RM ? 0.32 : ambLx(card, now), w = s.h;
      const lxd = a * (1 - w) + (s.mx + d) * w, sxd = (0.18 + a * 0.64) * (1 - w) + (s.sx + d * 0.55) * w;
      light(card, lxd, sxd);
      card.style.setProperty('--deals-lx', `${(lxd * 100).toFixed(2)}%`); // the contact shadow's lean (only under the hand)
      card.style.setProperty('--ry', s.ry.toFixed(3));
      card.style.setProperty('--rx', s.rx.toFixed(3));
      // the flat faces (cartons, label panels) catch the window as a broad plane of light that grows with the lean
      card.style.setProperty('--pl', (s.h * (0.16 + Math.min(1, Math.abs(s.ry) / 5) * 0.3)).toFixed(3));
      card.style.setProperty('--pl-ang', s.ry >= 0 ? '90deg' : '270deg');
      const settled = Math.abs(s.trx - s.rx) + Math.abs(s.try - s.ry) + Math.abs(s.th - s.h) < 0.002;
      if (settled && s.th === 0) { card.style.transform = ''; card.classList.remove('is-tilt'); ['--h', '--ry', '--rx', '--pl', '--pl-ang'].forEach((k) => card.style.removeProperty(k)); tilt.delete(card); }
    });
    tRaf = tilt.size ? requestAnimationFrame(tStep) : 0;
  }
  const tKick = () => { if (!tRaf) { tLast = performance.now(); tRaf = requestAnimationFrame(tStep); } };
  if (FINE && !TOUCH && !RM) {
    grid.addEventListener('pointermove', (e) => {
      const card = e.target.closest('.deals-card'); if (!card || e.pointerType !== 'mouse') return;
      const r = card.getBoundingClientRect();
      const nx = clamp((e.clientX - r.left) / r.width, 0, 1), ny = clamp((e.clientY - r.top) / r.height, 0, 1);
      // the highlight lives in line coordinates (0 = left edge of the first pack, 1 = right edge of the last); the card's
      // width maps onto the line, so wherever the pointer is the light is on a pack – on a Sampakke it walks the shelf
      // bottle by bottle. The window light on the ground follows in stage coordinates.
      const lx = -0.08 + nx * 1.16;
      const st = card.querySelector('[data-stage]').getBoundingClientRect();
      const sx = clamp((e.clientX - st.left) / st.width, 0, 1);
      let s = tilt.get(card);
      if (!s || s.th === 0) {
        // entering: seed the light where the pointer is (no slide in from a stale spot) and stop a running shelf pass
        card.classList.remove('is-sweep');
        if (!s) { s = { rx: 0, ry: 0, h: 0, dk: 1 }; tilt.set(card, s); }
        Object.assign(s, { mx: lx, sx, t0: performance.now() / 1000 });
      }
      const k = card.classList.contains('deals-card--set') ? 0.5 : 1; // wide cards tilt less
      s.dk = k * k; // …and the light wanders less along a long shelf
      // ±6° / ±4° on a single pack (half on a Sampakke line-up): the object visibly turns in the light, the copy stays still
      s.try = (nx - 0.5) * 12 * k; s.trx = -(ny - 0.5) * 8 * k; s.th = 1; s.tmx = lx; s.tsx = sx;
      tKick();
    });
    grid.addEventListener('pointerout', (e) => {
      const card = e.target.closest('.deals-card'); if (!card || card.contains(e.relatedTarget)) return;
      const s = tilt.get(card); if (!s) return;
      s.trx = 0; s.try = 0; s.th = 0; tKick(); // the light glides home onto the window's ambient path
    });
  }

  // ------------------------------------------------------------------ the window light, always alive
  // One slow evening window drifts along the shelf: its reflection glides across every pack (glint on the glass, a soft
  // brightening on the labels, the contact shadow leaning away from it), card after card with a small phase lag, like
  // light moving along a row of real bottles. It travels 20 % → 80 % of each body and back in 10 s, sine-eased – calm,
  // but always visibly on its way (≈ 5 s per crossing). A hovered card
  // hands the light to the cursor; on touch the scroll adds to the drift, so the light also travels as the shopper scrolls.
  // Runs only while the grid is on screen and the tab is visible; writes only to the cards in view.
  const AMB_T = 10, AMB_A = 0.3;
  const ambOrder = new Map();
  const ambLx = (el, now) => {
    const k = ambOrder.get(el) || 0;
    const sc = TOUCH ? scrollY / 520 : 0;
    return 0.5 + AMB_A * Math.sin(((now / 1000) / AMB_T) * Math.PI * 2 - k * 0.62 + sc);
  };
  if (!RM) {
    let aRaf = 0, gridIn = false;
    const vis = new Set();
    const ioA = new IntersectionObserver((es) => es.forEach((e) => { const el = e.target; e.isIntersecting ? vis.add(el) : vis.delete(el); }), { rootMargin: '60px 0px' });
    const watch = () => {
      ambOrder.clear();
      [...lis().filter((li) => !li.hidden).map((li) => $('.deals-card, .deals-gift', li))].filter(Boolean).forEach((el, i) => { ambOrder.set(el, i); ioA.observe(el); });
    };
    watch();
    chips.forEach((ch) => ch.addEventListener('click', () => setTimeout(watch, 40)));
    // the window moves ≈ 10 px a second on a bottle, so 20 steps a second are already sub-pixel smooth – the loop leaves
    // the other frames to the compositor (and the battery) instead of recompositing every light at 60 Hz
    let aLast = 0;
    const frame = (now) => {
      aRaf = 0;
      if (!gridIn || document.hidden) return;
      if (now - aLast < 48) { aRaf = requestAnimationFrame(frame); return; }
      aLast = now;
      const vh = innerHeight;
      const els = [...vis].filter((el) => !tilt.has(el)); // a hovered card's light is blended with the cursor by the tilt loop
      const rects = TOUCH ? els.map((el) => el.getBoundingClientRect()) : null; // all reads before any write
      els.forEach((el, i) => {
        const lx = ambLx(el, now);
        light(el, lx, 0.18 + lx * 0.64);
        if (rects) {
          // on a phone the light is brightest as a card passes the middle of the screen
          const r = rects[i], p = clamp((vh - r.top) / (vh + r.height), 0, 1);
          // quantised: the strength only changes in visible steps, so the card is not repainted on every scrolled pixel
          const gq = (Math.round((0.45 + Math.sin(p * Math.PI) * 0.4) * 20) / 20).toFixed(2);
          if (el.style.getPropertyValue('--deals-g') !== gq) el.style.setProperty('--deals-g', gq);
        }
      });
      aRaf = requestAnimationFrame(frame);
    };
    const go = () => { if (!aRaf && gridIn && !document.hidden) aRaf = requestAnimationFrame(frame); };
    new IntersectionObserver((es) => { gridIn = es.some((e) => e.isIntersecting); go(); }, { rootMargin: '80px 0px' }).observe(grid);
    document.addEventListener('visibilitychange', go);
  }

  // ------------------------------------------------------------------ add to cart: button morph + fly + trail
  const timers = new WeakMap();
  function morph(btn, e) {
    const r = btn.getBoundingClientRect();
    const x = e && e.clientX ? e.clientX - r.left : r.width / 2, y = e && e.clientY ? e.clientY - r.top : r.height / 2;
    btn.style.setProperty('--ix', `${x}px`); btn.style.setProperty('--iy', `${y}px`);
    btn.classList.remove('is-added'); void btn.offsetWidth; btn.classList.add('is-added');
    clearTimeout(timers.get(btn));
    timers.set(btn, setTimeout(() => btn.classList.remove('is-added'), 2600));
  }
  function cartTarget() {
    const vw = innerWidth;
    const cands = [...document.querySelectorAll('[data-cart]')].map((el) => el.querySelector('.hdr-cart__icon') || el)
      .map((el) => el.getBoundingClientRect()).filter((r) => r.width > 0 && r.bottom > 0 && r.top < innerHeight && r.left < vw);
    const r = cands[0];
    return r ? { x: r.left + r.width / 2, y: r.top + r.height / 2, real: true } : { x: vw - 36, y: 30, real: false };
  }
  const cub = (a, b, c, d, t) => { const u = 1 - t; return u * u * u * a + 3 * u * u * t * b + 3 * u * t * t * c + t * t * t * d; };
  const easeFly = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2) * 0.82 + (1 - Math.pow(1 - t, 3)) * 0.18;
  let trailCanvas = null, trails = [], trailRaf = 0;
  const css = getComputedStyle(root);
  const tok = (n, fb) => (css.getPropertyValue(n).trim() || fb);
  const hexA = (hex, a) => { const h = hex.replace('#', ''); const v = parseInt(h.length === 3 ? h.replace(/./g, '$&$&') : h, 16); return `rgba(${(v >> 16) & 255}, ${(v >> 8) & 255}, ${v & 255}, ${a})`; };
  const TRAIL = tok('--sage-500', '#80a097'), DROP = tok('--sand-500', '#ddbfa3');
  function ensureTrail() {
    if (trailCanvas) return;
    trailCanvas = document.createElement('canvas');
    trailCanvas.className = 'deals-trail';
    trailCanvas.setAttribute('aria-hidden', 'true');
    root.appendChild(trailCanvas);
  }
  function drawTrails(now) {
    const c = trailCanvas, d = Math.min(devicePixelRatio || 1, 2);
    if (c.width !== Math.round(innerWidth * d) || c.height !== Math.round(innerHeight * d)) { c.width = Math.round(innerWidth * d); c.height = Math.round(innerHeight * d); }
    const g = c.getContext('2d');
    g.setTransform(d, 0, 0, d, 0, 0); g.clearRect(0, 0, innerWidth, innerHeight);
    g.lineCap = 'round';
    trails = trails.filter((tr) => now - tr.end < 520 * SLOW || !tr.done);
    for (const tr of trails) {
      const pts = tr.pts; const fade = tr.done ? Math.max(0, 1 - (now - tr.end) / (520 * SLOW)) : 1;
      for (let i = 1; i < pts.length; i++) {
        const age = (now - pts[i].t) / (420 * SLOW); if (age > 1) continue;
        const a = (1 - age) * (1 - age) * fade;
        g.strokeStyle = hexA(TRAIL, (0.38 * a).toFixed(3));
        g.lineWidth = 1 + 9 * a * pts[i].s;
        g.beginPath(); g.moveTo(pts[i - 1].x, pts[i - 1].y); g.lineTo(pts[i].x, pts[i].y); g.stroke();
      }
      // tiny droplets shed along the way – oil, not sparkles
      for (const dp of tr.drops) {
        const age = (now - dp.t) / (700 * SLOW); if (age > 1 || age < 0) continue;
        g.fillStyle = hexA(DROP, (0.55 * (1 - age) * fade).toFixed(3));
        g.beginPath(); g.arc(dp.x, dp.y + age * 10, dp.r * (1 - age * 0.6), 0, Math.PI * 2); g.fill();
      }
    }
    if (trails.length) trailRaf = requestAnimationFrame(drawTrails);
    else { trailRaf = 0; g.clearRect(0, 0, innerWidth, innerHeight); }
  }
  // fly one pack; a Sampakke flies as a small caravan of its bottles (staggered, one trail)
  function fly(fromEl, done) {
    const packs = fromEl ? [...fromEl.querySelectorAll('.deals-prod__pack')] : [];
    if (RM || !packs.length) { done(); return; }
    const T = cartTarget();
    let landed = false;
    packs.forEach((pack, idx) => {
      const r = pack.getBoundingClientRect();
      if (r.width < 2) { if (idx === packs.length - 1 && !landed) { landed = true; done(); } return; }
      const clone = pack.cloneNode(true);
      clone.className = 'deals-fly';
      Object.assign(clone.style, { left: `${r.left}px`, top: `${r.top}px`, width: `${r.width}px`, height: `${r.height}px` });
      const im = clone.querySelector('img'); if (im) im.loading = 'eager';
      clone.querySelectorAll('.deals-gloss').forEach((g) => g.remove());
      root.appendChild(clone);
      const lead = idx === 0;
      const blob = lead ? Object.assign(document.createElement('span'), { className: 'deals-fly__drop' }) : null;
      if (blob) root.appendChild(blob);
      let tr = null;
      if (lead) { ensureTrail(); tr = { pts: [], drops: [], done: false, end: 0 }; trails.push(tr); if (!trailRaf) trailRaf = requestAnimationFrame(drawTrails); }
      const x0 = r.left + r.width / 2, y0 = r.top + r.height / 2;
      const dist = Math.hypot(T.x - x0, T.y - y0);
      const dur = clamp(620 + dist * 0.42, 760, 1150) * SLOW;
      const lift = Math.min(140, 40 + dist * 0.12);
      // cubic path: rise straight up first (a bubble through serum), then glide sideways into the bag
      const top = 14;
      const c1x = x0, c1y = Math.max(top, y0 - lift - Math.max(0, y0 - T.y) * 0.35);
      const c2x = x0 + (T.x - x0) * 0.62, c2y = Math.max(top, Math.min(T.y, y0) - lift * 0.55);
      const endScale = 22 / Math.max(r.width, r.height);
      const t0 = performance.now() + idx * 85 * SLOW; let nextDrop = 0.18;
      function step(now) {
        if (now < t0) { requestAnimationFrame(step); return; }
        const t = clamp((now - t0) / dur, 0, 1);
        const e = easeFly(t);
        const tg = cartTarget(); // the header may condense while we fly – track it
        const ex = T.real ? tg.x : T.x, ey = T.real ? tg.y : T.y;
        const x = cub(x0, c1x, c2x, ex, e), y = cub(y0, c1y, c2y, ey, e);
        const s = 1 + (endScale - 1) * Math.pow(e, 0.8);
        const rot = Math.sin(e * Math.PI) * -7;
        clone.style.transform = `translate(${(x - x0).toFixed(2)}px, ${(y - y0).toFixed(2)}px) scale(${s.toFixed(4)}) rotate(${rot.toFixed(2)}deg)`;
        clone.style.opacity = String(t < 0.82 ? 1 : 1 - (t - 0.82) / 0.18);
        if (blob) {
          blob.style.transform = `translate(${(x - 6).toFixed(2)}px, ${(y - 6).toFixed(2)}px) scale(${(0.4 + 0.6 * Math.sin(e * Math.PI)).toFixed(3)})`;
          blob.style.opacity = String(Math.sin(t * Math.PI) * 0.9);
        }
        if (tr) {
          tr.pts.push({ x, y, t: now, s: Math.max(0.25, s) });
          if (tr.pts.length > 60) tr.pts.shift();
          if (t > nextDrop && t < 0.8) { tr.drops.push({ x: x + (Math.random() - 0.5) * 10, y: y + (Math.random() - 0.5) * 8, r: 1.4 + Math.random() * 1.8, t: now }); nextDrop += 0.12 + Math.random() * 0.08; }
        }
        if (t >= 0.93 && idx === packs.length - 1 && !landed) { landed = true; done(); }
        if (t < 1) requestAnimationFrame(step);
        else { clone.remove(); blob && blob.remove(); if (tr) { tr.done = true; tr.end = now; } }
      }
      requestAnimationFrame(step);
    });
  }
  function add(p, btn, e, srcEl) {
    if (btn) morph(btn, e);
    let doneOnce = false;
    fly(srcEl, () => {
      if (doneOnce) return; doneOnce = true;
      store.add(p.id, 1);
      live.textContent = `${p.name} er lagt i kurven.`;
    });
  }
  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-add]');
    if (btn) { const p = ctx.byId[btn.dataset.add]; add(p, btn, e, btn.closest('.deals-card').querySelector('[data-stage]')); return; }
    const q = e.target.closest('[data-qv]');
    if (q) { openQV(ctx.byId[q.dataset.qv], q); return; }
  });

  // ------------------------------------------------------------------ quick view
  const dlg = document.createElement('dialog');
  dlg.className = 'deals-qv';
  dlg.setAttribute('aria-labelledby', 'deals-qv-title');
  root.appendChild(dlg);
  let qvReturn = null, qvP = null, closing = false;
  // in the quick view a product stands alone, so it may fill the stage: its tallest pack reaches ~62 % of the stage height
  const qvFrac = (p) => {
    const hs = p.bundle ? (p.contains || []).map((id) => BOTTLE_H[id] || 0.8) : [(SHOT[p.id] || { h: 0.8 }).h];
    return Math.min(1.05, (p.bundle ? 0.56 : 0.62) / Math.max(...hs));
  };
  function qvHtml(p) {
    const usp = `<ul class="deals-qv__usp">
      <li>${ICON.truck}Fri fragt over ${kr(ctx.campaign.freeShipping)}</li>
      <li>${ICON.back}14 dages fortrydelsesret</li>
      <li>${ICON.shield}Testet til under 0,2% THC</li>
    </ul>`;
    return `<div class="deals-qv__sheet">
      <button class="deals-qv__close" type="button" aria-label="Luk hurtig visning" data-qv-close>${ICON.close}</button>
      <div class="deals-qv__stage${p.bundle ? ' deals-qv__stage--set' : ''}"${TONE[p.id] ? ` data-tone="${TONE[p.id]}"` : ''} data-stage style="--dl-ufrac:${qvFrac(p).toFixed(4)}">
        <span class="deals-ground" aria-hidden="true"><i class="deals-win"></i><i class="deals-bloom"></i></span>
        ${lineHtml(p)}
        <span class="deals-flag deals-flag--qv" aria-hidden="true">−${p.pct}%</span>
        ${p.badge && p.bundle ? `<img class="deals-qv__badge" src="${ctx.asset(p.badge)}" alt="" width="44" height="44">` : ''}
      </div>
      <div class="deals-qv__body">
        <p class="deals-card__eyebrow">${esc(p.bundle ? `Sampakke · ${(p.contains || []).length} produkter` : (p.nickname ? `${p.nickname} · ${EYEBROW[p.id] || 'Ansigt'}` : eyebrowOf(p)))}</p>
        <h2 class="deals-qv__title" id="deals-qv-title">${esc(p.name)}</h2>
        <p class="deals-card__size">${esc(p.bundle ? (p.contains || []).map((id) => SHORT[id] || ctx.byId[id]?.name).join(' · ') : metaLine(p))}</p>
        <p class="deals-qv__claim">${esc(p.claim)}</p>
        ${p.notes ? `<p class="deals-qv__notes">${esc(p.notes)}</p>` : ''}
        ${p.bundle ? contentsHtml(p) : ''}
        <hr class="nc-dotline deals-qv__rule">
        <div class="deals-qv__buy">${p.bundle ? lessHtml(p) : ''}${priceHtml(p, true)}${addHtml(p, ' nc-btn--lg')}</div>
        <a class="deals-qv__more" href="${hrefOf(p)}">Se alt om ${esc(p.name)}${ICON.pil}</a>
        ${usp}
      </div>
    </div>`;
  }
  function openQV(p, from) {
    if (!p) return;
    qvP = p; qvReturn = from; closing = false;
    dlg.innerHTML = qvHtml(p);
    $$('img', dlg).forEach((im) => { im.loading = 'eager'; });
    dlg.showModal();
    document.documentElement.classList.add('deals-lock');
    if (!RM) {
      $('.deals-qv__sheet', dlg).animate([{ opacity: 0, transform: 'translateY(22px) scale(.985)' }, { opacity: 1, transform: 'none' }], { duration: 620, easing: VISC });
      $$('.deals-prod', dlg).forEach((el, i) => el.animate([{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'none' }], { duration: 900, delay: 90 + i * 70, easing: VISC, fill: 'backwards' }));
      const c = $('.deals-qv__stage', dlg); c.classList.add('is-sweep');
    }
    $('[data-qv-close]', dlg).focus({ preventScroll: true });
  }
  function closeQV(after) {
    if (!dlg.open || closing) return; closing = true;
    const fin = () => { dlg.close(); closing = false; document.documentElement.classList.remove('deals-lock'); if (qvReturn && !after) qvReturn.focus({ preventScroll: true }); after && after(); };
    if (RM) return fin();
    dlg.classList.add('is-closing');
    const a = $('.deals-qv__sheet', dlg).animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateY(14px) scale(.99)' }], { duration: 220, easing: 'cubic-bezier(.4,0,1,1)', fill: 'forwards' });
    a.onfinish = () => { dlg.classList.remove('is-closing'); fin(); };
  }
  dlg.addEventListener('cancel', (e) => { e.preventDefault(); closeQV(); });
  dlg.addEventListener('click', (e) => {
    if (e.target === dlg) return closeQV();
    if (e.target.closest('[data-qv-close]')) return closeQV();
    const btn = e.target.closest('[data-add]');
    if (btn && qvP) {
      const p = qvP; morph(btn, e);
      const card = grid.querySelector(`.deals-item[data-id="${p.id}"]`);
      const cardBtn = card && card.querySelector('[data-add]');
      const packs = $$('.deals-prod__pack', dlg).map((pk) => [pk, pk.getBoundingClientRect()]);
      // fly from where the quick-view packs were, once the sheet has dissolved
      setTimeout(() => closeQV(() => {
        const ghost = document.createElement('div');
        ghost.style.cssText = 'position:fixed;left:0;top:0;width:0;height:0;pointer-events:none';
        packs.forEach(([pk, r]) => {
          const c = pk.cloneNode(true);
          c.style.cssText = `position:fixed;left:${r.left}px;top:${r.top}px;width:${r.width}px;height:${r.height}px;overflow:hidden`;
          ghost.appendChild(c);
        });
        root.appendChild(ghost);
        if (cardBtn) morph(cardBtn);
        add(p, null, null, ghost);
        setTimeout(() => ghost.remove(), 40);
        if (qvReturn) qvReturn.focus({ preventScroll: true });
      }), RM ? 0 : 380);
    }
  });
}
