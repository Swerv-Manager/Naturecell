from synth import *
DUR=15.0; B=60/90; BAR=4*B
m=Mix(DUR)
CH=[[53,57,60,64,67],[52,55,59,62,67],[50,53,57,60,64],[48,52,55,59,62]]  # Fmaj9 Em9 Dm9 Cmaj9
ROOT=[41,40,38,36]
sw=.06  # swing
# rhodes chords, slightly strummed
for b in range(int(DUR/BAR)+1):
    t0=b*BAR
    for j,n in enumerate(CH[b%4]):
        m.add(rhodes(n,BAR+.3,.8),t0+j*.012,.22,(-.3+j*.15))
    # a small melodic fill on beat 3
    m.add(rhodes(CH[b%4][-1]+12,.8,.6),t0+2*B+sw,.08,.3)
# drums (boom bap)
kicks=[]
for b in range(int(DUR/BAR)+1):
    t0=b*BAR
    for k in (0,1.5*B+sw,2.75*B):
        kicks.append(t0+k); m.add(lofi_kick(),t0+k,.8)
    for s_ in (B,3*B): m.add(lp(snare(),5000),t0+s_,.45,.05)
    for e in range(8):
        m.add(lp(hat(55),9000),t0+e*B/2+(sw if e%2 else 0),.22 if e%2 else .3,-.25)
# bass
for b in range(int(DUR/BAR)+1):
    t0=b*BAR
    m.add(bass(ROOT[b%4],B*1.4,3.5,1.2,500),t0,.5)
    m.add(bass(ROOT[b%4]+7,B*.8,5,1.2,500),t0+2.5*B+sw,.35)
# texture
m.add(crackle(DUR,14,.35),0,1)
m.add(room_tone(DUR,.5),0,.6)
# the 'lofi' tape feel: lowpass whole bus and slight wow
L=lp(m.L,6500); R=lp(m.R,6500)
m.L[:]=L; m.R[:]=R
# screen recording sfx
T4=17*B
for i in range(20): m.add(tick(),T4+.45+i*(1.05/20),.35,.1)
m.add(pop(700,.06),T4+.3,.4); m.add(pop(700,.06),T4+1.9,.4)
chime(m,T4+2.1,(84,88,91,96),.12)
# cut 'handling' thumps
for c in (5*B,9*B,13*B): m.add(lp(kick(60,40,20,1,.15),300),c,.25)
m.write('music_ugc.wav',drive=1.5,fade_out=.6)
print('ok')
