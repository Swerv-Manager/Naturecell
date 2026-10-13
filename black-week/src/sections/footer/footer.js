// Footer – mobile accordions, a damped cursor light + scroll drift on the bindrune watermark,
// honest campaign-state copy for the Black Week reminder, and a calm "til toppen".
export default function init(root, ctx) {
  root.classList.add('ftr--js');
  const mqMobile = matchMedia('(max-width: 760px)');
  const reduced = ctx.prefersReducedMotion;

  /* ------------------------------------------------ accordions (mobile only) */
  const cols = [...root.querySelectorAll('.ftr-col')];
  cols.forEach((col) => {
    col.querySelectorAll('.ftr-col__list > li').forEach((li, i) => li.style.setProperty('--i', i));
  });
  const setOpen = (col, open) => {
    const btn = col.querySelector('.ftr-col__btn');
    const panel = col.querySelector('.ftr-col__panel');
    col.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
    if (mqMobile.matches && !open) panel.setAttribute('inert', ''); else panel.removeAttribute('inert');
  };
  cols.forEach((col) => {
    col.querySelector('.ftr-col__btn').addEventListener('click', () => setOpen(col, !col.classList.contains('is-open')));
  });
  const syncMode = () => cols.forEach((col) => setOpen(col, col.classList.contains('is-open')));
  syncMode();
  mqMobile.addEventListener('change', syncMode);
  // screenshot / deep-link staging: ?open=1 opens the first column, ?open=2 the second …
  const q = new URLSearchParams(location.search).get('open');
  if (q && cols[+q - 1]) setOpen(cols[+q - 1], true);

  /* ------------------------------------------------ campaign-state copy (honest urgency only) */
  const promo = root.querySelector('[data-promo]');
  const $ = (s) => promo.querySelector(s);
  const dayKey = (t) => new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Copenhagen' }).format(new Date(t)); // YYYY-MM-DD
  let lastState = 'live';
  const updatePromo = () => {
    const now = ctx.clock.now();
    const state = now > ctx.clock.end ? 'ended' : now < ctx.clock.start ? 'soon' : dayKey(now) === dayKey(ctx.clock.end) ? 'last' : 'live';
    if (state === lastState) return;
    lastState = state;
    promo.dataset.state = state;
    if (state === 'last') {
      $('[data-promo-eyebrow]').textContent = 'Sidste dag · slutter kl. 23.59';
    } else if (state === 'soon') {
      $('[data-promo-eyebrow]').textContent = 'Black Week · mandag 23. – mandag 30. november';
    } else if (state === 'ended') {
      $('[data-promo-eyebrow]').textContent = 'Black Week er slut';
      $('[data-promo-title]').textContent = 'Tak, fordi du handlede i ro og mag.';
      $('[data-promo-sub]').textContent = 'Fri fragt over 399 kr. og 14 dages fortrydelsesret – hele året.';
      $('[data-promo-cta-label]').textContent = 'Se hele hudplejeserien';
      $('[data-promo-cta]').setAttribute('href', '#deals');
    }
  };
  updatePromo();
  setInterval(updatePromo, 30000);

  /* ------------------------------------------------ to top */
  root.querySelector('[data-to-top]').addEventListener('click', (e) => {
    const target = document.getElementById('top');
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    const focusEl = target || document.body;
    if (target && !target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    focusEl.focus?.({ preventScroll: true });
    history.replaceState(null, '', location.pathname + location.search);
  });

  /* ------------------------------------------------ watermark: damped cursor light + viscous scroll drift */
  const mark = root.querySelector('.ftr-mark');
  if (!mark || reduced) return;
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const cur = { x: 50, y: 50, lit: 0, drift: 0 };
  const tgt = { x: 50, y: 50, lit: 0, drift: 0 };
  let visible = false, raf = 0;

  const measureDrift = () => {
    const r = root.getBoundingClientRect();
    const vh = innerHeight || 1;
    const p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height))); // 0 → entering, 1 → leaving
    tgt.drift = (0.5 - p) * 90; // rises gently as you reach the bottom of the page
  };

  const tick = () => {
    raf = 0;
    const k = 0.075; // viscous damping – like a drop moving through oil
    cur.x += (tgt.x - cur.x) * k;
    cur.y += (tgt.y - cur.y) * k;
    cur.lit += (tgt.lit - cur.lit) * 0.05;
    cur.drift += (tgt.drift - cur.drift) * 0.06;
    mark.style.setProperty('--mx', cur.x.toFixed(2) + '%');
    mark.style.setProperty('--my', cur.y.toFixed(2) + '%');
    mark.style.setProperty('--lit', cur.lit.toFixed(3));
    mark.style.setProperty('--drift', cur.drift.toFixed(2) + 'px');
    const settled = Math.abs(tgt.x - cur.x) < 0.05 && Math.abs(tgt.y - cur.y) < 0.05 && Math.abs(tgt.lit - cur.lit) < 0.002 && Math.abs(tgt.drift - cur.drift) < 0.05;
    if (visible && !settled) raf = requestAnimationFrame(tick);
  };
  const kick = () => { if (visible && !raf) raf = requestAnimationFrame(tick); };

  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (visible) { measureDrift(); kick(); }
  }, { rootMargin: '120px 0px' }).observe(root);

  addEventListener('scroll', () => { if (visible) { measureDrift(); kick(); } }, { passive: true });
  addEventListener('resize', () => { if (visible) { measureDrift(); kick(); } }, { passive: true });

  if (finePointer) {
    root.addEventListener('pointermove', (e) => {
      const r = mark.getBoundingClientRect();
      tgt.x = ((e.clientX - r.left) / r.width) * 100;
      tgt.y = ((e.clientY - r.top) / r.height) * 100;
      // the light only "catches" the mark when the cursor is near it
      const dx = Math.max(0, Math.abs(e.clientX - (r.left + r.width / 2)) - r.width / 2);
      const dy = Math.max(0, Math.abs(e.clientY - (r.top + r.height / 2)) - r.height / 2);
      tgt.lit = Math.max(0, 1 - Math.hypot(dx, dy) / 260);
      kick();
    });
    root.addEventListener('pointerleave', () => { tgt.lit = 0; kick(); });
  }
  measureDrift();
  cur.drift = tgt.drift;
  mark.style.setProperty('--drift', cur.drift.toFixed(2) + 'px');
}
