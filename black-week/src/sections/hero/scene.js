// NatureCell® Black Week – hero scene (Three.js).
// Vidunder Olien: procedural amber Boston-round with the real sage label, its dropper lifted out and floating
// on a diagonal; a golden drop slowly forms at the pipette tip, falls in slow motion into a shallow oil pool and
// leaves a soft ripple. Glass/oil bubbles rise with buoyancy and viscous drag and part around the cursor.
// Light: procedural studio environment (warm softbox + rim strips in a night-green room) + warm key.
// Post: MSAA HDR target → soft bloom on the amber → custom grade (hue-preserving shoulder, vignette, dither).
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { dpr as capDpr } from '../../core/three-utils.js';
import { drawLabel, labelRoughness } from './label.js';

const C = (hex) => new THREE.Color(hex); // sRGB hex → linear working colour
const TAU = Math.PI * 2;
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// ---------------------------------------------------------------------------------------------------------
// Layout constants (world units ≈ 1 cm)
const BOTTLE_X = 1.35, BOTTLE_Z = 0;
const DROPPER_TILT = 0.57;                            // rad from vertical (≈ 38°), tip down-left
const DROPPER_BASE = new THREE.Vector3(-0.5, 7.3, 0.75); // collar bottom centre
const PIPETTE_LEN = 5.9;

// ---------------------------------------------------------------------------------------------------------
// Geometry helpers
function lathe(points, segs = 96, smoothN = 0) {
  let pts = points.map(([x, y]) => new THREE.Vector2(x, y));
  if (smoothN) pts = new THREE.SplineCurve(pts).getSpacedPoints(smoothN);
  const g = new THREE.LatheGeometry(pts, segs);
  g.computeVertexNormals();
  return g;
}

// Ribbed (fluted) collar sleeve: radius modulated around the circumference, soft rounded flutes
function ribbedSleeve(r0, h, ribs, depth, segs = 360) {
  const g = new THREE.CylinderGeometry(r0, r0, h, segs, 6, true);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), z = p.getZ(i), y = p.getY(i);
    const a = Math.atan2(x, z);
    const f = Math.pow(Math.abs(Math.cos(a * ribs * 0.5)), 0.6); // rounded crests, narrow valleys
    const edge = smooth(h / 2, h / 2 - 0.08, Math.abs(y));      // flutes ease out at the ends
    const r = r0 - depth + depth * f * edge + depth * (1 - edge) * 0.5;
    const s = r / Math.hypot(x, z);
    p.setX(i, x * s); p.setZ(i, z * s);
  }
  g.computeVertexNormals();
  return g;
}

// Thin oil film: polar grid with an organic rim; a soft dome that thins to nothing at the edge (aT = 0 centre → 1 rim)
function poolGeometry(R, H, rings = 44, segs = 128, seed = 3) {
  const pos = [], idx = [], ts = [];
  const rimR = (a) => R * (1 + 0.075 * Math.sin(2 * a + seed) + 0.05 * Math.sin(3 * a + 1.7 * seed) + 0.022 * Math.sin(5 * a + 0.3) + 0.012 * Math.sin(9 * a + 2.1));
  pos.push(0, H, 0); ts.push(0);
  for (let i = 1; i <= rings; i++) {
    const t = Math.pow(i / rings, 0.8);
    for (let j = 0; j < segs; j++) {
      const a = (j / segs) * TAU, rr = rimR(a) * t;
      const h = H * Math.pow(Math.max(0, 1 - t * t), 0.55);
      pos.push(Math.sin(a) * rr, h, Math.cos(a) * rr); ts.push(t);
    }
  }
  for (let j = 0; j < segs; j++) idx.push(0, 1 + j, 1 + ((j + 1) % segs));
  for (let i = 1; i < rings; i++) {
    const a0 = 1 + (i - 1) * segs, b0 = 1 + i * segs;
    for (let j = 0; j < segs; j++) {
      const j1 = (j + 1) % segs;
      idx.push(a0 + j, b0 + j, b0 + j1, a0 + j, b0 + j1, a0 + j1);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('aT', new THREE.Float32BufferAttribute(ts, 1));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

// Soft radial texture for decals (shadows, caustic, light pool)
function radialTex(stops, size = 256) {
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
// Studio environment: night-green room, warm key softbox, two vertical rim strips, soft ceiling
function makeEnvironment(renderer) {
  const s = new THREE.Scene();
  const room = new THREE.Mesh(new THREE.BoxGeometry(60, 30, 60), new THREE.MeshBasicMaterial({ color: C('#28403b').multiplyScalar(0.55), side: THREE.BackSide }));
  room.position.y = 10; s.add(room);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), new THREE.MeshBasicMaterial({ color: C('#28403b').multiplyScalar(0.35) }));
  floor.rotation.x = -Math.PI / 2; floor.position.y = -2; s.add(floor);
  const panel = (w, h, pos, col, k) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: C(col).multiplyScalar(k), side: THREE.DoubleSide }));
    m.position.set(...pos); m.lookAt(0, 4, 0); s.add(m); return m;
  };
  panel(11, 8, [-15, 13, 12], '#fff0dc', 7.0);   // key softbox, warm, high front-left
  panel(2.6, 18, [-17, 7, -9], '#fff7ee', 4.2);   // left-back strip → crisp vertical edge on the glass
  panel(2.2, 18, [16, 7, -5], '#eef3ee', 3.0);    // right strip → second rim
  panel(18, 18, [0, 24, 2], '#f6efe4', 0.7);      // ceiling bounce
  panel(14, 5, [6, 3, 18], '#ddbfa3', 0.55);      // sand bounce card, front-right
  panel(6, 4.5, [-7, 4.4, -22], '#f6e2c4', 1.9);    // low back panels → glossy streaks on the oil pool, glass rims
  panel(2.5, 4.5, [5, 4.4, -22], '#f3ece2', 1.5);
  const pm = new THREE.PMREMGenerator(renderer);
  const env = pm.fromScene(s, 0.03).texture;
  pm.dispose();
  s.traverse(o => { if (o.isMesh) { o.geometry.dispose(); o.material.dispose(); } });
  return env;
}

// ---------------------------------------------------------------------------------------------------------
// Shaders
const BG_VERT = /* glsl */`
  varying vec2 vUv;
  void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.99999, 1.0); }`;
const BG_FRAG = /* glsl */`
  precision highp float;
  uniform vec2 uRes; uniform float uDpr;
  uniform vec3 uNight, uDeep, uWarm, uAmber, uSage, uThread;
  uniform vec2 uGlow; uniform float uGlowR;
  uniform vec2 uPool; uniform vec2 uPoolR;
  uniform vec2 uTA, uTB; uniform float uThreadAlpha;
  varying vec2 vUv;
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f*f*(3.0-2.0*f);
    return mix(mix(hash(i), hash(i+vec2(1,0)), u.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), u.x), u.y); }
  float fbm(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*noise(p); p *= 2.03; a *= 0.5; } return s; }
  float segDist(vec2 p, vec2 a, vec2 b){ vec2 pa = p-a, ba = b-a; float h = clamp(dot(pa,ba)/dot(ba,ba), 0.0, 1.0); return length(pa - ba*h); }
  void main(){
    vec2 p = gl_FragCoord.xy;
    float sc = uRes.y;
    // night green, a touch deeper toward the top edge and the floor-front (studio sweep)
    vec3 col = uNight;
    float vy = p.y / uRes.y;
    col = mix(col, uDeep, smoothstep(0.55, 1.15, vy) * 0.55);
    col = mix(col, uDeep, smoothstep(0.35, -0.2, vy) * 0.35);
    // painted-backdrop mottling: very low-frequency, ±2.5%
    float m = fbm(p / sc * 2.2);
    col *= 0.975 + 0.05 * m;
    // warm evening light behind the bottle
    float d = length((p - uGlow) / uGlowR);
    col += uSage * 0.05 * exp(-d*d*1.1);
    col += uWarm * 0.042 * exp(-d*d*2.6);
    col += uAmber * 0.03 * exp(-d*d*6.0);
    // light pooling on the (invisible) floor
    vec2 q = (p - uPool) / uPoolR;
    col += mix(uSage, uWarm, 0.5) * 0.035 * exp(-dot(q,q) * 1.6);
    // one diagonal thread hairline (mauve), faded at both ends
    float dl = segDist(p, uTA, uTB);
    float w = 0.35 * uDpr;
    float line = 1.0 - smoothstep(w, w + 0.9 * uDpr, dl);
    vec2 ab = uTB - uTA; float tt = clamp(dot(p - uTA, ab) / dot(ab, ab), 0.0, 1.0);
    float fade = smoothstep(0.0, 0.18, tt) * smoothstep(1.0, 0.7, tt);
    col = mix(col, uThread, line * fade * uThreadAlpha);
    gl_FragColor = vec4(col, 1.0);
  }`;

const BUBBLE_VERT = /* glsl */`
  attribute vec3 iColor; attribute float iSoft; attribute float iAlpha; attribute vec3 iHi;
  varying vec3 vN; varying vec3 vV; varying vec3 vColor; varying float vSoft; varying float vAlpha; varying vec3 vVN; varying vec3 vHi;
  void main(){
    mat4 m = modelMatrix * instanceMatrix;
    vec4 wp = m * vec4(position, 1.0);
    vN = normalize(mat3(m) * normal);
    vV = normalize(cameraPosition - wp.xyz);
    vVN = normalize(normalMatrix * mat3(instanceMatrix) * normal);
    vColor = iColor; vSoft = iSoft; vAlpha = iAlpha; vHi = iHi;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }`;
// Glass/oil spheres. Premultiplied output: rgb = light the sphere adds, a = how much backdrop it hides.
// Per instance: highlight offset + softness (depth of field) + thin-film phase, so no two spheres look stamped.
const BUBBLE_FRAG = /* glsl */`
  precision highp float;
  uniform vec3 uKey; uniform vec3 uRim; uniform float uFade;
  varying vec3 vN; varying vec3 vV; varying vec3 vColor; varying float vSoft; varying float vAlpha; varying vec3 vVN; varying vec3 vHi;
  void main(){
    vec3 n = normalize(vN), v = normalize(vV), nv = normalize(vVN);
    float ndv = clamp(dot(n, v), 0.0, 1.0);
    float rimT = 1.0 - ndv;
    float fres = pow(rimT, 3.0);
    float edge = smoothstep(0.0, 0.05 + vSoft * 0.6, ndv);                 // depth-of-field softness at the silhouette
    // refraction: the sphere inverts the dark room → a darker band just inside the rim, clear centre
    float band = smoothstep(0.42, 0.74, rimT) * (1.0 - smoothstep(0.86, 0.985, rimT));
    // key highlight (upper-left, jittered per sphere) + a faint secondary window from the fill, lower-right
    vec3 L = normalize(vec3(-0.62 + vHi.x, 0.66 + vHi.y, 0.42));
    float sharp = mix(260.0, 36.0, vSoft);
    float sp = pow(max(dot(n, normalize(L + v)), 0.0), sharp);
    vec3 L2 = normalize(vec3(0.55, -0.35, 0.5));
    float sp2 = pow(max(dot(n, normalize(L2 + v)), 0.0), sharp * 0.35) * 0.18;
    // focused light inside the sphere, opposite the key (caustic crescent)
    vec2 Ld = normalize(vec2(-0.62 + vHi.x, 0.72 + vHi.y));
    float caust = smoothstep(0.2, 0.95, dot(nv.xy, -Ld)) * smoothstep(0.05, 0.5, ndv);
    // thin-film iridescence, only at grazing angles, very quiet
    vec3 irid = 0.5 + 0.5 * cos(6.2831 * (rimT * 1.3 + vHi.z + vec3(0.0, 0.33, 0.67)));
    vec3 rimCol = mix(vColor, irid, 0.38) * 0.75 + uRim * 0.12;
    vec3 col = vColor * (0.05 + caust * 0.6) + rimCol * fres * 0.75;
    float a = 0.05 + band * 0.32 + fres * 0.42 + caust * 0.12;
    col *= edge; a *= edge;
    float hi = (sp * 1.5 + sp2) * (1.0 - vSoft * 0.7);
    col += uKey * hi; a += hi * 0.55;
    float k = vAlpha * uFade;
    gl_FragColor = vec4(col * k, clamp(a, 0.0, 1.0) * k);
  }`;

// Oil pool, absorption layer: multiplies what is under it by the oil's transmittance (thicker → deeper amber).
const POOL_TINT_VERT = /* glsl */`
  attribute float aT;
  varying float vT; varying vec3 vWN; varying vec3 vWV;
  void main(){
    vT = aT;
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWN = normalize(mat3(modelMatrix) * normal);
    vWV = normalize(cameraPosition - wp.xyz);
    gl_Position = projectionMatrix * viewMatrix * wp;
  }`;
const POOL_TINT_FRAG = /* glsl */`
  precision highp float;
  uniform vec3 uSigma; uniform float uFeather;
  varying float vT; varying vec3 vWN; varying vec3 vWV;
  void main(){
    float ndv = max(abs(dot(normalize(vWN), normalize(vWV))), 0.16);
    float thick = 1.0 - smoothstep(0.35, 1.0, vT);                       // film thins toward the rim
    float feather = 1.0 - smoothstep(1.0 - uFeather, 1.0, vT);           // no hard edge
    vec3 T = exp(-uSigma * thick / ndv * 0.1);
    float F = 0.04 + 0.96 * pow(1.0 - ndv, 5.0);                          // light reflected away is not transmitted
    gl_FragColor = vec4(mix(vec3(1.0), T * (1.0 - F * 0.85), feather), 1.0);
  }`;

const FINAL_SHADER = {
  uniforms: { tDiffuse: { value: null }, uRes: { value: new THREE.Vector2(1, 1) }, uTime: { value: 0 }, uVig: { value: 0.32 }, uVigCenter: { value: new THREE.Vector2(0.62, 0.52) } },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: /* glsl */`
    precision highp float;
    uniform sampler2D tDiffuse; uniform vec2 uRes; uniform float uTime; uniform float uVig; uniform vec2 uVigCenter;
    varying vec2 vUv;
    // hue-preserving shoulder: identity below 0.72, soft roll-off above (keeps the brand night green exact)
    vec3 shoulder(vec3 c){
      float peak = max(c.r, max(c.g, c.b));
      const float s = 0.72;
      if (peak <= s) return c;
      float d = 1.0 - s;
      float np = 1.0 - d * d / (peak - s + d);
      c *= np / peak;
      float g = 1.0 - 1.0 / (0.15 * (peak - np) + 1.0);
      return mix(c, vec3(np), g);
    }
    vec3 toSRGB(vec3 c){ return mix(c * 12.92, 1.055 * pow(c, vec3(1.0/2.4)) - 0.055, step(0.0031308, c)); }
    float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main(){
      vec3 c = texture2D(tDiffuse, vUv).rgb;
      vec2 asp = vec2(uRes.x / uRes.y, 1.0);
      vec2 q = (vUv - uVigCenter) * asp;
      float v = smoothstep(0.45, 1.35, length(q * vec2(0.82, 1.0)));
      c *= 1.0 - uVig * v;
      c = shoulder(c);
      vec3 s = toSRGB(clamp(c, 0.0, 1.0));
      // triangular dither (kills banding in the dark gradients), a whisper of temporal grain
      float n = hash(gl_FragCoord.xy + fract(uTime) * 61.0) + hash(gl_FragCoord.xy * 1.37 + fract(uTime * 1.3) * 17.0) - 1.0;
      s += n / 255.0 * 1.4;
      gl_FragColor = vec4(s, 1.0);
    }`,
};

// ---------------------------------------------------------------------------------------------------------
export async function createHeroScene({ canvas, host, asset, reduced, onFrame, onFirstFrame }) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, powerPreference: 'high-performance', stencil: false });
  renderer.toneMapping = THREE.NoToneMapping;
  renderer.setClearColor(C('#28403b'), 1);
  let pr = capDpr();
  renderer.setPixelRatio(pr);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(20, 1, 1, 200);
  const env = makeEnvironment(renderer);
  scene.environment = env;

  // ---------- background (screen-space, opaque → also seen through the glass)
  const bgU = {
    uRes: { value: new THREE.Vector2(1, 1) }, uDpr: { value: pr },
    uNight: { value: C('#28403b') }, uDeep: { value: C('#213631') },
    uWarm: { value: C('#ddbfa3') }, uAmber: { value: C('#c7ae92') }, uSage: { value: C('#9ab4ac') }, uThread: { value: C('#b07a7f') },
    uGlow: { value: new THREE.Vector2() }, uGlowR: { value: 400 },
    uPool: { value: new THREE.Vector2() }, uPoolR: { value: new THREE.Vector2(300, 60) },
    uTA: { value: new THREE.Vector2() }, uTB: { value: new THREE.Vector2() }, uThreadAlpha: { value: 0.36 },
  };
  const bg = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({ uniforms: bgU, vertexShader: BG_VERT, fragmentShader: BG_FRAG, depthWrite: false, depthTest: false }));
  bg.frustumCulled = false; bg.renderOrder = -100;
  scene.add(bg);

  // ---------- lights (env does most of the work; key gives the label its gradient)
  const key = new THREE.DirectionalLight(C('#fff1e0'), 2.5);
  key.position.set(-7, 9, 8);
  scene.add(key);
  const fill = new THREE.DirectionalLight(C('#b6c9c2'), 0.25);
  fill.position.set(6, 2, 6);
  scene.add(fill);
  const rim = new THREE.DirectionalLight(C('#ffe6c4'), 1.6);   // back light: rims the glass, the bulb, the oil
  rim.position.set(3, 6, -10);
  scene.add(rim);

  // ---------- materials
  const amberGlass = new THREE.MeshPhysicalMaterial({
    color: 0xffffff, metalness: 0, roughness: 0.035, transmission: 1, ior: 1.52, thickness: 1.25,
    attenuationColor: C('#a24a12'), attenuationDistance: 0.85, specularIntensity: 1, envMapIntensity: 1.35,
  });
  // glass edge light: fresnel rim lines + the long specular streaks a glass tube gets from vertical softboxes
  const glassRimU = { uAxis: { value: new THREE.Vector3(0, 1, 0) }, uK1: { value: new THREE.Vector3(-17, 7, -9).normalize() }, uK2: { value: new THREE.Vector3(-7, 9, 8).normalize() }, uK3: { value: new THREE.Vector3(16, 7, -5).normalize() } };
  const glassRim = new THREE.ShaderMaterial({
    uniforms: glassRimU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: /* glsl */`
      varying vec3 vN; varying vec3 vV; varying float vY;
      void main(){ vec4 wp = modelMatrix * vec4(position, 1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - wp.xyz); vY = position.y;
        gl_Position = projectionMatrix * viewMatrix * wp; }`,
    fragmentShader: /* glsl */`
      precision highp float;
      uniform vec3 uAxis, uK1, uK2, uK3;
      varying vec3 vN; varying vec3 vV; varying float vY;
      float streak(vec3 r, vec3 L, float p){ vec3 rp = normalize(r - uAxis * dot(r, uAxis)); vec3 lp = normalize(L - uAxis * dot(L, uAxis)); return pow(max(dot(rp, lp), 0.0), p); }
      void main(){
        vec3 n = normalize(vN), v = normalize(vV);
        float ndv = clamp(abs(dot(n, v)), 0.0, 1.0);
        vec3 r = reflect(-v, n);
        float rim = pow(1.0 - ndv, 7.0);
        float s = streak(r, uK1, 900.0) * 1.1 + streak(r, uK2, 420.0) * 0.55 + streak(r, uK3, 700.0) * 0.5;
        float lenFade = smoothstep(-${(PIPETTE_LEN).toFixed(2)}, -${(PIPETTE_LEN - 0.25).toFixed(2)}, vY) * (1.0 - smoothstep(-0.2, 0.05, vY));
        vec3 c = vec3(1.0, 0.97, 0.92) * (rim * 0.42 + s * 1.0) * lenFade;
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
  // oil inside the pipette (opaque, so it refracts through the glass): deep amber body, a golden core where the
  // column is thin, a refracted back-light line inside the shadow-side edge, darker toward the silhouette
  const oilOpaque = new THREE.MeshPhysicalMaterial({
    color: C('#2a1404'), emissive: C('#e9a440'), emissiveIntensity: 1.0, roughness: 0.08, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.04, envMapIntensity: 1.4,
  });
  oilOpaque.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying float vOilY;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvOilY = position.y;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying float vOilY;')
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
      { vec3 nn = normalize(vNormal); float ndv = clamp(dot(nn, normalize(vViewPosition)), 0.0, 1.0);
        float body = 0.1 + 0.62 * pow(ndv, 1.8);
        float side = dot(normalize(nn.xy + 1e-4), normalize(vec2(-0.55, 0.83)));
        float lineB = exp(-pow((ndv - 0.34) / 0.1, 2.0)) * smoothstep(0.1, 0.8, -side);
        float thin = 1.0 - smoothstep(-${(PIPETTE_LEN - 0.2).toFixed(2)}, -${(PIPETTE_LEN - 2.4).toFixed(2)}, vOilY);
        float e = (body + lineB * 0.95) * mix(0.82, 1.45, thin) * smoothstep(0.0, 0.2, ndv);
        totalEmissiveRadiance *= e; }`);
  };
  // the drop: clear golden oil – refracts the room (dark rim), a focused caustic core opposite the key light
  const oilDrop = new THREE.MeshPhysicalMaterial({
    color: C('#ffd890'), roughness: 0.0, transmission: 0.9, ior: 1.47, thickness: 0.6,
    attenuationColor: C('#e09a2e'), attenuationDistance: 0.6, emissive: C('#f2b04a'), emissiveIntensity: 1.0,
    envMapIntensity: 2.6, specularIntensity: 1, clearcoat: 1, clearcoatRoughness: 0.0,
  });
  oilDrop.onBeforeCompile = (sh) => {
    sh.fragmentShader = sh.fragmentShader.replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
      { vec3 nn = normalize(vNormal); float ndv = clamp(dot(nn, normalize(vViewPosition)), 0.0, 1.0);
        vec2 c = nn.xy - vec2(0.26, -0.38);
        float core = exp(-dot(c, c) / 0.12);
        float e = (0.2 + 0.25 * ndv + 1.5 * core) * smoothstep(0.04, 0.5, ndv);
        totalEmissiveRadiance *= e; }`);
  };
  // the oil pool: a thin film in two layers – absorption (multiplies the floor by the oil's transmittance) and
  // surface light (env reflections with fresnel, the key glint, warm light scattered back up through the oil)
  const poolTintMat = new THREE.ShaderMaterial({
    uniforms: { uSigma: { value: new THREE.Vector3(0.45, 1.6, 4.2) }, uFeather: { value: 0.3 } },
    vertexShader: POOL_TINT_VERT, fragmentShader: POOL_TINT_FRAG,
    transparent: true, depthWrite: false, blending: THREE.CustomBlending,
    blendEquation: THREE.AddEquation, blendSrc: THREE.ZeroFactor, blendDst: THREE.SrcColorFactor,
  });
  const oilPool = new THREE.MeshPhysicalMaterial({
    color: 0x000000, roughness: 0.03, metalness: 0, ior: 1.47, specularIntensity: 1, envMapIntensity: 2.0,
    emissive: C('#c27b22'), emissiveIntensity: 1.0, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  });
  const blackPP = new THREE.MeshPhysicalMaterial({ color: C('#151817'), roughness: 0.38, metalness: 0, clearcoat: 0.25, clearcoatRoughness: 0.4, envMapIntensity: 1.0 });
  const rubber = new THREE.MeshPhysicalMaterial({ color: C('#1a1c1b'), roughness: 0.58, sheen: 0.6, sheenRoughness: 0.5, sheenColor: C('#5a6662'), envMapIntensity: 0.9 });

  // ---------- bottle (open: the dropper is lifted out)
  const bottle = new THREE.Group();
  bottle.position.set(BOTTLE_X, 0, BOTTLE_Z);
  bottle.rotation.y = -0.26;
  scene.add(bottle);
  bottle.updateMatrixWorld(true);
  const glassProfile = [
    [0.0, 0.16], [0.55, 0.13], [1.05, 0.06], [1.42, 0.0], [1.545, 0.035], [1.592, 0.13], [1.6, 0.3],
    [1.6, 5.35], [1.592, 5.55], [1.55, 5.74], [1.46, 5.92], [1.3, 6.08], [1.1, 6.2], [0.93, 6.28], [0.83, 6.36], [0.8, 6.46],
    [0.8, 6.52], [0.85, 6.56], [0.85, 6.62], [0.8, 6.66], [0.8, 6.72], [0.85, 6.76], [0.85, 6.82], [0.8, 6.86],
    [0.81, 6.93], [0.79, 6.99], [0.72, 7.02], [0.64, 7.0], [0.61, 6.94], [0.6, 6.7], [0.6, 6.1],
  ];
  const glass = new THREE.Mesh(lathe(glassProfile, 128), amberGlass);
  bottle.add(glass);

  // label (wraps ~350°, seam at the back) – drawn async, sage placeholder until ready
  const labelMat = new THREE.MeshPhysicalMaterial({ color: C('#6c998c'), roughness: 0.78, metalness: 0, sheen: 0.1, sheenRoughness: 0.8, sheenColor: C('#ffffff'), envMapIntensity: 0.42 });
  const labelGeo = new THREE.CylinderGeometry(1.614, 1.614, 4.75, 160, 1, true, -TAU * 0.97 / 2, TAU * 0.97);
  // rotate so u = 0.5 faces +z (the front)
  const label = new THREE.Mesh(labelGeo, labelMat);
  label.position.y = 0.48 + 4.75 / 2;
  label.rotation.y = 0;
  bottle.add(label);
  // label edge: a hair of paper thickness top & bottom
  for (const y of [0.48, 0.48 + 4.75]) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.613, 0.006, 6, 160), new THREE.MeshStandardMaterial({ color: C('#9dbab0'), roughness: 0.8 }));
    ring.rotation.x = Math.PI / 2; ring.position.y = y; bottle.add(ring);
  }
  drawLabel(asset).then((cv) => {
    const tex = new THREE.CanvasTexture(cv);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    tex.wrapS = THREE.RepeatWrapping;
    const rough = new THREE.CanvasTexture(labelRoughness(cv));
    rough.colorSpace = THREE.NoColorSpace;
    labelMat.map = tex; labelMat.roughnessMap = rough;
    labelMat.roughness = 1; labelMat.color.set(0xffffff);
    labelMat.needsUpdate = true;
    dirty = true;
    if (reduced && firstFrameDone) renderOnce();
  }).catch((e) => console.warn('[hero] label', e));

  // ---------- dropper (collar + ribbed sleeve + rubber bulb + glass pipette with oil)
  const dropper = new THREE.Group();
  const dropperPivot = new THREE.Group();     // bobbing happens here
  dropperPivot.position.copy(DROPPER_BASE);
  dropperPivot.rotation.z = -DROPPER_TILT;
  dropperPivot.add(dropper);
  scene.add(dropperPivot);
  const collar = new THREE.Mesh(lathe([[0.86, 0.0], [1.16, 0.0], [1.205, 0.035], [1.215, 0.12], [1.215, 0.74], [1.2, 0.79], [1.15, 0.815], [1.03, 0.83]], 128), blackPP);
  dropper.add(collar);
  const sleeve = new THREE.Mesh(ribbedSleeve(1.04, 1.18, 44, 0.05), blackPP);
  sleeve.position.y = 0.83 + 0.59;
  dropper.add(sleeve);
  const capTop = new THREE.Mesh(lathe([[1.0, 2.0], [1.01, 2.02], [0.95, 2.06], [0.66, 2.07]], 96), blackPP);
  dropper.add(capTop);
  const collarUnder = new THREE.Mesh(new THREE.RingGeometry(0.3, 0.86, 64), blackPP); // underside of the collar
  collarUnder.rotation.x = Math.PI / 2; collarUnder.position.y = 0.002;
  dropper.add(collarUnder);
  const bulb = new THREE.Mesh(lathe([
    [0.0, 2.0], [0.66, 2.0], [0.69, 2.06], [0.68, 2.14], [0.6, 2.2], [0.585, 2.32], [0.56, 2.9], [0.5, 3.45], [0.465, 3.72],
    [0.455, 3.85], [0.43, 3.96], [0.37, 4.04], [0.27, 4.1], [0.14, 4.13], [0.0, 4.14],
  ], 96, 80), rubber);
  dropper.add(bulb);
  // pipette (local y goes down from the collar): glass tube with visible walls, tapering to a fine nozzle
  const PL = PIPETTE_LEN;
  const pip = [[0.0, -PL], [0.05, -PL], [0.066, -PL + 0.02], [0.078, -PL + 0.1], [0.1, -PL + 0.32], [0.15, -PL + 0.62], [0.22, -PL + 0.95],
    [0.275, -PL + 1.22], [0.298, -PL + 1.45], [0.302, -PL + 1.7], [0.302, 0.05], [0.0, 0.05]];
  const pipGeo = lathe(pip, 72, 60);
  // thin glass, drawn as two shells over the oil: absorption (edges darker, where the wall is seen edge-on)
  // and light (fresnel rim + softbox streaks) – crisper than screen-space transmission at this size
  const pipTint = new THREE.Mesh(pipGeo, new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.CustomBlending, blendEquation: THREE.AddEquation, blendSrc: THREE.ZeroFactor, blendDst: THREE.SrcColorFactor,
    vertexShader: `varying vec3 vN; varying vec3 vV; void main(){ vec4 wp = modelMatrix * vec4(position, 1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - wp.xyz); gl_Position = projectionMatrix * viewMatrix * wp; }`,
    fragmentShader: `precision highp float; varying vec3 vN; varying vec3 vV; void main(){ float ndv = clamp(abs(dot(normalize(vN), normalize(vV))), 0.0, 1.0);
      vec3 c = mix(vec3(0.9, 0.93, 0.91), vec3(0.5, 0.56, 0.54), pow(1.0 - ndv, 2.2)); gl_FragColor = vec4(c, 1.0); }`,
  }));
  pipTint.renderOrder = 4;
  dropper.add(pipTint);
  const pipRim = new THREE.Mesh(pipGeo, glassRim);
  pipRim.renderOrder = 5;
  dropper.add(pipRim);
  // oil column: fills the nozzle to the orifice, concave meniscus on top (oil wets glass)
  const OT = -2.5;
  const pipOil = new THREE.Mesh(lathe([[0.0, -PL + 0.012], [0.034, -PL + 0.014], [0.042, -PL + 0.1], [0.06, -PL + 0.32], [0.105, -PL + 0.62],
    [0.168, -PL + 0.95], [0.212, -PL + 1.22], [0.228, -PL + 1.45], [0.23, -PL + 1.7], [0.23, OT], [0.222, OT - 0.03], [0.19, OT - 0.06], [0.12, OT - 0.078], [0.0, OT - 0.082]], 48, 60), oilOpaque);
  dropper.add(pipOil);
  dropper.traverse(o => { if (o.isMesh && o !== pipRim && o !== pipTint) o.renderOrder = 2; });
  const tipLocal = new THREE.Vector3(0, -PIPETTE_LEN + 0.004, 0);

  // ---------- floor decals (shadows, caustic, light pool) – no visible floor, just a seamless sweep
  const softDisk = radialTex([[0, 1], [0.35, 0.72], [0.7, 0.22], [1, 0]]);
  const featherDisk = radialTex([[0, 1], [0.5, 0.45], [1, 0]]);
  const decal = (tex, color, opacity, sx, sz, x, z, rot = 0, additive = false) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({
      color: C(color), alphaMap: tex, transparent: true, opacity, depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending, toneMapped: false,
    }));
    if (additive) { m.material.map = tex; m.material.alphaMap = null; }
    m.rotation.x = -Math.PI / 2; m.rotation.z = rot; m.scale.set(sx, sz, 1); m.position.set(x, 0.004, z); m.renderOrder = -50;
    scene.add(m); return m;
  };
  const shadowCol = '#0f1d1a';
  decal(featherDisk, '#ddbfa3', 0.06, 14, 7, BOTTLE_X - 2.2, 0.6, 0, true);                         // warm light pool
  decal(softDisk, shadowCol, 0.72, 3.9, 3.9, BOTTLE_X + 0.05, BOTTLE_Z + 0.02);                      // contact occlusion
  decal(featherDisk, shadowCol, 0.42, 7.4, 2.6, BOTTLE_X + 2.6, BOTTLE_Z - 0.9, -0.42);              // cast shadow (key: front-left)
  const caustic = decal(radialTex([[0, 1], [0.25, 0.55], [0.6, 0.12], [1, 0]]), '#d9902f', 0.3, 2.2, 1.0, BOTTLE_X + 1.75, BOTTLE_Z - 0.6, -0.42, true); // amber light through the glass
  const dropShadow = decal(featherDisk, shadowCol, 0.18, 4.6, 1.5, -2.5, 0.2, -0.62);               // dropper (floating, very soft)

  // ---------- oil pool + ripple
  dropperPivot.updateMatrixWorld(true);
  const tipW = dropper.localToWorld(tipLocal.clone());
  const POOL_H = 0.016, POOL_R = 1.1;
  const poolU = { uAge: { value: 99 }, uImpact: { value: new THREE.Vector2(0, 0) }, uAmp: { value: 0.012 } };
  const WAVE_GLSL = `
        uniform float uAge; uniform vec2 uImpact; uniform float uAmp;
        float wave(float r){
          float h = 0.0;
          for (int i = 0; i < 2; i++){
            float age = uAge - float(i) * 0.5;
            if (age <= 0.0) continue;
            float front = 0.5 * age + 0.03;
            float d = r - front;
            h += uAmp * exp(-1.4 * age) * exp(-d * d / 0.03) * cos(d * 15.0) * (1.0 - float(i) * 0.35);
          }
          return h;
        }`;
  oilPool.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, poolU);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>
        attribute float aT;
        varying float vPoolT; varying vec2 vPoolXZ; varying float vRipple;
        ${WAVE_GLSL}`)
      .replace('#include <beginnormal_vertex>', `
        vec3 objectNormal = vec3(normal);
        {
          vec2 xz = position.xz - uImpact; float r = max(length(xz), 1e-4);
          float e = 0.01; float dw = (wave(r + e) - wave(max(r - e, 0.0))) / (2.0 * e);
          objectNormal = normalize(objectNormal + vec3(-dw * xz.x / r, 0.0, -dw * xz.y / r) * 1.4);
          vRipple = abs(dw);
        }
        #ifdef USE_TANGENT
          vec3 objectTangent = vec3( tangent.xyz );
        #endif`)
      .replace('#include <begin_vertex>', `
        vec3 transformed = vec3(position);
        vPoolT = aT; vPoolXZ = position.xz;
        { vec2 xz = position.xz - uImpact; float r = length(xz); transformed.y += wave(r) * (1.0 - smoothstep(0.6, 0.95, aT)); }`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        varying float vPoolT; varying vec2 vPoolXZ; varying float vRipple;`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        {
          float thick = 1.0 - smoothstep(0.3, 1.0, vPoolT);
          // key light scattered back up through the film from the floor: warm, strongest where the oil is thick
          float back = smoothstep(0.5, -0.7, vPoolXZ.y / ${POOL_R.toFixed(2)});   // light enters from the key side, glows toward the back
          totalEmissiveRadiance *= (0.05 + 0.2 * thick * (0.55 + 0.45 * back)) + 0.22 * min(vRipple * 5.0, 1.0) * thick;
          // one crisp glint streak of the key softbox across the far half (follows the ripple via the normal)
          vec3 nn = normalize(vNormal);
          vec2 hq = (vPoolXZ - vec2(-0.1, -0.36)) / vec2(0.54, 0.05);
          float gl = exp(-pow(dot(hq, hq), 1.5)) * (1.0 + 0.8 * min(vRipple * 4.0, 1.0));   // flat core, crisp falloff
          totalEmissiveRadiance += vec3(1.0, 0.93, 0.8) * 0.8 * gl * thick;
          // meniscus: the thin rim catches a hairline of warm light on the far side only
          float far = smoothstep(0.1, -0.6, vPoolXZ.y / ${POOL_R.toFixed(2)});
          totalEmissiveRadiance += vec3(1.0, 0.8, 0.5) * 0.07 * smoothstep(0.72, 0.86, vPoolT) * (1.0 - smoothstep(0.86, 0.97, vPoolT)) * far;
        }`)
      .replace('#include <dithering_fragment>', `#include <dithering_fragment>
        gl_FragColor.rgb *= 1.0 - smoothstep(0.7, 1.0, vPoolT);`);
  };
  poolTintMat.onBeforeCompile = (sh) => { Object.assign(sh.uniforms, poolU); };
  const poolGeo = poolGeometry(POOL_R, POOL_H);
  const poolTint = new THREE.Mesh(poolGeo, poolTintMat);
  poolTint.renderOrder = 1;
  const pool = new THREE.Mesh(poolGeo, oilPool);
  pool.renderOrder = 2;
  pool.position.set(tipW.x + 0.1, 0.003, tipW.z - 0.05);
  poolTint.position.copy(pool.position);
  scene.add(poolTint, pool);
  decal(softDisk, shadowCol, 0.1, POOL_R * 2.3, POOL_R * 1.9, pool.position.x, pool.position.z + 0.05);   // edge occlusion (whisper)
  const poolCaustic = decal(radialTex([[0, 1], [0.3, 0.5], [0.65, 0.12], [1, 0]]), '#e9a443', 0.12, 1.9, 0.9, pool.position.x + 0.6, pool.position.z - 0.55, -0.42, true); // light focused through the oil
  poolU.uImpact.value.set(tipW.x - pool.position.x, tipW.z - pool.position.z);
  // ---------- the drop: a pendant (one lathe surface, re-profiled every frame) → detaches → falls as a sphere
  const PEND_SEGS = 40, PEND_PTS = 34;
  const pendGeo = new THREE.LatheGeometry(Array.from({ length: PEND_PTS }, (_, j) => new THREE.Vector2(0.01, -j * 0.01)), PEND_SEGS);
  const pendant = new THREE.Mesh(pendGeo, oilDrop);
  pendant.renderOrder = 3;
  pendant.frustumCulled = false;
  scene.add(pendant);
  const prof = Array.from({ length: PEND_PTS }, () => [0, 0]);
  const smax = (a, b, k) => { const h = clamp(0.5 + 0.5 * (b - a) / k, 0, 1); return a * (1 - h) + b * h + k * h * (1 - h); };
  // rt: orifice radius, r: bulb radius, sag: vertical stretch of the lower half, neckLen, pinch: 0..1 (1 = neck gone)
  function setPendant(rt, r, sag, neckLen, pinch) {
    const yc = -(neckLen + r * 0.92);
    const rvT = r * 0.95, rvB = r * sag;
    const NU = 18;
    for (let j = 0; j < NU; j++) {
      const s = j / NU, y = yc * Math.pow(s, 0.85);                    // tip → bulb centre
      const bulb = Math.abs(y - yc) < rvT ? r * Math.sqrt(1 - Math.pow((y - yc) / rvT, 2)) : 0;
      const neckR = (rt + (rt * 0.55 - rt) * smooth(0, 1, -y / Math.max(-yc, 1e-3))) * (1 - pinch * smooth(0.2, 0.9, -y / Math.max(-yc, 1e-3)));
      prof[j][0] = Math.max(0.0005, smax(neckR, bulb, 0.035 * (1 - pinch * 0.8) + 0.004)); prof[j][1] = y;
    }
    for (let j = NU; j < PEND_PTS; j++) {
      const a = ((j - NU) / (PEND_PTS - 1 - NU)) * Math.PI / 2;
      prof[j][0] = r * Math.cos(a); prof[j][1] = yc - rvB * Math.sin(a);
    }
    prof[PEND_PTS - 1][0] = 0;
    const p = pendGeo.attributes.position.array, nrm = pendGeo.attributes.normal.array;
    for (let j = 0; j < PEND_PTS; j++) {
      const a = prof[Math.max(0, j - 1)], b = prof[Math.min(PEND_PTS - 1, j + 1)];
      let tx = b[0] - a[0], ty = b[1] - a[1]; const tl = Math.hypot(tx, ty) || 1; tx /= tl; ty /= tl;
      let nx = -ty, ny = tx;                                              // outward for a profile running downward
      if (j === PEND_PTS - 1) { nx = 0; ny = -1; }
      for (let i = 0; i <= PEND_SEGS; i++) {
        // slots run bottom → top (lathe winding), the profile runs top → bottom
        const phi = (i / PEND_SEGS) * TAU, sn = Math.sin(phi), cs = Math.cos(phi), k = (i * PEND_PTS + (PEND_PTS - 1 - j)) * 3;
        p[k] = prof[j][0] * sn; p[k + 1] = prof[j][1]; p[k + 2] = prof[j][0] * cs;
        nrm[k] = nx * sn; nrm[k + 1] = ny; nrm[k + 2] = nx * cs;
      }
    }
    pendGeo.attributes.position.needsUpdate = true; pendGeo.attributes.normal.needsUpdate = true;
    return yc - rvB;                                                      // lowest point (local)
  }
  const drop = new THREE.Mesh(new THREE.SphereGeometry(1, 48, 32), oilDrop);
  drop.renderOrder = 3;
  scene.add(drop);

  // ---------- bubbles (instanced soft glass/oil spheres)
  let mobileNow = false;
  const isMobile = () => mobileNow;
  const NB = 10;
  const tints = [C('#9ab4ac'), C('#f9b5c4'), C('#ddbfa3'), C('#b6c9c2'), C('#e8d6c3'), C('#c49b9f')];
  const bubbleGeo = new THREE.SphereGeometry(1, 40, 28);
  const iColor = new Float32Array(NB * 3), iSoft = new Float32Array(NB), iAlpha = new Float32Array(NB), iHi = new Float32Array(NB * 3);
  bubbleGeo.setAttribute('iColor', new THREE.InstancedBufferAttribute(iColor, 3));
  bubbleGeo.setAttribute('iSoft', new THREE.InstancedBufferAttribute(iSoft, 1));
  bubbleGeo.setAttribute('iAlpha', new THREE.InstancedBufferAttribute(iAlpha, 1));
  bubbleGeo.setAttribute('iHi', new THREE.InstancedBufferAttribute(iHi, 3));
  const bubbleMat = new THREE.ShaderMaterial({
    uniforms: { uKey: { value: C('#fff6ea').multiplyScalar(1.6) }, uRim: { value: C('#f6f4ee') }, uFade: { value: 1 } },
    vertexShader: BUBBLE_VERT, fragmentShader: BUBBLE_FRAG, transparent: true, depthWrite: false,
    blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor,
  });
  const bubbles = new THREE.InstancedMesh(bubbleGeo, bubbleMat, NB);
  bubbles.frustumCulled = false; bubbles.renderOrder = 10;
  scene.add(bubbles);
  let seed = 4;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const B = [];
  // hand-placed starting composition (x, y, z, r, tint, soft) → then physics takes over
  const START = [
    [3.9, 8.9, -2.5, 0.3, 0, 0.12], [-3.1, 10.2, -1.5, 0.22, 1, 0.08], [4.6, 2.6, 1.2, 0.17, 2, 0.04], [-6.0, 7.4, -4.5, 0.34, 3, 0.42],
    [2.6, 11.6, -5.0, 0.4, 2, 0.5], [-1.9, 3.3, 1.6, 0.12, 1, 0.02], [5.9, 5.6, -1.5, 0.26, 5, 0.12], [-4.4, 11.6, 0.8, 0.18, 4, 0.06],
    [6.6, 10.4, -0.5, 0.32, 1, 0.45], [-2.6, 7.0, -4.8, 0.28, 0, 0.3],
  ];
  const setHi = (i) => { iHi[i * 3] = (rnd() - 0.5) * 0.26; iHi[i * 3 + 1] = (rnd() - 0.5) * 0.2; iHi[i * 3 + 2] = rnd(); };
  for (let i = 0; i < NB; i++) {
    const [x, y, z, r, t, s] = START[i];
    B.push({ p: new THREE.Vector3(x, y, z), v: new THREE.Vector3(), r, tint: t, soft: s, phase: rnd() * 100, born: -10, a: 0 });
    tints[t].toArray(iColor, i * 3); iSoft[i] = s; iAlpha[i] = 0; setHi(i);
  }
  const BOUNDS = { x0: -7.0, x1: 7.5, y0: -1.0, y1: 13.2, z0: -6, z1: 2.5 };
  function respawn(b, t) {
    const i = B.indexOf(b);
    b.p.set(BOUNDS.x0 + rnd() * (BOUNDS.x1 - BOUNDS.x0), -0.4 + rnd() * 3.2, BOUNDS.z0 + rnd() * (BOUNDS.z1 - BOUNDS.z0));
    b.v.set(0, 0, 0); b.born = t; b.a = 0; b.r = 0.12 + Math.pow(rnd(), 1.8) * 0.3;
    b.soft = clamp((b.p.z > 1.6 ? 0.5 : 0) + (b.p.z < -4 ? 0.35 : 0) + rnd() * 0.15, 0, 0.85);
    b.tint = Math.floor(rnd() * tints.length);
    tints[b.tint].toArray(iColor, i * 3); iSoft[i] = b.soft; setHi(i);
    bubbleGeo.attributes.iColor.needsUpdate = true; bubbleGeo.attributes.iSoft.needsUpdate = true; bubbleGeo.attributes.iHi.needsUpdate = true;
  }
  // DOM overlays the spheres must never pass behind (screen px, set from hero.js): the −25% disc, the price tag, the copy
  const OV = { discR: 0, tagW: 0, tagH: 0, copyTop: 1e9 };
  const ovDisc = [0, 0], ovTag = [0, 0];

  // ---------- pointer (ray in world space, damped)
  const pointer = { ndc: new THREE.Vector2(0.3, 0), target: new THREE.Vector2(0.3, 0), active: false, vel: new THREE.Vector2() };
  const ray = new THREE.Raycaster();
  const tmp = new THREE.Vector3(), tmp2 = new THREE.Vector3(), tmp3 = new THREE.Vector3();
  const camBase = { az: 0, el: 0 };

  // ---------- layout / camera framing
  const SUBJECT = { cx: -0.75, cy: 5.2, h: 11.0 };
  let exclNdc = -2, ppuNdc = 0.01;
  let W = 1, H = 1, frame = { fx: 0.66, fy: 0.5, hs: 0.8, D: 30 };
  const target = new THREE.Vector3();
  function layout() {
    W = Math.max(1, host.clientWidth); H = Math.max(1, host.clientHeight);
    const mobile = W < 761; mobileNow = mobile;
    renderer.setPixelRatio(pr);
    renderer.setSize(W, H, false);
    composer.setPixelRatio(pr);
    composer.setSize(W, H);
    camera.aspect = W / H;
    // how big the subject should be on screen, and where
    if (mobile) {
      const hs = Math.min(300, W * 0.78, H * 0.42);
      frame = { fx: 0.5, fy: (38 + hs / 2) / H, hs, D: 0 };
    } else {
      const wide = W / H;
      const hs = Math.min(H * 0.8, W * 0.44 * (11.0 / 7.6));
      frame = { fx: wide > 1.9 ? 0.62 : 0.6, fy: 0.5, hs, D: 0 };
    }
    exclNdc = (mobile ? -2 : (Math.min(W * 0.5, 140 + 640) / W) * 2 - 1);
    ppuNdc = 2 * (frame.hs / SUBJECT.h) / W;
    const tanH = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    frame.D = (H * SUBJECT.h) / (frame.hs * 2 * tanH);
    bgU.uRes.value.set(W * pr, H * pr); bgU.uDpr.value = pr;
    finalPass.uniforms.uRes.value.set(W * pr, H * pr);
    finalPass.uniforms.uVigCenter.value.set(mobile ? 0.5 : 0.6, mobile ? 0.62 : 0.5);
    finalPass.uniforms.uVig.value = mobile ? 0.26 : 0.34;
    dirty = true;
  }
  function placeCamera(intro) {
    const az = camBase.az, el = THREE.MathUtils.degToRad(11) + camBase.el;
    const D = frame.D * (1 + 0.045 * intro);
    target.set(SUBJECT.cx, SUBJECT.cy, 0);
    camera.position.set(target.x + Math.sin(az) * Math.cos(el) * D, target.y + Math.sin(el) * D, Math.cos(az) * Math.cos(el) * D);
    camera.lookAt(target);
    camera.near = D * 0.5; camera.far = D * 2.2;
    camera.updateProjectionMatrix();
    // shift the projection so the subject sits at (fx, fy) without perspective skew
    camera.projectionMatrix.elements[8] = -(2 * frame.fx - 1);
    camera.projectionMatrix.elements[9] = -(1 - 2 * frame.fy);
    camera.projectionMatrixInverse.copy(camera.projectionMatrix).invert();
    camera.updateMatrixWorld();
  }
  const toPx = (v) => { tmp3.copy(v).project(camera); return [(tmp3.x * 0.5 + 0.5) * W, (-tmp3.y * 0.5 + 0.5) * H]; };

  // ---------- post
  const rt = new THREE.WebGLRenderTarget(2, 2, { type: THREE.HalfFloatType, samples: 4 });
  const composer = new EffectComposer(renderer, rt);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.42, 0.62, 0.86);
  composer.addPass(bloom);
  const finalPass = new ShaderPass(FINAL_SHADER);
  composer.addPass(finalPass);

  // ---------- simulation
  const DROP = { period: 5.6, grow: 2.9, hang: 0.35, fallG: 5.2, drag: 1.6 };
  const st = { t: 0, phase: 0.6, dropY: 0, dropV: 0, falling: false, landed: false, impactT: -99, cyc: 0, intro: 1 };
  let dirty = true, running = false, raf = 0, last = 0, firstFrameDone = false;
  const dropPos = new THREE.Vector3();
  const tagLocal = new THREE.Vector3(Math.sin(0.95) * 1.62, 2.7, Math.cos(0.95) * 1.62); // label, front-right
  const anchors = {
    bubble: new THREE.Vector3(BOTTLE_X + 2.35, 8.05, 0.2),
    tag: new THREE.Vector3(),                       // on the label surface (set from the bottle each frame)
    glow: new THREE.Vector3(BOTTLE_X - 0.6, 4.6, -1.5),
    pool: new THREE.Vector3(BOTTLE_X - 1.6, 0, 0.4),
    tA: new THREE.Vector3(BOTTLE_X + 9.5, 12.8, -4), tB: new THREE.Vector3(BOTTLE_X - 2.6, -1.55, -4),
  };

  function step(dt, t) {
    // intro dolly (viscous ease-out)
    st.intro = reduced ? 0 : Math.max(0, st.intro - dt / 2.6);
    const introE = Math.pow(st.intro, 3);

    // pointer → camera parallax (critically damped feel via exponential smoothing)
    const k = 1 - Math.exp(-dt / 0.9);
    const px = pointer.active ? pointer.target.x : 0.15 * Math.sin(t * 0.13);
    const py = pointer.active ? pointer.target.y : 0.1 * Math.sin(t * 0.11 + 1);
    pointer.vel.set((px - pointer.ndc.x) / Math.max(dt, 1e-3), (py - pointer.ndc.y) / Math.max(dt, 1e-3)).multiplyScalar(k);
    pointer.ndc.x += (px - pointer.ndc.x) * k;
    pointer.ndc.y += (py - pointer.ndc.y) * k;
    if (!reduced) {
      camBase.az = -pointer.ndc.x * THREE.MathUtils.degToRad(2.4);
      camBase.el = pointer.ndc.y * THREE.MathUtils.degToRad(1.3);
    }
    placeCamera(introE);

    // dropper: slow float (oil-damped), tiny sway
    const bob = reduced ? 0 : Math.sin(t * TAU / 7.5) * 0.07 + Math.sin(t * TAU / 11.3) * 0.03;
    dropperPivot.position.set(DROPPER_BASE.x, DROPPER_BASE.y + bob, DROPPER_BASE.z);
    dropperPivot.rotation.z = -DROPPER_TILT + (reduced ? 0 : Math.sin(t * TAU / 9.1) * 0.012);
    dropperPivot.updateMatrixWorld(true);
    const tip = dropper.localToWorld(tmp.copy(tipLocal));
    dropShadow.position.x = tip.x + 1.6 + bob * 0.4;
    glassRimU.uAxis.value.set(-Math.sin(dropperPivot.rotation.z), Math.cos(dropperPivot.rotation.z), 0);
    // DOM overlay anchors (screen px): the −25% disc (kept inside the stage) and the price tag on the label
    bottle.localToWorld(anchors.tag.copy(tagLocal));
    { const d = toPx(anchors.bubble), m = OV.discR + 14; ovDisc[0] = clamp(d[0], m, W - m); ovDisc[1] = d[1];
      const tg = toPx(anchors.tag); ovTag[0] = tg[0]; ovTag[1] = tg[1]; }

    // the drop: form → detach → slow viscous fall → merge → ripple
    const ph = reduced ? 2.3 : (t + st.phase) % DROP.period;
    const cyc = Math.floor((t + st.phase) / DROP.period);
    const R1 = 0.19, RT = 0.046;
    pendant.position.copy(tip);
    if (ph < DROP.grow + DROP.hang) {
      st.falling = false; st.landed = false; st.dropV = 0;
      const g = easeInOut(clamp(ph / DROP.grow, 0, 1));
      const hp = ph > DROP.grow ? smooth(DROP.grow, DROP.grow + DROP.hang, ph) : 0;   // hang progress
      const r = RT + (R1 - RT) * g;
      const sag = 1.02 + 0.3 * g + 0.1 * hp;
      const neckLen = 0.008 + 0.05 * g + 0.12 * hp;
      setPendant(RT, r, sag, neckLen, smooth(0.35, 1, hp));
      pendant.visible = true; drop.visible = false;
      st.dropY = tip.y - (neckLen + r * 0.92);
    } else {
      const since = ph - (DROP.grow + DROP.hang);
      // what stays behind on the nozzle: a small bead that retracts with a damped ease
      setPendant(RT, RT + 0.034 * Math.exp(-since * 5), 1.04, 0.004, 0);
      pendant.visible = true;
      if (!st.falling && !st.landed) {
        st.falling = true; st.cyc = cyc;
        st.x0 = tip.x; st.z0 = tip.z; st.y0 = tip.y - (0.008 + 0.05 + 0.12 + R1 * 0.92);
      }
      if (st.falling) {
        // viscous medium: dv/dt = g − c·v (terminal velocity g/c ≈ 3.2 u/s) → reads as slow motion.
        // Closed form in the time since detach, so the fall is identical at any frame rate.
        const gc = DROP.fallG / DROP.drag, ec = Math.exp(-DROP.drag * since);
        st.dropV = gc * (1 - ec);
        st.dropY = st.y0 - gc * (since - (1 - ec) / DROP.drag);
        const stretch = 1 + clamp(st.dropV / 3.2, 0, 1) * 0.16;
        // detach recoil: the elongated drop settles round with a critically damped ease (no wobble)
        const settle = 1 + 0.42 * Math.exp(-since * 7);
        drop.scale.set(R1 / Math.sqrt(stretch * settle), R1 * stretch * settle, R1 / Math.sqrt(stretch * settle));
        drop.position.set(st.x0, st.dropY, st.z0);
        drop.visible = true;
        const surface = POOL_H + 0.01;
        if (st.dropY - R1 * stretch < surface + 0.02) {
          // merge: sink and spread into the pool
          const m = clamp((surface + 0.02 - (st.dropY - R1 * stretch)) / (R1 * 2.2), 0, 1);
          drop.scale.set(R1 * (1 + 0.5 * m), R1 * stretch * (1 - m * 0.92), R1 * (1 + 0.5 * m));
          drop.position.y = Math.max(st.dropY, surface + R1 * stretch * (1 - m) * 0.5);
          if (st.impactT < 0 || st.impactCyc !== st.cyc) { st.impactT = t; st.impactCyc = st.cyc; poolU.uImpact.value.set(st.x0 - pool.position.x, st.z0 - pool.position.z); }
          if (m >= 1) { st.falling = false; st.landed = true; drop.visible = false; }
        }
      } else drop.visible = false;
    }
    poolU.uAge.value = reduced ? 99 : t - st.impactT;

    // bubbles: buoyancy + viscous drag + low-frequency wander + cursor push + product avoidance
    // (reduced motion: the spheres hold still, but still respect the overlays)
    {
      ray.setFromCamera(pointer.ndc, camera);
      const mobile = isMobile();
      for (let i = 0; i < NB; i++) {
        const b = B[i];
        const drag = 1.25;
        const vt = 0.16 + 0.22 * b.r;                  // terminal rise speed grows with size
        const ax = Math.sin(t * 0.21 + b.phase) * 0.06 + Math.sin(t * 0.47 + b.phase * 1.7) * 0.03;
        const az = Math.cos(t * 0.17 + b.phase * 0.7) * 0.03;
        let fx = ax, fy = drag * vt, fz = az;
        if (pointer.active && !mobile && !reduced) {
          ray.ray.closestPointToPoint(b.p, tmp2);
          const dx = b.p.x - tmp2.x, dy = b.p.y - tmp2.y, dz = b.p.z - tmp2.z;
          const d = Math.hypot(dx, dy, dz), R = 1.9 + b.r;
          if (d < R) {
            const f = Math.pow(1 - d / R, 2) * 3.4 / Math.max(d, 0.05);
            fx += dx * f; fy += dy * f; fz += dz * f * 0.3;
            // fluid drag from the moving cursor
            fx += pointer.vel.x * 2.6 * (1 - d / R); fy += pointer.vel.y * 2.0 * (1 - d / R);
          }
        }
        if (!reduced) {
          b.v.x += (fx - drag * b.v.x) * dt; b.v.y += (fy - drag * b.v.y) * dt; b.v.z += (fz - drag * b.v.z) * dt;
          b.p.addScaledVector(b.v, dt);
        }
        // flow around the bottle (vertical capsule) and the dropper (segment) – remove inward velocity, no bounce
        const avoid = (ax0, ay0, az0, ax1, ay1, az1, rad) => {
          const sx = ax1 - ax0, sy = ay1 - ay0, sz = az1 - az0;
          const h = clamp(((b.p.x - ax0) * sx + (b.p.y - ay0) * sy + (b.p.z - az0) * sz) / (sx * sx + sy * sy + sz * sz), 0, 1);
          const cx = ax0 + sx * h, cy = ay0 + sy * h, cz = az0 + sz * h;
          let nx = b.p.x - cx, ny = b.p.y - cy, nz = b.p.z - cz; const d = Math.hypot(nx, ny, nz) || 1e-4;
          const min = rad + b.r;
          if (d < min) {
            nx /= d; ny /= d; nz /= d;
            b.p.set(cx + nx * min, cy + ny * min, cz + nz * min);
            const vn = b.v.x * nx + b.v.y * ny + b.v.z * nz;
            if (vn < 0) { b.v.x -= vn * nx; b.v.y -= vn * ny; b.v.z -= vn * nz; }
          }
        };
        // bubbles in front of the product flow around its silhouette (never drift across the label)
        const front = b.p.z > -1.5;
        // screen space: flow around the DOM overlays (−25% disc, price tag, copy) and fade to zero before any
        // overlap or edge, so a sphere is never seen behind a flat element or sliced by the stage edge
        let vis = 1;
        {
          tmp3.copy(b.p).applyMatrix4(camera.matrixWorldInverse);
          const ppw = camera.projectionMatrix.elements[5] * H * 0.5 / Math.max(-tmp3.z, 0.1); // px per world unit at depth
          tmp3.copy(b.p).project(camera);
          const sx = (tmp3.x * 0.5 + 0.5) * W, sy = (-tmp3.y * 0.5 + 0.5) * H, sr = b.r * ppw;
          const PAD = 26, kp = Math.min(1, dt * 3) / ppw;
          const pushPx = (dx, dy, px) => {                     // move on screen, kill velocity toward the obstacle
            b.p.x += dx * px * kp; b.p.y -= dy * px * kp;
            const vn = b.v.x * dx - b.v.y * dy; if (vn < 0) { b.v.x -= vn * dx; b.v.y += vn * dy; }
          };
          if (OV.discR > 0) {
            const dx = sx - ovDisc[0], dy = sy - ovDisc[1], d = Math.hypot(dx, dy) || 1e-3;
            const gap = d - sr - OV.discR;
            if (gap < PAD) pushPx(dx / d, dy / d, PAD - gap);
            vis = Math.min(vis, smooth(2, PAD, gap));
          }
          if (OV.tagW > 0) {
            const x0 = ovTag[0] - 8, x1 = ovTag[0] + OV.tagW, y0 = ovTag[1] - OV.tagH / 2, y1 = ovTag[1] + OV.tagH / 2;
            const qx = clamp(sx, x0, x1), qy = clamp(sy, y0, y1);
            let dx = sx - qx, dy = sy - qy, d = Math.hypot(dx, dy), gap = d - sr;
            if (d < 1e-3) { const up = sy - y0, dn = y1 - sy; dx = 0; dy = up < dn ? -1 : 1; d = 1; gap = -Math.min(up, dn) - sr; }
            if (gap < PAD) pushPx(dx / d, dy / d, PAD - gap);
            vis = Math.min(vis, smooth(2, PAD, gap));
          }
          if (!mobile) {
            const gap = sx - sr - (exclNdc * 0.5 + 0.5) * W;
            if (gap < 0) pushPx(1, 0, -gap);
            vis = Math.min(vis, smooth(0, 48, gap));
          } else {
            vis = Math.min(vis, smooth(6, 40, OV.copyTop - (sy + sr)));
          }
          vis = Math.min(vis, smooth(0, 80, sy - sr), smooth(0, 36, W - sx - sr), smooth(0, 36, sx - sr));
          if (sy + sr < 0) b.p.y = BOUNDS.y1 + 1;              // fully out at the top → respawn below
        }
        const zb = front ? b.p.z : BOTTLE_Z;
        avoid(BOTTLE_X, -0.5, zb, BOTTLE_X, 7.3, zb, 1.85);
        const cb = DROPPER_BASE, s = Math.sin(DROPPER_TILT), c = Math.cos(DROPPER_TILT);
        const zd = front ? b.p.z : cb.z;
        avoid(cb.x, cb.y, zd, cb.x + 4.1 * s, cb.y + 4.1 * c, zd, 1.35);
        avoid(cb.x, cb.y, zd, cb.x - PIPETTE_LEN * s, cb.y - PIPETTE_LEN * c, zd, 0.5);
        avoid(cb.x - PIPETTE_LEN * s, -0.5, zd, cb.x - PIPETTE_LEN * s, cb.y - PIPETTE_LEN * c, zd, 0.6); // the drop's path
        // life: slow fade in after spawn, fade out near the top; hide instantly, reveal gently
        const target = smooth(0, 2.4, t - b.born) * (1 - smooth(BOUNDS.y1 - 2.4, BOUNDS.y1, b.p.y)) * vis;
        b.a = (reduced || target < b.a) ? target : b.a + (target - b.a) * Math.min(1, dt * 3);
        iAlpha[i] = b.a;
        if (b.p.y > BOUNDS.y1 || b.p.x < BOUNDS.x0 - 2 || b.p.x > BOUNDS.x1 + 2) respawn(b, t);
      }
      // soft separation so bubbles never clump (viscous: positional relax, no impulse)
      for (let i = 0; i < NB; i++) for (let j = i + 1; j < NB; j++) {
        const a = B[i], c = B[j];
        const dx = c.p.x - a.p.x, dy = c.p.y - a.p.y, dz = (c.p.z - a.p.z) * 0.35;
        const d = Math.hypot(dx, dy, dz) || 1e-4, min = (a.r + c.r) * 1.6 + 0.25;
        if (d < min) { const k = (min - d) / d * Math.min(1, dt * 2); a.p.x -= dx * k * 0.5; a.p.y -= dy * k * 0.5; c.p.x += dx * k * 0.5; c.p.y += dy * k * 0.5; }
      }
      bubbleGeo.attributes.iAlpha.needsUpdate = true;
    }
    const m4 = new THREE.Matrix4();
    for (let i = 0; i < NB; i++) { const b = B[i]; m4.makeScale(b.r, b.r, b.r).setPosition(b.p); bubbles.setMatrixAt(i, m4); }
    bubbles.instanceMatrix.needsUpdate = true;

    // screen-space anchors for the backdrop + DOM overlays
    const g = toPx(anchors.glow); bgU.uGlow.value.set(g[0] * pr, (H - g[1]) * pr);
    const unit = toPx(tmp2.set(anchors.glow.x, anchors.glow.y + 1, anchors.glow.z));
    const ppu = Math.abs(unit[1] - g[1]);          // pixels per world unit at the glow depth
    bgU.uGlowR.value = ppu * 6.2 * pr;
    const pl = toPx(anchors.pool); bgU.uPool.value.set(pl[0] * pr, (H - pl[1]) * pr); bgU.uPoolR.value.set(ppu * 7.5 * pr, ppu * 1.9 * pr);
    let a = toPx(anchors.tA), b2 = toPx(anchors.tB);
    if (isMobile()) {   // the disc sits top-right on mobile: one long diagonal from the top-left, behind the product, out under the disc
      const fl = toPx(tmp2.set(BOTTLE_X, 0, 0));
      a = [-24, H * 0.05]; b2 = [W + 24, Math.max(fl[1] - 34, ovDisc[1] + OV.discR + 90)];
    }
    bgU.uTA.value.set(a[0] * pr, (H - a[1]) * pr); bgU.uTB.value.set(b2[0] * pr, (H - b2[1]) * pr);
    finalPass.uniforms.uTime.value = t;
    caustic.material.opacity = 0.26 + 0.04 * Math.sin(t * 0.7);
    onFrame && onFrame({ bubble: ovDisc, tag: ovTag, ppu, W, H });
  }

  // ---------- loop + adaptive resolution
  let acc = 0, n = 0, warm = 0;
  function render(now) {
    raf = running ? requestAnimationFrame(render) : 0;
    const t = now / 1000;
    const dt = last ? Math.min(0.05, t - last) : 1 / 60;
    last = t;
    step(dt, t);
    composer.render(dt);
    if (!firstFrameDone) { firstFrameDone = true; onFirstFrame && onFirstFrame(); }
    // adaptive DPR: after warm-up, if frames are consistently slow, step resolution down (never below 1)
    warm++;
    if (warm > 120) {
      acc += dt; n++;
      if (n === 90) {
        const avg = acc / n; acc = 0; n = 0;
        if (avg > 0.026 && pr > 1) { pr = Math.max(1, pr - 0.25); layout(); }
      }
    }
  }
  function renderOnce() {
    const t = performance.now() / 1000;
    step(1 / 60, t); composer.render(1 / 60);
    if (!firstFrameDone) { firstFrameDone = true; onFirstFrame && onFirstFrame(); }
  }

  layout();
  return {
    start() { if (running) return; if (reduced) { renderOnce(); return; } running = true; last = 0; raf = requestAnimationFrame(render); },
    stop() { running = false; cancelAnimationFrame(raf); raf = 0; },
    resize() { layout(); if (!running) renderOnce(); },
    pointer(nx, ny, active) { pointer.target.set(nx, ny); pointer.active = active; },
    setOverlays(o) { Object.assign(OV, o); },
    get dirty() { return dirty; },
    dispose() { this.stop(); renderer.dispose(); },
  };
}
