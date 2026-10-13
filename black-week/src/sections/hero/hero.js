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
  const addBtn = root.querySelector('[data-hero-add]');

  // ---- prices from the catalogue (Black Week price + § 9 a Førpris)
  const p = ctx.byId['skin-oil'];
  if (p) {
    const now = root.querySelector('[data-hero-price]'); if (now) now.textContent = ctx.fmt.kr(p.price);
    const was = root.querySelector('[data-hero-was]'); if (was) was.textContent = ctx.fmt.kr(p.price0);
    const pct = root.querySelector('.hero-bubble__pct'); if (pct) pct.textContent = `−${ctx.campaign.headlinePct}%`;
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

  const goStatic = () => {
    root.classList.add('is-static');
    const img = root.querySelector('.hero-fallback');
    if (img && img.dataset.src && !img.src) img.src = img.dataset.src;
  };
  if (!webglOK() || /[?&]hero=static\b/.test(location.search)) { goStatic(); return; }

  let scene = null;
  let tracked = false;
  const copyEl = root.querySelector('.hero-copy');
  // sizes of the flat DOM overlays, so the 3D spheres flow around them (and the disc stays inside the stage)
  const measure = () => {
    if (!scene) return;
    const st = stage.getBoundingClientRect(), cp = copyEl.getBoundingClientRect();
    scene.setOverlays({
      discR: bubbleEl.firstElementChild.offsetWidth / 2,
      tagW: tagEl.offsetWidth, tagH: tagEl.offsetHeight,
      copyTop: cp.top - st.top + parseFloat(getComputedStyle(copyEl).paddingTop || 0),
    });
  };
  const onFrame = ({ bubble, tag }) => {
    // the flat −25% bubble is never rotated, only translated (the scene keeps it inside the stage)
    bubbleEl.style.transform = `translate3d(${bubble[0].toFixed(1)}px, ${bubble[1].toFixed(1)}px, 0)`;
    tagEl.style.transform = `translate3d(${tag[0].toFixed(1)}px, ${tag[1].toFixed(1)}px, 0) translateY(-50%)`;
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
