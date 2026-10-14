// Dev-only: print the light beams' geometry for a card (debug).
import { chromium } from 'playwright';
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../../../..');
const srv = http.createServer((req, res) => { const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0])); if (!fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); } const e = path.extname(p); res.writeHead(200, { 'Content-Type': { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.woff2': 'font/woff2' }[e] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res); }).listen(0);
const b = await chromium.launch();
const pg = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await pg.goto(`http://localhost:${srv.address().port}/dist/preview-deals.html`);
await pg.waitForTimeout(3000);
if (process.env.CSS) await pg.addStyleTag({ content: process.env.CSS });
await pg.evaluate(() => document.querySelector('.deals-item[data-id="skin-oil"]').scrollIntoView({ block: 'center' }));
await pg.waitForTimeout(1500);
await (await pg.$('.deals-item[data-id="skin-oil"] [data-stage]')).screenshot({ path: process.env.OUT || '/tmp/x.png' });
console.log(JSON.stringify(await pg.evaluate((id) => {
  const pk = document.querySelector(`.deals-item[data-id="${id}"] .deals-prod`);
  return [...pk.querySelectorAll('.deals-gloss')].map((g) => { const r = g.getBoundingClientRect(); const bm = g.querySelector('.deals-beam'); const q = bm && bm.getBoundingClientRect(); const cs = getComputedStyle(g); return { cls: g.className, g: [r.left, r.width, r.top, r.height].map(Math.round), beam: q && [q.left, q.width].map(Math.round), tf: bm && bm.style.transform, op: cs.opacity, bg: bm && getComputedStyle(bm).backgroundImage.slice(0, 120) }; });
}, process.argv[2] || 'skin-oil'), null, 1));
await b.close(); srv.close();
