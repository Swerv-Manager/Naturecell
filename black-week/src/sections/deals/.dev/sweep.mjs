// Dev-only: capture the "shelf light" pass that runs when the grid arrives.
import { chromium } from 'playwright';
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../../../..');
const out = path.resolve(process.argv[2] || 'shots/deals/sweep'); fs.mkdirSync(out, { recursive: true });
const T = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.woff2': 'font/woff2' };
const srv = http.createServer((req, res) => { const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0])); if (!fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'Content-Type': T[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res); }).listen(0);
const b = await chromium.launch();
const pg = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
pg.on('pageerror', (e) => console.log('[pageerror]', e.message));
await pg.goto(`http://localhost:${srv.address().port}/dist/preview-deals.html`);
await pg.evaluate(() => document.fonts.ready);
// the grid is already on screen in the preview → reveal + sweep start at load; sample frames
const t0 = Date.now();
for (const t of [900, 1300, 1700, 2100, 2500]) { await pg.waitForTimeout(Math.max(0, t - (Date.now() - t0))); await pg.screenshot({ path: path.join(out, `t${t}.png`), clip: { x: 0, y: 250, width: 1440, height: 540 } }); }
await b.close(); srv.close();
