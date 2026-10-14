/* NatureCell® Black Week – benchmark page interactions (vanilla, no WebGL). */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const kr = n => n.toLocaleString('da-DK') + ' kr.';

  const P = {
    'skin-oil': { name: 'CBD Hudpleje Olie', meta: '1000 mg · 30 ml', price: 374, was: 499, img: '../assets/products/skin-oil.webp' },
    'day-cream': { name: 'CBD Dagcreme', meta: '50 ml', price: 299, was: 399, img: '../assets/products/day-cream.webp' },
    'night-cream': { name: 'CBD Natcreme', meta: '50 ml', price: 337, was: 449, img: '../assets/products/night-cream.webp' },
    'serum': { name: 'CBD Hyaluronic Serum', meta: '30 ml', price: 224, was: 299, img: '../assets/products/hyaluron-serum.webp' },
    'cleansing-gel': { name: 'CBD Rensegel', meta: '100 ml', price: 224, was: 299, img: '../assets/products/cleansing-gel.webp' },
    'body-lotion': { name: 'CBD Bodylotion', meta: '200 ml', price: 187, was: 249, img: '../assets/products/body-lotion.webp' },
    'shampoo': { name: 'CBD Shampoo', meta: '750 mg · 300 ml', price: 149, was: 199, img: '../assets/products/shampoo.webp' },
    'komplet-pakken': { name: 'Komplet Pakken', meta: 'Rens · Dag · Nat · Olie', price: 899, was: 1198, img: '../assets/extra/product-transparent.png' },
    'all-day-facial': { name: 'All Day Facial', meta: 'Rens · Dag · Nat', price: 645, was: 860, img: '../assets/products/all-day-facial.webp' },
  };
  const GIFT = 699, SHIP = 399;

  /* ---------- header: hide on scroll down, show on scroll up ---------- */
  const hd = $('.hd'); let lastY = scrollY, ty = 0;
  addEventListener('scroll', () => {
    const y = scrollY;
    if (y < 320) hd.classList.remove('is-up'); else if (y > lastY) hd.classList.add('is-up');
    lastY = y;
  }, { passive: true });
  // reveal again only on a real upward gesture (wheel / touch / keyboard), not on programmatic jumps
  addEventListener('wheel', e => { if (e.deltaY < -2) hd.classList.remove('is-up'); }, { passive: true });
  addEventListener('touchstart', e => { ty = e.touches[0].clientY; }, { passive: true });
  addEventListener('touchmove', e => { if (e.touches[0].clientY - ty > 24) hd.classList.remove('is-up'); }, { passive: true });
  addEventListener('keydown', e => { if (['ArrowUp', 'PageUp', 'Home'].includes(e.key)) hd.classList.remove('is-up'); });
  hd.addEventListener('focusin', () => hd.classList.remove('is-up'));

  /* ---------- smooth in-page anchors (JS so programmatic scrolls stay instant) ---------- */
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]'); if (!a || a.getAttribute('href').length < 2) return;
    const t = document.querySelector(a.getAttribute('href')); if (!t) return;
    e.preventDefault(); t.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
  });

  /* ---------- reveal on scroll ---------- */
  const rev = $$('.reveal');
  if (reduced || !('IntersectionObserver' in window)) rev.forEach(e => e.classList.add('is-in'));
  else {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -6% 0px', threshold: 0.08 });
    rev.forEach((e, i) => { if (e.closest('.grid')) e.style.setProperty('--d', (i % 4) * 0.06 + 's'); io.observe(e); });
    // fail-safe: never leave content at opacity 0 (tall sections on mobile, element/full-page captures, print, fast anchor jumps)
    const showAll = () => { rev.forEach(e => e.classList.add('is-in')); io.disconnect(); };
    addEventListener('load', () => setTimeout(showAll, 1200), { once: true });
    addEventListener('beforeprint', showAll);
  }

  /* ---------- announcement marquee (mobile): duplicate for a seamless loop ---------- */
  const track = $('.hd-bar__track');
  if (track) {
    const sep = document.createElement('span'); sep.className = 'hd-bar__sep'; sep.setAttribute('aria-hidden', 'true');
    track.append(sep);
    [...track.children].forEach(c => { const k = c.cloneNode(true); k.setAttribute('aria-hidden', 'true'); k.classList.add('hd-bar__clone'); track.append(k); });
    const css = document.createElement('style');
    css.textContent = '@media (min-width:761px){.hd-bar__clone,.hd-bar__track>.hd-bar__sep:nth-last-child(-n+1){display:none}.hd-bar__track>.hd-bar__sep:nth-child(8){display:none}}';
    document.head.append(css);
    if (reduced) track.classList.add('is-static');
  }

  /* ---------- countdown (simulated "now" = fredag 27. nov. 2026 kl. 10.00) ---------- */
  const end = Date.parse('2026-11-30T23:59:59+01:00');
  const simStart = Date.parse('2026-11-27T10:00:00+01:00');
  const t0 = Date.now();
  const cd = { d: $('[data-cd="d"]'), h: $('[data-cd="h"]'), m: $('[data-cd="m"]'), s: $('[data-cd="s"]') };
  const pad = n => String(n).padStart(2, '0');
  const tick = () => {
    let r = Math.max(0, Math.floor((end - (simStart + (Date.now() - t0))) / 1000));
    const d = Math.floor(r / 86400); r -= d * 86400; const h = Math.floor(r / 3600); r -= h * 3600; const m = Math.floor(r / 60); const s = r - m * 60;
    if (cd.d) { cd.d.textContent = pad(d); cd.h.textContent = pad(h); cd.m.textContent = pad(m); cd.s.textContent = pad(s); }
  };
  tick(); setInterval(tick, 1000);

  /* ---------- filters ---------- */
  const chips = $$('.chip[data-filter]');
  chips.forEach(c => c.addEventListener('click', () => {
    chips.forEach(x => x.setAttribute('aria-pressed', String(x === c)));
    const f = c.dataset.filter;
    $$('[data-grid] > *').forEach(card => {
      const cat = card.dataset.cat;
      const show = f === 'all' || cat === f || (cat === 'promo' && f !== 'all' && false);
      card.classList.toggle('is-hidden', !show);
      if (show && !reduced) { card.classList.remove('is-in'); requestAnimationFrame(() => requestAnimationFrame(() => card.classList.add('is-in'))); }
    });
  }));

  /* ---------- cart store ---------- */
  const cart = new Map([['skin-oil', 1], ['day-cream', 1]]);
  const count = () => [...cart.values()].reduce((a, b) => a + b, 0);
  const sub = () => [...cart].reduce((a, [id, q]) => a + P[id].price * q, 0);
  const was = () => [...cart].reduce((a, [id, q]) => a + P[id].was * q, 0);
  const linesEl = $('[data-lines]');
  const lineHTML = (id, q) => `
    <li class="line" data-line="${id}">
      <span class="line__img"><img src="${P[id].img}" alt=""></span>
      <div class="line__info">
        <p class="line__name">${P[id].name}</p>
        <p class="line__meta">${P[id].meta}</p>
        <div class="qty" role="group" aria-label="Antal ${P[id].name}">
          <button type="button" aria-label="Fjern én" data-q="-1"><svg class="ic" aria-hidden="true"><use href="#i-minus"/></svg></button>
          <span aria-live="polite">${q}</span>
          <button type="button" aria-label="Tilføj én" data-q="1"><svg class="ic" aria-hidden="true"><use href="#i-plus"/></svg></button>
        </div>
      </div>
      <div class="line__price"><b>${kr(P[id].price * q)}</b><s>${kr(P[id].was * q)}</s><span class="line__save">–25%</span></div>
    </li>`;
  const giftHTML = `
    <li class="line" data-line="lip-balm">
      <span class="line__img" style="display:grid;place-items:center;background:var(--pink-50)"><svg class="ic" style="width:30px;height:30px;color:var(--accent-berry)"><use href="#i-gift"/></svg></span>
      <div class="line__info"><p class="line__name">CBD Lip Balm</p><p class="line__gift">Black Week-gave</p></div>
      <div class="line__price"><b>Gratis</b><s>79 kr.</s></div>
    </li>`;
  const render = () => {
    const s = sub(), n = count();
    linesEl.innerHTML = [...cart].map(([id, q]) => lineHTML(id, q)).join('') + (s >= GIFT ? giftHTML : '');
    $$('[data-cart-count]').forEach(e => { e.textContent = n; e.classList.remove('bump'); void e.offsetWidth; e.classList.add('bump'); });
    $('.hd-cart')?.setAttribute('aria-label', `Kurv, ${n} varer`);
    const paren = $('[data-cart-count-paren]'); if (paren) paren.textContent = `(${n})`;
    $('[data-sum-sub]').textContent = kr(s);
    $('[data-sum-save]').textContent = '–' + kr(was() - s);
    $('[data-sum-ship]').textContent = s >= SHIP || s === 0 ? 'Gratis' : '39 kr.';
    $('[data-sum-tot]').textContent = kr(s + (s >= SHIP || s === 0 ? 0 : 39));
    $('[data-dp-ship-txt]').innerHTML = s >= SHIP ? 'Du har <b>fri fragt</b>' : `Du mangler <b>${kr(SHIP - s)}</b> til fri fragt`;
    $('[data-dp-ship-bar]').style.setProperty('--p', Math.min(1, s / SHIP));
    $('[data-dp-gift-txt]').innerHTML = s >= GIFT ? 'Din <b>gratis CBD Lip Balm</b> er lagt i kurven' : `Du mangler <b>${kr(GIFT - s)}</b> til en gratis CBD Lip Balm`;
    $('[data-dp-gift-bar]').style.setProperty('--p', Math.min(1, s / GIFT));
    const up = $('[data-upsell]'); if (up) up.hidden = cart.has('serum') || s >= GIFT;
  };
  linesEl.addEventListener('click', e => {
    const b = e.target.closest('[data-q]'); if (!b) return;
    const id = b.closest('[data-line]').dataset.line; const q = (cart.get(id) || 0) + Number(b.dataset.q);
    if (q <= 0) cart.delete(id); else cart.set(id, q);
    render();
  });

  const toast = $('[data-toast]'); let tt;
  const say = msg => { toast.innerHTML = `<svg class="ic" aria-hidden="true"><use href="#i-check"/></svg>${msg}`; toast.classList.add('is-on'); clearTimeout(tt); tt = setTimeout(() => toast.classList.remove('is-on'), 2600); };
  const add = (id, q = 1) => { cart.set(id, (cart.get(id) || 0) + q); render(); };

  document.addEventListener('click', e => {
    const b = e.target.closest('[data-add]'); if (!b) return;
    add(b.dataset.add);
    say(`${P[b.dataset.add].name} er lagt i kurven`);
    if (b.classList.contains('btn')) { const t = b.textContent; b.classList.add('is-added'); b.textContent = 'Lagt i kurv'; setTimeout(() => { b.classList.remove('is-added'); b.textContent = t; }, 1800); }
  });

  /* ---------- routine builder ---------- */
  const steps = $$('[data-step]');
  const shelf = $('[data-shelf]');
  const shelfImgs = {};
  const KP = ['cleansing-gel', 'day-cream', 'night-cream', 'skin-oil'];
  const ADF = ['cleansing-gel', 'day-cream', 'night-cream'];
  const routine = () => {
    const sel = steps.filter(i => i.checked).map(i => i.dataset.step);
    const now = sel.reduce((a, id) => a + P[id].price, 0), w = sel.reduce((a, id) => a + P[id].was, 0);
    $('[data-rb-count]').textContent = sel.length;
    $('[data-rb-now]').textContent = kr(now);
    $('[data-rb-was]').textContent = kr(w);
    $('[data-rb-save]').textContent = kr(w - now);
    $('[data-rb-gift-txt]').textContent = now >= GIFT ? 'Gratis CBD Lip Balm er udløst' : `${kr(GIFT - now)} fra gratis CBD Lip Balm`;
    $('[data-rb-gift-bar]').style.setProperty('--p', Math.min(1, now / GIFT));
    // bundle hint
    const tip = $('[data-rb-tip]'), bb = $('[data-rb-bundle]');
    const hasAll = ids => ids.every(id => sel.includes(id));
    let bundle = null;
    if (hasAll(KP)) bundle = { id: 'komplet-pakken', ids: KP, n: 'fire' };
    else if (hasAll(ADF)) bundle = { id: 'all-day-facial', ids: ADF, n: 'tre' };
    if (bundle) {
      const loose = bundle.ids.reduce((a, id) => a + P[id].price, 0), extra = loose - P[bundle.id].price;
      tip.hidden = false;
      tip.querySelector('img').src = bundle.id === 'komplet-pakken' ? '../assets/badges/komplet-pakken.svg' : '../assets/badges/all-day-facial.svg';
      tip.querySelector('p').innerHTML = `<b>Smart tip:</b> De samme ${bundle.n} produkter fås som ${P[bundle.id].name} til <b>${kr(P[bundle.id].price)}</b> – du sparer <b>${kr(extra)}</b> ekstra.`;
      bb.hidden = false; bb.textContent = `Vælg ${P[bundle.id].name} · ${kr(P[bundle.id].price)}`; bb.dataset.bundle = bundle.id;
    } else { tip.hidden = true; bb.hidden = true; }
    // shelf
    const n = sel.length;
    Object.keys(shelfImgs).forEach(id => { if (!sel.includes(id)) shelfImgs[id].classList.add('is-out'); });
    sel.forEach((id, i) => {
      let im = shelfImgs[id];
      if (!im) { im = document.createElement('img'); im.src = P[id].img; im.alt = ''; im.className = 'is-out'; im.style.left = '50%'; shelf.append(im); shelfImgs[id] = im; }
      const left = n === 1 ? 50 : 14 + (72 / (n - 1)) * i;
      im.style.left = left + '%'; im.style.zIndex = 10 - Math.abs(i - (n - 1) / 2) | 0;
      requestAnimationFrame(() => im.classList.remove('is-out'));
    });
    let empty = shelf.querySelector('.rb__empty');
    if (!n) { if (!empty) { empty = document.createElement('p'); empty.className = 'rb__empty'; empty.textContent = 'Vælg dit første trin'; shelf.append(empty); } }
    else if (empty) empty.remove();
    $('[data-rb-add]').disabled = !n;
  };
  steps.forEach(s => s.addEventListener('change', routine));
  routine();
  $('[data-rb-add]').addEventListener('click', () => { const sel = steps.filter(i => i.checked).map(i => i.dataset.step); sel.forEach(id => add(id)); say(`Din rutine (${sel.length} produkter) er lagt i kurven`); });
  $('[data-rb-bundle]').addEventListener('click', e => { const id = e.currentTarget.dataset.bundle || 'komplet-pakken'; add(id); say(`${P[id].name} er lagt i kurven`); });

  /* ---------- stories carousel ---------- */
  const car = $('[data-car-track]'), bar = $('[data-car-bar]');
  if (car) {
    const upd = () => {
      const max = car.scrollWidth - car.clientWidth; const vis = car.clientWidth / car.scrollWidth;
      bar.style.width = (vis * 100) + '%'; bar.style.marginLeft = (max ? (car.scrollLeft / max) * (100 - vis * 100) : 0) + '%';
      $('[data-car="prev"]').disabled = car.scrollLeft < 8; $('[data-car="next"]').disabled = car.scrollLeft > max - 8;
    };
    const step = () => (car.querySelector('.story')?.offsetWidth || 360) + 20;
    $('[data-car="prev"]').addEventListener('click', () => car.scrollBy({ left: -step(), behavior: reduced ? 'auto' : 'smooth' }));
    $('[data-car="next"]').addEventListener('click', () => car.scrollBy({ left: step(), behavior: reduced ? 'auto' : 'smooth' }));
    car.addEventListener('scroll', upd, { passive: true }); addEventListener('resize', upd); upd();
  }
})();
