from synth import *
DUR=16.2; BPM=110; B=60/BPM; BAR=4*B
m=Mix(DUR)
CH=[[60,64,67,71],[57,60,64,67],[53,57,60,64],[55,59,62,65]]  # Cmaj7 Am7 Fmaj7 G7
ROOT=[36,33,41,43]
nb=int(DUR/BAR)+1
kt=[]
for b in range(nb):
    t0=b*BAR
    for q in range(4):
        k=t0+q*B; kt.append(k); m.add(kick(50,80,9,1.3,.3),k,.65)
    for q in (1,3): m.add(clap(),t0+q*B,.45,.05)
    for e in range(8): m.add(shaker(),t0+e*B/2+B/4,.3,(.3 if e%2 else -.3))
    m.add(bass(ROOT[b%4],B*.9,6,1.3,700),t0,.45); m.add(bass(ROOT[b%4],B*.45,8,1.3,700),t0+1.5*B,.4)
    m.add(bass(ROOT[b%4]+12,B*.45,8,1.3,700),t0+2.5*B,.35); m.add(bass(ROOT[b%4]+7,B*.45,8,1.3,700),t0+3.5*B,.35)
    # bouncy marimba riff
    pat=[0,2,1,3,2,1,3,2]
    for e in range(8):
        m.add(marimba(CH[b%4][pat[e]]+12),t0+e*B/2,.22,(.35 if e%2 else -.35))
env=m.duck(kt,.35)
pd=pad(CH,BAR,DUR,1800)*env
m.add(pd,0,.18,-.2); m.add(np.roll(pd,400),0,.18,.2)
# message sounds: incoming lower 'pop', outgoing higher 'swoosh-pop'
IN=[0.0,2.2,3.3,5.7,6.5,7.5,9.9,10.8]; OUT=[1.1,4.6,8.4,8.95,11.8]
for t in IN: m.add(pop(620,.1),t,.55,-.1)
for t in OUT: m.add(pop(1180,.08),t,.5,.1); m.add(whoosh(.12),t-.06,.12)
m.add(pop(1500,.07),4.0,.35)  # tapback
# CTA
m.add(whoosh(.4),12.45,.4); m.add(impact(1.2,.2),12.75,.4)
chime(m,13.8,(84,88,91,96),.1)
m.write('music_chat.wav',drive=1.2,fade_out=.7)
print('ok')
