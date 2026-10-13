// Port the built page (dist/index.html + .css + .js) into a Design-canvas project:
//   canvas/project/canvas.json, Main.dc.html (desktop 1440), Mobile.dc.html (390), bw/app.css, bw/app.js, assets/…
// Usage: MINIFY=1 node tools/build.mjs && node tools/port-canvas.mjs <desktopHeight> <mobileHeight>
import fs from 'node:fs';
import path from 'node:path';
import { parseFragment, serialize } from 'parse5';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const OUT = path.join(ROOT, 'canvas');
const P = path.join(OUT, 'project');
const [dH = 9000, mH = 14000] = process.argv.slice(2).map(Number);
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(path.join(P, 'bw'), { recursive: true });

const html = fs.readFileSync(path.join(ROOT, 'dist/index.html'), 'utf8');
let body = html.slice(html.indexOf('<body>') + 6, html.lastIndexOf('<script src="index.js">'));
body = serialize(parseFragment(body))            // quoted attributes, every element closed
  .replaceAll('../assets/', 'assets/').replaceAll('../src/sections/', 'src/sections/')
  .replace(/\{\{/g, '{ {');                       // never let page copy look like a template hole
const css = fs.readFileSync(path.join(ROOT, 'dist/index.css'), 'utf8')
  // on the canvas 100vh = the frame height (the whole page), so viewport-height units become px for the board
  + `\n/* canvas: vh units are the full frame height there – pin the hero to a real screen height */\n`
  + `@media (max-width: 760px) { html.nc-canvas [data-section="hero"] { min-height: var(--nc-canvas-vh, 780px) !important; } }\n`;
fs.writeFileSync(path.join(P, 'bw/app.css'), css);
// section-local images: JS/HTML resolve them against the document (project/), CSS against bw/ (../src/ is fine)
fs.writeFileSync(path.join(P, 'bw/app.js'), fs.readFileSync(path.join(ROOT, 'dist/index.js'), 'utf8').replaceAll('../src/sections/', 'src/sections/'));
for (const sec of fs.readdirSync(path.join(ROOT, 'src/sections'))) {
  const walkImg = (d) => { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); if (fs.statSync(p).isDirectory()) { if (!f.startsWith('.')) walkImg(p); }
    else if (/\.(webp|png|svg|jpg|woff2|webm|mp4)$/.test(f)) { const rel = path.relative(ROOT, p); fs.mkdirSync(path.dirname(path.join(P, rel)), { recursive: true }); fs.copyFileSync(p, path.join(P, rel)); } } };
  walkImg(path.join(ROOT, 'src/sections', sec));
}

// assets referenced anywhere in markup/css/js
const used = new Set();
const scan = (s) => { for (const m of s.matchAll(/assets\/([A-Za-z0-9_\-./]+\.(?:webp|png|svg|woff2|jpg|mp4))/g)) used.add(m[1]); };
scan(body); scan(css.replaceAll('../assets/', 'assets/'));
const js = fs.readFileSync(path.join(P, 'bw/app.js'), 'utf8');
for (const m of js.matchAll(/["'`]((?:products|badges|icons|seals|extra|fonts|logo|theme)[A-Za-z0-9_\-./]*\.(?:webp|png|svg|woff2|jpg|mp4))/g)) used.add(m[1]);
// data-driven paths: include every product image + logos + badges + icons + seals + fonts to be safe
for (const d of ['products', 'badges', 'icons', 'seals', 'fonts', 'extra', 'theme']) for (const f of fs.readdirSync(path.join(ROOT, 'assets', d))) used.add(`${d}/${f}`);
for (const f of fs.readdirSync(path.join(ROOT, 'assets'))) if (f.endsWith('.svg')) used.add(f);
for (const u of used) {
  const src = path.join(ROOT, 'assets', u);
  if (!fs.existsSync(src)) { console.warn('missing asset', u); continue; }
  fs.mkdirSync(path.dirname(path.join(P, 'assets', u)), { recursive: true });
  fs.copyFileSync(src, path.join(P, 'assets', u));
}

const board = (title, w, h) => `<!doctype html>
<html lang="da">
<head>
<meta charset="utf-8">
<title>${title}</title>
<script src="./support.js"></script>
<link rel="stylesheet" href="bw/app.css">
<script src="bw/app.js"></script>
</head>
<body>
<x-dc>
<helmet>
<style>
body{margin:0}
a{color:#3e5d58}a:hover{color:#28403b}
</style>
</helmet>
<div class="nc-page" style="width: 100%; min-height: ${h}px; background: #f6f4ee;">
${body}
</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":${w},"height":${h}}}'>
class Component extends DCLogic {
  componentDidMount() {
    document.documentElement.classList.add('nc-canvas');
    document.documentElement.style.setProperty('--nc-canvas-vh', ${w < 600 ? 780 : 900} + 'px');
    if (window.NCBW) window.NCBW.run();
  }
  renderVals() { return {}; }
}
</script>
</body>
</html>
`;
fs.writeFileSync(path.join(P, 'Main.dc.html'), board('NatureCell Black Week – desktop', 1440, dH));
fs.writeFileSync(path.join(P, 'Mobile.dc.html'), board('NatureCell Black Week – mobil', 390, mH));
const files = [];
const walk = (d) => { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); fs.statSync(p).isDirectory() ? walk(p) : files.push(path.relative(OUT, p)); } };
walk(P);
fs.writeFileSync(path.join(OUT, 'files.json'), JSON.stringify(files, null, 1));
console.log(`canvas: ${files.length} files, ${(files.reduce((s, f) => s + fs.statSync(path.join(OUT, f)).size, 0) / 1e6).toFixed(1)} MB; body ${(body.length / 1024) | 0} KB`);
