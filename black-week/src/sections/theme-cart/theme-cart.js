// theme-cart: the live theme's nc-cart-drawer, rendered from ctx.store instead of Shopify's cart object.
// Markup mirrors theme-src/sections/nc-cart-drawer.liquid line for line; behaviour mirrors nc-theme.js
// ("Kurv": openDrawer/closeDrawer, overlay + close buttons, qty buttons, terms checkbox gating the checkout).
// The Black Week price comes in as Shopify would deliver it: an automatic discount allocation on each line
// ("Black Week"), and the gift (CBD Lip Balm over 699 kr.) as a free line with its own allocation.

const SITE = 'https://naturecell.dk';
// Shopify money format of the store: "{{amount_with_comma_separator}} kr"
const money = (n) => n.toLocaleString('da-DK', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' kr';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const ICON = '<span class="nc-cbd-i"><svg class="nc-cbd" aria-hidden="true" focusable="false"><use href="#nc-cbd"></use></svg></span>';
// snippets/nc-cbd.liquid: "CBD" is shown as the pill icon, never as text
const cbd = (t) => esc(t).replace(/CBD-/g, '\u0001').replace(/CBD/g, ICON).replace(/\u0001/g, `<span class="nc-cbd-w">${ICON}-</span>`);

// item.product.title / item.url as the live store has them (13-10-2026); bundles keep the campaign's package names
const LIVE = {
  'skin-oil': ['Hudpleje Olie med 1000mg CBD | 30ml', '/products/cbd-olie-1000mg'],
  'day-cream': ['Dagcreme NatureCell | Dagcreme, 50ml', '/products/dagcreme'],
  'night-cream': ['Natcreme NatureCell | Natcreme, 50ml', '/products/natcreme'],
  'serum': ['Hyaluronic Serum med CBD | 30ml', '/products/naturecell-cbd-hyaluronic-serum'],
  'cleansing-gel': ['Rensegel med CBD | 100ml', '/products/rensegel'],
  'body-lotion': ['Bodylotion med CBD - 200ml', '/products/bodylotion'],
  'shampoo': ['Shampoo med CBD | 300ml', '/products/shampoo-300ml'],
  'komplet-pakken': ['Komplet Pakken', '/products/hudpleje-startpakke-plus-1'],
  'all-day-facial': ['All Day Facial', '/collections/sampakker'],
  'lip-balm': ['Lip Balm | med CBD 6ml', '/products/lip-balm'],
};
// Our packshots have different amounts of air around the product; live line images are tight square packshots.
// Per-image fit (scale, dx %, dy %) computed from each file's alpha bounding box, so products fill the 74px box alike.
const FIT = {"skin-oil": [1.318, 0.21, -2.04], "day-cream": [0.954, -3.42, -2.04], "night-cream": [0.952, -3.63, -2.12], "serum": [1.134, -3.04, -5.79], "cleansing-gel": [0.994, 0.0, -0.67], "body-lotion": [1.024, 0.54, -4.58], "shampoo": [0.927, -0.79, -0.62], "komplet-pakken": [0.958, -5.87, -0.25], "all-day-facial": [0.959, -6.67, -0.29]};
const fitStyle = (id) => (FIT[id] ? ` style="transform: scale(${FIT[id][0]}) translate(${FIT[id][1]}%, ${FIT[id][2]}%);"` : '');
// Lip balm: no local packshot – neutral placeholder in the theme palette (white stick, sage label)
const LIP_BALM_IMG = '<svg viewBox="22 16 56 76" width="100%" height="100%" aria-hidden="true" style="display:block"><ellipse cx="50" cy="86.4" rx="9" ry="1.8" fill="rgba(62,93,88,0.13)"/><rect x="43" y="22" width="14" height="20" rx="2.6" fill="#fff" stroke="rgba(62,93,88,0.22)" stroke-width=".7"/><rect x="43" y="42" width="14" height="44.4" rx="1.6" fill="#fff" stroke="rgba(62,93,88,0.22)" stroke-width=".7"/><rect x="43" y="49" width="14" height="30" fill="#80A097"/><path d="M45 41.6h10" stroke="rgba(62,93,88,0.22)" stroke-width=".9"/></svg>';

const X16 = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>';
const X22 = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>';
const TRUCK = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 18H3V6h12v4"/><path d="M14 9h4l3 3v6h-2"/><circle cx="7.5" cy="18.5" r="1.5"/><circle cx="17.5" cy="18.5" r="1.5"/></svg>';
const BAG = '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>';

export default function init(root, ctx) {
  const { store, byId, campaign, asset } = ctx;
  const drawer = root.querySelector('[data-nc-drawer]');
  const html = document.documentElement;
  let lastFocus = null;
  let termsChecked = false;

  // Cart as Shopify would return it: lines with original/final prices and discount allocations
  function cartModel() {
    const items = store.get().cart.map(({ id, qty }) => {
      const p = byId[id];
      const [title, path] = LIVE[id] || [p.name, '/collections/cbd-hudpleje'];
      const disc = p.save * qty;
      return { key: id, p, qty, title, url: SITE + path, img: p.img ? asset(p.img) : null,
        original: p.price0 * qty, final: p.price * qty, unitWas: p.price0,
        allocations: disc > 0 ? [{ title: campaign.name, amount: disc }] : [] };
    });
    const sub = items.reduce((s, l) => s + l.final, 0);
    const gift = byId[campaign.giftId];
    if (gift && sub >= campaign.giftThreshold) {
      const [title, path] = LIVE[gift.id];
      items.push({ key: gift.id, p: gift, qty: 1, title, url: SITE + path, img: null, gift: true,
        original: campaign.giftValue, final: 0, unitWas: null,
        allocations: [{ title: `Gave ved køb over ${campaign.giftThreshold} kr.`, amount: campaign.giftValue }] });
    }
    const total = items.reduce((s, l) => s + l.final, 0);
    const totalDiscount = items.reduce((s, l) => s + l.allocations.reduce((a, d) => a + d.amount, 0), 0);
    return { items, total, totalDiscount, count: items.reduce((s, l) => s + l.qty, 0) };
  }

  function lineHtml(l) {
    const media = l.img ? `<img src="${l.img}" alt="" loading="lazy" width="148" height="148"${fitStyle(l.p.id)}>` : (l.p.id === 'lip-balm' ? LIP_BALM_IMG : '');
    const qty = l.gift
      ? `<span class="nc-drawer__qty theme-cart-gift-qty" aria-label="Antal 1">1</span>`
      : `<span class="nc-drawer__qty">
                  <button type="button" data-nc-line="${l.key}" data-nc-line-qty="${l.qty - 1}" aria-label="Færre">−</button>
                  <span>${l.qty}</span>
                  <button type="button" data-nc-line="${l.key}" data-nc-line-qty="${l.qty + 1}" aria-label="Flere">+</button>
                </span>`;
    return `<div class="nc-drawer__line">
            <a class="nc-drawer__line-media" href="${l.url}" tabindex="-1" aria-hidden="true">${media}</a>
            <div class="nc-drawer__line-info">
              <a class="nc-drawer__line-title" href="${l.url}">${cbd(l.title)}</a>${
              l.unitWas ? `<span class="nc-drawer__line-meta">Førpris ${money(l.unitWas)}${l.qty > 1 ? ' / stk.' : ''}</span>` : ''}${
              l.allocations.map(d => `<span class="nc-drawer__line-discount">${esc(d.title)} −${money(d.amount)}</span>`).join('')}
              <div class="nc-drawer__line-row">
                ${qty}
                <span class="nc-drawer__line-price">${l.allocations.length ? `<s class="nc-drawer__line-was">${money(l.original)}</s> ` : ''}${money(l.final)}</span>
              </div>
            </div>${l.gift ? '' : `
            <button class="nc-drawer__remove" type="button" data-nc-line="${l.key}" data-nc-line-qty="0" aria-label="Fjern">${X16}</button>`}
          </div>`;
  }

  function render() {
    const cart = cartModel();
    const limit = campaign.freeShipping;
    const pct = Math.min(100, Math.floor(cart.total * 100 / limit));
    const head = `<div class="nc-drawer__head">
      <h2>Din kurv</h2>
      <button class="nc-drawer__close" type="button" data-nc-cart-close aria-label="Luk kurv">${X22}</button>
    </div>`;
    let body;
    if (cart.count > 0) {
      body = `<div class="nc-drawer__ship">
        <p>${TRUCK}<span>${cart.total >= limit ? 'Du har fri fragt' : `Køb for ${money(limit - cart.total)} mere og få fri fragt`}</span></p>
        <div class="nc-drawer__bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}" aria-label="Fri fragt-status">
          <div class="nc-drawer__fill" style="width: ${pct}%;"></div>
        </div>
      </div>
      <div class="nc-drawer__lines">${cart.items.map(lineHtml).join('')}</div>
      <div class="nc-drawer__foot">${cart.totalDiscount > 0 ? `
        <div class="nc-drawer__savings">
          <span>Du sparer i alt</span>
          <span>−${money(cart.totalDiscount)}</span>
        </div>` : ''}
        <div class="nc-drawer__totals">
          <span>Subtotal</span>
          <strong>${money(cart.total)}</strong>
        </div>
        <label class="nc-terms nc-drawer__terms" data-nc-terms-scope>
          <input type="checkbox" data-nc-terms${termsChecked ? ' checked' : ''}>
          <span>Jeg accepterer <a href="${SITE}/policies/terms-of-service" target="_blank" rel="noopener">handelsbetingelserne</a></span>
        </label>
        <a class="nc-drawer__checkout" href="${SITE}/cart/checkout" data-nc-terms-btn aria-disabled="${termsChecked ? 'false' : 'true'}">Gå til kassen →</a>
        <p class="nc-drawer__note">Moms inkluderet · fragt beregnes ved kassen</p>
      </div>`;
    } else {
      body = `<div class="nc-drawer__empty">
        ${BAG}
        <p>Din kurv er tom</p>
        <a href="${SITE}/collections/cbd-hudpleje" data-nc-cart-close>Shop hudpleje</a>
      </div>`;
    }
    // Like the theme's Section Rendering refresh: replace the drawer's contents, keep its open state.
    // Mockup nicety: keep keyboard focus on the qty button that was pressed.
    const a = document.activeElement;
    const refocus = a && drawer.contains(a) && a.matches('[data-nc-line]') ? a.getAttribute('data-nc-line') + '|' + a.getAttribute('aria-label') : null;
    drawer.innerHTML = `<div class="nc-drawer__overlay" data-nc-drawer-overlay></div>\n  <div class="nc-drawer__panel">\n    ${head}${body}</div>`;
    if (refocus) {
      const [key, label] = refocus.split('|');
      const btn = drawer.querySelector(`[data-nc-line="${key}"][aria-label="${label}"]`) || drawer.querySelector('.nc-drawer__close');
      btn && btn.focus({ preventScroll: true });
    }
  }

  function openDrawer() {
    if (!drawer.classList.contains('is-open')) lastFocus = document.activeElement;
    drawer.classList.add('is-open');
    drawer.removeAttribute('inert');
    html.classList.add('nc-lock');
    // move focus into the dialog only after a real user action (not for the ?open=1 deep link)
    const active = !navigator.userActivation || navigator.userActivation.hasBeenActive;
    const close = drawer.querySelector('.nc-drawer__close');
    if (active) requestAnimationFrame(() => close && close.focus({ preventScroll: true }));
  }
  function closeDrawer() {
    if (!drawer.classList.contains('is-open')) return;
    drawer.classList.remove('is-open');
    drawer.setAttribute('inert', '');
    html.classList.remove('nc-lock');
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }

  drawer.addEventListener('click', (e) => {
    const t = e.target;
    if (t.closest('[data-nc-cart-close]')) { e.preventDefault(); closeDrawer(); return; }
    if (t.closest('[data-nc-drawer-overlay]')) { closeDrawer(); return; }
    const lineBtn = t.closest('[data-nc-line-qty]');
    if (lineBtn) { e.preventDefault(); store.setQty(lineBtn.getAttribute('data-nc-line'), parseInt(lineBtn.getAttribute('data-nc-line-qty'), 10)); return; }
    const btn = t.closest('[data-nc-terms-btn]');
    if (btn && btn.getAttribute('aria-disabled') === 'true') {
      e.preventDefault();
      const box = drawer.querySelector('[data-nc-terms]');
      if (box) box.focus();
      return;
    }
    if (btn) e.preventDefault(); // mockup: no real checkout
  });
  drawer.addEventListener('change', (e) => {
    if (!e.target.matches('[data-nc-terms]')) return;
    termsChecked = e.target.checked;
    const btn = drawer.querySelector('[data-nc-terms-btn]');
    if (btn) btn.setAttribute('aria-disabled', termsChecked ? 'false' : 'true');
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
    // keep Tab inside the open drawer (aria-modal)
    if (e.key === 'Tab' && drawer.classList.contains('is-open')) {
      const f = Array.from(drawer.querySelectorAll('a[href]:not([tabindex="-1"]), button, input')).filter(el => el.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  store.on((type) => {
    if (type === 'cart:add') { render(); openDrawer(); }
    else if (type === 'cart:change') render();
    else if (type === 'cart:open') { render(); openDrawer(); }
  });

  render();

  // ?open=1: prefill skin oil + day cream and open the drawer
  if (new URLSearchParams(location.search).get('open') === '1' && store.count() === 0) {
    store.add('skin-oil', 1);
    store.add('day-cream', 1);
  }
}
