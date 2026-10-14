import { chromium } from 'playwright';
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const ROOT = '/home/user/Naturecell/black-week';
const T = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.woff2': 'font/woff2' };
const srv = http.createServer((req, res) => { const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0])); if (!fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'Content-Type': T[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res); }).listen(0);
const b = await chromium.launch();
const pg = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await pg.goto(`http://localhost:${srv.address().port}/dist/preview-deals.html`);
await pg.evaluate(() => document.querySelector('[data-section="deals"]').scrollIntoView());
for (let i = 0; i < 8; i++) {
  await pg.waitForTimeout(600);
  console.log(await pg.evaluate(() => { const c = document.querySelector('.deals-item[data-id="komplet-pakken"] .deals-card'); const cs = getComputedStyle(c); return [cs.getPropertyValue('--deals-lx'), cs.getPropertyValue('--deals-g'), c.className].join(' | '); }));
}
await b.close(); srv.close();
