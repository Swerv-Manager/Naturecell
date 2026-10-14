// NatureCell® Black Week – hero scene (Three.js).
// One art-directed still life of the facial routine on a night-green sweep, staged as one diagonal that descends to the
// hero: CBD Dagcreme and CBD Natcreme (white airless pumps, chrome collars, clear over-caps), CBD Rensegel (100 ml
// amber), and in front Vidunder Olien – open, its dropper lifted out above the neck with one small drop held at the
// nozzle. Every pack's logo, wordmark and product name is unoccluded. Everything is real geometry in one light: the
// same warm key (+ a tight hero light on the oil), environment, contact creases, occlusion and cast shadows on one lit
// floor pool, and the amber glass refracts what stands behind it. Truthful sizes (cm): oil 3.2 × 7.0 (+ dropper),
// airless 3.3 × 15.25, Rensegel 4.6 × 13.5.
// Light: procedural studio environment (warm softbox + rim strips in a night-green room) + warm key; the chrome has
// its own packshot-style environment (white card, black flag, hot strip).
// Post: MSAA HDR target → soft bloom on the amber → custom grade (hue-preserving shoulder, vignette, dither).
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { dpr as capDpr } from '../../core/three-utils.js';
import { drawLabel, labelRoughness, labelGlow } from './label.js';
import { buildRange } from './range.js';

const C = (hex) => new THREE.Color(hex); // sRGB hex → linear working colour
const TAU = Math.PI * 2;
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };

// ---------------------------------------------------------------------------------------------------------
// Layout (world units = 1 cm, floor at y = 0, camera looks down −z)
const BOTTLE_X = 0.95, BOTTLE_Z = 6.0;                   // Vidunder Olien, in front (nearest the camera)
const NECK_Y = 7.02;                                    // the oil bottle's lip
// the routine behind it [x, z, turn]: one diagonal that descends toward the hero – Dagcreme (tall, nearest the
// light), Natcreme (tall, a step further back), Rensegel (medium), then Vidunder Olien (short + the dropper). Each
// pack overlaps its neighbour only on the outer edge of its label, so every logo, wordmark and product name reads.
// (solved in perspective: each front pack covers at most the outer ~6 % of its neighbour – the wordmarks span ±53°
// of the airless labels, so anything more would crop a 'N' or an 'l'; all print is centred, so no turn is needed)
const POS = { day: [-9.07, -6.8, 0.03], night: [-6.16, -9.2, -0.02], gel: [-2.18, -2.6, 0] };
const PIPETTE_LEN = 5.9;
const DROP_R = 0.118;                                   // the held drop (cm): ≈ 2.4× the nozzle's radius

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
  // the room reaches well below the horizon: a vertical mirror (the chrome) seen from 9° above reflects the room
  // ~9° BELOW the horizon, so the strip lights must reach down there and the floor must not cut them off
  const room = new THREE.Mesh(new THREE.BoxGeometry(60, 44, 60), new THREE.MeshBasicMaterial({ color: C('#28403b').multiplyScalar(0.55), side: THREE.BackSide }));
  room.position.y = 8; s.add(room);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), new THREE.MeshBasicMaterial({ color: C('#28403b').multiplyScalar(0.35) }));
  floor.rotation.x = -Math.PI / 2; floor.position.y = -12; s.add(floor);
  const panel = (w, h, pos, col, k) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: C(col).multiplyScalar(k), side: THREE.DoubleSide }));
    m.position.set(...pos); m.lookAt(0, 4, 0); s.add(m); return m;
  };
  panel(11, 8, [-15, 13, 12], '#fff0dc', 7.0);   // key softbox, warm, high front-left
  panel(2.6, 18, [-17, 7, -9], '#fff7ee', 4.2);   // left-back strip → crisp vertical edge on the glass
  panel(2.2, 18, [16, 7, -5], '#eef3ee', 3.0);    // right strip → second rim
  panel(18, 18, [0, 24, 2], '#f6efe4', 0.7);      // ceiling bounce
  panel(14, 5, [6, 3, 18], '#ddbfa3', 0.55);      // sand bounce card, front-right
  // two tall strip lights flanking the camera (classic packshot rig): the long vertical highlights that make chrome
  // read as chrome and give every cylinder its front edge
  panel(2.2, 16, [-9, 8, 24], '#fff3e6', 1.5);
  panel(1.8, 16, [10, 8, 23], '#f2f4f0', 1.0);
  panel(6, 4.5, [-7, 4.4, -22], '#f6e2c4', 1.9);    // low back panels → glossy streaks on the glass rims and shoulders
  panel(2.5, 4.5, [5, 4.4, -22], '#f3ece2', 1.5);
  panel(1.4, 9, [10, 6, -1.5], '#dfe8e4', 4.0);      // cool kicker, camera-right-behind → the right edge of the glass + a grazing sheen on the label
  const pm = new THREE.PMREMGenerator(renderer);
  const env = pm.fromScene(s, 0.03).texture;
  pm.dispose();
  s.traverse(o => { if (o.isMesh) { o.geometry.dispose(); o.material.dispose(); } });
  return env;
}
// A second, chrome-only environment: the metallised pump sleeves are lit like the real packshot – a broad soft white
// card wrapped around the front (the sleeve's silver body), one black flag and one hot strip beside it (the black
// band and the near-white streak that make chrome read as chrome), the night-green room behind (the dark edges).
// Directions only: a vertical mirror seen from ~9° above reflects ~9° below the horizon, so the cards sit there.
function makeChromeEnvironment(renderer) {
  const s = new THREE.Scene();
  s.add(new THREE.Mesh(new THREE.BoxGeometry(60, 60, 60), new THREE.MeshBasicMaterial({ color: C('#28403b').multiplyScalar(0.3), side: THREE.BackSide })));
  const band = (r, a0, a1, y0, y1, col, k) => {
    const g = new THREE.CylinderGeometry(r, r, y1 - y0, 48, 1, true, THREE.MathUtils.degToRad(a0), THREE.MathUtils.degToRad(a1 - a0));
    const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: C(col).multiplyScalar(k), side: THREE.DoubleSide }));
    m.position.y = (y0 + y1) / 2; s.add(m);
  };
  band(20, -125, 125, -13, 6, '#f1eee8', 0.3);    // the wrap-around white card (→ the silver body, ≈ 160–190)
  band(18, -36, -16, -14, 7, '#000000', 1);       // black flag (→ the dark band, left of centre)
  band(18, -15, -9, -14, 7, '#fffaf2', 1.7);      // hot strip right beside it (→ the near-white streak)
  band(18, 30, 36, -14, 7, '#f4f6f4', 0.75);      // a softer return on the right
  band(20, -125, 125, 6, 14, '#f1eee8', 0.09);    // the card's upper edge falls off softly
  const pm = new THREE.PMREMGenerator(renderer);
  const env = pm.fromScene(s, 0.01).texture;
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
  uniform vec3 uNight, uDeep, uWarm, uAmber, uSage;
  uniform vec2 uGlow; uniform float uGlowR;
  uniform vec2 uSpot; uniform vec2 uSpotR; uniform vec3 uSpotCol; uniform vec2 uSpot2; uniform vec2 uSpot2R;
  uniform vec2 uPool; uniform vec2 uPoolR;
  varying vec2 vUv;
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f*f*(3.0-2.0*f);
    return mix(mix(hash(i), hash(i+vec2(1,0)), u.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), u.x), u.y); }
  float fbm(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*noise(p); p *= 2.03; a *= 0.5; } return s; }
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
    vec2 sq2 = (p - uSpot2) / uSpot2R;
    col += uSpotCol * 0.45 * exp(-dot(sq2, sq2) * 1.6);
    // light pooling on the (invisible) floor
    vec2 q = (p - uPool) / uPoolR;
    col += mix(uSage, uWarm, 0.5) * 0.035 * exp(-dot(q,q) * 1.6);
    gl_FragColor = vec4(col, 1.0);
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
  const camera = new THREE.PerspectiveCamera(24, 1, 1, 200);
  const env = makeEnvironment(renderer);
  scene.environment = env;

  // ---------- background (screen-space, opaque → also seen through the glass)
  const bgU = {
    uRes: { value: new THREE.Vector2(1, 1) }, uDpr: { value: pr },
    uNight: { value: C('#28403b') }, uDeep: { value: C('#213631') },
    uWarm: { value: C('#ddbfa3') }, uAmber: { value: C('#c7ae92') }, uSage: { value: C('#9ab4ac') },
    uGlow: { value: new THREE.Vector2() }, uGlowR: { value: 400 },
    uSpot: { value: new THREE.Vector2(-1e4, -1e4) }, uSpotR: { value: new THREE.Vector2(100, 100) }, uSpotCol: { value: C('#f0a650').multiplyScalar(0.55) },
    uSpot2: { value: new THREE.Vector2(-1e4, -1e4) }, uSpot2R: { value: new THREE.Vector2(100, 100) },
    uPool: { value: new THREE.Vector2() }, uPoolR: { value: new THREE.Vector2(300, 60) },
  };
  const bg = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({ uniforms: bgU, vertexShader: BG_VERT, fragmentShader: BG_FRAG, depthWrite: false, depthTest: false }));
  bg.frustumCulled = false; bg.renderOrder = -100;
  scene.add(bg);

  // ---------- lights (env does most of the work; key gives the label its gradient)
  // the key is a soft spot aimed at Vidunder Olien from front-left-high (same direction as before): the hero gets the
  // full light, the routine behind it ≈ 80–90 % – the way a still life is lit, not a shelf
  // (wide soft cone: the oil sits in its full hot spot, the routine behind it in the penumbra at ≈ 75–95 %)
  const key = new THREE.SpotLight(C('#fff1e0'), 2.5, 0, 0.8, 0.8, 0);
  key.position.set(BOTTLE_X - 7 * 3, 4 + 9 * 3, BOTTLE_Z + 8 * 3);
  key.target.position.set(BOTTLE_X - 0.6, 4, BOTTLE_Z - 1.2);
  scene.add(key, key.target);
  // the hero light: a tight soft spot from the key's direction that lands on Vidunder Olien alone (the oldest
  // still-life device – the subject stands in its own pool of light, the routine around it a step quieter)
  const heroLight = new THREE.SpotLight(C('#fff0dc'), 1.15, 0, 0.14, 0.85, 0);
  heroLight.position.set(BOTTLE_X - 14, 26, BOTTLE_Z + 18);
  heroLight.target.position.set(BOTTLE_X, 4.2, BOTTLE_Z);
  scene.add(heroLight, heroLight.target);
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
  // the drop held at the nozzle: a still liquid lens, premultiplied. Most of what you see is the stage itself, seen
  // upside down through the ball lens and the oil's amber transmission: the dark room in a band across the top, the
  // warm floor glow as a gold equator, a soft caustic crescent at the bottom where the back light is focused, and one
  // small soft key highlight upper-left (cream, never pure white). The silhouette feathers into the stage tint.
  // vU = 0 at the nozzle → 1 at the bottom of the drop (the wetted neck carries no highlight of its own).
  const oilDrop = new THREE.ShaderMaterial({
    uniforms: { uFade: { value: 1 }, uLen: { value: 0 }, uBgTop: { value: C('#24392f') }, uBgBot: { value: C('#a07a38') } },
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
        float r = clamp(length(nv.xy), 0.0, 1.0);
        float bulb = smoothstep(0.2, 0.6, vU);
        // the room inverted: dark green across the top fifth, gold through the equator (the lit floor, upside down)
        vec3 inv = mix(uBgBot, uBgTop, smoothstep(0.38, 0.72, nv.y));
        vec3 amberT = vec3(1.0, 0.72, 0.34);
        float a = 0.6;
        vec3 col = inv * amberT * 1.45 * a;
        // the longer path through the oil toward the rim: a soft deepening, never a drawn outline
        float band = smoothstep(0.62, 0.9, r) * (1.0 - smoothstep(0.92, 1.0, r));
        col = mix(col, lin(vec3(0.45, 0.27, 0.1)), band * 0.5); a = mix(a, 0.78, band * 0.5);
        // caustic crescent: the back light focused into the bottom of the drop
        float cr = smoothstep(0.4, 0.8, -nv.y) * smoothstep(0.98, 0.76, r) * smoothstep(0.2, 0.55, r);
        col += lin(vec3(0.93, 0.74, 0.44)) * cr * 0.62 * bulb; a = max(a, cr * 0.6 * bulb);
        col = min(col, vec3(0.5));
        float sil = smoothstep(0.86, 0.98, 1.0 - ndv);
        col = mix(col, uBgTop * 0.7, sil); a = mix(a, 0.8, sil);
        // one soft key highlight, upper-left: a small 2:1 ellipse in the cream token, never pure white
        vec2 sq = (nv.xy - vec2(-0.38, 0.4)) / vec2(0.2, 0.11);
        float sk = exp(-dot(sq, sq) * 1.6) * bulb;
        col = mix(col, lin(vec3(0.965, 0.955, 0.93)) * 0.95, sk * 0.85); a = max(a, sk * 0.85);
        gl_FragColor = vec4(col * uFade, clamp(a, 0.0, 1.0) * uFade);
      }`,
  });
  // the routine's materials (shared): white PP plastic, the chrome pump sleeve, the clear over-cap
  // white PP: diffuse-dominated (a satin moulded white, never a grey mirror), so it falls off monotonically from the key;
  // a hair cool, pre-compensated for the warm key, so it renders as the packshot's neutral white (≈ 222,218,210)
  const whitePP = new THREE.MeshPhysicalMaterial({ color: C('#e8eef5'), roughness: 0.5, metalness: 0, clearcoat: 0.1, clearcoatRoughness: 0.4, envMapIntensity: 0.55 });
  // mirror chrome: near-perfect reflector; the flanking strip lights draw its bright vertical streaks, the dark room
  // the black bands between them (the high-contrast read of the real metallised sleeve)
  const chrome = new THREE.MeshStandardMaterial({ color: C('#eef0ef'), roughness: 0.06, metalness: 1, envMapIntensity: 1.8, envMap: makeChromeEnvironment(renderer) });
  // the clear over-cap: thin clear PET. No screen-space transmission (it would blur the actuator and the chrome behind
  // it); instead two shells – an additive one that carries only the reflections (diffuse black: the env + the key's
  // speculars, rising with fresnel toward the silhouette) and a multiplicative tint that greys the plastic where it is
  // seen edge-on – so everything behind it stays pin-sharp, as through the real cap
  const clearCap = new THREE.MeshPhysicalMaterial({ color: 0x000000, metalness: 0, roughness: 0.04, specularIntensity: 1, envMapIntensity: 1.5, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
  const capTint = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.CustomBlending, blendEquation: THREE.AddEquation, blendSrc: THREE.ZeroFactor, blendDst: THREE.SrcColorFactor,
    vertexShader: `varying vec3 vN; varying vec3 vV; void main(){ vec4 wp = modelMatrix * vec4(position, 1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - wp.xyz); gl_Position = projectionMatrix * viewMatrix * wp; }`,
    fragmentShader: `precision highp float; varying vec3 vN; varying vec3 vV; void main(){ float ndv = clamp(abs(dot(normalize(vN), normalize(vV))), 0.0, 1.0);
      vec3 c = mix(vec3(0.97), vec3(0.62, 0.66, 0.65), pow(1.0 - ndv, 3.0)); gl_FragColor = vec4(c, 1.0); }`,
  });
  const labelEdge = new THREE.MeshStandardMaterial({ color: C('#9dbab0'), roughness: 0.8 });
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
  // warm light pool under the whole group, centred forward so the hero's footprint sits inside it (as bright as the
  // back row's floor): one shared lit floor, not a lit back row and a hero standing in the dark
  decal(featherDisk, '#ddbfa3', 0.075, 26, 12, (BOTTLE_X + POS.day[0]) / 2, 1.5, 0, true);
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
  const SH_A = 1.24;                                   // key front-left-high → the shadow falls back-right
  const shDir = [Math.cos(SH_A), -Math.sin(SH_A)];     // world (x, z)

  // ---------- the routine (Dagcreme, Rensegel, Natcreme)
  const range = buildRange({
    asset, renderer, mats: { white: whitePP, chrome, clear: clearCap, capTint, amber: amberGlass, black: blackPP, labelEdge },
    onReady: () => { dirty = true; if (reduced && firstFrameDone) renderOnce(); },
  });
  for (const k of ['day', 'gel', 'night']) {
    const it = range[k], [x, z, turn] = POS[k];
    it.x = x; it.z = z; it.turn = turn;
    it.obj.position.set(x, 0, z);
    scene.add(it.obj);
  }
  // each pack turns its printed front to the camera (+ a small art-directed turn); set once per layout
  const faceCamera = () => {
    for (const k of ['day', 'gel', 'night']) {
      const it = range[k];
      it.obj.rotation.y = Math.atan2(camera.position.x - it.x, camera.position.z - it.z) + it.turn;
    }
  };

  // ---------- shadows: one key (front-left, high) → every pack gets the same contact occlusion, crease and cast
  // contact occlusion: a broad soft disc (≈ 1.45 R) pushed toward the camera so it shows in front of the base, plus
  // a tight crease ring at the base's own radius – every pack sits ON the floor, in the same light
  // (gradient in units of the disc's radius 1.45 R: the base edge sits at 0.69 – dark right at the edge, then a quick
  // exponential recovery, so the packs sit on the floor without standing on dark coasters)
  const contactTex = radialTex([[0, 1], [0.6, 0.92], [0.69, 0.7], [0.75, 0.36], [0.82, 0.15], [0.91, 0.04], [1, 0]]);
  const creaseTex = radialTex([[0, 1], [0.8, 1], [0.9, 0.85], [0.95, 0.3], [1, 0]], 512);
  const groundShadows = (x, z, R, H, amber) => {
    decal(contactTex, shadowCol, 0.55, R * 2.9, R * 2.9, x + 0.06 * R, z + 0.3 * R);
    decal(creaseTex, shadowCol, 0.7, R * 2.16, R * 2.16, x + 0.02, z + 0.06 * R);
    const L = Math.max(4.2, H * 0.58), w = 2.5 * R / 1.6;
    decal(castTex, shadowCol, 0.42, L, w, x + shDir[0] * L / 2, z + shDir[1] * L / 2, SH_A);
    if (amber) return decal(radialTex([[0, 1], [0.25, 0.55], [0.6, 0.12], [1, 0]]), '#d9902f', 0.3, 2.0 * R / 1.6, 1.0 * R / 1.6, x + 1.05 * R / 1.6, z - 1.25 * R / 1.6, SH_A, true);
    return null;
  };
  const caustic = groundShadows(BOTTLE_X, BOTTLE_Z, 1.6, NECK_Y, true);
  groundShadows(POS.gel[0], POS.gel[1], 2.27, 9.3, false);
  groundShadows(POS.day[0], POS.day[1], 1.643, 15.26, false);
  groundShadows(POS.night[0], POS.night[1], 1.643, 15.26, false);
  const dropShadow = decal(featherDisk, shadowCol, 0.08, 4.4, 1.6, BOTTLE_X + 2.2, BOTTLE_Z - 0.6, -0.62);   // the lifted dropper (very soft)

  // ---------- the held drop: one still pendant at the nozzle (a single lathe surface: wetted neck → drop)
  const PEND_SEGS = 40, PEND_PTS = 34;
  const pendGeo = new THREE.LatheGeometry(Array.from({ length: PEND_PTS }, (_, j) => new THREE.Vector2(0.01, -j * 0.01)), PEND_SEGS);
  const pendant = new THREE.Mesh(pendGeo, oilDrop);
  pendant.renderOrder = 3;
  pendant.frustumCulled = false;
  scene.add(pendant);
  const prof = Array.from({ length: PEND_PTS }, () => [0, 0]);
  const smax = (a, b, k) => { const h = clamp(0.5 + 0.5 * (b - a) / k, 0, 1); return a * (1 - h) + b * h + k * h * (1 - h); };
  // rt: orifice radius, r: drop radius, sag: vertical stretch of the lower half, neckLen: wetted neck length.
  // One continuous surface: the drop is smooth-max'ed into the wetted nozzle, so the radius flows like a catenoid
  // from the orifice into the drop – no stem, no collar.
  function setPendant(rt, r, sag, neckLen) {
    const yc = -(neckLen + r * 0.9);
    const rvT = r * 0.96, rvB = r * sag;
    const NU = 18;
    const k = Math.max(0.012, 0.62 * r);
    for (let j = 0; j < NU; j++) {
      const s = j / NU, y = yc * Math.pow(s, 0.8);
      const u = -y / Math.max(-yc, 1e-3);
      const bulbR = Math.abs(y - yc) < rvT ? r * Math.sqrt(1 - Math.pow((y - yc) / rvT, 2)) : 0;
      prof[j][0] = Math.max(0.0005, smax(rt, bulbR, Math.max(0.004, k * smooth(0, 0.45, u)))); prof[j][1] = y;
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
      let nx = -ty, ny = tx;
      if (j === PEND_PTS - 1) { nx = 0; ny = -1; }
      for (let i = 0; i <= PEND_SEGS; i++) {
        const phi = (i / PEND_SEGS) * TAU, sn = Math.sin(phi), cs = Math.cos(phi), kk = (i * PEND_PTS + (PEND_PTS - 1 - j)) * 3;
        p[kk] = prof[j][0] * sn; p[kk + 1] = prof[j][1]; p[kk + 2] = prof[j][0] * cs;
        nrm[kk] = nx * sn; nrm[kk + 1] = ny; nrm[kk + 2] = nx * cs;
      }
    }
    pendGeo.attributes.position.needsUpdate = true; pendGeo.attributes.normal.needsUpdate = true;
    pendGeo.computeBoundingSphere();
    oilDrop.uniforms.uLen.value = rvB - yc;
    return yc - rvB;
  }
  const RT = 0.052 * 0.95;                             // the nozzle's outer radius at the orifice (pipette lathe)
  setPendant(RT, DROP_R, 1.1, 0.014);

  // ---------- DOM overlays (screen px, set from hero.js): the price tag, the copy blocks
  const OV = { tagW: 0, tagH: 0, copyTop: 1e9, pin: null, blocks: [], spot: null, trustTop: 0, gridR: 0 };
  const ovTag = [0, 0, 0, 0, 0];                       // ovTag: pill left, top (rest pose) · the lead's dot x, y (relative) · lead run

  // ---------- pointer (damped)
  const pointer = { ndc: new THREE.Vector2(0.3, 0), target: new THREE.Vector2(0.3, 0), active: false };
  const tmp = new THREE.Vector3(), tmp2 = new THREE.Vector3(), tmp3 = new THREE.Vector3();
  const camBase = { az: 0, el: 0 };

  // ---------- layout / camera framing
  // The dropper hangs over its bottle: the nozzle 1.2 cm above the lip, a touch left of the neck's axis, leaning
  // back-right. Phones lean it further over (a shorter silhouette: the stage there is height-bound).
  const TIP = new THREE.Vector3(BOTTLE_X - 0.1, NECK_Y + 1.25, BOTTLE_Z + 0.05);
  const DROPPER_BASE = new THREE.Vector3();
  let tilt = 0.5;
  const setTilt = (t) => {
    tilt = t;
    DROPPER_BASE.set(TIP.x + PIPETTE_LEN * Math.sin(t), TIP.y + PIPETTE_LEN * Math.cos(t), TIP.z);
    dropperPivot.position.copy(DROPPER_BASE); dropperPivot.rotation.z = -t;
    dropperPivot.updateMatrixWorld(true);
  };
  setTilt(tilt);
  const DBG_FRAME = (new URLSearchParams(location.search).get('heroframe') || '').split(',').map(Number).filter((v) => v > 0);
  if (DBG_FRAME.length !== 3) DBG_FRAME.length = 0;
  const stackMQ = matchMedia('(max-width: 760px), (max-width: 1100px) and (max-aspect-ratio: 1/1)');
  let layoutRect = { x0: 0, x1: 1, y0: 0, y1: 1 };
  let W = 1, H = 1, mobileNow = false, frame = { fx: 0.66, fy: 0.5, hs: 0.8, D: 30 };
  const SUBJECT = { cx: -3, cy: 8, h: 17 };
  const target = new THREE.Vector3();
  // silhouette points of the whole still life (world), for framing: every pack's foot and top corners, the dropper
  const silhouette = () => {
    const pts = [];
    for (const k of ['day', 'gel', 'night']) {
      const it = range[k];
      pts.push([it.x - it.R, 0, it.z + it.R], [it.x + it.R, 0, it.z + it.R], [it.x - it.R, it.H, it.z], [it.x + it.R, it.H, it.z]);
    }
    pts.push([BOTTLE_X - 1.6, 0, BOTTLE_Z + 1.6], [BOTTLE_X + 1.6, 0, BOTTLE_Z + 1.6]);
    const s = Math.sin(tilt), c = Math.cos(tilt), b = DROPPER_BASE;
    // the bulb's crown and the collar's outer corners
    pts.push([b.x + 4.15 * s, b.y + 4.15 * c, b.z], [b.x + 1.22 * c + 2.07 * s, b.y - 1.22 * s + 2.07 * c, b.z], [b.x - 1.22 * c + 2.07 * s, b.y + 1.22 * s + 2.07 * c, b.z],
      [b.x + 1.22 * c, b.y - 1.22 * s, b.z], [b.x - 1.22 * c, b.y + 1.22 * s, b.z]);
    return pts;
  };
  // the shoppable pill hangs UNDER the still life (never beside it): the products get the stage's full width, and the
  // pill reads as the caption of the hero object. Vertical room it needs below the oil's front base:
  const tagDrop = () => (mobileNow ? 12 : 16);         // oil base → the pill's top edge
  const tagRoom = () => (OV.pin ? 0 : tagDrop() + OV.tagH);
  // the pill hangs under the oil on a dotted lead – an L: out of the silhouette to the right, then down onto the pill's
  // quick-add button. It runs leftward under the routine (the floor in front of it is empty). Rest pose = the camera
  // without parallax or intro dolly; computed once per layout.
  const tagRest = { left: 0, top: 0, vx: 0 };
  function restTag() {
    const az = camBase.az, el = camBase.el;
    camBase.az = 0; camBase.el = 0; placeCamera(0);
    const dot = toPx(bottle.localToWorld(tmp2.copy(tagLocalM)));
    const base = toPx(tmp2.set(BOTTLE_X, 0, BOTTLE_Z + 1.62));
    const edge = toPx(tmp2.set(BOTTLE_X + 1.62, bottle.localToWorld(tmp3.copy(tagLocalM)).y, BOTTLE_Z))[0];
    const vx = Math.round(edge + 16);                   // the lead's vertical run, 16 px clear of the glass
    const lo = mobileNow ? 16 : layoutRect.x0 - 12, hi = Math.max(lo, (mobileNow ? W - 16 : layoutRect.x1) - OV.tagW);
    tagRest.left = Math.round(clamp(vx + 27 - OV.tagW, lo, hi));   // 27 = the button's centre, from the pill's right edge
    tagRest.top = Math.round(Math.max(base[1] + tagDrop(), dot[1] + 8));
    tagRest.vx = Math.min(vx, tagRest.left + OV.tagW - 20);
    camBase.az = az; camBase.el = el; placeCamera(0);
  }
  function layout() {
    W = Math.max(1, host.clientWidth); H = Math.max(1, host.clientHeight);
    const mobile = stackMQ.matches; mobileNow = mobile;   // phones + portrait tablets: scene above, copy below
    setTilt(mobile ? 0.82 : 0.5);
    renderer.setPixelRatio(pr);
    renderer.setSize(W, H, false);
    composer.setPixelRatio(pr);
    composer.setSize(W, H);
    camera.aspect = W / H;
    const pts = silhouette();
    let x0 = 1e9, x1 = -1e9, y1 = -1e9;
    for (const p of pts) { x0 = Math.min(x0, p[0]); x1 = Math.max(x1, p[0]); y1 = Math.max(y1, p[1]); }
    SUBJECT.cx = (x0 + x1) / 2; SUBJECT.cy = y1 / 2; SUBJECT.h = y1;
    // the box the still life (and its price tag) must sit in, in screen px
    let rect;
    if (mobile) {
      const sp = OV.spot || [150, Math.min(318, W * 0.78)];
      const title = OV.blocks[1];
      const top = Math.max(sp[0] - 6, title ? title[3] + 22 : 0);
      // the pill's bottom keeps ≥ 28 px from the offer's first line (the offer sits right under the spot)
      rect = { x0: 14, x1: W - 14, y0: top, y1: sp[0] + sp[1] - 26 - tagRoom() };
    } else {
      let copyR = 0;
      for (let i = 0; i < 5; i++) if (OV.blocks[i]) copyR = Math.max(copyR, OV.blocks[i][2]);
      const bottom = (OV.trustTop > 0 ? OV.trustTop : H) - 26 - tagRoom();
      // the theme grid's content edge (where the trust band ends): nothing in the hero crosses it
      const right = OV.gridR > 0 ? OV.gridR : Math.min(W - 24, (W + 1240) / 2 - 24);
      rect = { x0: (copyR || W * 0.45) + 60, x1: right, y0: Math.max(28, H * 0.05), y1: bottom };
    }
    layoutRect = rect;
    frame = { fx: (rect.x0 + rect.x1) / 2 / W, fy: (rect.y0 + rect.y1) / 2 / H, hs: (rect.y1 - rect.y0) * 0.9, D: 0 };
    const tanH = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    const setD = () => { frame.D = (H * SUBJECT.h) / (frame.hs * 2 * tanH); };
    if (DBG_FRAME.length) { const [fx, fy, hs] = DBG_FRAME; frame = { fx, fy, hs, D: 0 }; setD(); }
    else {
      // fit: scale so the still life + the tag fill the box, then centre it (floor on the box's bottom edge)
      for (let it = 0; it < 5; it++) {
        setD(); placeCamera(0);
        let bx0 = 1e9, bx1 = -1e9, by0 = 1e9, by1 = -1e9;
        for (const p of pts) { const q = toPx(tmp.set(p[0], p[1], p[2])); bx0 = Math.min(bx0, q[0]); bx1 = Math.max(bx1, q[0]); by0 = Math.min(by0, q[1]); by1 = Math.max(by1, q[1]); }
        // fixed-size DOM extents beyond the products: desktop – the tag to the right of the oil's label
        let exR = 0;
        const s = Math.min((rect.x1 - rect.x0 - exR) / (bx1 - bx0), (rect.y1 - rect.y0) / (by1 - by0));
        frame.hs *= it === 0 ? s : Math.pow(s, 0.9);
        frame.hs = Math.min(frame.hs, H * 0.86);
        setD(); placeCamera(0);
        bx0 = 1e9; bx1 = -1e9; by0 = 1e9; by1 = -1e9;
        for (const p of pts) { const q = toPx(tmp.set(p[0], p[1], p[2])); bx0 = Math.min(bx0, q[0]); bx1 = Math.max(bx1, q[0]); by0 = Math.min(by0, q[1]); by1 = Math.max(by1, q[1]); }
        const dx = (rect.x0 + rect.x1 - exR) / 2 - (bx0 + bx1) / 2;
        const dy = mobile ? (rect.y0 + rect.y1) / 2 - (by0 + by1) / 2 : rect.y1 - by1;
        frame.fx += dx / W; frame.fy += dy / H;
      }
    }
    setD(); placeCamera(0); faceCamera();
    restTag();
    bgU.uRes.value.set(W * pr, H * pr); bgU.uDpr.value = pr;
    finalPass.uniforms.uRes.value.set(W * pr, H * pr);
    finalPass.uniforms.uVigCenter.value.set(frame.fx, 1 - frame.fy);
    finalPass.uniforms.uVig.value = mobile ? 0.26 : 0.34;
    dirty = true;
  }
  function placeCamera(intro) {
    const az = camBase.az, el = THREE.MathUtils.degToRad(9) + camBase.el;
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
  const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.38, 0.62, 0.92);
  composer.addPass(bloom);
  const finalPass = new ShaderPass(FINAL_SHADER);
  composer.addPass(finalPass);

  // ---------- simulation
  const st = { intro: 1 };
  let dirty = true, running = false, raf = 0, last = 0, firstFrameDone = false;
  const tagLocalM = new THREE.Vector3(Math.sin(0.35) * 1.625, 0.48 + 0.27 * 4.75, Math.cos(0.35) * 1.625); // the label's lower-right sage field
  const anchors = {
    glow: new THREE.Vector3(BOTTLE_X - 1.2, 6.5, -6),                 // the evening light on the backdrop sits behind the hero
    spot: new THREE.Vector3(BOTTLE_X, 5.6, BOTTLE_Z - 3.0),
    spot2: new THREE.Vector3(POS.gel[0], 8.2, POS.gel[1] - 3.2),
    pool: new THREE.Vector3((POS.day[0] + BOTTLE_X) / 2, 0, 1.5),
  };

  function step(dt, t) {
    // intro dolly (viscous ease-out)
    st.intro = reduced ? 0 : Math.max(0, st.intro - dt / 2.6);
    const introE = Math.pow(st.intro, 3);

    // pointer → camera parallax (critically damped feel via exponential smoothing); idle: a slow drift
    const k = 1 - Math.exp(-dt / 0.9);
    const px = pointer.active ? pointer.target.x : 0.15 * Math.sin(t * 0.13);
    const py = pointer.active ? pointer.target.y : 0.1 * Math.sin(t * 0.11 + 1);
    pointer.ndc.x += (px - pointer.ndc.x) * k;
    pointer.ndc.y += (py - pointer.ndc.y) * k;
    if (!reduced) {
      camBase.az = -pointer.ndc.x * THREE.MathUtils.degToRad(2.2);
      camBase.el = pointer.ndc.y * THREE.MathUtils.degToRad(1.2);
    }
    placeCamera(introE);

    // the key drifts a few degrees around the still life over 16 s: highlights travel slowly over the glass, the
    // chrome and the labels (light moving through a room in the evening – the scene breathes, nothing jumps)
    {
      const ks = reduced ? 0 : Math.sin(t * TAU / 16) * 0.085, c = Math.cos(ks), sn = Math.sin(ks);
      key.position.set(BOTTLE_X - 21 * c - 24 * sn, 4 + 27 + Math.sin(t * TAU / 23) * (reduced ? 0 : 1.2), BOTTLE_Z - 21 * sn + 24 * c);
    }
    // dropper: a slow, oil-damped float over the bottle; the drop hangs plumb from the nozzle
    const bob = reduced ? 0 : Math.sin(t * TAU / 7.5) * 0.06 + Math.sin(t * TAU / 11.3) * 0.025;
    dropperPivot.position.set(DROPPER_BASE.x, DROPPER_BASE.y + bob, DROPPER_BASE.z);
    dropperPivot.rotation.z = -tilt + (reduced ? 0 : Math.sin(t * TAU / 9.1) * 0.01);
    dropperPivot.updateMatrixWorld(true);
    const tip = dropper.localToWorld(tmp.copy(tipLocal));
    pendant.position.copy(tip);
    dropShadow.position.x = DROPPER_BASE.x + 0.6 + bob * 0.4;
    glassRimU.uAxis.value.set(-Math.sin(dropperPivot.rotation.z), Math.cos(dropperPivot.rotation.z), 0);

    // DOM overlay anchors (screen px): the price tag on the label
    {
      // the pill is pinned at its rest pose (whole pixels: crisp text, a target that never drifts under the finger);
      // only the dotted lead follows the label as the camera breathes
      const dot = toPx(bottle.localToWorld(tmp2.copy(tagLocalM)));
      ovTag[0] = tagRest.left; ovTag[1] = tagRest.top;
      ovTag[2] = dot[0] - tagRest.left; ovTag[3] = dot[1] - tagRest.top; ovTag[4] = Math.max(10, tagRest.vx - dot[0]);
    }

    // screen-space anchors for the backdrop
    const g = toPx(anchors.glow); bgU.uGlow.value.set(g[0] * pr, (H - g[1]) * pr);
    const unit = toPx(tmp2.set(anchors.glow.x, anchors.glow.y + 1, anchors.glow.z));
    const ppu = Math.abs(unit[1] - g[1]);          // pixels per world unit at the glow depth
    bgU.uGlowR.value = ppu * 9.5 * pr;
    const sp = toPx(anchors.spot); bgU.uSpot.value.set(sp[0] * pr, (H - sp[1]) * pr);
    bgU.uSpotR.value.set(ppu * 1.35 * pr, ppu * 1.0 * pr);
    const sp2 = toPx(anchors.spot2); bgU.uSpot2.value.set(sp2[0] * pr, (H - sp2[1]) * pr);
    bgU.uSpot2R.value.set(ppu * 1.9 * pr, ppu * 1.2 * pr);
    const pl = toPx(anchors.pool); bgU.uPool.value.set(pl[0] * pr, (H - pl[1]) * pr); bgU.uPoolR.value.set(ppu * 11 * pr, ppu * 2.2 * pr);
    finalPass.uniforms.uTime.value = t;
    caustic.material.opacity = 0.26 + 0.04 * Math.sin(t * 0.7);
    onFrame && onFrame({ tag: ovTag, mobile: mobileNow, ppu, W, H });
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
      const key = () => JSON.stringify([OV.spot, Math.round(OV.trustTop), Math.round(OV.gridR), Math.round(OV.tagW), OV.blocks.map((r) => Math.round(r[2]) + ':' + Math.round(r[3]))]);
      const k0 = key();
      Object.assign(OV, o);
      if (key() !== k0) { layout(); if (!running) renderOnce(); }
    },
    get dirty() { return dirty; },
    dispose() { this.stop(); renderer.dispose(); },
  };
}
