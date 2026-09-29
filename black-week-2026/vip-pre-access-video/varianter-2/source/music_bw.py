from synth import *
from scipy.signal import fftconvolve
BPM=128; B=60/BPM; BAR=4*B; DUR=14.5
m=Mix(DUR)
CH=[[45,52,57,60],[41,48,53,57],[43,50,55,59],[40,47,52,55]]  # Am F G Em, dark
ROOT=[33,29,31,28]
kt=[]
for b in range(int(DUR/BAR)+1):
    t0=b*BAR
    for q in range(4):
        k=t0+q*B
        if t0+q*B<6*B: continue            # intro: no kick, only atmosphere
        if 23*B<=k<24*B: continue          # break before the end card
        kt.append(k); m.add(kick(44,90,6.5,2.2,.5),k,.9)
    if t0>=6*B:
        for q in (1,3): m.add(snare(.3,180,.6,14),t0+q*B,.35,.05)
        for e in range(16): m.add(hat(95,.04,10000),t0+e*B/4,.14 if e%2 else .08,(.25 if e%2 else -.25))
        m.add(sub_808(ROOT[b%4]+12,BAR*.95),t0,.6)
env=m.duck(kt,.55,7)
pd=string_pad(CH,BAR,DUR,1400)*env
m.add(pd,0,.28,-.3); m.add(np.roll(pd,500),0,.28,.3)
# shimmering bell arps (gold) with reverb
dry=Mix(DUR)
for i in range(int(DUR/(B/2))):
    t=i*B/2; b=int(t//BAR)%4
    n=CH[b][[3,2,1,2][i%4]]+24
    tb=tt(1.2); s=(np.sin(2*np.pi*note(n)*tb)+.4*np.sin(2*np.pi*note(n)*2.76*tb))*np.exp(-tb*4)
    dry.add(s,t,.07,(.4 if i%2 else -.4))
ir=rng.standard_normal(int(2.4*SR))*np.exp(-tt(2.4)*2.3)
wl=fftconvolve(dry.L,lp(ir,7000))[:m.n]; wr=fftconvolve(dry.R,lp(np.roll(ir,211),7000))[:m.n]
m.add_bus(dry.L,dry.R,1.0); m.add_bus(wl/np.max(np.abs(wl))*.25,wr/np.max(np.abs(wr))*.25,1)
m.add(impact(2.0,.25),0,.7)
m.add(riser(1.2,300,6000),6*B-1.2,.4); m.add(impact(1.5,.35),6*B,.7)
for s_ in (12*B,12*B+.3,12*B+.65): m.add(tick(.03),s_+.25,.6)   # flip clicks
m.add(impact(1.2,.3),18*B,.55)
m.add(riser(.47,500,8000),23*B,.35); m.add(impact(2.2,.3),24*B,.7)
m.write('music_bw.wav',drive=1.4,fade_out=.9)
