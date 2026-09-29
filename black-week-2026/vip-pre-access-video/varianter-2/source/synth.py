"""Small deterministic synth toolkit for the NatureCell video soundtracks.
Everything is generated from scratch (no samples), so there is nothing to license."""
import numpy as np
from scipy.signal import butter, sosfilt
from scipy.io import wavfile

SR = 44100
rng = np.random.default_rng(11)


def note(m):
    return 440.0 * 2 ** ((m - 69) / 12)


def lp(x, f, o=2):
    return sosfilt(butter(o, min(f, SR / 2 - 100), 'low', fs=SR, output='sos'), x)


def hp(x, f, o=2):
    return sosfilt(butter(o, f, 'high', fs=SR, output='sos'), x)


def bp(x, lo, hi, o=2):
    return sosfilt(butter(o, [lo, min(hi, SR / 2 - 100)], 'band', fs=SR, output='sos'), x)


def tt(d):
    return np.arange(int(d * SR)) / SR


class Mix:
    def __init__(self, dur):
        self.dur = dur
        self.n = int(dur * SR)
        self.L = np.zeros(self.n)
        self.R = np.zeros(self.n)

    def add(self, sig, t, gain=1.0, pan=0.0):
        i = int(round(t * SR))
        if i >= self.n or i < 0:
            return
        sig = sig[: self.n - i]
        self.L[i:i + len(sig)] += sig * gain * np.cos((pan + 1) * np.pi / 4) * np.sqrt(2)
        self.R[i:i + len(sig)] += sig * gain * np.sin((pan + 1) * np.pi / 4) * np.sqrt(2)

    def add_bus(self, L, R, gain=1.0):
        self.L[: len(L)] += L[: self.n] * gain
        self.R[: len(R)] += R[: self.n] * gain

    def duck(self, times, depth=.55, rel=8.0):
        env = np.ones(self.n)
        for k in times:
            i = int(k * SR)
            t = tt(.45)
            d = 1 - depth * np.exp(-t * rel)
            seg = env[i:i + len(d)]
            seg *= d[: len(seg)]
        return env

    def write(self, path, drive=1.25, ceiling=.89, fade_out=.8):
        mix = np.stack([self.L, self.R], 1)
        mix = hp(mix.T, 28).T
        mix = mix / (np.max(np.abs(mix)) + 1e-9) * drive
        mix = np.tanh(mix) * ceiling
        t = np.arange(self.n) / SR
        mix *= np.clip(t / .004, 0, 1)[:, None]
        mix *= np.clip((self.dur - t) / fade_out, 0, 1)[:, None]
        wavfile.write(path, SR, (mix * 32767).astype(np.int16))


# ---------------- instruments ----------------
def kick(tone=45, punch=95, dec=7.5, drive=1.6, dur=.42):
    t = tt(dur)
    f = tone + punch * np.exp(-t * 32)
    s = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * dec)
    click = hp(rng.standard_normal(len(t)), 3000) * np.exp(-t * 300) * .25
    return np.tanh((s + click) * drive) * .9


def lofi_kick():
    return lp(kick(tone=50, punch=70, dec=9, drive=1.2), 2500)


def snare(dur=.25, tone=190, noise=.7, dec=18):
    t = tt(dur)
    body = np.sin(2 * np.pi * tone * t) * np.exp(-t * 30) * .5
    nz = bp(rng.standard_normal(len(t)), 1200, 8000) * np.exp(-t * dec) * noise
    return body + nz


def clap():
    t = tt(.3)
    nz = bp(rng.standard_normal(len(t)), 900, 5000)
    e = np.zeros(len(t))
    for o in (0, .011, .022):
        e += (t >= o) * np.exp(-np.maximum(t - o, 0) * 90) * .5
    e += (t >= .03) * np.exp(-np.maximum(t - .03, 0) * 16)
    return nz * e * .55


def hat(d=38, dur=.12, f=7500):
    t = tt(dur)
    return hp(rng.standard_normal(len(t)), f, 3) * np.exp(-t * d) * .35


def shaker(dur=.09):
    t = tt(dur)
    return bp(rng.standard_normal(len(t)), 5000, 12000) * np.sin(np.pi * t / dur) ** 2 * .25


def crackle(dur, density=18, gain=.15):
    n = int(dur * SR)
    out = np.zeros(n)
    k = int(dur * density)
    pos = rng.integers(0, n - 200, k)
    for p in pos:
        out[p:p + 60] += rng.standard_normal(60) * np.exp(-np.arange(60) / 8) * rng.uniform(.2, 1)
    hiss = hp(rng.standard_normal(n), 4000) * .02
    return (hp(out, 1500) + hiss) * gain


def room_tone(dur, gain=.02):
    return lp(rng.standard_normal(int(dur * SR)), 600) * gain


def saw(f, t, phase=None):
    ph = rng.random() if phase is None else phase
    return 2 * ((t * f + ph) % 1) - 1


def pad(chords, bar, dur, cutoff=2400, det=(-.09, 0, .11), att=.25):
    """chords: list of midi lists, one per bar (looped)."""
    n = int(dur * SR)
    out = np.zeros(n)
    bars = int(np.ceil(dur / bar))
    for b in range(bars):
        t = tt(bar + .25)
        ch = chords[b % len(chords)]
        s = np.zeros(len(t))
        for m in ch:
            for d in det:
                s += saw(note(m + d), t)
        s /= len(ch) * len(det)
        e = np.minimum(1, t / att) * np.minimum(1, np.maximum(0, (bar + .25 - t) / .25))
        i = int(b * bar * SR)
        seg = (s * e)[: n - i]
        out[i:i + len(seg)] += seg
    return lp(out, cutoff)


def rhodes(m, dur=1.4, bright=1.0):
    f = note(m)
    t = tt(dur)
    s = (np.sin(2 * np.pi * f * t) + .35 * bright * np.sin(2 * np.pi * 2 * f * t) * np.exp(-t * 4)
         + .12 * bright * np.sin(2 * np.pi * 3.01 * f * t) * np.exp(-t * 7))
    trem = 1 + .12 * np.sin(2 * np.pi * 4.5 * t)
    return s * np.exp(-t * 2.2) * np.minimum(1, t / .006) * trem * .5


def piano(m, dur=3.0, vel=1.0):
    f = note(m)
    t = tt(dur)
    s = np.zeros(len(t))
    for k, a in enumerate([1, .5, .28, .16, .09, .05], start=1):
        fk = f * k * (1 + .0004 * k * k)
        s += a * np.sin(2 * np.pi * fk * t) * np.exp(-t * (1.1 + .9 * k) * (.6 + .4 * vel))
    ham = lp(rng.standard_normal(len(t)), 3000) * np.exp(-t * 120) * .05
    return (s + ham) * np.minimum(1, t / .003) * vel * .35


def pluck(m, dur=.3, dec=14, cutoff=3200):
    f = note(m)
    t = tt(dur)
    s = saw(f, t, 0) * .6 + np.sin(2 * np.pi * f * t) * .4
    return lp(s * np.exp(-t * dec) * np.minimum(1, t / .003), cutoff)


def marimba(m, dur=.5):
    f = note(m)
    t = tt(dur)
    s = np.sin(2 * np.pi * f * t) * np.exp(-t * 9) + .25 * np.sin(2 * np.pi * 4 * f * t) * np.exp(-t * 30)
    return s * np.minimum(1, t / .002) * .5


def bass(m, dur=.24, dec=9, drive=1.4, cutoff=900):
    f = note(m)
    t = tt(dur)
    s = np.sin(2 * np.pi * f * t) + .35 * np.sin(4 * np.pi * f * t)
    return lp(np.tanh(s * drive) * np.minimum(1, t / .01) * np.exp(-t * dec), cutoff)


def sub_808(m, dur=.6):
    t = tt(dur)
    f = note(m) * (1 + .6 * np.exp(-t * 40))
    s = np.sin(2 * np.pi * np.cumsum(f) / SR)
    return np.tanh(s * 2.2) * np.exp(-t * 3.5) * np.minimum(1, t / .003) * .8


def riser(d, f0=400, f1=6000):
    n = int(d * SR)
    t = np.arange(n) / SR
    nz = rng.standard_normal(n)
    out = np.zeros(n)
    blk = 1024
    for j in range(0, n, blk):
        fc = f0 * (f1 / f0) ** (j / n)
        out[j:j + blk] = bp(nz[j:j + blk], fc * .7, fc * 1.3, 1)
    return out * (t / d) ** 2


def whoosh(d=.32):
    t = tt(d)
    return riser(d, 300, 5000)[: len(t)] * np.sin(np.pi * t / d) * 1.2


def impact(dur=1.4, crash=.25):
    t = tt(dur)
    boom = np.sin(2 * np.pi * (38 + 60 * np.exp(-t * 18)) * t) * np.exp(-t * 3.2)
    cr = hp(rng.standard_normal(len(t)), 4000) * np.exp(-t * 3.5) * crash
    return boom * .8 + cr


def pop(f=900, dur=.09):
    """message/notification style blip (generic, not a copy of any OS sound)"""
    t = tt(dur)
    fr = f * (1 + .6 * np.exp(-t * 60))
    return np.sin(2 * np.pi * np.cumsum(fr) / SR) * np.exp(-t * 45) * .6


def tick(dur=.03):
    t = tt(dur)
    return hp(rng.standard_normal(len(t)), 2500) * np.exp(-t * 250) * .4


def chime(mix, t0, notes=(81, 84, 88, 93), gain=.16):
    for j, m in enumerate(notes):
        t = tt(1.0)
        f = note(m)
        s = (np.sin(2 * np.pi * f * t) + .3 * np.sin(2 * np.pi * f * 2.76 * t)) * np.exp(-t * 5)
        mix.add(s, t0 + j * .06, gain, (-.4 + j * .27))


def string_pad(chords, bar, dur, cutoff=1800):
    """slow-attack ensemble for the editorial film"""
    return pad(chords, bar, dur, cutoff=cutoff, det=(-.06, -.02, .03, .07), att=.9)
