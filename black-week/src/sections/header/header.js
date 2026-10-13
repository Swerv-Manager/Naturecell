// NatureCell® Black Week – header
// Announcement crossfade · damped scroll-condense · spring "thread" under the nav · mega panels ·
// live countdown (ctx.clock) · cart bubble (store events) · search · mobile drawer.
// Motion is critically damped (no overshoot): calm, viscous, never springy.

// Alpha bounding boxes of the packshots (image w, h, x0, y0, x1, y1) – used to centre the PRODUCT,
// not product + shadow, inside tiles and discs.
const BOX = {
  'products/skin-oil.webp': [1200, 1200, 473, 242, 722, 1007],
  'products/startpakke-plus.webp': [1200, 1200, 172, 77, 1169, 1129],
  'products/all-day-facial.webp': [1200, 1200, 160, 78, 1200, 1129],
  'products/day-cream.webp': [1200, 1200, 345, 96, 937, 1153],
  'products/night-cream.webp': [1200, 1200, 345, 96, 942, 1155],
  'products/hyaluron-serum.webp': [800, 1200, 108, 225, 765, 1114],
  'products/cleansing-gel.webp': [1200, 1200, 429, 101, 771, 1115],
  'products/body-lotion.webp': [800, 1200, 186, 163, 601, 1147],
  'products/shampoo.webp': [1200, 1200, 455, 64, 764, 1151],
};
const SUGGEST = ['komplet-pakken', 'skin-oil', 'night-cream', 'all-day-facial'];
const ANN_DUR = 5600;

export default function init(root, ctx) {
  const $ = (s, el = root) => el.querySelector(s);
  const $$ = (s, el = root) => [...el.querySelectorAll(s)];
  const q = new URLSearchParams(location.search);
  const RM = ctx.prefersReducedMotion;
  const desktopMQ = matchMedia('(min-width: 1180px)');
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  // ------------------------------------------------------------------ physics
  // Critically damped springs integrated in one rAF loop that sleeps when everything has settled.
  const springs = new Set();
  const spring = (x = 0, w = 14, apply = () => {}) => ({ x, v: 0, t: x, w, apply });
  let raf = 0, lastT = 0;
  const kick = (s) => { springs.add(s); if (!raf) { lastT = performance.now(); raf = requestAnimationFrame(step); } };
  const set = (s, t, snap = false) => { s.t = t; if (snap || RM) { s.x = t; s.v = 0; s.apply(s.x); return; } kick(s); };
  function step(now) {
    const dt = Math.min(0.034, (now - lastT) / 1000); lastT = now;
    for (const s of springs) {
      const a = s.w * s.w * (s.t - s.x) - 2 * s.w * s.v;
      s.v += a * dt; s.x += s.v * dt;
      if (Math.abs(s.t - s.x) < 0.0005 && Math.abs(s.v) < 0.0005) { s.x = s.t; s.v = 0; springs.delete(s); }
      s.apply(s.x);
    }
    raf = springs.size ? requestAnimationFrame(step) : 0;
  }

  // ------------------------------------------------------------------ helpers
  const productImg = (p, cls = '') => {
    const b = BOX[p.img];
    return `<img class="${cls}" src="${ctx.asset(p.img)}" alt="" loading="lazy" decoding="async" ${b ? `data-box="${b.join(',')}"` : ''}>`;
  };
  // Fit the product (alpha bbox) into its frame: `fill` of the height, sitting on a shelf at `base`.
  function placeImgs(scope, fill = 0.68, base = 0.9, maxW = 0.74) {
    $$('img[data-box]', scope).forEach((img) => {
      const fr = img.parentElement; const W = fr.clientWidth, H = fr.clientHeight; if (!W || !H) return;
      const [iw, ih, x0, y0, x1, y1] = img.dataset.box.split(',').map(Number);
      const f = fr.hasAttribute('data-wide') ? Math.max(fill, 0.78) : fill;
      const k = Math.min((H * f) / (y1 - y0), (W * maxW) / (x1 - x0));
      const ph = (y1 - y0) * k;
      img.style.width = `${iw * k}px`;
      img.style.left = `${W / 2 - ((x0 + x1) / 2) * k}px`;
      img.style.top = `${H * base - ph - y0 * k}px`;
    });
  }
  const priceHtml = (p) => p.pct
    ? `<span class="nc-price"><span class="nc-price__now">${ctx.fmt.kr(p.price)}</span><span class="nc-price__was">Førpris ${ctx.fmt.kr(p.price0)}</span></span>`
    : `<span class="nc-price"><span class="nc-price__now">${ctx.fmt.kr(p.price)}</span></span>`;
  const tileHtml = (p, href, wide = false) => `
    <a class="hdr-tile" href="${href}">
      <span class="hdr-tile__media"${wide ? ' data-wide' : ''}>${productImg(p)}${p.pct ? `<span class="nc-bubble nc-bubble--sale hdr-tile__flag">−${p.pct}%</span>` : ''}</span>
      <span class="hdr-tile__name">${esc(p.nickname || p.name)}</span>
      <span class="hdr-tile__meta">${esc(p.nickname ? [p.strength, p.size].filter(Boolean).join(' · ') : p.size)}</span>
      ${priceHtml(p)}
    </a>`;
  const giftHtml = () => `
    <a class="hdr-gift nc-grain" href="#offers">
      <span><span class="hdr-gift__eyebrow">Gave</span><span class="hdr-gift__title">Gratis CBD Lip Balm</span></span>
      <span class="hdr-gift__text">Følger med automatisk ved køb over ${ctx.fmt.kr(ctx.campaign.giftThreshold)} (værdi ${ctx.fmt.kr(ctx.campaign.giftValue)}).</span>
      <span class="hdr-pil" aria-hidden="true"></span>
      <span class="hdr-gift__disc" aria-hidden="true"></span>
    </a>`;

  // ------------------------------------------------------------------ announcement bar
  const ann = $('.hdr-ann');
  const msgs = $$('.hdr-ann__msg');
  const ticks = $$('.hdr-ann__ticks i');
  const pauseBtn = $('.hdr-ann__pause');
  let annIdx = 0, annEl = 0, annLast = performance.now(), annHold = false, annPaused = false;
  function annGo(n) {
    const prev = msgs[annIdx];
    prev.classList.remove('is-active'); prev.classList.add('is-leaving'); prev.setAttribute('aria-hidden', 'true');
    prev.querySelectorAll('a').forEach((a) => a.setAttribute('tabindex', '-1'));
    setTimeout(() => prev.classList.remove('is-leaving'), 950);
    ticks[annIdx].style.setProperty('--p', 0); ticks[annIdx].classList.remove('is-run');
    annIdx = (n + msgs.length) % msgs.length; annEl = 0;
    const cur = msgs[annIdx];
    cur.classList.add('is-active'); cur.setAttribute('aria-hidden', 'false');
    cur.querySelectorAll('a').forEach((a) => a.removeAttribute('tabindex'));
    ticks[annIdx].classList.add('is-run');
  }
  (function annLoop(now) {
    const dt = now - annLast; annLast = now;
    if (!annHold && !annPaused && !document.hidden) annEl += Math.min(dt, 100);
    ticks[annIdx].style.setProperty('--p', Math.min(1, annEl / ANN_DUR).toFixed(4));
    if (annEl >= ANN_DUR) annGo(annIdx + 1);
    requestAnimationFrame(annLoop);
  })(annLast);
  ann.addEventListener('pointerenter', () => (annHold = true));
  ann.addEventListener('pointerleave', () => (annHold = false));
  ann.addEventListener('focusin', () => (annHold = true));
  ann.addEventListener('focusout', (e) => { if (!ann.contains(e.relatedTarget)) annHold = false; });
  pauseBtn.addEventListener('click', () => {
    annPaused = !annPaused;
    ann.classList.toggle('is-paused', annPaused);
    pauseBtn.setAttribute('aria-pressed', String(annPaused));
    pauseBtn.setAttribute('aria-label', annPaused ? 'Afspil beskeder' : 'Sæt beskeder på pause');
  });

  // ------------------------------------------------------------------ condense on scroll
  const forced = q.get('condensed') === '1';
  const cS = spring(0, 11, (x) => root.style.setProperty('--c', Math.max(0, Math.min(1, x)).toFixed(4)));
  const condTarget = () => (forced ? 1 : Math.max(0, Math.min(1, (window.scrollY - 6) / 84)));
  set(cS, condTarget(), true);
  addEventListener('scroll', () => { const t = condTarget(); if (t !== cS.t) set(cS, t); root.classList.toggle('is-condensed', t > 0.5); }, { passive: true });
  root.classList.toggle('is-condensed', cS.t > 0.5);

  // ------------------------------------------------------------------ countdown
  const cds = $$('[data-countdown]');
  const pad = (n) => String(n).padStart(2, '0');
  const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;
  let lastAria = '';
  function cdParts() {
    const now = ctx.clock.now(), start = ctx.clock.start, end = ctx.clock.end;
    if (now >= end) return { state: 'over' };
    const pre = now < start;
    const s = Math.floor(((pre ? start : end) - now) / 1000);
    const d = Math.floor(s / 86400), h = Math.floor((s % 86400) / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
    const units = d > 0 ? [[d, 'd', String(d)], [h, 't', pad(h)], [m, 'm', pad(m)]]
      : h > 0 ? [[h, 't', String(h)], [m, 'm', pad(m)], [sec, 's', pad(sec)]]
        : [[m, 'm', String(m)], [sec, 's', pad(sec)]];
    const words = d > 0 ? [plural(d, 'dag', 'dage'), plural(h, 'time', 'timer'), plural(m, 'minut', 'minutter')]
      : h > 0 ? [plural(h, 'time', 'timer'), plural(m, 'minut', 'minutter')] : [plural(m, 'minut', 'minutter')];
    const aria = `Black Week ${pre ? 'starter' : 'slutter'} om ${words.slice(0, -1).join(', ')}${words.length > 1 ? ' og ' : ''}${words.at(-1)}`;
    return { state: pre ? 'pre' : 'live', units, aria, tick: Math.floor((now - ctx.clock.start) / 1000) };
  }
  function cdRender() {
    const r = cdParts();
    for (const cd of cds) {
      const val = $('[data-cd-value]', cd), label = $('.hdr-cd__label', cd);
      if (r.state === 'over') {
        val.textContent = 'Black Week er slut'; if (label) label.hidden = true;
        cd.setAttribute('aria-label', 'Black Week er slut'); continue;
      }
      if (label) label.textContent = r.state === 'pre' ? 'Starter om' : 'Slutter om';
      cd.style.setProperty('--sec', `${r.tick * 6}deg`);
      const sig = r.units.map((u) => u[1]).join('');
      if (val.dataset.sig !== sig) {
        val.dataset.sig = sig;
        val.innerHTML = r.units.map(([, u, s]) => `<span class="hdr-cd__u"><span class="hdr-cd__n"><span>${s}</span></span>${u}</span>`).join('');
      } else {
        $$('.hdr-cd__n', val).forEach((n, i) => {
          const s = r.units[i][2]; const cur = n.lastElementChild;
          if (cur.textContent === s) return;
          if (RM) { cur.textContent = s; return; }
          [...n.children].forEach((c) => c !== cur && c.remove());
          cur.className = 'is-out';
          const nu = document.createElement('span'); nu.className = 'is-in'; nu.textContent = s; n.append(nu);
          setTimeout(() => cur.remove(), 560);
        });
      }
      if (r.aria !== lastAria || cd.getAttribute('aria-label') !== r.aria) cd.setAttribute('aria-label', r.aria);
    }
    lastAria = r.aria;
  }
  cdRender();
  setInterval(cdRender, 1000);

  // ------------------------------------------------------------------ cart
  const carts = $$('[data-cart]');
  const dips = carts.map((btn) => spring(0, 15, (x) => btn.style.setProperty('--dip', `${x.toFixed(2)}px`)));
  let shownCount = ctx.store.count();
  function cartRender(animate) {
    const n = ctx.store.count();
    carts.forEach((btn, i) => {
      btn.classList.toggle('has-items', n > 0);
      btn.setAttribute('aria-label', `Kurv, ${n} ${n === 1 ? 'vare' : 'varer'}`);
      const num = $('[data-cart-num]', btn);
      num.textContent = n > 99 ? '99+' : String(n);
      if (animate && !RM) {
        num.classList.remove('is-in'); btn.classList.remove('is-pulse'); void btn.offsetWidth;
        num.classList.add('is-in'); btn.classList.add('is-pulse');
        dips[i].v += 120; dips[i].t = 0; kick(dips[i]); // a drop settling into the bag – damped, no rebound
      }
    });
    shownCount = n;
  }
  cartRender(false);
  ctx.store.on((type) => {
    if (type === 'cart:add') cartRender(true);
    else if (type === 'cart:change') cartRender(ctx.store.count() > shownCount);
  });
  carts.forEach((btn) => btn.addEventListener('click', () => { closeAll(); ctx.store.openCart(); }));

  // ------------------------------------------------------------------ scrim + overlay bookkeeping
  const scrim = $('.hdr-scrim');
  const setScrim = () => scrim.classList.toggle('is-on', !!(megaKey || searchOpen));
  scrim.addEventListener('click', () => closeAll());

  // ------------------------------------------------------------------ nav thread + mega
  const nav = $('.hdr-nav');
  const thread = $('.hdr-nav__thread');
  const txS = spring(0, 18, (x) => thread.style.setProperty('--tx', `${x.toFixed(2)}px`));
  const twS = spring(0, 18, (x) => thread.style.setProperty('--tw', x.toFixed(2)));
  const toS = spring(0, 14, (x) => thread.style.setProperty('--to', Math.max(0, Math.min(1, x)).toFixed(3)));
  const links = $$('.hdr-nav__link');
  function threadTo(a) {
    if (!a || a.classList.contains('hdr-nav__link--bw')) { set(toS, 0); return; }
    const pad = parseFloat(getComputedStyle(a).paddingLeft) || 12;
    const x = a.offsetLeft + pad, w = a.offsetWidth - pad * 2;
    const fresh = toS.x < 0.05;
    set(txS, x, fresh); set(twS, w, fresh); set(toS, 1);
  }
  const mega = $('.hdr-mega');
  const panels = Object.fromEntries($$('.hdr-mega__panel').map((p) => [p.dataset.panel, p]));
  let megaKey = null, tOpen = 0, tClose = 0;
  // render tiles from ctx.products
  Object.values(panels).forEach((panel) => {
    const ul = $('.hdr-mega__tiles', panel);
    const ids = ul.dataset.ids.split(',').filter((id) => ctx.byId[id]);
    // ≤2 products: wide tiles (span 2) + gift; 4 products: + compact gift; 5: products only
    const span = ids.length <= 2 ? 2 : 1;
    const href = panel.dataset.panel === 'sets' || panel.dataset.panel === 'bw' ? '#offers' : '#deals';
    let html = ids.map((id) => `<li${span > 1 ? ' style="grid-column: span 2"' : ''}>${tileHtml(ctx.byId[id], href, span > 1)}</li>`).join('');
    const left = 5 - ids.length * span;
    if (left > 0) html += `<li style="grid-column: span ${left}">${giftHtml()}</li>`;
    ul.innerHTML = html;
    [...$$('.hdr-mega__intro > *', panel), ...ul.children].forEach((el, i) => el.style.setProperty('--i', i));
  });
  $$('.hdr-mega__more').forEach((a) => a.insertAdjacentHTML('beforeend', '<span class="hdr-pil" aria-hidden="true"></span>'));
  function megaShow(key) {
    clearTimeout(tClose); clearTimeout(tOpen);
    if (!desktopMQ.matches || !panels[key]) return;
    if (searchOpen) searchClose(false);
    const first = !megaKey;
    megaKey = key;
    Object.entries(panels).forEach(([k, p]) => p.classList.toggle('is-active', k === key));
    links.forEach((a) => a.classList.toggle('is-open', a.dataset.mega === key));
    mega.classList.add('is-open'); mega.removeAttribute('inert'); mega.setAttribute('aria-hidden', 'false');
    placeImgs(panels[key]);
    if (first) requestAnimationFrame(() => placeImgs(panels[key]));
    setScrim();
  }
  function megaHide() {
    clearTimeout(tOpen); clearTimeout(tClose);
    if (!megaKey) return;
    megaKey = null;
    mega.classList.remove('is-open'); mega.setAttribute('inert', ''); mega.setAttribute('aria-hidden', 'true');
    links.forEach((a) => a.classList.remove('is-open'));
    if (!nav.matches(':hover')) set(toS, 0);
    setScrim();
  }
  const scheduleClose = (ms = 200) => { clearTimeout(tOpen); clearTimeout(tClose); tClose = setTimeout(megaHide, ms); };
  links.forEach((a) => {
    a.addEventListener('pointerenter', () => {
      threadTo(a);
      const k = a.dataset.mega;
      if (!k) { if (megaKey) scheduleClose(160); return; }
      clearTimeout(tClose); clearTimeout(tOpen);
      if (megaKey) megaShow(k); else tOpen = setTimeout(() => megaShow(k), 110);
    });
    a.addEventListener('focus', () => { threadTo(a); a.dataset.mega ? megaShow(a.dataset.mega) : megaHide(); });
    a.addEventListener('click', () => megaHide());
  });
  nav.addEventListener('pointerleave', () => {
    if (megaKey) scheduleClose(220);
    else { clearTimeout(tOpen); set(toS, 0); }
  });
  mega.addEventListener('pointerenter', () => clearTimeout(tClose));
  mega.addEventListener('pointerleave', () => { scheduleClose(220); set(toS, 0); });
  root.addEventListener('focusout', (e) => {
    if (megaKey && !nav.contains(e.relatedTarget) && !mega.contains(e.relatedTarget)) { megaHide(); set(toS, 0); }
  });

  // ------------------------------------------------------------------ search
  const search = $('.hdr-search');
  const sInput = $('.hdr-search__input');
  const sResults = $('.hdr-search__results');
  const sStatus = $('.hdr-search__status');
  const sBtns = $$('.hdr-search-btn');
  let searchOpen = false, searchReturn = null;
  const norm = (s) => String(s || '').toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '');
  const pool = ctx.products.filter((p) => !p.gift && p.img);
  function searchRender() {
    const raw = sInput.value.trim(), qn = norm(raw);
    let list, status = '';
    if (!qn) list = SUGGEST.map((id) => ctx.byId[id]).filter(Boolean);
    else {
      const words = qn.split(/\s+/);
      list = pool.filter((p) => { const hay = norm([p.name, p.nickname, p.eyebrow, p.size, p.strength, p.claim, p.notes, p.bundle ? 'sampakke pakke' : ''].join(' ')); return words.every((w) => hay.includes(w)); });
      status = list.length ? `${list.length} ${list.length === 1 ? 'resultat' : 'resultater'} for »${raw}«`
        : `Ingen resultater for »${raw}« – prøv fx Natcreme eller Komplet Pakken.`;
      if (!list.length) list = SUGGEST.map((id) => ctx.byId[id]);
    }
    sStatus.textContent = status;
    sResults.innerHTML = list.slice(0, 8).map((p, i) => `<li style="--i:${i}">${tileHtml(p, p.bundle ? '#offers' : '#deals')}</li>`).join('');
    placeImgs(sResults);
  }
  function searchOpenFn(from) {
    if (searchOpen) return;
    megaHide(); searchOpen = true; searchReturn = from || document.activeElement;
    search.classList.add('is-open'); search.removeAttribute('inert'); search.setAttribute('aria-hidden', 'false');
    sBtns.forEach((b) => b.setAttribute('aria-expanded', 'true'));
    searchRender(); setScrim();
    requestAnimationFrame(() => { placeImgs(sResults); sInput.focus({ preventScroll: true }); });
  }
  function searchClose(restore = true) {
    if (!searchOpen) return;
    searchOpen = false;
    search.classList.remove('is-open'); search.setAttribute('inert', ''); search.setAttribute('aria-hidden', 'true');
    sBtns.forEach((b) => b.setAttribute('aria-expanded', 'false'));
    setScrim();
    if (restore && searchReturn && searchReturn.focus) searchReturn.focus({ preventScroll: true });
  }
  sBtns.forEach((b) => b.addEventListener('click', () => (searchOpen ? searchClose() : searchOpenFn(b))));
  $('.hdr-search__close').addEventListener('click', () => searchClose());
  sInput.addEventListener('input', searchRender);
  const phMQ = matchMedia('(max-width: 760px)');
  const setPh = () => (sInput.placeholder = phMQ.matches ? 'Søg, fx Vidunder Olien' : 'Søg efter produkter, fx Vidunder Olien');
  setPh(); phMQ.addEventListener('change', setPh);
  $('.hdr-search__form').addEventListener('submit', (e) => { e.preventDefault(); const a = $('.hdr-tile', sResults); if (a && sInput.value.trim()) a.focus(); });
  $$('[data-q]').forEach((chip) => chip.addEventListener('click', () => { sInput.value = chip.dataset.q; searchRender(); sInput.focus(); }));

  // ------------------------------------------------------------------ drawer
  const drawer = $('.hdr-drawer');
  const burger = $('.hdr-burger');
  $('[data-logo-clone]').innerHTML = $('.hdr-bar .hdr-logo').innerHTML;
  $$('[data-peek]').forEach((el) => {
    el.innerHTML = el.dataset.peek.split(',').map((id) => ctx.byId[id]).filter(Boolean).map((p) => `<span>${productImg(p)}</span>`).join('');
  });
  $$('.hdr-stagger', drawer).forEach((el, i) => el.style.setProperty('--i', i));
  let drawerOpen = false, scrollLock = '';
  drawer.tabIndex = -1;
  function drawerOpenFn(e) {
    if (drawerOpen) return;
    const viaKeyboard = e && e.detail === 0;
    closeAll(); drawerOpen = true;
    drawer.hidden = false; void drawer.offsetWidth;
    drawer.classList.add('is-open');
    burger.setAttribute('aria-expanded', 'true');
    scrollLock = document.documentElement.style.overflow; document.documentElement.style.overflow = 'hidden';
    requestAnimationFrame(() => placeImgs(drawer, 0.8, 0.9, 0.86));
    setTimeout(() => (viaKeyboard ? $('.hdr-drawer__close') : drawer).focus({ preventScroll: true }), 60);
  }
  function drawerClose(restore = true) {
    if (!drawerOpen) return;
    drawerOpen = false;
    drawer.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    document.documentElement.style.overflow = scrollLock;
    const done = () => { if (!drawerOpen) drawer.hidden = true; };
    RM ? done() : setTimeout(done, 420);
    if (restore) burger.focus({ preventScroll: true });
  }
  burger.addEventListener('click', drawerOpenFn);
  $('.hdr-drawer__close').addEventListener('click', () => drawerClose());
  $('[data-open-search]').addEventListener('click', () => { drawerClose(false); setTimeout(() => searchOpenFn(burger), RM ? 0 : 200); });
  drawer.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const f = $$('a[href], button:not([disabled])', drawer).filter((el) => el.offsetParent !== null);
    const first = f[0], last = f.at(-1);
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
  desktopMQ.addEventListener('change', (e) => { if (e.matches) drawerClose(false); else megaHide(); });

  // ------------------------------------------------------------------ global keys, anchors, skip link
  function closeAll() { megaHide(); searchClose(false); }
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (drawerOpen) drawerClose();
    else if (searchOpen) searchClose();
    else if (megaKey) { const a = links.find((l) => l.dataset.mega === megaKey); megaHide(); a && a.focus(); }
  });
  root.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]'); if (!a) return;
    const id = a.getAttribute('href').slice(1);
    e.preventDefault();
    const wasDrawer = drawerOpen;
    drawerClose(false); closeAll();
    if (id === 'indhold') {
      const main = root.nextElementSibling; if (!main) return;
      main.setAttribute('tabindex', '-1'); main.focus({ preventScroll: true });
      scrollTo({ top: main.getBoundingClientRect().top + scrollY - root.getBoundingClientRect().height + parseFloat(getComputedStyle(root).getPropertyValue('--ann-h')), behavior: RM ? 'auto' : 'smooth' });
      return;
    }
    if (id === 'top') { scrollTo({ top: 0, behavior: RM ? 'auto' : 'smooth' }); return; }
    const target = document.querySelector(`[data-section="${id}"]`) || document.getElementById(id);
    if (!target || target === root) return;
    const go = () => {
      const barH = $('.hdr-bar').getBoundingClientRect().height;
      scrollTo({ top: target.getBoundingClientRect().top + scrollY - barH + 1, behavior: RM ? 'auto' : 'smooth' });
    };
    wasDrawer ? setTimeout(go, 80) : go();
  });

  addEventListener('resize', () => {
    if (megaKey) placeImgs(panels[megaKey]);
    if (searchOpen) placeImgs(sResults);
    if (drawerOpen) placeImgs(drawer, 0.8, 0.9, 0.86);
  }, { passive: true });

  // ------------------------------------------------------------------ screenshot / demo states
  if (q.get('cart')) { const n = Math.min(9, +q.get('cart') || 0); setTimeout(() => n && ctx.store.add('skin-oil', n), +q.get('cartAt') || 400); }
  if (q.get('menu') === '1') setTimeout(drawerOpenFn, 150);
  if (q.has('search')) setTimeout(() => { sInput.value = q.get('search') === '1' ? '' : q.get('search'); searchOpenFn(); }, 150);
  if (q.get('mega')) setTimeout(() => { megaShow(q.get('mega')); const a = links.find((l) => l.dataset.mega === q.get('mega')); threadTo(a); }, 150);
  if (q.get('pause') === '1') pauseBtn.click();
}
