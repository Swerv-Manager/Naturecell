// theme-shop-tabs – behaviour of the live theme's nc-shop-tabs, ported from theme-src/assets/nc-theme.js
// ("Faneblade" [data-nc-tabs] and "Rails med synlig indikator" [data-nc-rail]) and theme-src/assets/nc-packshot.js
// (packshots on the same bottom line). Same logic, scoped to this section's root.
import { initPackshots } from './packshot.js';

function tabs(root) {
  root.querySelectorAll('[data-nc-tabs]').forEach((box) => {
    const tabEls = [...box.querySelectorAll('[data-nc-tab]')];
    const panels = [...box.querySelectorAll('[data-nc-panel]')];
    tabEls.forEach((tab) => {
      tab.addEventListener('click', () => {
        const key = tab.getAttribute('data-nc-tab');
        tabEls.forEach((t) => { t.classList.toggle('is-active', t === tab); t.setAttribute('aria-selected', t === tab ? 'true' : 'false'); });
        panels.forEach((p) => { p.hidden = p.getAttribute('data-nc-panel') !== key; });
      });
    });
  });
}

/* Rails med synlig indikator (kundens mobiloptimering 08-10): fade i kanten naar der er mere at se,
   og prikker pr. "side" under railen (data-nc-rail="nodots" giver kun fade). */
function rails(root) {
  root.querySelectorAll('[data-nc-rail]').forEach((rail) => {
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
      [...dots.children].forEach((b, i) => b.classList.toggle('is-active', i === cur));
    }
    rail.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    if ('ResizeObserver' in window) new ResizeObserver(update).observe(rail);
    update();
  });
}

export default function init(root) {
  tabs(root);
  rails(root);
  initPackshots(root);
}
