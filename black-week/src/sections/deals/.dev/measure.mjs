// Dev-only: print geometry of the deals grid (floors, gift tile blocks) at a viewport width.
// node src/sections/deals/.dev/measure.mjs [width]
import { chromium } from 'playwright';
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../../../..');
const W = +(process.argv[2] || 1440);
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
const r = await pg.evaluate(() => {
  const g = document.querySelector('.deals-item--gift');
  const gt = g.getBoundingClientRect().top;
  const rel = (s, el = g) => { const e = el.querySelector(s); if (!e) return null; const q = e.getBoundingClientRect(); return [Math.round(q.top - gt), Math.round(q.bottom - gt), Math.round(q.left), Math.round(q.width)]; };
  const out = { gift: { h: Math.round(g.getBoundingClientRect().height), gfl: g.style.getPropertyValue('--gfl') } };
  ['.deals-gift__art', '.deals-gift__pack', '.deals-prod__shadow', '.deals-tag', '.deals-gift__head', '.deals-gift__copy', '.deals-gift__meter', '.deals-gift__status', '.deals-gift__cta'].forEach((s) => { out.gift[s] = rel(s); });
  out.rows = [...document.querySelectorAll('.deals-item:not(.deals-item--gift)')].map((li) => { const t = li.getBoundingClientRect().top; const l = li.querySelector('.deals-line').getBoundingClientRect(); const st = li.querySelector('.deals-card__stage').getBoundingClientRect(); const pr = li.querySelector('.deals-price').getBoundingClientRect(); return [li.dataset.id, Math.round(t - gt), 'floor', Math.round(l.bottom - t), 'stage', Math.round(st.height), 'price', Math.round(pr.top - t), 'h', Math.round(li.getBoundingClientRect().height), li.hasAttribute('data-claim2') ? 'claim2' : '']; });
  return out;
});
console.log(JSON.stringify(r, null, 1));
await b.close(); srv.close();
