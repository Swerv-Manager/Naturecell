# Day cream carton: the silver foil wordmark catches the light and nearly vanishes on the sage carton.
# Re-light the foil the way it reads on the Natcreme carton (dark foil), inside the wordmark area only.
import sys, numpy as np
from PIL import Image, ImageFilter
S = sys.argv[1]
im = Image.open('day-cream-hires.webp').convert('RGBA')
im = im.crop(im.getchannel('A').point(lambda v: 255 if v > 200 else 0).getbbox())
k = 1048 / 2363.0
sm = im.resize((round(im.width * k), round(im.height * k)), Image.LANCZOS)
c = Image.new('RGBA', (1200, 1200), (0, 0, 0, 0))
c.alpha_composite(sm, (609 - round(594 * k), 97))
a = np.array(c).astype(np.float32)
x0, y0, x1, y1 = 630, 205, 852, 385
reg = a[y0:y1, x0:x1, :3]
base = np.array(Image.fromarray(reg.astype(np.uint8)).filter(ImageFilter.MedianFilter(15))).astype(np.float32)
dev = reg - base
mag = np.sqrt((dev ** 2).sum(-1)) / np.sqrt(3)
w = np.clip((mag - 11) / 24, 0, 1); w = np.array(Image.fromarray((w * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.7))).astype(np.float32)[..., None] / 255 * 1.25; w = np.clip(w, 0, 1)
dark = base * 0.42
out = reg * (1 - w) + dark * w
# feather the region edge so no seam
fy = np.minimum(np.arange(y1 - y0), np.arange(y1 - y0)[::-1])[:, None]
fx = np.minimum(np.arange(x1 - x0), np.arange(x1 - x0)[::-1])[None, :]
f = np.clip(np.minimum(fy, fx) / 8, 0, 1)[..., None]
a[y0:y1, x0:x1, :3] = reg * (1 - f) + out * f
c = Image.fromarray(a.clip(0, 255).astype(np.uint8))
c.save(S + 'day-duo.png')
bg = Image.new('RGBA', c.size, (200, 210, 205, 255)); bg.alpha_composite(c)
bg.crop((500, 150, 880, 450)).resize((760, 600)).convert('RGB').save(S + 'day-duo-top.png')
bg.convert('RGB').resize((400, 400), Image.LANCZOS).save(S + 'day-duo-small.png')
