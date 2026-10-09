import json, re, sys, collections
def skip(c):
    v=(c['value'] or '').strip()
    if not v: return True
    if c['key'] in ('handle',) : return False
    if re.fullmatch(r'(shopify://\S+|https?://\S+|/\S*|#[0-9a-fA-F]{3,8}|[\d.,%\s:/+-]+|\[\]|\{\})',v): return True
    return False
out=[]
for f in sys.argv[1:]:
    d=json.load(open(f))['data']['translatableResources']
    print(f,'hasNext',d['pageInfo']['hasNextPage'],'nodes',len(d['nodes']))
    for n in d['nodes']:
        tr={t['key']:t for t in n['translations']}
        for c in n['translatableContent']:
            if skip(c): continue
            t=tr.get(c['key'])
            st='missing' if not t else ('outdated' if t['outdated'] else None)
            if st: out.append({'rid':n['resourceId'],'key':c['key'],'type':c['type'],'digest':c['digest'],'da':c['value'],'old_de':t['value'] if t else None,'st':st})
c=collections.Counter((o['st'],o['key']) for o in out)
for k,v in sorted(c.items()): print(v,k)
json.dump(out,open('todo-'+sys.argv[1].split('res-')[1],'w'),ensure_ascii=False,indent=1)
