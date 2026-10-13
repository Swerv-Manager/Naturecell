// NatureCell® Black Week – hero: the Vidunder Olien (CBD Skin Oil 1000 mg) label, drawn on a canvas.
// Artwork follows the real 30 ml label: sage field, white logo mark + wordmark, "CBD SKIN CARE / CBD SKIN OIL /
// 1000 mg", the pale chevron band with the violet product thread, fine hatching and the small print bottom-right.
// The canvas wraps the full cylinder: u = 0.5 is the front of the bottle.

// Colours sampled from the real 30 ml label (assets/extra/product-transparent.png, skin-oil-hires.webp) and
// pre-compensated for the scene's warm key + grade, so the rendered label reads as the printed teal-sage.
const FIELD = '#6c998c';      // main field (upper + the heart of the V)
const FIELD_LOW = '#5f8b7f';  // lower-right field, a step deeper (as printed)
const PALE = '#d3dfd9';       // pale chevron band
const HATCH = 'rgba(226,238,233,0.34)';
const THREAD = '#7a478a';     // Vidunder Olien's violet product thread (true to pack)
const INK = '#ffffff';

async function loadSvg(url, w, h) {
  const txt = await (await fetch(url)).text();
  const sized = txt.replace('<svg ', `<svg width="${w}" height="${h}" preserveAspectRatio="xMidYMid meet" `);
  const blob = new Blob([sized], { type: 'image/svg+xml' });
  const src = URL.createObjectURL(blob);
  const img = new Image();
  img.decoding = 'async';
  img.src = src;
  await img.decode();
  return img;
}

// deterministic PRNG so the paper fibres look the same on every load
function rng(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }

export async function drawLabel(asset, W = 3072, H = 1500) {
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const g = c.getContext('2d');
  const cx = W / 2;
  const F = W / 3;              // width of the visible front face (≈120° of the wrap)

  // Geometry measured on the real bottle, in label space: θ (degrees around the bottle, 0 = front centre) and
  // y as a fraction of the label height. Straight lines in print → they curve naturally as the label wraps.
  const PXD = W / (360 * 0.97);                       // canvas px per degree (the label wraps 97% of the bottle)
  const X = (deg) => cx + deg * PXD;
  const V = [X(3), H * 0.82];                         // V point, a hair right of centre
  const L = [X(-79), H * 0.27];                       // left arm reaches the silhouette at ~27% height
  const R = [X(79), H * 0.28];
  const unit = (a, b) => { const dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy); return [dx / l, dy / l]; };
  const uL = unit(V, L), uR = unit(V, R);             // from the V point outward along each arm
  const along = (p, u, k) => [p[0] + u[0] * k, p[1] + u[1] * k];
  const nL = [uL[1], -uL[0]];                         // normal of the left arm, pointing down-left (outside the V)
  const off = (p, k) => [p[0] + nL[0] * k, p[1] + nL[1] * k];
  const FAR = W;                                      // long enough to run off the canvas
  // the band and hatching end on the right arm's line continued down-left through the V point
  const cutB = along(V, uR, -(H + 10 - V[1]) / -uR[1]);  // V − uR·t, reaching just past the bottom edge

  // ---- field
  g.fillStyle = FIELD; g.fillRect(0, 0, W, H);
  // lower-right field: below the right arm and right of its continuation
  g.fillStyle = FIELD_LOW;
  g.beginPath(); g.moveTo(...V); g.lineTo(...along(V, uR, FAR)); g.lineTo(W + 10, H + 10); g.lineTo(...cutB); g.closePath(); g.fill();

  // clip everything left of the cut line and below the left arm
  const BW = 150, TH = 13;                            // band width, violet thread width (canvas px, perpendicular)
  g.save();
  g.beginPath(); g.moveTo(...along(V, uL, FAR)); g.lineTo(...V); g.lineTo(...cutB); g.lineTo(X(-125), H + 10); g.lineTo(X(-125), -10); g.closePath();
  g.clip();
  // pale band hugging the left arm
  g.fillStyle = PALE;
  g.beginPath(); g.moveTo(...along(V, uL, FAR)); g.lineTo(...along(V, uL, -FAR)); g.lineTo(...off(along(V, uL, -FAR), BW)); g.lineTo(...off(along(V, uL, FAR), BW)); g.closePath(); g.fill();
  // violet thread on the band's lower edge
  g.fillStyle = THREAD;
  g.beginPath(); g.moveTo(...off(along(V, uL, FAR), BW - TH)); g.lineTo(...off(along(V, uL, -FAR), BW - TH)); g.lineTo(...off(along(V, uL, -FAR), BW)); g.lineTo(...off(along(V, uL, FAR), BW)); g.closePath(); g.fill();
  // fine parallel hatching below the thread
  g.strokeStyle = HATCH; g.lineWidth = 5; g.lineCap = 'butt';
  for (let k = 0; k < 26; k++) {
    const o = BW + 24 + k * 27;
    g.beginPath(); g.moveTo(...off(along(V, uL, FAR), o)); g.lineTo(...off(along(V, uL, -FAR), o)); g.stroke();
  }
  g.restore();
  // a whisper of paper edge along the band's top (print registration)
  g.strokeStyle = 'rgba(255,255,255,0.10)'; g.lineWidth = 2;
  g.beginPath(); g.moveTo(...along(V, uL, FAR)); g.lineTo(...V); g.stroke();

  // ---- logo + typography (white print)
  const [mark, word] = await Promise.all([
    loadSvg(asset('logo-mark-white.svg'), 600, 600),
    loadSvg(asset('logo-wordmark-white.svg'), 1071, 302),
  ]);
  try { await Promise.all([document.fonts.load('700 60px Philosopher'), document.fonts.load('400 60px Philosopher'), document.fonts.load('500 40px "Roboto Flex"')]); } catch (e) { /* fonts optional */ }

  const markS = 30 * PXD;
  g.drawImage(mark, cx - markS / 2, H * 0.072, markS, markS);
  const wordW = 79 * PXD, wordH = wordW * 302 / 1071;
  g.drawImage(word, cx - wordW / 2 + wordW * 0.025, H * 0.285, wordW, wordH);

  g.fillStyle = INK; g.textAlign = 'center'; g.textBaseline = 'alphabetic';
  const fit = (txt, font, width) => { g.font = font(100); const w = g.measureText(txt).width; return font(Math.round(100 * width / w)); };
  if ('letterSpacing' in g) g.letterSpacing = '0px';
  g.font = fit('CBD SKIN CARE', (s) => `500 ${s}px "Roboto Flex", Arial, sans-serif`, F * 0.42);
  g.fillText('CBD SKIN CARE', cx, H * 0.525);
  g.font = fit('CBD SKIN OIL', (s) => `700 ${s}px Philosopher, Georgia, serif`, F * 0.5);
  g.fillText('CBD SKIN OIL', cx, H * 0.605);
  g.font = fit('1000 mg', (s) => `700 ${s}px Philosopher, Georgia, serif`, F * 0.19);
  g.fillText('1000 mg', cx, H * 0.66);

  // small print, bottom-right of the front face
  g.textAlign = 'right';
  const rx = X(50);
  g.font = `400 ${Math.round(F * 0.04)}px "Roboto Flex", Arial, sans-serif`;
  g.fillText('For all skin types', rx, H * 0.85);
  g.font = `500 ${Math.round(F * 0.043)}px "Roboto Flex", Arial, sans-serif`;
  g.fillText('Contains natural &', rx, H * 0.892);
  g.fillText('organic ingredients', rx, H * 0.929);
  g.font = `400 ${Math.round(F * 0.03)}px "Roboto Flex", Arial, sans-serif`;
  g.fillText('30 ml/1 oz \u212e', rx, H * 0.968);

  // back of the label – unreadable small-print blocks (only ever seen at the edges)
  g.fillStyle = 'rgba(255,255,255,0.55)';
  const r = rng(7);
  for (const bx of [X(-168), X(124)]) {
    for (let i = 0; i < 22; i++) {
      const w = F * (0.32 + r() * 0.22);
      g.fillRect(bx, H * 0.22 + i * H * 0.026, w, H * 0.008);
    }
  }

  // paper: soft print variation + fibres, multiplied very lightly so the print reads as ink on matte stock
  const rr = rng(11);
  g.globalCompositeOperation = 'soft-light';
  for (let i = 0; i < 9000; i++) {
    const x = rr() * W, y = rr() * H, a = rr() * 0.08;
    g.fillStyle = rr() > 0.5 ? `rgba(255,255,255,${a})` : `rgba(0,0,0,${a})`;
    g.fillRect(x, y, 1 + rr() * 3, 1 + rr() * 1.5);
  }
  g.globalCompositeOperation = 'source-over';
  return c;
}

// Roughness map: matte paper, slightly glossier white print (the logo picks up a soft sheen as it turns)
export function labelRoughness(labelCanvas) {
  const W = 1024, H = Math.round(1024 * labelCanvas.height / labelCanvas.width);
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const g = c.getContext('2d');
  g.drawImage(labelCanvas, 0, 0, W, H);
  const d = g.getImageData(0, 0, W, H); const p = d.data;
  for (let i = 0; i < p.length; i += 4) {
    const lum = (p[i] + p[i + 1] + p[i + 2]) / 3;
    const ink = Math.max(0, (lum - 200) / 55);           // near-white print
    const v = 205 - ink * 95;                            // paper ≈ 0.8, ink ≈ 0.43 (green channel = roughness)
    p[i] = p[i + 1] = p[i + 2] = v;
  }
  g.putImageData(d, 0, 0);
  return c;
}
