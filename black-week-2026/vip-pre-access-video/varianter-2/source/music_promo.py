from synth import *
BPM=124; B=60/BPM; BAR=4*B; DUR=15.5
m=Mix(DUR)
CH=[[60,64,67,72],[62,65,69,72],[57,60,64,69],[55,59,62,67]]  # C Dm Am G (bright)
ROOT=[36,38,33,31]
kt=[]
for b in range(int(DUR/BAR)+1):
    t0=b*BAR
    for q in range(4): k=t0+q*B; kt.append(k); m.add(kick(50,100,8,1.7,.35),k,.85)
    for q in (1,3): m.add(clap(),t0+q*B,.55,.05)
    for e in range(8): m.add(hat(11,.3,6500) if e%2 else hat(60),t0+e*B/2,.35 if e%2 else .2,.2)
    for e in range(8): m.add(bass(ROOT[b%4]+(12 if e%2 else 0),B*.45,9,1.5,900),t0+e*B/2,.42)
    for q in range(4):  # house piano stabs on the offbeat
        for n in CH[b%4]: m.add(rhodes(n+12,.35,1.2)*np.exp(-tt(.35)*6),t0+q*B+B/2,.1,(-.2 if n%2 else .2))
env=m.duck(kt,.5)
pd=pad(CH,BAR,DUR,2600)*env
m.add(pd,0,.14,-.2); m.add(np.roll(pd,300),0,.14,.2)
m.add(impact(1.0,.3),0,.55)
# stamps on every product, cash-register-like bell at the stack steps
for i in range(5): m.add(impact(.35,.4),5*B+i*2*B+.1,.35); m.add(whoosh(.2),5*B+i*2*B-.05,.25)
for s_ in (15*B,17*B,19*B): chime(m,s_+.25,(84,91),.12)
m.add(riser(1.0,500,7000),22*B-1.0,.35); chime(m,22*B+.6,(84,88,91,96),.12)
m.add(impact(1.3,.35),26*B,.55)
m.write('music_promo.wav',drive=1.45,fade_out=.5)
