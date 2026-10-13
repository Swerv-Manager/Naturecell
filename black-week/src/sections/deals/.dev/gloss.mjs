// Dev-only: freeze the light band at a few positions on a card and capture zoomed crops.
// node src/sections/deals/.dev/gloss.mjs <outDir> [id]
import { chromium } from 'playwright';
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../../../..');
const out = path.resolve(process.argv[2] || 'shots/deals/gloss'); fs.mkdirSync(out, { recursive: true });
const id = process.argv[3] || 'serum';
const T = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.woff2': 'font/woff2' };
const srv = http.createServer((req, res) => { const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0])); if (!fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'Content-Type': T[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res); }).listen(0);
const b = await chromium.launch();
const pg = await (await b.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 })).newPage();
pg.on('pageerror', (e) => console.log('[pageerror]', e.message));
pg.on('console', (m) => { if (m.type() === 'error') console.log('[console]', m.text()); });
await pg.goto(`http://localhost:${srv.address().port}/dist/preview-deals.html`);
await pg.evaluate(() => document.fonts.ready);
const card = `.deals-item[data-id="${id}"] .deals-card`;
await pg.evaluate((s) => document.querySelector(s).scrollIntoView({ block: 'center' }), card);
await pg.waitForTimeout(3500);
for (const lx of (process.argv[4] || "20,50,80").split(",").map(Number)) {
  await pg.evaluate(([s, lx]) => { const c = document.querySelector(s); c.classList.remove('is-sweep'); c.style.setProperty('--h', '1'); c.style.setProperty('--deals-lx', lx + '%'); }, [card, lx]);
  await pg.waitForTimeout(200);
  await (await pg.$(`${card} .deals-card__stage`)).screenshot({ path: path.join(out, `${id}-${lx}.png`) });
}
await b.close(); srv.close();
