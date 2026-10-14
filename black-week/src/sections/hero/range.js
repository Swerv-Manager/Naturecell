// NatureCell® Black Week – hero: the rest of the facial routine, modelled in 3D so it shares the key light, the
// environment reflections, the refraction through the amber glass and the floor shadows with Vidunder Olien.
//  · CBD Rensegel – 100 ml amber Boston round with a black treatment pump
//  · CBD Dagcreme / CBD Natcreme – 50 ml white airless pumps: sage label sleeve, chrome collar, white actuator under
//    a clear over-cap
// Silhouettes are measured from the real packshots (assets/products/*.webp: row-by-row alpha extents, cm scale from
// the Komplet Pakken shot – oil 3.2 cm wide, airless 3.3 × 15.25 cm, Rensegel 4.6 × 13.5 cm). The label art IS the
// real print: the packshot's label band, de-shaded (the photo's cylinder fall-off divided out) and wrapped back onto
// the cylinder with the same projection the camera saw it with (u = ½ + ½·sin θ), so the scene lights it afresh.
import * as THREE from 'three';
import { labelRoughness } from './label.js';

const C = (hex) => new THREE.Color(hex);

function lathe(points, segs = 96) {
  const g = new THREE.LatheGeometry(points.map(([x, y]) => new THREE.Vector2(x, y)), segs);
  g.computeVertexNormals();
  return g;
}

// the label sleeve: an open cylinder whose u is the photo's x (front = +z, u = ½ + ½·sin θ)
function sleeve(r, y0, y1, segs = 160) {
  const g = new THREE.CylinderGeometry(r, r, y1 - y0, segs, 1, true);
  g.translate(0, (y0 + y1) / 2, 0);
  const p = g.attributes.position, uv = g.attributes.uv;
  for (let i = 0; i < p.count; i++) {
    const th = Math.atan2(p.getX(i), p.getZ(i));
    uv.setX(i, 0.5 + 0.5 * Math.sin(th));
  }
  return g;
}

async function loadImage(url) {
  const img = new Image();
  img.decoding = 'async';
  img.src = url;
  await img.decode();
  return img;
}

// Label band from a hi-res packshot: per-row unwrap → divide out the photo's horizontal shading (per-column median of
// the label, relative to the centre) → pre-compensate for the scene's warm key exactly like the oil label (label.js),
// so the rendered print lands on the photographed teal-sage.
// The search window [x0, y0, x1, y1] holds the printed band; in every row the silhouette's own extent (alpha) is
// resampled to the full texture width, which straightens the photo's slight lean and leaves no transparent seam at
// the grazing edges. Sources are ≥ 1000 px tall, so the texture is used 1:1 (mip-mapped, max anisotropy).
function bakeLabel(img, [x0, y0, x1, y1]) {
  const sw = x1 - x0, h = y1 - y0;
  const src = document.createElement('canvas'); src.width = sw; src.height = h;
  const sg = src.getContext('2d', { willReadFrequently: true });
  sg.drawImage(img, x0, y0, sw, h, 0, 0, sw, h);
  const sp = sg.getImageData(0, 0, sw, h).data;
  // the silhouette's extent per row (2 px inside the anti-aliased edge)
  const L = new Float32Array(h), R = new Float32Array(h);
  for (let y = 0; y < h; y++) {
    let l = 0, r = sw - 1;
    while (l < sw - 1 && sp[(y * sw + l) * 4 + 3] < 250) l++;
    while (r > 0 && sp[(y * sw + r) * 4 + 3] < 250) r--;
    L[y] = l + 2; R[y] = Math.max(l + 3, r - 2);
  }
  const widths = Array.from(R, (r, i) => r - L[i]).sort((a, b) => a - b);
  const w = Math.round(widths[h >> 1]);
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d', { willReadFrequently: true });
  const d = g.createImageData(w, h), p = d.data;
  for (let y = 0; y < h; y++) {
    const l = L[y], k = (R[y] - l) / Math.max(1, w - 1);
    for (let x = 0; x < w; x++) {
      const fx = l + x * k, i0 = Math.floor(fx), t = fx - i0, i1 = Math.min(sw - 1, i0 + 1);
      const a = (y * sw + i0) * 4, b = (y * sw + i1) * 4, o = (y * w + x) * 4;
      p[o] = sp[a] + (sp[b] - sp[a]) * t; p[o + 1] = sp[a + 1] + (sp[b + 1] - sp[a + 1]) * t; p[o + 2] = sp[a + 2] + (sp[b + 2] - sp[a + 2]) * t; p[o + 3] = 255;
    }
  }
  const prof = new Float32Array(w);
  const col = [];
  for (let x = 0; x < w; x++) {
    col.length = 0;
    for (let y = 2; y < h - 2; y += 3) { const k = (y * w + x) * 4; col.push(p[k] * 0.3 + p[k + 1] * 0.59 + p[k + 2] * 0.11); }
    col.sort((a, b) => a - b);
    prof[x] = col[col.length >> 1] || 1;
  }
  // smooth the profile a little (the shading is a broad fall-off; print must not leak into it)
  const sm = new Float32Array(w), rad = Math.max(2, Math.round(w / 80));
  for (let x = 0; x < w; x++) { let s = 0, n = 0; for (let j = -rad; j <= rad; j++) { const q = x + j; if (q >= 0 && q < w) { s += prof[q]; n++; } } sm[x] = s / n; }
  let ref = 0, n = 0;
  for (let x = Math.round(w * 0.35); x < w * 0.65; x++) { ref += sm[x]; n++; }
  ref /= n;
  const comp = [1 / 1.05, 1 / 0.94, 1 / 0.88];
  for (let x = 0; x < w; x++) {
    // gain capped: the outermost columns are seen edge-on and carry little but compressed print
    const gain = Math.min(1.75, Math.max(0.9, ref / Math.max(sm[x], 1)));
    for (let y = 0; y < h; y++) {
      const k = (y * w + x) * 4;
      for (let ch = 0; ch < 3; ch++) p[k + ch] = Math.min(255, p[k + ch] * gain * comp[ch]);
    }
  }
  g.putImageData(d, 0, 0);
  return c;
}

function labelMaterial() {
  const m = new THREE.MeshPhysicalMaterial({ color: C('#7bb1b0'), roughness: 0.78, metalness: 0, sheen: 0.35, sheenRoughness: 0.8, sheenColor: C('#ffffff'), envMapIntensity: 0.42 });
  m.onBeforeCompile = (sh) => {
    sh.fragmentShader = sh.fragmentShader.replace('#include <map_fragment>', '#include <map_fragment>\n#ifdef USE_MAP\n  diffuseColor.rgb = texture2D( map, vMapUv, -0.5 ).rgb;\n#endif');
  };
  return m;
}

function applyLabel(mat, canvas, renderer) {
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  const rough = new THREE.CanvasTexture(labelRoughness(canvas));
  rough.colorSpace = THREE.NoColorSpace;
  mat.map = tex; mat.roughnessMap = rough; mat.metalnessMap = rough;
  mat.roughness = 1; mat.metalness = 1; mat.color.set(0xffffff);
  mat.needsUpdate = true;
}

// ---- the white airless pump (50 ml). Local units: cm, base at y = 0, front = +z.
export const AIRLESS = { R: 1.643, H: 15.26 };
function airless(mats, labelMat) {
  const g = new THREE.Group();
  const { white, chrome, clear } = mats;
  // white base ring + the shoulder band above the label
  g.add(new THREE.Mesh(lathe([[0, 0.012], [1.48, 0.0], [1.585, 0.03], [1.632, 0.11], [1.641, 0.22], [1.641, 0.56]], 128), white));
  const lab = new THREE.Mesh(sleeve(1.646, 0.54, 10.22), labelMat);
  g.add(lab);
  g.add(new THREE.Mesh(lathe([[1.641, 10.2], [1.641, 10.84], [1.62, 10.875], [1.31, 10.885]], 128), white));
  // chrome collar (the pump's metallised sleeve), then the white locking ring and the actuator with its nozzle
  g.add(new THREE.Mesh(lathe([[1.27, 10.88], [1.288, 10.92], [1.288, 12.93], [1.27, 12.965]], 128), chrome));
  g.add(new THREE.Mesh(lathe([[1.27, 12.96], [1.285, 12.99], [1.285, 13.36], [1.25, 13.41], [0.66, 13.43]], 128), white));
  g.add(new THREE.Mesh(lathe([[0.63, 13.42], [0.63, 14.52], [0.61, 14.66], [0.52, 14.73], [0, 14.745]], 96), white));
  const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.15, 0.42, 32), white);
  nozzle.rotation.z = Math.PI / 2; nozzle.position.set(-0.72, 14.47, 0);
  g.add(nozzle);
  // the clear over-cap: a reflection shell over an edge tint (see scene.js) – the actuator and the chrome stay crisp
  // (the top edge is a filleted round-over, ≈ 0.1 cm: the key's glint spreads into a short soft arc, never a point)
  const capGeo = lathe([[1.612, 10.875], [1.614, 10.95], [1.566, 14.9], [1.561, 15.02], [1.54, 15.12], [1.495, 15.195], [1.42, 15.238], [1.3, 15.256], [0, 15.262]], 128);
  const capTint = new THREE.Mesh(capGeo, mats.capTint); capTint.renderOrder = 6;
  const cap = new THREE.Mesh(capGeo, clear); cap.renderOrder = 7;
  g.add(capTint, cap);
  // the cap's top rim: a fine light line (the edge of the moulding seen in perspective), so the top reads as an ellipse
  const rim = new THREE.Mesh(new THREE.TorusGeometry(1.47, 0.02, 6, 128), mats.capRim);
  rim.rotation.x = Math.PI / 2; rim.position.y = 15.22; rim.renderOrder = 8;
  g.add(rim);
  g.userData.label = lab;
  return g;
}

// ---- CBD Rensegel: 100 ml amber Boston round + black treatment pump
export const GEL = { R: 2.27, H: 13.52 };
function gel(mats, labelMat) {
  const g = new THREE.Group();
  const prof = [[0.0, 0.2], [0.7, 0.17], [1.2, 0.08], [1.4, 0.0], [1.58, 0.035], [1.76, 0.12], [1.9, 0.25], [2.0, 0.42], [2.09, 0.62],
    [2.15, 0.82], [2.2, 1.02], [2.24, 1.28], [2.262, 1.55], [2.268, 7.3], [2.252, 7.65], [2.222, 7.95], [2.172, 8.2], [2.092, 8.45],
    [1.975, 8.62], [1.82, 8.78], [1.62, 8.93], [1.38, 9.06], [1.15, 9.15], [0.98, 9.2], [0.95, 9.3], [0.0, 9.3]];
  const glass = new THREE.Mesh(lathe(prof, 128), mats.amber);
  g.add(glass);
  const lab = new THREE.Mesh(sleeve(2.282, 1.13, 7.21), labelMat);
  g.add(lab);
  for (const y of [1.13, 7.21]) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(2.281, 0.006, 6, 160), mats.labelEdge);
    ring.rotation.x = Math.PI / 2; ring.position.y = y; g.add(ring);
  }
  // pump: closure → shoulder steps → stem → head (sloped top) + spout
  g.add(new THREE.Mesh(lathe([[0.9, 9.12], [1.05, 9.14], [1.08, 9.22], [1.08, 10.03], [1.05, 10.1], [0.97, 10.15], [0.96, 11.28], [0.92, 11.36],
    [0.865, 11.41], [0.86, 12.0], [0.8, 12.07], [0.74, 12.11], [0.735, 12.96], [0.72, 13.12], [0.67, 13.24], [0.52, 13.31], [0, 13.33]], 128), mats.black));
  // the spout: short and chunky, tapering to a rounded orifice, rising a touch (as on the real pump)
  const spout = new THREE.Mesh(lathe([[0.2, 0], [0.19, 0.3], [0.15, 0.62], [0.13, 0.7], [0.1, 0.735], [0.06, 0.74]], 40), mats.black);
  spout.rotation.z = -Math.PI / 2 + 0.12; spout.position.set(0.55, 13.12, 0);
  g.add(spout);
  g.userData.label = lab;
  return g;
}

// Build the three; resolves the label art asynchronously (placeholders until the packshots are decoded)
export function buildRange({ asset, renderer, mats, onReady }) {
  const labelMats = { day: labelMaterial(), night: labelMaterial(), gel: labelMaterial() };
  const items = {
    gel: { obj: gel(mats, labelMats.gel), R: GEL.R, H: GEL.H, amber: true },
    day: { obj: airless(mats, labelMats.day), R: AIRLESS.R, H: AIRLESS.H },
    night: { obj: airless(mats, labelMats.night), R: AIRLESS.R, H: AIRLESS.H },
  };
  for (const k in items) items[k].obj.traverse((o) => { if (o.isMesh && !o.material.transparent) o.renderOrder = 1; });
  const jobs = [
    // [packshot, search window in source px (x0, y0, x1, y1): the printed band, wider than the silhouette]
    // (measured on the hi-res sources: the sage band between the glass/white parts; day-cream-hires also shows the
    // carton – the window stops before it)
    ['products/cleansing-gel-bottle-hires.webp', [0, 1117, 840, 2181], 'gel'],
    ['products/day-cream-hires.webp', [0, 843, 545, 2290], 'day'],
    ['products/night-cream-bottle-hires.webp', [0, 774, 560, 2295], 'night'],
  ];
  Promise.all(jobs.map(async ([url, crop, k]) => {
    const img = await loadImage(asset(url));
    applyLabel(labelMats[k], bakeLabel(img, crop), renderer);
  })).then(() => onReady && onReady()).catch((e) => console.warn('[hero] range labels', e));
  return items;
}
