// NatureCell® Black Week – hero: the Vidunder Olien (CBD Skin Oil 1000 mg) label, drawn on a canvas.
// Artwork follows the real 30 ml label: sage field, white logo mark + wordmark, "CBD SKIN CARE / CBD SKIN OIL /
// 1000 mg", the pale chevron band with the violet product thread, fine hatching and the small print bottom-right.
// The canvas wraps the full cylinder: u = 0.5 is the front of the bottle.

const SAGE = '#80a097';      // --sage-500 (label field)
const SAGE_LIGHT = '#89a99f'; // lower field, a hair lighter than the V
const PALE = '#dde8e3';      // pale chevron band
const THREAD = '#7b5ea7';    // the oil's violet product thread (true to pack)
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

  // ---- field
  g.fillStyle = SAGE; g.fillRect(0, 0, W, H);

  // lower field (outside the V) – a hair lighter, like the printed pack
  const P = [cx, H * 0.905];                 // V point
  const side = F * 0.744;                    // arc distance from the front centre to the silhouette (90°)
  const armL = [cx - side, H * 0.40];
  const armR = [cx + side, H * 0.44];
  const dx = P[0] - armL[0], dy = P[1] - armL[1];
  const len = Math.hypot(dx, dy), ux = dx / len, uy = dy / len;
  const nx = uy, ny = -ux;                   // normal pointing down-left (outside the V)
  const ext = (pt, k) => [pt[0] - ux * k, pt[1] - uy * k];
  g.fillStyle = SAGE_LIGHT;
  g.beginPath(); g.moveTo(...ext(armL, F)); g.lineTo(...P); g.lineTo(armR[0] + (armR[0] - P[0]) * 1.5, armR[1] + (armR[1] - P[1]) * 1.5);
  g.lineTo(W, H); g.lineTo(0, H); g.closePath(); g.fill();
  // V edge on the right: a whisper of a lighter line
  g.strokeStyle = 'rgba(255,255,255,0.10)'; g.lineWidth = 3;
  g.beginPath(); g.moveTo(...P); g.lineTo(armR[0] + (armR[0] - P[0]) * 1.5, armR[1] + (armR[1] - P[1]) * 1.5); g.stroke();

  // pale band hugging the left arm (outside of it)
  const bw = F * 0.105;
  const A0 = ext(armL, F * 1.2), A1 = [P[0] + ux * F * 0.02, P[1] + uy * F * 0.02];
  const off = (pt, k) => [pt[0] - nx * k, pt[1] - ny * k];
  g.fillStyle = PALE;
  g.beginPath(); g.moveTo(...A0); g.lineTo(...A1); g.lineTo(...off(A1, bw)); g.lineTo(...off(A0, bw)); g.closePath(); g.fill();

  // hatching below the band (fine diagonal lines, fading out)
  g.save();
  g.beginPath(); g.moveTo(...off(A0, bw)); g.lineTo(...off(A1, bw)); g.lineTo(A1[0], H + 10); g.lineTo(0, H + 10); g.lineTo(0, A0[1]); g.closePath(); g.clip();
  g.strokeStyle = 'rgba(255,255,255,0.3)'; g.lineWidth = 2.4;
  for (let k = 1; k < 30; k++) {
    const o = bw + 22 + k * 15;
    g.globalAlpha = Math.max(0, 1 - k / 30);
    g.beginPath(); g.moveTo(...off(ext(A0, F * 0.4), o)); g.lineTo(...off([A1[0] + ux * F * 0.6, A1[1] + uy * F * 0.6], o)); g.stroke();
  }
  g.restore();
  g.globalAlpha = 1;

  // violet product thread along the band's outer edge
  g.strokeStyle = THREAD; g.lineWidth = 8; g.lineCap = 'butt';
  g.beginPath(); g.moveTo(...off(A0, bw + 9)); g.lineTo(...off([P[0] - ux * F * 0.05, P[1] - uy * F * 0.05], bw + 9)); g.stroke();

  // ---- logo + typography (white print)
  const [mark, word] = await Promise.all([
    loadSvg(asset('logo-mark-white.svg'), 600, 600),
    loadSvg(asset('logo-wordmark-white.svg'), 1071, 302),
  ]);
  try { await Promise.all([document.fonts.load('700 60px Philosopher'), document.fonts.load('400 60px Philosopher'), document.fonts.load('500 40px "Roboto Flex"')]); } catch (e) { /* fonts optional */ }

  const markS = F * 0.33;
  g.drawImage(mark, cx - markS / 2, H * 0.085, markS, markS);
  const wordW = F * 0.70, wordH = wordW * 302 / 1071;
  g.drawImage(word, cx - wordW / 2 + wordW * 0.025, H * 0.29, wordW, wordH);

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
  const rx = cx + F * 0.4;
  g.font = `400 ${Math.round(F * 0.04)}px "Roboto Flex", Arial, sans-serif`;
  g.fillText('For all skin types', rx, H * 0.83);
  g.font = `500 ${Math.round(F * 0.042)}px "Roboto Flex", Arial, sans-serif`;
  g.fillText('Contains natural &', rx, H * 0.868);
  g.fillText('organic ingredients', rx, H * 0.903);
  g.font = `400 ${Math.round(F * 0.03)}px "Roboto Flex", Arial, sans-serif`;
  g.fillText('30 ml/1 oz \u212e', rx, H * 0.94);

  // back of the label – unreadable small-print blocks (only ever seen at the edges)
  g.fillStyle = 'rgba(255,255,255,0.55)';
  const r = rng(7);
  for (const bx of [W * 0.06, W * 0.80]) {
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
