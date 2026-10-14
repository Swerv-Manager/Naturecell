// Dev-only: capture a card's stage N times (interval ms) at rest, to judge the ambient window light over time.
// node src/sections/deals/.dev/seq.mjs <outDir> <id> <n> <ms>
import { chromium } from 'playwright';
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../../../..');
const [out, id = 'komplet-pakken', n = 8, ms = 500] = process.argv.slice(2); fs.mkdirSync(out, { recursive: true });
const T = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.woff2': 'font/woff2' };
const srv = http.createServer((req, res) => { const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0])); if (!fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'Content-Type': T[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res); }).listen(0);
const b = await chromium.launch();
const pg = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await pg.goto(`http://localhost:${srv.address().port}/dist/preview-deals.html`);
await pg.mouse.move(5, 5);
const sel = `.deals-item[data-id="${id}"] [data-stage]`;
await pg.evaluate((s) => document.querySelector(s).scrollIntoView({ block: 'center' }), sel);
await pg.waitForTimeout(3500);
for (let i = 0; i < +n; i++) {
  const lx = await pg.evaluate((s) => getComputedStyle(document.querySelector(s).closest('.deals-card')).getPropertyValue('--deals-lx'), sel);
  await (await pg.$(sel)).screenshot({ path: path.join(out, `${id}-${i}.png`) });
  console.log(i, lx);
  await pg.waitForTimeout(+ms);
}
await b.close(); srv.close();
