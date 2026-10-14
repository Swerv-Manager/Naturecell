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
import { drawLabel, labelRoughness, labelGlow } from './label.js';

const C = (hex) => new THREE.Color(hex); // sRGB hex → linear working colour
const TAU = Math.PI * 2;
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// ---------------------------------------------------------------------------------------------------------
// Layout constants (world units ≈ 1 cm)
const BOTTLE_X = 1.35, BOTTLE_Z = 0;
const DROPPER_TILT = 0.57;                            // rad from vertical (≈ 38°), tip down-left
const DROPPER_BASE = new THREE.Vector3(-1.1, 8.06, 0.75); // collar bottom centre – a clear gap to the neck lip
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
function poolGeometry(R, H, rings = 72, segs = 144, seed = 3) {
  const pos = [], idx = [], ts = [];
  // one round puddle fed by drops landing in one spot: only low, quiet wobble (no lobe, no flattened side), so it
  // never reads as a bean, a slug or a leaf
  const rimR = (a) => R * (1 + 0.03 * Math.sin(2 * a + seed) + 0.02 * Math.sin(3 * a + 1.7 * seed) + 0.01 * Math.sin(5 * a + 0.3));
  pos.push(0, H, 0); ts.push(0);
  for (let i = 1; i <= rings; i++) {
    const t = Math.pow(i / rings, 0.8);
    for (let j = 0; j < segs; j++) {
      const a = (j / segs) * TAU, rr = rimR(a) * t;
      const h = H * Math.pow(Math.max(0, 1 - t * t), 0.35);
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
  panel(1.4, 9, [10, 6, -1.5], '#dfe8e4', 4.0);      // cool kicker, camera-right-behind → the right edge of the glass + a grazing sheen on the label
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
  uniform vec2 uSpot; uniform vec2 uSpotR; uniform vec3 uSpotCol;
  uniform vec2 uPool; uniform vec2 uPoolR;
  uniform vec2 uTA, uTB; uniform float uThreadAlpha;
  uniform vec4 uTxt[6]; uniform float uTxtPad; uniform vec3 uDisc;
  varying vec2 vUv;
  float sdBox(vec2 p, vec4 r){ vec2 c = (r.xy + r.zw) * 0.5, h = (r.zw - r.xy) * 0.5; vec2 d = abs(p - c) - h; return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0); }
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
    // warm spot right behind the bottle's shoulder: only ever seen THROUGH the amber glass (transmission picks it
    // up and the attenuation turns it into the backlit amber glow of the shoulder and the heel)
    vec2 sq = (p - uSpot) / uSpotR;
    col += uSpotCol * exp(-dot(sq, sq) * 1.6);
    // light pooling on the (invisible) floor
    vec2 q = (p - uPool) / uPoolR;
    col += mix(uSage, uWarm, 0.5) * 0.035 * exp(-dot(q,q) * 1.6);
    // one diagonal thread hairline (mauve), faded at both ends
    float dl = segDist(p, uTA, uTB);
    float w = 0.35 * uDpr;
    float line = 1.0 - smoothstep(w, w + 0.9 * uDpr, dl);
    vec2 ab = uTB - uTA; float tt = clamp(dot(p - uTA, ab) / dot(ab, ab), 0.0, 1.0);
    // emerges from nothing at the right edge, passes behind the bottle (faintly seen through the amber glass) and
    // dissolves over its last 20% in open air
    float fade = smoothstep(0.04, 0.16, tt) * smoothstep(1.0, 0.8, tt);
    // and gives way to the type: gone 40 px before any text block, and clear of the −25% disc by 12 px
    for (int i = 0; i < 6; i++) fade *= smoothstep(0.0, uTxtPad, sdBox(p, uTxt[i]));
    fade *= smoothstep(uDisc.z + 12.0 * uDpr, uDisc.z + 30.0 * uDpr, length(p - uDisc.xy));
    col = mix(col, uThread, line * fade * uThreadAlpha);
    gl_FragColor = vec4(col, 1.0);
  }`;

const BUBBLE_VERT = /* glsl */`
  attribute vec3 iColor; attribute float iSoft; attribute float iAlpha; attribute vec3 iHi; attribute float iOil;
  varying vec3 vN; varying vec3 vV; varying vec3 vColor; varying float vSoft; varying float vAlpha; varying vec3 vVN; varying vec3 vHi; varying float vOil;
  void main(){
    mat4 m = modelMatrix * instanceMatrix;
    vec4 wp = m * vec4(position, 1.0);
    vN = normalize(mat3(m) * normal);
    vV = normalize(cameraPosition - wp.xyz);
    vVN = normalize(normalMatrix * mat3(instanceMatrix) * normal);
    vColor = iColor; vSoft = iSoft; vAlpha = iAlpha; vHi = iHi; vOil = iOil;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }`;
// Glass/oil spheres. Premultiplied output: rgb = light the sphere adds, a = how much backdrop it hides.
// Per instance: highlight offset + softness (depth of field) + thin-film phase, so no two spheres look stamped.
const BUBBLE_FRAG = /* glsl */`
  precision highp float;
  uniform vec3 uKey; uniform vec3 uRim; uniform float uFade;
  varying vec3 vN; varying vec3 vV; varying vec3 vColor; varying float vSoft; varying float vAlpha; varying vec3 vVN; varying vec3 vHi; varying float vOil;
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
    // a ball lens shows the stage upside down: the warm floor glow in the upper half, the dark room below
    {
      float rr = length(nv.xy);
      vec3 inv = mix(vec3(0.15, 0.12, 0.075), vec3(0.01, 0.019, 0.016), smoothstep(-0.55, 0.45, nv.y));
      float lens = 1.0 - smoothstep(0.5, 0.82, rr);
      col = mix(col, inv + vColor * caust * 0.4, lens * 0.75 * (1.0 - vOil)); a = mix(a, 0.6, lens * 0.75 * (1.0 - vOil));
    }
    // a sphere of the oil itself: amber body (absorbs the stage, deepens toward the rim), a golden caustic at the
    // bottom where the back light is focused, no iridescence – it belongs to the drop, not to a soap film
    if (vOil > 0.0) {
      vec3 honey = vec3(0.62, 0.36, 0.1), deep = vec3(0.16, 0.06, 0.01);
      float rimO = smoothstep(0.15, 0.85, rimT);
      vec3 oc = mix(honey * 0.2, deep * 0.5, rimO);
      oc *= mix(1.2, 0.55, smoothstep(-0.5, 0.7, nv.y));                       // ball lens: the warm floor glow below, dark room above
      float cO = smoothstep(0.25, 0.95, dot(nv.xy, normalize(vec2(0.2, -1.0)))) * smoothstep(0.02, 0.4, ndv);
      oc += vec3(0.95, 0.62, 0.24) * cO * 0.7;
      oc += vec3(1.0, 0.85, 0.6) * pow(rimT, 4.0) * 0.12;
      float ao = mix(0.3, 0.94, rimO);
      ao = mix(ao, 0.8, smoothstep(0.84, 0.98, rimT));
      col = mix(col, oc, vOil); a = mix(a, ao, vOil);
    }
    col *= edge; a *= edge;
    float hi = (sp * 1.5 + sp2) * (1.0 - vSoft * 0.7);
    col += uKey * hi; a += hi * 0.55;
    float k = vAlpha * uFade;
    float occl = smoothstep(0.35, 1.0, k) * (1.0 - 0.8 * smoothstep(0.22, 0.5, vSoft));
    gl_FragColor = vec4(col * k, clamp(a, 0.0, 1.0) * k * occl);
  }`;

// The film's surface height around the impact: a coalescence dome (the drop's volume handed to the film the moment it
// touches, decaying fast) and two ripple rings fired out of that dome 60 ms later.
const WAVE_GLSL = /* glsl */`
  uniform float uAge; uniform vec2 uImpact; uniform float uAmp; uniform vec2 uDome;
  float dome(float r){
    if (uAge <= 0.0 || uAge > 1.2) return 0.0;
    float grow = 1.0 - exp(-uAge / 0.018);
    return uDome.x * grow * exp(-7.0 * uAge) * exp(-r * r / (uDome.y * uDome.y));
  }
  float wave(float r){
    float h = dome(r);
    for (int i = 0; i < 2; i++){
      float age = uAge - 0.06 - float(i) * 0.22;
      if (age <= 0.0) continue;
      float front = uDome.y * 0.6 + 0.55 * age;
      float d = r - front;
      float life = exp(-2.2 * age) * (1.0 - smoothstep(0.85, 1.2, age)) * smoothstep(0.0, 0.05, age);
      h += uAmp * life * exp(-d * d / 0.0035) * cos(d * 24.0) * (1.0 - float(i) * 0.55);
    }
    return h;
  }`;
// the share of the film that mirrors the night-green room instead of transmitting the floor: a Fresnel sheen that grows
// toward the far (more grazing) side – the near third stays deep amber, the far third reads cool and green over amber
const SHEEN_GLSL = /* glsl */`
  float sheenW(float rn){ float far = smoothstep(0.55, -0.95, rn); return 0.015 + 0.62 * pow(far, 1.5); }`;
// Oil pool, absorption layer: multiplies what is under it by the oil's transmittance (thicker → deeper amber).
const POOL_TINT_VERT = /* glsl */`
  attribute float aT;
  varying float vT; varying vec3 vWN; varying vec3 vWV; varying vec2 vXZ; varying float vDome;
  ${WAVE_GLSL}
  void main(){
    vT = aT; vXZ = position.xz;
    vec3 p = position;
    { vec2 xz = position.xz - uImpact; float r = length(xz); p.y += wave(r) * (1.0 - smoothstep(0.6, 0.95, aT)); vDome = dome(r) / max(uDome.x, 1e-4); }
    vec4 wp = modelMatrix * vec4(p, 1.0);
    vWN = normalize(mat3(modelMatrix) * normal);
    vWV = normalize(cameraPosition - wp.xyz);
    gl_Position = projectionMatrix * viewMatrix * wp;
  }`;
const POOL_TINT_FRAG = /* glsl */`
  precision highp float;
  uniform vec3 uSigma; uniform float uFeather;
  varying float vT; varying vec3 vWN; varying vec3 vWV; varying vec2 vXZ; varying float vDome;
  ${SHEEN_GLSL}
  void main(){
    float ndv = max(abs(dot(normalize(vWN), normalize(vWV))), 0.16);
    // a film a fraction of a millimetre thick: tinted transparency, never a darker object. The floor (and the light
    // pooled on it) shows straight through; the oil only takes out blue and some green – near third ≈ floor × (1.05,
    // 0.85, 0.55) in display terms – a little deeper where it pooled, and under the coalescence dome
    float thick = 1.0 - 0.55 * smoothstep(0.4, 1.0, vT) + 1.6 * vDome;
    float fw = max(fwidth(vT), 1e-4);
    float film = 1.0 - smoothstep(1.0 - 1.4 * fw, 1.0, vT);              // crisp, anti-aliased film edge
    vec3 T = pow(uSigma, vec3(thick * (0.85 + 0.15 / ndv * 0.3)));
    float F = 0.04 + 0.96 * pow(1.0 - ndv, 5.0);                          // light reflected away is not transmitted
    vec3 tint = T * (1.0 - F * 0.6);
    tint *= 1.0 - sheenW(vXZ.y / uFeather);                               // the mirrored share replaces transmitted light
    gl_FragColor = vec4(mix(vec3(1.0), tint, film), 1.0);
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
    uSpot: { value: new THREE.Vector2(-1e4, -1e4) }, uSpotR: { value: new THREE.Vector2(100, 100) }, uSpotCol: { value: C('#f0a650').multiplyScalar(0.4) },
    uPool: { value: new THREE.Vector2() }, uPoolR: { value: new THREE.Vector2(300, 60) },
    uTA: { value: new THREE.Vector2() }, uTB: { value: new THREE.Vector2() }, uThreadAlpha: { value: 0.36 },
    uTxt: { value: Array.from({ length: 6 }, () => new THREE.Vector4(-9, -9, -8, -8)) }, uTxtPad: { value: 40 }, uDisc: { value: new THREE.Vector3(-1e4, -1e4, 0) },
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
  // cool kicker from camera-right-behind: grazes only the right edge of the label and the glass (rounds the cylinder)
  const kicker = new THREE.DirectionalLight(C('#dfe8e4'), 1.5);
  kicker.position.set(9, 4.5, -2.5);
  scene.add(kicker);

  // ---------- materials
  const amberGlass = new THREE.MeshPhysicalMaterial({
    color: 0xffffff, metalness: 0, roughness: 0.035, transmission: 1, ior: 1.52, thickness: 0.8,
    attenuationColor: C('#a24a12'), attenuationDistance: 1.6, specularIntensity: 1, envMapIntensity: 1.35,
  });
  // the thick glass base glows where the key passes through it (the warm "heel" of a backlit amber bottle)
  amberGlass.onBeforeCompile = (sh) => {
    sh.fragmentShader = sh.fragmentShader.replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
      { float hy = vWorldPosition.y;
        float heel = smoothstep(0.62, 0.12, hy) * smoothstep(-0.02, 0.1, hy);
        float ndvH = clamp(dot(normalize(vNormal), normalize(vViewPosition)), 0.0, 1.0);
        totalEmissiveRadiance += vec3(0.085, 0.016, 0.0015) * heel * (0.35 + 0.65 * ndvH); }`);
  };
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
      void main(){
        vec3 n = normalize(vN), v = normalize(vV);
        float ndv = clamp(abs(dot(n, v)), 0.0, 1.0);
        // lateral coordinate across the tube (−1 = silhouette on the key side, +1 = shadow side)
        vec3 side = normalize(cross(uAxis, v));
        float lat = dot(n, side) * sign(dot(side, uK2) + 1e-4) * -1.0;
        // broad soft fresnel: the walls have body instead of a 1px wire
        float rim = pow(1.0 - ndv, 3.5) * 0.22;
        // the key softbox seen in the glass: one soft vertical band ~30% in from the lit edge, and a faint
        // narrow return from the right strip on the shadow side
        // over the oil the softbox is refracted away (the oil index nearly matches the glass): full strength only
        // on the empty glass above the meniscus
        float emptyG = smoothstep(${(-2.5 - 0.05).toFixed(2)}, ${(-2.5 + 0.3).toFixed(2)}, vY);
        float band = exp(-pow((lat + 0.42) / 0.06, 2.0)) * 0.62 * mix(0.18, 1.0, emptyG) + exp(-pow((lat - 0.8) / 0.05, 2.0)) * 0.2 * mix(0.45, 1.0, emptyG);
        float lenFade = smoothstep(-${(PIPETTE_LEN).toFixed(2)}, -${(PIPETTE_LEN - 0.3).toFixed(2)}, vY) * (1.0 - smoothstep(-0.2, 0.05, vY));
        // the wall itself: a cool-grey body that thickens toward the silhouette (the tube is glass, not wire)
        vec3 body = vec3(0.78, 0.84, 0.82) * 0.06 * pow(1.0 - ndv, 2.0) * mix(0.5, 1.0, emptyG);
        vec3 c = (vec3(1.0, 0.97, 0.92) * (rim + band) + body) * lenFade;
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
  // oil inside the pipette: translucent pale-gold MCT oil. Drawn premultiplied over the backdrop (rgb = light the
  // column adds, a = how much of what is behind it the oil absorbs), so the night green still reads through it.
  // Cylinder-lens look: straw-gold core where the back light is focused, deep amber toward the silhouette, one
  // bright refracted back-light line inside the shadow-side edge, and a concave meniscus that climbs the glass.
  const OT = -2.5;                                   // oil level at the wall (pipette local y)
  const OIL_K = 0.72;                                 // oil radius / glass inner radius: a clear glass wall on both sides
  const oilU = { uAxis: glassRimU.uAxis, uKey: glassRimU.uK2, uR: { value: 0.302 * OIL_K }, uTop: { value: OT }, uDepth: { value: 0.19 } };
  const oilColumn = new THREE.ShaderMaterial({
    uniforms: oilU, transparent: true, depthWrite: false,
    blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor,
    vertexShader: /* glsl */`
      varying vec3 vN; varying vec3 vV; varying vec3 vL;
      void main(){ vec4 wp = modelMatrix * vec4(position, 1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - wp.xyz); vL = position;
        gl_Position = projectionMatrix * viewMatrix * wp; }`,
    fragmentShader: /* glsl */`
      precision highp float;
      uniform vec3 uAxis, uKey; uniform float uR, uTop, uDepth;
      varying vec3 vN; varying vec3 vV; varying vec3 vL;
      vec3 lin(vec3 c){ return pow(c, vec3(2.2)); }
      void main(){
        vec3 n = normalize(vN), v = normalize(vV);
        float ndv = clamp(abs(dot(n, v)), 0.0, 1.0);
        vec3 side = normalize(cross(uAxis, v));
        float lat = dot(n, side) * sign(dot(side, uKey) + 1e-4) * -1.0;      // −1 key side … +1 shadow side
        float edge = pow(1.0 - ndv, 1.6);
        // saturated backlit gold, not olive: the colour comes from the oil's own transmission (alpha ≈ 0.3 lets the
        // stage through), with only 8% of the night green mixed in. Along the column: bright gold under the meniscus,
        // deepening toward the nozzle (the refracted path through the narrowing glass gets longer)
        vec3 night = lin(vec3(0.157, 0.251, 0.231));
        float along = smoothstep(uTop - 0.1, -${(PIPETTE_LEN - 0.2).toFixed(2)}, vL.y);
        vec3 topC = vec3(0.30, 0.118, 0.0), tipC = vec3(0.19, 0.042, 0.0);
        vec3 core = mix(mix(topC, tipC, along), night, 0.08);
        vec3 deep = lin(vec3(0.42, 0.2, 0.05));
        vec3 col = mix(core, deep * 0.32, pow(1.0 - ndv, 1.4));
        float a = mix(0.34, 0.86, edge);
        // the back light focused by the cylinder lens: one side of the column glows
        col += lin(vec3(0.95, 0.72, 0.33)) * 0.18 * exp(-pow((lat - 0.25) / 0.32, 2.0)) * (1.0 - 0.35 * along);
        // refracted back-light line inside the shadow-side edge: quiet, breathing along the axis
        float line = exp(-pow((lat - 0.7) / 0.03, 2.0));
        line *= (0.55 + 0.45 * smoothstep(-${PIPETTE_LEN.toFixed(2)} + 0.4, -${PIPETTE_LEN.toFixed(2)} + 2.4, vL.y)) * (0.85 + 0.15 * sin(vL.y * 3.1));
        line *= smoothstep(-${PIPETTE_LEN.toFixed(2)}, -${PIPETTE_LEN.toFixed(2)} + 0.25, vL.y) * (1.0 - smoothstep(uTop - 0.14, uTop - 0.06, vL.y));
        col += vec3(1.0, 0.8, 0.45) * line * 0.12;
        // a dark amber line one pixel inside each silhouette (the oil seen edge-on), separating oil from the clear wall
        float sil = exp(-pow((abs(lat) - 0.93) / 0.045, 2.0));
        col = mix(col, lin(vec3(0.376, 0.22, 0.078)), sil); a = mix(a, 0.96, sil);
        // meniscus: concave (oil wets the glass) – seen from the side, one fine amber line, lowest on the axis and
        // climbing to the wall. Above it: no oil, only a whisper of wetting film along the walls.
        float x = clamp(abs(lat), 0.0, 1.0) * uR;
        float Rs = (uR * uR + uDepth * uDepth) / (2.0 * uDepth);
        float u = uTop - uDepth + (Rs - sqrt(max(Rs * Rs - x * x, 0.0)));
        float above = smoothstep(u - 0.006, u + 0.006, vL.y);
        float wet = edge * (1.0 - smoothstep(uTop - 0.05, uTop + 0.03, vL.y));
        col = mix(col, deep * 0.1 * wet, above);
        a = mix(a, 0.2 * wet, above);
        float men = exp(-pow((vL.y - u) / 0.011, 2.0)) * (1.0 - 0.5 * sil);
        col += lin(vec3(0.85, 0.6, 0.3)) * 0.5 * men;
        a = max(a, men * 0.45);
        float cut = 1.0 - smoothstep(uTop + 0.02, uTop + 0.06, vL.y);
        gl_FragColor = vec4(col * cut, a * cut);
      }`,
  });
  // the drop (pendant, falling drop, the bead left on the nozzle): a liquid lens, premultiplied. Most of what you see
  // is the stage itself – straight through (alpha ≈ 0.55 at the centre) and inverted by the ball lens (the warm floor
  // glow shows at the top, the dark room at the bottom), tinted by the oil's amber transmission. A deep amber band
  // just inside the rim, a bright caustic crescent at the bottom where the back light is focused, and one small sharp
  // key specular top-left. The silhouette feathers into the stage tint instead of a dark outline.
  // uLen > 0: the pendant (vU = 0 at the nozzle → 1 at the bottom of the bulb; the neck carries no specular of its own).
  const oilDrop = new THREE.ShaderMaterial({
    uniforms: { uFade: { value: 1 }, uLen: { value: 0 }, uBgTop: { value: C('#2a443e') }, uBgBot: { value: C('#9c7634') } },
    transparent: true, depthWrite: false,
    blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor,
    vertexShader: /* glsl */`
      uniform float uLen;
      varying vec3 vN; varying vec3 vVN; varying vec3 vV; varying float vU;
      void main(){ vec4 wp = modelMatrix * vec4(position, 1.0);
        vN = normalize(mat3(modelMatrix) * normal); vVN = normalize(normalMatrix * normal); vV = normalize(cameraPosition - wp.xyz);
        vU = uLen > 0.0 ? clamp(-position.y / uLen, 0.0, 1.0) : 1.0;
        gl_Position = projectionMatrix * viewMatrix * wp; }`,
    fragmentShader: /* glsl */`
      precision highp float;
      uniform float uFade; uniform vec3 uBgTop, uBgBot;
      varying vec3 vN; varying vec3 vVN; varying vec3 vV; varying float vU;
      vec3 lin(vec3 c){ return pow(c, vec3(2.2)); }
      void main(){
        vec3 n = normalize(vN), v = normalize(vV), nv = normalize(vVN);
        float ndv = clamp(dot(n, v), 0.0, 1.0);
        float r = clamp(length(nv.xy), 0.0, 1.0);                   // 0 centre → 1 silhouette (view space)
        float bulb = smoothstep(0.2, 0.6, vU);                      // pendant: 0 on the wetted nozzle film, 1 on the bulb
        // ball lens: the stage seen upside down (refracted view), through the oil's amber transmission
        vec3 rf = refract(-v, n, 1.0 / 1.47);
        float sy = clamp(-(nv.y * 0.85 + rf.y * 0.15), -1.0, 1.0);
        vec3 bgInv = mix(uBgBot, uBgTop, smoothstep(-0.7, 0.7, sy));
        // a gold lens: the warm floor glow, inverted into the upper half, through the oil's amber transmission
        vec3 amberT = vec3(1.0, 0.70, 0.30);
        float a = 0.55;
        vec3 col = bgInv * amberT * 1.6 * a;
        // the longer path through the oil toward the rim: a soft 3 px deepening, never a drawn outline
        float band = smoothstep(0.6, 0.88, r) * (1.0 - smoothstep(0.9, 1.0, r));
        col = mix(col, lin(vec3(0.47, 0.27, 0.09)), band * 0.55); a = mix(a, 0.78, band * 0.55);
        // caustic crescent: the back light focused into the bottom quarter of the drop
        float cr = smoothstep(0.42, 0.78, -nv.y) * smoothstep(0.97, 0.78, r) * smoothstep(0.25, 0.6, r);
        col += lin(vec3(0.94, 0.745, 0.43)) * cr * 0.95 * bulb; a = max(a, cr * 0.75 * bulb);
        col = min(col, vec3(0.578));                                // the caustic stays below 200 in every channel
        // silhouette: feathered into the stage tint (no dark outline), alpha 0.8 at the edge
        float sil = smoothstep(0.85, 0.98, 1.0 - ndv);
        col = mix(col, uBgTop * 0.6, sil); a = mix(a, 0.8, sil);
        // one small, sharp key specular top-left (+ a faint window lower-right); none on the nozzle film
        vec3 vd = vec3(0.0, 0.0, 1.0);
        vec3 Lk = normalize(vec3(-0.5, 0.62, 0.6)), L2 = normalize(vec3(0.5, -0.3, 0.6));
        float sk = pow(max(dot(nv, normalize(Lk + vd)), 0.0), 420.0) * 2.4;
        float s2 = pow(max(dot(nv, normalize(L2 + vd)), 0.0), 90.0) * 0.1;
        float spec = (sk + s2) * bulb;
        gl_FragColor = vec4((col + vec3(1.0, 0.97, 0.9) * spec) * uFade, clamp(a + sk * 0.25 * bulb, 0.0, 1.0) * uFade);
      }`,
  });
  const oilDropFall = oilDrop.clone();               // own uFade (+ uLen = 0: a sphere) for the falling drop
  // the oil pool: a thin film in two layers – absorption (multiplies the floor by the oil's transmittance) and
  // surface light (env reflections with fresnel, the key glint, warm light scattered back up through the oil)
  const poolTintMat = new THREE.ShaderMaterial({
    uniforms: { uSigma: { value: new THREE.Vector3(1.1, 0.7, 0.27) }, uFeather: { value: 1.1 } },   // uSigma = linear transmittance of the film at unit thickness   // uFeather = pool radius (near-rim mask)
    vertexShader: POOL_TINT_VERT, fragmentShader: POOL_TINT_FRAG,
    transparent: true, depthWrite: false, blending: THREE.CustomBlending,
    blendEquation: THREE.AddEquation, blendSrc: THREE.ZeroFactor, blendDst: THREE.SrcColorFactor,
  });
  const oilPool = new THREE.MeshPhysicalMaterial({
    color: 0x000000, roughness: 0.03, metalness: 0, ior: 1.47, specularIntensity: 1, envMapIntensity: 0.6,
    emissive: C('#e8a040'), emissiveIntensity: 1.15, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
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
  const labelMat = new THREE.MeshPhysicalMaterial({ color: C('#7bb1b0'), roughness: 0.78, metalness: 0, sheen: 0.35, sheenRoughness: 0.8, sheenColor: C('#ffffff'), envMapIntensity: 0.42 });
  labelMat.onBeforeCompile = (sh) => {
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <map_fragment>', '#include <map_fragment>\n#ifdef USE_MAP\n  diffuseColor.rgb = texture2D( map, vMapUv, -0.65 ).rgb;\n#endif')
      .replace('#include <emissivemap_fragment>', '#ifdef USE_EMISSIVEMAP\n  totalEmissiveRadiance *= texture2D( emissiveMap, vEmissiveMapUv, -0.65 ).rgb;\n#endif');
  };
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
    const glow = new THREE.CanvasTexture(labelGlow(cv));
    glow.colorSpace = THREE.SRGBColorSpace; glow.anisotropy = tex.anisotropy; glow.wrapS = THREE.RepeatWrapping;
    labelMat.map = tex; labelMat.roughnessMap = rough; labelMat.metalnessMap = rough;
    labelMat.roughness = 1; labelMat.metalness = 1; labelMat.color.set(0xffffff);
    // the white logo print: a small lift so it reads as the brightest thing on the pack (≈ 240 on the real bottle)
    labelMat.emissiveMap = glow; labelMat.emissive.setRGB(0.135, 0.165, 0.215);
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
  const RG = 0.302, RTIP = 0.052, TAPER = 1.95;
  const pipR = (y) => { const s = clamp((y + PL) / TAPER, 0, 1); return RTIP + (RG - RTIP) * (1 - Math.pow(1 - s, 2.4)); };
  const pip = [[0.0, -PL], [RTIP * 0.72, -PL], [RTIP * 0.95, -PL + 0.012]];
  for (let k = 0; k <= 40; k++) { const y = -PL + 0.03 + (TAPER + 0.25 - 0.03) * (k / 40); pip.push([pipR(y), y]); }
  pip.push([RG, -2.0], [RG, -1.0], [RG, 0.05], [0.0, 0.05]);
  const pipGeo = lathe(pip, 96);
  // thin glass, drawn as two shells over the oil: absorption (edges darker, where the wall is seen edge-on)
  // and light (fresnel rim + softbox streaks) – crisper than screen-space transmission at this size
  const pipTint = new THREE.Mesh(pipGeo, new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.CustomBlending, blendEquation: THREE.AddEquation, blendSrc: THREE.ZeroFactor, blendDst: THREE.SrcColorFactor,
    vertexShader: `varying vec3 vN; varying vec3 vV; void main(){ vec4 wp = modelMatrix * vec4(position, 1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - wp.xyz); gl_Position = projectionMatrix * viewMatrix * wp; }`,
    fragmentShader: `precision highp float; varying vec3 vN; varying vec3 vV; void main(){ float ndv = clamp(abs(dot(normalize(vN), normalize(vV))), 0.0, 1.0);
      vec3 c = mix(vec3(0.92, 0.94, 0.93), vec3(0.42, 0.47, 0.45), pow(1.0 - ndv, 2.2)); gl_FragColor = vec4(c, 1.0); }`,
  }));
  pipTint.renderOrder = 4;
  dropper.add(pipTint);
  const pipRim = new THREE.Mesh(pipGeo, glassRim);
  pipRim.renderOrder = 5;
  dropper.add(pipRim);
  // oil column: concentric with the glass (OIL_K of its radius), filling the nozzle to the orifice; the top is
  // flat at the wall height – the concave meniscus is resolved in the shader
  const oilProf = [[0.0, -PL + 0.006], [RTIP * 0.6, -PL + 0.008]];
  for (let k = 0; k <= 40; k++) { const y = -PL + 0.03 + (TAPER + 0.25 - 0.03) * (k / 40); oilProf.push([pipR(y) * OIL_K, y]); }
  oilProf.push([RG * OIL_K, OT + 0.06], [0.0, OT + 0.06]);
  const pipOil = new THREE.Mesh(lathe(oilProf, 64), oilColumn);
  pipOil.renderOrder = 3;
  dropper.add(pipOil);
  dropper.traverse(o => { if (o.isMesh && o !== pipRim && o !== pipTint && o !== pipOil) o.renderOrder = 2; });
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
  // cast shadow as a gradient along its length: darkest at the base, gone by 60% of its length (≈ 1.3× the bottle's
  // diameter), with a soft penumbra across – the same softness as the packshot shadows on the rest of the page
  const castTex = (() => {
    const c = document.createElement('canvas'); c.width = 256; c.height = 128;
    const g = c.getContext('2d'); const im = g.createImageData(256, 128);
    for (let y = 0; y < 128; y++) for (let x = 0; x < 256; x++) {
      const u = x / 255, v = (y - 63.5) / 64;
      const along = smooth(0.0, 0.1, u) * Math.pow(1 - smooth(0.04, 0.6, u), 1.4);
      const across = Math.exp(-Math.pow(v / (0.42 + 0.25 * u), 2));
      const k = (y * 256 + x) * 4; im.data[k] = im.data[k + 1] = im.data[k + 2] = 255 * along * across; im.data[k + 3] = 255;
    }
    g.putImageData(im, 0, 0);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.NoColorSpace; return t;
  })();
  const SH_A = 1.24, SH_L = 4.2;                       // key front-left-high → the shadow falls back-right
  const shDir = [Math.cos(SH_A), -Math.sin(SH_A)];     // world (x, z)
  // contact occlusion: 1.04× the base radius, its outer 40% feathered (no dark coaster beyond the glass)
  decal(radialTex([[0, 1], [0.6, 0.8], [0.8, 0.3], [1, 0]]), shadowCol, 0.5, 1.6 * 2.08, 1.6 * 2.08, BOTTLE_X + 0.04, BOTTLE_Z + 0.02);
  // and one thin dark crease right under the heel (the glass foot rests on a ring of radius ≈ 1.45)
  decal(radialTex([[0, 0], [0.86, 0], [0.93, 1], [0.97, 0.35], [1, 0]], 512), shadowCol, 0.7, 1.52 * 2, 1.52 * 2, BOTTLE_X, BOTTLE_Z);
  decal(castTex, shadowCol, 0.42, SH_L, 2.5, BOTTLE_X + shDir[0] * SH_L / 2, BOTTLE_Z + shDir[1] * SH_L / 2, SH_A); // cast shadow
  const caustic = decal(radialTex([[0, 1], [0.25, 0.55], [0.6, 0.12], [1, 0]]), '#d9902f', 0.3, 2.0, 1.0, BOTTLE_X + 1.05, BOTTLE_Z - 1.25, SH_A, true); // amber light through the glass
  const dropShadow = decal(featherDisk, shadowCol, 0.1, 5.2, 2.0, -2.5, 0.2, -0.62);               // dropper (floating, very soft)

  // ---------- oil pool + ripple
  dropperPivot.updateMatrixWorld(true);
  const tipW = dropper.localToWorld(tipLocal.clone());
  const POOL_H = 0.008, POOL_R = 1.1;
  const poolU = { uBox: { value: new THREE.Vector4(0, 0.6, 1, 1.5) }, uBoxZ: { value: -5 }, uTipR: { value: new THREE.Vector4(0, 0, 0.05, 0) }, uTipE: { value: new THREE.Vector2(3, 0.3) }, uAge: { value: 99 }, uImpact: { value: new THREE.Vector2(0, 0) }, uAmp: { value: 0.012 }, uDome: { value: new THREE.Vector2(0.1, 0.1) }, uSheen: { value: C('#405046') }, uRefl: { value: new THREE.Vector4(9, 9, 0.1, 0.1) }, uReflK: { value: 0 } };
  oilPool.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, poolU);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>
        attribute float aT;
        varying float vPoolT; varying vec2 vPoolXZ; varying float vRipple; varying vec3 vPoolW;
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
        { vec2 xz = position.xz - uImpact; float r = length(xz); transformed.y += wave(r) * (1.0 - smoothstep(0.6, 0.95, aT)); }
        vPoolW = (modelMatrix * vec4(transformed, 1.0)).xyz;`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        varying float vPoolT; varying vec2 vPoolXZ; varying float vRipple; varying vec3 vPoolW; float vRipF = 0.0;
        uniform vec3 uSheen; uniform vec4 uRefl; uniform float uReflK; uniform vec4 uBox; uniform float uBoxZ; uniform vec4 uTipR; uniform vec2 uTipE;
        ${WAVE_GLSL}
        ${SHEEN_GLSL}`)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
        {
          // ripple normal per fragment (crisp rings, independent of the mesh density)
          vec2 xz = vPoolXZ - uImpact; float r = max(length(xz), 1e-4);
          float e = 0.006; float r0 = max(r - e, 0.0);
          float dd = (dome(r + e) - dome(r0)) / (2.0 * e);
          float dw = (wave(r + e) - wave(r0)) / (2.0 * e) - dd;     // ripple rings only
          // the dome is a broad swell: a gentle normal (no mirror-bright softbox in it), the rings a crisp one
          float ds = dw * 1.6 + dd * 0.35;
          vec3 dn = vec3(-ds * xz.x / r, 0.0, -ds * xz.y / r);
          // a film, not a lens: the shading normal stays close to the floor normal right out to the rim, so the
          // edge does not pick up a bright fresnel outline (the meniscus line is drawn explicitly below)
          vec3 upV = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
          normal = normalize(upV + (viewMatrix * vec4(dn, 0.0)).xyz);
          vRipF = clamp(-dw * 3.0, 0.0, 1.0);          // only the crest's lit flank → one fine line per ring
        }`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        {
          float thick = 1.0 - 0.6 * smoothstep(0.4, 1.0, vPoolT);
          float rn = vPoolXZ.y / ${POOL_R.toFixed(2)};
          // key light scattered back up through the film: a whisper – the film tints the floor, it does not glow
          float back = smoothstep(0.5, -0.7, rn);
          totalEmissiveRadiance *= (0.002 + 0.01 * thick * (0.55 + 0.45 * back)) + 0.1 * vRipF * thick;
          float far = smoothstep(0.05, -0.45, rn);
          // the backlit amber bottle mirrored in the film: a soft vertical streak well inside the film (never on the rim)
          float xs = (vPoolXZ.x - 0.25 * ${POOL_R.toFixed(2)}) / (0.1 * ${POOL_R.toFixed(2)});
          float filmIn = 1.0 - smoothstep(0.35, 0.6, vPoolT);
          totalEmissiveRadiance += vec3(0.75, 0.42, 0.12) * 0.3 * exp(-xs * xs) * (0.35 + 0.65 * far) * filmIn;
          // a flat mirror: the low back softbox seen by reflection. The reflected view ray meets the panel's plane; the
          // panel's top edge cuts the film along a straight line (a soft rectangle in the far third) that has nothing to
          // do with the film's outline – a dome would bend it into an arc, a film keeps it straight
          {
            vec3 Vw = normalize(cameraPosition - vPoolW);
            vec3 Rw = vec3(-Vw.x, Vw.y, -Vw.z);
            float sh = (uBoxZ - vPoolW.z) / min(Rw.z, -1e-3);
            vec2 hit = vec2(vPoolW.x + Rw.x * sh - uBox.x, Rw.y * sh);
            float bx = 1.0 - smoothstep(uBox.y - 0.16, uBox.y + 0.16, abs(hit.x));
            float fy = (uBox.w - uBox.z) * 0.22;
            float by = smoothstep(uBox.z - fy, uBox.z + fy, hit.y) * (1.0 - smoothstep(uBox.w - fy, uBox.w + fy, hit.y));
            float box = bx * by * (1.0 - smoothstep(0.6, 0.85, vPoolT));
            totalEmissiveRadiance += vec3(0.95, 0.68, 0.34) * 0.15 * box * (1.0 + 0.8 * vRipF);
          }
          // the coalescence dome and the ripple crests catch the same softbox, warm
          vec2 xzI = vPoolXZ - uImpact; float rI = length(xzI);
          float dm = dome(rI) / max(uDome.x, 1e-4);
          totalEmissiveRadiance += vec3(0.95, 0.82, 0.6) * (0.12 * vRipF * thick + 0.38 * smoothstep(0.35, 0.95, dm));
          // the nozzle and its forming bead, mirrored upside down in the far half: the bead (an ellipse, foreshortened
          // by the low view) and a 2 px amber stub running toward the viewer from it
          if (uTipR.w > 0.0) {
            // the pendant bead and the nozzle, mirrored upside down and softened by the film's micro-ripple: an amber
            // ellipse (a circle on screen – the low view stretches it along z), its caustic crescent now on the far side,
            // and the nozzle as a fine amber stub running toward the viewer from it
            vec2 q = vPoolXZ - uTipR.xy;
            float rb = max(uTipR.z, 1e-3), rz = rb * uTipE.x;
            float e = length(vec2(q.x / rb, q.y / rz));
            float bead = 1.0 - smoothstep(0.55, 1.0, e);
            float cres = smoothstep(0.15, 0.8, -q.y / rz) * smoothstep(0.35, 0.75, e) * bead;
            float stub = exp(-(q.x * q.x) / (0.011 * 0.011)) * smoothstep(rz * 0.75, rz * 1.0, q.y) * (1.0 - smoothstep(uTipE.y * 0.6, uTipE.y, q.y));
            totalEmissiveRadiance += (vec3(0.3, 0.15, 0.03) * bead * 0.5 + vec3(0.62, 0.42, 0.16) * cres * 0.45 + vec3(0.3, 0.16, 0.04) * stub * 0.32) * uTipR.w * filmIn;
          }
          // the meniscus: one fine warm line on the far rim only (the near rim is seen from above, edge-free)
          {
            float fwT = max(fwidth(vPoolT), 1e-4);
            float lineT = smoothstep(1.0 - 3.0 * fwT, 1.0 - 2.0 * fwT, vPoolT) * (1.0 - smoothstep(1.0 - 1.6 * fwT, 1.0 - 0.8 * fwT, vPoolT));
            totalEmissiveRadiance += vec3(0.2, 0.13, 0.045) * lineT * smoothstep(-0.05, -0.55, rn);
          }
        }`)
      .replace('#include <dithering_fragment>', `#include <dithering_fragment>
        {
          // a thin film mirrors the room: toward the far (grazing) side a growing share of the night-green stage
          // replaces the film's own light (the absorption layer drops the same share), so the film reads as liquid
          float sw = sheenW(vPoolXZ.y / ${POOL_R.toFixed(2)});
          gl_FragColor.rgb = gl_FragColor.rgb * (1.0 - sw) + uSheen * sw;
          // the falling drop mirrored in the film: it rises to meet the drop as the drop comes down (reads the height
          // at a glance – a drop in the air over the film never looks as if it is standing on it)
          if (uReflK > 0.0) {
            vec2 q = (vPoolXZ - uRefl.xy) / uRefl.zw; float d = length(q);
            float disc = 1.0 - smoothstep(0.8, 1.0, d);
            float ring = smoothstep(0.55, 0.9, d) * disc;
            float cres = smoothstep(0.3, 0.85, -q.y) * smoothstep(0.25, 0.6, d) * disc;
            // the film thins to nothing at the rim, and so does the mirror: the image dissolves softly toward the edge
            float thinR = 1.0 - smoothstep(0.62, 0.95, vPoolT);
            gl_FragColor.rgb += (vec3(0.07, 0.028, 0.005) * ring + vec3(0.55, 0.34, 0.1) * cres * 0.5 + vec3(0.025, 0.014, 0.004) * disc) * uReflK * thinR;
          }
          // fades with (not after) the absorption layer → no light halo or lighter lip at the edge
          float fw = max(fwidth(vPoolT), 1e-4);
          gl_FragColor.rgb *= 1.0 - smoothstep(1.0 - 1.4 * fw, 1.0, vPoolT);
        }`);
  };
  poolTintMat.onBeforeCompile = (sh) => { Object.assign(sh.uniforms, poolU); };
  const poolGeo = poolGeometry(POOL_R, POOL_H);
  const poolTint = new THREE.Mesh(poolGeo, poolTintMat);
  poolTint.renderOrder = 1;
  const pool = new THREE.Mesh(poolGeo, oilPool);
  pool.renderOrder = 2;
  pool.position.set(tipW.x + 0.1, 0.003, tipW.z + 0.4);   // the drops land in the far half of the spill
  poolTint.position.copy(pool.position);
  scene.add(poolTint, pool);
  const poolDecals = [decal(softDisk, shadowCol, 0.04, POOL_R * 2.3, POOL_R * 1.9, pool.position.x, pool.position.z + 0.05)];   // edge occlusion (whisper)
  const poolCaustic = decal(radialTex([[0, 1], [0.3, 0.5], [0.65, 0.12], [1, 0]]), '#e9a443', 0.12, 1.9, 0.9, pool.position.x + 0.6, pool.position.z - 0.55, -0.42, true); // light focused through the oil
  poolDecals.push(poolCaustic);
  for (const d of poolDecals) d.userData.s0 = [d.scale.x, d.scale.y];
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
  // One continuous surface: the bulb is smooth-max'ed into the wetted nozzle (k grows with the drop), so the radius
  // changes like a catenoid from the orifice into the drop – no stem at any phase; the waist only appears as it pinches.
  function setPendant(rt, r, sag, neckLen, pinch) {
    const yc = -(neckLen + r * 0.9);
    const rvT = r * 0.96, rvB = r * sag;
    const NU = 18;
    const k = Math.max(0.012, 0.62 * r * (1 - 0.55 * pinch));
    const waist = rt * (1 - 0.72 * pinch);
    for (let j = 0; j < NU; j++) {
      const s = j / NU, y = yc * Math.pow(s, 0.8);                     // tip → bulb centre
      const u = -y / Math.max(-yc, 1e-3);
      const bulb = Math.abs(y - yc) < rvT ? r * Math.sqrt(1 - Math.pow((y - yc) / rvT, 2)) : 0;
      // the wetted film: full orifice radius at the tip, easing to the waist (a hyperbolic, catenoid-like neck)
      const w = smooth(0, 0.75, u);
      const neckR = rt + (waist - rt) * w;
      // the blend tightens to a plain max right at the orifice, so the film meets the nozzle flush (no collar)
      prof[j][0] = Math.max(0.0005, smax(neckR, bulb, Math.max(0.004, k * smooth(0, 0.45, u)))); prof[j][1] = y;
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
    oilDrop.uniforms.uLen.value = rvB - yc;                               // nozzle → bottom of the bulb (shader: vU)
    return yc - rvB;                                                      // lowest point (local)
  }
  const drop = new THREE.Mesh(new THREE.SphereGeometry(1, 48, 32), oilDropFall);
  drop.renderOrder = 3;
  scene.add(drop);

  // ---------- bubbles (instanced soft glass/oil spheres)
  let mobileNow = false, dropK = 1, poolK = 1;
  const isMobile = () => mobileNow;
  const NB = 2;                                       // two, with a hierarchy: one warm oil sphere, one clear glass sphere
  const tints = [C('#c98a3a'), C('#e8d6c3'), C('#b6c9c2')];
  const bubbleGeo = new THREE.SphereGeometry(1, 48, 32);
  const iColor = new Float32Array(NB * 3), iSoft = new Float32Array(NB), iAlpha = new Float32Array(NB), iHi = new Float32Array(NB * 3), iOil = new Float32Array(NB);
  bubbleGeo.setAttribute('iColor', new THREE.InstancedBufferAttribute(iColor, 3));
  bubbleGeo.setAttribute('iSoft', new THREE.InstancedBufferAttribute(iSoft, 1));
  bubbleGeo.setAttribute('iAlpha', new THREE.InstancedBufferAttribute(iAlpha, 1));
  bubbleGeo.setAttribute('iHi', new THREE.InstancedBufferAttribute(iHi, 3));
  bubbleGeo.setAttribute('iOil', new THREE.InstancedBufferAttribute(iOil, 1));
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
  // hand-placed starting composition (x, y, z, r, tint, soft, oil) → then physics takes over. Sizes are fixed per
  // sphere (≈ 26 px for the oil sphere, 8–12 px for the beads at 1440) so the hierarchy survives every respawn.
  const START = [
    [4.3, 9.6, -0.6, 0.25, 0, 0.04, 1], [6.2, 4.6, -1.0, 0.16, 1, 0.04, 0],
  ];
  // phones: the oil sphere starts in the open air left of the cap (the stage is narrower; the right is the disc's)
  if (matchMedia('(max-width: 760px), (max-width: 1100px) and (max-aspect-ratio: 1/1)').matches) { START[0] = [-3.5, 8.0, 0.4, 0.25, 0, 0.04, 1]; START[1] = [4.6, 2.6, 0.6, 0.12, 1, 0.03, 0]; }
  const setHi = (i) => { iHi[i * 3] = (rnd() - 0.5) * 0.26; iHi[i * 3 + 1] = (rnd() - 0.5) * 0.2; iHi[i * 3 + 2] = rnd(); };
  for (let i = 0; i < NB; i++) {
    const [x, y, z, r, t, s, o] = START[i];
    B.push({ p: new THREE.Vector3(x, y, z), v: new THREE.Vector3(), r, r0: r, tint: t, soft: s, phase: rnd() * 100, born: -10, a: 0 });
    tints[t].toArray(iColor, i * 3); iSoft[i] = s; iAlpha[i] = 0; iOil[i] = o; setHi(i);
  }
  const BOUNDS = { x0: -7.0, x1: 7.5, y0: -1.0, y1: 13.2, z0: -6, z1: 2.5 };
  function respawn(b, t) {
    const i = B.indexOf(b);
    b.p.set(BOUNDS.x0 + rnd() * (BOUNDS.x1 - BOUNDS.x0), -0.4 + rnd() * 3.2, BOUNDS.z0 + rnd() * (BOUNDS.z1 - BOUNDS.z0));
    b.v.set(0, 0, 0); b.born = t; b.a = 0;
    b.soft = clamp((b.p.z > 1.6 ? 0.3 : 0) + (b.p.z < -4 ? 0.25 : 0) + rnd() * 0.08, 0, 0.6) * (iOil[i] ? 0.3 : 1);
    iSoft[i] = b.soft; setHi(i);
    bubbleGeo.attributes.iSoft.needsUpdate = true; bubbleGeo.attributes.iHi.needsUpdate = true;
  }
  // DOM overlays the spheres must never pass behind (screen px, set from hero.js): the −25% disc, the price tag, the copy
  const OV = { discR: 0, tagW: 0, tagH: 0, copyTop: 1e9, pin: null, blocks: [], spot: null, trustTop: 0 };
  const ovDisc = [0, 0], ovTag = [0, 0, 0, 0, 0], tagRect = [0, 0, 0, 0];   // ovTag: x, y (+ mobile: lead drop, card left, lead run)

  // ---------- pointer (ray in world space, damped)
  const pointer = { ndc: new THREE.Vector2(0.3, 0), target: new THREE.Vector2(0.3, 0), active: false, vel: new THREE.Vector2() };
  const ray = new THREE.Raycaster();
  const tmp = new THREE.Vector3(), tmp2 = new THREE.Vector3(), tmp3 = new THREE.Vector3();
  const camBase = { az: 0, el: 0 };

  // ---------- layout / camera framing
  const SUBJECT = { cx: -0.75, cy: 5.2, h: 11.0 };
  const DBG_FRAME = (new URLSearchParams(location.search).get('heroframe') || '').split(',').map(Number).filter((v) => v > 0);
  if (DBG_FRAME.length !== 3) DBG_FRAME.length = 0;
  let exclNdc = -2, ppuNdc = 0.01;
  const stackMQ = matchMedia('(max-width: 760px), (max-width: 1100px) and (max-aspect-ratio: 1/1)');
  let W = 1, H = 1, frame = { fx: 0.66, fy: 0.5, hs: 0.8, D: 30 };
  const target = new THREE.Vector3();
  function layout() {
    W = Math.max(1, host.clientWidth); H = Math.max(1, host.clientHeight);
    const mobile = stackMQ.matches; mobileNow = mobile;   // phones + portrait tablets: scene above, copy below
    // phones: the framed box includes the raised dropper bulb, so it never rises into the headline above the spot
    if (mobile) { SUBJECT.cy = 5.55; SUBJECT.h = 11.7; } else { SUBJECT.cy = 5.4; SUBJECT.h = 11.4; }
    // phones: the drop and the pool are the signature motion – a touch larger so they still read at 390 px
    dropK = mobile ? 1.3 : 1; poolK = mobile ? 1.2 : 1;
    poolU.uDome.value.set(0.32 * 0.19 * dropK, 0.85 * 0.19 * dropK / poolK);   // the drop's volume, handed to the film
    pool.scale.set(poolK, 1, poolK); poolTint.scale.copy(pool.scale);
    for (const d of poolDecals) d.scale.set(d.userData.s0[0] * poolK, d.userData.s0[1] * poolK, 1);
    renderer.setPixelRatio(pr);
    renderer.setSize(W, H, false);
    composer.setPixelRatio(pr);
    composer.setSize(W, H);
    camera.aspect = W / H;
    // how big the subject should be on screen, and where
    if (mobile) {
      // phones: the product lives in the spot between the headline and the offer; the price pill hangs under it
      const sp = OV.spot || [150, Math.min(318, W * 0.78)];
      const tagRoom = W > 760 ? 104 : 84;
      // a touch tighter than the spot (the bulb may rise ~10 px into the air above it): the drop corridor reads
      const hs = Math.min(sp[1] - tagRoom, W * 0.84) * 1.04;
      // a touch right of centre: the dropper bulb keeps clear of the headline's last letters, and the pipette + pool
      // on the left balance the bottle in the middle of the screen
      frame = { fx: W > 760 ? 0.5 : 0.53, fy: (sp[0] + sp[1] - tagRoom - hs / 2) / H, hs, D: 0 };
    } else {
      // desktop: the floor line (pool, contact shadow) clears the trust band at the foot of the stage
      const wide = W / H;
      const bottom = (OV.trustTop > 0 ? OV.trustTop : H) - 34;
      const hs = Math.min(H * 0.8, bottom - H * 0.05, W * 0.44 * (11.0 / 7.6));
      frame = { fx: wide > 1.9 ? 0.62 : 0.6, fy: (bottom - hs * 0.5) / H, hs, D: 0 };
    }
    if (DBG_FRAME.length) { const [fx, fy, hs] = DBG_FRAME; frame = { fx, fy, hs, D: 0 }; }   // still-plate renders only
    exclNdc = (mobile ? -2 : (Math.min(W * 0.5, 140 + 640) / W) * 2 - 1);
    ppuNdc = 2 * (frame.hs / SUBJECT.h) / W;
    const tanH = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    frame.D = (H * SUBJECT.h) / (frame.hs * 2 * tanH);
    // side-by-side layouts: the pipette tip, its drop and the spill keep ≥ 28 px from every text block (narrow
    // landscape tablets would otherwise put the nozzle against the CTA row) – shift the stage right until they do
    if (!mobile && !DBG_FRAME.length && OV.blocks.length) {
      const pts = [[tipW.x - 0.25, tipW.y + 0.3, tipW.z], [tipW.x - 0.25, tipW.y - 0.6, tipW.z], [tipW.x - 0.2, 1.2, tipW.z],
        [pool.position.x - POOL_R * 1.25, 0, pool.position.z], [pool.position.x - POOL_R * 0.9, 0, pool.position.z + POOL_R * 0.7]];
      for (let it = 0; it < 4; it++) {
        placeCamera(0);
        let need = 0;
        for (const p of pts) {
          const q = toPx(tmp.set(p[0], p[1], p[2]));
          for (const r of OV.blocks) if (q[1] > r[1] - 28 && q[1] < r[3] + 28) need = Math.max(need, r[2] + 28 - q[0]);
        }
        if (need <= 0.5) break;
        frame.fx = Math.min(0.75, frame.fx + need / W);
      }
    }
    bgU.uRes.value.set(W * pr, H * pr); bgU.uDpr.value = pr;
    finalPass.uniforms.uRes.value.set(W * pr, H * pr);
    finalPass.uniforms.uVigCenter.value.set(mobile ? 0.5 : 0.6, mobile ? 0.62 : 0.5);
    finalPass.uniforms.uVig.value = mobile ? 0.26 : 0.34;
    layoutGen++;
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
  const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.42, 0.62, 0.92);
  composer.addPass(bloom);
  const finalPass = new ShaderPass(FINAL_SHADER);
  composer.addPass(finalPass);

  // ---------- simulation
  const DROP = { period: 5.6, grow: 2.9, hang: 0.35, fallG: 5.2, drag: 1.6 };
  const st = { t: 0, phase: 0.6, dropY: 0, dropV: 0, falling: false, landed: false, impactT: -99, cyc: 0, intro: 1 };
  let dirty = true, running = false, raf = 0, last = 0, firstFrameDone = false, layoutGen = 0;
  const dropPos = new THREE.Vector3();
  const qp = new URLSearchParams(location.search);
  const DBG_PH = qp.has('herophase') ? +qp.get('herophase') : null, DBG_AGE = qp.has('heroage') ? +qp.get('heroage') : null;
  const tagLocal = new THREE.Vector3(Math.sin(0.95) * 1.62, 2.7, Math.cos(0.95) * 1.62); // label, front-right
  const tagLocalM = new THREE.Vector3(Math.sin(0.35) * 1.625, 0.48 + 0.27 * 4.75, Math.cos(0.35) * 1.625); // mobile: the label's lower-right sage field
  const anchors = {
    bubble: new THREE.Vector3(BOTTLE_X + 2.35, 8.05, 0.2),
    tag: new THREE.Vector3(),                       // on the label surface (set from the bottle each frame)
    glow: new THREE.Vector3(BOTTLE_X - 0.6, 4.6, -1.5),
    spot: new THREE.Vector3(BOTTLE_X, 5.6, -1.5),
    pool: new THREE.Vector3(BOTTLE_X - 1.6, 0, 0.4),
    tA: new THREE.Vector3(BOTTLE_X + 10.5, 8.4, -4), tB: new THREE.Vector3(BOTTLE_X - 4.2, 2.0, -4),   // behind the bottle, out lower-left, dissolving before the pipette
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
    if (!mobileNow) {
      const d = toPx(anchors.bubble), m = OV.discR + 14; ovDisc[0] = clamp(d[0], m, W - m); ovDisc[1] = d[1];
      const tg = toPx(anchors.tag); ovTag[0] = tg[0]; ovTag[1] = tg[1]; ovTag[2] = 0; ovTag[3] = 0; ovTag[4] = 0;
      if (OV.pin) { tagRect[0] = OV.pin[0]; tagRect[1] = OV.pin[1]; tagRect[2] = OV.pin[2]; tagRect[3] = OV.pin[3]; }   // tablet: pinned by CSS
      else { tagRect[0] = tg[0] - 8; tagRect[2] = tg[0] + OV.tagW; tagRect[1] = tg[1] - OV.tagH / 2; tagRect[3] = tg[1] + OV.tagH / 2; }
    } else {
      // the disc clears the cap and the shoulder; the compact tag hangs under the bottle on a short dotted lead
      const d = toPx(anchors.bubble), m = OV.discR + 16; ovDisc[0] = clamp(d[0] + 24, m, W - m); ovDisc[1] = d[1] - 6;
      const dot = toPx(bottle.localToWorld(tmp2.copy(tagLocalM)));
      const base = toPx(tmp2.set(BOTTLE_X, 0, BOTTLE_Z + 1.62));
      const top = base[1] + 16;
      // the card sits on the container grid: right edge flush with the CTA row and the trust grid (16 px gutter);
      // the dotted lead drops straight from the label dot into the card's left third
      const left = Math.max(16, W - 16 - OV.tagW);
      // the lead leaves the silhouette first (right, 14 px past the glass edge), then drops to the card's top edge:
      // an L, so no line ever crosses the product
      const edge = toPx(tmp2.set(BOTTLE_X + 1.62, bottle.localToWorld(tmp3.copy(tagLocalM)).y, BOTTLE_Z))[0];
      const run = clamp(edge + 14 - dot[0], 10, left + OV.tagW - 60 - dot[0]);
      ovTag[0] = dot[0]; ovTag[1] = dot[1]; ovTag[2] = Math.max(8, top - dot[1]); ovTag[3] = left - dot[0]; ovTag[4] = run;
      tagRect[0] = left; tagRect[2] = left + OV.tagW; tagRect[1] = top; tagRect[3] = top + OV.tagH;
    }

    // the drop: form → detach → slow viscous fall → merge → ripple
    const ph = reduced ? 2.3 : DBG_PH !== null ? DBG_PH : (t + st.phase) % DROP.period;
    const cyc = Math.floor((t + st.phase) / DROP.period);
    // RT = the nozzle's outer radius at the orifice (pipette lathe: RTIP·0.95), so the wetted film starts flush with the glass
    const R1 = 0.19 * dropK, RT = RTIP * 0.95;
    const NECK0 = 0.004, NECKG = 0.015, NECKH = 0.09;
    pendant.position.copy(tip);
    if (ph < DROP.grow + DROP.hang) {
      st.falling = false; st.landed = false; st.dropV = 0;
      poolU.uReflK.value = 0;
      const g = easeInOut(clamp(ph / DROP.grow, 0, 1));
      const hp = ph > DROP.grow ? smooth(DROP.grow, DROP.grow + DROP.hang, ph) : 0;   // hang progress
      const r = RT + (R1 - RT) * g;
      const sag = 1.02 + 0.3 * g + 0.1 * hp;
      const neckLen = NECK0 + NECKG * g + NECKH * hp;
      setPendant(RT, r, sag, neckLen, smooth(0.35, 1, hp));
      st.pendR = r;
      pendant.visible = true; drop.visible = false;
      st.dropY = tip.y - (neckLen + r * 0.9);
    } else {
      const since = ph - (DROP.grow + DROP.hang);
      // what stays behind on the nozzle: a small bead that retracts with a damped ease
      setPendant(RT, RT + 0.012 * Math.exp(-since * 6), 0.9, 0.002, 0);
      st.pendR = RT + 0.012 * Math.exp(-since * 6);
      pendant.visible = true;
      if (!st.falling && !st.landed) {
        st.falling = true; st.cyc = cyc;
        st.x0 = tip.x; st.z0 = tip.z; st.y0 = tip.y - (NECK0 + NECKG + NECKH + R1 * 0.9);
      }
      if (st.falling) {
        // viscous medium: dv/dt = g − c·v (terminal velocity g/c ≈ 3.2 u/s) → reads as slow motion.
        // Closed form in the time since detach, so the fall is identical at any frame rate.
        const gc = DROP.fallG / DROP.drag, ec = Math.exp(-DROP.drag * since);
        st.dropV = gc * (1 - ec);
        st.dropY = st.y0 - gc * (since - (1 - ec) / DROP.drag);
        const stretch = 1 + clamp(st.dropV / 2.4, 0, 1) * 0.06;       // a viscous falling drop is near-spherical
        // detach recoil: the drop leaves the neck elongated and settles round with a critically damped ease (no wobble)
        const settle = 1 + 0.42 * Math.exp(-since * 7);
        drop.scale.set(R1 / Math.sqrt(stretch * settle), R1 * stretch * settle, R1 / Math.sqrt(stretch * settle));
        drop.position.set(st.x0, st.dropY, st.z0);
        drop.visible = true; oilDropFall.uniforms.uFade.value = 1;
        const surface = POOL_H + 0.006;
        {
          // the drop's mirror image in the film (pool-local, unscaled): where the camera ray to the mirrored centre
          // meets the film, an ellipse R1 wide and R1/sin(elevation) deep
          const E = camera.position, cy = Math.max(0, st.dropY - surface) ;
          const ex = (E.x - pool.position.x) / poolK, ez = (E.z - pool.position.z) / poolK, ey = E.y - pool.position.y;
          const px = (st.x0 - pool.position.x) / poolK, pz = (st.z0 - pool.position.z) / poolK;
          const tt = ey / (ey + cy), qx = ex + tt * (px - ex), qz = ez + tt * (pz - ez);
          const sinE = ey / Math.hypot(ex - qx, ey, ez - qz);
          const rr = R1 * tt / poolK;
          poolU.uRefl.value.set(qx, qz, rr / Math.sqrt(stretch * settle), rr * stretch * settle / Math.max(sinE, 0.08));
          poolU.uReflK.value = smooth(R1 * 4, R1 * 0.5, cy - R1);
        }
        const overlap = surface - (st.dropY - R1 * stretch);
        if (overlap > 0) {
          // coalescence from the first contact frame: the drop collapses vertically faster than it spreads, its volume
          // handed to a dome in the film (pool shader), and it is never fully opaque once it touches
          const m = clamp(overlap / (R1 * 0.9), 0, 1);
          const sy = R1 * stretch * Math.pow(1 - m, 2), sxz = R1 * (1 + 1.4 * m);
          drop.scale.set(sxz, Math.max(sy, 1e-3), sxz);
          drop.position.y = surface + sy * 0.55;
          oilDropFall.uniforms.uFade.value = 1 - smooth(0.0, 0.55, m);
          poolU.uReflK.value = Math.pow(oilDropFall.uniforms.uFade.value, 2);
          if (st.impactT < 0 || st.impactCyc !== st.cyc) { st.impactT = t; st.impactCyc = st.cyc; poolU.uImpact.value.set((st.x0 - pool.position.x) / poolK, (st.z0 - pool.position.z) / poolK); }
          if (m >= 0.55) { st.falling = false; st.landed = true; drop.visible = false; }
        }
      } else drop.visible = false;
      if (!drop.visible) poolU.uReflK.value = 0;
    }
    poolU.uAge.value = reduced ? 99 : DBG_AGE !== null ? DBG_AGE : t - st.impactT;
    {
      // the film as a flat mirror: the low back softbox (a panel standing 5 units behind the spill) – its top edge is
      // placed so that, from the resting camera, it crosses the film at the far third
      const E = camera.position, zc = pool.position.z, R = POOL_R * poolK;
      if (st.boxK !== layoutGen || st.intro > 0) {
        st.boxK = layoutGen;
        const planeZ = zc - 5, hy = (wz) => (wz - planeZ) * (E.y - pool.position.y) / Math.max(E.z - wz, 1);
        poolU.uBoxZ.value = planeZ;
        poolU.uBox.value.set(pool.position.x - 0.12 * R, 0.4 * R, hy(zc - 0.74 * R), hy(zc - 0.36 * R));
      }
      // the nozzle + its bead mirrored in the far half (pool-local, unscaled units)
      const sinE = (E.y - pool.position.y) / Math.hypot(E.x - pool.position.x, E.y - pool.position.y, E.z - zc);
      const eK = 1 / Math.max(sinE, 0.12);
      const rb = (st.pendR || RT) * 0.72 / poolK;
      poolU.uTipR.value.set((tip.x - pool.position.x) / poolK, -0.62 * POOL_R + rb * eK, rb, reduced ? 0.7 : 0.55 + 0.45 * smooth(RT, R1, st.pendR || RT));
      poolU.uTipE.value.set(eK, rb * eK + 0.36);
    }

    // bubbles: buoyancy + viscous drag + low-frequency wander + cursor push + product avoidance
    // (reduced motion: the spheres hold still, but still respect the overlays)
    {
      ray.setFromCamera(pointer.ndc, camera);
      const mobile = isMobile();
      // the thread hairline on screen (a sphere must never sit on it like a bead on a wire)
      const thA = toPx(anchors.tA), thB = toPx(anchors.tB);
      for (let i = 0; i < NB; i++) {
        const b = B[i];
        b.r = b.r0 * (mobile ? 1.45 : 1);              // phones: the camera is further out – keep the spheres legible
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
            const TP = 28;
            const x0 = tagRect[0] - TP, x1 = tagRect[2] + TP, y0 = tagRect[1] - TP, y1 = tagRect[3] + TP;
            const qx = clamp(sx, x0, x1), qy = clamp(sy, y0, y1);
            let dx = sx - qx, dy = sy - qy, d = Math.hypot(dx, dy), gap = d - sr;
            if (d < 1e-3) { const up = sy - y0, dn = y1 - sy; dx = 0; dy = up < dn ? -1 : 1; d = 1; gap = -Math.min(up, dn) - sr; }
            if (gap < PAD) pushPx(dx / d, dy / d, PAD - gap);
            vis = Math.min(vis, smooth(2, PAD, gap));
          }
          // every text block (headline, offer, CTAs, facts, trust band): flow around it, gone before any overlap
          for (const r of OV.blocks) {
            const BP = 18;
            const qx = clamp(sx, r[0] - BP, r[2] + BP), qy = clamp(sy, r[1] - BP, r[3] + BP);
            let dx = sx - qx, dy = sy - qy, d = Math.hypot(dx, dy), gap = d - sr;
            if (d < 1e-3) { const up = sy - r[1] + BP, dn = r[3] + BP - sy; dx = 0; dy = up < dn ? -1 : 1; d = 1; gap = -Math.min(up, dn) - sr; }
            if (gap < PAD) pushPx(dx / d, dy / d, (PAD - gap) * 0.5);
            vis = Math.min(vis, smooth(2, PAD, gap));
          }
          if (!mobile) {                                   // (phones carry no thread)
            const ex = thB[0] - thA[0], ey = thB[1] - thA[1], el2 = ex * ex + ey * ey || 1;
            const h = clamp(((sx - thA[0]) * ex + (sy - thA[1]) * ey) / el2, 0, 1);
            let dx = sx - (thA[0] + ex * h), dy = sy - (thA[1] + ey * h); const d = Math.hypot(dx, dy) || 1e-3;
            if (d < sr + 12) pushPx(dx / d, dy / d, sr + 12 - d);
            vis = Math.min(vis, smooth(sr, sr + 20, d));
          }
          if (!mobile) {
            const gap = sx - sr - (exclNdc * 0.5 + 0.5) * W;
            if (gap < 0) pushPx(1, 0, -gap);
            vis = Math.min(vis, smooth(0, 48, gap));
          } else if (OV.spot) {
            // phones: only inside the product's spot
            vis = Math.min(vis, smooth(0, 24, sy - sr - OV.spot[0] + 6), smooth(0, 24, OV.spot[0] + OV.spot[1] - (sy + sr)));
          }
          // stage edges: the fade window scales with the sphere (never a half-sliced sphere), plus a soft inward push
          const gr = W - sx - sr, gl = sx - sr;
          if (gr < 24) pushPx(-1, 0, 24 - gr);
          if (gl < 24) pushPx(1, 0, 24 - gl);
          vis = Math.min(vis, smooth(0, 80, sy - sr), smooth(sr * 0.5, sr + 48, gr), smooth(sr * 0.5, sr + 48, gl));
          if (sy + sr < 0) b.p.y = BOUNDS.y1 + 1;              // fully out at the top → respawn below
        }
        // spheres behind the product also keep clear of its silhouette (never half-hidden behind the glass or the collar)
        const zb = b.p.z;
        avoid(BOTTLE_X, -0.5, zb, BOTTLE_X, 7.3, zb, 1.85);
        const cb = DROPPER_BASE, s = Math.sin(DROPPER_TILT), c = Math.cos(DROPPER_TILT);
        const zd = b.p.z;
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
    for (let i = 0; i < NB; i++) { const b = B[i], sr = b.r * (0.85 + 0.15 * b.a); m4.makeScale(sr, sr, sr).setPosition(b.p); bubbles.setMatrixAt(i, m4); }
    bubbles.instanceMatrix.needsUpdate = true;

    // screen-space anchors for the backdrop + DOM overlays
    const g = toPx(anchors.glow); bgU.uGlow.value.set(g[0] * pr, (H - g[1]) * pr);
    const unit = toPx(tmp2.set(anchors.glow.x, anchors.glow.y + 1, anchors.glow.z));
    const ppu = Math.abs(unit[1] - g[1]);          // pixels per world unit at the glow depth
    bgU.uGlowR.value = ppu * 6.2 * pr;
    const sp = toPx(anchors.spot); bgU.uSpot.value.set(sp[0] * pr, (H - sp[1]) * pr);
    bgU.uSpotR.value.set(ppu * 1.35 * pr, ppu * 1.0 * pr);
    const pl = toPx(anchors.pool); bgU.uPool.value.set(pl[0] * pr, (H - pl[1]) * pr); bgU.uPoolR.value.set(ppu * 7.5 * pr, ppu * 1.9 * pr);
    // the thread: desktop only – on a phone the stage is too narrow for a full diagonal that clears the disc, the
    // dropper and the type, and a short stub reads as an artifact
    bgU.uThreadAlpha.value = isMobile() ? 0 : 0.32;
    const a = toPx(anchors.tA), b2 = toPx(anchors.tB);
    bgU.uTA.value.set(a[0] * pr, (H - a[1]) * pr); bgU.uTB.value.set(b2[0] * pr, (H - b2[1]) * pr);
    // text blocks the thread must give way to (eyebrow, headline, offer), in GL pixels
    for (let i = 0; i < 6; i++) { const r = OV.blocks[i]; if (r) bgU.uTxt.value[i].set(r[0] * pr, (H - r[3]) * pr, r[2] * pr, (H - r[1]) * pr); }
    bgU.uDisc.value.set(ovDisc[0] * pr, (H - ovDisc[1]) * pr, OV.discR * pr);
    bgU.uTxtPad.value = 40 * pr;
    finalPass.uniforms.uTime.value = t;
    caustic.material.opacity = 0.26 + 0.04 * Math.sin(t * 0.7);
    onFrame && onFrame({ bubble: ovDisc, tag: ovTag, mobile: mobileNow, ppu, W, H });
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
    setOverlays(o) {
      const key = () => JSON.stringify([OV.spot, Math.round(OV.trustTop), OV.blocks.map((r) => Math.round(r[2]) + ':' + Math.round(r[3]))]);
      const k0 = key();
      Object.assign(OV, o);
      if (key() !== k0) { layout(); if (!running) renderOnce(); }
    },
    get dirty() { return dirty; },
    dispose() { this.stop(); renderer.dispose(); },
  };
}
