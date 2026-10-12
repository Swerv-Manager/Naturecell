import json,re,os,collections
R='/home/user/Naturecell/design/launch-de/de-translations/reg/'
hm=json.load(open(R+'handles.json'))
P={h:v['de'] or h for h,v in hm['products'].items()}
G={h:v['de'] or h for h,v in hm['pages'].items()}
A={h:v['de'] or h for h,v in hm['articles'].items()}
NEW={('articles','frederik-20-ar-derfor-er-hudpleje-blevet-en-fast-del-af-min-hverda'):'frederik-20-darum-nutze-ich-jeden-tag-hautpflege',
 ('articles','hudplejerutine-efter-alder-og-hudtype'):'hautpflegeroutine-nach-alter-und-hauttyp',
 ('articles','hudolie-og-antioxidanter-til-daglig-hudpleje-naturecell'):'hautpflegeoel-und-antioxidantien-fuer-die-taegliche-hautpflege',
 ('products','hel-krops-pleje'):'koerperpflege-set',('products','pakke-til-starten-af-dagen'):'hautpflege-set-tag',('products','pakke-til-starten-af-natten'):'hautpflege-set-nacht',
 ('pages','ofte-stillede-sporgsmal'):'haeufige-fragen',('pages','hvorfor-naturecell'):'warum-naturecell',('pages','hvorfor-cbd'):'warum-cbd'}
for (t,h),de in NEW.items(): {'articles':A,'products':P,'pages':G}[t][h]=de
A['for-efter-se-hvordan-jan-oplevede-healing-af-solskade-sar-med-naturecell-cbd-hudpleje']='jans-und-grethes-erfahrung-mit-naturecell-cbd-hautpflege'
C={'cbd-olie':'cbd-oel','cbd-hudpleje':'cbd-hautpflege','nedsatte-varer':'reduzierte-artikel','gavekort':'geschenkgutschein','sampakker':'sets','cbd-haarpleje':'cbd-haarpflege','herre-hudpleje':'herren-hautpflege','cbd-ansigtspleje':'cbd-gesichtspflege','cbd-kropspleje':'cbd-koerperpflege','cbd-handpleje':'cbd-handpflege','cbd-fodpleje':'cbd-fusspflege','hudpleje':'hautpflege','all':'all'}
B={'artikler':'artikel','blog':'guides','kundecases':'kundenberichte'}
unknown=collections.Counter()
def mp(d,h,k):
    if h in d: return d[h]
    unknown[k+':'+h]+=1; return h
def loc(url):
    m=re.match(r'^(https?://(?:www\.)?naturecell\.dk)?(/[^?#"]*)?([?#].*)?$',url)
    if not m or (not m.group(1) and not m.group(2)): return url
    path=m.group(2) or '/'; tail=m.group(3) or ''
    seg=[s for s in path.split('/') if s]
    if len(seg)>=4 and seg[0]=='collections' and seg[2]=='products': seg=['products',seg[3]]
    if len(seg)==2 and seg[0]=='products': seg[1]=mp(P,seg[1],'p')
    elif len(seg)==2 and seg[0]=='pages': seg[1]=mp(G,seg[1],'pg')
    elif len(seg)==2 and seg[0]=='collections': seg[1]=mp(C,seg[1],'c')
    elif len(seg)>=2 and seg[0]=='blogs':
        seg[1]=mp(B,seg[1],'b')
        if len(seg)==3: seg[2]=mp(A,seg[2],'a')
    elif m.group(1) is None: return url
    return '/'+'/'.join(seg)+tail
hre=re.compile(r'(href\s*=\s*")([^"]*)(")')
work={o['id']:o for o in json.load(open('work2.json'))}
out={}
for g in 'ABC':
    if os.path.exists(f'out-{g}.json'): out.update(json.load(open(f'out-{g}.json')))
items=[]
for o in json.load(open('tm-hits.json')): items.append(dict(rid=o['rid'],key=o['key'],digest=o['digest'],da=o['da'],de=o['de'],src='tm'))
missing=[i for i in work if i not in out]
for i,o in work.items():
    if i not in out: continue
    de=out[i]
    if '<' in de and 'href' in de and not o['rid'].endswith('205218971986'): de=hre.sub(lambda m:m.group(1)+loc(m.group(2))+m.group(3),de)
    items.append(dict(rid=o['rid'],key=o['key'],digest=o['digest'],da=o['da'],de=de,src=i))
todo={(o['rid'],o['key']):o for o in json.load(open('todo.json'))}
# handles
for (t,h),de in NEW.items():
    x=hm[t][h]
    k=(x['rid'],'handle')
    if k in todo: items.append(dict(rid=x['rid'],key='handle',digest=todo[k]['digest'],da=h,de=de,src='handle'))
# checks
bad=[]
for it in items:
    txt=re.sub(r'<[^>]+>',' ',it['de'])
    if re.search(r'zugelassen|Zulassung|genehmigt|Genehmigung',txt,re.I): bad.append((it['src'],'zugel'))
    if re.search(r'[–—]',txt): bad.append((it['src'],'dash',re.findall(r'.{15}[–—].{15}',txt)[:1]))
print('items',len(items),'missing outputs',missing,'unknown links',dict(unknown)); print('bad',bad[:20],len(bad))
reg=collections.defaultdict(list)
for it in items: reg[it['rid']].append(dict(key=it['key'],value=it['de'],digest=it['digest']))
json.dump(reg,open('reg.json','w'),ensure_ascii=False); json.dump(items,open('items.json','w'),ensure_ascii=False)
print('resources',len(reg))
