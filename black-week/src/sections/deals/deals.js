// DEALS – "Black Week-favoritter" product grid.
// Cards rendered from ctx.products (gift excluded) · filter chips with FLIP re-layout + sliding ink ·
// damped 3D tilt with moving light sheen · fly-to-cart arc with a soft oil trail · button morph ·
// quick view (<dialog>) · gift-progress tile that follows the cart subtotal.
// Motion language: viscous and critically damped – never springy, never bouncy.

import SKIN_OIL_DUO from './skin-oil-duo.js';

// Packshot geometry: [imgW, imgH, x0, y0, x1, y1] = opaque alpha bbox (product only, no built-in glow)
// and h = truthful relative height (tallest pack = 1). Used to centre the PRODUCT, stand it on one floor,
// and give every pack the same contact shadow.
const SHOT = {
  // Vidunder Olien: dropper + carton (composited from two real packshots, see .dev/duo.py) – matches the serum/cream compositions
  'skin-oil':       { url: SKIN_OIL_DUO,                         box: [1000, 1000, 232, 100, 769, 960],  h: 0.76 },
  'serum':          { src: 'products/hyaluron-serum.webp',    box: [800, 1200, 108, 225, 718, 1109],  h: 0.74 },
  'day-cream':      { src: 'products/day-cream.webp',         box: [1200, 1200, 345, 97, 875, 1152],  h: 0.86 },
  'night-cream':    { src: 'products/night-cream.webp',       box: [1200, 1200, 345, 96, 881, 1154],  h: 0.86 },
  'cleansing-gel':  { src: 'products/cleansing-gel-box.webp', box: [1200, 1200, 223, 64, 1034, 1120], h: 0.82 },
  'body-lotion':    { src: 'products/body-lotion.webp',       box: [800, 1200, 186, 163, 601, 1142],  h: 0.92 },
  'shampoo':        { src: 'products/shampoo.webp',           box: [1200, 1200, 455, 65, 763, 1149],  h: 1.00 },
  'komplet-pakken': { src: 'products/startpakke-plus.webp',   box: [1200, 1200, 173, 77, 1110, 1116], h: 1.00 },
  'all-day-facial': { src: 'products/all-day-facial.webp',    box: [1200, 1200, 161, 78, 1127, 1116], h: 1.00 },
};
const ORDER = ['komplet-pakken', 'skin-oil', 'serum', 'day-cream', 'night-cream', 'all-day-facial', 'cleansing-gel', 'body-lotion', 'shampoo'];
const CAT = { 'skin-oil': 'face', serum: 'face', 'day-cream': 'face', 'night-cream': 'face', 'cleansing-gel': 'face', 'body-lotion': 'body', shampoo: 'body' };
const catOf = (p) => (p.bundle ? 'sets' : CAT[p.id] || 'face');
const SHORT = { 'cleansing-gel': 'Rens', 'day-cream': 'Dag', 'night-cream': 'Nat', 'skin-oil': 'Olie' };

const ICON = {
  bag: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.6 8.25h12.8l-1.05 10.6a2 2 0 0 1-1.99 1.8H8.64a2 2 0 0 1-1.99-1.8z"/><path d="M9 10.5V7a3 3 0 0 1 6 0v3.5"/></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path class="deals-check" d="m5.5 12.6 4.1 4.1 8.9-9.4"/></svg>',
  eye: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.75 12S6.1 5.75 12 5.75 21.25 12 21.25 12 17.9 18.25 12 18.25 2.75 12 2.75 12z"/><circle cx="12" cy="12" r="2.75"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/></svg>',
  truck: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 7.5h10.5v8.5H3.5z"/><path d="M14 10.5h3.6l2.9 3v2.5H14"/><circle cx="7.25" cy="17.25" r="1.75"/><circle cx="16.75" cy="17.25" r="1.75"/></svg>',
  back: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3"/><path d="M4.25 4.5v3.25H7.5"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.75 5.25 6.5v5c0 4.2 2.9 7.4 6.75 8.75 3.85-1.35 6.75-4.55 6.75-8.75v-5z"/><path d="m9.25 12 1.95 1.95 3.75-3.9"/></svg>',
};

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));

export default function init(root, ctx) {
  const { fmt, store } = ctx;
  const kr = (n) => fmt.kr(n).replace(/ (?=kr\.)/, '\u00a0'); // never break between amount and kr.
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
  const items = ORDER.map((id) => ctx.byId[id]).filter((p) => p && !p.gift && SHOT[p.id]);
  // any further products added to data.js (non-gift, with an image) still show up, after the curated order
  ctx.products.forEach((p) => { if (!p.gift && p.img && !items.includes(p) && !/drops|lubricant/.test(p.img)) items.push(p); });

  // ------------------------------------------------------------------ markup
  function packHtml(p, cls = '') {
    const s = SHOT[p.id];
    const src = s && s.url ? s.url : ctx.asset(s ? s.src : p.img);
    if (!s) return `<div class="deals-prod ${cls}" style="--ar:.8;--ph:.8"><span class="deals-prod__shadow"></span><span class="deals-prod__pack"><img src="${src}" alt="" loading="lazy" decoding="async" style="width:100%;left:0;top:0"></span></div>`;
    const [W, H, x0, y0, x1, y1] = s.box; const bw = x1 - x0, bh = y1 - y0;
    const st = `width:${(W / bw * 100).toFixed(3)}%;left:${(-x0 / bw * 100).toFixed(3)}%;top:${(-y0 / bh * 100).toFixed(3)}%`;
    return `<div class="deals-prod${p.bundle ? ' deals-prod--set' : ''} ${cls}" style="--ar:${(bw / bh).toFixed(4)};--ph:${s.h}">
      <span class="deals-prod__shadow" aria-hidden="true"></span>
      <span class="deals-prod__pack"><img src="${src}" alt="${esc(p.name)}${p.size && !p.bundle ? ', ' + esc(p.size) : ''}" width="${W}" height="${H}" draggable="false" style="${st}"></span>
    </div>`;
  }
  const priceHtml = (p, big = false) => `
    <div class="deals-price${big ? ' deals-price--big' : ''}">
      <span class="deals-price__now"><span class="nc-sr">Black Week-pris </span>${kr(p.price)}</span>
      <span class="deals-price__save">Spar ${kr(p.save)}</span>
      <span class="deals-price__was">Førpris ${kr(p.price0)}</span>
    </div>`;
  const addHtml = (p, extra = '') => `
    <button class="nc-btn deals-add${extra}" type="button" data-add="${p.id}" aria-label="Læg ${esc(p.name)} i kurv">
      <span class="deals-add__ink" aria-hidden="true"></span>
      <span class="deals-add__a" aria-hidden="true">${ICON.bag}<span>Læg i kurv</span></span>
      <span class="deals-add__b" aria-hidden="true">${ICON.check}<span>Lagt i kurv</span></span>
    </button>`;
  const metaLine = (p) => [p.size, p.strength].filter(Boolean).join(' · ');
  const contentsHtml = (p) => {
    const rows = (p.contains || []).map((id) => ctx.byId[id]).filter(Boolean);
    if (!rows.length) return '';
    return `<dl class="deals-set__list">
      ${rows.map((r) => `<div class="deals-set__row"><dt>${esc(r.name)}</dt><dd>${kr(r.price0)}</dd></div>`).join('')}
      <div class="deals-set__row deals-set__row--sum"><dt>Værdi ved løskøb</dt><dd>${kr(p.valueLoose)}</dd></div>
    </dl>`;
  };

  function cardHtml(p, i) {
    const cat = catOf(p);
    const sale = `<span class="nc-bubble nc-bubble--sale deals-bubble" aria-hidden="true">−${p.pct}%</span>`;
    const quick = `<button class="deals-quick" type="button" data-qv="${p.id}" aria-label="Hurtig visning: ${esc(p.name)}">${ICON.eye}<span class="deals-quick__t">Hurtig visning</span></button>`;
    if (p.bundle) {
      const n = (p.contains || []).length;
      return `<li class="deals-item deals-item--set" data-id="${p.id}" data-cat="${cat}" style="--ri:${i}">
        <article class="deals-card deals-card--set" aria-labelledby="deals-n-${p.id}">
          <div class="deals-card__stage" data-stage>
            ${packHtml(p)}${sale}
            <span class="deals-sheen" aria-hidden="true"></span>${quick}
          </div>
          <div class="deals-card__body">
            ${p.badge ? `<img class="deals-set__badge" src="${ctx.asset(p.badge)}" alt="" width="64" height="64" loading="lazy">` : ''}
            <p class="deals-card__eyebrow">Sampakke · ${n} produkter</p>
            <h3 class="deals-card__name deals-card__name--set" id="deals-n-${p.id}">${esc(p.name)}</h3>
            <p class="deals-card__claim deals-card__claim--set">${esc(p.claim)}</p>
            ${contentsHtml(p)}
            <div class="deals-card__buy">${priceHtml(p, true)}${addHtml(p)}</div>
          </div>
        </article>
      </li>`;
    }
    return `<li class="deals-item" data-id="${p.id}" data-cat="${cat}" style="--ri:${i}">
      <article class="deals-card" aria-labelledby="deals-n-${p.id}">
        <div class="deals-card__stage" data-stage>
          ${packHtml(p)}${sale}
          <span class="deals-sheen" aria-hidden="true"></span>${quick}
        </div>
        <div class="deals-card__body">
          <p class="deals-card__eyebrow">${esc(p.nickname || p.eyebrow)}</p>
          <h3 class="deals-card__name" id="deals-n-${p.id}">${esc(p.name)}</h3>
          <p class="deals-card__size">${esc(metaLine(p))}</p>
          <p class="deals-card__claim">${esc(p.claim)}</p>
          <div class="deals-card__buy">${priceHtml(p)}${addHtml(p)}</div>
        </div>
      </article>
    </li>`;
  }
  const gift = ctx.byId[ctx.campaign.giftId];
  const giftAt = ctx.campaign.giftThreshold, shipAt = ctx.campaign.freeShipping;
  const giftHtml = `<li class="deals-item deals-item--gift" data-cat="gift" style="--ri:${items.length}">
    <aside class="deals-gift nc-grain" aria-labelledby="deals-gift-t">
      <img class="deals-gift__mark" src="${ctx.asset('logo-mark-white.svg')}" alt="" aria-hidden="true">
      <span class="deals-gift__glow" aria-hidden="true"></span>
      <div class="deals-gift__in">
        <div class="deals-gift__head">
          <p class="deals-gift__eyebrow">Gave ved køb over ${kr(giftAt)}</p>
          <h3 class="deals-gift__title" id="deals-gift-t">${esc(gift ? gift.name : 'CBD Lip Balm')} med i købet</h3>
        </div>
        <div class="deals-gift__bubbles" aria-hidden="true">
          <span class="nc-bubble nc-bubble--pink deals-gift__bubble">Gratis</span>
          <span class="nc-bubble nc-bubble--sand deals-gift__bubble deals-gift__bubble--val"><span>Værdi<br>${kr(ctx.campaign.giftValue)}</span></span>
        </div>
        <p class="deals-gift__copy">Lægges automatisk i kurven, når du handler for over ${kr(giftAt)} – værdi ${kr(ctx.campaign.giftValue)}</p>
        <div class="deals-gift__meter">
          <div class="deals-gift__track" role="progressbar" aria-label="Fremskridt mod gratis CBD Lip Balm" aria-valuemin="0" aria-valuemax="${giftAt}" aria-valuenow="0">
            <span class="deals-gift__fill"></span>
            <span class="deals-gift__tick" style="--at:${(shipAt / giftAt * 100).toFixed(2)}%"></span>
            <span class="deals-gift__tick deals-gift__tick--end" style="--at:100%"></span>
          </div>
          <div class="deals-gift__labels" aria-hidden="true">
            <span style="--at:${(shipAt / giftAt * 100).toFixed(2)}%">Fri fragt</span>
            <span style="--at:100%">Gave</span>
          </div>
        </div>
        <p class="deals-gift__status" data-gift-status></p>
      </div>
    </aside>
  </li>`;
  grid.innerHTML = items.map(cardHtml).join('') + giftHtml;
  // reveal the grid as ONE composition (staggered), as soon as its top edge enters the viewport
  grid.classList.add('deals-rv');
  const revealAll = () => { grid.classList.add('is-in'); };
  if (RM) revealAll();
  else {
    const io = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { revealAll(); io.disconnect(); } }, { rootMargin: '0px 0px -6% 0px' });
    io.observe(grid);
  }
  const foot = $('.deals-foot');
  if (foot) { foot.removeAttribute('data-reveal'); }

  const counts = { all: items.length, face: 0, body: 0, sets: 0 };
  items.forEach((p) => counts[catOf(p)]++);
  $$('[data-count]').forEach((el) => { el.textContent = counts[el.dataset.count]; });

  // ------------------------------------------------------------------ gift progress (follows the cart)
  const gFill = $('.deals-gift__fill'), gTrack = $('.deals-gift__track'), gStatus = $('[data-gift-status]'), gTile = $('.deals-gift');
  function giftRender() {
    const sub = store.subtotal();
    gFill.style.setProperty('--p', clamp(sub / giftAt, 0, 1).toFixed(4));
    gTrack.setAttribute('aria-valuenow', String(Math.min(sub, giftAt)));
    gTile.classList.toggle('is-ship', sub >= shipAt);
    gTile.classList.toggle('is-done', sub >= giftAt);
    let t;
    if (sub <= 0) t = `Du er ${kr(giftAt)} fra din gave – og ${kr(shipAt)} fra fri fragt.`;
    else if (sub < shipAt) t = `Du mangler <b>${kr(shipAt - sub)}</b> til fri fragt og <b>${kr(giftAt - sub)}</b> til din gave.`;
    else if (sub < giftAt) t = `Fri fragt er din. Du mangler <b>${kr(giftAt - sub)}</b> til din gave.`;
    else t = '<b>Din CBD Lip Balm følger med.</b> Fri fragt er også din.';
    gStatus.innerHTML = t;
  }
  giftRender();
  store.on((type) => { if (type === 'cart:add' || type === 'cart:change') giftRender(); });

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
  new ResizeObserver(() => moveInk(pressed(), true)).observe(bar);

  const lis = () => $$('.deals-item', grid);
  const giftLi = $('.deals-item--gift', grid);
  const cols = () => getComputedStyle(grid).gridTemplateColumns.split(' ').filter(Boolean).length || 1;
  const spanOf = (li) => (li.classList.contains('deals-item--set') ? Math.min(2, cols()) : 1);
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
  layoutGift();
  let lastCols = cols();
  new ResizeObserver(() => { const c = cols(); if (c !== lastCols) { lastCols = c; layoutGift(); } }).observe(grid);

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
  }
  chips.forEach((chip) => chip.addEventListener('click', () => {
    chips.forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
    moveInk(chip);
    if (bar.scrollWidth > bar.clientWidth) bar.scrollTo({ left: chip.offsetLeft - (bar.clientWidth - chip.offsetWidth) / 2, behavior: RM ? 'auto' : 'smooth' });
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

  // ------------------------------------------------------------------ damped tilt + light sheen
  const tilt = new Map();
  let tRaf = 0, tLast = 0;
  function tStep(now) {
    const dt = Math.min(0.05, (now - tLast) / 1000); tLast = now;
    const f = 1 - Math.exp(-dt * 9), fh = 1 - Math.exp(-dt * 7);
    let active = false;
    tilt.forEach((s, card) => {
      s.rx += (s.trx - s.rx) * f; s.ry += (s.try - s.ry) * f; s.h += (s.th - s.h) * fh;
      s.mx += (s.tmx - s.mx) * f; s.my += (s.tmy - s.my) * f;
      card.style.transform = `perspective(1100px) rotateX(${s.rx.toFixed(3)}deg) rotateY(${s.ry.toFixed(3)}deg) translateY(${(-s.h * 3).toFixed(2)}px)`;
      card.style.setProperty('--h', s.h.toFixed(4));
      card.style.setProperty('--mx', `${(s.mx * 100).toFixed(2)}%`);
      card.style.setProperty('--my', `${(s.my * 100).toFixed(2)}%`);
      card.style.setProperty('--px', (s.ry / 6).toFixed(4));
      const moving = Math.abs(s.trx - s.rx) + Math.abs(s.try - s.ry) + Math.abs(s.th - s.h) > 0.002;
      if (moving) active = true;
      else if (s.th === 0) { card.style.transform = ''; tilt.delete(card); }
    });
    tRaf = active || tilt.size ? requestAnimationFrame(tStep) : 0;
    if (!active) { cancelAnimationFrame(tRaf); tRaf = 0; }
  }
  const tKick = () => { if (!tRaf) { tLast = performance.now(); tRaf = requestAnimationFrame(tStep); } };
  function tState(card) {
    let s = tilt.get(card);
    if (!s) { s = { rx: 0, ry: 0, trx: 0, try: 0, h: 0, th: 0, mx: 0.5, my: 0.3, tmx: 0.5, tmy: 0.3 }; tilt.set(card, s); }
    return s;
  }
  if (FINE && !TOUCH && !RM) {
    grid.addEventListener('pointermove', (e) => {
      const card = e.target.closest('.deals-card'); if (!card || e.pointerType !== 'mouse') return;
      const r = card.getBoundingClientRect();
      const nx = clamp((e.clientX - r.left) / r.width, 0, 1), ny = clamp((e.clientY - r.top) / r.height, 0, 1);
      const s = tState(card);
      const k = card.classList.contains('deals-card--set') ? 0.55 : 1; // wide cards tilt less
      s.try = (nx - 0.5) * 7 * k; s.trx = -(ny - 0.5) * 5 * k; s.th = 1; s.tmx = nx; s.tmy = ny;
      tKick();
    });
    grid.addEventListener('pointerout', (e) => {
      const card = e.target.closest('.deals-card'); if (!card || card.contains(e.relatedTarget)) return;
      const s = tilt.get(card); if (!s) return;
      s.trx = 0; s.try = 0; s.th = 0; s.tmx = 0.5; s.tmy = 0.3; tKick();
    });
  }

  // ------------------------------------------------------------------ add to cart: button morph + fly + trail
  const timers = new WeakMap();
  function morph(btn, e) {
    const r = btn.getBoundingClientRect();
    const x = e && e.clientX ? e.clientX - r.left : r.width / 2, y = e && e.clientY ? e.clientY - r.top : r.height / 2;
    btn.style.setProperty('--ix', `${x}px`); btn.style.setProperty('--iy', `${y}px`);
    btn.classList.remove('is-added'); void btn.offsetWidth; btn.classList.add('is-added');
    btn.setAttribute('aria-label', btn.getAttribute('aria-label').replace(/^Læg (.*) i kurv$/, 'Læg $1 i kurv – lagt i kurv'));
    clearTimeout(timers.get(btn));
    timers.set(btn, setTimeout(() => {
      btn.classList.remove('is-added');
      btn.setAttribute('aria-label', btn.getAttribute('aria-label').replace(' – lagt i kurv', ''));
    }, 2600));
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
        g.strokeStyle = `rgba(128, 160, 151, ${(0.38 * a).toFixed(3)})`;
        g.lineWidth = 1 + 9 * a * pts[i].s;
        g.beginPath(); g.moveTo(pts[i - 1].x, pts[i - 1].y); g.lineTo(pts[i].x, pts[i].y); g.stroke();
      }
      // tiny droplets shed along the way – oil, not sparkles
      for (const dp of tr.drops) {
        const age = (now - dp.t) / (700 * SLOW); if (age > 1 || age < 0) continue;
        g.fillStyle = `rgba(221, 191, 163, ${(0.55 * (1 - age) * fade).toFixed(3)})`;
        g.beginPath(); g.arc(dp.x, dp.y + age * 10, dp.r * (1 - age * 0.6), 0, Math.PI * 2); g.fill();
      }
    }
    if (trails.length) trailRaf = requestAnimationFrame(drawTrails);
    else { trailRaf = 0; g.clearRect(0, 0, innerWidth, innerHeight); }
  }
  function fly(fromEl, p, done) {
    const pack = fromEl && fromEl.querySelector('.deals-prod__pack');
    if (RM || !pack) { done(); return; }
    const r = pack.getBoundingClientRect();
    if (r.width < 2) { done(); return; }
    const clone = pack.cloneNode(true);
    clone.className = 'deals-fly' + (pack.closest('.deals-prod--set') ? ' deals-prod--set' : '');
    Object.assign(clone.style, { left: `${r.left}px`, top: `${r.top}px`, width: `${r.width}px`, height: `${r.height}px` });
    clone.querySelector('img').loading = 'eager';
    root.appendChild(clone);
    const blob = document.createElement('span'); blob.className = 'deals-fly__drop'; root.appendChild(blob);
    ensureTrail();
    const tr = { pts: [], drops: [], done: false, end: 0 }; trails.push(tr);
    if (!trailRaf) trailRaf = requestAnimationFrame(drawTrails);
    const x0 = r.left + r.width / 2, y0 = r.top + r.height / 2;
    const T = cartTarget();
    const dist = Math.hypot(T.x - x0, T.y - y0);
    const dur = clamp(620 + dist * 0.42, 760, 1150) * SLOW;
    const lift = Math.min(140, 40 + dist * 0.12);
    // cubic path: rise straight up first (a bubble through serum), then glide sideways into the bag
    const top = 14;
    const c1x = x0, c1y = Math.max(top, y0 - lift - Math.max(0, y0 - T.y) * 0.35);
    const c2x = x0 + (T.x - x0) * 0.62, c2y = Math.max(top, Math.min(T.y, y0) - lift * 0.55);
    const endScale = 22 / Math.max(r.width, r.height);
    const t0 = performance.now(); let nextDrop = 0.18;
    let landed = false;
    function step(now) {
      const t = clamp((now - t0) / dur, 0, 1);
      const e = easeFly(t);
      const tg = cartTarget(); // the header may condense while we fly – track it
      const ex = T.real ? tg.x : T.x, ey = T.real ? tg.y : T.y;
      const x = cub(x0, c1x, c2x, ex, e), y = cub(y0, c1y, c2y, ey, e);
      const s = 1 + (endScale - 1) * Math.pow(e, 0.8);
      const rot = Math.sin(e * Math.PI) * -7;
      clone.style.transform = `translate(${(x - x0).toFixed(2)}px, ${(y - y0).toFixed(2)}px) scale(${s.toFixed(4)}) rotate(${rot.toFixed(2)}deg)`;
      clone.style.opacity = String(t < 0.82 ? 1 : 1 - (t - 0.82) / 0.18);
      blob.style.transform = `translate(${(x - 6).toFixed(2)}px, ${(y - 6).toFixed(2)}px) scale(${(0.4 + 0.6 * Math.sin(e * Math.PI)).toFixed(3)})`;
      blob.style.opacity = String(Math.sin(t * Math.PI) * 0.9);
      tr.pts.push({ x, y, t: now, s: Math.max(0.25, s) });
      if (tr.pts.length > 60) tr.pts.shift();
      if (t > nextDrop && t < 0.8) { tr.drops.push({ x: x + (Math.random() - 0.5) * 10, y: y + (Math.random() - 0.5) * 8, r: 1.4 + Math.random() * 1.8, t: now }); nextDrop += 0.12 + Math.random() * 0.08; }
      if (t >= 0.93 && !landed) { landed = true; done(); }
      if (t < 1) requestAnimationFrame(step);
      else { clone.remove(); blob.remove(); tr.done = true; tr.end = now; }
    }
    requestAnimationFrame(step);
  }
  function add(p, btn, e, srcEl) {
    if (btn) morph(btn, e);
    let doneOnce = false;
    fly(srcEl, p, () => {
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
    const stage = e.target.closest('[data-stage]');
    if (stage) { const b = stage.querySelector('[data-qv]'); if (b) openQV(ctx.byId[b.dataset.qv], b); }
  });

  // ------------------------------------------------------------------ quick view
  const dlg = document.createElement('dialog');
  dlg.className = 'deals-qv';
  dlg.setAttribute('aria-labelledby', 'deals-qv-title');
  root.appendChild(dlg);
  let qvReturn = null, qvP = null, closing = false;
  function qvHtml(p) {
    const usp = `<ul class="deals-qv__usp">
      <li>${ICON.truck}Fri fragt over ${kr(ctx.campaign.freeShipping)}</li>
      <li>${ICON.back}14 dages fortrydelsesret</li>
      <li>${ICON.leaf}Testet til under 0,2% THC</li>
    </ul>`;
    return `<div class="deals-qv__sheet">
      <button class="deals-qv__close" type="button" aria-label="Luk hurtig visning" data-qv-close>${ICON.close}</button>
      <div class="deals-qv__stage" data-stage>
        <span class="deals-qv__light" aria-hidden="true"></span>
        ${packHtml(p, 'deals-prod--qv' + (p.bundle ? ' deals-prod--qvset' : ''))}
        <span class="nc-bubble nc-bubble--sale deals-bubble deals-bubble--qv" aria-hidden="true">−${p.pct}%</span>
        ${p.badge && p.bundle ? `<img class="deals-qv__badge" src="${ctx.asset(p.badge)}" alt="" width="64" height="64">` : ''}
      </div>
      <div class="deals-qv__body">
        <p class="deals-card__eyebrow">${esc(p.bundle ? `Sampakke · ${(p.contains || []).length} produkter` : (p.nickname ? `${p.nickname} · ${p.eyebrow}` : p.eyebrow))}</p>
        <h2 class="deals-qv__title" id="deals-qv-title">${esc(p.name)}</h2>
        <p class="deals-card__size">${esc(p.bundle ? (p.contains || []).map((id) => SHORT[id] || ctx.byId[id]?.name).join(' · ') : metaLine(p))}</p>
        <p class="deals-qv__claim">${esc(p.claim)}</p>
        ${p.notes ? `<p class="deals-qv__notes">${esc(p.notes)}</p>` : ''}
        ${p.bundle ? contentsHtml(p) : ''}
        <hr class="nc-dotline deals-qv__rule">
        <div class="deals-qv__buy">${priceHtml(p, true)}${addHtml(p, ' nc-btn--lg')}</div>
        ${usp}
      </div>
    </div>`;
  }
  function openQV(p, from) {
    if (!p) return;
    qvP = p; qvReturn = from; closing = false;
    dlg.innerHTML = qvHtml(p);
    $('img', dlg) && ($('img', dlg).loading = 'eager');
    dlg.showModal();
    document.documentElement.classList.add('deals-lock');
    if (!RM) {
      $('.deals-qv__sheet', dlg).animate([{ opacity: 0, transform: 'translateY(22px) scale(.985)' }, { opacity: 1, transform: 'none' }], { duration: 620, easing: VISC });
      $('.deals-prod', dlg).animate([{ opacity: 0, transform: 'translate(-50%, 16px)' }, { opacity: 1, transform: 'translate(-50%, 0)' }], { duration: 900, delay: 90, easing: VISC, fill: 'backwards' });
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
      const pack = $('.deals-prod__pack', dlg);
      const r = pack.getBoundingClientRect();
      // fly from where the quick-view pack was, once the sheet has dissolved
      setTimeout(() => closeQV(() => {
        const ghost = document.createElement('div');
        ghost.style.cssText = `position:fixed;left:${r.left}px;top:${r.top}px;width:${r.width}px;height:${r.height}px;pointer-events:none`;
        ghost.appendChild(pack.cloneNode(true));
        root.appendChild(ghost);
        if (cardBtn) morph(cardBtn);
        add(p, null, null, ghost);
        setTimeout(() => ghost.remove(), 40);
        if (qvReturn) qvReturn.focus({ preventScroll: true });
      }), RM ? 0 : 380);
    }
  });
}
