// Dev-only: scroll the full page like shoot.mjs --full, then report the deals grid's reveal state.
import { chromium } from 'playwright';
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../../../..');
const T = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.woff2': 'font/woff2', '.jpg': 'image/jpeg', '.mp4': 'video/mp4' };
const srv = http.createServer((req, res) => { const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0])); if (!fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'Content-Type': T[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res); }).listen(0);
const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const pg = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
pg.on('pageerror', (e) => console.log('[pageerror]', e.message));
pg.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') console.log('[console]', m.text()); });
await pg.goto(`http://localhost:${srv.address().port}/dist/index.html`, { waitUntil: 'domcontentloaded', timeout: 90000 });
await pg.waitForTimeout(2500);
const st = () => pg.evaluate(() => { const g = document.querySelector('[data-deals-grid]'); const r = g.getBoundingClientRect(); return { cls: g.className, top: Math.round(r.top + scrollY), h: Math.round(r.height), op: getComputedStyle(g.querySelector('.deals-item')).opacity, head: getComputedStyle(document.querySelector('.deals-head__text')).opacity, sy: scrollY }; });
console.log(await st());
const h = await pg.evaluate(() => document.documentElement.scrollHeight);
for (let y = 0; y < h; y += 630) { await pg.evaluate((yy) => window.scrollTo(0, yy), y); await pg.waitForTimeout(250); if (Math.abs(y - 3000) < 700) console.log(y, await st()); }
await pg.evaluate(() => window.scrollTo(0, 0)); await pg.waitForTimeout(800); console.log(await st()); await pg.evaluate(() => window.scrollTo(0, 2400)); for (let i = 0; i < 6; i++) { await pg.waitForTimeout(1500); console.log('t', i, await st(), await pg.evaluate(() => new Promise((r) => { const t = performance.now(); requestAnimationFrame(() => r(Math.round(performance.now() - t))); }))); }
console.log(await st());
await b.close(); srv.close();
