#!/usr/bin/env bash
# Build the page, port it to canvas/, measure the real desktop/mobile heights in the canvas runtime harness,
# and write canvas/project/canvas.json + canvas/files.publish.json (diff against the previous publish list).
# Usage: tools/canvas-prep.sh <round-label> <prev-files.json>
set -e
cd "$(dirname "$0")/.."
LABEL="$1"; PREV="$2"
MINIFY=1 node tools/build.mjs >/dev/null
node tools/port-canvas.mjs 800 800 >/dev/null
cp .canvas-harness/support.js canvas/project/support.js
DH=$(node .canvas-harness/check.mjs canvas/project Main.dc.html /dev/null 1440 8000 2>/dev/null | grep -o 'contentBottom [0-9.]*' | awk '{print int($2+1)}')
MH=$(node .canvas-harness/check.mjs canvas/project Mobile.dc.html /dev/null 390 10000 2>/dev/null | grep -o 'contentBottom [0-9.]*' | awk '{print int($2+1)}')
node tools/port-canvas.mjs "$DH" "$MH"
rm -f canvas/project/support.js
python3 - "$LABEL" "$PREV" "$DH" "$MH" <<'PY'
import json, os, sys
label, prev, dh, mh = sys.argv[1], sys.argv[2], int(sys.argv[3]), int(sys.argv[4])
os.chdir('canvas')
prevset = {k for k, v in json.load(open(prev)).items() if v is not None} if os.path.exists(prev) else set()
cur = {}
for root, _, fs in os.walk('project'):
    for f in fs:
        p = os.path.join(root, f)
        if p != 'project/canvas.json':
            cur[p] = {'from': p, 'contentType': 'video/webm'} if p.endswith('.webm') else p
files = dict(cur)
for p in prevset:
    if p not in cur and not p.startswith('project/ds/'): files[p] = None
cj = {"v": 3, "createdOnFiles": {"v": 1, "at": "2026-10-13T22:40:00Z"}, "title": "NatureCell Black Week", "launch": {"view": "canvas"}, "pages": [],
      "boards": {"Main.dc.html": {"x": 0, "y": 0, "w": 1440, "h": dh, "title": f"Black Week – desktop ({label})", "expand": "fill", "is_interactive": True},
                 "Mobile.dc.html": {"x": 1520, "y": 0, "w": 390, "h": mh, "title": f"Black Week – mobil ({label})", "expand": "fill", "is_interactive": True}},
      "order": ["Main.dc.html", "Mobile.dc.html"], "notes": {},
      "designSystems": [{"title": "NatureCell Design System", "namespace": "naturecelldesignsystem_52829d", "artifact": "https://claude.ai/code/artifact/0e58229d-a63d-423e-9fed-5bc0026671b3", "version": "1791886214-ff4b", "copiedAt": "2026-10-13T22:40:00Z"}]}
json.dump(cj, open('project/canvas.json', 'w'), ensure_ascii=False)
json.dump(files, open('files.publish.json', 'w'))
print(f"heights desktop {dh} mobile {mh}; {len(files)} files ({sum(v is None for v in files.values())} removed)")
PY
