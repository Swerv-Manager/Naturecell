// Dev-only: hover a card at several x positions (fraction of the card) and capture its stage at 1x.
// node src/sections/deals/.dev/hover.mjs <outDir> <id> 0.3,0.5,0.7
import { chromium } from 'playwright';
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../../../..');
const out = path.resolve(process.argv[2] || 'shots/deals/hover'); fs.mkdirSync(out, { recursive: true });
const id = process.argv[3] || 'skin-oil';
const xs = (process.argv[4] || '0.3,0.5,0.7').split(',').map(Number);
const T = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.woff2': 'font/woff2' };
const srv = http.createServer((req, res) => { const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0])); if (!fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'Content-Type': T[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res); }).listen(0);
const b = await chromium.launch();
const pg = await (await b.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: +(process.env.DPR || 1) })).newPage();
pg.on('pageerror', (e) => console.log('[pageerror]', e.message));
pg.on('console', (m) => { if (m.type() === 'error') console.log('[console]', m.text()); });
await pg.goto(`http://localhost:${srv.address().port}/dist/preview-deals.html`);
await pg.evaluate(() => document.fonts.ready);
const card = `.deals-item[data-id="${id}"] .deals-card`;
await pg.evaluate((s) => document.querySelector(s).scrollIntoView({ block: 'center' }), card);
await pg.waitForTimeout(3800);
const r = await (await pg.$(card)).boundingBox();
for (const x of xs) {
  await pg.mouse.move(r.x + r.width * x, r.y + r.height * 0.3, { steps: 6 });
  await pg.waitForTimeout(900);
  await pg.screenshot({ path: path.join(out, `${id}-${x}.png`), clip: { x: r.x - 20, y: r.y - 20, width: r.width + 40, height: r.height * 0.62 } });
}
await b.close(); srv.close();
