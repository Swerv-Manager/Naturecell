// Dev-only: evaluate an expression file against the preview at a width. node probe.mjs <width> <jsfile>
import { chromium } from 'playwright';
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../../../..');
const W = +(process.argv[2] || 1440); const code = fs.readFileSync(process.argv[3], 'utf8');
const T = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.woff2': 'font/woff2' };
const srv = http.createServer((req, res) => { const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0])); if (!fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'Content-Type': T[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res); }).listen(0);
const b = await chromium.launch();
const pg = await (await b.newContext({ viewport: { width: W, height: 900 }, isMobile: W < 700, hasTouch: W < 700, deviceScaleFactor: 1 })).newPage();
pg.on('pageerror', (e) => console.log('[pageerror]', e.message));
pg.on('console', (m) => { if (m.type() === 'error') console.log('[console]', m.text()); });
await pg.goto(`http://localhost:${srv.address().port}/dist/preview-deals.html`);
await pg.evaluate(() => document.fonts.ready);
await pg.evaluate(() => document.querySelector('[data-deals-grid]').scrollIntoView());
await pg.waitForTimeout(2500);
console.log(JSON.stringify(await pg.evaluate(code), null, 1));
await b.close(); srv.close();
