// NatureCell® Black Week – hero. DOM wiring + the Three.js still life of the facial routine (scene.js, range.js).
import { visibilityGate } from '../../core/three-utils.js';
import { createHeroScene } from './scene.js';

function webglOK() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGL2RenderingContext && c.getContext('webgl2'));
  } catch (e) { return false; }
}

export default function init(root, ctx) {
  const canvas = root.querySelector('.hero-canvas');
  const stage = root.querySelector('.hero-stage');
  const tagEl = root.querySelector('.hero-tag');
  const cardEl = root.querySelector('.hero-tag__card');
  const addBtn = root.querySelector('[data-hero-add]');
  const liveEl = root.querySelector('[data-hero-live]');

  // ---- prices from the catalogue (Black Week price + § 9 a Førpris)
  const p = ctx.byId['skin-oil'];
  if (p) {
    const now = root.querySelector('[data-hero-price]'); if (now) now.textContent = ctx.fmt.kr(p.price);
    const was = root.querySelector('[data-hero-was]'); if (was) was.textContent = ctx.fmt.kr(p.price0);
    // the saving in kroner (= Førpris − Black Week price), a small berry chip on the tag's price row
    const save = root.querySelector('[data-hero-save]'); if (save) save.textContent = `Spar ${ctx.fmt.kr(p.save)}`;
  }
  {
    const big = root.querySelector('[data-hero-pct]'); if (big && ctx.campaign) big.textContent = String(ctx.campaign.headlinePct);
  }

  // ---- quick add (calm confirmation, then settle back)
  let addT = 0;
  addBtn && addBtn.addEventListener('click', () => {
    ctx.store.add('skin-oil', 1);
    addBtn.classList.add('is-added');
    addBtn.setAttribute('aria-label', 'Vidunder Olien er lagt i kurven');
    // screen readers hear the confirmation (polite live region), not only a changed button label
    if (liveEl) { liveEl.textContent = ''; setTimeout(() => { liveEl.textContent = 'Vidunder Olien er lagt i kurven.'; }, 60); }
    clearTimeout(addT);
    addT = setTimeout(() => { addBtn.classList.remove('is-added'); addBtn.setAttribute('aria-label', 'Læg Vidunder Olien i kurv'); }, 2200);
  });

  // ---- entrance
  requestAnimationFrame(() => root.classList.add('is-ready'));

  const spotEl = root.querySelector('.hero-spot');
  const goStatic = () => {
    root.classList.add('is-static');
    // phones: the still sits in the spot between the headline and the offer
    const placeStill = () => { root.style.setProperty('--spot-top', `${spotEl.getBoundingClientRect().top - root.getBoundingClientRect().top}px`); };
    placeStill(); new ResizeObserver(placeStill).observe(root);
    // the still: the desktop plate, or on phones a plate of the product group framed for the spot (as the live scene)
    const img = root.querySelector('.hero-fallback');
    const mq = matchMedia('(max-width: 760px), (max-width: 1100px) and (max-aspect-ratio: 1/1)');
    const pick = () => { if (!img) return; const src = (mq.matches && img.dataset.srcM) || img.dataset.src; if (src && img.getAttribute('src') !== src) img.src = src; };
    pick(); mq.addEventListener('change', pick);
  };
  if (!webglOK() || /[?&]hero=static\b/.test(location.search)) { goStatic(); return; }

  let scene = null;
  let tracked = false;
  const copyEl = root.querySelector('.hero-copy');
  const pinnedMQ = matchMedia('(min-width: 761px) and (max-width: 1100px) and (min-aspect-ratio: 10001/10000)');
  const stackMQ = matchMedia('(max-width: 760px), (max-width: 1100px) and (max-aspect-ratio: 1/1)');
  // sizes + rest positions of the flat DOM overlays and text blocks: the scene frames the still life clear of them
  const trustEl = root.querySelector('.hero-trust');
  const blockEls = ['.hero-eyebrow', '.hero-title', '.hero-offer', '.hero-ctas', '.hero-facts', '.hero-trust'].map((q) => root.querySelector(q));
  const measure = () => {
    if (!scene) return;
    const st = stage.getBoundingClientRect(), cp = copyEl.getBoundingClientRect();
    const mob = stackMQ.matches;
    const rel = (r) => [r.left - st.left, r.top - st.top, r.right - st.left, r.bottom - st.top];
    // every text block is an obstacle the framing keeps clear of (no 3D product behind DOM text)
    // (measured at rest: the entrance animation's translateY is taken out, so a measure mid-animation is still exact)
    const restY = (el) => { const m = getComputedStyle(el).transform; if (!m || m === 'none') return 0; const v = m.match(/-?[\d.]+/g); return v ? +v[v.length - 1] : 0; };
    const blocks = blockEls.filter(Boolean).map((el) => {
      const r0 = el.getBoundingClientRect(), dy = restY(el);
      const r = { left: r0.left, right: r0.right, top: r0.top - dy, bottom: r0.bottom - dy };
      if (el === trustEl) return rel(r);
      // inline content: use the text's own extent, not the full column width
      // (list items may be stretched to the full row by flex-basis: use their text, not their box)
      let x1 = r.left;
      for (const c of el.children) {
        let cr = c.getBoundingClientRect().right;
        if (c.tagName === 'LI') { const rg = document.createRange(); rg.selectNodeContents(c); cr = rg.getBoundingClientRect().right; }
        x1 = Math.max(x1, cr);
      }
      if (!el.children.length || el.classList.contains('hero-title')) { const rg = document.createRange(); rg.selectNodeContents(el); x1 = Math.max(x1, rg.getBoundingClientRect().right); }
      return rel({ left: r.left, top: r.top, right: Math.max(x1, r.left + 10), bottom: r.bottom });
    });
    const sp = spotEl.getBoundingClientRect();
    const box = cardEl;                             // the pill hangs under the oil on its own dotted lead
    // tablet: the compact pill is pinned by CSS (bottom-right)
    let pin = null;
    if (pinnedMQ.matches) { const r = cardEl.getBoundingClientRect(); pin = [r.left - st.left, r.top - st.top, r.right - st.left, r.bottom - st.top]; }
    const tr = trustEl.getBoundingClientRect();
    scene.setOverlays({
      gridR: tr.right - st.left,
      tagW: box.offsetWidth, tagH: box.offsetHeight, pin,
      copyTop: cp.top - st.top,
      blocks,
      spot: mob ? [sp.top - st.top, sp.height] : null,
      trustTop: trustEl.getBoundingClientRect().top - restY(trustEl) - st.top,
    });
  };
  let tagPos = '';
  const onFrame = ({ tag }) => {
    if (pinnedMQ.matches) {
      if (tagPos) { tagEl.style.transform = ''; tagPos = ''; }
    } else {
      // the pill sits at its rest pose (whole px, written only when a layout moves it); the dotted lead runs from the
      // dot on the label, out of the silhouette, and drops onto the pill's button – only the lead follows the camera
      const pos = `translate3d(${tag[0]}px, ${tag[1]}px, 0)`;
      if (pos !== tagPos) { tagEl.style.transform = pos; tagPos = pos; }
      tagEl.style.setProperty('--lead-x', `${tag[2].toFixed(2)}px`);
      tagEl.style.setProperty('--lead-y', `${tag[3].toFixed(2)}px`);
      tagEl.style.setProperty('--lead-w', `${tag[4].toFixed(2)}px`);
    }
    if (!tracked) { tracked = true; root.classList.add('is-tracked'); }
  };

  createHeroScene({
    canvas, host: stage, asset: ctx.asset, reduced: ctx.prefersReducedMotion, onFrame,
    onFirstFrame: () => requestAnimationFrame(() => root.classList.add('is-live')),
  }).then((s) => {
    scene = s;
    measure();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    let visible = true;
    const sync = () => { (visible && !document.hidden) ? s.start() : s.stop(); };
    visibilityGate(root, (v) => { visible = v; sync(); });
    document.addEventListener('visibilitychange', sync);
    sync();

    // resize (debounced to the next frame)
    let rq = 0;
    new ResizeObserver(() => { cancelAnimationFrame(rq); rq = requestAnimationFrame(() => { measure(); s.resize(); }); }).observe(stage);

    // pointer → camera parallax (fine pointers only)
    if (matchMedia('(pointer: fine)').matches) {
      // hold the parallax still while the pointer is on the product tag, so the target never drifts away
      let hold = false;
      tagEl.addEventListener('pointerenter', () => { hold = true; });
      tagEl.addEventListener('pointerleave', () => { hold = false; });
      root.addEventListener('pointermove', (e) => {
        if (hold) return;
        const r = stage.getBoundingClientRect();
        s.pointer(((e.clientX - r.left) / r.width) * 2 - 1, -(((e.clientY - r.top) / r.height) * 2 - 1), true);
      }, { passive: true });
      root.addEventListener('pointerleave', () => s.pointer(0, 0, false));
    }
    canvas.addEventListener('webglcontextlost', (e) => { e.preventDefault(); s.stop(); goStatic(); });
  }).catch((e) => { console.warn('[hero] WebGL scene unavailable, using still', e); goStatic(); });
}
