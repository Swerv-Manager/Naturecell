import json,re,glob,collections
W='wp/'
pk={}
for n in ['theme','new-a1','new-a2','new-p','sync1','sync2','sync3','sync4','sync5','meta']:
    items=json.load(open(W+n+'.json')); out=json.load(open(W+'out-'+n+'.json'))
    miss=[i['id'] for i in items if i['id'] not in out or not str(out[i['id']]).strip()]
    print(n,len(items),len(out),'missing',miss[:5])
    for i in items: pk[i['id']]=dict(pkg=n,da=i['da'],de=out.get(i['id']),field=i.get('field'))
# checks
tag=re.compile(r'<\s*(/?[a-zA-Z0-9]+)')
href=re.compile(r'(?:href|src)\s*=\s*"([^"]*)"')
bad=collections.Counter(); probs=[]
allow=['Løvens Hule','Børsen','e-mærket','Møllerup','Nyt på Hylden','Jeg tester','Odder Elitehåndbold','Miljøstyrelsen','Kræftens Bekæmpelse','Sønderup','Brøner','Kalø','Tænk','Lille Nyhavn','Sønderborg','Verdensballetten','Ærø','Århus','Aarhus','Højbjerg','Søren','Jørgen','Bjørn','Ølstykke','Hørsholm','Kø','Næstved','Fyn','Sjælland','Jylland']
for k,v in pk.items():
    de=v['de']; da=v['da']
    if de is None: continue
    if '<' in da:
        if [t.lower() for t in tag.findall(da)]!=[t.lower() for t in tag.findall(de)]: probs.append((k,'tags'))
        if href.findall(da)!=href.findall(de): probs.append((k,'href'))
    txt=re.sub(r'<[^>]+>',' ',de)
    for a in allow: txt=txt.replace(a,'')
    if re.search(r'[æøåÆØÅ]',txt): probs.append((k,'aeoa',re.findall(r'\S*[æøåÆØÅ]\S*',txt)[:4]))
    if re.search(r'zugelassen|Zulassung|genehmigt|Genehmigung',txt,re.I): probs.append((k,'zugel'))
    if re.search(r'[–—]',txt) and 'Cannabidiol' not in txt: probs.append((k,'dash',re.findall(r'.{20}[–—].{20}',txt)[:2]))
print('problems',len(probs))
for p in probs: print(' ',p)
json.dump(pk,open('reg/merged.json','w'),ensure_ascii=False)
# hrefs
c=collections.Counter()
for k,v in pk.items():
    if v['de']:
        for h in href.findall(v['de']):
            if 'naturecell' in h or h.startswith('/'): c[re.sub(r'[?#].*','',h)]+=1
json.dump(sorted(c),open('reg/hrefs.json','w'),ensure_ascii=False,indent=0)
print('internal hrefs',len(c))
