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

  // src/sections/theme-cases/cbd-sprite.js
  var SPRITE = '<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><symbol id="nc-cbd" viewBox="0 0 5586 2734"><rect x="87" y="87" width="5412" height="2560" rx="1280" fill="none" stroke="currentColor" stroke-width="174"/><path fill="currentColor" d="M906 1412Q906 1756 1084 1940Q1262 2124 1547 2124Q1819 2124 1971 1980Q2123 1837 2135 1619L2136 1596H1850L1849 1619Q1841 1745 1767 1824Q1694 1903 1548 1903Q1386 1903 1291 1785Q1197 1666 1197 1439V1295Q1197 1049 1293 940Q1390 831 1545 831Q1699 831 1774 906Q1850 981 1850 1113V1138H2136V1117Q2136 896 1977 753Q1819 609 1547 609Q1263 609 1084 792Q906 975 906 1321Z M2289 2095H2848Q3081 2095 3224 1985Q3367 1875 3367 1675Q3367 1534 3300 1447Q3234 1361 3132 1331V1327Q3215 1297 3271 1221Q3328 1144 3328 1024Q3328 826 3192 732Q3057 639 2819 639H2289ZM2569 1890V1437H2843Q2968 1437 3026 1497Q3085 1558 3085 1662Q3085 1767 3026 1828Q2968 1890 2843 1890ZM2569 1241V845H2814Q2938 845 2993 896Q3047 947 3047 1042Q3047 1136 2993 1189Q2938 1241 2814 1241Z M3520 2095H3997Q4288 2095 4484 1914Q4680 1733 4680 1412V1321Q4680 1000 4484 820Q4288 639 3997 639H3520ZM3802 1880V854H3993Q4172 854 4281 972Q4391 1090 4391 1316V1417Q4391 1644 4281 1762Q4172 1880 3993 1880Z"/></symbol><symbol id="nc-cbg" viewBox="0 0 5586 2734"><rect x="87" y="87" width="5412" height="2560" rx="1280" fill="none" stroke="currentColor" stroke-width="174"/><path fill="currentColor" d="M906 1412Q906 1756 1084 1940Q1262 2124 1547 2124Q1819 2124 1971 1980Q2123 1837 2135 1619L2136 1596H1850L1849 1619Q1841 1745 1767 1824Q1694 1903 1548 1903Q1386 1903 1291 1785Q1197 1666 1197 1439V1295Q1197 1049 1293 940Q1390 831 1545 831Q1699 831 1774 906Q1850 981 1850 1113V1138H2136V1117Q2136 896 1977 753Q1819 609 1547 609Q1263 609 1084 792Q906 975 906 1321Z M2289 2095H2848Q3081 2095 3224 1985Q3367 1875 3367 1675Q3367 1534 3300 1447Q3234 1361 3132 1331V1327Q3215 1297 3271 1221Q3328 1144 3328 1024Q3328 826 3192 732Q3057 639 2819 639H2289ZM2569 1890V1437H2843Q2968 1437 3026 1497Q3085 1558 3085 1662Q3085 1767 3026 1828Q2968 1890 2843 1890ZM2569 1241V845H2814Q2938 845 2993 896Q3047 947 3047 1042Q3047 1136 2993 1189Q2938 1241 2814 1241Z M3486 1412Q3486 1759 3665 1942Q3845 2124 4156 2124Q4359 2124 4499 2060Q4639 1996 4714 1920L4714 1334L4137 1334L4137 1550L4432 1550L4432 1823Q4373 1865 4309 1883Q4246 1902 4157 1902Q3981 1902 3881 1787Q3780 1672 3780 1439L3780 1294Q3780 1066 3875 949Q3970 833 4127 833Q4274 833 4349 905Q4424 977 4424 1072L4424 1083L4714 1083L4713 1069Q4710 874 4556 741Q4402 609 4137 609Q3844 609 3665 792Q3486 974 3486 1321Z"/></symbol></svg>';
  function ensureCbdSprite() {
    if (document.getElementById("nc-cbd")) return;
    document.body.insertAdjacentHTML("afterbegin", SPRITE);
  }

  // src/sections/theme-cases/theme-cases.js
  function arrows(wrap) {
    const rail = wrap.querySelector("[data-nc-railscroll]");
    if (!rail) return;
    wrap.querySelectorAll("[data-nc-rail-prev]").forEach((b) => b.addEventListener("click", () => {
      rail.scrollBy({ left: -Math.max(320, rail.clientWidth * 0.7), behavior: "smooth" });
    }));
    wrap.querySelectorAll("[data-nc-rail-next]").forEach((b) => b.addEventListener("click", () => {
      rail.scrollBy({ left: Math.max(320, rail.clientWidth * 0.7), behavior: "smooth" });
    }));
  }
  function indicator(rail) {
    if (rail.dataset.ncRailInit) return;
    rail.dataset.ncRailInit = "1";
    let dots = null, pages = 0;
    if (rail.getAttribute("data-nc-rail") !== "nodots") {
      dots = document.createElement("div");
      dots.className = "nc-raildots";
      dots.setAttribute("aria-hidden", "true");
      dots.hidden = true;
      rail.insertAdjacentElement("afterend", dots);
    }
    function build() {
      const n = rail.clientWidth ? Math.ceil((rail.scrollWidth - 2) / rail.clientWidth) : 1;
      if (n === pages) return;
      pages = n;
      dots.innerHTML = "";
      dots.hidden = n < 2;
      for (let i = 0; i < n; i++) {
        const b = document.createElement("button");
        b.type = "button";
        b.tabIndex = -1;
        b.addEventListener("click", () => rail.scrollTo({ left: i * rail.clientWidth, behavior: "smooth" }));
        dots.appendChild(b);
      }
    }
    function update() {
      const max = rail.scrollWidth - rail.clientWidth;
      rail.classList.toggle("is-more", rail.scrollLeft < max - 4);
      rail.classList.toggle("is-before", rail.scrollLeft > 4);
      if (!dots) return;
      build();
      if (pages < 2) return;
      const cur = rail.scrollLeft >= max - 4 ? pages - 1 : Math.min(pages - 1, Math.round(rail.scrollLeft / rail.clientWidth));
      Array.from(dots.children).forEach((b, i) => b.classList.toggle("is-active", i === cur));
    }
    rail.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    if ("ResizeObserver" in window) new ResizeObserver(update).observe(rail);
    update();
  }
  function init(root) {
    ensureCbdSprite();
    root.querySelectorAll("[data-nc-railwrap]").forEach(arrows);
    root.querySelectorAll("[data-nc-rail]").forEach(indicator);
  }

  // .build/entry-preview-theme-cases.js
  reg("theme-cases", init);
  boot();
})();
