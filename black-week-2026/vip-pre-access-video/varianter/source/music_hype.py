from synth import *
BPM=150; B=60/BPM; DUR=12.0
m=Mix(DUR)
CH=[[57,60,64],[53,57,60],[55,59,62],[52,55,59]]   # Am F G Em (stabs)
ROOT=[33,29,31,28]
kt=[]
nbeats=int(DUR/B)
for i in range(nbeats):
    t=i*B
    if i>=29: break
    kt.append(t); m.add(kick(48,110,8,2.0,.35),t,.95)
    if i%2==1: m.add(clap(),t,.7,.05); m.add(snare(.2,210,.5,22),t,.35)
    for q in range(4):
        m.add(hat(70,.06,8500),t+q*B/4,.22 if q%2 else .14,(-.3 if q%2 else .3))
    bar=(i//4)%4
    # 808 on 1 and the 'and' of 2
    if i%4==0: m.add(sub_808(ROOT[bar]+12,.5),t,.55)
    if i%4==1: m.add(sub_808(ROOT[bar]+12,.25),t+B/2,.45)
    # offbeat saw stabs
    for n in CH[bar]:
        s=lp(saw(note(n+12),tt(.12),0)*np.exp(-tt(.12)*22),3500)
        m.add(s,t+B/2,.09,(-.2 if n%2 else .2))
env=m.duck(kt,.5,10)
pd=pad(CH,4*B,DUR,2600)*env
m.add(pd,0,.16,-.25); m.add(np.roll(pd,300),0,.16,.25)
# hook hit, risers, impacts on section changes
m.add(impact(1.0,.3),0,.6)
for s_ in (4*B,8*B,12*B,18*B): m.add(impact(.8,.35),s_,.45)
m.add(riser(1.2,500,8000),21*B-1.2,.4); m.add(impact(1.4,.4),21*B,.7)
chime(m,18*B+.05,(84,88,91,96),.14)
m.write('music_hype.wav',drive=1.45,fade_out=.5)
print('ok')
