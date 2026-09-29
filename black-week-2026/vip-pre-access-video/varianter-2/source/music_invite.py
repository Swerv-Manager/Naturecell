from synth import *
from scipy.signal import fftconvolve
BPM=84; B=60/BPM; DUR=16.0
m=Mix(DUR)
BAR=3*B  # waltz
CH=[[62,66,69],[59,62,66],[55,59,62],[57,61,64]]  # D Bm G A
ROOT=[50,47,43,45]
dry=Mix(DUR)
def celesta(n,d=1.2):
    t=tt(d);f=note(n)
    return (np.sin(2*np.pi*f*t)+.5*np.sin(2*np.pi*2*f*t)*np.exp(-t*6)+.2*np.sin(2*np.pi*4.02*f*t)*np.exp(-t*12))*np.exp(-t*3.2)*.5
mel=[74,78,81,78, 74,71,74,78, 79,78,76,74, 73,76,81,76]
nb=int(DUR/BAR)+1
for b in range(nb):
    t0=b*BAR; ch=CH[b%4]
    dry.add(piano(ROOT[b%4]-12,2.2,.6),t0,.45)                 # oom
    for q in (1,2):
        for n in ch: dry.add(piano(n,1.0,.35),t0+q*B,.16,(.2 if n%2 else -.2))   # pah pah
    for q in range(3):
        n=mel[(b*3+q)%len(mel)]
        if t0+q*B>1.0: dry.add(celesta(n),t0+q*B,.22,.15)
ir=rng.standard_normal(int(2.0*SR))*np.exp(-tt(2.0)*2.6)
wl=fftconvolve(dry.L,lp(ir,6000))[:m.n]; wr=fftconvolve(dry.R,lp(np.roll(ir,177),6000))[:m.n]
dl=dry.L/np.max(np.abs(dry.L)); dr=dry.R/np.max(np.abs(dry.R))
m.add_bus(dl,dr,.8); m.add_bus(wl/np.max(np.abs(wl))*.35,wr/np.max(np.abs(wr))*.35,1)
m.add(string_pad(CH,BAR,DUR,1600),0,.12,0)
# foley: seal crack, paper flap, card slide, pen scratches while writing
m.add(hp(rng.standard_normal(int(.08*SR)),1500)*np.exp(-tt(.08)*60),1.95,.5)
m.add(bp(rng.standard_normal(int(.6*SR)),600,4000)*np.sin(np.pi*tt(.6)/.6)*.5,2.35,.35)
m.add(bp(rng.standard_normal(int(1.1*SR)),300,3000)*np.sin(np.pi*tt(1.1)/1.1)*.5,3.05,.35)
for a,d in [(5.3,.6),(6.0,1.5),(9.1,1.1),(10.5,.6),(11.1,.9)]:
    n=int(d*SR); s=bp(rng.standard_normal(n),2500,7000)*(0.5+0.5*np.sin(2*np.pi*9*tt(d)))**2*.12
    m.add(s,a,.5,.2)
chime(m,13.25,(86,90,93,98),.1)
m.write('music_invite.wav',drive=1.5,ceiling=.84,fade_out=1.0)
