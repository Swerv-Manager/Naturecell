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

  // src/sections/theme-header/packshot.js
  var BASE = 0.86;
  var MAX_H = 0.78;
  var MAX_W = 0.78;
  var MIN_H = 0.52;
  var MAX_UP = 1.6;
  var SIZE = 120;
  var DIFF = 26;
  var cache = {};
  try {
    cache = JSON.parse(sessionStorage.getItem("nc_ps") || "{}") || {};
  } catch (e) {
    cache = {};
  }
  var save = () => {
    try {
      sessionStorage.setItem("nc_ps", JSON.stringify(cache));
    } catch (e) {
    }
  };
  function analyze(src, cb) {
    if (cache[src]) return cb(cache[src]);
    const im = new Image();
    im.onload = () => {
      const w = im.naturalWidth, h = im.naturalHeight;
      if (!w || !h) return cb(null);
      const s = Math.min(1, SIZE / Math.max(w, h));
      const cw = Math.max(1, Math.round(w * s)), ch = Math.max(1, Math.round(h * s));
      const c = document.createElement("canvas");
      c.width = cw;
      c.height = ch;
      const ctx = c.getContext("2d", { willReadFrequently: true });
      let d;
      try {
        ctx.drawImage(im, 0, 0, cw, ch);
        d = ctx.getImageData(0, 0, cw, ch).data;
      } catch (e) {
        return cb(null);
      }
      const px = (x, y) => {
        const i = (y * cw + x) * 4;
        return [d[i], d[i + 1], d[i + 2], d[i + 3]];
      };
      const samples = [px(0, 0), px(cw - 1, 0), px(0, ch - 1), px(cw - 1, ch - 1), px(cw >> 1, 0), px(cw >> 1, ch - 1), px(0, ch >> 1), px(cw - 1, ch >> 1)];
      const bg = [0, 1, 2, 3].map((n) => samples.map((p) => p[n]).sort((a, b) => a - b)[4]);
      const transparent = bg[3] < 20;
      let x0 = cw, x1 = -1, y0 = ch, y1 = -1;
      for (let y = 0; y < ch; y++) for (let x = 0; x < cw; x++) {
        const i = (y * cw + x) * 4, a = d[i + 3];
        const hit = transparent ? a > 40 : a > 40 && (Math.abs(d[i] - bg[0]) > DIFF || Math.abs(d[i + 1] - bg[1]) > DIFF || Math.abs(d[i + 2] - bg[2]) > DIFF);
        if (hit) {
          if (x < x0) x0 = x;
          if (x > x1) x1 = x;
          if (y < y0) y0 = y;
          if (y > y1) y1 = y;
        }
      }
      if (x1 < 0 || x1 - x0 < 2 || y1 - y0 < 2) return cb(null);
      if ((x1 - x0 + 1) / cw > 0.97 && (y1 - y0 + 1) / ch > 0.97) return cb(null);
      const r = { x0: x0 / cw, x1: (x1 + 1) / cw, y0: y0 / ch, y1: (y1 + 1) / ch, w, h };
      cache[src] = r;
      save();
      cb(r);
    };
    im.onerror = () => cb(null);
    im.src = src;
  }
  function place(img) {
    const r = img._ncPs;
    if (!r) return;
    const W = img.clientWidth, H = img.clientHeight;
    if (!W || !H) return;
    const s0 = Math.min(W / r.w, H / r.h), w0 = r.w * s0, h0 = r.h * s0, ox = (W - w0) / 2, oy = (H - h0) / 2;
    const bx0 = ox + r.x0 * w0, bx1 = ox + r.x1 * w0, by0 = oy + r.y0 * h0, by1 = oy + r.y1 * h0;
    const pw = bx1 - bx0, ph = by1 - by0, cx = (bx0 + bx1) / 2;
    let s = 1;
    if (ph > MAX_H * H) s = MAX_H * H / ph;
    else if (ph < MIN_H * H) s = Math.min(MAX_UP, MIN_H * H / ph);
    if (pw * s > MAX_W * W) s = MAX_W * W / pw;
    const tx = W / 2 - s * cx, ty = BASE * H - s * by1;
    img.style.transform = `translate(${tx.toFixed(2)}px,${ty.toFixed(2)}px) scale(${s.toFixed(4)})`;
    img.classList.add("is-placed");
  }
  function packshots(root) {
    if (!document.createElement("canvas").getContext) return;
    const ro = "ResizeObserver" in window ? new ResizeObserver((es) => es.forEach((e) => place(e.target))) : null;
    const setup = (img) => {
      if (img._ncPsInit) return;
      img._ncPsInit = true;
      const src = img.currentSrc || img.src;
      if (!src) return;
      analyze(src, (r) => {
        if (!r) return;
        img._ncPs = r;
        place(img);
        if (ro) ro.observe(img);
      });
    };
    root.querySelectorAll("img.nc-packshot").forEach((img) => {
      if (img.complete && img.naturalWidth) setup(img);
      else img.addEventListener("load", () => setup(img), { once: true });
    });
  }

  // src/sections/theme-header/theme-header.js
  function init(root, ctx) {
    const $ = (s, r = root) => r.querySelector(s);
    const $all = (s, r = root) => Array.from(r.querySelectorAll(s));
    const header = $("[data-nc-header]");
    const panel = $("[data-nc-mega]");
    const toggles = $all("[data-nc-mega-toggle]");
    const mob = $("[data-nc-mobilenav]");
    const burger = $("[data-nc-burger]");
    const html = document.documentElement;
    const setMega = (open) => {
      panel.classList.toggle("is-open", open);
      toggles.forEach((b) => b.setAttribute("aria-expanded", open ? "true" : "false"));
    };
    toggles.forEach((btn) => btn.addEventListener("click", (e) => {
      e.preventDefault();
      setMega(!panel.classList.contains("is-open"));
    }));
    document.addEventListener("click", (e) => {
      if (panel.classList.contains("is-open") && !header.contains(e.target)) setMega(false);
    });
    $all("[data-nc-tabs]").forEach((tabsRoot) => {
      const tabs = $all("[data-nc-tab]", tabsRoot);
      const panels = $all("[data-nc-panel]", tabsRoot);
      tabs.forEach((tab) => tab.addEventListener("click", () => {
        const key = tab.getAttribute("data-nc-tab");
        tabs.forEach((t) => {
          t.classList.toggle("is-active", t === tab);
          t.setAttribute("aria-selected", t === tab ? "true" : "false");
        });
        panels.forEach((p) => {
          p.hidden = p.getAttribute("data-nc-panel") !== key;
        });
      }));
    });
    const setMob = (open) => {
      mob.classList.toggle("is-open", open);
      mob.setAttribute("aria-hidden", open ? "false" : "true");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      html.classList.toggle("nc-lock", open);
      if (open) {
        const c = $(".nc-mobilenav__head [data-nc-close]");
        c && c.focus({ preventScroll: true });
      }
    };
    burger.addEventListener("click", () => setMob(!mob.classList.contains("is-open")));
    $all("[data-nc-close]", mob).forEach((b) => b.addEventListener("click", () => {
      setMob(false);
      burger.focus({ preventScroll: true });
    }));
    document.addEventListener("keydown", (e) => {
      if (e.key !== "Escape") return;
      if (panel.classList.contains("is-open")) setMega(false);
      if (mob.classList.contains("is-open")) {
        setMob(false);
        burger.focus({ preventScroll: true });
      }
    });
    const counts = $all("[data-nc-cart-count]");
    const paintCart = () => {
      const n = ctx.store.count();
      counts.forEach((el) => {
        el.textContent = n;
        el.classList.toggle("is-empty", n === 0);
      });
    };
    ctx.store.on((type) => {
      if (type === "cart:add" || type === "cart:change") paintCart();
    });
    paintCart();
    $all("[data-nc-cart-open]").forEach((b) => b.addEventListener("click", (e) => {
      e.preventDefault();
      ctx.store.openCart();
    }));
    const favCounts = $all("[data-nc-fav-count]");
    const paintFavs = () => {
      let list = [];
      try {
        list = JSON.parse(localStorage.getItem("nc_favs") || "[]") || [];
      } catch (e) {
        list = [];
      }
      favCounts.forEach((el) => {
        el.textContent = list.length;
        el.classList.toggle("is-empty", list.length === 0);
      });
    };
    window.addEventListener("nc-favs-changed", paintFavs);
    paintFavs();
    const skip = $(".nc-skip-link");
    if (skip && !document.getElementById("nc-main")) {
      skip.addEventListener("click", (e) => {
        const next = root.nextElementSibling;
        if (!next) return;
        e.preventDefault();
        if (!next.hasAttribute("tabindex")) next.setAttribute("tabindex", "-1");
        next.focus();
      });
    }
    packshots(root);
  }

  // .build/entry-preview-theme-header.js
  reg("theme-header", init);
  boot();
})();
