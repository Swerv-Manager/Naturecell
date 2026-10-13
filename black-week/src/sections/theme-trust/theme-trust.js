// theme-trust – live theme nc-trust-bar, instance "trust" (Trustpilot block style: widget, mobile_mode: tp).
// 1) CBD icon sprite (see cbd-sprite.js).
// 2) TrustBox: on the live site settings.trustpilot_script loads Trustpilot's bootstrap, which replaces the fallback
//    link inside .trustpilot-widget with the "Micro Combo" widget (template 5419b6ffb0d04a076446a9af). The mockup has
//    no network, so we draw the same widget statically from the theme's own Trustpilot numbers
//    (settings nc_tp_score 4,7 and nc_tp_count 615, pr. 07-10-2026). The fallback link stays if anything fails.
import { ensureCbdSprite } from './cbd-sprite.js';

const SCORE = 4.7, COUNT = 615;
// Trustpilot's rating words (da-DK) and star image rounding (nearest half star)
const word = (s) => (s >= 4.3 ? 'Fremragende' : s >= 3.8 ? 'Rigtig godt' : s >= 2.8 ? 'Middel' : s >= 1.8 ? 'Dårligt' : 'Meget dårligt');
const STAR = 'M23 31.2l7.1-1.8 3 9.2L23 31.2zm16.4-11.9H26.9L23 7.4l-3.9 11.9H6.6l10.2 7.4-3.9 11.9 10.2-7.4 6.3-4.5 10.1-7.4z';

function starsSvg(score) {
  const r = Math.round(score * 2) / 2;
  let s = '<svg class="tp-mc__stars" viewBox="0 0 251 46" aria-hidden="true" focusable="false">';
  for (let i = 0; i < 5; i++) {
    const x = i * 51, fill = r - i;
    s += `<rect x="${x}" width="46" height="46" fill="#dcdce6"/>`;
    if (fill >= 1) s += `<rect x="${x}" width="46" height="46" fill="#00b67a"/>`;
    else if (fill >= 0.5) s += `<rect x="${x}" width="23" height="46" fill="#00b67a"/>`;
    s += `<path transform="translate(${x} 0)" fill="#fff" d="${STAR}"/>`;
  }
  return s + '</svg>';
}

// Like the TrustBox iframe, the row never wraps: if the slot is narrower than the content it scales down a little.
function fit(a) {
  const inner = a.firstElementChild;
  if (!inner) return;
  inner.style.transform = '';
  const s = Math.min(1, a.clientWidth / inner.scrollWidth);
  if (s < 1) inner.style.transform = `scale(${s.toFixed(3)})`;
}

function hydrate(widget) {
  const a = widget.querySelector('a');
  if (!a || widget.dataset.tpHydrated) return;
  const color = widget.getAttribute('data-text-color') || '#2f4b45';
  const count = COUNT.toLocaleString('da-DK');
  a.className = 'tp-mc';
  a.style.setProperty('--tp-text', color);
  a.setAttribute('aria-label', `${word(SCORE)}: ${String(SCORE).replace('.', ',')} ud af 5 på Trustpilot, ${count} anmeldelser`);
  a.innerHTML = '<span class="tp-mc__in">' +
    `<span class="tp-mc__word">${word(SCORE)}</span>${starsSvg(SCORE)}` +
    `<span class="tp-mc__count"><b>${count}</b> anmeldelser på</span>` +
    '<span class="tp-mc__logo"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 1.5l2.6 7.9H23l-6.8 4.9 2.6 7.9L12 17.3l-6.8 4.9 2.6-7.9L1 9.4h8.4z"/></svg>Trustpilot</span></span>';
  fit(a);
  window.addEventListener('resize', () => fit(a));
  if (document.fonts) document.fonts.ready.then(() => fit(a));
  widget.dataset.tpHydrated = '1';
}

export default function init(root) {
  ensureCbdSprite();
  root.querySelectorAll('.trustpilot-widget').forEach(hydrate);
}
