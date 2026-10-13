(() => {
  // src/core/data.js
  var P = "products/";
  var bw = (price, pct) => Math.round(price * (1 - pct / 100));
  var raw = [
    {
      id: "skin-oil",
      name: "CBD Hudpleje Olie",
      strength: "1000 mg",
      size: "30 ml",
      eyebrow: "CBD Skin Care",
      price0: 499,
      pct: 25,
      img: P + "skin-oil.webp",
      hires: P + "skin-oil-hires.webp",
      hero: true,
      badge: "badges/vidunder-olien.svg",
      nickname: "Vidunder Olien",
      claim: "Efterlader huden bl\xF8d, velplejet og smuk \u2013 til alle hudtyper.",
      notes: "CBD i samspil med MCT-olie. Absorberes hurtigt og fedter ikke."
    },
    {
      id: "day-cream",
      name: "CBD Dagcreme",
      size: "50 ml",
      eyebrow: "CBD Skin Care",
      price0: 399,
      pct: 25,
      img: P + "day-cream.webp",
      hires: P + "day-cream-hires.webp",
      claim: "Let dagcreme med CBD, aloe vera og sheasm\xF8r til en glat og velplejet hud."
    },
    {
      id: "night-cream",
      name: "CBD Natcreme",
      size: "50 ml",
      eyebrow: "CBD Skin Care",
      price0: 449,
      pct: 25,
      img: P + "night-cream.webp",
      hires: P + "night-cream-bottle-hires.webp",
      claim: "N\xE6rende natcreme med mandelolie og squalane, der underst\xF8tter hudens naturlige fugt."
    },
    {
      id: "serum",
      name: "CBD Hyaluronic Serum",
      size: "30 ml",
      eyebrow: "CBD Skin Care",
      price0: 299,
      pct: 25,
      img: P + "hyaluron-serum.webp",
      hires: P + "hyaluron-serum-hires.webp",
      claim: "Fugtboostende serum med hyaluronsyre og CBD til et udhvilet hududtryk."
    },
    {
      id: "cleansing-gel",
      name: "CBD Rensegel",
      size: "100 ml",
      eyebrow: "CBD Skin Care",
      price0: 299,
      pct: 25,
      img: P + "cleansing-gel.webp",
      hires: P + "cleansing-gel-bottle-hires.webp",
      claim: "Mild ansigtsrens, der renser og samtidig bevarer hudens fugtbalance."
    },
    {
      id: "body-lotion",
      name: "CBD Bodylotion",
      size: "200 ml",
      eyebrow: "CBD Skin Care",
      price0: 249,
      pct: 25,
      img: P + "body-lotion.webp",
      claim: "Tr\xE6kker hurtigt ind og efterlader kroppen bl\xF8d. Giver intensiv fugtighed til t\xF8r hud."
    },
    {
      id: "shampoo",
      name: "CBD Shampoo",
      strength: "750 mg",
      size: "300 ml",
      eyebrow: "CBD Hair Care",
      price0: 199,
      pct: 25,
      img: P + "shampoo.webp",
      claim: "Mild shampoo uden un\xF8dvendige ingredienser \u2013 til hele familien."
    },
    {
      id: "komplet-pakken",
      name: "Komplet Pakken",
      size: "Rens \xB7 Dag \xB7 Nat \xB7 Olie",
      eyebrow: "Sampakke",
      price0: 1198,
      valueLoose: 1646,
      pct: 25,
      img: P + "startpakke-plus.webp",
      bundle: true,
      badge: "badges/komplet-pakken.svg",
      contains: ["cleansing-gel", "day-cream", "night-cream", "skin-oil"],
      claim: "Hele rutinen, morgen og aften \u2013 fire produkter i \xE9n pakke."
    },
    {
      id: "all-day-facial",
      name: "All Day Facial",
      size: "Rens \xB7 Dag \xB7 Nat",
      eyebrow: "Sampakke",
      price0: 860,
      valueLoose: 1147,
      pct: 25,
      img: P + "all-day-facial.webp",
      bundle: true,
      badge: "badges/all-day-facial.svg",
      contains: ["cleansing-gel", "day-cream", "night-cream"],
      claim: "Den daglige ansigtsrutine samlet \u2013 rens, dag og nat."
    },
    { id: "lip-balm", name: "CBD Lip Balm", size: "", eyebrow: "Gave", price0: 79, pct: 0, img: null, gift: true, claim: "Gratis ved k\xF8b over 699 kr." }
  ];
  var products = raw.map((p) => ({ ...p, price: bw(p.price0, p.pct), save: p.price0 - bw(p.price0, p.pct) }));
  var campaign = {
    name: "Black Week",
    startsAt: "2026-11-23T00:00:00+01:00",
    endsAt: "2026-11-30T23:59:59+01:00",
    headlinePct: 25,
    // "25% på hele hudplejeserien" (proposal)
    giftThreshold: 699,
    giftId: "lip-balm",
    giftValue: 79,
    freeShipping: 399,
    code: null
    // automatic discount, no code needed
  };

  // src/core/core.js
  var registry = [];
  function reg(id, init2) {
    registry.push([id, init2]);
  }
  var SIM_START = Date.parse("2026-11-27T10:00:00+01:00");
  var t0 = performance.now();
  var clock = { now: () => SIM_START + (performance.now() - t0), end: Date.parse(campaign.endsAt), start: Date.parse(campaign.startsAt) };
  var listeners = /* @__PURE__ */ new Set();
  var state = { cart: [] };
  var store = {
    get: () => state,
    on: (fn) => (listeners.add(fn), () => listeners.delete(fn)),
    emit: (type, detail) => listeners.forEach((fn) => fn(type, detail, state)),
    add(id, qty = 1) {
      const l = state.cart.find((x) => x.id === id);
      l ? l.qty += qty : state.cart.push({ id, qty });
      this.emit("cart:add", { id, qty });
    },
    setQty(id, qty) {
      const l = state.cart.find((x) => x.id === id);
      if (!l) return;
      l.qty = Math.max(0, qty);
      if (!l.qty) state.cart.splice(state.cart.indexOf(l), 1);
      this.emit("cart:change", { id });
    },
    count: () => state.cart.reduce((s, l) => s + l.qty, 0),
    subtotal: () => state.cart.reduce((s, l) => s + l.qty * byId[l.id].price, 0),
    openCart() {
      this.emit("cart:open");
    }
  };
  var byId = Object.fromEntries(products.map((p) => [p.id, p]));
  var fmt = {
    kr: (n) => `${Math.round(n).toLocaleString("da-DK")} kr.`,
    pct: (n) => `${Math.round(n)}%`
  };
  var SCRIPT_SRC = document.currentScript && document.currentScript.src;
  var ASSETS = window.NC_ASSET_BASE || (SCRIPT_SRC ? new URL("../assets/", SCRIPT_SRC).href : "../assets/");
  var asset = (p) => ASSETS + p;
  function boot() {
    const ctx = {
      store,
      clock,
      fmt,
      products,
      byId,
      campaign,
      asset,
      prefersReducedMotion: matchMedia("(prefers-reduced-motion: reduce)").matches,
      isMobile: () => matchMedia("(max-width: 760px)").matches
    };
    const run = () => {
      let found = 0;
      for (const [id, init2] of registry) {
        const root = document.querySelector(`[data-section="${id}"]`);
        if (!root) continue;
        found++;
        if (root.dataset.ncInit) continue;
        root.dataset.ncInit = "1";
        try {
          init2(root, ctx);
        } catch (e) {
          console.error(`[section ${id}]`, e);
        }
      }
      const io = new IntersectionObserver((es) => es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      }), { rootMargin: "0px 0px -8% 0px" });
      document.querySelectorAll("[data-reveal]:not(.is-in)").forEach((el) => io.observe(el));
      return found;
    };
    const start = () => {
      if (run() >= registry.length) return;
      const mo = new MutationObserver(() => {
        if (run() >= registry.length) mo.disconnect();
      });
      mo.observe(document.body, { childList: true, subtree: true });
      setTimeout(() => mo.disconnect(), 2e4);
    };
    window.NCBW = { ctx, run };
    if (!window.NC_DEFER_BOOT) document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", start) : start();
  }

  // src/sections/theme-cart/theme-cart.js
  var SITE = "https://naturecell.dk";
  var money = (n) => n.toLocaleString("da-DK", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " kr";
  var esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  var ICON = '<span class="nc-cbd-i"><svg class="nc-cbd" aria-hidden="true" focusable="false"><use href="#nc-cbd"></use></svg></span>';
  var cbd = (t) => esc(t).replace(/CBD-/g, "").replace(/CBD/g, ICON).replace(/\u0001/g, `<span class="nc-cbd-w">${ICON}-</span>`);
  var LIVE = {
    "skin-oil": ["Hudpleje Olie med 1000mg CBD | 30ml", "/products/cbd-olie-1000mg"],
    "day-cream": ["Dagcreme NatureCell | Dagcreme, 50ml", "/products/dagcreme"],
    "night-cream": ["Natcreme NatureCell | Natcreme, 50ml", "/products/natcreme"],
    "serum": ["Hyaluronic Serum med CBD | 30ml", "/products/naturecell-cbd-hyaluronic-serum"],
    "cleansing-gel": ["Rensegel med CBD | 100ml", "/products/rensegel"],
    "body-lotion": ["Bodylotion med CBD - 200ml", "/products/bodylotion"],
    "shampoo": ["Shampoo med CBD | 300ml", "/products/shampoo-300ml"],
    "komplet-pakken": ["Komplet Pakken", "/products/hudpleje-startpakke-plus-1"],
    "all-day-facial": ["All Day Facial", "/collections/sampakker"],
    "lip-balm": ["Lip Balm | med CBD 6ml", "/products/lip-balm"]
  };
  var LIP_BALM_IMG = '<svg viewBox="0 0 100 100" width="100%" height="100%" role="img" aria-label="" style="display:block"><ellipse cx="50" cy="86.4" rx="9" ry="1.8" fill="rgba(62,93,88,0.13)"/><rect x="43" y="22" width="14" height="20" rx="2.6" fill="#fff" stroke="rgba(62,93,88,0.22)" stroke-width=".7"/><rect x="43" y="42" width="14" height="44.4" rx="1.6" fill="#fff" stroke="rgba(62,93,88,0.22)" stroke-width=".7"/><rect x="43" y="49" width="14" height="30" fill="#80A097"/><path d="M45 41.6h10" stroke="rgba(62,93,88,0.22)" stroke-width=".9"/></svg>';
  var X16 = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>';
  var X22 = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>';
  var TRUCK = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 18H3V6h12v4"/><path d="M14 9h4l3 3v6h-2"/><circle cx="7.5" cy="18.5" r="1.5"/><circle cx="17.5" cy="18.5" r="1.5"/></svg>';
  var BAG = '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>';
  function init(root, ctx) {
    const { store: store2, byId: byId2, campaign: campaign2, asset: asset2 } = ctx;
    const drawer = root.querySelector("[data-nc-drawer]");
    const html = document.documentElement;
    let lastFocus = null;
    let termsChecked = false;
    function cartModel() {
      const items = store2.get().cart.map(({ id, qty }) => {
        const p = byId2[id];
        const [title, path] = LIVE[id] || [p.name, "/collections/cbd-hudpleje"];
        const disc = p.save * qty;
        return {
          key: id,
          p,
          qty,
          title,
          url: SITE + path,
          img: p.img ? asset2(p.img) : null,
          original: p.price0 * qty,
          final: p.price * qty,
          unitWas: p.price0,
          allocations: disc > 0 ? [{ title: campaign2.name, amount: disc }] : []
        };
      });
      const sub = items.reduce((s, l) => s + l.final, 0);
      const gift = byId2[campaign2.giftId];
      if (gift && sub >= campaign2.giftThreshold) {
        const [title, path] = LIVE[gift.id];
        items.push({
          key: gift.id,
          p: gift,
          qty: 1,
          title,
          url: SITE + path,
          img: null,
          gift: true,
          original: campaign2.giftValue,
          final: 0,
          unitWas: null,
          allocations: [{ title: `Gave ved k\xF8b over ${campaign2.giftThreshold} kr.`, amount: campaign2.giftValue }]
        });
      }
      const total = items.reduce((s, l) => s + l.final, 0);
      const totalDiscount = items.reduce((s, l) => s + l.allocations.reduce((a, d) => a + d.amount, 0), 0);
      return { items, total, totalDiscount, count: items.reduce((s, l) => s + l.qty, 0) };
    }
    function lineHtml(l) {
      const media = l.img ? `<img src="${l.img}" alt="" loading="lazy" width="148" height="148">` : l.p.id === "lip-balm" ? LIP_BALM_IMG : "";
      const qty = l.gift ? `<span class="nc-drawer__qty theme-cart-gift-qty" aria-label="Antal 1">1</span>` : `<span class="nc-drawer__qty">
                  <button type="button" data-nc-line="${l.key}" data-nc-line-qty="${l.qty - 1}" aria-label="F\xE6rre">\u2212</button>
                  <span>${l.qty}</span>
                  <button type="button" data-nc-line="${l.key}" data-nc-line-qty="${l.qty + 1}" aria-label="Flere">+</button>
                </span>`;
      return `<div class="nc-drawer__line">
            <a class="nc-drawer__line-media" href="${l.url}" tabindex="-1" aria-hidden="true">${media}</a>
            <div class="nc-drawer__line-info">
              <a class="nc-drawer__line-title" href="${l.url}">${cbd(l.title)}</a>${l.unitWas ? `<span class="nc-drawer__line-meta">F\xF8rpris ${money(l.unitWas)}${l.qty > 1 ? " / stk." : ""}</span>` : ""}${l.allocations.map((d) => `<span class="nc-drawer__line-discount">${esc(d.title)} \u2212${money(d.amount)}</span>`).join("")}
              <div class="nc-drawer__line-row">
                ${qty}
                <span class="nc-drawer__line-price">${l.allocations.length ? `<s class="nc-drawer__line-was">${money(l.original)}</s> ` : ""}${money(l.final)}</span>
              </div>
            </div>${l.gift ? "" : `
            <button class="nc-drawer__remove" type="button" data-nc-line="${l.key}" data-nc-line-qty="0" aria-label="Fjern">${X16}</button>`}
          </div>`;
    }
    function render() {
      const cart = cartModel();
      const limit = campaign2.freeShipping;
      const pct = Math.min(100, Math.floor(cart.total * 100 / limit));
      const head = `<div class="nc-drawer__head">
      <h2>Din kurv</h2>
      <button class="nc-drawer__close" type="button" data-nc-cart-close aria-label="Luk kurv">${X22}</button>
    </div>`;
      let body;
      if (cart.count > 0) {
        body = `<div class="nc-drawer__ship">
        <p>${TRUCK}<span>${cart.total >= limit ? "Du har fri fragt" : `K\xF8b for ${money(limit - cart.total)} mere og f\xE5 fri fragt`}</span></p>
        <div class="nc-drawer__bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}" aria-label="Fri fragt-status">
          <div class="nc-drawer__fill" style="width: ${pct}%;"></div>
        </div>
      </div>
      <div class="nc-drawer__lines">${cart.items.map(lineHtml).join("")}</div>
      <div class="nc-drawer__foot">${cart.totalDiscount > 0 ? `
        <div class="nc-drawer__savings">
          <span>Du sparer i alt</span>
          <span>\u2212${money(cart.totalDiscount)}</span>
        </div>` : ""}
        <div class="nc-drawer__totals">
          <span>Subtotal</span>
          <strong>${money(cart.total)}</strong>
        </div>
        <label class="nc-terms nc-drawer__terms" data-nc-terms-scope>
          <input type="checkbox" data-nc-terms${termsChecked ? " checked" : ""}>
          <span>Jeg accepterer <a href="${SITE}/policies/terms-of-service" target="_blank" rel="noopener">handelsbetingelserne</a></span>
        </label>
        <a class="nc-drawer__checkout" href="${SITE}/cart/checkout" data-nc-terms-btn aria-disabled="${termsChecked ? "false" : "true"}">G\xE5 til kassen \u2192</a>
        <p class="nc-drawer__note">Moms inkluderet \xB7 fragt beregnes ved kassen</p>
      </div>`;
      } else {
        body = `<div class="nc-drawer__empty">
        ${BAG}
        <p>Din kurv er tom</p>
        <a href="${SITE}/collections/cbd-hudpleje" data-nc-cart-close>Shop hudpleje</a>
      </div>`;
      }
      const a = document.activeElement;
      const refocus = a && drawer.contains(a) && a.matches("[data-nc-line]") ? a.getAttribute("data-nc-line") + "|" + a.getAttribute("aria-label") : null;
      drawer.innerHTML = `<div class="nc-drawer__overlay" data-nc-drawer-overlay></div>
  <div class="nc-drawer__panel">
    ${head}${body}</div>`;
      if (refocus) {
        const [key, label] = refocus.split("|");
        const btn = drawer.querySelector(`[data-nc-line="${key}"][aria-label="${label}"]`) || drawer.querySelector(".nc-drawer__close");
        btn && btn.focus({ preventScroll: true });
      }
    }
    function openDrawer() {
      if (!drawer.classList.contains("is-open")) lastFocus = document.activeElement;
      drawer.classList.add("is-open");
      drawer.removeAttribute("inert");
      html.classList.add("nc-lock");
      const active = !navigator.userActivation || navigator.userActivation.hasBeenActive;
      const close = drawer.querySelector(".nc-drawer__close");
      if (active) requestAnimationFrame(() => close && close.focus({ preventScroll: true }));
    }
    function closeDrawer() {
      if (!drawer.classList.contains("is-open")) return;
      drawer.classList.remove("is-open");
      drawer.setAttribute("inert", "");
      html.classList.remove("nc-lock");
      if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
    }
    drawer.addEventListener("click", (e) => {
      const t = e.target;
      if (t.closest("[data-nc-cart-close]")) {
        e.preventDefault();
        closeDrawer();
        return;
      }
      if (t.closest("[data-nc-drawer-overlay]")) {
        closeDrawer();
        return;
      }
      const lineBtn = t.closest("[data-nc-line-qty]");
      if (lineBtn) {
        e.preventDefault();
        store2.setQty(lineBtn.getAttribute("data-nc-line"), parseInt(lineBtn.getAttribute("data-nc-line-qty"), 10));
        return;
      }
      const btn = t.closest("[data-nc-terms-btn]");
      if (btn && btn.getAttribute("aria-disabled") === "true") {
        e.preventDefault();
        const box = drawer.querySelector("[data-nc-terms]");
        if (box) box.focus();
        return;
      }
      if (btn) e.preventDefault();
    });
    drawer.addEventListener("change", (e) => {
      if (!e.target.matches("[data-nc-terms]")) return;
      termsChecked = e.target.checked;
      const btn = drawer.querySelector("[data-nc-terms-btn]");
      if (btn) btn.setAttribute("aria-disabled", termsChecked ? "false" : "true");
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeDrawer();
      if (e.key === "Tab" && drawer.classList.contains("is-open")) {
        const f = Array.from(drawer.querySelectorAll('a[href]:not([tabindex="-1"]), button, input')).filter((el) => el.offsetParent !== null);
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
    store2.on((type) => {
      if (type === "cart:add") {
        render();
        openDrawer();
      } else if (type === "cart:change") render();
      else if (type === "cart:open") {
        render();
        openDrawer();
      }
    });
    render();
    if (new URLSearchParams(location.search).get("open") === "1" && store2.count() === 0) {
      store2.add("skin-oil", 1);
      store2.add("day-cream", 1);
    }
  }

  // .build/entry-preview-theme-cart.js
  reg("theme-cart", init);
  boot();
})();
