// NatureCell® Black Week – "Byg din rutine" stage (Three.js).
// A sage stone plinth under soft studio light. The chosen products stand on it as lit packshot billboards
// (real transparent photos) with projected contact shadows that sharpen at the base and soften with distance,
// a faint amber caustic behind the glass bottles, and an ambient-occlusion pad under every foot.
// Products glide on/off with a viscous, slightly under-critical spring; they lean a touch against their own
// motion (inertia) and lift off before they leave. Morgen ↔ Aften moves the light: higher and cooler in the
// morning, lower and warmer in the evening (shadows grow longer).
// World units ≈ 1 cm; relative product sizes are true to the real packs.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { dpr as capDpr } from '../../core/three-utils.js';

const R = 15.5;            // plinth radius
const H = 6.2;           // plinth height
const RT = R - 0.75;     // flat top radius (inside the rounded edge)
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const lerp = (a, b, t) => a + (b - a) * t;
const C = (hex) => new THREE.Color(hex);

// ---------------------------------------------------------------------------------------------------------
// Procedural stone (soft honed limestone in sage): low-frequency clouding, fine grain, sparse pores.
function stoneTextures(size = 512) {
  const c = document.createElement('canvas'); c.width = c.height = size;
  const g = c.getContext('2d');
  const img = g.createImageData(size, size);
  const rnd = (() => { let s = 7; return () => ((s = (s * 16807) % 2147483647) / 2147483647); })();
  // value-noise lattice, tileable
  const lat = (n) => { const a = new Float32Array(n * n); for (let i = 0; i < a.length; i++) a[i] = rnd(); return a; };
  const L = [lat(4), lat(8), lat(16), lat(48)];
  const sample = (a, n, x, y) => {
    const fx = x * n, fy = y * n, x0 = Math.floor(fx), y0 = Math.floor(fy), tx = fx - x0, ty = fy - y0;
    const sx = tx * tx * (3 - 2 * tx), sy = ty * ty * (3 - 2 * ty);
    const v = (i, j) => a[((j % n + n) % n) * n + ((i % n + n) % n)];
    return lerp(lerp(v(x0, y0), v(x0 + 1, y0), sx), lerp(v(x0, y0 + 1), v(x0 + 1, y0 + 1), sx), sy);
  };
  const ns = [4, 8, 16, 48], ws = [0.45, 0.28, 0.17, 0.10];
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const u = x / size, v = y / size;
    let n = 0; for (let k = 0; k < 4; k++) n += ws[k] * sample(L[k], ns[k], u, v);
    const grain = rnd() * 0.06;
    const val = 0.86 + (n - 0.5) * 0.16 + grain - 0.03;
    const i = (y * size + x) * 4;
    img.data[i] = img.data[i + 1] = img.data[i + 2] = clamp(val, 0, 1) * 255;
    img.data[i + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  // pores
  for (let k = 0; k < 900; k++) {
    const x = rnd() * size, y = rnd() * size, r = 0.4 + rnd() * rnd() * 1.6;
    g.fillStyle = `rgba(60,80,74,${0.12 + rnd() * 0.22})`;
    g.beginPath(); g.ellipse(x, y, r * (1 + rnd()), r, rnd() * 3, 0, 6.283); g.fill();
  }
  const map = new THREE.CanvasTexture(c);
  map.colorSpace = THREE.SRGBColorSpace;
  map.wrapS = map.wrapT = THREE.RepeatWrapping;
  map.anisotropy = 4;
  return map;
}

function radialTex(stops, size = 128) {
  const c = document.createElement('canvas'); c.width = c.height = size;
  const g = c.getContext('2d');
  const gr = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  stops.forEach(([o, a]) => gr.addColorStop(o, `rgba(255,255,255,${a})`));
  g.fillStyle = gr; g.fillRect(0, 0, size, size);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.NoColorSpace;
  return t;
}

// ---------------------------------------------------------------------------------------------------------
// Shaders
const CARD_VERT = /* glsl */`
  varying vec2 vUv;
  void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const CARD_FRAG = /* glsl */`
  uniform sampler2D map; uniform vec2 uTexel;
  uniform float uOpacity, uDim, uExpo, uHover;
  uniform vec3 uTint, uRim;
  varying vec2 vUv;
  void main(){
    vec4 c = texture2D(map, vUv);
    float a = c.a * uOpacity;
    if (a < 0.003) discard;
    vec3 col = c.rgb;
    // soft key from the left: a gentle falloff across the pack (photo already carries its own form light)
    col *= mix(1.05, 0.93, smoothstep(0.0, 1.0, vUv.x));
    // rim: where the silhouette meets air on the light side, add a thin warm edge
    float edgeL = c.a * (1.0 - texture2D(map, vUv - vec2(uTexel.x * 3.0, 0.0)).a);
    float edgeT = c.a * (1.0 - texture2D(map, vUv + vec2(0.0, uTexel.y * 3.0)).a);
    col += uRim * (edgeL * 0.55 + edgeT * 0.35);
    // contact: a breath of occlusion right at the foot
    col *= mix(0.80, 1.0, smoothstep(0.0, 0.045, vUv.y));
    col *= uTint * uExpo * (1.0 + uHover * 0.05);
    // resting (other time of day): quieter, desaturated towards sage
    float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
    col = mix(col, vec3(l) * vec3(0.84, 0.97, 0.94), uDim * 0.55) * (1.0 - uDim * 0.42);
    gl_FragColor = vec4(col, a);
    #include <colorspace_fragment>
  }`;

// Shadow: a parallelogram on the plinth top, the silhouette projected along the light. Mip bias grows with
// distance from the foot → crisp contact, soft far end. Clipped to the flat top of the plinth.
const SHADOW_VERT = /* glsl */`
  uniform vec3 uBase; uniform vec2 uSide, uDir; uniform float uW, uLen;
  varying vec2 vUv; varying vec2 vW;
  void main(){
    vUv = uv;
    float spread = 1.0 + uv.y * 0.18;                     // penumbra widens with distance
    vec3 p = vec3(uBase.x + uSide.x * (uv.x - 0.5) * uW * spread + uDir.x * uv.y * uLen, uBase.y,
             uBase.z + uSide.y * (uv.x - 0.5) * uW * spread + uDir.y * uv.y * uLen);
    vW = p.xz;
    gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
  }`;
const SHADOW_FRAG = /* glsl */`
  uniform sampler2D map; uniform float uOpacity, uStrength, uCaustic, uRT;
  uniform vec3 uShadow, uAmber;
  varying vec2 vUv; varying vec2 vW;
  void main(){
    float v = vUv.y;
    vec2 uv = vec2(vUv.x, v);
    float sharp = texture2D(map, uv, 0.5).a;
    float soft = texture2D(map, uv, 3.0 + v * 4.0).a;
    float a = mix(sharp, soft, smoothstep(0.0, 0.32, v));
    a *= (1.0 - smoothstep(0.0, 1.0, v) * 0.72);
    a *= mix(1.25, 1.0, smoothstep(0.0, 0.06, v));        // contact
    float r = length(vW);
    a *= 1.0 - smoothstep(uRT - 0.9, uRT - 0.05, r);       // stays on the plinth top
    a *= uStrength * uOpacity;
    // amber glass: light passes through and leaves a warm, lighter patch inside the shadow
    float ca = uCaustic * soft * smoothstep(0.06, 0.22, v) * (1.0 - smoothstep(0.3, 0.75, v));
    vec3 col = mix(uShadow, uAmber, clamp(ca * 1.6, 0.0, 1.0));
    a *= 1.0 - ca * 0.55;
    if (a < 0.002) discard;
    gl_FragColor = vec4(col, a);
    #include <colorspace_fragment>
  }`;

// ---------------------------------------------------------------------------------------------------------
export function createStage({ canvas, items, reduced = false, onFrame, onHover }) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(capDpr());
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const pm = new THREE.PMREMGenerator(renderer);
  const envScene = new RoomEnvironment();
  scene.environment = pm.fromScene(envScene, 0.04).texture;
  scene.environmentIntensity = 0.32;
  pm.dispose();
  envScene.traverse(o => { if (o.isMesh) { o.geometry.dispose(); o.material.dispose && o.material.dispose(); } });

  const camera = new THREE.PerspectiveCamera(22, 1, 1, 600);

  // ---- light
  const hemi = new THREE.HemisphereLight(C('#f4efe4'), C('#28403b'), 0.9);
  scene.add(hemi);
  const key = new THREE.DirectionalLight(C('#fff3e6'), 2.2);
  scene.add(key); scene.add(key.target);
  const spot = new THREE.SpotLight(C('#fff1de'), 0, 0, 0.42, 1.0, 2);
  spot.position.set(-10, 62, 26); spot.target.position.set(0, H, -2);
  scene.add(spot); scene.add(spot.target);

  // ---- plinth
  const stone = stoneTextures();
  const sideMap = stone.clone(); sideMap.needsUpdate = true; sideMap.repeat.set(7, 0.55);
  const topMap = stone.clone(); topMap.needsUpdate = true; topMap.repeat.set(1.6, 1.6);
  const stoneCol = C('#a3bab3');
  const sideMat = new THREE.MeshStandardMaterial({ color: stoneCol.clone().multiplyScalar(0.84), map: sideMap, bumpMap: sideMap, bumpScale: 0.6, roughness: 0.9, metalness: 0 });
  const topMat = new THREE.MeshStandardMaterial({ color: stoneCol, map: topMap, bumpMap: topMap, bumpScale: 0.35, roughness: 0.84, metalness: 0 });
  const prof = [[R - 0.45, 0], [R - 0.12, 0.08], [R, 0.4], [R, H - 0.75]];
  for (let i = 1; i <= 8; i++) { const a = (i / 8) * Math.PI / 2; prof.push([RT + 0.75 * Math.cos(a), H - 0.75 + 0.75 * Math.sin(a)]); }
  const side = new THREE.Mesh(new THREE.LatheGeometry(prof.map(([x, y]) => new THREE.Vector2(x, y)), 160), sideMat);
  side.rotation.y = 0.4;
  const top = new THREE.Mesh(new THREE.CircleGeometry(RT + 0.02, 160), topMat);
  top.rotation.x = -Math.PI / 2; top.position.y = H;
  const plinth = new THREE.Group(); plinth.add(side, top); scene.add(plinth);

  // floor occlusion + soft cast shadow of the plinth (no visible floor – the CSS backdrop is the room)
  const blob = radialTex([[0, 1], [0.45, 0.62], [0.75, 0.22], [1, 0]]);
  const floorMat = (op) => new THREE.MeshBasicMaterial({ color: C('#0f1b18'), alphaMap: blob, transparent: true, opacity: op, depthWrite: false, toneMapped: false });
  const floorAO = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), floorMat(0.5));
  floorAO.rotation.x = -Math.PI / 2; floorAO.scale.set(R * 2.7, R * 1.7, 1); floorAO.position.set(0, 0.02, 0); floorAO.renderOrder = 1;
  const floorCast = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), floorMat(0.22));
  floorCast.rotation.x = -Math.PI / 2; floorCast.scale.set(R * 3.6, R * 2.2, 1); floorCast.renderOrder = 1;
  scene.add(floorAO, floorCast);

  // ---- products
  const loader = new THREE.TextureLoader();
  const aoTex = radialTex([[0, 1], [0.25, 0.75], [0.55, 0.28], [0.8, 0.07], [1, 0]], 64);
  const cards = [];
  const prods = items.map((it, idx) => {
    const p = { ...it, idx, loaded: 0, w: it.h * it.aspect,
      x: 0, z: 0, y: 6, vx: 0, vz: 0, vy: 0, op: 0, dim: 0, lean: 0, hover: 0,
      tx: 0, tz: 0, ty: 0, top: 0, tdim: 0, on: false, mask: null };
    const uniforms = {
      map: { value: null }, uTexel: { value: new THREE.Vector2(1 / 256, 1 / 1024) },
      uOpacity: { value: 0 }, uDim: { value: 0 }, uExpo: { value: 1 }, uHover: { value: 0 },
      uTint: { value: new THREE.Color(1, 1, 1) }, uRim: { value: new THREE.Color(0, 0, 0) },
    };
    const mat = new THREE.ShaderMaterial({ uniforms, vertexShader: CARD_VERT, fragmentShader: CARD_FRAG, transparent: true, depthWrite: false, toneMapped: false });
    const geo = new THREE.PlaneGeometry(p.w, it.h); geo.translate(0, it.h / 2, 0);
    const mesh = new THREE.Mesh(geo, mat); mesh.renderOrder = 3; mesh.userData.p = p;
    const leanNode = new THREE.Group(); leanNode.add(mesh);
    const yaw = new THREE.Group(); yaw.add(leanNode);
    const root = new THREE.Group(); root.add(yaw); root.visible = false;
    scene.add(root);
    // shadow
    const sU = {
      map: { value: null }, uBase: { value: new THREE.Vector3() }, uSide: { value: new THREE.Vector2(1, 0) }, uDir: { value: new THREE.Vector2(0.5, -0.8) },
      uW: { value: p.w }, uLen: { value: it.h }, uOpacity: { value: 0 }, uStrength: { value: 0.55 }, uCaustic: { value: it.amber ? 0.2 : 0 },
      uRT: { value: RT }, uShadow: { value: C('#1a2c28') }, uAmber: { value: C('#c98a3c') },
    };
    const sMat = new THREE.ShaderMaterial({ uniforms: sU, vertexShader: SHADOW_VERT, fragmentShader: SHADOW_FRAG, transparent: true, depthWrite: false, toneMapped: false });
    const sMesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1, 1, 1), sMat);
    sMesh.frustumCulled = false; sMesh.renderOrder = 2; sMesh.visible = false;
    scene.add(sMesh);
    // AO pad
    const ao = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ color: C('#13221f'), alphaMap: aoTex, transparent: true, opacity: 0, depthWrite: false, toneMapped: false }));
    ao.rotation.x = -Math.PI / 2; ao.renderOrder = 2; ao.visible = false;
    scene.add(ao);
    Object.assign(p, { mesh, leanNode, yaw, root, mat, sMesh, sU, ao });
    cards.push(mesh);
    loader.load(it.src, (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
      tex.minFilter = THREE.LinearMipmapLinearFilter;
      uniforms.map.value = tex; sU.map.value = tex;
      uniforms.uTexel.value.set(1 / tex.image.width, 1 / tex.image.height);
      // low-res alpha mask for accurate hover picking
      try {
        const mw = 24, mh = Math.round(24 / it.aspect);
        const c = document.createElement('canvas'); c.width = mw; c.height = mh;
        const g = c.getContext('2d'); g.drawImage(tex.image, 0, 0, mw, mh);
        const d = g.getImageData(0, 0, mw, mh).data;
        p.mask = { mw, mh, a: (u, v) => d[(Math.min(mh - 1, Math.floor((1 - v) * mh)) * mw + Math.min(mw - 1, Math.floor(u * mw))) * 4 + 3] };
      } catch (e) { /* picking falls back to the quad */ }
      p.loaded = 1; wake();
    });
    return p;
  });
  const byKey = Object.fromEntries(prods.map(p => [p.key, p]));

  // ---- state
  let W = 1, Hh = 1, narrow = false;
  let mood = 0, moodT = 0;              // 0 morgen → 1 aften
  let spotOn = 0, spotT = 0;            // Komplet Pakken spotlight
  const look = { yaw: 0, pitch: 0, ty: 0, tp: 0 };
  let hovered = null, extHover = null;
  const camTarget = new THREE.Vector3();
  let baseDist = 100, baseElev = 0.2;

  // ---- layout (front row = used now, back row = selected but resting for the other time of day)
  function layout(sel, mode) {
    const chosen = prods.filter(p => sel.has(p.key));
    const front = chosen.filter(p => p.when.includes(mode));
    const back = chosen.filter(p => !p.when.includes(mode));
    const gap = 2.0;
    const fw = front.reduce((s, p) => s + p.w, 0) + gap * Math.max(0, front.length - 1);
    let x = -fw / 2;
    front.forEach((p, i) => {
      p.tx = x + p.w / 2; x += p.w + gap;
      p.tz = 4.2 - 0.014 * p.tx * p.tx + (i % 2 ? -0.9 : 0.3);
      p.tdim = 0; p.on = true;
    });
    // resting products wait at the back corners, peeking out beside the front row
    let side = 1, off = { '1': fw / 2 - 0.6, '-1': fw / 2 - 0.6 };
    back.forEach((p, i) => {
      if (!front.length) { p.tx = (i - (back.length - 1) / 2) * 5.4; p.tz = -2; }
      else {
        const o = off[side] + p.w / 2;
        p.tx = clamp(side * o, -11.5, 11.5); off[side] = o + p.w / 2 + 1.4;
        p.tz = -6.4 - (i > 1 ? 1.5 : 0);
        side = -side;
      }
      p.tdim = 1; p.on = true;
    });
    prods.forEach(p => {
      if (!sel.has(p.key)) {
        if (p.on) { p.on = false; }
      } else if (!p.root.visible || p.op < 0.02) {
        // arriving: placed from just above and slightly behind its spot
        p.x = p.tx + (p.tx >= 0 ? 1.2 : -1.2); p.z = p.tz - 3.2; p.y = 6.5; p.vx = p.vz = p.vy = 0; p.op = 0; p.dim = p.tdim;
      }
    });
    wake();
  }

  // ---- camera framing
  function frame() {
    const aspect = W / Hh;
    camera.aspect = aspect;
    const vf = THREE.MathUtils.degToRad(camera.fov);
    const hf = 2 * Math.atan(Math.tan(vf / 2) * aspect);
    // Solve distance + target height so the tallest pack top and the plinth's front lip land on fixed
    // fractions of the stage height (labels need the headroom above); then make sure the row still fits.
    baseElev = narrow ? 0.25 : 0.23;
    const wantTop = narrow ? 0.36 : 0.33, wantLip = narrow ? 0.8 : 0.78;
    const pTop = new THREE.Vector3(), pLip = new THREE.Vector3();
    let D = 120, ty = H + 6;
    camera.updateProjectionMatrix();
    for (let i = 0; i < 40; i++) {
      camTarget.set(0, ty, 0);
      camera.position.set(0, ty + Math.sin(baseElev) * D, Math.cos(baseElev) * D);
      camera.lookAt(camTarget); camera.updateMatrixWorld();
      const fT = (1 - pTop.set(0, H + 14.5, 0).project(camera).y) / 2;
      const fL = (1 - pLip.set(0, H, RT).project(camera).y) / 2;
      D *= clamp((fL - fT) / (wantLip - wantTop), 0.7, 1.4);
      ty -= ((fT + fL) / 2 - (wantTop + wantLip) / 2) * 30;
    }
    const minD = (narrow ? 13.5 : 17) / Math.tan(hf / 2) + RT * 0.3;   // the full five-step row stays inside
    D = Math.max(D, minD);
    baseDist = D; camTarget.set(0, ty, 0);
  }

  function resize() {
    const r = canvas.parentElement.getBoundingClientRect();
    W = Math.max(1, Math.round(r.width)); Hh = Math.max(1, Math.round(r.height));
    narrow = W < 560;
    renderer.setPixelRatio(capDpr());
    renderer.setSize(W, Hh, false);
    frame(); wake();
  }

  // ---- simulation
  const k = 30, zeta = 0.86, c = 2 * Math.sqrt(k) * zeta;  // viscous, settles with a whisper of overshoot
  const tmp = new THREE.Vector3();
  const sideV = new THREE.Vector2(), dirV = new THREE.Vector2();
  const keyDir = new THREE.Vector3();

  function step(dt) {
    let moving = false;
    const fast = reduced ? 6 : 1;
    // mood + spotlight
    const mr = 1 - Math.exp(-dt * 2.6 * fast);
    mood += (moodT - mood) * mr; if (Math.abs(moodT - mood) > 0.001) moving = true; else mood = moodT;
    spotOn += (spotT - spotOn) * (1 - Math.exp(-dt * 2.2 * fast)); if (Math.abs(spotT - spotOn) > 0.002) moving = true; else spotOn = spotT;
    // pointer parallax (damped)
    const lr = 1 - Math.exp(-dt * 3.2);
    look.yaw += (look.ty - look.yaw) * lr; look.pitch += (look.tp - look.pitch) * lr;
    if (Math.abs(look.ty - look.yaw) + Math.abs(look.tp - look.pitch) > 0.0004) moving = true;

    for (const p of prods) {
      if (!p.loaded) continue;
      const ty = p.on ? 0 : 4.2;
      const tz = p.on ? p.tz : p.tz - 4.5;
      const top = p.on ? 1 : 0;
      if (reduced) {
        p.x = p.tx; p.z = tz; p.y = p.on ? 0 : ty; p.vx = p.vz = p.vy = 0;
      } else {
        const ax = k * (p.tx - p.x) - c * p.vx, az = k * (tz - p.z) - c * p.vz;
        // set-down: vertical uses a softer, fully damped spring (oil, not rubber)
        const ky = 22, cy = 2 * Math.sqrt(ky) * 1.0;
        const ay = ky * ((p.on ? 0 : ty) - p.y) - cy * p.vy;
        p.vx += ax * dt; p.vz += az * dt; p.vy += ay * dt;
        p.x += p.vx * dt; p.z += p.vz * dt; p.y += p.vy * dt;
        if (p.y < 0) { p.y = 0; p.vy = 0; }
      }
      const or = 1 - Math.exp(-dt * (p.on ? 5.5 : 7) * fast);
      p.op += (top - p.op) * or;
      p.dim += (p.tdim - p.dim) * (1 - Math.exp(-dt * 3.5 * fast));
      const hT = (hovered === p || extHover === p.key) && p.on ? 1 : 0;
      p.hover += (hT - p.hover) * (1 - Math.exp(-dt * 8));
      const leanT = reduced ? 0 : clamp(p.vx * 0.012, -0.07, 0.07);
      p.lean += (leanT - p.lean) * (1 - Math.exp(-dt * 9));
      const err = Math.abs(p.tx - p.x) + Math.abs(tz - p.z) + Math.abs(p.vx) + Math.abs(p.vz) + Math.abs(p.vy) + Math.abs(p.y - (p.on ? 0 : ty)) * 0.2 + Math.abs(top - p.op) + Math.abs(p.tdim - p.dim) + Math.abs(hT - p.hover) + Math.abs(p.lean);
      if (err > 0.004) moving = true;
      else { p.x = p.tx; p.z = tz; p.op = top; p.dim = p.tdim; p.hover = hT; p.lean = 0; p.vx = p.vz = p.vy = 0; }
    }
    return moving;
  }

  function apply() {
    const m = mood;
    // light: morning high + cool-neutral, evening low + warm
    const elev = lerp(0.98, 0.62, m), az = lerp(-0.62, -0.95, m);   // az: angle from +z towards -x
    keyDir.set(Math.sin(az), Math.sin(elev), Math.cos(az) * Math.cos(elev)).normalize();
    key.position.copy(keyDir).multiplyScalar(60); key.target.position.set(0, H, 0);
    key.color.copy(C('#fff5ea')).lerp(C('#ffdcb8'), m);
    key.intensity = lerp(2.25, 1.85, m) + spotOn * 0.25;
    hemi.intensity = lerp(0.95, 0.74, m);
    hemi.color.copy(C('#f2f1ea')).lerp(C('#efe2d0'), m);
    spot.color.copy(C('#fff4e6')).lerp(C('#ffe0bd'), m);
    spot.intensity = 2600 * (0.55 + 0.45 * m) + spotOn * 2200;
    scene.environmentIntensity = lerp(0.36, 0.24, m);
    // shadow direction (xz) and length per cm of height
    const horiz = Math.hypot(keyDir.x, keyDir.z);
    dirV.set(-keyDir.x / horiz, -keyDir.z / horiz);
    const slen = clamp(horiz / keyDir.y, 0.35, 1.6);
    const tint = new THREE.Color(1, 1, 1).lerp(new THREE.Color(1.035, 0.955, 0.86), m);
    const rim = C('#fff1dc').multiplyScalar(lerp(0.12, 0.2, m)).lerp(C('#ffb766').multiplyScalar(0.22), m);
    const shadowStrength = lerp(0.78, 0.66, m);
    floorCast.position.set(dirV.x * R * 0.55 * slen, 0.01, dirV.y * R * 0.55 * slen);
    floorCast.rotation.z = -Math.atan2(dirV.y, dirV.x);

    // camera
    const yaw = look.yaw, el = baseElev + look.pitch;
    camera.position.set(Math.sin(yaw) * Math.cos(el) * baseDist, camTarget.y + Math.sin(el) * baseDist, Math.cos(yaw) * Math.cos(el) * baseDist);
    camera.lookAt(camTarget);
    camera.updateMatrixWorld();

    for (const p of prods) {
      const vis = p.loaded && p.op > 0.004;
      p.root.visible = vis; p.sMesh.visible = vis; p.ao.visible = vis;
      if (!vis) continue;
      const lift = p.y + p.hover * 0.5;
      p.root.position.set(p.x, H + lift, p.z);
      const fy = Math.atan2(camera.position.x - p.x, camera.position.z - p.z);
      p.yaw.rotation.y = fy;
      p.leanNode.rotation.z = p.lean;
      const u = p.mat.uniforms;
      u.uOpacity.value = p.op; u.uDim.value = p.dim; u.uHover.value = p.hover;
      u.uTint.value.copy(tint); u.uExpo.value = lerp(1.02, 0.95, m) * (1 + spotOn * 0.04); u.uRim.value.copy(rim);
      // shadow parallelogram: foot follows the product, lifted products cast further and softer
      sideV.set(Math.cos(fy), -Math.sin(fy));
      const s = p.sU;
      const lf = 1 / (1 + lift * 0.35);
      s.uBase.value.set(p.x + dirV.x * lift * slen, H + 0.03, p.z + dirV.y * lift * slen);
      s.uSide.value.copy(sideV); s.uDir.value.copy(dirV);
      s.uLen.value = p.h * slen; s.uW.value = p.w;
      s.uOpacity.value = p.op * lf * (1 - p.dim * 0.35);
      s.uStrength.value = shadowStrength;
      p.ao.position.set(p.x, H + 0.025, p.z + 0.05);
      p.ao.scale.set(p.w * 1.5 * (1 + lift * 0.1), p.w * 0.75 * (1 + lift * 0.1), 1);
      p.ao.material.opacity = 0.42 * p.op * lf * lf;
    }
  }

  // ---- projection of anchors for the DOM feature lines
  const out = [];
  function anchors() {
    out.length = 0;
    for (const p of prods) {
      if (!p.loaded) continue;
      const lift = p.y + p.hover * 0.5;
      tmp.set(p.x, H + lift + p.h * 0.985, p.z).project(camera);
      const tx = (tmp.x * 0.5 + 0.5) * W, ty = (-tmp.y * 0.5 + 0.5) * Hh;
      tmp.set(p.x, H + lift, p.z).project(camera);
      out.push({ key: p.key, x: tx, y: ty, by: (-tmp.y * 0.5 + 0.5) * Hh, op: p.op, active: p.on && p.tdim < 0.5, dim: p.dim, hover: p.hover });
    }
    // plinth front lip (for the empty-state hint)
    tmp.set(0, H, RT).project(camera);
    const lip = (-tmp.y * 0.5 + 0.5) * Hh;
    tmp.set(0, H + 15, 0).project(camera);
    const ceil = (-tmp.y * 0.5 + 0.5) * Hh;
    return { items: out, lip, ceil, W, H: Hh };
  }

  function render() { apply(); renderer.render(scene, camera); onFrame && onFrame(anchors()); }

  // ---- loop (renders only while visible and while something is moving)
  let raf = 0, last = 0, visible = true, dirty = true;
  function tick(now) {
    raf = 0;
    if (!visible) return;
    const dt = Math.min(0.05, last ? (now - last) / 1000 : 0.016); last = now;
    const moving = step(dt);
    if (moving || dirty) { render(); dirty = false; }
    if (moving) raf = requestAnimationFrame(tick); else last = 0;
  }
  function wake() { dirty = true; if (!raf && visible) raf = requestAnimationFrame(tick); }

  // ---- pointer: parallax + hover picking
  const ray = new THREE.Raycaster(); const ndc = new THREE.Vector2();
  function pick(clientX, clientY) {
    const r = canvas.getBoundingClientRect();
    ndc.set(((clientX - r.left) / r.width) * 2 - 1, -((clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const hits = ray.intersectObjects(cards, false);
    for (const h of hits) {
      const p = h.object.userData.p;
      if (p.op < 0.5 || !p.on) continue;
      if (p.mask && h.uv && p.mask.a(h.uv.x, h.uv.y) < 60) continue;
      return p;
    }
    return null;
  }
  function onMove(e) {
    const r = canvas.getBoundingClientRect();
    if (!reduced && e.pointerType !== 'touch') {
      const nx = ((e.clientX - r.left) / r.width) * 2 - 1, ny = ((e.clientY - r.top) / r.height) * 2 - 1;
      look.ty = clamp(nx, -1, 1) * 0.07; look.tp = clamp(ny, -1, 1) * 0.025;
    }
    const p = e.pointerType === 'touch' ? null : pick(e.clientX, e.clientY);
    if (p !== hovered) { hovered = p; canvas.style.cursor = p ? 'pointer' : ''; onHover && onHover(p ? p.key : null); }
    wake();
  }
  function onLeave() { look.ty = 0; look.tp = 0; if (hovered) { hovered = null; onHover && onHover(null); } canvas.style.cursor = ''; wake(); }
  const host = canvas.parentElement;
  host.addEventListener('pointermove', onMove);
  host.addEventListener('pointerleave', onLeave);

  const ro = new ResizeObserver(resize); ro.observe(host);
  resize();

  return {
    setSelection(sel, mode) { moodT = mode === 'aften' ? 1 : 0; layout(sel, mode); },
    setSpot(on) { spotT = on ? 1 : 0; wake(); },
    setHover(key) { extHover = key; wake(); },
    pickAt: pick,
    setVisible(v) { visible = v; if (v) wake(); },
    snap() { for (const p of prods) { p.x = p.tx; p.z = p.tz; p.y = 0; p.op = p.on ? 1 : 0; p.dim = p.tdim; } mood = moodT; spotOn = spotT; wake(); },
    dispose() { cancelAnimationFrame(raf); ro.disconnect(); host.removeEventListener('pointermove', onMove); host.removeEventListener('pointerleave', onLeave); renderer.dispose(); },
  };
}
