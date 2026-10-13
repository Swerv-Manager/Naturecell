// Port of theme-src/assets/nc-packshot.js (Kundens rettelse 08-10-2026: "Sikr ens underkant for alle
// produkter/packshots for at skabe visuel ro paa siden"). Reads a small copy of each img.nc-packshot in a canvas,
// finds the product's bounds and moves/scales the image so every product stands on the same bottom line.
// Falls back silently to CSS (contain, centred). Scoped to the given root instead of the whole document.
const BASE = 0.86;   // produktets underkant: andel af boksens hoejde
const MAX_H = 0.78;  // produktet maa hoejst fylde saa meget af boksen ...
const MAX_W = 0.78;
const MIN_H = 0.52;  // ... og smaa produkter loeftes op til dette
const MAX_UP = 1.6;  // men aldrig mere end 1,6x
const SIZE = 120;    // analysekopiens stoerste side i px
const DIFF = 26;     // farveafstand fra baggrunden, der taeller som produkt
const cache = {};

function analyze(src, cb) {
  if (cache[src]) return cb(cache[src]);
  const im = new Image();
  im.onload = () => {
    const w = im.naturalWidth, h = im.naturalHeight;
    if (!w || !h) return cb(null);
    const s = Math.min(1, SIZE / Math.max(w, h));
    const cw = Math.max(1, Math.round(w * s)), ch = Math.max(1, Math.round(h * s));
    const c = document.createElement('canvas');
    c.width = cw; c.height = ch;
    const ctx = c.getContext('2d', { willReadFrequently: true });
    let d;
    try { ctx.drawImage(im, 0, 0, cw, ch); d = ctx.getImageData(0, 0, cw, ch).data; } catch (e) { return cb(null); }
    const px = (x, y) => { const i = (y * cw + x) * 4; return [d[i], d[i + 1], d[i + 2], d[i + 3]]; };
    const samples = [px(0, 0), px(cw - 1, 0), px(0, ch - 1), px(cw - 1, ch - 1), px(cw >> 1, 0), px(cw >> 1, ch - 1), px(0, ch >> 1), px(cw - 1, ch >> 1)];
    const bg = [0, 1, 2, 3].map((n) => samples.map((p) => p[n]).sort((a, b) => a - b)[4]);
    const transparent = bg[3] < 20;
    let x0 = cw, x1 = -1, y0 = ch, y1 = -1;
    for (let y = 0; y < ch; y++) {
      for (let x = 0; x < cw; x++) {
        const i = (y * cw + x) * 4, a = d[i + 3];
        const hit = transparent ? a > 40
          : a > 40 && (Math.abs(d[i] - bg[0]) > DIFF || Math.abs(d[i + 1] - bg[1]) > DIFF || Math.abs(d[i + 2] - bg[2]) > DIFF);
        if (hit) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
      }
    }
    if (x1 < 0 || x1 - x0 < 2 || y1 - y0 < 2) return cb(null);
    if ((x1 - x0 + 1) / cw > 0.97 && (y1 - y0 + 1) / ch > 0.97) return cb(null);
    const r = { x0: x0 / cw, x1: (x1 + 1) / cw, y0: y0 / ch, y1: (y1 + 1) / ch, w, h };
    cache[src] = r; cb(r);
  };
  im.onerror = () => cb(null);
  im.src = src;
}

function place(img) {
  const r = img._ncPs;
  if (!r) return;
  const W = img.clientWidth, H = img.clientHeight;
  if (!W || !H) return;
  const s0 = Math.min(W / r.w, H / r.h), w0 = r.w * s0, h0 = r.h * s0, ox = (W - w0) / 2, oy = (H - h0) / 2;
  const bx0 = ox + r.x0 * w0, bx1 = ox + r.x1 * w0, by0 = oy + r.y0 * h0, by1 = oy + r.y1 * h0;
  const pw = bx1 - bx0, ph = by1 - by0, cx = (bx0 + bx1) / 2;
  let s = 1;
  if (ph > MAX_H * H) s = MAX_H * H / ph;
  else if (ph < MIN_H * H) s = Math.min(MAX_UP, MIN_H * H / ph);
  if (pw * s > MAX_W * W) s = MAX_W * W / pw;
  const tx = W / 2 - s * cx, ty = BASE * H - s * by1;
  img.style.transform = `translate(${tx.toFixed(2)}px,${ty.toFixed(2)}px) scale(${s.toFixed(4)})`;
  img.classList.add('is-placed');
}

const ro = 'ResizeObserver' in window ? new ResizeObserver((entries) => entries.forEach((e) => place(e.target))) : null;

function setup(img) {
  if (img._ncPsInit) return;
  img._ncPsInit = true;
  const src = img.currentSrc || img.src;
  if (!src) return;
  analyze(src, (r) => {
    if (!r) return;
    img._ncPs = r;
    place(img);
    if (ro) ro.observe(img);
    else window.addEventListener('resize', () => place(img));
  });
}

export function initPackshots(root) {
  root.querySelectorAll('img.nc-packshot').forEach((img) => {
    if (img.complete && img.naturalWidth) setup(img);
    else img.addEventListener('load', () => setup(img), { once: true });
  });
}
