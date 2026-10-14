// NatureCell® Black Week – hero: the Vidunder Olien (CBD Skin Oil 1000 mg) label, drawn on a canvas.
// Artwork follows the real 30 ml label: sage field, white logo mark + wordmark, "CBD SKIN CARE / CBD SKIN OIL /
// 1000 mg", the pale chevron band with the violet product thread, fine hatching and the small print bottom-right.
// The canvas wraps the full cylinder: u = 0.5 is the front of the bottle.

// Colours sampled from the real 30 ml label (assets/extra/product-transparent.png, skin-oil-hires.webp) and
// pre-compensated for the scene's warm key + grade, so the rendered label reads as the printed teal-sage.
// (pre-compensated cooler – measured per-channel gain of the warm key/softbox on the label – so the rendered front
// face lands on the printed teal-sage (129,167,155) and the cool pale band (177,195,189) instead of olive/cream)
const FIELD = '#7bb1b0';      // main field (upper + the heart of the V)
const FIELD_LOW = '#94b6b4';  // lower-right field: a step lighter and greyer than the heart (as printed)
const PALE = '#a9c3c6';       // pale chevron band: a pale sage-grey, pre-compensated so it renders like the siblings' baked chevrons (≈ 160,175,166)
const HATCH = 'rgba(226,238,233,0.34)';
const THREAD = '#7a478a';     // Vidunder Olien's violet product thread (true to pack)
const INK = '#ffffff';

async function loadSvg(url, w, h, edit = (t) => t) {
  const txt = edit(await (await fetch(url)).text());
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

export async function drawLabel(asset, W = 4096, H = 2000) {
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const g = c.getContext('2d');
  const cx = W / 2;
  const F = W / 3;              // width of the visible front face (≈120° of the wrap)

  // Geometry measured on the real bottle, in label space: θ (degrees around the bottle, 0 = front centre) and
  // y as a fraction of the label height. Straight lines in print → they curve naturally as the label wraps.
  const PXD = W / (360 * 0.97);                       // canvas px per degree (the label wraps 97% of the bottle)
  const X = (deg) => cx + deg * PXD;
  // measured on the real 30 ml label (packshot, unwrapped to degrees): the V point sits just right of centre under
  // '1000 mg' at ≈ 79.5% of the label height; the left arm (the band's top edge) rises at ≈ 50° and leaves the
  // visible face at ≈ 22–26% of the height, the right arm rises a touch flatter (≈ 47°) to ≈ 45% at 57°
  const V = [X(1.5), H * 0.795];
  const L = [X(-58.5), H * 0.795 - 60 * PXD * 1.2];
  const R = [X(57), H * 0.45];
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
  const SC = W / 3072;
  const BW = 268, TH = 13 * SC;                            // band width, violet thread width (canvas px, perpendicular)
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
  g.strokeStyle = HATCH; g.lineWidth = 5 * SC; g.lineCap = 'butt';
  for (let k = 0; k < 17; k++) {
    const o = BW + (22 + k * 30) * SC;
    g.beginPath(); g.moveTo(...off(along(V, uL, FAR), o)); g.lineTo(...off(along(V, uL, -FAR), o)); g.stroke();
  }
  g.restore();
  // a whisper of paper edge along the band's top (print registration)
  g.strokeStyle = 'rgba(255,255,255,0.10)'; g.lineWidth = 2 * SC;
  g.beginPath(); g.moveTo(...along(V, uL, FAR)); g.lineTo(...V); g.stroke();

  // ---- logo + typography (white print)
  // the printed wordmark on the pack carries no ® – drop that glyph (the first path) and crop the viewBox to the
  // letters (bbox 194.8 92.6 438.9×112.5), so the word centres optically on the bottle
  const WB = [194.5, 92.2, 439.6, 113.2];
  const [mark, word] = await Promise.all([
    loadSvg(asset('logo-mark-white.svg'), 600, 600),
    loadSvg(asset('logo-wordmark-white.svg'), 1319, 340, (t) => t.replace(/<path[^>]*>(<\/path>)?/, '').replace(/viewBox="[^"]*"/, `viewBox="${WB.join(' ')}"`)),
  ]);
  try { await Promise.all([document.fonts.load('700 60px Philosopher'), document.fonts.load('400 60px Philosopher'), document.fonts.load('500 40px "Roboto Flex"')]); } catch (e) { /* fonts optional */ }

  const markS = 30 * PXD;
  const wordW = 69 * PXD, wordH = wordW * WB[3] / WB[2];
  const placeLogo = (gg) => {
    gg.drawImage(mark, cx - markS / 2, H * 0.072, markS, markS);
    // the wordmark is drawn with a hair of dilation (≈ 0.25 screen px a side at the 1440 framing), so the thin stems
    // of the 'N' and the 'C' survive the minification instead of breaking up
    const wx = cx - wordW / 2, wy = H * 0.302, dl = 2.6 * W / 4096;
    for (let a = 0; a < 8; a++) gg.drawImage(word, wx + Math.cos(a * Math.PI / 4) * dl, wy + Math.sin(a * Math.PI / 4) * dl, wordW, wordH);
    gg.drawImage(word, wx, wy, wordW, wordH);
  };
  // the mark + wordmark: the brightest print on the pack (a near-white ink with the faintest pearl sheen), kept as
  // a mask too – it drives the satin roughness and a small lift so the brand mark stays the most legible thing
  const foil = document.createElement('canvas'); foil.width = W; foil.height = H;
  placeLogo(foil.getContext('2d'));
  c.foil = foil;
  const silver = document.createElement('canvas'); silver.width = W; silver.height = H;
  const sg = silver.getContext('2d');
  sg.drawImage(foil, 0, 0);
  sg.globalCompositeOperation = 'source-in';
  const fg = sg.createLinearGradient(0, H * 0.07, 0, H * 0.4);
  fg.addColorStop(0, '#f2f8f8'); fg.addColorStop(1, '#dfe8e8');
  sg.fillStyle = fg; sg.fillRect(0, 0, W, H);
  g.drawImage(silver, 0, 0);

  g.fillStyle = INK; g.textAlign = 'center'; g.textBaseline = 'alphabetic';
  const fit = (txt, font, width) => { g.font = font(100); const w = g.measureText(txt).width; return font(Math.round(100 * width / w)); };
  if ('letterSpacing' in g) g.letterSpacing = '0px';
  // the product name set to the real pack's proportions (carton + bottle): 'CBD SKIN OIL' runs ≈ 0.92× the wordmark's
  // width, 'CBD SKIN CARE' ≈ 0.75×, '1000 mg' ≈ 0.39× – the name is the largest type after the wordmark. The block sits
  // high enough that the left end of the name clears the pale band's rising edge.
  const WW = wordW / F;
  g.font = fit('CBD SKIN CARE', (s) => `500 ${s}px "Roboto Flex", Arial, sans-serif`, F * WW * 0.74);
  g.fillText('CBD SKIN CARE', cx, H * 0.484);
  // the product name and the strength: 700 weight, +0.03em tracking, and a soft 1-screen-px under-stroke in sage-900
  // at 20 % (≈ 12 canvas px at the 1440 framing) under each glyph, so the strokes survive the mip-minification
  const name = (txt, wFrac, y, track = 0.03) => {
    const f = fit(txt, (sz) => `700 ${sz}px Philosopher, Georgia, serif`, F * WW * wFrac);
    g.font = f;
    const px = parseFloat(f.slice(4));
    if ('letterSpacing' in g) { g.letterSpacing = `${(px * track).toFixed(1)}px`; g.font = f; }
    g.save();
    g.lineJoin = 'round'; g.strokeStyle = 'rgba(40,64,59,0.2)'; g.lineWidth = 12 * W / 4096;
    g.strokeText(txt, cx, y);
    g.restore();
    g.fillText(txt, cx, y);
    if ('letterSpacing' in g) g.letterSpacing = '0px';
  };
  name('CBD SKIN OIL', 0.94, H * 0.552);
  name('1000 mg', 0.46, H * 0.62, 0.07);           // (a little more air between the digits: the '1' never merges into a 'K')

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
  for (let i = 0; i < 12000; i++) {
    const x = rr() * W, y = rr() * H, a = rr() * 0.08;
    g.fillStyle = rr() > 0.5 ? `rgba(255,255,255,${a})` : `rgba(0,0,0,${a})`;
    g.fillRect(x, y, (1 + rr() * 3) * SC, (1 + rr() * 1.5) * SC);
  }
  g.globalCompositeOperation = 'source-over';
  sharpen(g, Math.round(cx - F * 0.62), Math.round(H * 0.04), Math.round(F * 1.24), Math.round(H * 0.94), 0.55);
  return c;
}

// light unsharp mask (3×3 box blur, amount k) over the readable front of the label, so the small print survives the
// minification at 1440 px (the texture is mip-mapped and the front face is drawn ≈ 1/7 of its canvas size)
function sharpen(g, x, y, w, h, k) {
  const d = g.getImageData(x, y, w, h), s = d.data, o = new Uint8ClampedArray(s);
  const row = w * 4;
  for (let j = 1; j < h - 1; j++) {
    for (let i = 1; i < w - 1; i++) {
      const p = j * row + i * 4;
      for (let ch = 0; ch < 3; ch++) {
        const q = p + ch;
        const blur = (s[q - row - 4] + s[q - row] + s[q - row + 4] + s[q - 4] + s[q] + s[q + 4] + s[q + row - 4] + s[q + row] + s[q + row + 4]) / 9;
        o[q] = s[q] + (s[q] - blur) * k;
      }
    }
  }
  d.data.set(o);
  g.putImageData(d, x, y);
}

// Roughness (G) + metalness (B) map: matte paper, slightly glossier white print, and the satin logo
// print (roughness ≈ 0.32) that catches the key light as the bottle turns
export function labelRoughness(labelCanvas) {
  const W = 2048, H = Math.round(2048 * labelCanvas.height / labelCanvas.width);
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const g = c.getContext('2d');
  g.drawImage(labelCanvas, 0, 0, W, H);
  const d = g.getImageData(0, 0, W, H); const p = d.data;
  let f = null;
  if (labelCanvas.foil) {
    const fc = document.createElement('canvas'); fc.width = W; fc.height = H;
    const fg = fc.getContext('2d'); fg.drawImage(labelCanvas.foil, 0, 0, W, H);
    f = fg.getImageData(0, 0, W, H).data;
  }
  for (let i = 0; i < p.length; i += 4) {
    const lum = (p[i] + p[i + 1] + p[i + 2]) / 3;
    const ink = Math.max(0, (lum - 200) / 55);           // near-white print
    const fo = f ? f[i + 3] / 255 : 0;                   // foil coverage
    const rough = (205 - ink * 95) * (1 - fo) + 82 * fo; // paper ≈ 0.8, ink ≈ 0.43, logo print ≈ 0.32 (satin)
    p[i] = 0; p[i + 1] = rough; p[i + 2] = 0;            // G = roughness, B = metalness (none: a dielectric print)
  }
  g.putImageData(d, 0, 0);
  return c;
}

// Emissive mask for the logo print: black paper, the mark + wordmark in white (a small lift in the shader keeps the
// brand mark the brightest element on the label in the warm, low-key room, as on the real bottle)
export function labelGlow(labelCanvas) {
  const W = 2048, H = Math.round(2048 * labelCanvas.height / labelCanvas.width);
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const g = c.getContext('2d');
  g.fillStyle = '#000'; g.fillRect(0, 0, W, H);
  if (labelCanvas.foil) g.drawImage(labelCanvas.foil, 0, 0, W, H);
  return c;
}
