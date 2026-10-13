// OFFERS – live countdown (calm rolling digits), honest cart threshold meter, and a quiet WebGL layer of
// glass/oil bubbles rising with viscous buoyancy behind the night band.
import * as THREE from 'three';
import { visibilityGate, dpr } from '../../core/three-utils.js';

export default function init(root, ctx) {
  const q = new URLSearchParams(location.search);
  const reduced = ctx.prefersReducedMotion;
  initClock(root, ctx, q, reduced);
  initMeter(root, ctx, q, reduced);
  initGiftTip(root, ctx);
  try { initBubbles(root, ctx, reduced); } catch (e) { /* static CSS fallback stays visible */ }
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
  const endLine = el.querySelector('[data-clock-end]');
  const endText = endLine && [...endLine.childNodes].find(n => n.nodeType === 3 && n.textContent.trim());
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
    if (!animate || reduced || !d.el.animate) { d.cur.textContent = v; return; }
    const old = d.cur;
    const nu = document.createElement('span'); nu.className = 'offers-dg__v'; nu.textContent = v;
    d.el.append(nu); d.cur = nu;
    // counting down: the drum turns downward – old digit sinks out, new one settles in from above
    const a = old.animate([
      { transform: 'translateY(0)', opacity: 1, filter: 'blur(0px)' },
      { transform: 'translateY(52%)', opacity: 0, filter: 'blur(1.2px)' }], { duration: 620, easing: EASE, fill: 'forwards' });
    a.onfinish = () => old.remove();
    nu.animate([
      { transform: 'translateY(-52%)', opacity: 0, filter: 'blur(1.2px)' },
      { transform: 'translateY(0)', opacity: 1, filter: 'blur(0px)' }], { duration: 780, easing: EASE });
  }

  let lastState = '', lastMinute = -1;
  function render(animate) {
    const t = now();
    let state = t < start ? 'pre' : t >= end ? 'ended' : (end - t <= 864e5 ? 'last' : 'live');
    if (state !== lastState) {
      el.dataset.state = state; lastState = state;
      label.textContent = state === 'pre' ? 'Black Week begynder om' : state === 'ended' ? 'Black Week er slut' : state === 'last' ? 'Sidste dag – Black Week slutter om' : 'Black Week slutter om';
      if (endText) endText.textContent = state === 'pre' ? ' Starter mandag 23. november' : state === 'last' ? ' Slutter i aften kl. 23.59' : ' Slutter mandag 30. november kl. 23.59';
      if (done) done.hidden = state !== 'ended';
    }
    if (state === 'ended') { if (sr) sr.textContent = 'Black Week er slut.'; return; }
    const target = state === 'pre' ? start : end;
    const left = Math.max(0, Math.floor((target - t) / 1000));
    const vals = [Math.floor(left / 86400), Math.floor(left / 3600) % 24, Math.floor(left / 60) % 60, left % 60];
    vals.forEach((n, i) => {
      const s = String(Math.min(n, 99)).padStart(2, '0');
      units[i].dgs.forEach((d, k) => roll(d, s[k], animate));
    });
    units[0].lbl && (units[0].lbl.textContent = vals[0] === 1 ? 'dag' : 'dage');
    units[1].lbl && (units[1].lbl.textContent = vals[1] === 1 ? 'time' : 'timer');
    const minute = Math.floor(left / 60);
    if (sr && minute !== lastMinute) {
      lastMinute = minute;
      const d = vals[0], h = vals[1], m = vals[2];
      sr.textContent = `${state === 'pre' ? 'Black Week begynder om' : 'Black Week slutter om'} ${d} ${d === 1 ? 'dag' : 'dage'}, ${h} ${h === 1 ? 'time' : 'timer'} og ${m} ${m === 1 ? 'minut' : 'minutter'}.`;
    }
  }
  render(false);
  const tick = () => { render(true); setTimeout(tick, 1000 - (now() % 1000) + 12); };
  setTimeout(tick, 1000 - (now() % 1000) + 12);
}

/* ------------------------------------------------------------------ threshold meter */
function initMeter(root, ctx, q, reduced) {
  const m = root.querySelector('[data-meter]');
  if (!m) return;
  const { giftThreshold: G, freeShipping: S, giftValue } = ctx.campaign;
  const kr = ctx.fmt.kr;
  const text = m.querySelector('[data-meter-text]');
  const sumEl = m.querySelector('[data-meter-sum]');
  const track = m.querySelector('[data-meter-track]');
  const ms = { ship: m.querySelector('[data-ms="399"]'), gift: m.querySelector('[data-ms="699"]') };
  m.style.setProperty('--at-ship', (S / G).toFixed(4));

  let shown = 0, raf = 0, prevLevel = -1;
  function tweenSum(to) {
    cancelAnimationFrame(raf);
    if (reduced) { shown = to; sumEl.textContent = kr(to); return; }
    const from = shown, t0 = performance.now(), dur = 900;
    const step = (t) => {
      const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 4);
      shown = from + (to - from) * e; sumEl.textContent = kr(shown);
      if (k < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
  }

  function update() {
    const sum = ctx.store.subtotal();
    const level = sum >= G ? 2 : sum >= S ? 1 : 0;
    m.style.setProperty('--p', Math.min(1, sum / G).toFixed(4));
    m.dataset.level = level;
    m.toggleAttribute('data-empty', sum === 0);
    if (sum === 0) text.innerHTML = `Fri fragt over ${kr(S)} <span class="offers-soft">–</span> og en gratis CBD Lip Balm over ${kr(G)}`;
    else if (level === 0) text.innerHTML = `Du mangler <b>${kr(S - sum)}</b> til fri fragt`;
    else if (level === 1) text.innerHTML = `Fri fragt er klaret. Du mangler <b>${kr(G - sum)}</b> til en gratis CBD Lip Balm`;
    else text.innerHTML = `Fri fragt og en gratis CBD Lip Balm <span class="offers-soft">(værdi ${kr(giftValue)})</span> følger med din ordre`;
    tweenSum(sum);
    ms.ship.classList.toggle('is-reached', level >= 1);
    ms.gift.classList.toggle('is-reached', level >= 2);
    if (prevLevel !== -1 && level > prevLevel && !reduced) {
      const land = level >= 2 && prevLevel < 2 ? ms.gift : ms.ship;
      setTimeout(() => { land.classList.remove('is-landing'); void land.offsetWidth; land.classList.add('is-landing'); }, 650);
    }
    prevLevel = level;
    track.setAttribute('aria-valuenow', String(Math.min(sum, G)));
    track.setAttribute('aria-valuetext', `${kr(sum)} i kurven`);
  }
  ctx.store.on((type) => { if (type === 'cart:add' || type === 'cart:change') update(); });
  update();

  // staging hook: ?offers-cart=skin-oil,serum adds those items (after a beat, so the motion is visible)
  const add = q.get('offers-cart');
  if (add) setTimeout(() => add.split(',').forEach(id => ctx.byId[id] && ctx.store.add(id, 1)), +(q.get('offers-cart-delay') || 900));
}

function initGiftTip(root, ctx) {
  const tip = root.querySelector('[data-gift-tip]');
  const kp = ctx.byId && ctx.byId['komplet-pakken'];
  if (!tip || !kp) return;
  if (kp.price >= ctx.campaign.giftThreshold) tip.textContent = `${kp.name} til ${ctx.fmt.kr(kp.price)} klarer det alene.`;
  else tip.remove();
}

/* ------------------------------------------------------------------ WebGL bubbles */
const VERT = /* glsl */`
  attribute float aSize; attribute float aSeed; attribute float aDepth;
  uniform vec2 uRes; uniform float uDpr;
  varying float vSeed; varying float vDepth; varying float vY; varying float vR;
  void main() {
    vec2 ndc = vec2(position.x / uRes.x * 2.0 - 1.0, 1.0 - position.y / uRes.y * 2.0);
    gl_Position = vec4(ndc, 0.0, 1.0);
    gl_PointSize = aSize * uDpr;
    vSeed = aSeed; vDepth = aDepth; vY = position.y / uRes.y; vR = aSize * 0.5 / uRes.y;
  }`;
const FRAG = /* glsl */`
  precision highp float;
  uniform float uTime; uniform float uFade;
  varying float vSeed; varying float vDepth; varying float vY; varying float vR;
  void main() {
    vec2 p = gl_PointCoord * 2.0 - 1.0; p.y = -p.y;
    float r = length(p);
    float aa = fwidth(r) * 1.25;
    float soft = vDepth * 0.2;                         // far bubbles sit out of focus
    float mask = 1.0 - smoothstep(1.0 - soft - aa, 1.0, r);
    if (mask <= 0.001) discard;
    float z = sqrt(max(0.0, 1.0 - r * r));
    vec3 n = vec3(p, z);
    vec3 L = normalize(vec3(-0.55, 0.62, 0.56));       // low, warm evening key from upper-left
    vec3 H = normalize(L + vec3(0.0, 0.0, 1.0));
    float ndh = max(dot(n, H), 0.0);
    float fres = pow(1.0 - z, 2.6);
    float rim = smoothstep(0.86, 0.975, r) * (1.0 - smoothstep(0.975, 1.0, r));
    float spec = pow(ndh, 90.0);
    float sheen = pow(ndh, 9.0);
    // light gathered through the drop, landing low on the far side (soft caustic)
    float caustic = exp(-pow(length(p - vec2(0.36, -0.44)) / 0.36, 2.0));
    // a secondary, smaller window reflection – what makes it read as glass/oil, not a ring
    float win = exp(-pow(length((p - vec2(-0.42, 0.46)) * vec2(1.0, 1.7)) / 0.15, 2.0));
    vec3 paper = vec3(0.965, 0.957, 0.933);
    vec3 sage  = vec3(0.714, 0.788, 0.761);
    vec3 sand  = vec3(0.867, 0.749, 0.639);
    vec3 amber = vec3(0.80, 0.56, 0.30);
    float warm = step(0.66, vSeed);                   // a third are amber "oil" drops
    float film = 0.5 + 0.5 * sin(6.2831 * (r * 1.35 + vSeed * 3.0) + uTime * 0.22);
    vec3 rimCol = mix(mix(sage, sand, warm), paper, 0.3 + 0.35 * film);
    vec3 col = rimCol * (fres * 0.5 + rim * 0.42)
             + mix(sand, amber, warm) * caustic * (0.16 + 0.22 * warm)
             + paper * (spec * 1.1 + win * 0.55 + sheen * 0.035);
    float a = fres * 0.30 + rim * 0.30 + caustic * (0.06 + 0.12 * warm) + spec * 0.9 + win * 0.45 + 0.02 + warm * 0.04;
    float focus = 1.0 - vDepth * 0.5;
    float edgeFade = smoothstep(0.02, 0.2, vY - p.y * vR);
    float k = mask * focus * edgeFade * uFade;
    gl_FragColor = vec4(col * k, min(a, 1.0) * k);
  }`;

function initBubbles(root, ctx, reduced) {
  const band = root.querySelector('.offers-night');
  const host = root.querySelector('.offers-gl');
  if (!band || !host) return;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, premultipliedAlpha: true, powerPreference: 'low-power' });
  } catch (e) { return; }
  renderer.setPixelRatio(dpr());
  renderer.setClearColor(0x000000, 0);
  host.prepend(renderer.domElement);
  host.classList.add('is-gl');

  const mobile = ctx.isMobile();
  const N = mobile ? 7 : 12;
  const pos = new Float32Array(N * 3), size = new Float32Array(N), seed = new Float32Array(N), depth = new Float32Array(N);
  const geo = new THREE.BufferGeometry();
  const posAttr = new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage);
  geo.setAttribute('position', posAttr);
  geo.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
  geo.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
  geo.setAttribute('aDepth', new THREE.BufferAttribute(depth, 1));
  const uniforms = { uRes: { value: new THREE.Vector2(1, 1) }, uDpr: { value: dpr() }, uTime: { value: 0 }, uFade: { value: reduced ? 1 : 0 } };
  const mat = new THREE.ShaderMaterial({ uniforms, vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthTest: false, depthWrite: false, premultipliedAlpha: true });
  const points = new THREE.Points(geo, mat); points.frustumCulled = false;
  const scene = new THREE.Scene(); scene.add(points);
  const camera = new THREE.Camera();

  let W = 1, H = 1;
  // deterministic-ish seeded random so the composition is calm and balanced on every load
  let s0 = 7; const rnd = () => ((s0 = (s0 * 16807) % 2147483647) / 2147483647);
  const B = [];
  for (let i = 0; i < N; i++) {
    const z = 1 - i / (N - 1) * 0.92 - rnd() * 0.06;   // far (1) → near (0); drawn back-to-front
    B.push({ i, z, x: 0, y: 0, vx: 0, vy: 0, r: 0, ph: rnd() * 6.283, seed: rnd() });
  }
  function spawn(b, initial) {
    const near = 1 - b.z;
    b.r = (mobile ? 0.62 : 1) * (9 + Math.pow(rnd(), 1.7) * 44 + near * 22);
    // keep the right-hand column (the countdown) a little quieter: bias spawns away from it on desktop
    let x = rnd();
    if (!mobile && x > 0.6 && x < 0.95 && rnd() < 0.5) x = rnd() * 0.55;
    b.x = x * W;
    b.y = initial ? (0.15 + rnd() * 0.85) * H : H + b.r + rnd() * H * 0.25;
    b.vx = 0; b.vy = initial ? -(6 + b.r * 0.3) : 0; b.seed = rnd(); b.ph = rnd() * 6.283;
    size[b.i] = b.r * 2; seed[b.i] = b.seed; depth[b.i] = b.z;
    geo.attributes.aSize.needsUpdate = true; geo.attributes.aSeed.needsUpdate = true; geo.attributes.aDepth.needsUpdate = true;
  }

  function resize() {
    const r = band.getBoundingClientRect();
    const nw = Math.max(1, Math.round(r.width)), nh = Math.max(1, Math.round(r.height));
    const first = W === 1;
    if (!first) B.forEach(b => { b.x *= nw / W; b.y *= nh / H; });
    W = nw; H = nh;
    renderer.setSize(W, H, false);
    uniforms.uRes.value.set(W, H);
    if (first) B.forEach(b => spawn(b, true));
  }
  resize();
  new ResizeObserver(resize).observe(band);

  // pointer = a slow spoon through serum: it pushes and drags, the fluid settles it again
  const ptr = { x: -9999, y: -9999, vx: 0, vy: 0, on: false, t: 0 };
  if (!reduced) {
    band.addEventListener('pointermove', (e) => {
      const r = band.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top, now = performance.now();
      const dt = Math.max(8, now - ptr.t) / 1000;
      if (ptr.on) { ptr.vx = ptr.vx * 0.6 + ((x - ptr.x) / dt) * 0.4; ptr.vy = ptr.vy * 0.6 + ((y - ptr.y) / dt) * 0.4; }
      ptr.x = x; ptr.y = y; ptr.on = true; ptr.t = now;
    }, { passive: true });
    band.addEventListener('pointerleave', () => { ptr.on = false; ptr.vx = ptr.vy = 0; }, { passive: true });
  }
  // scroll inertia: the "fluid" lags a touch behind the page, then catches up
  let lastScroll = scrollY, scrollKick = 0;
  addEventListener('scroll', () => { scrollKick += scrollY - lastScroll; lastScroll = scrollY; }, { passive: true });

  // calm zones: bubbles are gently steered off the headline and the countdown digits (they may pass behind, never park)
  let zones = [];
  const zoneEls = [root.querySelector('.offers-title'), root.querySelector('.offers-clock__digits')].filter(Boolean);
  function measureZones() {
    const br = band.getBoundingClientRect();
    zones = zoneEls.map(z => { const r = z.getBoundingClientRect(); return { x0: r.left - br.left, y0: r.top - br.top, x1: r.right - br.left, y1: r.bottom - br.top }; });
  }
  measureZones(); new ResizeObserver(measureZones).observe(band);
  addEventListener('load', measureZones);

  function step(dt, t) {
    const kick = Math.max(-60, Math.min(60, scrollKick)); scrollKick = 0;
    ptr.vx *= Math.exp(-dt * 6); ptr.vy *= Math.exp(-dt * 6);
    for (const b of B) {
      const near = 1 - b.z;
      const terminal = -(5 + b.r * 0.36) * (0.55 + near * 0.45);          // Stokes-ish: bigger rises faster
      const wob = Math.sin(t * (0.22 + b.seed * 0.12) + b.ph) * (3 + b.r * 0.07);
      let ax = (wob - b.vx) * 0.8, ay = (terminal - b.vy) * 0.8;
      if (ptr.on) {
        const dx = b.x - ptr.x, dy = b.y - ptr.y, d = Math.hypot(dx, dy) || 1, R = 150 + b.r;
        if (d < R) {
          const f = Math.pow(1 - d / R, 2) * (0.35 + near * 0.65);
          ax += (dx / d) * f * 90 + ptr.vx * f * 0.9;
          ay += (dy / d) * f * 90 + ptr.vy * f * 0.9;
        }
      }
      for (const z of zones) {
        const pad = b.r * 0.9 + 12;
        if (b.x > z.x0 - pad && b.x < z.x1 + pad && b.y > z.y0 - pad && b.y < z.y1 + pad) {
          const cx = (z.x0 + z.x1) / 2, dir = b.x < cx ? -1 : 1;
          const edge = dir < 0 ? (b.x - (z.x0 - pad)) : ((z.x1 + pad) - b.x);
          ax += dir * Math.min(1, edge / 120) * 70 * (0.25 + near * 0.75);
        }
      }
      b.vy += kick * 0.9 * (0.3 + near * 0.7);
      b.vx += ax * dt; b.vy += ay * dt;
      const sp = Math.hypot(b.vx, b.vy), max = 140; if (sp > max) { b.vx *= max / sp; b.vy *= max / sp; }
    }
    // soft separation between bubbles at a similar depth (they never overlap like stickers)
    for (let i = 0; i < N; i++) for (let j = i + 1; j < N; j++) {
      const a = B[i], c = B[j];
      if (Math.abs(a.z - c.z) > 0.3) continue;
      const dx = c.x - a.x, dy = c.y - a.y, d = Math.hypot(dx, dy) || 1, min = (a.r + c.r) * 1.08;
      if (d < min) { const push = (min - d) * 0.5 * dt * 2.2, nx = dx / d, ny = dy / d; a.vx -= nx * push * 8; a.vy -= ny * push * 8; c.vx += nx * push * 8; c.vy += ny * push * 8; }
    }
    for (const b of B) {
      b.x += b.vx * dt; b.y += b.vy * dt;
      if (b.y < -b.r * 1.3) spawn(b, false);
      if (b.x < -b.r) b.x = W + b.r; else if (b.x > W + b.r) b.x = -b.r;
      pos[b.i * 3] = b.x; pos[b.i * 3 + 1] = b.y; pos[b.i * 3 + 2] = 0;
    }
    posAttr.needsUpdate = true;
  }

  const draw = (t) => { uniforms.uTime.value = t; renderer.render(scene, camera); };

  if (reduced) {
    for (let k = 0; k < 120; k++) step(1 / 30, k / 30);
    draw(4);
    return;
  }
  // pre-roll so the first frame is already a settled, living composition
  for (let k = 0; k < 90; k++) step(1 / 30, k / 30);

  let running = false, last = 0, time = 3;
  const isVisible = visibilityGate(band, (v) => { if (v && !running) { running = true; last = performance.now(); requestAnimationFrame(loop); } });
  function loop(now) {
    if (!isVisible() || document.hidden) { running = false; return; }
    const dt = Math.min(1 / 30, (now - last) / 1000); last = now; time += dt;
    uniforms.uFade.value = Math.min(1, uniforms.uFade.value + dt * 0.8);
    step(dt, time); draw(time);
    requestAnimationFrame(loop);
  }
  document.addEventListener('visibilitychange', () => { if (!document.hidden && isVisible() && !running) { running = true; last = performance.now(); requestAnimationFrame(loop); } });
}
