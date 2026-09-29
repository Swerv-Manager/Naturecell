from synth import *
BPM=112.5; B=60/BPM; BAR=4*B; DUR=16.0
m=Mix(DUR)
CH=[[57,60,64,67],[53,57,60,64],[48,52,55,60],[55,59,62,65]]  # Am7 Fmaj7 C G7
ROOT=[45,41,36,43]
kt=[]
for b in range(int(DUR/BAR)+1):
    t0=b*BAR
    for q in range(4):
        k=t0+q*B
        if q in (0,2) or (q==3 and b%2): kt.append(k); m.add(kick(52,90,9,1.5,.32),k,.75)
    for q in (1,3): m.add(clap(),t0+q*B,.5,.05)
    for e in range(16):
        m.add(hat(90,.05,9000),t0+e*B/4,(.2 if e%2 else .12) if e%4 else .08,(.3 if e%2 else -.3))
    m.add(sub_808(ROOT[b%4]+12,B*1.8),t0,.5); m.add(sub_808(ROOT[b%4]+12,B*.9),t0+2.5*B,.4)
    for e,n in enumerate([0,2,1,3,2,1,0,3]):
        m.add(pluck(CH[b%4][n]+12,.25,16,4200),t0+e*B/2+B/4,.13,(.4 if e%2 else -.4))
env=m.duck(kt,.4)
pd=pad(CH,BAR,DUR,2000)*env
m.add(pd,0,.15,-.2); m.add(np.roll(pd,350),0,.15,.2)
# snap 'tap' sounds on each new snap + sticker pops
for i in range(1,5): m.add(tick(.02),i*3.2,.5); m.add(whoosh(.14),i*3.2-.08,.18)
for t in (3.3,6.9,7.2,9.8,13.2): m.add(pop(1000,.08),t,.35)
chime(m,9.9,(84,88,91,96),.1)
m.write('music_snap.wav',drive=1.3,fade_out=.6)
