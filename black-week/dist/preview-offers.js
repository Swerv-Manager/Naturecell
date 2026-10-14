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

  // src/sections/offers/offers.js
  function init(root, ctx) {
    const q = new URLSearchParams(location.search);
    const reduced = ctx.prefersReducedMotion;
    const off = [];
    off.push(initClock(root, ctx, q, reduced));
    initAdd(root, ctx);
    off.push(initGift(root, ctx, q, reduced));
    off.push(initRail(root, reduced));
    off.push(initSettle(root, reduced));
    off.push(initNight(root, reduced));
    return () => off.forEach((f) => f && f());
  }
  function initClock(root, ctx, q, reduced) {
    const el = root.querySelector(".offers-clock");
    if (!el) return null;
    let offset = 0;
    const forced = q.get("offers-now");
    if (forced) {
      const t = Date.parse(forced);
      if (!Number.isNaN(t)) offset = t - ctx.clock.now();
    }
    const now = () => ctx.clock.now() + offset;
    const end = ctx.clock.end, start = ctx.clock.start;
    const label = el.querySelector("[data-clock-label]");
    const done = el.querySelector("[data-clock-done]");
    const sr = el.querySelector("[data-clock-sr]");
    const title = root.querySelector(".offers-title");
    const titleHTML = title ? title.innerHTML : "";
    const units = ["d", "h", "m"].map((u) => {
      const unit = el.querySelector(`[data-unit="${u}"]`);
      const dgs = [...unit.querySelectorAll(".offers-dg")].map((d) => {
        const v = d.textContent.trim();
        d.textContent = "";
        const ghost = document.createElement("span");
        ghost.className = "offers-dg__ghost";
        ghost.textContent = "0";
        const s = document.createElement("span");
        s.className = "offers-dg__v";
        s.textContent = v;
        d.append(ghost, s);
        return { el: d, v, cur: s };
      });
      return { el: unit, dgs, lbl: unit.querySelector("[data-lbl]") };
    });
    const EASE = "cubic-bezier(.65,0,.3,1)", DUR = 620;
    function roll(d, v, animate) {
      if (d.v === v) return;
      d.v = v;
      if (!animate || reduced || !d.el.animate || document.hidden) {
        d.el.querySelectorAll(".offers-dg__v").forEach((n) => n !== d.cur && n.remove());
        d.cur.getAnimations?.().forEach((a) => a.cancel());
        d.cur.textContent = v;
        return;
      }
      const old = d.cur;
      const nu = document.createElement("span");
      nu.className = "offers-dg__v";
      nu.textContent = v;
      d.el.append(nu);
      d.cur = nu;
      old.animate([{ transform: "translateY(0)" }, { transform: "translateY(100%)" }], { duration: DUR, easing: EASE, fill: "forwards" }).onfinish = () => old.remove();
      nu.animate([{ transform: "translateY(-100%)" }, { transform: "translateY(0)" }], { duration: DUR, easing: EASE, fill: "backwards" });
    }
    let lastState = "", lastMinute = -1;
    function render(animate) {
      const t = now();
      const state2 = t < start ? "pre" : t >= end ? "ended" : end - t <= 864e5 ? "last" : "live";
      if (state2 !== lastState) {
        el.dataset.state = state2;
        lastState = state2;
        label.textContent = state2 === "pre" ? "Black Week begynder om" : state2 === "ended" ? "Black Week er slut" : state2 === "last" ? "Sidste dag \u2013 slutter om" : "Black Week slutter om";
        if (done) done.hidden = state2 !== "ended";
        root.dataset.campaign = state2;
        if (title) title.innerHTML = state2 === "ended" ? "Tak for denne gang." : titleHTML;
      }
      if (state2 === "ended") {
        if (sr) sr.textContent = "Black Week er slut.";
        return;
      }
      const target = state2 === "pre" ? start : end;
      const left = Math.max(0, Math.floor((target - t) / 6e4));
      const vals = [Math.floor(left / 1440), Math.floor(left / 60) % 24, left % 60];
      vals.forEach((n, i) => {
        const s = String(Math.min(n, 99)).padStart(2, "0");
        units[i].dgs.forEach((d, k) => roll(d, s[k], animate));
      });
      units[0].dgs[0].el.toggleAttribute("data-off", vals[0] < 10);
      units[0].el.hidden = vals[0] === 0;
      if (units[0].lbl) units[0].lbl.textContent = vals[0] === 1 ? "dag" : "dage";
      if (units[1].lbl) units[1].lbl.textContent = vals[1] === 1 ? "time" : "timer";
      if (units[2].lbl) units[2].lbl.textContent = vals[2] === 1 ? "minut" : "minutter";
      if (sr && left !== lastMinute) {
        lastMinute = left;
        const [d, h, m] = vals;
        sr.textContent = `${state2 === "pre" ? "Black Week begynder om" : "Black Week slutter om"} ${d} ${d === 1 ? "dag" : "dage"}, ${h} ${h === 1 ? "time" : "timer"} og ${m} ${m === 1 ? "minut" : "minutter"} \u2013 mandag 30. november kl. 23.59.`;
      }
    }
    render(false);
    let timer = 0, onScreen = true;
    const schedule = () => {
      clearTimeout(timer);
      if (!onScreen || document.hidden) return;
      const ms = 6e4 - (now() % 6e4 + 6e4) % 6e4 + 20;
      timer = setTimeout(() => {
        render(true);
        schedule();
      }, Math.min(ms, 60020));
    };
    const io = new IntersectionObserver((es) => {
      const v = es[es.length - 1].isIntersecting;
      if (v && !onScreen) render(false);
      onScreen = v;
      schedule();
    });
    io.observe(el);
    const onVis = () => {
      if (!document.hidden) render(false);
      schedule();
    };
    document.addEventListener("visibilitychange", onVis);
    schedule();
    return () => {
      clearTimeout(timer);
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }
  function initAdd(root, ctx) {
    const btn = root.querySelector("[data-add]");
    if (!btn) return;
    const status = root.querySelector("[data-add-status]");
    const p = ctx.byId[btn.dataset.add];
    if (!p) {
      btn.disabled = true;
      return;
    }
    const nb = (s) => s.replace(" kr.", "\xA0kr.");
    const set = (sel, txt) => {
      const n = root.querySelector(sel);
      if (n) n.textContent = txt;
    };
    const price = root.querySelector("[data-kp-price]");
    if (price && price.firstChild) price.firstChild.textContent = ctx.fmt.kr(p.price).replace(" kr.", "");
    set("[data-kp-before]", nb(ctx.fmt.kr(p.price0)));
    const loose = (p.contains || []).reduce((sum, id) => sum + (ctx.byId[id]?.price || 0), 0);
    if (loose) set("[data-kp-loose]", nb(ctx.fmt.kr(loose)));
    let timer = 0;
    btn.addEventListener("click", () => {
      ctx.store.add(p.id, 1);
      btn.classList.add("is-added");
      if (status) {
        status.textContent = "";
        requestAnimationFrame(() => {
          status.textContent = `${p.name} er lagt i kurven.`;
        });
      }
      clearTimeout(timer);
      timer = setTimeout(() => btn.classList.remove("is-added"), 2600);
    });
  }
  function initGift(root, ctx, q, reduced) {
    const st = root.querySelector("[data-gift]");
    if (!st) return null;
    const { giftThreshold: G, freeShipping: S } = ctx.campaign;
    const kr = ctx.fmt.kr;
    let exSum = 0;
    const nb = (s) => s.replace(" kr.", "\xA0kr.");
    st.querySelectorAll("[data-ex]").forEach((n) => {
      const p = ctx.byId[n.dataset.ex];
      if (p) {
        n.textContent = String(p.price);
        exSum += p.price;
      }
    });
    const exOut = st.querySelector("[data-ex-sum]");
    if (exOut && exSum) exOut.textContent = nb(kr(exSum));
    const sumEl = st.querySelector("[data-live-sum]");
    const nextEl = st.querySelector("[data-live-next]");
    const meter = st.querySelector("[data-meter]");
    const tick = st.querySelector("[data-tick]");
    const status = st.querySelector("[data-gift-status]");
    if (tick) tick.style.left = S / G * 100 + "%";
    let shown = 0, target = 0, raf = 0, last = 0;
    const draw = (v) => {
      if (meter) meter.style.transform = `scaleX(${v})`;
    };
    function frame(t) {
      const dt = Math.min(0.05, (t - (last || t)) / 1e3);
      last = t;
      shown += (target - shown) * (1 - Math.exp(-dt * 3));
      if (Math.abs(target - shown) < 1e-3) shown = target;
      draw(shown);
      if (shown !== target) raf = requestAnimationFrame(frame);
      else {
        raf = 0;
        last = 0;
      }
    }
    function update() {
      const sum = ctx.store.subtotal();
      const level = sum >= G ? 2 : sum >= S ? 1 : 0;
      st.classList.toggle("has-cart", sum > 0);
      st.dataset.level = level;
      if (sum > 0) {
        sumEl.textContent = `Din kurv ${kr(sum)}`;
        nextEl.textContent = level === 2 ? "Fri fragt og Lip Balm er med" : level === 1 ? `Fri fragt \xB7 ${kr(G - sum)} til Lip Balm` : `${kr(S - sum)} til fri fragt`;
      }
      target = Math.min(1, sum / G);
      if (reduced) {
        shown = target;
        draw(shown);
      } else if (!raf) raf = requestAnimationFrame(frame);
      if (status) {
        status.textContent = sum === 0 ? "" : level === 2 ? `Din kurv er p\xE5 ${kr(sum)} \u2013 fri fragt og en gratis CBD Lip Balm f\xF8lger med` : level === 1 ? `Din kurv er p\xE5 ${kr(sum)} \u2013 fri fragt er med, og ${kr(G - sum)} mere giver gaven` : `Din kurv er p\xE5 ${kr(sum)} \u2013 ${kr(S - sum)} mere giver fri fragt`;
      }
    }
    const unsub = ctx.store.on((type) => {
      if (type === "cart:add" || type === "cart:change") update();
    });
    draw(0);
    update();
    const add = q.get("offers-cart");
    if (add) setTimeout(() => add.split(",").forEach((id) => ctx.byId[id] && ctx.store.add(id, 1)), +(q.get("offers-cart-delay") || 600));
    return () => {
      cancelAnimationFrame(raf);
      if (typeof unsub === "function") unsub();
    };
  }
  function initRail(root, reduced) {
    const rail = root.querySelector("[data-rail]");
    const tiles = [...root.querySelectorAll(".offers-tile")];
    const dots = [...root.querySelectorAll("[data-dot]")];
    if (!rail || !dots.length) return null;
    const dotFor = (tile) => dots.find((d) => +d.dataset.dot === tiles.indexOf(tile));
    const setCurrent = (dot) => dots.forEach((d) => d.setAttribute("aria-current", d === dot ? "true" : "false"));
    const io = new IntersectionObserver((es) => {
      let best = null;
      es.forEach((e) => {
        if (e.isIntersecting && (!best || e.intersectionRatio > best.intersectionRatio)) best = e;
      });
      if (best && best.intersectionRatio > 0.6) setCurrent(dotFor(best.target));
    }, { root: rail, threshold: [0.6, 0.8, 1] });
    tiles.forEach((t) => io.observe(t));
    dots.forEach((d) => d.addEventListener("click", () => {
      const tile = tiles[+d.dataset.dot];
      const pad = parseFloat(getComputedStyle(rail).scrollPaddingInlineStart) || 0;
      rail.scrollTo({ left: tile.offsetLeft - pad, behavior: reduced ? "auto" : "smooth" });
      setCurrent(d);
    }));
    return () => io.disconnect();
  }
  function initSettle(root, reduced) {
    if (reduced || !("IntersectionObserver" in window)) return null;
    const tiles = [...root.querySelectorAll(".offers-tile")];
    const settle = (t) => requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add("is-settled")));
    tiles.forEach((t) => t.classList.add("is-settling"));
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      settle(e.target);
    }), { threshold: 0 });
    tiles.forEach((t) => io.observe(t));
    const safety = setTimeout(() => tiles.forEach((t) => t.classList.add("is-settled")), 6e3);
    return () => {
      io.disconnect();
      clearTimeout(safety);
      tiles.forEach((t) => t.classList.remove("is-settling", "is-settled"));
    };
  }
  function initNight(root, reduced) {
    const tile = root.querySelector(".offers-tile--hero");
    const glow = root.querySelector(".offers-glow");
    if (!tile) return null;
    if (!glow || reduced || !matchMedia("(hover: hover) and (pointer: fine)").matches) return null;
    const rest = { x: 50, y: 26 };
    let x = rest.x, y = rest.y, tx = x, ty = y, raf = 0, last = 0;
    const step = (t) => {
      const dt = Math.min(0.05, (t - (last || t)) / 1e3);
      last = t;
      const k = 1 - Math.exp(-dt * 2.4);
      x += (tx - x) * k;
      y += (ty - y) * k;
      glow.style.setProperty("--lx", x.toFixed(2) + "%");
      glow.style.setProperty("--ly", y.toFixed(2) + "%");
      if (Math.abs(tx - x) + Math.abs(ty - y) > 0.05) raf = requestAnimationFrame(step);
      else {
        raf = 0;
        last = 0;
      }
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(step);
    };
    const move = (e) => {
      const r = glow.getBoundingClientRect();
      tx = Math.max(10, Math.min(90, (e.clientX - r.left) / r.width * 100));
      ty = Math.max(8, Math.min(70, (e.clientY - r.top) / r.height * 100));
      kick();
    };
    const leave = () => {
      tx = rest.x;
      ty = rest.y;
      kick();
    };
    tile.addEventListener("pointermove", move);
    tile.addEventListener("pointerleave", leave);
    return () => {
      cancelAnimationFrame(raf);
      tile.removeEventListener("pointermove", move);
      tile.removeEventListener("pointerleave", leave);
    };
  }

  // .build/entry-preview-offers.js
  reg("offers", init);
  boot();
})();
