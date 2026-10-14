// OFFERS – three Black Week offer tiles under the hero.
// · one calm countdown (days · hours · minutes – the minute drum turns once a minute)
// · Komplet Pakken "Læg i kurv" with a quiet morph + polite live announcement
// · the gift tile: a true example basket, swapped for the live cart and a damped meter once the cart has value
// · mobile: snap carousel led by the hero offer, with dots
export default function init(root, ctx) {
  const q = new URLSearchParams(location.search);
  const reduced = ctx.prefersReducedMotion;
  const off = [];
  off.push(initClock(root, ctx, q, reduced));
  initAdd(root, ctx);
  off.push(initGift(root, ctx, q, reduced));
  off.push(initRail(root, reduced));
  return () => off.forEach((f) => f && f());
}

/* ------------------------------------------------------------------ countdown */
function initClock(root, ctx, q, reduced) {
  const el = root.querySelector('.offers-clock');
  if (!el) return null;
  // staging hook for edge states: ?offers-now=2026-11-30T23:59:40%2B01:00
  let offset = 0;
  const forced = q.get('offers-now');
  if (forced) { const t = Date.parse(forced); if (!Number.isNaN(t)) offset = t - ctx.clock.now(); }
  const now = () => ctx.clock.now() + offset;
  const end = ctx.clock.end, start = ctx.clock.start;
  const label = el.querySelector('[data-clock-label]');
  const done = el.querySelector('[data-clock-done]');
  const sr = el.querySelector('[data-clock-sr]');

  const units = ['d', 'h', 'm'].map((u) => {
    const unit = el.querySelector(`[data-unit="${u}"]`);
    const dgs = [...unit.querySelectorAll('.offers-dg')].map((d) => {
      const v = d.textContent.trim(); d.textContent = '';
      const ghost = document.createElement('span'); ghost.className = 'offers-dg__ghost'; ghost.textContent = '0';
      const s = document.createElement('span'); s.className = 'offers-dg__v'; s.textContent = v;
      d.append(ghost, s);
      return { el: d, v, cur: s };
    });
    return { dgs, lbl: unit.querySelector('[data-lbl]') };
  });

  // a drum turning downward: the old digit leaves through the bottom edge as the new one arrives from the top –
  // both travel one full cell on the same curve, so two glyphs never share the cell
  const EASE = 'cubic-bezier(.65,0,.3,1)', DUR = 620;
  function roll(d, v, animate) {
    if (d.v === v) return;
    d.v = v;
    if (!animate || reduced || !d.el.animate || document.hidden) {
      d.el.querySelectorAll('.offers-dg__v').forEach((n) => n !== d.cur && n.remove());
      d.cur.getAnimations?.().forEach((a) => a.cancel());
      d.cur.textContent = v; return;
    }
    const old = d.cur;
    const nu = document.createElement('span'); nu.className = 'offers-dg__v'; nu.textContent = v;
    d.el.append(nu); d.cur = nu;
    old.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(100%)' }], { duration: DUR, easing: EASE, fill: 'forwards' })
      .onfinish = () => old.remove();
    nu.animate([{ transform: 'translateY(-100%)' }, { transform: 'translateY(0)' }], { duration: DUR, easing: EASE, fill: 'backwards' });
  }

  let lastState = '', lastMinute = -1;
  function render(animate) {
    const t = now();
    const state = t < start ? 'pre' : t >= end ? 'ended' : (end - t <= 864e5 ? 'last' : 'live');
    if (state !== lastState) {
      el.dataset.state = state; lastState = state;
      label.textContent = state === 'pre' ? 'Black Week begynder om' : state === 'ended' ? 'Black Week er slut' : state === 'last' ? 'Sidste dag – slutter om' : 'Black Week slutter om';
      if (done) done.hidden = state !== 'ended';
      root.dataset.campaign = state;
    }
    if (state === 'ended') { if (sr) sr.textContent = 'Black Week er slut.'; return; }
    const target = state === 'pre' ? start : end;
    // whole minutes left (truncated, like any clock)
    const left = Math.max(0, Math.floor((target - t) / 60000));
    const vals = [Math.floor(left / 1440), Math.floor(left / 60) % 24, left % 60];
    vals.forEach((n, i) => {
      const s = String(Math.min(n, 99)).padStart(2, '0');
      units[i].dgs.forEach((d, k) => roll(d, s[k], animate));
    });
    if (units[0].lbl) units[0].lbl.textContent = vals[0] === 1 ? 'dag' : 'dage';
    if (units[1].lbl) units[1].lbl.textContent = vals[1] === 1 ? 'time' : 'timer';
    if (sr && left !== lastMinute) {
      lastMinute = left;
      const [d, h, m] = vals;
      sr.textContent = `${state === 'pre' ? 'Black Week begynder om' : 'Black Week slutter om'} ${d} ${d === 1 ? 'dag' : 'dage'}, ${h} ${h === 1 ? 'time' : 'timer'} og ${m} ${m === 1 ? 'minut' : 'minutter'} – mandag 30. november kl. 23.59.`;
    }
  }
  render(false);

  // tick only while the clock is on screen and the tab is visible; resync silently when it comes back
  let timer = 0, onScreen = true;
  const schedule = () => {
    clearTimeout(timer);
    if (!onScreen || document.hidden) return;
    const ms = 60000 - (((now() % 60000) + 60000) % 60000) + 20;
    timer = setTimeout(() => { render(true); schedule(); }, Math.min(ms, 60020));
  };
  const io = new IntersectionObserver((es) => {
    const v = es[es.length - 1].isIntersecting;
    if (v && !onScreen) render(false);
    onScreen = v; schedule();
  });
  io.observe(el);
  const onVis = () => { if (!document.hidden) render(false); schedule(); };
  document.addEventListener('visibilitychange', onVis);
  schedule();
  return () => { clearTimeout(timer); io.disconnect(); document.removeEventListener('visibilitychange', onVis); };
}

/* ------------------------------------------------------------------ Komplet Pakken → cart */
function initAdd(root, ctx) {
  const btn = root.querySelector('[data-add]');
  if (!btn) return;
  const status = root.querySelector('[data-add-status]');
  const p = ctx.byId[btn.dataset.add];
  if (!p) { btn.disabled = true; return; }
  let timer = 0;
  btn.addEventListener('click', () => {
    ctx.store.add(p.id, 1);
    btn.classList.add('is-added');
    // the label stays static; the confirmation goes through a polite live region
    if (status) { status.textContent = ''; requestAnimationFrame(() => { status.textContent = `${p.name} er lagt i kurven.`; }); }
    clearTimeout(timer);
    timer = setTimeout(() => btn.classList.remove('is-added'), 2600);
  });
}

/* ------------------------------------------------------------------ gift tile: example basket ↔ live cart */
function initGift(root, ctx, q, reduced) {
  const st = root.querySelector('[data-gift]');
  if (!st) return null;
  const { giftThreshold: G, freeShipping: S } = ctx.campaign;
  const kr = ctx.fmt.kr;

  // the example prices come from the catalogue, so the stage can never drift from the real prices
  let exSum = 0;
  st.querySelectorAll('[data-ex]').forEach((n) => { const p = ctx.byId[n.dataset.ex]; if (p) { n.textContent = kr(p.price); exSum += p.price; } });
  const exOut = st.querySelector('[data-ex-sum]');
  if (exOut && exSum) exOut.textContent = kr(exSum);

  const sumEl = st.querySelector('[data-live-sum]');
  const nextEl = st.querySelector('[data-live-next]');
  const meter = st.querySelector('[data-meter]');
  const tick = st.querySelector('[data-tick]');
  const status = st.querySelector('[data-gift-status]');
  if (tick) tick.style.left = (S / G * 100) + '%';

  // viscous follow: critically damped approach, no overshoot
  let shown = 0, target = 0, raf = 0, last = 0;
  const draw = (v) => { if (meter) meter.style.transform = `scaleX(${v})`; };
  function frame(t) {
    const dt = Math.min(0.05, (t - (last || t)) / 1000); last = t;
    shown += (target - shown) * (1 - Math.exp(-dt * 3));
    if (Math.abs(target - shown) < 0.001) shown = target;
    draw(shown);
    if (shown !== target) raf = requestAnimationFrame(frame); else { raf = 0; last = 0; }
  }
  function update() {
    const sum = ctx.store.subtotal();
    const level = sum >= G ? 2 : sum >= S ? 1 : 0;
    st.classList.toggle('has-cart', sum > 0);
    st.dataset.level = level;
    if (sum > 0) {
      sumEl.textContent = `Din kurv · ${kr(sum)}`;
      nextEl.textContent = level === 2 ? 'Fri fragt og gaven er med' : level === 1 ? `Fri fragt er med · ${kr(G - sum)} til gaven` : `${kr(S - sum)} til fri fragt`;
    }
    target = Math.min(1, sum / G);
    if (reduced) { shown = target; draw(shown); }
    else if (!raf) raf = requestAnimationFrame(frame);
    if (status) {
      status.textContent = sum === 0 ? '' : level === 2 ? `Din kurv er på ${kr(sum)} – fri fragt og en gratis CBD Lip Balm følger med`
        : level === 1 ? `Din kurv er på ${kr(sum)} – fri fragt er med, og ${kr(G - sum)} mere giver gaven`
        : `Din kurv er på ${kr(sum)} – ${kr(S - sum)} mere giver fri fragt`;
    }
  }
  const unsub = ctx.store.on((type) => { if (type === 'cart:add' || type === 'cart:change') update(); });
  draw(0);
  update();

  // staging hook: ?offers-cart=skin-oil,serum adds those items (after a beat, so the motion is visible)
  const add = q.get('offers-cart');
  if (add) setTimeout(() => add.split(',').forEach((id) => ctx.byId[id] && ctx.store.add(id, 1)), +(q.get('offers-cart-delay') || 600));
  return () => { cancelAnimationFrame(raf); if (typeof unsub === 'function') unsub(); };
}

/* ------------------------------------------------------------------ mobile carousel */
function initRail(root, reduced) {
  const rail = root.querySelector('[data-rail]');
  const tiles = [...root.querySelectorAll('.offers-tile')];
  const dots = [...root.querySelectorAll('[data-dot]')];
  if (!rail || !dots.length) return null;
  // each dot names a tile (data-dot = tile index), listed in the mobile visual order
  const dotFor = (tile) => dots.find((d) => +d.dataset.dot === tiles.indexOf(tile));
  const setCurrent = (dot) => dots.forEach((d) => d.setAttribute('aria-current', d === dot ? 'true' : 'false'));
  const io = new IntersectionObserver((es) => {
    let best = null;
    es.forEach((e) => { if (e.isIntersecting && (!best || e.intersectionRatio > best.intersectionRatio)) best = e; });
    if (best && best.intersectionRatio > 0.6) setCurrent(dotFor(best.target));
  }, { root: rail, threshold: [0.6, 0.8, 1] });
  tiles.forEach((t) => io.observe(t));
  dots.forEach((d) => d.addEventListener('click', () => {
    const tile = tiles[+d.dataset.dot];
    const pad = parseFloat(getComputedStyle(rail).scrollPaddingInlineStart) || 0;
    rail.scrollTo({ left: tile.offsetLeft - pad, behavior: reduced ? 'auto' : 'smooth' });
    setCurrent(d);
  }));
  return () => io.disconnect();
}
