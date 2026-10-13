// OFFERS – three Black Week offer tiles under the hero.
// · one calm countdown (rolling digits) in the head
// · Komplet Pakken "Læg i kurv" with a quiet morph
// · the gift tile's route to free shipping / gift, bound to the real cart (viscous, damped)
// · mobile: snap carousel with dots
export default function init(root, ctx) {
  const q = new URLSearchParams(location.search);
  const reduced = ctx.prefersReducedMotion;
  initClock(root, ctx, q, reduced);
  initAdd(root, ctx);
  initRoute(root, ctx, q, reduced);
  initRail(root, reduced);
}

/* ------------------------------------------------------------------ countdown */
function initClock(root, ctx, q, reduced) {
  const el = root.querySelector('.offers-clock');
  if (!el) return;
  // staging hook for edge states: ?offers-now=2026-11-30T23:59:40%2B01:00
  let offset = 0;
  const forced = q.get('offers-now');
  if (forced) { const t = Date.parse(forced); if (!Number.isNaN(t)) offset = t - ctx.clock.now(); }
  const now = () => ctx.clock.now() + offset;
  const end = ctx.clock.end, start = ctx.clock.start;
  const label = el.querySelector('[data-clock-label]');
  const done = el.querySelector('[data-clock-done]');
  const sr = el.querySelector('[data-clock-sr]');

  const units = ['d', 'h', 'm', 's'].map((u) => {
    const unit = el.querySelector(`[data-unit="${u}"]`);
    const dgs = [...unit.querySelectorAll('.offers-dg')].map((d) => {
      const v = d.textContent.trim(); d.textContent = '';
      const s = document.createElement('span'); s.className = 'offers-dg__v'; s.textContent = v; d.append(s);
      return { el: d, v, cur: s };
    });
    return { dgs, lbl: unit.querySelector('[data-lbl]') };
  });

  const EASE = 'cubic-bezier(.2,.72,.22,1)';
  function roll(d, v, animate) {
    if (d.v === v) return;
    d.v = v;
    if (!animate || reduced || !d.el.animate || document.hidden) { d.el.querySelectorAll('.offers-dg__v').forEach((n) => n !== d.cur && n.remove()); d.cur.textContent = v; return; }
    const old = d.cur;
    const nu = document.createElement('span'); nu.className = 'offers-dg__v'; nu.textContent = v;
    d.el.append(nu); d.cur = nu;
    // counting down: the drum turns downward – old digit sinks out, new one settles in from above
    const a = old.animate([
      { transform: 'translateY(0)', opacity: 1, filter: 'blur(0px)' },
      { transform: 'translateY(55%)', opacity: 0, filter: 'blur(1px)' }], { duration: 640, easing: EASE, fill: 'forwards' });
    a.onfinish = () => old.remove();
    nu.animate([
      { transform: 'translateY(-55%)', opacity: 0, filter: 'blur(1px)' },
      { transform: 'translateY(0)', opacity: 1, filter: 'blur(0px)' }], { duration: 820, easing: EASE });
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
    const left = Math.max(0, Math.floor((target - t) / 1000));
    const vals = [Math.floor(left / 86400), Math.floor(left / 3600) % 24, Math.floor(left / 60) % 60, left % 60];
    vals.forEach((n, i) => {
      const s = String(Math.min(n, 99)).padStart(2, '0');
      units[i].dgs.forEach((d, k) => roll(d, s[k], animate));
    });
    if (units[0].lbl) units[0].lbl.textContent = vals[0] === 1 ? 'dag' : 'dage';
    if (units[1].lbl) units[1].lbl.textContent = vals[1] === 1 ? 'time' : 'timer';
    const minute = Math.floor(left / 60);
    if (sr && minute !== lastMinute) {
      lastMinute = minute;
      const [d, h, m] = vals;
      sr.textContent = `${state === 'pre' ? 'Black Week begynder om' : 'Black Week slutter om'} ${d} ${d === 1 ? 'dag' : 'dage'}, ${h} ${h === 1 ? 'time' : 'timer'} og ${m} ${m === 1 ? 'minut' : 'minutter'} – mandag 30. november kl. 23.59.`;
    }
  }
  render(false);
  const tick = () => { render(true); setTimeout(tick, 1000 - (now() % 1000) + 12); };
  setTimeout(tick, 1000 - (now() % 1000) + 12);
}

/* ------------------------------------------------------------------ Komplet Pakken → cart */
function initAdd(root, ctx) {
  const btn = root.querySelector('[data-add]');
  if (!btn) return;
  const txt = btn.querySelector('[data-add-txt]');
  const p = ctx.byId[btn.dataset.add];
  if (!p) { btn.disabled = true; return; }
  let timer = 0;
  btn.addEventListener('click', () => {
    ctx.store.add(p.id, 1);
    btn.classList.add('is-added');
    txt.textContent = 'Lagt i kurven';
    btn.setAttribute('aria-label', `${p.name} er lagt i kurven`);
    clearTimeout(timer);
    timer = setTimeout(() => {
      btn.classList.remove('is-added'); txt.textContent = 'Læg i kurv';
      btn.setAttribute('aria-label', `Læg ${p.name} i kurv`);
    }, 2600);
  });
}

/* ------------------------------------------------------------------ gift route (live cart) */
function initRoute(root, ctx, q, reduced) {
  const st = root.querySelector('[data-route]');
  if (!st) return;
  const { giftThreshold: G, freeShipping: S } = ctx.campaign;
  const kr = ctx.fmt.kr;
  const seg = [1, 2].map((i) => st.querySelector(`[data-seg="${i}"]`));
  const fill = [1, 2].map((i) => st.querySelector(`[data-fill="${i}"]`));
  const cursor = st.querySelector('[data-cursor]');
  const lineSum = st.querySelector('[data-cartline-sum]');
  const lineNext = st.querySelector('[data-cartline-next]');
  const status = st.querySelector('[data-route-status]');
  const stops = { ship: st.querySelector('.offers-stop--ship'), gift: st.querySelector('.offers-stop--gift') };
  const discs = { ship: stops.ship.querySelector('.offers-stop__disc'), gift: stops.gift.querySelector('.offers-stop__disc') };
  fill.forEach((f) => f.setAttribute('pathLength', '1'));
  const len = seg.map((s) => s.getTotalLength());
  // the cursor travels between the discs' edges (never across a disc); radii in viewBox units
  let rShip = 10, rGift = 15;
  const measure = () => {
    const unit = st.clientWidth / 120;
    if (!unit) return;
    rShip = discs.ship.offsetWidth / 2 / unit + 3.2;
    rGift = discs.gift.offsetWidth / 2 / unit + 3.2;
  };
  measure();
  new ResizeObserver(() => { measure(); draw(shown, sumShown); }).observe(st);

  // progress: 0 → 1 reaches the free-shipping stop, 1 → 2 reaches the gift
  const progressFor = (sum) => (sum <= S ? sum / S : 1 + Math.min(1, (sum - S) / (G - S)));
  const at = (i, l) => { const pt = seg[i].getPointAtLength(Math.max(0, Math.min(len[i], l))); return { x: pt.x / 120 * 100, y: pt.y }; };
  const smooth = (e0, e1, x) => { const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0))); return t * t * (3 - 2 * t); };
  let shown = 0, target = 0, sumShown = 0, sumTarget = 0, raf = 0, last = 0;
  function draw(p) {
    let c, f1, f2;
    if (p <= 1) { const l = (len[0] - rShip) * p; c = at(0, l); f1 = l / len[0]; f2 = 0; }
    else { const l = rShip + (len[1] - rShip - rGift) * (p - 1); c = at(1, l); f1 = 1; f2 = l / len[1]; }
    fill[0].style.strokeDashoffset = String(1 - f1);
    fill[1].style.strokeDashoffset = String(1 - f2);
    cursor.style.left = c.x + '%'; cursor.style.top = c.y + '%';
    // dock into a disc as it is reached (no jump across it)
    const vis = Math.min(smooth(0.005, 0.05, p), smooth(0, 0.05, Math.abs(p - 1)), smooth(0, 0.05, 2 - p));
    cursor.style.opacity = String(vis);
  }
  // viscous follow: critically damped approach, no overshoot
  function frame(t) {
    const dt = Math.min(0.05, (t - (last || t)) / 1000); last = t;
    const k = 1 - Math.exp(-dt * 2.4);
    shown += (target - shown) * k; sumShown += (sumTarget - sumShown) * k;
    if (Math.abs(target - shown) < 0.0005) { shown = target; sumShown = sumTarget; }
    draw(shown);
    if (shown !== target) raf = requestAnimationFrame(frame); else { raf = 0; last = 0; }
  }
  function update() {
    const sum = ctx.store.subtotal();
    const level = sum >= G ? 2 : sum >= S ? 1 : 0;
    st.classList.toggle('has-cart', sum > 0);
    st.dataset.level = level;
    stops.ship.classList.toggle('is-reached', level >= 1);
    stops.gift.classList.toggle('is-reached', level >= 2);
    if (sum > 0) {
      lineSum.textContent = `Din kurv · ${kr(sum)}`;
      lineNext.textContent = level === 2 ? 'Fri fragt og gaven er med' : level === 1 ? `${kr(G - sum)} til gaven` : `${kr(S - sum)} til fri fragt`;
    }
    target = progressFor(sum); sumTarget = sum;
    if (reduced) { shown = target; sumShown = sum; draw(shown); }
    else if (!raf) raf = requestAnimationFrame(frame);
    if (status) {
      status.textContent = sum === 0 ? '' : level === 2 ? `Din kurv er på ${kr(sum)}. Fri fragt og en gratis CBD Lip Balm følger med.`
        : level === 1 ? `Din kurv er på ${kr(sum)}. Fri fragt er nået – ${kr(G - sum)} mere, så følger gaven med.`
        : `Din kurv er på ${kr(sum)}. ${kr(S - sum)} mere til fri fragt.`;
    }
  }
  ctx.store.on((type) => { if (type === 'cart:add' || type === 'cart:change') update(); });
  draw(0);
  update();

  // staging hook: ?offers-cart=skin-oil,serum adds those items (after a beat, so the motion is visible)
  const add = q.get('offers-cart');
  if (add) setTimeout(() => add.split(',').forEach((id) => ctx.byId[id] && ctx.store.add(id, 1)), +(q.get('offers-cart-delay') || 600));
}

/* ------------------------------------------------------------------ mobile carousel */
function initRail(root, reduced) {
  const rail = root.querySelector('[data-rail]');
  const tiles = [...root.querySelectorAll('.offers-tile')];
  const dots = [...root.querySelectorAll('[data-dot]')];
  if (!rail || !dots.length) return;
  const setCurrent = (i) => dots.forEach((d, k) => d.setAttribute('aria-current', k === i ? 'true' : 'false'));
  const io = new IntersectionObserver((es) => {
    // the tile most in view wins
    let best = null;
    es.forEach((e) => { if (e.isIntersecting && (!best || e.intersectionRatio > best.intersectionRatio)) best = e; });
    if (best && best.intersectionRatio > 0.6) setCurrent(tiles.indexOf(best.target));
  }, { root: rail, threshold: [0.6, 0.8, 1] });
  tiles.forEach((t) => io.observe(t));
  dots.forEach((d, i) => d.addEventListener('click', () => {
    const pad = parseFloat(getComputedStyle(rail).scrollPaddingInlineStart) || 0;
    rail.scrollTo({ left: tiles[i].offsetLeft - pad, behavior: reduced ? 'auto' : 'smooth' });
    setCurrent(i);
  }));
}
