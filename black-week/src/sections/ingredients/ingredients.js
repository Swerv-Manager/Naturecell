// NatureCell® Black Week – ingredients ("Hvad er der i?")
// List ⇄ 3D droplet cluster ⇄ label card, tied together with a dotted feature line.
import { visibilityGate } from '../../core/three-utils.js';
import { createIngredientScene } from './scene.js';

const pad = (n) => String(n).padStart(2, '0');

export default function init(root, ctx) {
  const btns = [...root.querySelectorAll('.ing-item')];
  if (!btns.length) return;
  const viz = root.querySelector('.ing-viz');
  const stage = root.querySelector('.ing-stage');
  const canvas = root.querySelector('.ing-canvas');
  const fallback = root.querySelector('.ing-fallback');
  const card = root.querySelector('.ing-card');
  const line = root.querySelector('.ing-line');
  const ring = root.querySelector('.ing-line__ring');
  const endDot = root.querySelector('.ing-line__end');
  const f = (k) => card.querySelector(`[data-card="${k}"]`);
  const reduced = !!ctx.prefersReducedMotion;
  const canHover = matchMedia('(hover: hover) and (pointer: fine)').matches;

  const items = btns.map((b, i) => {
    const d = b.nextElementSibling;
    const g = (k) => (d.querySelector(`[data-k="${k}"]`)?.textContent || '').trim();
    return { i, name: b.querySelector('.ing-item__name').textContent.trim(), color: d.dataset.color, deep: d.dataset.deep, r: +d.dataset.r || .5,
      inci: g('inci'), desc: g('desc'), in: g('in'), swatch: b.querySelector('.ing-item__dot').style.getPropertyValue('--c') };
  });
  const N = items.length;

  // ---------- state ----------
  const mobileNow = () => ctx.isMobile();
  let flat = null, scene = null;
  let cardTop = null, lastUser = -1e9, lastSwitch = performance.now(), visible = false, ready = false;
  let vizRect = { w: 0, h: 0 }, stageOff = { x: 0, y: 0 }, stageW = 0, stageH = 0, isMob = mobileNow();

  // ---------- card ----------
  let active = 0, swapTimer = 0;
  function fillCard(i) {
    const it = items[i];
    f('count').textContent = `Ingrediens ${pad(i + 1)} / ${pad(N)}`;
    f('name').textContent = it.name;
    f('inci').textContent = it.inci;
    f('desc').textContent = it.desc;
    f('in').textContent = it.in;
    f('in-wrap').hidden = !it.in;
    card.style.setProperty('--sw', it.swatch);
  }
  function setActive(i, { user = false } = {}) {
    if (user) lastUser = performance.now();
    if (i === active) return;
    active = i;
    lastSwitch = performance.now();
    btns.forEach((b, j) => b.setAttribute('aria-pressed', String(j === i)));
    scene && scene.setFocus(i);
    clearTimeout(swapTimer);
    if (reduced) { fillCard(i); return; }
    card.classList.add('is-swapping');
    swapTimer = setTimeout(() => { fillCard(i); requestAnimationFrame(() => card.classList.remove('is-swapping')); }, 170);
  }
  fillCard(0);

  // ---------- list ----------
  let hoverTimer = 0;
  btns.forEach((b, i) => {
    b.addEventListener('click', () => { root.classList.add('has-touched'); setActive(i, { user: true }); });
    b.addEventListener('focus', () => setActive(i, { user: true }));
    if (canHover) {
      b.addEventListener('pointerenter', () => { clearTimeout(hoverTimer); hoverTimer = setTimeout(() => setActive(i, { user: true }), 60); });
      b.addEventListener('pointerleave', () => clearTimeout(hoverTimer));
    }
    b.addEventListener('keydown', (e) => {
      const k = e.key;
      let n = -1;
      if (k === 'ArrowDown' || k === 'ArrowRight') n = (i + 1) % N;
      else if (k === 'ArrowUp' || k === 'ArrowLeft') n = (i - 1 + N) % N;
      else if (k === 'Home') n = 0; else if (k === 'End') n = N - 1;
      if (n >= 0) { e.preventDefault(); btns[n].focus(); }
    });
  });

  // ---------- scene (WebGL, or a flat DOM fallback with the same API) ----------
  try {
    if (!window.WebGLRenderingContext) throw new Error('no webgl');
    scene = createIngredientScene({ canvas, items, reduced, mobile: mobileNow() });
    root.classList.add('is-live');
    canvas.addEventListener('webglcontextlost', (e) => { e.preventDefault(); toStatic(); }, { once: true });
  } catch (e) {
    scene = null;
  }
  if (!scene) toStatic();

  function toStatic() {
    try { scene && scene !== flat && scene.dispose && scene.dispose(); } catch (e) { /* ignore */ }
    root.classList.remove('is-live'); root.classList.add('is-static');
    scene = flat = createFlat();
    scene.onFrame = onFrame;
    layout(); scene.setFocus(active); scene.enter(); scene.start();
  }
  function createFlat() {
    // the same cluster, flattened: DOM discs with CSS light; still hover/tap-able
    fallback.innerHTML = '';
    const homes = [[0, .02], [-1.04, .6], [.96, .84], [1.06, -.44], [-.9, -.72], [.14, -1.18], [-.22, 1.2]];
    const els = items.map((it, i) => {
      const el = document.createElement('span');
      el.className = 'ing-drop';
      el.style.setProperty('--c', it.color); el.style.setProperty('--d', it.deep);
      el.addEventListener('pointerenter', () => canHover && setActive(i, { user: true }));
      el.addEventListener('click', () => setActive(i, { user: true }));
      fallback.appendChild(el);
      return el;
    });
    let L = { cx: 0, cy: 0, fit: 100 }, foc = 0, cb = null, raf = 0, on = false;
    const pos = (i) => {
      const s = L.fit / 1.9, it = items[i];
      const h = i === foc ? [L.focusX ?? .3, L.focusY ?? .05] : homes[i].map((v) => v * (foc >= 0 ? 1.08 : 1));
      const r = it.r * s * (i === foc ? 1.12 : 1);
      return { x: L.cx + h[0] * s, y: L.cy - h[1] * s, r, a: 1 };
    };
    const place = () => els.forEach((el, i) => { const p = pos(i); Object.assign(el.style, { left: `${p.x - p.r}px`, top: `${p.y - p.r}px`, width: `${p.r * 2}px`, height: `${p.r * 2}px`, zIndex: i === foc ? 2 : 1 }); el.classList.toggle('is-dim', foc >= 0 && i !== foc); });
    const loop = () => { if (!on) return; cb && cb(1 / 60); raf = requestAnimationFrame(loop); };
    return {
      setSize(w, h, l) { L = l; place(); },
      setFocus(i) { foc = i; place(); },
      enter() {}, start() { if (!on) { on = true; loop(); } }, stop() { on = false; cancelAnimationFrame(raf); },
      project: (i) => pos(i), hitTest: () => -1, setPointer() {}, dispose() {},
      set onFrame(fn) { cb = fn; },
    };
  }

  // ---------- layout ----------
  function layout() {
    isMob = mobileNow();
    const vr = viz.getBoundingClientRect(), sr = stage.getBoundingClientRect();
    vizRect = { w: vr.width, h: vr.height };
    stageOff = { x: sr.left - vr.left, y: sr.top - vr.top };
    stageW = sr.width; stageH = sr.height;
    let l;
    if (isMob) {
      l = { cx: stageW / 2, cy: stageH * .5, fit: Math.min(stageW * .5, stageH * .5) * .86, focusX: 0, focusY: .05 };
    } else {
      const cw = card.offsetWidth || 300;
      const free = stageW - cw - 16;
      const fit = Math.min(free * .5, stageH * .4);
      l = { cx: free * .5, cy: stageH * .5, fit, focusX: .12, focusY: .02 };
    }
    scene && scene.setSize(stageW, stageH, l);
    cardTop = null;
  }
  const ro = new ResizeObserver(() => layout());
  ro.observe(viz);

  // ---------- frame: card follows the drop, dotted line between them ----------
  function onFrame(dt) {
    const p = scene && scene.project(active);
    if (!p) return;
    const cx = p.x + stageOff.x, cy = p.y + stageOff.y;
    let ex, ey;
    if (!isMob) {
      const ch = card.offsetHeight, cw = card.offsetWidth;
      const target = Math.max(4, Math.min(vizRect.h - ch - 4, cy - ch * .46));
      cardTop = cardTop == null ? target : cardTop + (target - cardTop) * (1 - Math.exp(-dt * 3.4));
      card.style.transform = `translate3d(0, ${cardTop.toFixed(2)}px, 0)`;
      ex = vizRect.w - cw;
      ey = Math.max(cardTop + 34, Math.min(cardTop + ch - 34, cy));
    } else {
      const ct = card.offsetTop, cl = card.offsetLeft, cw = card.offsetWidth;
      ex = Math.max(cl + 36, Math.min(cl + cw - 36, cx));
      ey = ct;
    }
    let dx = ex - cx, dy = ey - cy;
    const len = Math.hypot(dx, dy) || 1;
    dx /= len; dy /= len;
    const sx = cx + dx * (p.r + 2), sy = cy + dy * (p.r + 2);
    const show = len > p.r + 26;
    const fx = ex - dx * 5, fy = ey - dy * 5;
    line.setAttribute('d', show ? `M${sx.toFixed(1)} ${sy.toFixed(1)}L${fx.toFixed(1)} ${fy.toFixed(1)}` : 'M0 0');
    ring.setAttribute('cx', sx.toFixed(1)); ring.setAttribute('cy', sy.toFixed(1));
    endDot.setAttribute('cx', fx.toFixed(1)); endDot.setAttribute('cy', fy.toFixed(1));
    ring.style.opacity = endDot.style.opacity = show ? '' : '0';

    // calm auto-tour until someone interacts
    const now = performance.now();
    if (!reduced && ready && visible && now - lastUser > 12000 && now - lastSwitch > 5600) setActive((active + 1) % N);
  }
  scene.onFrame = onFrame;

  // ---------- pointer on the stage: stir + hover/tap a drop ----------
  const local = (e) => { const r = stage.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
  let hoverHit = -1, dwell = 0;
  stage.addEventListener('pointermove', (e) => {
    const [x, y] = local(e);
    scene.setPointer(x, y);
    if (e.pointerType !== 'mouse') return;
    lastUser = performance.now();
    const h = scene.hitTest(x, y);
    stage.classList.toggle('is-over', h >= 0);
    if (h !== hoverHit) { hoverHit = h; clearTimeout(dwell); if (h >= 0 && h !== active) dwell = setTimeout(() => setActive(h, { user: true }), 90); }
  });
  stage.addEventListener('pointerleave', () => { scene.setPointer(null); stage.classList.remove('is-over'); hoverHit = -1; clearTimeout(dwell); });
  stage.addEventListener('pointerdown', (e) => {
    const [x, y] = local(e);
    scene.setPointer(x, y);
    const h = scene.hitTest(x, y);
    if (h >= 0) { root.classList.add('has-touched'); setActive(h, { user: true }); }
  });
  stage.addEventListener('pointerup', (e) => { if (e.pointerType !== 'mouse') scene.setPointer(null); });

  // ---------- visibility ----------
  layout();
  scene.setFocus(active);
  let entered = false;
  visibilityGate(root, (v) => {
    visible = v;
    if (v) {
      if (!entered) {
        entered = true; layout(); scene.enter();
        setTimeout(() => { ready = true; root.classList.add('is-ready'); }, reduced ? 0 : 1100);
      }
      scene.start();
    } else scene.stop();
  });
}
