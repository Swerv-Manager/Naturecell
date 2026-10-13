import sharp from 'sharp';
import fs from 'node:fs';
const dir = '/home/user/Naturecell/black-week/assets/products';
fs.mkdirSync('/home/user/Naturecell/black-week/assets/products-png', { recursive: true });
for (const f of fs.readdirSync(dir)) {
  const p = `${dir}/${f}`; const m = await sharp(p).metadata();
  const st = await sharp(p).stats();
  const buf = await sharp(p).resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true }).webp({ quality: 84, alphaQuality: 90 }).toBuffer();
  fs.writeFileSync(p, buf);
  await sharp(buf).resize({ width: 600 }).png().toFile(`/home/user/Naturecell/black-week/assets/products-png/${f.replace('.webp', '.png')}`);
  console.log(f, m.width + 'x' + m.height, 'alpha:', m.hasAlpha, 'opaque:', st.isOpaque, '->', (buf.length / 1024 | 0) + 'KB');
}
