// Screenshot a built page with WebGL enabled (SwiftShader).
// node tools/shoot.mjs <page.html under dist/ | path from project root e.g. bench/index.html> <outDir> [--wait ms] [--full] [--mobile-only|--desktop-only] [--hover selector] [--scroll px] [--frames n]
// Writes <outDir>/desktop.png (1440x900 viewport), desktop-full.png (full page if --full), mobile.png (390x844), mobile-full.png,
// --el <selector> also writes <tag>-el.png (element screenshot, full element height); --query 'a=b' appends a query string; --click <selector> clicks before capture;
// and with --frames n: desktop-f1.png.. spaced 600ms apart (to judge motion). Prints console errors.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';

const ROOT = '/home/user/Naturecell/black-week';
const a = process.argv.slice(2);
const page = a[0]; const out = path.resolve(a[1] || 'shots');
const opt = (k, d) => (a.includes(k) ? a[a.indexOf(k) + 1] : d);
const wait = +opt('--wait', 2500), frames = +opt('--frames', 0), hover = opt('--hover', null), scroll = +opt('--scroll', 0);
const full = a.includes('--full');
const el = opt('--el', null), query = opt('--query', ''), clickSel = opt('--click', null);
fs.mkdirSync(out, { recursive: true });
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.json': 'application/json', '.woff2': 'font/woff2', '.hdr': 'application/octet-stream', '.glb': 'model/gltf-binary' };
const srv = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]));
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': types[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
}).listen(0);
const port = srv.address().port;
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const targets = [];
if (!a.includes('--mobile-only')) targets.push(['desktop', { width: 1440, height: 900 }, 1]);
if (!a.includes('--desktop-only')) targets.push(['mobile', { width: 390, height: 844 }, 2]);
for (const [tag, vp, dpr] of targets) {
  const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: dpr, isMobile: tag === 'mobile', hasTouch: tag === 'mobile' });
  const pg = await ctx.newPage();
  pg.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') console.log(`[${tag} ${m.type()}]`, m.text()); });
  pg.on('pageerror', e => console.log(`[${tag} pageerror]`, e.message));
  await pg.goto(`http://localhost:${port}/${page.includes('/') ? page : 'dist/' + page}${query ? '?' + query : ''}`, { waitUntil: 'load', timeout: 180000 });
  await pg.evaluate(() => document.fonts && document.fonts.ready);
  if (scroll) await pg.evaluate(y => window.scrollTo(0, y), scroll);
  await pg.mouse.move(vp.width * 0.62, vp.height * 0.45);
  await pg.waitForTimeout(wait);
  if (hover) { try { await pg.hover(hover, { timeout: 2000 }); await pg.waitForTimeout(700); } catch (e) { console.log('hover failed', e.message); } }
  if (clickSel) { try { await pg.click(clickSel, { timeout: 2000 }); await pg.waitForTimeout(900); } catch (e) { console.log('click failed', e.message); } }
  if (el) { const h = await pg.$(el); if (!h) console.log('element not found', el); else { await h.scrollIntoViewIfNeeded(); await pg.waitForTimeout(wait); await h.screenshot({ path: path.join(out, `${tag}-el.png`) }); } }
  await pg.screenshot({ path: path.join(out, `${tag}.png`) });
  for (let i = 1; i <= frames; i++) { await pg.mouse.move(vp.width * (0.3 + 0.1 * i), vp.height * (0.3 + 0.05 * i), { steps: 8 }); await pg.waitForTimeout(600); await pg.screenshot({ path: path.join(out, `${tag}-f${i}.png`) }); }
  if (full) {
    // scroll through so reveal-on-scroll content is triggered, then capture
    const h = await pg.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < h; y += vp.height * 0.7) { await pg.evaluate(yy => window.scrollTo(0, yy), y); await pg.waitForTimeout(250); }
    await pg.evaluate(() => window.scrollTo(0, 0)); await pg.waitForTimeout(800);
    await pg.screenshot({ path: path.join(out, `${tag}-full.png`), fullPage: true, timeout: 240000 });
  }
  await ctx.close();
}
await browser.close(); srv.close();
console.log('shots in', out);
