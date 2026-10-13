import { chromium } from 'playwright';
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../../../..');
const T = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.woff2': 'font/woff2' };
const srv = http.createServer((req, res) => { const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0])); if (!fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'Content-Type': T[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res); }).listen(0);
const b = await chromium.launch(); const pg = await b.newPage({ viewport: { width: 1440, height: 900 } });
await pg.goto(`http://localhost:${srv.address().port}/dist/preview-deals.html`); await pg.waitForTimeout(800);
for (const id of ['skin-oil','all-day-facial','serum']) {
await pg.click(`.deals-item[data-id="${id}"] [data-qv]`, { force: true }); await pg.waitForTimeout(1500);
console.log(await pg.evaluate(() => { const st = document.querySelector('.deals-qv__stage'); const pr = st.querySelector('.deals-prod'); const im = pr.querySelector('img'); const r = (e) => { const x = e.getBoundingClientRect(); return [x.x, x.y, x.width, x.height].map(Math.round); }; return { stage: r(st), prod: r(pr), img: r(im), cs: getComputedStyle(pr).height, ar: getComputedStyle(pr).getPropertyValue('--ar'), ph: getComputedStyle(pr).getPropertyValue('--ph'), fill: getComputedStyle(pr).getPropertyValue('--fill'), cls: pr.className, op: getComputedStyle(pr).opacity, nat: im.naturalWidth, complete: im.complete }; }));
await pg.keyboard.press('Escape'); await pg.waitForTimeout(600); }
await b.close(); srv.close();
