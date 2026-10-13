// theme-header: behaviour of the live theme's nc-header (theme-src/assets/nc-theme.js: "Megamenu + mobilnav",
// "Faneblade", favourites count), wired to the mockup store: the cart count follows ctx.store and the cart
// button opens the theme-cart drawer through ctx.store.openCart().
import { packshots } from './packshot.js';

export default function init(root, ctx) {
  const $ = (s, r = root) => r.querySelector(s);
  const $all = (s, r = root) => Array.from(r.querySelectorAll(s));
  const header = $('[data-nc-header]');
  const panel = $('[data-nc-mega]');
  const toggles = $all('[data-nc-mega-toggle]');
  const mob = $('[data-nc-mobilenav]');
  const burger = $('[data-nc-burger]');
  const html = document.documentElement;

  // --- Megamenu (click toggles, outside click closes)
  const setMega = (open) => {
    panel.classList.toggle('is-open', open);
    toggles.forEach(b => b.setAttribute('aria-expanded', open ? 'true' : 'false'));
  };
  toggles.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    setMega(!panel.classList.contains('is-open'));
  }));
  document.addEventListener('click', (e) => {
    if (panel.classList.contains('is-open') && !header.contains(e.target)) setMega(false);
  });

  // --- Tabs in the megamenu (data-nc-tabs)
  $all('[data-nc-tabs]').forEach((tabsRoot) => {
    const tabs = $all('[data-nc-tab]', tabsRoot);
    const panels = $all('[data-nc-panel]', tabsRoot);
    tabs.forEach(tab => tab.addEventListener('click', () => {
      const key = tab.getAttribute('data-nc-tab');
      tabs.forEach(t => { t.classList.toggle('is-active', t === tab); t.setAttribute('aria-selected', t === tab ? 'true' : 'false'); });
      panels.forEach(p => { p.hidden = p.getAttribute('data-nc-panel') !== key; });
    }));
  });

  // --- Mobile nav
  const setMob = (open) => {
    mob.classList.toggle('is-open', open);
    mob.setAttribute('aria-hidden', open ? 'false' : 'true');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    html.classList.toggle('nc-lock', open);
    if (open) { const c = $('.nc-mobilenav__head [data-nc-close]'); c && c.focus({ preventScroll: true }); }
  };
  burger.addEventListener('click', () => setMob(!mob.classList.contains('is-open')));
  $all('[data-nc-close]', mob).forEach(b => b.addEventListener('click', () => { setMob(false); burger.focus({ preventScroll: true }); }));

  // --- Escape closes megamenu and mobile nav (the cart drawer handles its own Escape)
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (panel.classList.contains('is-open')) setMega(false);
    if (mob.classList.contains('is-open')) { setMob(false); burger.focus({ preventScroll: true }); }
  });

  // --- Cart: count follows the store, the button opens the drawer
  const counts = $all('[data-nc-cart-count]');
  const paintCart = () => {
    const n = ctx.store.count();
    counts.forEach((el) => { el.textContent = n; el.classList.toggle('is-empty', n === 0); });
  };
  ctx.store.on((type) => { if (type === 'cart:add' || type === 'cart:change') paintCart(); });
  paintCart();
  $all('[data-nc-cart-open]').forEach(b => b.addEventListener('click', (e) => { e.preventDefault(); ctx.store.openCart(); }));

  // --- Favourites count (localStorage 'nc_favs', same key as the theme)
  const favCounts = $all('[data-nc-fav-count]');
  const paintFavs = () => {
    let list = [];
    try { list = JSON.parse(localStorage.getItem('nc_favs') || '[]') || []; } catch (e) { list = []; }
    favCounts.forEach((el) => { el.textContent = list.length; el.classList.toggle('is-empty', list.length === 0); });
  };
  window.addEventListener('nc-favs-changed', paintFavs);
  paintFavs();

  // --- Skip link: the mockup has no #nc-main, so point it at the first section after the header
  const skip = $('.nc-skip-link');
  if (skip && !document.getElementById('nc-main')) {
    skip.addEventListener('click', (e) => {
      const next = root.nextElementSibling;
      if (!next) return;
      e.preventDefault();
      if (!next.hasAttribute('tabindex')) next.setAttribute('tabindex', '-1');
      next.focus();
    });
  }

  // --- Packshots on one baseline (nc-packshot.js) for the megamenu cards
  packshots(root);
}
