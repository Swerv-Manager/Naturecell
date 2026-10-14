// Dev-only: capture the section at intermediate widths. node src/sections/deals/.dev/widths.mjs <outDir> 1024,820
import { chromium } from 'playwright';
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../../../..');
const out = path.resolve(process.argv[2] || 'shots/deals/widths'); fs.mkdirSync(out, { recursive: true });
const T = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.woff2': 'font/woff2' };
const srv = http.createServer((req, res) => { const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0])); if (!fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'Content-Type': T[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res); }).listen(0);
const b = await chromium.launch();
for (const w of (process.argv[3] || '1024,820').split(',').map(Number)) {
  const pg = await (await b.newContext({ viewport: { width: w, height: 900 } })).newPage();
  pg.on('pageerror', (e) => console.log('[pageerror]', e.message));
  pg.on('console', (m) => { if (m.type() === 'error') console.log('[console]', m.text()); });
  await pg.goto(`http://localhost:${srv.address().port}/dist/preview-deals.html`);
  await pg.evaluate(() => document.fonts.ready);
  await pg.evaluate(() => document.querySelector('[data-section="deals"]').scrollIntoView());
  await pg.waitForTimeout(2500);
  const sw = await pg.evaluate(() => document.documentElement.scrollWidth);
  console.log(w, 'scrollWidth', sw);
  await (await pg.$('[data-section="deals"]')).screenshot({ path: path.join(out, `w${w}.png`) });
}
await b.close(); srv.close();
