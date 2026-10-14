// NatureCell® Black Week – hero. DOM wiring + the Three.js still life (scene.js).
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
  const bubbleEl = root.querySelector('.hero-bubble');
  const tagEl = root.querySelector('.hero-tag');
  const cardEl = root.querySelector('.hero-tag__card');
  const addBtn = root.querySelector('[data-hero-add]');

  // ---- prices from the catalogue (Black Week price + § 9 a Førpris)
  const p = ctx.byId['skin-oil'];
  if (p) {
    const now = root.querySelector('[data-hero-price]'); if (now) now.textContent = ctx.fmt.kr(p.price);
    const was = root.querySelector('[data-hero-was]'); if (was) was.textContent = ctx.fmt.kr(p.price0);
    // the disc carries the one fact nothing else in the hero says: the saving in kroner on the named product
    const save = root.querySelector('[data-hero-save]'); if (save) save.textContent = ctx.fmt.kr(p.save);
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
    const img = root.querySelector('.hero-fallback');
    if (img && img.dataset.src && !img.src) img.src = img.dataset.src;
  };
  if (!webglOK() || /[?&]hero=static\b/.test(location.search)) { goStatic(); return; }

  let scene = null;
  let tracked = false;
  const copyEl = root.querySelector('.hero-copy');
  const pinnedMQ = matchMedia('(min-width: 761px) and (max-width: 1100px) and (min-aspect-ratio: 10001/10000)');
  const stackMQ = matchMedia('(max-width: 760px), (max-width: 1100px) and (max-aspect-ratio: 1/1)');
  // sizes of the flat DOM overlays, so the 3D spheres flow around them (and the disc stays inside the stage)
  const trustEl = root.querySelector('.hero-trust');
  const blockEls = ['.hero-eyebrow', '.hero-title', '.hero-offer', '.hero-ctas', '.hero-facts', '.hero-trust'].map((q) => root.querySelector(q));
  const measure = () => {
    if (!scene) return;
    const st = stage.getBoundingClientRect(), cp = copyEl.getBoundingClientRect();
    const mob = stackMQ.matches;
    const rel = (r) => [r.left - st.left, r.top - st.top, r.right - st.left, r.bottom - st.top];
    // every text block is an obstacle the spheres flow around and fade before (no 3D bubble behind DOM text)
    const blocks = blockEls.filter(Boolean).map((el) => {
      const r = el.getBoundingClientRect();
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
    const box = mob ? cardEl : tagEl;               // mobile: the compact card hangs under the bottle on its own lead
    // tablet: the compact pill is pinned by CSS (bottom-right); the spheres just keep clear of its box
    let pin = null;
    if (pinnedMQ.matches) { const r = cardEl.getBoundingClientRect(); pin = [r.left - st.left, r.top - st.top, r.right - st.left, r.bottom - st.top]; }
    scene.setOverlays({
      discR: bubbleEl.firstElementChild.offsetWidth / 2,
      tagW: box.offsetWidth, tagH: box.offsetHeight, pin,
      copyTop: cp.top - st.top,
      blocks,
      spot: mob ? [sp.top - st.top, sp.height] : null,
      trustTop: trustEl.getBoundingClientRect().top - st.top,
    });
  };
  const onFrame = ({ bubble, tag, mobile }) => {
    // the flat −25% bubble is never rotated, only translated (the scene keeps it inside the stage)
    bubbleEl.style.transform = `translate3d(${bubble[0].toFixed(1)}px, ${bubble[1].toFixed(1)}px, 0)`;
    if (pinnedMQ.matches) {
      tagEl.style.transform = '';
    } else if (mobile) {
      // anchor = the dot on the label; the dotted lead drops to the compact card under the bottle
      tagEl.style.transform = `translate3d(${tag[0].toFixed(1)}px, ${tag[1].toFixed(1)}px, 0)`;
      tagEl.style.setProperty('--lead-h', `${tag[2].toFixed(1)}px`);
      tagEl.style.setProperty('--card-x', `${tag[3].toFixed(1)}px`);
    } else {
      tagEl.style.transform = `translate3d(${tag[0].toFixed(1)}px, ${tag[1].toFixed(1)}px, 0) translateY(-50%)`;
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

    // pointer → parallax + bubble push (fine pointers only)
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
