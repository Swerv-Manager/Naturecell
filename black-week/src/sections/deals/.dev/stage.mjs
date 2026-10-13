// Dev-only: stage interaction states of the deals section and capture frames.
// node src/sections/deals/.dev/stage.mjs <outDir> [mobile]
import { chromium } from 'playwright';
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../../../..');
const out = path.resolve(process.argv[2] || 'shots/deals/states'); fs.mkdirSync(out, { recursive: true });
const mobile = process.argv.includes('mobile');
const T = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.woff2': 'font/woff2' };
const srv = http.createServer((req, res) => { const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0])); if (!fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'Content-Type': T[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res); }).listen(0);
const page = process.argv.find((a) => a.endsWith('.html')) || 'preview-deals.html';
const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const ctx = await b.newContext(mobile ? { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true } : { viewport: { width: 1440, height: 900 } });
const pg = await ctx.newPage();
pg.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') console.log('[console]', m.type(), m.text()); });
pg.on('pageerror', (e) => console.log('[pageerror]', e.message));
await pg.goto(`http://localhost:${srv.address().port}/dist/${page}?dealsSlow=12`);
await pg.evaluate(() => document.fonts.ready);
const snap = (n) => pg.screenshot({ path: path.join(out, `${mobile ? 'm' : 'd'}-${n}.png`) });
// fake header cart target when previewing alone
await pg.evaluate(() => { if (!document.querySelector('[data-cart]')) { const b = document.createElement('button'); b.setAttribute('data-cart', ''); b.textContent = 'Kurv'; b.style.cssText = 'position:fixed;top:18px;right:24px;z-index:5;width:44px;height:44px;border-radius:50%;border:1px solid #ccc;background:#fff;font-size:10px'; document.body.appendChild(b); } });
await pg.evaluate(() => document.querySelector('.deals-grid').scrollIntoView({ block: 'start' }));
await pg.evaluate(() => window.scrollBy(0, -80));
await pg.waitForTimeout(1600);
// hover tilt
if (!mobile) { const c = await pg.$('.deals-item[data-id="serum"] .deals-card'); const r = await c.boundingBox(); await pg.mouse.move(r.x + r.width * 0.2, r.y + r.height * 0.25, { steps: 12 }); await pg.waitForTimeout(700); await snap('hover'); }
// add to cart flight
const btn = mobile ? '.deals-item[data-id="serum"] [data-add]' : '.deals-item[data-id="day-cream"] [data-add]';
await pg.click(btn);
for (const t of [1500, 5000, 9000]) { await pg.waitForTimeout(t === 1500 ? 1500 : 2500); await snap('fly-' + t); }
await pg.waitForTimeout(6000); await snap('added');
// filter
await pg.mouse.move(5, 5);
await pg.click('.deals-chip[data-filter="face"]');
await pg.waitForTimeout(200); await snap('filter-mid');
await pg.waitForTimeout(1200); await snap('filter-face');
await pg.click('.deals-chip[data-filter="sets"]'); await pg.waitForTimeout(1400); await snap('filter-sets');
await pg.evaluate(() => document.querySelector('.deals-item--gift').scrollIntoView({ block: 'center' })); await pg.waitForTimeout(300); await snap('filter-sets-gift');
await pg.click('.deals-chip[data-filter="body"]'); await pg.waitForTimeout(1400); await snap('filter-body');
await pg.click('.deals-chip[data-filter="all"]'); await pg.waitForTimeout(1400);
// quick view
await pg.evaluate(() => document.querySelector('.deals-item[data-id="skin-oil"]').scrollIntoView({ block: 'center' }));
await pg.waitForTimeout(400);
await pg.click('.deals-item[data-id="skin-oil"] [data-qv]', { force: true });
await pg.waitForTimeout(1100); await snap('qv');
await pg.click('.deals-qv [data-add]'); await pg.waitForTimeout(700); await snap('qv-add');
await pg.waitForTimeout(1200);
await pg.evaluate(() => document.querySelector('.deals-item[data-id="all-day-facial"]').scrollIntoView({ block: 'center' }));
await pg.click('.deals-item[data-id="all-day-facial"] [data-qv]', { force: true }); await pg.waitForTimeout(1100); await snap('qv-set');
await pg.keyboard.press('Escape'); await pg.waitForTimeout(800);
await pg.evaluate(() => document.querySelector('.deals-item[data-id="komplet-pakken"]').scrollIntoView({ block: 'center' })); await pg.waitForTimeout(400);
await pg.click('.deals-item[data-id="komplet-pakken"] [data-add]'); await pg.waitForTimeout(2600); await snap('fly-set');
await pg.waitForTimeout(9000);
console.log('subtotal', await pg.evaluate(() => window.NCBW.ctx.store.subtotal()));
await b.close(); srv.close();
