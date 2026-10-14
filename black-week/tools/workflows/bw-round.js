export const meta = {
  name: 'naturecell-bw-round',
  description: 'One round of the NatureCell Black Week loop: (round 1) port the live theme sections, then build → render → harsh critic + blind A/B judge for hero, offers and deals',
  phases: [
    { title: 'Theme port', detail: 'port the live theme standard sections 1:1' },
    { title: 'Build', detail: 'Black Week section builders' },
    { title: 'Shoot', detail: 'render ours + benchmark, blind A/B pairs' },
    { title: 'Critique', detail: 'harsh critic + blind judge' },
  ],
}

const ROOT = '/home/user/Naturecell/black-week'
const round = args.round
const ids = args.ids
const SHARED = `Project root: ${ROOT}. Read ${ROOT}/BRIEF.md first (creative brief, copy/legal rules, design-system rules, build contract, and "Page structure (v2)"). Design-system reference: ${ROOT}/ds/. Live theme source (the real naturecell.dk theme): ${ROOT}/theme-src/ (sections/*.liquid, snippets/, assets/nc-theme.css, assets/nc-theme.js, templates/index.json, sections/header-group.json, footer-group.json). Product packshots: ${ROOT}/assets/products/*.webp (PNG previews in assets/products-png/).`

const SPECS = {
  hero: `THE centerpiece – Three.js Black Week hero, directly under the live theme header (theme-header). Keep what already works (the judge preferred it 8/10 over the competitor) and push it to AAA: night-green stage, Philosopher headline "Black Week – i ro og mag.", lead, CTAs, honest end date, trust line; the Vidunder Olien amber dropper bottle with sage label in real-time 3D, viscous oil drop, glass bubbles, dotted feature line to a price tag, flat berry −25% bubble. Liquid realism is the #1 gap (oil pool, falling drop, pipette glass). Label art must match the real pack. No collisions between 3D bubbles and DOM elements. Mobile must be gorgeous and show the end date.`,
  offers: `NEW BRIEF – a 3-column Black Week offer highlight grid, directly under the hero. Three equal-width columns on desktop (stack or snap-scroll on mobile), each a rich offer tile with its own visual (real packshots from assets/products, composed with consistent shadows and truthful relative sizes): (1) "25% på hele hudplejeserien" – automatic, no code, CTA to shop all; (2) the HIGHLIGHT tile: Komplet Pakken 899 kr. (Førpris 1.198 kr., spar 299 kr.; værdi ved løskøb 1.646 kr.) – visually elevated (night green / larger / badge) as the Black Week hero offer, with "Læg i kurv" (ctx.store.add('komplet-pakken')); (3) "Gratis CBD Lip Balm ved køb over 699 kr." (værdi 79 kr.) + "Fri fragt over 399 kr.". Integrate the honest countdown to 30. november kl. 23.59 elegantly (one place, calm rolling digits). No copy repetition, no decorative elements colliding with text, tiles aligned on a shared baseline grid, text contrast ≥ 4.5:1. Must harmonise with the theme's container/gutters and with the hero above. Previous feedback on the old version of this section (a single card with three offers) still applies where relevant.`,
  deals: `"Black Week-favoritter" product grid (replaces the theme's bestsellers). Keep the strengths the judge praised (complete assortment, itemised bundle value, gift tile, compliance/trust footer, FLIP filters, fly-to-cart) and fix every critic point: product-truth (Komplet Pakken packshot must show the 4 products it contains – compose it from individual packshots if needed), consistent relative product scale across cards, aligned price/button rows, no dead space, legible type ≥ 11px on mobile, contrast, Label-in-Name, a "Hurtig visning" that never covers the product, and a visible premium moving-light/tilt effect. Adds to cart via ctx.store.add(id) (the theme cart drawer listens).`,
}

const BUILD_SCHEMA = { type: 'object', properties: { summary: { type: 'string' }, knownIssues: { type: 'array', items: { type: 'string' } }, sharedChangeRequests: { type: 'array', items: { type: 'string' } } }, required: ['summary', 'knownIssues'] }
const SHOOT_SCHEMA = { type: 'object', properties: { ok: { type: 'boolean' }, blindDir: { type: 'string' }, oursDir: { type: 'string' }, consoleErrors: { type: 'array', items: { type: 'string' } } }, required: ['ok', 'blindDir', 'oursDir', 'consoleErrors'] }
const JUDGE_SCHEMA = { type: 'object', properties: { winner: { type: 'string', enum: ['A', 'B'] }, confidence: { type: 'integer', minimum: 1, maximum: 10 }, desktopWinner: { type: 'string', enum: ['A', 'B'] }, mobileWinner: { type: 'string', enum: ['A', 'B'] }, reasonsA: { type: 'array', items: { type: 'string' } }, reasonsB: { type: 'array', items: { type: 'string' } }, whatTheLoserMustDoToWin: { type: 'array', items: { type: 'string' } } }, required: ['winner', 'confidence', 'desktopWinner', 'mobileWinner', 'reasonsA', 'reasonsB', 'whatTheLoserMustDoToWin'] }
const CRITIC_SCHEMA = { type: 'object', properties: { score: { type: 'integer', minimum: 0, maximum: 100 }, wowed: { type: 'boolean' }, verdict: { type: 'string' }, mustFix: { type: 'array', items: { type: 'object', properties: { issue: { type: 'string' }, where: { type: 'string' }, fix: { type: 'string' } }, required: ['issue', 'fix'] } }, brandOrCopyViolations: { type: 'array', items: { type: 'string' } }, bugs: { type: 'array', items: { type: 'string' } } }, required: ['score', 'wowed', 'verdict', 'mustFix', 'brandOrCopyViolations', 'bugs'] }

// ---------- round 1 only: port the live theme's standard sections ----------
let portP = Promise.resolve([])
if (args.portTheme) {
  phase('Theme port')
  const GROUPS = [
    ['theme-header', 'theme-cart', 'theme-footer'],
    ['theme-trust-bar', 'theme-trust', 'theme-shop-tabs', 'theme-press'],
    ['theme-lifestyle', 'theme-cases', 'theme-testimonials', 'theme-story'],
  ]
  const SRC = { 'theme-header': 'nc-header (settings from sections/header-group.json)', 'theme-cart': 'nc-cart-drawer', 'theme-footer': 'nc-footer (settings from sections/footer-group.json)', 'theme-trust-bar': 'nc-trust-bar – the "trust2" instance in templates/index.json', 'theme-trust': 'nc-trust-bar – the "trust" instance (with the Trustpilot block)', 'theme-shop-tabs': 'nc-shop-tabs ("shoptabs")', 'theme-press': 'nc-press', 'theme-lifestyle': 'nc-lifestyle', 'theme-cases': 'nc-cases-teaser', 'theme-testimonials': 'nc-testimonials', 'theme-story': 'nc-story' }
  portP = parallel(GROUPS.map((g, gi) => () => agent(`${SHARED}

You port standard sections of the LIVE NatureCell Shopify theme into this static mockup, 1:1. Your sections: ${g.map(id => `"${id}" ← theme section ${SRC[id]}`).join('; ')}.
For each: read ${ROOT}/theme-src/sections/<nc-…>.liquid (+ the snippets it renders, + its settings/blocks from theme-src/templates/index.json or the header/footer group JSON) and write static HTML that is exactly what that Liquid would render on the live homepage today: same markup structure, same class names, same copy and settings. Put it in ${ROOT}/src/sections/<id>/<id>.html (ONE root element with data-section="<id>" wrapping the section's own markup), any section-specific CSS from the Liquid ({% stylesheet %}, {% style %}, inline <style>) in <id>.css, and the section's behaviour (from theme-src/assets/nc-theme.js and inline scripts: menus, mega-menu, drawers, tabs, sliders, accordions, marquee) in <id>.js as export default function init(root, ctx).
The theme's global CSS is already loaded on the page (src/core/03-theme.css) – do NOT restyle the theme; it must look exactly like the live site. Theme images/fonts/video: ${ROOT}/assets/theme/ (reference as ../assets/theme/<file> from HTML/CSS). Products: use ctx/our packshots in ${ROOT}/assets/products/ (../assets/products/<file>) where the theme would show a Shopify product image; where an image is a Shopify CDN file we do not have, use the closest local asset or a tasteful neutral placeholder in the theme's palette (never a broken image). You may read real store content via the Shopify MCP tools (read-only, e.g. blog "kundecases" article titles/excerpts, product titles/prices) – never write to the store. Prices shown in theme sections are the normal prices; the Black Week price logic lives in the Black Week sections.
Special wiring: theme-header – the announcement bar shows the Black Week message ("Black Week: 25% på hele hudplejeserien – slutter mandag 30. november kl. 23.59"), the cart icon count follows ctx.store (store.on 'cart:add'/'cart:change') and clicking it calls ctx.store.openCart(). theme-cart – the theme's nc-cart-drawer, opened on ctx.store 'cart:open' and on 'cart:add', listing ctx.store lines with the products from ctx.byId (Black Week price + Førpris), qty steppers (store.setQty), free-shipping progress (399 kr.) and the gift (Lip Balm over 699 kr.); with ?open=1 prefill skin-oil + day-cream and open it.
Only edit files inside your own section folders. Build/check: node tools/build.mjs (full page) and node tools/shoot.mjs index.html shots/port${gi}/check --full ; also node tools/build.mjs --only <id> + node tools/shoot.mjs preview-<id>.html shots/<id>/work --el '[data-section="<id>"]'. Read the PNGs, compare against the Liquid/CSS, fix console errors, iterate until faithful at 1440 and 390. Return a summary.`, { label: `port:${g.join('+')}`, phase: 'Theme port', schema: BUILD_SCHEMA })))
}

// optional: repair the benchmark so the blind comparison stays a fair fight
const benchP = args.benchFix ? agent(`Project root: ${ROOT}. The benchmark page ${ROOT}/bench/index.html (+ bench.css/bench.js) is a deliberately conventional, top-tier DTC Black Friday page used as the blind competitor. Judges reported these defects in it – fix them so it is a strong, fair competitor (do not add WebGL; edit only files in ${ROOT}/bench/): ${args.benchFix}. Verify with node tools/shoot.mjs bench/index.html shots/bench/fix --el '[data-bench="hero"]' and Read the PNGs (desktop and mobile). Return a short summary.`, { label: 'bench-fix', phase: 'Build' }) : Promise.resolve(null)

const buildPrompt = (id) => `${SHARED}

You own exactly one Black Week section of the page: "${id}". Edit ONLY files in ${ROOT}/src/sections/${id}/. Other agents work in parallel on other sections.
SECTION SPEC – ${id}:
${SPECS[id]}
${round > 1 || id !== 'offers' ? `REVIEW FEEDBACK from the previous round – read it in full and address every point: ${ROOT}/review/${id}-r${round - 1}.md` : `Feedback on the previous (single-card) version of this section, for reference: ${ROOT}/review/offers-r1.md`}
Quality bar: beat the Black Week pages of the most admired pop-culture e-commerce brands side by side, while staying unmistakably NatureCell® and harmonising with the live theme around it (see BRIEF "Page structure (v2)"). AAA craft in every detail – spacing rhythm, optical alignment, type, texture, light, motion curves, physics feel, states, mobile.
Workflow: node tools/build.mjs --only ${id} ; node tools/shoot.mjs preview-${id}.html shots/${id}/work --el '[data-section="${id}"]' --frames 2 ; Read every PNG; iterate until you would be proud to ship it. Also check it in the full page: node tools/build.mjs && node tools/shoot.mjs index.html shots/${id}/page --full . Zero console errors.
Return: summary, known issues, shared-file change requests.`

const results = await pipeline(ids, async (id, _o, idx) => {
  const build = await agent(buildPrompt(id), { label: `build:${id}:r${round}`, phase: 'Build', schema: BUILD_SCHEMA })
  await benchP
  const swap = (idx + round) % 2 === 1
  const dir = `${ROOT}/shots/${id}/r${round}`
  const [oursAs, benchAs] = swap ? ['B', 'A'] : ['A', 'B']
  const shot = await agent(`Mechanical rendering task, run from ${ROOT}. Do not edit source files.
1. node tools/build.mjs --only ${id}
2. node tools/shoot.mjs preview-${id}.html ${dir}/ours --el '[data-section="${id}"]' --frames 2
3. node tools/shoot.mjs bench/index.html ${dir}/bench --el '[data-bench="${id}"]' --frames 2
4. mkdir -p ${dir}/blind; copy ours/desktop-el.png -> blind/${oursAs}-desktop.png, ours/mobile-el.png -> blind/${oursAs}-mobile.png, ours/desktop-f1.png -> blind/${oursAs}-desktop-motion1.png, ours/desktop-f2.png -> blind/${oursAs}-desktop-motion2.png; and bench/desktop-el.png -> blind/${benchAs}-desktop.png, bench/mobile-el.png -> blind/${benchAs}-mobile.png, bench/desktop-f1.png -> blind/${benchAs}-desktop-motion1.png, bench/desktop-f2.png -> blind/${benchAs}-desktop-motion2.png (fall back to desktop.png/mobile.png if an -el file is missing).
5. Return ok, blindDir=${dir}/blind, oursDir=${dir}/ours, and every console error/pageerror printed in step 2.`, { label: `shoot:${id}:r${round}`, phase: 'Shoot', schema: SHOOT_SCHEMA, effort: 'low' })
  if (!shot) return { id, error: 'shoot failed' }
  const [judge, critic] = await parallel([
    () => agent(`You are a blind judge on a panel of senior e-commerce creative directors. Two candidate designs, A and B, for the SAME section of a Danish skincare brand's Black Week homepage. You do not know who made either. Read every image in ${shot.blindDir} (A/B desktop, mobile, and *-motion*.png later frames showing animation). Judge side by side: which looks better, more premium and desirable, and which would convert better – visual craft (type, spacing, hierarchy, imagery, light, texture, motion), clarity of the offer, trust, mobile. Be decisive and specific; no ties. Then list exactly what the losing design must do to beat the winner.`, { label: `judge:${id}:r${round}`, phase: 'Critique', schema: JUDGE_SCHEMA, effort: 'high' }),
    () => agent(`${SHARED}

You are the harshest creative director in Scandinavian e-commerce, reviewing ONE Black Week section ("${id}") of the NatureCell® homepage before it goes to the client. You know every Black Friday page from SKIMS, Glossier, Rhode, Gymshark, Aesop, Apple. "Nice" is a fail. wowed=true only if it is genuinely AAA – better than those brands side by side – AND on-brand AND legally compliant AND it harmonises with the live NatureCell theme around it.
Spec: ${SPECS[id]}
Screenshots: ${shot.oursDir} (desktop-el.png = whole section at 1440, mobile-el.png = at 390 @2x, desktop.png/mobile.png first viewport, desktop-f1/f2.png later frames for motion/3D). Read all, and read the source in ${ROOT}/src/sections/${id}/ (copy, accessibility, motion/physics code, brand rules: tokens only, Philosopher/Roboto Flex, logo colours, bubbles never rotated, dotted feature lines, ® on NatureCell, spaced en-dashes and no em-dashes, no medical claims, no invented stats/fake scarcity, Førpris wording). Previous round's review (if any): ${ROOT}/review/${id}-r${round - 1}.md – check whether those points were really fixed.
Console errors: ${(shot.consoleErrors || []).join(' | ') || 'none'}
Score 0–100 (92+ = AAA, ship it). List every must-fix with a concrete fix, ordered by impact – pixel-level detail.`, { label: `critic:${id}:r${round}`, phase: 'Critique', schema: CRITIC_SCHEMA, effort: 'high' }),
  ])
  const oursLetter = swap ? 'B' : 'A'
  return { id, round, oursLetter, build, consoleErrors: shot.consoleErrors || [], judge, critic,
    wonBlind: !!(judge && judge.winner === oursLetter),
    passed: !!(critic && critic.wowed && critic.score >= 92 && judge && judge.winner === oursLetter && !(shot.consoleErrors || []).length) }
})
const ports = await portP
return { results, ports }
