// theme-cases – live theme nc-cases-teaser (section "cases"). Behaviour ported from theme-src/assets/nc-theme.js:
//  - "Vandrette rails: pil-knapper": [data-nc-rail-prev/next] scroll the rail by max(320px, 70% of its width),
//  - "Rails med synlig indikator": [data-nc-rail] gets is-more / is-before (edge fade, CSS in 03-theme.css) and a
//    .nc-raildots row with one dot per "page" after the rail (hidden when everything fits).
// Plus the CBD icon sprite (snippets/nc-cbd-sprite.liquid) that the theme layout renders once per page.
import { ensureCbdSprite } from './cbd-sprite.js';

function arrows(wrap) {
  const rail = wrap.querySelector('[data-nc-railscroll]');
  if (!rail) return;
  wrap.querySelectorAll('[data-nc-rail-prev]').forEach((b) => b.addEventListener('click', () => {
    rail.scrollBy({ left: -Math.max(320, rail.clientWidth * 0.7), behavior: 'smooth' });
  }));
  wrap.querySelectorAll('[data-nc-rail-next]').forEach((b) => b.addEventListener('click', () => {
    rail.scrollBy({ left: Math.max(320, rail.clientWidth * 0.7), behavior: 'smooth' });
  }));
}

function indicator(rail) {
  if (rail.dataset.ncRailInit) return;
  rail.dataset.ncRailInit = '1';
  let dots = null, pages = 0;
  if (rail.getAttribute('data-nc-rail') !== 'nodots') {
    dots = document.createElement('div');
    dots.className = 'nc-raildots';
    dots.setAttribute('aria-hidden', 'true');
    dots.hidden = true;
    rail.insertAdjacentElement('afterend', dots);
  }
  function build() {
    const n = rail.clientWidth ? Math.ceil((rail.scrollWidth - 2) / rail.clientWidth) : 1;
    if (n === pages) return;
    pages = n;
    dots.innerHTML = '';
    dots.hidden = n < 2;
    for (let i = 0; i < n; i++) {
      const b = document.createElement('button');
      b.type = 'button';
      b.tabIndex = -1;
      b.addEventListener('click', () => rail.scrollTo({ left: i * rail.clientWidth, behavior: 'smooth' }));
      dots.appendChild(b);
    }
  }
  function update() {
    const max = rail.scrollWidth - rail.clientWidth;
    rail.classList.toggle('is-more', rail.scrollLeft < max - 4);
    rail.classList.toggle('is-before', rail.scrollLeft > 4);
    if (!dots) return;
    build();
    if (pages < 2) return;
    const cur = rail.scrollLeft >= max - 4 ? pages - 1 : Math.min(pages - 1, Math.round(rail.scrollLeft / rail.clientWidth));
    Array.from(dots.children).forEach((b, i) => b.classList.toggle('is-active', i === cur));
  }
  rail.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  if ('ResizeObserver' in window) new ResizeObserver(update).observe(rail);
  update();
}

export default function init(root) {
  ensureCbdSprite();
  root.querySelectorAll('[data-nc-railwrap]').forEach(arrows);
  root.querySelectorAll('[data-nc-rail]').forEach(indicator);
}
