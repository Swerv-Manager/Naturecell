// NatureCell Black Week – shared runtime. Sections register an init(root, ctx) via reg(); boot() runs them.
// ctx = { store, clock, fmt, products, campaign, assets, prefersReducedMotion, isMobile }
import { products, campaign } from './data.js';

const registry = [];
export function reg(id, init) { registry.push([id, init]); }

// ---- simulated campaign clock: mockup pretends it is Black Friday 27 Nov 2026 10:00 (CET) and ticks forward
const SIM_START = Date.parse('2026-11-27T10:00:00+01:00');
const t0 = performance.now();
export const clock = { now: () => SIM_START + (performance.now() - t0), end: Date.parse(campaign.endsAt), start: Date.parse(campaign.startsAt) };

// ---- tiny store with events (cart)
const listeners = new Set();
const state = { cart: [] }; // [{id, qty}]
export const store = {
  get: () => state,
  on: (fn) => (listeners.add(fn), () => listeners.delete(fn)),
  emit: (type, detail) => listeners.forEach(fn => fn(type, detail, state)),
  add(id, qty = 1) { const l = state.cart.find(x => x.id === id); l ? (l.qty += qty) : state.cart.push({ id, qty }); this.emit('cart:add', { id, qty }); },
  setQty(id, qty) { const l = state.cart.find(x => x.id === id); if (!l) return; l.qty = Math.max(0, qty); if (!l.qty) state.cart.splice(state.cart.indexOf(l), 1); this.emit('cart:change', { id }); },
  count: () => state.cart.reduce((s, l) => s + l.qty, 0),
  subtotal: () => state.cart.reduce((s, l) => s + l.qty * byId[l.id].price, 0),
  openCart() { this.emit('cart:open'); },
};
export const byId = Object.fromEntries(products.map(p => [p.id, p]));

// ---- formatting (Danish)
export const fmt = {
  kr: (n) => `${Math.round(n).toLocaleString('da-DK')} kr.`,
  pct: (n) => `${Math.round(n)}%`,
};

// assets/ sits one level above the bundle (dist/app.js → ../assets/), resolved from the script URL so it also
// works when the bundle is loaded from another folder (e.g. a Design canvas artboard).
const SCRIPT_SRC = document.currentScript && document.currentScript.src;
export const ASSETS = window.NC_ASSET_BASE || (SCRIPT_SRC ? new URL('../assets/', SCRIPT_SRC).href : '../assets/');
export const asset = (p) => ASSETS + p;

export function boot() {
  const ctx = { store, clock, fmt, products, byId, campaign, asset,
    prefersReducedMotion: matchMedia('(prefers-reduced-motion: reduce)').matches,
    isMobile: () => matchMedia('(max-width: 760px)').matches };
  // run() is idempotent: each section root is initialised once. Inside a Design-canvas artboard the markup is
  // rendered after this script loads, so we also wait for the sections to appear (MutationObserver).
  const run = () => {
    let found = 0;
    for (const [id, init] of registry) {
      const root = document.querySelector(`[data-section="${id}"]`);
      if (!root) continue;
      found++;
      if (root.dataset.ncInit) continue;
      root.dataset.ncInit = '1';
      try { init(root, ctx); } catch (e) { console.error(`[section ${id}]`, e); }
    }
    const io = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('[data-reveal]:not(.is-in)').forEach(el => io.observe(el));
    return found;
  };
  const start = () => {
    if (run() >= registry.length) return;
    const mo = new MutationObserver(() => { if (run() >= registry.length) mo.disconnect(); });
    mo.observe(document.body, { childList: true, subtree: true });
    setTimeout(() => mo.disconnect(), 20000);
  };
  window.NCBW = { ctx, run };
  if (!window.NC_DEFER_BOOT) (document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', start) : start());
}
