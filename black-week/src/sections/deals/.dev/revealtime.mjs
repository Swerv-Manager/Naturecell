// Dev-only: jump the full page to the deals grid and time how long until the grid's reveal fires.
import { chromium } from 'playwright';
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../../../..');
const srv = http.createServer((req, res) => { const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0])); if (!fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); } const e = path.extname(p); res.writeHead(200, { 'Content-Type': { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.woff2': 'font/woff2' }[e] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res); }).listen(0);
const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const pg = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await pg.goto(`http://localhost:${srv.address().port}/dist/${process.env.PAGE || 'index.html'}`, { waitUntil: 'domcontentloaded', timeout: 90000 });
await pg.waitForTimeout(+(process.env.WAIT || 4000));
if (process.env.KILL) await pg.evaluate((k) => k.split(',').forEach((id) => document.querySelector(`[data-section="${id}"]`)?.remove()), process.env.KILL);
await pg.waitForTimeout(500);
const cdp = await pg.context().newCDPSession(pg); await cdp.send('Profiler.enable'); await cdp.send('Profiler.setSamplingInterval', { interval: 1000 }); await cdp.send('Profiler.start');
const t0 = Date.now();
await pg.evaluate(() => window.scrollTo(0, 2000));
for (let i = 0; i < 40; i++) {
  const r = await pg.evaluate(() => [document.querySelector('[data-deals-grid]').classList.contains('is-in'), document.querySelector('.deals-head__text').classList.contains('is-in')]);
  if (r[0]) { console.log('grid in after', Date.now() - t0, 'ms', r); break; }
  await pg.waitForTimeout(100);
}
const { profile } = await cdp.send('Profiler.stop');
const self = {}; const byId = new Map(profile.nodes.map((n) => [n.id, n]));
const dt = profile.timeDeltas; profile.samples.forEach((id, i) => { const n = byId.get(id); const k = `${n.callFrame.functionName || '(anon)'} ${n.callFrame.url.split('/').slice(-2).join('/')}:${n.callFrame.lineNumber}`; self[k] = (self[k] || 0) + (dt[i] || 0) / 1000; });
console.log(Object.entries(self).sort((a, b) => b[1] - a[1]).slice(0, 15).map(([k, v]) => `${v.toFixed(0).padStart(7)}ms ${k}`).join('\n'));
await b.close(); srv.close();
