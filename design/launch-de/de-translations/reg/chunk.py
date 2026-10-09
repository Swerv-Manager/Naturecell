import json,os,shutil
reg=json.load(open('reg/reg.json'))
def add(rid,key,val,dg): reg.setdefault(rid,[]).append(dict(key=key,value=val,digest=dg))
SHOP='d00aae6b7fbf77a4566d8df36805d7ae973894da9f533ec96516b31e028b71eb'
for l in ['441034440885','523193123154','526394491218']: add('gid://shopify/Link/'+l,'title','Shop',SHOP)
add('gid://shopify/Link/843449270610','title','Über CBD','e52fc1ba79f36ab868e316ba5fab763ad774035af6cfc03ca967738ed11e507b')
add('gid://shopify/Link/845807223122','title','Über uns','7d17f5655f0aa13e1b214984737a1aaa1740bb58ce000c6e9b6366d5d9fe2312')
add('gid://shopify/Link/805073027410','title','Herren-Hautpflege','efcee6f98d20e47f8d05b5c9889d21438c476570efeedc4503580e603eb76042')
add('gid://shopify/Collection/634585940306','title','Sets','1e062c8031273c557416181e089157dd8d3af5cf49ddc62ed803f02f3e1f9864')
add('gid://shopify/Collection/699401601362','title','Alle Produkte','5477d32fd279ad1e70787fca2cf5490c9eb505935a39d65922dd9eeffad50e26')
add('gid://shopify/OnlineStoreTheme/205218971986','shopify.checkout.shop_policies.cookie_preferences','Cookies','141395eb35564fe50baa1839eb43315ec1880ae19f53b926611a483029a5a603')
json.dump(reg,open('reg/reg-final.json','w'),ensure_ascii=False)
# flatten into (rid, [tr]) units; split big resources (theme) into 60-key units
units=[]
for rid,trs in reg.items():
    for i in range(0,len(trs),60): units.append((rid,trs[i:i+60]))
units.sort(key=lambda u:-len(json.dumps(u,ensure_ascii=False)))
LIM=22000; chunks=[]
for u in units:
    s=len(json.dumps(u,ensure_ascii=False))
    for c in chunks:
        if c['size']+s<=LIM and len(c['u'])<40: c['u'].append(u); c['size']+=s; break
    else: chunks.append(dict(u=[u],size=s))
shutil.rmtree('reg/chunks',ignore_errors=True); os.makedirs('reg/chunks')
for n,c in enumerate(chunks):
    defs=[];body=[];vars={}
    for i,(rid,trs) in enumerate(c['u']):
        defs.append(f'$r{i}: ID!, $t{i}: [TranslationInput!]!')
        body.append(f'm{i}: translationsRegister(resourceId: $r{i}, translations: $t{i}) {{ userErrors {{ field message }} translations {{ key }} }}')
        vars[f'r{i}']=rid
        vars[f't{i}']=[dict(key=t['key'],locale='de',value=t['value'],translatableContentDigest=t['digest']) for t in trs]
    q='mutation('+', '.join(defs)+') { '+' '.join(body)+' }'
    json.dump(dict(query=q,variables=vars),open(f'reg/chunks/c{n:02d}.json','w'),ensure_ascii=False)
print(len(chunks),'chunks', [c['size']//1000 for c in chunks])
print('translations',sum(len(t) for t in reg.values()))
