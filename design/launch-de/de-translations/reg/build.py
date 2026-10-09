import json,re,collections
pk=json.load(open('reg/merged.json'))
hm=json.load(open('reg/handles.json'))
# handle maps da->de
P={h:v['de'] or h for h,v in hm['products'].items()}
G={h:v['de'] or h for h,v in hm['pages'].items()}
A={h:v['de'] or h for h,v in hm['articles'].items()}
C={'cbd-olie':'cbd-oel','cbd-hudpleje':'cbd-hautpflege','nedsatte-varer':'reduzierte-artikel','gavekort':'geschenkgutschein',
   'sampakker':'sets','cbd-haarpleje':'cbd-haarpflege','herre-hudpleje':'herren-hautpflege','cbd-ansigtspleje':'cbd-gesichtspflege',
   'cbd-kropspleje':'cbd-koerperpflege','cbd-handpleje':'cbd-handpflege','cbd-fodpleje':'cbd-fusspflege','hudpleje':'hautpflege','all':'all',
   'anbefalede-produkter-til-fodder':'empfohlene-produkte-fuesse','anbefalede-produkter-til-haender':'empfohlene-produkte-haende','anbefalede-produkter-til-kroppen':'empfohlene-produkte-koerper'}
A_EXTRA={'for-efter-se-hvordan-jan-oplevede-healing-af-solskade-sar-med-naturecell-cbd-hudpleje':'jans-und-grethes-erfahrung-mit-naturecell-cbd-hautpflege'}
B={'artikler':'artikel','blog':'guides','kundecases':'kundenberichte'}
NEW={ # new German handles to register
 ('articles','frederik-20-ar-derfor-er-hudpleje-blevet-en-fast-del-af-min-hverda'):'frederik-20-darum-nutze-ich-jeden-tag-hautpflege',
 ('articles','hudplejerutine-efter-alder-og-hudtype'):'hautpflegeroutine-nach-alter-und-hauttyp',
 ('articles','hudolie-og-antioxidanter-til-daglig-hudpleje-naturecell'):'hautpflegeoel-und-antioxidantien-fuer-die-taegliche-hautpflege',
 ('products','hel-krops-pleje'):'koerperpflege-set',
 ('products','pakke-til-starten-af-dagen'):'hautpflege-set-tag',
 ('products','pakke-til-starten-af-natten'):'hautpflege-set-nacht',
 ('pages','ofte-stillede-sporgsmal'):'haeufige-fragen',
 ('pages','hvorfor-naturecell'):'warum-naturecell',
 ('pages','hvorfor-cbd'):'warum-cbd',
}
for (t,h),de in NEW.items():
    {'articles':A,'products':P,'pages':G}[t][h]=de
A.update(A_EXTRA)
unknown=collections.Counter()
def loc(url):
    m=re.match(r'^(https?://(?:www\.)?naturecell\.dk)?(/[^?#"]*)?([?#].*)?$',url)
    if not m or (not m.group(1) and not m.group(2)): return url
    path=m.group(2) or '/'; tail=m.group(3) or ''
    seg=[s for s in path.split('/') if s]
    def mp(d,h,kind):
        if h in d: return d[h]
        unknown[kind+':'+h]+=1; return h
    if len(seg)>=4 and seg[0]=='collections' and seg[2]=='products': seg=['products',seg[3]]
    if len(seg)==2 and seg[0]=='products': seg[1]=mp(P,seg[1],'p')
    elif len(seg)==2 and seg[0]=='pages': seg[1]=mp(G,seg[1],'pg')
    elif len(seg)==2 and seg[0]=='collections': seg[1]=mp(C,seg[1],'c')
    elif len(seg)>=2 and seg[0]=='blogs':
        seg[1]=mp(B,seg[1],'b')
        if len(seg)==3: seg[2]=mp(A,seg[2],'a')
    elif len(seg)==0: pass
    elif m.group(1) is None: return url
    return '/'+'/'.join(seg)+tail
hre=re.compile(r'(href\s*=\s*")([^"]*)(")')
changed=0
for k,v in pk.items():
    if v['de'] and 'href' in v['de']:
        nv=hre.sub(lambda m:m.group(1)+loc(m.group(2))+m.group(3),v['de'])
        if nv!=v['de']: changed+=1; v['de']=nv
print('bodies with localized links',changed); print('unknown',dict(unknown))
# also localize theme '| /path' items
for k,v in pk.items():
    if v['pkg']=='theme' and v['de'] and re.search(r'\|\s*/',v['de']):
        v['de']=re.sub(r'(\|\s*)(/[^\s<\n]*)',lambda m:m.group(1)+loc(m.group(2)),v['de'])
# index todo by id
idx={}
for n in ['Article','PRODUCT','Page','Metaobject','Metafield','Metafield2','MetafieldNC']:
    for r in json.load(open(f'todo-{n}.json')):
        idx[r['rid'].split('/')[-1]+':'+r['key']]=r
TM=json.load(open('theme-manual.json'))
reg=collections.defaultdict(list)
THEME='gid://shopify/OnlineStoreTheme/205218971986'
nomap=[]
for k,v in pk.items():
    if v['pkg']=='theme':
        i=int(k[1:]); e=TM[i]; assert e['da']==v['da'],k
        for ref in e['refs']: reg[THEME].append(dict(key=ref['key'],value=v['de'],digest=ref['digest']))
    else:
        r=idx.get(k)
        if not r: nomap.append(k); continue
        assert r['da']==v['da'],k
        reg[r['rid']].append(dict(key=r['key'],value=v['de'],digest=r['digest']))
for e in json.load(open('theme-auto.json')): reg[THEME].append(dict(key=e['key'],value=e['value'],digest=e['digest']))
for (t,h),de in NEW.items():
    x=hm[t][h]; reg[x['rid']].append(dict(key='handle',value=de,digest=x['digest']))
print('unmapped ids',nomap[:10],len(nomap))
print('resources',len(reg),'translations',sum(len(x) for x in reg.values()))
json.dump(reg,open('reg/reg.json','w'),ensure_ascii=False)
json.dump(pk,open('reg/merged-loc.json','w'),ensure_ascii=False)
