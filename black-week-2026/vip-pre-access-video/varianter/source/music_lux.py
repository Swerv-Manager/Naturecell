from synth import *
from scipy.signal import fftconvolve
BPM=70; B=60/BPM; BAR=4*B; DUR=15.0
m=Mix(DUR)
# Dmaj9, Bm11, Gmaj9, Asus4 -> A
CH=[[50,57,61,64,66],[47,54,57,61,64],[43,50,54,57,62],[45,52,57,59,64]]
ROOT=[38,35,31,33]
nb=int(DUR/BAR)+1
dry=Mix(DUR)
for b in range(nb):
    t0=b*BAR
    ch=CH[b%4]
    # rolled piano chord on 1, softer echo on 3
    for j,n in enumerate(ch): dry.add(piano(n,4.0,.75),t0+j*.045,.5,(-.3+j*.15))
    for j,n in enumerate(ch[2:]): dry.add(piano(n+12,2.5,.45),t0+2*B+j*.06,.28,(.2-j*.2))
    # melody
    mel=[ch[-1]+12,ch[-2]+12,ch[-1]+14 if b%2==0 else ch[-3]+12]
    for k,n in enumerate(mel): dry.add(piano(n,2.2,.55),t0+B*(1+k*1.0)+.02,.3,.1)
    dry.add(sub_808(ROOT[b%4],BAR*.9)*.4,t0,.35)
# reverb (synthetic hall IR)
ir_t=tt(2.8); ir=rng.standard_normal(len(ir_t))*np.exp(-ir_t*2.2)
irL=lp(ir,6000); irR=lp(np.roll(ir,331),6000)
wetL=fftconvolve(dry.L,irL)[:m.n]; wetR=fftconvolve(dry.R,irR)[:m.n]
wetL/=np.max(np.abs(wetL))+1e-9; wetR/=np.max(np.abs(wetR))+1e-9
dL=dry.L/(np.max(np.abs(dry.L))+1e-9); dR=dry.R/(np.max(np.abs(dry.R))+1e-9)
m.add_bus(dL,dR,.8); m.add_bus(wetL,wetR,.45)
# strings / air
sp=string_pad(CH,BAR,DUR,1500)
m.add(sp,0,.22,-.3); m.add(np.roll(sp,600),0,.22,.3)
m.add(lp(rng.standard_normal(m.n),1200)*.015,0,1)
# soft swells into scene changes and the end card
for s_ in (3.0,5.8,8.6): m.add(riser(1.0,200,1800)*.6,s_-1.0,.25)
m.add(riser(1.6,150,2500),11.2-1.6,.3); m.add(impact(2.5,.05),11.2,.35)
m.write('music_lux.wav',drive=1.2,fade_out=1.6)
print('ok')
