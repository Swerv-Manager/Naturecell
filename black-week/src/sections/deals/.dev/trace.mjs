// Dev-only: 2 s trace with the grid in view; summarise paint / raster / composite work.
import { chromium } from 'playwright';
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../../../..');
const srv = http.createServer((req, res) => { const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0])); if (!fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); } const e = path.extname(p); res.writeHead(200, { 'Content-Type': { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.woff2': 'font/woff2' }[e] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res); }).listen(0);
const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const pg = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await pg.goto(`http://localhost:${srv.address().port}/dist/${process.env.PAGE || 'preview-deals.html'}`, { waitUntil: 'domcontentloaded', timeout: 90000 });
await pg.waitForTimeout(2000);
if (process.env.CSS) await pg.addStyleTag({ content: process.env.CSS });
await pg.evaluate(() => document.querySelector('[data-deals-grid]').scrollIntoView());
await pg.waitForTimeout(4000);
const out = '/tmp/claude-0/-home-user-Naturecell/30b0339b-bb75-5db9-a588-b9fb9d26e177/scratchpad/d9/trace.json';
await b.startTracing(pg, { path: out, categories: ['devtools.timeline', 'disabled-by-default-devtools.timeline', 'disabled-by-default-devtools.timeline.invalidationTracking', 'cc', 'viz', 'gpu', 'skia'] });
await pg.waitForTimeout(2000);
await b.stopTracing();
const ev = JSON.parse(fs.readFileSync(out, 'utf8')).traceEvents;
const agg = {};
for (const e of ev) { if (e.ph !== 'X' || !e.dur) continue; const k = e.name; agg[k] = agg[k] || [0, 0]; agg[k][0]++; agg[k][1] += e.dur / 1000; }
console.log(Object.entries(agg).sort((a, b) => b[1][1] - a[1][1]).slice(0, 25).map(([k, [n, ms]]) => `${k.padEnd(48)} ${String(n).padStart(5)} ${ms.toFixed(0).padStart(7)}ms`).join('\n'));
const inv = {};
for (const e of ev) { if (!/Invalidation/.test(e.name)) continue; const d = (e.args && e.args.data) || {}; const k = `${e.name} | ${d.nodeName || ''} | ${d.reason || ''}`; inv[k] = (inv[k] || 0) + 1; }
console.log(Object.entries(inv).sort((a, b) => b[1] - a[1]).slice(0, 30).map(([k, n]) => `${String(n).padStart(5)} ${k}`).join('\n'));
await b.close(); srv.close();
