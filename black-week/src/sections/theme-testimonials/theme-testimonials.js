// theme-testimonials – live theme nc-testimonials (section "testimonials", tp_widget: true).
// The theme has no JS of its own here: Trustpilot's bootstrap (settings.trustpilot_script, business unit
// 5d5bafba5563e40001e11a6e) turns .trustpilot-widget into the "Carousel" TrustBox (template 53aa8912dec7e10d38f59f36,
// 140px high). The mockup has no network, so we draw a static replica of that widget:
//  - summary: the theme's own Trustpilot numbers (settings nc_tp_score 4,7 / nc_tp_count 615, pr. 07-10-2026),
//  - review cards: MOCKUP STAND-INS (marked data-standin). The live widget shows real Trustpilot reviews, which are
//    not available offline; the footer line says so instead of Trustpilot's "Viser vores 4- og 5-stjernede anmeldelser".
// The fallback link stays in place if anything fails.
const SCORE = 4.7, COUNT = 615;
const TP_URL = 'https://dk.trustpilot.com/review/naturecell.dk';
const word = (s) => (s >= 4.3 ? 'Fremragende' : s >= 3.8 ? 'Rigtig godt' : s >= 2.8 ? 'Middel' : s >= 1.8 ? 'Dårligt' : 'Meget dårligt');
const STAR = 'M23 31.2l7.1-1.8 3 9.2L23 31.2zm16.4-11.9H26.9L23 7.4l-3.9 11.9H6.6l10.2 7.4-3.9 11.9 10.2-7.4 6.3-4.5 10.1-7.4z';

// Stand-in reviews: short, first-person, cosmetic language only (BRIEF copy rules). Replace with the real TrustBox.
const REVIEWS = [
  { stars: 5, title: 'Blød hud hele dagen', text: 'Jeg bruger dagcremen hver morgen. Den trækker hurtigt ind og efterlader huden blød.', name: 'Hanne', when: 'for 2 dage siden' },
  { stars: 5, title: 'Hurtig levering og venlig service', text: 'Pakken kom dagen efter, flot pakket, og jeg fik hurtigt svar på mit spørgsmål.', name: 'Mette', when: 'for 4 dage siden' },
  { stars: 5, title: 'Fast del af min aftenrutine', text: 'Olien har en mild duft, og min hud føles velplejet om morgenen.', name: 'Lars', when: 'for 6 dage siden' },
  { stars: 4, title: 'Fedter ikke', text: 'Håndcremen giver god fugt uden at fedte. Den står nu ved køkkenvasken.', name: 'Susanne', when: 'for 1 uge siden' },
  { stars: 5, title: 'Rart at handle dansk', text: 'Fin kvalitet fra en dansk familievirksomhed, og emballagen er rigtig pæn.', name: 'Karin', when: 'for 1 uge siden' },
  { stars: 5, title: 'Mild mod min sarte hud', text: 'Rensegelen er mild, og huden strammer ikke bagefter. Jeg køber den igen.', name: 'Jonas', when: 'for 2 uger siden' },
];

function starsSvg(score, cls = 'tp-stars') {
  const r = Math.round(score * 2) / 2;
  let s = `<svg class="${cls}" viewBox="0 0 251 46" aria-hidden="true" focusable="false">`;
  for (let i = 0; i < 5; i++) {
    const x = i * 51, fill = r - i;
    s += `<rect x="${x}" width="46" height="46" fill="#dcdce6"/>`;
    if (fill >= 1) s += `<rect x="${x}" width="46" height="46" fill="#00b67a"/>`;
    else if (fill >= 0.5) s += `<rect x="${x}" width="23" height="46" fill="#00b67a"/>`;
    s += `<path transform="translate(${x} 0)" fill="#fff" d="${STAR}"/>`;
  }
  return s + '</svg>';
}
const LOGO = '<span class="tp-logo"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 1.5l2.6 7.9H23l-6.8 4.9 2.6 7.9L12 17.3l-6.8 4.9 2.6-7.9L1 9.4h8.4z"/></svg>Trustpilot</span>';
const CHEV = (d) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;
const VER = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="11" fill="currentColor"/><path d="m7 12.5 3.2 3L17 9" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function hydrate(widget) {
  if (widget.dataset.tpHydrated) return;
  const count = COUNT.toLocaleString('da-DK');
  const score = String(SCORE).replace('.', ',');
  const cards = REVIEWS.map((r) =>
    `<a class="tp-rv" href="${TP_URL}" target="_blank" rel="noopener" data-standin>` +
      `<span class="tp-rv__top">${starsSvg(r.stars)}<span class="tp-rv__ver">${VER}Verificeret</span></span>` +
      `<span class="tp-rv__title">${esc(r.title)}</span>` +
      `<span class="tp-rv__text">${esc(r.text)}</span>` +
      `<span class="tp-rv__who"><b>${esc(r.name)}</b>, ${esc(r.when)}</span>` +
    '</a>').join('');
  const box = document.createElement('div');
  box.className = 'tp-cr';
  box.innerHTML =
    `<a class="tp-cr__sum" href="${TP_URL}" target="_blank" rel="noopener" aria-label="${word(SCORE)}: ${score} ud af 5 på Trustpilot, baseret på ${count} anmeldelser">` +
      `<span class="tp-cr__word">${word(SCORE)}</span>${starsSvg(SCORE)}` +
      `<span class="tp-cr__based">Baseret på <b>${count} anmeldelser</b></span>${LOGO}` +
    '</a>' +
    '<div class="tp-cr__main">' +
      '<div class="tp-cr__row">' +
        `<button type="button" class="tp-cr__arrow" data-dir="-1" aria-label="Forrige anmeldelse">${CHEV('m15 18-6-6 6-6')}</button>` +
        `<div class="tp-cr__track" role="list" aria-label="Anmeldelser på Trustpilot">${cards}</div>` +
        `<button type="button" class="tp-cr__arrow" data-dir="1" aria-label="Næste anmeldelse">${CHEV('m9 18 6-6-6-6')}</button>` +
      '</div>' +
      '<p class="tp-cr__foot" data-standin>Mockup: eksempler på anmeldelser – live-siden viser de rigtige fra Trustpilot</p>' +
    '</div>';
  box.querySelectorAll('.tp-rv').forEach((a) => a.setAttribute('role', 'listitem'));
  const fallback = widget.querySelector('.nc-testi__tp-fallback');
  if (fallback) fallback.style.display = 'none'; // the bootstrap replaces it with the iframe
  widget.appendChild(box);

  const track = box.querySelector('.tp-cr__track');
  const [prev, next] = box.querySelectorAll('.tp-cr__arrow');
  const step = () => {
    const card = track.querySelector('.tp-rv');
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return card ? card.getBoundingClientRect().width + gap : track.clientWidth;
  };
  const sync = () => {
    const max = track.scrollWidth - track.clientWidth;
    prev.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= max - 2;
  };
  [prev, next].forEach((b) => b.addEventListener('click', () => track.scrollBy({ left: step() * +b.dataset.dir })));
  track.addEventListener('scroll', sync, { passive: true });
  window.addEventListener('resize', sync);
  sync();
  widget.dataset.tpHydrated = '1';
}

export default function init(root) {
  root.querySelectorAll('.trustpilot-widget').forEach(hydrate);
}
