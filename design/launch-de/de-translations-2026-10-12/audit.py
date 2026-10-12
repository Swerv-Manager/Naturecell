import json,re,collections,glob
def skip(c):
    v=(c['value'] or '').strip()
    if not v: return True
    if c['key']=='handle': return False
    if re.fullmatch(r'(shopify://\S+|https?://\S+|/\S*|#[0-9a-fA-F]{3,8}|[\d.,%\s:/+-]+|\[\]|\{\}|gid://\S+)',v): return True
    if 'jdgm' in v or '"number_of_reviews"' in v or '"@context"' in v: return True
    return False
todo=[]
for f in ['res-pcp.json','res-art.json','res-misc.json','res-mf1.json','res-mf2.json']:
    d=json.load(open(f))['data']
    for alias,v in d.items():
        for n in v['nodes']:
            tr={t['key']:t for t in n['translations']}
            for c in n['translatableContent']:
                if skip(c): continue
                t=tr.get(c['key'])
                st='missing' if not t else ('outdated' if t['outdated'] else None)
                if st: todo.append(dict(rid=n['resourceId'],key=c['key'],digest=c['digest'],da=c['value'],old_de=t['value'] if t else None,st=st))
# theme
th=json.load(open('theme-now.json'))['data']['work']
tr={t['key']:t for t in th['translations']}
UNUSED=('collection.ansigtspleje','collection.cbd-olie','collection.fodpleje','collection.haarpleje','collection.handpleje','collection.herre','collection.kropspleje')
for c in th['translatableContent']:
    k=c['key']
    if k.startswith(('shopify.','customer_accounts.')): continue
    if any('section.'+u+'.json' in k for u in UNUSED): continue
    if skip(c): continue
    if k.startswith('general.') and re.search(r'url|_id$|favicon|image|social',k): continue
    t=tr.get(k); st='missing' if not t else ('outdated' if t['outdated'] else None)
    if st: todo.append(dict(rid='gid://shopify/OnlineStoreTheme/205218971986',key=k,digest=c['digest'],da=c['value'],old_de=t['value'] if t else None,st=st))
json.dump(todo,open('todo.json','w'),ensure_ascii=False,indent=1)
c=collections.Counter((o['rid'].split('/')[3],o['st']) for o in todo)
for k,v in sorted(c.items()): print(k,v)
print('total',len(todo),'unique da',len(set(o['da'] for o in todo)),'chars',sum(len(o['da']) for o in todo))
