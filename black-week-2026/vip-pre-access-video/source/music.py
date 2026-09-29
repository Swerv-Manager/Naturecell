import numpy as np
from scipy.signal import butter, sosfilt
from scipy.io import wavfile

SR = 44100
DUR = 20.5
N = int(SR * DUR)
BEAT = 0.5  # 120 BPM
rng = np.random.default_rng(7)
L = np.zeros(N); R = np.zeros(N)

def idx(t): return int(round(t * SR))
def add(sig, t, gain=1.0, pan=0.0):
    i = idx(t)
    if i >= N: return
    sig = sig[: N - i]
    l = gain * np.cos((pan + 1) * np.pi / 4) * np.sqrt(2)
    r = gain * np.sin((pan + 1) * np.pi / 4) * np.sqrt(2)
    L[i:i + len(sig)] += sig * l
    R[i:i + len(sig)] += sig * r
def lp(x, f, o=2): return sosfilt(butter(o, f, 'low', fs=SR, output='sos'), x)
def hp(x, f, o=2): return sosfilt(butter(o, f, 'high', fs=SR, output='sos'), x)
def bp(x, lo, hi, o=2): return sosfilt(butter(o, [lo, hi], 'band', fs=SR, output='sos'), x)
def env(n, a, d):
    t = np.arange(n) / SR
    e = np.minimum(1, t / max(a, 1e-4)) * np.exp(-t / d)
    return e
def note(m): return 440.0 * 2 ** ((m - 69) / 12)

# ---- drums ----
def kick():
    n = int(.42 * SR); t = np.arange(n) / SR
    f = 45 + 95 * np.exp(-t * 32)
    ph = 2 * np.pi * np.cumsum(f) / SR
    s = np.sin(ph) * np.exp(-t * 7.5)
    click = hp(rng.standard_normal(n), 3000) * np.exp(-t * 300) * .25
    return np.tanh((s + click) * 1.6) * .9
def clap():
    n = int(.3 * SR); t = np.arange(n) / SR
    nz = bp(rng.standard_normal(n), 900, 5000)
    e = np.zeros(n)
    for o in (0, .011, .022):
        e += (t >= o) * np.exp(-np.maximum(t - o, 0) * 90) * .5
    e += (t >= .03) * np.exp(-np.maximum(t - .03, 0) * 16)
    return nz * e * .55
def hat(d=38):
    n = int(.12 * SR); t = np.arange(n) / SR
    return hp(rng.standard_normal(n), 7500, 3) * np.exp(-t * d) * .35
def openhat():
    n = int(.3 * SR); t = np.arange(n) / SR
    return hp(rng.standard_normal(n), 6500, 3) * np.exp(-t * 11) * .22

# ---- chords (A minor, warm) ----
CH = [[57, 60, 64, 67, 71],   # Am9
      [53, 57, 60, 64, 69],   # Fmaj7
      [48, 55, 59, 64, 67],   # Cmaj7
      [55, 59, 62, 67, 69]]   # G6/9
ROOT = [45, 41, 36, 43]

# pad: detuned saws, lowpassed; intro darker
pad = np.zeros(N)
t_all = np.arange(N) / SR
for bar in range(11):
    t0 = bar * 2.0
    n = int(2.2 * SR)
    t = np.arange(n) / SR
    ch = CH[bar % 4]
    s = np.zeros(n)
    for m in ch:
        for det in (-0.09, 0.0, 0.11):
            f = note(m + det)
            s += 2 * ((t * f + rng.random()) % 1) - 1
    s /= len(ch) * 3
    e = np.minimum(1, t / .25) * np.minimum(1, np.maximum(0, (2.2 - t) / .25))
    seg = s * e
    i = idx(t0); seg = seg[: N - i]
    pad[i:i + len(seg)] += seg
# filter automation: dark intro, opening on the drop
pad_dark = lp(pad, 700, 2)
pad_open = lp(pad, 2600, 2)
mixk = np.clip((t_all - 2.3) / .3, 0, 1)
pad = pad_dark * (1 - mixk) + pad_open * mixk

# sidechain envelope from kick times
kick_times = [2.5 + i * BEAT for i in range(int((19.5 - 2.5) / BEAT) + 1)]
kick_times = [k for k in kick_times if not (11.5 <= k < 12.0) and not (16.5 <= k < 17.0)]
sc = np.ones(N)
for k in kick_times:
    i = idx(k); n = int(.42 * SR); tt = np.arange(n) / SR
    duck = 1 - .6 * np.exp(-tt * 9)
    seg = sc[i:i + n]; seg *= duck[: len(seg)]
pad *= sc
padL = pad; padR = np.roll(pad, int(.012 * SR))
end_fade = np.clip((DUR - t_all) / 1.2, 0, 1)
L += padL * .42 * end_fade; R += padR * .42 * end_fade

# ---- drums placement ----
for k in kick_times: add(kick(), k, .95)
for k in kick_times:
    b = round((k - 2.5) / BEAT)
    if b % 2 == 1: add(clap(), k, .75, .05)
    add(openhat(), k + .25, .6, .25)
    add(hat(60), k + .125, .28, -.3); add(hat(60), k + .375, .22, -.3)

# ---- bass (offbeat, pumping) ----
for k in kick_times:
    bar = int(k // 2.0) % 4
    f = note(ROOT[bar])
    n = int(.24 * SR); t = np.arange(n) / SR
    s = np.sin(2 * np.pi * f * t) + .35 * np.sin(4 * np.pi * f * t)
    s = np.tanh(s * 1.4) * np.minimum(1, t / .01) * np.exp(-t * 9)
    add(lp(s, 900), k + .25, .55)

# ---- pluck arp from 5.0 ----
pat = [0, 2, 4, 3, 1, 3, 4, 2]
t = 5.0; i = 0
while t < 19.5:
    if not (11.5 <= t < 12.0) and not (16.5 <= t < 17.0):
        bar = int(t // 2.0) % 4
        m = CH[bar][pat[i % 8]] + 12
        f = note(m); n = int(.3 * SR); tt = np.arange(n) / SR
        s = (2 * ((tt * f) % 1) - 1) * .6 + np.sin(2 * np.pi * f * tt) * .4
        s = lp(s * np.exp(-tt * 14) * np.minimum(1, tt / .003), 3200)
        add(s, t, .16, (.35 if i % 2 else -.35))
    t += .25; i += 1

# ---- FX ----
def riser(d, f0=400, f1=6000):
    n = int(d * SR); tt = np.arange(n) / SR
    nz = rng.standard_normal(n)
    out = np.zeros(n); blk = 1024
    for j in range(0, n, blk):
        fc = f0 * (f1 / f0) ** (j / n)
        out[j:j + blk] = bp(nz[j:j + blk + 0], fc * .7, min(fc * 1.3, SR / 2 - 100), 1)[: len(out[j:j + blk])]
    return out * (tt / d) ** 2
def whoosh(d=.32):
    n = int(d * SR); tt = np.arange(n) / SR
    x = riser(d, 300, 5000)
    return x * np.sin(np.pi * tt / d) * 1.2
def impact():
    n = int(1.4 * SR); tt = np.arange(n) / SR
    boom = np.sin(2 * np.pi * (38 + 60 * np.exp(-tt * 18)) * tt) * np.exp(-tt * 3.2)
    crash = hp(rng.standard_normal(n), 4000) * np.exp(-tt * 3.5) * .25
    return boom * .8 + crash
def chime(t0):
    for j, m in enumerate([81, 84, 88, 93]):
        n = int(1.0 * SR); tt = np.arange(n) / SR
        f = note(m)
        s = (np.sin(2 * np.pi * f * tt) + .3 * np.sin(2 * np.pi * f * 2.76 * tt)) * np.exp(-tt * 5)
        add(s, t0 + j * .06, .16, (-.4 + j * .27))

# hook hit on frame 0 (short, not a full impact)
n = int(.6 * SR); tt = np.arange(n) / SR
add(np.sin(2 * np.pi * (45 + 80 * np.exp(-tt * 25)) * tt) * np.exp(-tt * 6) * .9, 0.0, .8)
add(hp(rng.standard_normal(n), 2500) * np.exp(-tt * 30) * .3, 0.0, .6)
# ticking clock hats in the intro (tension)
for j in range(10):
    add(hat(90), .25 + j * .25 * 0.9 if False else .5 + j * .2, .18 + .02 * j, (.3 if j % 2 else -.3))
# riser into the drop
add(riser(1.1), 1.4, .55)
add(impact(), 2.5, .75)
# transition whooshes
for tw in (4.82, 7.78, 11.82, 14.28, 16.82):
    add(whoosh(), tw, .45)
# builds into gift & CTA breaks
add(riser(.5, 800, 7000), 11.5, .35)
add(riser(.5, 800, 7000), 16.5, .35)
add(impact(), 12.0, .45); add(impact(), 17.0, .5)
chime(12.72)
# final soft hit at the button
add(impact(), 18.3, .3)

# ---- master ----
mix = np.stack([L, R], 1)
mix = hp(mix.T, 28).T
peak = np.max(np.abs(mix))
mix = mix / peak * 1.25
mix = np.tanh(mix) * .89
fadein = np.clip(np.arange(N) / (SR * .004), 0, 1)[:, None]
mix *= fadein
wavfile.write('music.wav', SR, (mix * 32767).astype(np.int16))
print('ok', mix.shape, np.max(np.abs(mix)))
