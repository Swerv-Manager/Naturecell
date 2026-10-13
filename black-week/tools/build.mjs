// Build: node tools/build.mjs            -> dist/index.html (all sections in sections.json order)
//        node tools/build.mjs --only ID  -> dist/preview-ID.html (core + that one section only)
// Output pages reference ../assets/* (dist/ sits next to assets/).
import fs from 'node:fs';
import path from 'node:path';
import * as esbuild from 'esbuild';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const args = process.argv.slice(2);
const only = args.includes('--only') ? args[args.indexOf('--only') + 1] : null;
const order = JSON.parse(fs.readFileSync(path.join(ROOT, 'sections.json'), 'utf8')).order;
const ids = only ? [only] : order;
const name = only ? `preview-${only}` : 'index';
const dist = path.join(ROOT, 'dist');
const tmp = path.join(ROOT, '.build');
fs.mkdirSync(dist, { recursive: true });
fs.mkdirSync(tmp, { recursive: true });

const read = (p) => (fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : '');
const secDir = (id) => path.join(ROOT, 'src/sections', id);

// CSS: core first, then sections in order
const coreCss = fs.readdirSync(path.join(ROOT, 'src/core')).filter(f => f.endsWith('.css')).sort()
  .map(f => `/* core/${f} */\n` + read(path.join(ROOT, 'src/core', f))).join('\n');
const secCss = ids.map(id => `/* section ${id} */\n` + read(path.join(secDir(id), `${id}.css`))).join('\n');
fs.writeFileSync(path.join(dist, `${name}.css`), coreCss + '\n' + secCss);

// JS entry
const imports = ids.filter(id => fs.existsSync(path.join(secDir(id), `${id}.js`)))
  .map((id, i) => `import s${i} from ${JSON.stringify(path.join(secDir(id), `${id}.js`))};\nreg(${JSON.stringify(id)}, s${i});`).join('\n');
const entry = `import { boot, reg } from ${JSON.stringify(path.join(ROOT, 'src/core/core.js'))};\n${imports}\nboot();\n`;
const entryPath = path.join(tmp, `entry-${name}.js`);
fs.writeFileSync(entryPath, entry);
await esbuild.build({ entryPoints: [entryPath], bundle: true, format: 'iife', minify: !!process.env.MINIFY, sourcemap: false,
  outfile: path.join(dist, `${name}.js`), target: 'es2020', logLevel: 'warning', loader: { '.glsl': 'text', '.frag': 'text', '.vert': 'text' } });

// HTML
const tpl = read(path.join(ROOT, 'src/index.template.html'));
const body = ids.map(id => read(path.join(secDir(id), `${id}.html`))).join('\n');
const html = tpl.replaceAll('{{NAME}}', name).replace('<!--SECTIONS-->', body);
fs.writeFileSync(path.join(dist, `${name}.html`), html);
console.log(`built dist/${name}.html (${ids.join(', ')})`);
