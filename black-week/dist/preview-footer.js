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
  var ASSETS = window.NC_ASSET_BASE || "../assets/";
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
      for (const [id, init2] of registry) {
        const root = document.querySelector(`[data-section="${id}"]`);
        if (!root) continue;
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
      document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    };
    window.NCBW = { ctx, run };
    if (!window.NC_DEFER_BOOT) document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", run) : run();
  }

  // src/sections/footer/footer.js
  function init(root, ctx) {
    root.classList.add("ftr--js");
    const mqMobile = matchMedia("(max-width: 760px)");
    const reduced = ctx.prefersReducedMotion;
    const cols = [...root.querySelectorAll(".ftr-col")];
    cols.forEach((col) => {
      col.querySelectorAll(".ftr-col__list > li").forEach((li, i) => li.style.setProperty("--i", i));
    });
    const setOpen = (col, open) => {
      const btn = col.querySelector(".ftr-col__btn");
      const panel = col.querySelector(".ftr-col__panel");
      col.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", String(open));
      if (mqMobile.matches && !open) panel.setAttribute("inert", "");
      else panel.removeAttribute("inert");
    };
    cols.forEach((col) => {
      col.querySelector(".ftr-col__btn").addEventListener("click", () => setOpen(col, !col.classList.contains("is-open")));
    });
    const syncMode = () => cols.forEach((col) => setOpen(col, col.classList.contains("is-open")));
    syncMode();
    mqMobile.addEventListener("change", syncMode);
    const q = new URLSearchParams(location.search).get("open");
    if (q && cols[+q - 1]) setOpen(cols[+q - 1], true);
    const promo = root.querySelector("[data-promo]");
    const $ = (s) => promo.querySelector(s);
    const dayKey = (t) => new Intl.DateTimeFormat("sv-SE", { timeZone: "Europe/Copenhagen" }).format(new Date(t));
    let lastState = "live";
    const updatePromo = () => {
      const now = ctx.clock.now();
      const state2 = now > ctx.clock.end ? "ended" : now < ctx.clock.start ? "soon" : dayKey(now) === dayKey(ctx.clock.end) ? "last" : "live";
      if (state2 === lastState) return;
      lastState = state2;
      promo.dataset.state = state2;
      if (state2 === "last") {
        $("[data-promo-eyebrow]").textContent = "Sidste dag \xB7 slutter kl. 23.59";
      } else if (state2 === "soon") {
        $("[data-promo-eyebrow]").textContent = "Black Week \xB7 mandag 23. \u2013 mandag 30. november";
      } else if (state2 === "ended") {
        $("[data-promo-eyebrow]").textContent = "Black Week er slut";
        $("[data-promo-title]").textContent = "Tak, fordi du handlede i ro og mag.";
        $("[data-promo-sub]").textContent = "Fri fragt over 399 kr. og 14 dages fortrydelsesret \u2013 hele \xE5ret.";
        $("[data-promo-cta-label]").textContent = "Se hele hudplejeserien";
        $("[data-promo-cta]").setAttribute("href", "#deals");
      }
    };
    updatePromo();
    setInterval(updatePromo, 3e4);
    root.querySelector("[data-to-top]").addEventListener("click", (e) => {
      const target = document.getElementById("top");
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
      const focusEl = target || document.body;
      if (target && !target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
      focusEl.focus?.({ preventScroll: true });
      history.replaceState(null, "", location.pathname + location.search);
    });
    const mark = root.querySelector(".ftr-mark");
    if (!mark || reduced) return;
    const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
    const cur = { x: 50, y: 50, lit: 0, drift: 0 };
    const tgt = { x: 50, y: 50, lit: 0, drift: 0 };
    let visible = false, raf = 0;
    const measureDrift = () => {
      const r = root.getBoundingClientRect();
      const vh = innerHeight || 1;
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)));
      tgt.drift = (0.5 - p) * 90;
    };
    const tick = () => {
      raf = 0;
      const k = 0.075;
      cur.x += (tgt.x - cur.x) * k;
      cur.y += (tgt.y - cur.y) * k;
      cur.lit += (tgt.lit - cur.lit) * 0.05;
      cur.drift += (tgt.drift - cur.drift) * 0.06;
      mark.style.setProperty("--mx", cur.x.toFixed(2) + "%");
      mark.style.setProperty("--my", cur.y.toFixed(2) + "%");
      mark.style.setProperty("--lit", cur.lit.toFixed(3));
      mark.style.setProperty("--drift", cur.drift.toFixed(2) + "px");
      const settled = Math.abs(tgt.x - cur.x) < 0.05 && Math.abs(tgt.y - cur.y) < 0.05 && Math.abs(tgt.lit - cur.lit) < 2e-3 && Math.abs(tgt.drift - cur.drift) < 0.05;
      if (visible && !settled) raf = requestAnimationFrame(tick);
    };
    const kick = () => {
      if (visible && !raf) raf = requestAnimationFrame(tick);
    };
    new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) {
        measureDrift();
        kick();
      }
    }, { rootMargin: "120px 0px" }).observe(root);
    addEventListener("scroll", () => {
      if (visible) {
        measureDrift();
        kick();
      }
    }, { passive: true });
    addEventListener("resize", () => {
      if (visible) {
        measureDrift();
        kick();
      }
    }, { passive: true });
    if (finePointer) {
      root.addEventListener("pointermove", (e) => {
        const r = mark.getBoundingClientRect();
        tgt.x = (e.clientX - r.left) / r.width * 100;
        tgt.y = (e.clientY - r.top) / r.height * 100;
        const dx = Math.max(0, Math.abs(e.clientX - (r.left + r.width / 2)) - r.width / 2);
        const dy = Math.max(0, Math.abs(e.clientY - (r.top + r.height / 2)) - r.height / 2);
        tgt.lit = Math.max(0, 1 - Math.hypot(dx, dy) / 260);
        kick();
      });
      root.addEventListener("pointerleave", () => {
        tgt.lit = 0;
        kick();
      });
    }
    measureDrift();
    cur.drift = tgt.drift;
    mark.style.setProperty("--drift", cur.drift.toFixed(2) + "px");
  }

  // .build/entry-preview-footer.js
  reg("footer", init);
  boot();
})();
