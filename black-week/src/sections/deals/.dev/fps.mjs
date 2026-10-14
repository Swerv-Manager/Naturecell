// Dev-only: measure frame rate with the deals grid in view (page: preview-deals.html or index.html), optional scrollY.
import { chromium } from 'playwright';
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../../../..');
const page = process.argv[2] || 'preview-deals.html';
const srv = http.createServer((req, res) => { const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0])); if (!fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); } const e = path.extname(p); res.writeHead(200, { 'Content-Type': { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.woff2': 'font/woff2' }[e] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res); }).listen(0);
const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const pg = await (await b.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: process.env.RM ? 'reduce' : 'no-preference' })).newPage();
await pg.goto(`http://localhost:${srv.address().port}/dist/${page}`, { waitUntil: 'domcontentloaded', timeout: 90000 });
await pg.waitForTimeout(3000);
if (process.env.CSS) await pg.addStyleTag({ content: process.env.CSS });
await pg.evaluate(() => document.querySelector('[data-deals-grid]').scrollIntoView());
await pg.waitForTimeout(3000);
const cdp = await pg.context().newCDPSession(pg); await cdp.send('Performance.enable');
const met = async () => Object.fromEntries((await cdp.send('Performance.getMetrics')).metrics.map((m) => [m.name, m.value]));
for (const off of [0, 1]) {
  const m0 = await met();
  if (off) await pg.evaluate(() => { window.__off = 1; document.querySelector('[data-section="deals"]').style.display = 'none'; });
  const r = await pg.evaluate(() => new Promise((res) => { let n = 0; const t0 = performance.now(); const f = () => { n++; if (performance.now() - t0 < 2000) requestAnimationFrame(f); else res(n / ((performance.now() - t0) / 1000)); }; requestAnimationFrame(f); }));
  const m1 = await met(); const d = (k) => +(m1[k] - m0[k]).toFixed(3);
  console.log(off ? 'deals hidden' : 'deals in view', r.toFixed(1), 'fps', JSON.stringify({ layout: d('LayoutCount'), layoutS: d('LayoutDuration'), style: d('RecalcStyleCount'), styleS: d('RecalcStyleDuration'), script: d('ScriptDuration'), task: d('TaskDuration') }));
}
await b.close(); srv.close();
