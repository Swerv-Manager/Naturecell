// NatureCell® Black Week – ingredients: a slowly turning cluster of translucent oil droplets
// suspended in a viscous serum. Physics: soft spring to a (slowly rotating) home, soft pair repulsion,
// buoyancy + slow currents, cursor stir – everything critically damped (oil, never springy).
// One renderer, custom shaders (no env maps / network), DPR capped, render loop gated by visibility.
import * as THREE from 'three';
import { dpr as capDpr } from '../../core/three-utils.js';

const rgb = (h) => { const n = parseInt(h.replace('#', ''), 16); return new THREE.Vector3(((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255); };

// home layout – a loose, hand-balanced cluster in local units (CBD sits in the middle)
const HOME = [
  [0.0, 0.02, 0.28],
  [-1.04, 0.6, -0.18],
  [0.96, 0.84, -0.4],
  [1.06, -0.44, 0.12],
  [-0.9, -0.72, 0.34],
  [0.14, -1.18, -0.46],
  [-0.22, 1.2, 0.02],
];
const CLUSTER_R = 1.9;      // local radius used to fit the cluster to the stage
const FOV = 28;
const CAM_Z = 10;

const VERT = /* glsl */`
uniform float uTime; uniform float uSeed; uniform float uWob; uniform vec3 uVel;
varying vec3 vN; varying vec3 vW;
void main() {
  vec3 p = position; vec3 n = normal;
  // slow viscous surface wobble
  float w = sin(p.x * 2.6 + uTime * .62 + uSeed) * sin(p.y * 2.3 + uTime * .5 + uSeed * 1.7) * sin(p.z * 2.1 + uTime * .74 + uSeed * .6);
  p += n * w * .045 * uWob;
  // squash/stretch along the velocity (mesh is never rotated, so object space == world orientation)
  float sp = length(uVel);
  if (sp > 1e-4) { vec3 d = uVel / sp; float k = clamp(sp * .09, 0., .16); float a = dot(p, d); p += d * a * k - (p - d * a) * k * .5; }
  vec4 wp = modelMatrix * vec4(p, 1.);
  vW = wp.xyz; vN = normalize(mat3(modelMatrix) * n);
  gl_Position = projectionMatrix * viewMatrix * wp;
}`;

const FRAG = /* glsl */`
uniform vec3 uTint; uniform vec3 uDeep; uniform float uDim; uniform float uFocus; uniform float uAlpha; uniform float uTime;
varying vec3 vN; varying vec3 vW;
const vec3 KEY = vec3(-.52, .63, .58);     // soft evening window, upper left
const vec3 WARM = vec3(.82, .1, -.56);      // warm low sun behind right
vec3 env(vec3 r) {
  vec3 top = vec3(1., .995, .975), hor = vec3(.955, .955, .93), bot = vec3(.56, .65, .61);
  vec3 c = r.y > 0. ? mix(hor, top, smoothstep(0., .7, r.y)) : mix(hor, bot, smoothstep(0., -.55, r.y));
  float d = dot(r, normalize(KEY));
  c += vec3(1., .98, .94) * smoothstep(.9, .968, d) * .85;          // window
  c += vec3(.99, .86, .7) * smoothstep(.72, .95, dot(r, normalize(WARM))) * .4;
  return c;
}
void main() {
  vec3 N = normalize(vN); vec3 V = normalize(cameraPosition - vW);
  float ndv = clamp(dot(N, V), 0., 1.);
  float rim = 1. - ndv;
  float fres = pow(rim, 2.4);
  vec3 R = reflect(-V, N);
  vec3 E = env(R);
  // body: thin & clear in the middle, denser oil colour towards the silhouette
  float edge = smoothstep(.1, 1., rim);
  vec3 body = mix(uTint, uDeep, edge * .8);
  // focused caustic: light gathered on the lower right inside the drop
  float caus = pow(max(dot(N, normalize(vec3(.42, -.52, .74))), 0.), 4.5);
  body = mix(body, vec3(1., .985, .94), caus * .62);
  vec3 col = mix(body, E, fres * .8);
  // fine dark meniscus just inside the rim – defines the drop on a pale ground
  float men = smoothstep(.78, .95, rim) * (1. - smoothstep(.95, 1., rim));
  col = mix(col, uDeep * .72, men * .32 * (1. - uDim * .6));
  // highlights: a crisp window glint + a soft sheen; defocused drops lose the crisp one
  vec3 H = normalize(normalize(KEY) + V);
  float nh = max(dot(N, H), 0.);
  float spec = pow(nh, mix(340., 46., uDim)) * mix(1.25, .22, uDim);
  float sheen = pow(nh, 14.) * .1;
  float back = pow(max(dot(N, normalize(vec3(-.4, -.7, .55))), 0.), 22.) * .22 * (1. - uDim); // secondary glint
  col += vec3(1.) * (spec + sheen + back);
  float a = mix(.46, .92, edge) + caus * .08;
  a = max(a, min(1., spec + back));
  // defocus: lift towards paper and thin out
  vec3 paper = vec3(.953, .965, .957);
  col = mix(col, mix(col, paper, .38), uDim);
  a *= uAlpha * (1. - uDim * .3);
  gl_FragColor = vec4(col, a);
}`;

const MOTE_VERT = /* glsl */`
attribute float aSize; attribute float aSeed;
uniform float uTime; uniform vec3 uBox; uniform float uPx; uniform float uMotion;
varying float vA;
void main() {
  vec3 u = position;
  u.y = fract(u.y + uTime * (.006 + aSeed * .01) * uMotion);
  u.x += sin(uTime * .21 * uMotion + aSeed * 6.28) * .012;
  vec3 p = (u - .5) * uBox;
  vec4 mv = modelViewMatrix * vec4(p, 1.);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aSize * uPx / -mv.z;
  vA = smoothstep(0., .14, u.y) * (1. - smoothstep(.82, 1., u.y));
}`;
const MOTE_FRAG = /* glsl */`
uniform float uAlpha; varying float vA;
void main() {
  vec2 c = gl_PointCoord * 2. - 1.; float d = length(c);
  if (d > 1.) discard;
  float ring = smoothstep(.62, .9, d) * (1. - smoothstep(.9, 1., d));
  float hl = 1. - smoothstep(0., .34, length(c - vec2(-.32, -.34)));
  vec3 col = mix(vec3(.44, .56, .52), vec3(1.), hl);
  float a = (ring * .55 + hl * .7 + .06) * vA * uAlpha;
  gl_FragColor = vec4(col, a);
}`;

export function createIngredientScene({ canvas, items, reduced = false, mobile = false }) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, premultipliedAlpha: true, powerPreference: 'high-performance' });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(capDpr());
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(FOV, 1, .1, 60);
  camera.position.set(0, 0, CAM_Z);
  const tanHalf = Math.tan(THREE.MathUtils.degToRad(FOV / 2));

  const geo = new THREE.SphereGeometry(1, mobile ? 56 : 72, mobile ? 40 : 54);
  const drops = items.map((it, i) => {
    const mat = new THREE.ShaderMaterial({
      vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false,
      uniforms: {
        uTime: { value: 0 }, uSeed: { value: i * 1.71 + .4 }, uWob: { value: reduced ? 0 : 1 }, uVel: { value: new THREE.Vector3() },
        uTint: { value: rgb(it.color) }, uDeep: { value: rgb(it.deep) }, uDim: { value: 0 }, uFocus: { value: 0 }, uAlpha: { value: 0 }, uTimeF: { value: 0 },
      },
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.renderOrder = 1;
    scene.add(mesh);
    const h = HOME[i % HOME.length];
    const home = new THREE.Vector3(h[0], h[1], h[2]);
    return { mesh, mat, r: it.r, home, p: home.clone().add(new THREE.Vector3(0, -3.4 - i * .18, 0)), v: new THREE.Vector3(), vs: new THREE.Vector3(),
      sc: 1, dim: 0, foc: 0, alpha: 0, seed: i * 1.37 + .5, m: Math.min(2.2, Math.max(.6, Math.pow(it.r / .5, 3))) };
  });

  // drifting micro-bubbles for depth
  const MOTES = mobile ? 22 : 34;
  const mg = new THREE.BufferGeometry();
  const mp = new Float32Array(MOTES * 3), ms = new Float32Array(MOTES), md = new Float32Array(MOTES);
  for (let i = 0; i < MOTES; i++) {
    const r1 = Math.sin(i * 12.9898) * 43758.5453, r2 = Math.sin(i * 78.233) * 12345.678, r3 = Math.sin(i * 39.425) * 9876.54;
    mp[i * 3] = r1 - Math.floor(r1); mp[i * 3 + 1] = r2 - Math.floor(r2); mp[i * 3 + 2] = r3 - Math.floor(r3);
    ms[i] = .05 + Math.pow((r1 * 7) - Math.floor(r1 * 7), 2.2) * .16; md[i] = (r3 * 3) - Math.floor(r3 * 3);
  }
  mg.setAttribute('position', new THREE.BufferAttribute(mp, 3));
  mg.setAttribute('aSize', new THREE.BufferAttribute(ms, 1));
  mg.setAttribute('aSeed', new THREE.BufferAttribute(md, 1));
  const moteMat = new THREE.ShaderMaterial({ vertexShader: MOTE_VERT, fragmentShader: MOTE_FRAG, transparent: true, depthWrite: false,
    uniforms: { uTime: { value: 0 }, uBox: { value: new THREE.Vector3(8, 6, 4) }, uPx: { value: 600 }, uAlpha: { value: 0 }, uMotion: { value: reduced ? 0 : 1 } } });
  const motes = new THREE.Points(mg, moteMat);
  motes.position.z = -1.2;
  motes.renderOrder = 0;
  scene.add(motes);

  // ---- layout / state
  let W = 1, H = 1;
  const C = new THREE.Vector3();          // cluster centre (world)
  let S = 1;                              // cluster scale (local → world)
  let focusX = .3, focusY = .05;          // where the focused drop drifts to (local)
  let focus = -1;
  let theta = .35, t = 0, enterT = -1;
  const ptr = { on: false, x: 0, y: 0, lx: 0, ly: 0, vx: 0, vy: 0, has: false };
  const tmp = new THREE.Vector3(), tmp2 = new THREE.Vector3(), rot = new THREE.Euler(-.16, 0, 0);
  const homeNow = drops.map(() => new THREE.Vector3());

  function setSize(w, h, layout) {
    W = Math.max(1, w); H = Math.max(1, h);
    renderer.setSize(W, H, false);
    camera.aspect = W / H; camera.updateProjectionMatrix();
    const vh = 2 * CAM_Z * tanHalf, vw = vh * camera.aspect, ppw = H / vh;
    C.set((layout.cx / W - .5) * vw, -(layout.cy / H - .5) * vh, 0);
    S = layout.fit / (CLUSTER_R * ppw);
    focusX = layout.focusX ?? .3; focusY = layout.focusY ?? .05;
    moteMat.uniforms.uBox.value.set(vw * 1.15, vh * 1.15, 3);
    moteMat.uniforms.uPx.value = H / (2 * tanHalf) * capDpr() * .5;
  }

  function setFocus(i) { focus = i; }
  function enter() { if (enterT < 0) enterT = t; if (reduced) drops.forEach((d) => { d.p.copy(d.home); d.alpha = 1; }); }

  // ---- physics (fixed step, critically damped)
  const STEP = 1 / 120;
  let acc = 0;
  function step(dt) {
    const anyFocus = focus >= 0 ? 1 : 0;
    theta += dt * (reduced ? 0 : (anyFocus ? .045 : .07));
    rot.y = theta;
    for (let i = 0; i < drops.length; i++) {
      const d = drops[i], hn = homeNow[i];
      if (i === focus) hn.set(focusX, focusY, 1.55);
      else {
        hn.copy(d.home).applyEuler(rot);
        if (anyFocus) { hn.multiplyScalar(1.12); hn.z -= .75; }
      }
    }
    for (let i = 0; i < drops.length; i++) {
      const d = drops[i];
      const F = tmp.copy(homeNow[i]).sub(d.p).multiplyScalar(i === focus ? 2.6 : 2.0);
      if (!reduced) {
        F.y += .1 * Math.sin(t * .45 + d.seed * 2.1);
        F.x += .07 * Math.sin(t * .31 + d.seed * 3.3);
        F.z += .06 * Math.cos(t * .27 + d.seed);
      }
      // soft repulsion
      for (let j = 0; j < drops.length; j++) {
        if (j === i) continue;
        const o = drops[j];
        tmp2.copy(d.p).sub(o.p);
        const dist = tmp2.length() || 1e-4;
        const min = d.r * d.sc + o.r * o.sc + .1;
        if (dist < min) F.addScaledVector(tmp2.divideScalar(dist), (min - dist) * 7.5);
      }
      // cursor stir (in the screen plane, local units)
      if (ptr.on && !reduced) {
        const dx = d.p.x - ptr.lx, dy = d.p.y - ptr.ly, r2 = dx * dx + dy * dy;
        const w = Math.exp(-r2 / .9) * (i === focus ? .35 : 1);
        const sp = Math.min(1, Math.hypot(ptr.vx, ptr.vy));      // a resting cursor doesn't push – only a moving one stirs
        F.x += (ptr.vx * 1.1 + dx * .5 * sp) * w; F.y += (ptr.vy * 1.1 + dy * .5 * sp) * w;
      }
      d.v.addScaledVector(F, dt / d.m);
      d.v.multiplyScalar(Math.exp(-3.1 * dt));
      if (d.v.length() > 3) d.v.setLength(3);
      d.p.addScaledVector(d.v, dt);
    }
  }

  // ---- frame
  let running = false, raf = 0, last = 0, onFrame = null;
  function frame(now) {
    raf = running ? requestAnimationFrame(frame) : 0;
    const dt = Math.min(1 / 24, last ? (now - last) / 1000 : 1 / 60); last = now;
    t += dt;
    // pointer velocity (local units), eased
    ptr.vx *= Math.exp(-6 * dt); ptr.vy *= Math.exp(-6 * dt);
    if (enterT >= 0) {
      acc += dt; let n = 0;
      while (acc >= STEP && n < 8) { step(STEP); acc -= STEP; n++; }
      if (n === 8) acc = 0;
    }
    const k = 1 - Math.exp(-dt * 3.2);
    for (let i = 0; i < drops.length; i++) {
      const d = drops[i];
      const isF = i === focus, dimT = focus >= 0 && !isF ? 1 : 0;
      d.foc += ((isF ? 1 : 0) - d.foc) * k;
      d.dim += (dimT - d.dim) * k;
      d.sc += ((isF ? 1.12 : 1) - d.sc) * k;
      if (enterT >= 0) d.alpha = Math.min(1, Math.max(0, (t - enterT - i * .09) / 1.6));
      const ea = d.alpha * d.alpha * (3 - 2 * d.alpha);
      d.vs.lerp(d.v, k);
      d.mesh.position.copy(C).addScaledVector(d.p, S);
      d.mesh.scale.setScalar(d.r * d.sc * S);
      const u = d.mat.uniforms;
      u.uTime.value = t; u.uDim.value = d.dim * .62; u.uFocus.value = d.foc; u.uAlpha.value = ea;
      u.uVel.value.copy(d.vs).multiplyScalar(1 / Math.max(.2, d.r));
    }
    moteMat.uniforms.uTime.value = t;
    moteMat.uniforms.uAlpha.value = enterT >= 0 ? Math.min(1, (t - enterT) / 2.4) : 0;
    renderer.render(scene, camera);
    onFrame && onFrame(dt);
  }

  // ---- projection helpers (canvas CSS px)
  function project(i) {
    const d = drops[i];
    if (!d) return null;
    tmp.copy(d.mesh.position).project(camera);
    const dist = camera.position.distanceTo(d.mesh.position);
    const r = (d.r * d.sc * S) / (dist * tanHalf) * H / 2;
    return { x: (tmp.x + 1) / 2 * W, y: (1 - tmp.y) / 2 * H, r, a: d.alpha };
  }
  const ray = new THREE.Ray();
  function rayAt(x, y) {
    tmp.set(x / W * 2 - 1, -(y / H) * 2 + 1, .5).unproject(camera);
    ray.origin.copy(camera.position); ray.direction.copy(tmp).sub(camera.position).normalize();
    return ray;
  }
  function hitTest(x, y) {
    rayAt(x, y);
    let best = -1, bestT = Infinity;
    const sph = new THREE.Sphere();
    for (let i = 0; i < drops.length; i++) {
      const d = drops[i];
      if (d.alpha < .5) continue;
      sph.set(d.mesh.position, d.r * d.sc * S * 1.02);
      const hit = ray.intersectSphere(sph, tmp2);
      if (hit) { const tt = hit.distanceTo(ray.origin); if (tt < bestT) { bestT = tt; best = i; } }
    }
    return best;
  }
  function setPointer(x, y) {
    if (x == null) { ptr.on = false; ptr.has = false; return; }
    rayAt(x, y);
    const tt = (C.z - ray.origin.z) / ray.direction.z;
    const wx = ray.origin.x + ray.direction.x * tt, wy = ray.origin.y + ray.direction.y * tt;
    const lx = (wx - C.x) / S, ly = (wy - C.y) / S;
    if (ptr.has) { ptr.vx += (lx - ptr.lx) * 4; ptr.vy += (ly - ptr.ly) * 4; ptr.vx = THREE.MathUtils.clamp(ptr.vx, -4, 4); ptr.vy = THREE.MathUtils.clamp(ptr.vy, -4, 4); }
    ptr.lx = lx; ptr.ly = ly; ptr.on = true; ptr.has = true;
  }

  function start() { if (running) return; running = true; last = 0; raf = requestAnimationFrame(frame); }
  function stop() { running = false; if (raf) cancelAnimationFrame(raf); raf = 0; }
  function renderOnce() { frame(performance.now()); }
  function dispose() { stop(); geo.dispose(); drops.forEach((d) => d.mat.dispose()); mg.dispose(); moteMat.dispose(); renderer.dispose(); }

  return { setSize, setFocus, enter, start, stop, project, hitTest, setPointer, renderOnce, dispose,
    set onFrame(fn) { onFrame = fn; }, get count() { return drops.length; }, homes: HOME };
}
