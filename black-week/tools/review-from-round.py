# Turn a round workflow's output into review/<id>-r<round>.md files + print a scoreboard.
import json, sys
d = json.load(open(sys.argv[1]))['result']
for r in d['results']:
    c, j, o, won = r['critic'], r['judge'], r['oursLetter'], r['wonBlind']
    side = lambda L: 'yours' if L == o else 'competitor'
    print(f"{r['id']}: critic {c['score']} wowed={c['wowed']} | blind {'WON' if won else 'lost'} {j['confidence']}/10 (desktop {side(j['desktopWinner'])}, mobile {side(j['mobileWinner'])}) | console errors {len(r['consoleErrors'])} | passed {r['passed']}")
    print('   ', c['verdict'][:700].replace('\n', ' '))
    txt = f"CRITIC (score {c['score']}/100, wowed={c['wowed']}): {c['verdict']}\nMUST FIX:\n" + "\n".join(
        f"{i+1}. {m['issue']}{' [' + m['where'] + ']' if m.get('where') else ''} -> {m['fix']}" for i, m in enumerate(c['mustFix'])) + f"""
BRAND/COPY VIOLATIONS: {' | '.join(c['brandOrCopyViolations']) or 'none'}
BUGS: {' | '.join(c['bugs']) or 'none'}
CONSOLE ERRORS: {' | '.join(r['consoleErrors']) or 'none'}
BLIND JUDGE: {'preferred YOUR section' if won else 'preferred the COMPETITOR'} (confidence {j['confidence']}/10; desktop winner {side(j['desktopWinner'])}, mobile winner {side(j['mobileWinner'])}).
What the judge liked about yours: {' | '.join(j['reasonsA'] if o == 'A' else j['reasonsB'])}
What the judge liked about the competitor: {' | '.join(j['reasonsB'] if o == 'A' else j['reasonsA'])}
What the losing side must do to win (if you lost on any device, do it): {' | '.join(j['whatTheLoserMustDoToWin'])}
"""
    open(f"review/{r['id']}-r{r['round']}.md", 'w').write(txt)
for p in d.get('ports') or []:
    if p: print('PORT:', p['summary'][:400].replace('\n', ' '), '| issues:', '; '.join(p.get('knownIssues', []))[:400])
