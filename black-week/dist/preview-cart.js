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

  // src/sections/cart/cart.js
  var SHORT = { "cleansing-gel": "Rens", "day-cream": "Dag", "night-cream": "Nat", "skin-oil": "Olie" };
  var LOWER = { "cleansing-gel": "rensegel", "day-cream": "dagcreme", "night-cream": "natcreme", "skin-oil": "olien" };
  var MAX_QTY = 9;
  var TOAST_MS = 5200;
  var BBOX = {
    "products/all-day-facial.webp": [136, 78, 1200, 1173, 1200, 1200],
    "products/body-lotion.webp": [186, 163, 699, 1161, 800, 1200],
    "products/cleansing-gel.webp": [380, 100, 1169, 1173, 1200, 1200],
    "products/day-cream.webp": [345, 96, 1007, 1171, 1200, 1200],
    "products/hyaluron-serum.webp": [86, 224, 800, 1131, 800, 1200],
    "products/night-cream.webp": [326, 96, 1012, 1182, 1200, 1200],
    "products/shampoo.webp": [422, 64, 1112, 1187, 1200, 1200],
    "products/skin-oil.webp": [443, 241, 1e3, 1049, 1200, 1200],
    "products/startpakke-plus.webp": [148, 77, 1200, 1173, 1200, 1200],
    lip: [30, 20, 90, 152, 120, 160]
  };
  function fitStyle(key, aspect, pad = 0.12, padY = pad) {
    const b = BBOX[key];
    if (!b) return "";
    const [x0, y0, x1, y1, W, H] = b;
    const Th = 1 / aspect;
    const s = Math.min((1 - 2 * pad) / (x1 - x0), (Th - 2 * padY) / (y1 - y0));
    const left = (1 - s * (x1 - x0)) / 2 - s * x0;
    const top = (Th - s * (y1 - y0)) / 2 - s * y0 + padY * 0.15;
    const pct = (v) => (v * 100).toFixed(2) + "%";
    return `left:${pct(left)};top:${pct(top / Th)};width:${pct(s * W)};height:${pct(s * H / Th)}`;
  }
  function init(root, ctx) {
    const { store: store2, fmt: fmt2, byId: byId2, campaign: campaign2 } = ctx;
    const $ = (s, el = root) => el.querySelector(s);
    const $$ = (s, el = root) => [...el.querySelectorAll(s)];
    const q = new URLSearchParams(location.search);
    const reduce = ctx.prefersReducedMotion;
    const kr = (n) => fmt2.kr(n).replace(/ /g, " ");
    const krN = (n) => kr(n).replace(/ /g, "\xA0");
    const lipImg = "../src/sections/cart/lip-balm.svg";
    const imgOf = (p) => p.gift ? lipImg : ctx.asset(p.img);
    const keyOf = (p) => p.gift ? "lip" : p.img;
    const fitImg = (p, aspect, pad, padY) => `<img class="cart-fit" src="${imgOf(p)}" alt="" style="${fitStyle(keyOf(p), aspect, pad, padY)}" decoding="async">`;
    const starsSym = $("#cart-i-stars");
    $$('use[href="#cart-i-stars"]').forEach((u) => {
      const svg = u.parentNode;
      [...starsSym.children].forEach((c) => svg.appendChild(c.cloneNode(true)));
      u.remove();
    });
    const starsSvg = (cls) => `<svg class="${cls}" viewBox="0 0 60 60" aria-hidden="true">${starsSym.innerHTML}</svg>`;
    const icon = (id, cls = "cart-ico") => `<svg class="${cls}" aria-hidden="true"><use href="#cart-i-${id}"/></svg>`;
    const drawer = $("[data-cart-drawer]");
    const body = $("[data-cart-body]");
    const list = $("[data-cart-list]");
    const empty = $("[data-cart-empty]");
    const foot = $("[data-cart-foot]");
    const upsell = $("[data-cart-upsell]");
    const toast = $("[data-cart-toast]");
    const bar = $("[data-cart-bar]");
    const announce = $("[data-cart-announce]");
    toast.removeAttribute("hidden");
    const tweens = /* @__PURE__ */ new Set();
    let raf = 0, last = 0;
    function damp(apply, k = 6, eps = 8e-4) {
      const t = { v: 0, to: 0, k, eps, apply, set(x, instant) {
        this.to = x;
        if (instant || reduce) {
          this.v = x;
          apply(x, true);
          tweens.delete(this);
        } else {
          tweens.add(this);
          kick();
        }
      } };
      return t;
    }
    function kick() {
      if (!raf) {
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    }
    function frame(now) {
      const dt = Math.min(0.25, (now - last) / 1e3);
      last = now;
      for (const t of tweens) {
        t.v += (t.to - t.v) * (1 - Math.exp(-dt * t.k));
        const done = Math.abs(t.to - t.v) < t.eps * Math.max(1, Math.abs(t.to));
        if (done) {
          t.v = t.to;
          tweens.delete(t);
        }
        t.apply(t.v, done);
      }
      raf = tweens.size ? requestAnimationFrame(frame) : 0;
    }
    const lines = () => store2.get().cart;
    const subtotal = () => store2.subtotal();
    const saved = () => lines().reduce((s, l) => s + (byId2[l.id].price0 - byId2[l.id].price) * l.qty, 0);
    const giftOn = () => subtotal() >= campaign2.giftThreshold;
    const meters = {
      ship: { el: $('[data-meter="ship"]'), goal: campaign2.freeShipping },
      gift: { el: $('[data-meter="gift"]'), goal: campaign2.giftThreshold }
    };
    for (const m of Object.values(meters)) {
      m.track = $("[data-meter-track]", m.el);
      m.fill = $("[data-meter-fill]", m.el);
      m.label = $("[data-meter-label]", m.el);
      m.on = null;
      $("[data-meter-goal]", m.el).textContent = kr(m.goal);
      m.tw = damp((v) => {
        m.track.style.setProperty("--p", v.toFixed(4));
        m.track.toggleAttribute("data-zero", v < 4e-3);
      }, 3.6);
    }
    function meterText(key, sub) {
      const m = meters[key];
      const left = m.goal - sub;
      if (key === "ship") {
        if (left <= 0) return "Fri fragt er l\xE5st op";
        if (sub === 0) return `Fri fragt ved k\xF8b over <b>${krN(m.goal)}</b>`;
        return `Du mangler <b>${krN(left)}</b> til <em>fri fragt</em>`;
      }
      if (left <= 0) return "Gratis CBD Lip Balm er lagt i kurven";
      if (sub === 0) return `Gratis CBD Lip Balm ved k\xF8b over <b>${krN(m.goal)}</b>`;
      return `Du mangler <b>${krN(left)}</b> til en <em>gratis CBD Lip Balm</em>`;
    }
    function renderMeters(instant) {
      const sub = subtotal();
      for (const [key, m] of Object.entries(meters)) {
        const p = Math.min(1, sub / m.goal);
        const on = sub >= m.goal;
        const html = meterText(key, sub);
        if (m.label.innerHTML !== html) m.label.innerHTML = html;
        m.track.setAttribute("aria-valuenow", String(Math.min(sub, m.goal)));
        m.track.setAttribute("aria-valuetext", m.label.textContent);
        m.tw.set(p, instant);
        if (m.on !== null && on !== m.on) {
          if (on && !instant) unlockMoment(m, key);
          else m.el.classList.toggle("is-on", on);
        } else m.el.classList.toggle("is-on", on);
        m.on = on;
      }
    }
    function unlockMoment(m, key) {
      const delay = reduce ? 0 : 520;
      setTimeout(() => {
        m.el.classList.add("is-on");
        m.el.classList.remove("is-unlocking");
        void m.el.offsetWidth;
        m.el.classList.add("is-unlocking");
        setTimeout(() => m.el.classList.remove("is-unlocking"), 1900);
        if (!reduce && isOpen) bubbles(m.track);
        say(key === "ship" ? "Fri fragt er l\xE5st op." : "Gratis CBD Lip Balm er lagt i kurven.");
      }, delay);
    }
    function bubbles(track) {
      for (let i = 0; i < 6; i++) {
        const b = document.createElement("span");
        b.className = "cart-bub";
        const s = 4 + Math.random() * 6;
        b.style.cssText = `left:${(62 + Math.random() * 38).toFixed(1)}%;top:3px;--s:${s.toFixed(1)}px;--dx:${(Math.random() * 18 - 9).toFixed(1)}px;--dy:${(-22 - Math.random() * 30).toFixed(1)}px;--d:${1300 + Math.random() * 900 | 0}ms;animation-delay:${i * 90 + Math.random() * 120 | 0}ms`;
        track.appendChild(b);
        setTimeout(() => b.remove(), 3200);
      }
    }
    const rows = /* @__PURE__ */ new Map();
    const undo = /* @__PURE__ */ new Map();
    const metaOf = (p) => {
      const bits = [];
      if (p.bundle) bits.push(p.size);
      else {
        if (p.nickname) bits.push(p.nickname);
        if (p.strength) bits.push(p.strength);
        if (p.size) bits.push(p.size);
      }
      return bits.join(" \xB7 ");
    };
    function makeRow(id) {
      const p = byId2[id];
      const li = document.createElement("li");
      li.className = "cart-line";
      li.dataset.id = id;
      li.innerHTML = `
      <div class="cart-line__thumb">${fitImg(p, 88 / 104, 0.13, 0.12)}</div>
      <div class="cart-line__main">
        <div class="cart-line__top">
          <h3 class="cart-line__name">${p.name}</h3>
          <button class="cart-iconbtn cart-line__remove" type="button" data-remove aria-label="Fjern ${p.name} fra kurven">${icon("close")}</button>
        </div>
        <p class="cart-line__meta">${metaOf(p)}${p.save ? `<br><span class="cart-line__off">Spar ${krN(p.save)}</span>` : ""}</p>
        <div class="cart-line__bottom">
          <div class="cart-qty" role="group" aria-label="Antal ${p.name}">
            <button type="button" data-dec aria-label="\xC9n f\xE6rre">${icon("minus")}</button>
            <span class="cart-qty__n" aria-live="polite"><span>1</span></span>
            <button type="button" data-inc aria-label="\xC9n mere">${icon("plus")}</button>
          </div>
          <div class="cart-line__price"><span class="cart-line__now" data-now></span><span class="cart-line__was">F\xF8rpris <s data-was></s></span></div>
        </div>
      </div>`;
      li._qty = 0;
      return li;
    }
    function updateRow(li, qty) {
      const p = byId2[li.dataset.id];
      const prev = li._qty;
      if (prev === qty) return;
      li._qty = qty;
      const n = $(".cart-qty__n", li);
      if (prev && !reduce) {
        const up = qty > prev;
        const old = n.firstElementChild;
        old.className = up ? "is-out-up" : "is-out-down";
        const s = document.createElement("span");
        s.textContent = qty;
        s.className = up ? "is-in-up" : "is-in-down";
        n.appendChild(s);
        setTimeout(() => old.remove(), 400);
        li.classList.remove("is-bump");
        void li.offsetWidth;
        li.classList.add("is-bump");
      } else n.innerHTML = `<span>${qty}</span>`;
      $("[data-now]", li).textContent = kr(p.price * qty);
      $("[data-was]", li).textContent = kr(p.price0 * qty);
      const dec = $("[data-dec]", li);
      const trash = qty <= 1;
      dec.classList.toggle("is-trash", trash);
      dec.innerHTML = icon(trash ? "trash" : "minus");
      dec.setAttribute("aria-label", trash ? `Fjern ${p.name}` : `\xC9n f\xE6rre ${p.name}`);
      $("[data-inc]", li).disabled = qty >= MAX_QTY;
      $("[data-inc]", li).setAttribute("aria-label", `\xC9n mere ${p.name}`);
    }
    function collapse(el, done) {
      if (reduce) {
        done();
        return;
      }
      const h = el.offsetHeight;
      el.style.height = h + "px";
      el.classList.add("cart-collapse");
      void el.offsetHeight;
      el.style.height = "0px";
      el.style.opacity = "0";
      el.style.paddingTop = "0px";
      el.style.paddingBottom = "0px";
      el.style.borderBottomWidth = "0px";
      setTimeout(done, 470);
    }
    function makeUndo(id, qty, idx) {
      const p = byId2[id];
      const el = document.createElement("li");
      el.className = "cart-undo";
      el.innerHTML = `<span>${p.name} er fjernet.</span><button type="button">Fortryd</button>`;
      const rec = { el, qty, idx, timer: 0 };
      $("button", el).addEventListener("click", () => {
        clearTimeout(rec.timer);
        undo.delete(id);
        const st = store2.get().cart;
        if (!st.find((l) => l.id === id)) st.splice(Math.min(rec.idx, st.length), 0, { id, qty: rec.qty });
        pendingFocus = id;
        store2.emit("cart:change", { id });
      });
      rec.timer = setTimeout(() => {
        undo.delete(id);
        if (el.isConnected) collapse(el, () => {
          el.remove();
          layoutChanged();
        });
      }, 6500);
      undo.set(id, rec);
      return el;
    }
    let pendingFocus = null;
    let prevOrder = [];
    function renderList(instant) {
      const cart = lines();
      const ids = cart.map((l) => l.id);
      for (const [id, li] of rows) {
        if (ids.includes(id) || li._leaving) continue;
        li._leaving = true;
        const idx = prevOrder.indexOf(id);
        const qty = li._qty;
        rows.delete(id);
        if (instant || !isOpen) {
          li.remove();
          continue;
        }
        const focusWasInside = li.contains(document.activeElement);
        collapse(li, () => {
          const u = makeUndo(id, qty, idx);
          li.replaceWith(u);
          if (focusWasInside) $("button", u).focus();
          layoutChanged();
        });
        say(`${byId2[id].name} er fjernet fra kurven.`);
      }
      cart.forEach((l, i) => {
        let li = rows.get(l.id);
        if (!li) {
          li = makeRow(l.id);
          rows.set(l.id, li);
          const u = undo.get(l.id);
          if (u) {
            clearTimeout(u.timer);
            undo.delete(l.id);
            u.el.isConnected ? u.el.replaceWith(li) : list.insertBefore(li, giftRow.isConnected ? giftRow : null);
          } else {
            const next = cart.slice(i + 1).map((x) => rows.get(x.id)).find((r) => r && r.isConnected);
            list.insertBefore(li, next || (giftRow.isConnected ? giftRow : null));
          }
          if (!instant && isOpen && !reduce) li.classList.add("is-enter");
        }
        updateRow(li, l.qty);
      });
      prevOrder = ids;
      if (pendingFocus && rows.get(pendingFocus)) {
        $("[data-inc]", rows.get(pendingFocus)).focus();
        pendingFocus = null;
      }
      renderGift(instant);
    }
    const gift = byId2[campaign2.giftId];
    const giftRow = document.createElement("li");
    giftRow.className = "cart-line cart-line--gift";
    giftRow.innerHTML = `
    <div class="cart-line__thumb">${fitImg(gift, 88 / 104, 0.2, 0.16)}</div>
    <div class="cart-line__main">
      <div class="cart-line__top"><h3 class="cart-line__name">${gift.name}</h3></div>
      <p class="cart-line__meta">Black Week-gave ved k\xF8b over ${krN(campaign2.giftThreshold)}</p>
      <div class="cart-line__bottom">
        <span class="cart-gifttag">${icon("gift")}Gave</span>
        <div class="cart-line__price"><span class="cart-line__now">${kr(0)}</span><span class="cart-line__was">V\xE6rdi <s>${kr(campaign2.giftValue)}</s></span></div>
      </div>
    </div>`;
    function renderGift(instant) {
      const on = giftOn() && lines().length > 0;
      if (on && !giftRow.isConnected && !giftRow._leaving) {
        giftRow.style.cssText = "";
        giftRow.classList.remove("cart-collapse", "is-enter");
        list.appendChild(giftRow);
        if (!instant && isOpen && !reduce) {
          giftRow.style.animationDelay = "520ms";
          void giftRow.offsetWidth;
          giftRow.classList.add("is-enter");
        }
      } else if (on && giftRow.isConnected) {
        list.appendChild(giftRow);
      } else if (!on && giftRow.isConnected && !giftRow._leaving) {
        if (instant || !isOpen) {
          giftRow.remove();
          return;
        }
        giftRow._leaving = true;
        collapse(giftRow, () => {
          giftRow.remove();
          giftRow._leaving = false;
          layoutChanged();
        });
      }
    }
    const kp = byId2["komplet-pakken"];
    const upText = $("[data-upsell-text]"), upSet = $("[data-upsell-set]"), upBtn = $("[data-upsell-btn]"), upLbl = $("[data-upsell-btn-label]");
    $("[data-upsell-price]").textContent = kr(kp.price);
    {
      const im = $(".cart-upsell__media img");
      im.className = "cart-fit";
      im.setAttribute("style", fitStyle(kp.img, 92 / 108, 0.06));
    }
    $("[data-upsell-was]").textContent = kr(kp.price0);
    function renderUpsell() {
      const cart = lines();
      const has = (id) => cart.some((l) => l.id === id);
      const show = cart.length > 0 && !has(kp.id);
      upsell.hidden = !show;
      if (!show) return;
      const owned = kp.contains.filter(has);
      const missing = kp.contains.filter((id) => !has(id));
      upSet.innerHTML = kp.contains.map((id) => `<li class="${has(id) ? "is-owned" : ""}">${has(id) ? icon("check") : ""}${SHORT[id]}</li>`).join("");
      if (owned.length) {
        const extra = kp.price - owned.reduce((s, id) => s + byId2[id].price, 0);
        const names = missing.map((id) => LOWER[id]);
        const list2 = names.length > 1 ? names.slice(0, -1).join(", ") + " og " + names[names.length - 1] : names[0];
        upText.innerHTML = missing.length === 0 ? `Du har hele rutinen. Saml den i \xE9n pakke og spar <b>${krN(-extra)}</b> ekstra.` : extra > 0 ? `Du har allerede ${owned.length} af 4. F\xE5 ${list2} med for kun <b>${krN(extra)}</b> mere.` : `Du har allerede ${owned.length} af 4. F\xE5 ${list2} med \u2013 og spar <b>${krN(-extra)}</b>.`;
        upLbl.textContent = "Skift til pakken";
        upBtn.setAttribute("aria-label", `Skift til Komplet Pakken for ${kr(kp.price)}`);
      } else {
        upText.innerHTML = "Rens, dag, nat og olie \u2013 hele rutinen, morgen og aften, i \xE9n pakke.";
        upLbl.textContent = "L\xE6g i kurv";
        upBtn.setAttribute("aria-label", `L\xE6g Komplet Pakken i kurven for ${kr(kp.price)}`);
      }
    }
    upBtn.addEventListener("click", () => {
      const cart = lines();
      kp.contains.forEach((id) => {
        const l = cart.find((x) => x.id === id);
        if (l) {
          const r = rows.get(id);
          if (r) {
            r._leaving = true;
            rows.delete(id);
            collapseQuiet(r);
          }
          store2.setQty(id, l.qty - 1);
        }
      });
      store2.add(kp.id, 1);
      say("Komplet Pakken er lagt i kurven.");
      requestAnimationFrame(() => {
        const r = rows.get(kp.id);
        if (r) {
          r.scrollIntoView({ block: "nearest", behavior: reduce ? "auto" : "smooth" });
          $("[data-inc]", r).focus({ preventScroll: true });
        }
      });
    });
    function collapseQuiet(li) {
      collapse(li, () => {
        li.remove();
        layoutChanged();
      });
    }
    const quick = $("[data-cart-quick]");
    quick.innerHTML = ["skin-oil", "komplet-pakken"].map((id) => {
      const p = byId2[id];
      return `<li><span class="cart-quick__thumb">${fitImg(p, 1, 0.1)}</span>
      <span><p class="cart-quick__name">${p.nickname || p.name}</p><span class="nc-price"><span class="nc-price__now">${kr(p.price)}</span><span class="nc-price__was">F\xF8rpris <s>${kr(p.price0)}</s></span></span></span>
      <button class="cart-iconbtn cart-quick__add" type="button" data-quick="${id}" aria-label="L\xE6g ${p.nickname || p.name} i kurven">${icon("plus")}</button></li>`;
    }).join("");
    quick.addEventListener("click", (e) => {
      const b = e.target.closest("[data-quick]");
      if (b) {
        pendingFocus = b.dataset.quick;
        store2.add(b.dataset.quick, 1);
      }
    });
    const savedEl = $("[data-cart-saved]"), totalEl = $("[data-cart-total]"), saveRow = $("[data-cart-save]"), countEl = $("[data-cart-count]");
    const shipNote = $("[data-cart-ship-note]");
    const twTotal = damp((v) => {
      totalEl.textContent = kr(Math.round(v));
    }, 7, 2e-3);
    const twSaved = damp((v) => {
      savedEl.textContent = kr(Math.round(v));
    }, 7, 2e-3);
    function renderTotals(instant) {
      const n = store2.count();
      const sub = subtotal();
      countEl.textContent = n ? `(${n} ${n === 1 ? "vare" : "varer"})` : "";
      twTotal.set(sub, instant);
      twSaved.set(saved(), instant);
      saveRow.classList.toggle("has-gift", giftOn());
      shipNote.textContent = sub >= campaign2.freeShipping ? "inkl. moms \xB7 fri fragt" : "inkl. moms";
      const isEmpty = n === 0;
      empty.hidden = !isEmpty;
      foot.hidden = isEmpty;
      list.hidden = isEmpty && !list.children.length;
    }
    function render(instant = false) {
      renderList(instant);
      renderUpsell();
      renderMeters(instant);
      renderTotals(instant);
      renderBar();
      layoutChanged();
    }
    list.addEventListener("click", (e) => {
      const li = e.target.closest(".cart-line");
      if (!li || li.classList.contains("cart-line--gift")) return;
      const id = li.dataset.id;
      const l = lines().find((x) => x.id === id);
      if (!l) return;
      if (e.target.closest("[data-inc]")) store2.setQty(id, Math.min(MAX_QTY, l.qty + 1));
      else if (e.target.closest("[data-dec]")) store2.setQty(id, l.qty - 1);
      else if (e.target.closest("[data-remove]")) store2.setQty(id, 0);
    });
    function layoutChanged() {
      requestAnimationFrame(() => {
        drawer.classList.toggle("is-scrolled", body.scrollTop > 4);
        drawer.classList.toggle("has-more", body.scrollHeight - body.clientHeight - body.scrollTop > 4);
      });
    }
    body.addEventListener("scroll", layoutChanged, { passive: true });
    window.addEventListener("resize", layoutChanged);
    let isOpen = false, lastFocus = null, inerted = [];
    const staggerEls = () => [$(".cart-perks"), ...$$(".cart-list > li"), upsell, empty, foot].filter(Boolean);
    function openCart() {
      if (isOpen) {
        $("#cart-title").focus({ preventScroll: true });
        return;
      }
      isOpen = true;
      hideToast(true);
      lastFocus = document.activeElement;
      staggerEls().forEach((el, i) => {
        el.setAttribute("data-stagger", "");
        el.style.setProperty("--i", i);
      });
      drawer.removeAttribute("inert");
      drawer.setAttribute("aria-hidden", "false");
      const sbw = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.classList.add("cart-lock");
      if (sbw > 0) document.body.style.paddingRight = sbw + "px";
      inerted = [...document.body.children].filter((el) => el !== root && !el.hasAttribute("inert") && el.tagName !== "SCRIPT");
      inerted.forEach((el) => el.setAttribute("inert", ""));
      $$(".cart-bar, .cart-toast").forEach((el) => el.setAttribute("inert", ""));
      void drawer.offsetWidth;
      root.classList.add("is-open");
      for (const m of Object.values(meters)) m.tw.set(0, true);
      render(true);
      for (const m of Object.values(meters)) m.tw.set(0, true);
      setTimeout(() => renderMeters(false), reduce ? 0 : 380);
      body.scrollTop = 0;
      requestAnimationFrame(() => $("#cart-title").focus({ preventScroll: true }));
      setTimeout(() => staggerEls().forEach((el) => el.removeAttribute("data-stagger")), 1600);
    }
    function closeCart() {
      if (!isOpen) return;
      isOpen = false;
      root.classList.remove("is-open", "is-dragging");
      drawer.style.removeProperty("--drag");
      drawer.setAttribute("aria-hidden", "true");
      drawer.setAttribute("inert", "");
      inerted.forEach((el) => el.removeAttribute("inert"));
      inerted = [];
      $$(".cart-bar, .cart-toast").forEach((el) => el.removeAttribute("inert"));
      setTimeout(() => {
        if (!isOpen) {
          document.documentElement.classList.remove("cart-lock");
          document.body.style.paddingRight = "";
        }
      }, 420);
      for (const [id, u] of undo) {
        clearTimeout(u.timer);
        u.el.remove();
        undo.delete(id);
      }
      if (lastFocus && lastFocus.isConnected && typeof lastFocus.focus === "function") lastFocus.focus({ preventScroll: true });
      renderBar();
    }
    $("[data-cart-close]").addEventListener("click", closeCart);
    $("[data-cart-overlay]").addEventListener("click", closeCart);
    $$("[data-cart-shop]").forEach((a) => a.addEventListener("click", (e) => {
      const target = document.querySelector("#deals") || document.querySelector("#offers");
      if (isOpen) closeCart();
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      }
    }));
    $("[data-cart-cta]").addEventListener("click", (e) => e.preventDefault());
    $("[data-cart-cta]").addEventListener("pointermove", (e) => {
      const r = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty("--mx", `${((e.clientX - r.left) / r.width * 100).toFixed(1)}%`);
    });
    document.addEventListener("keydown", (e) => {
      if (!isOpen) {
        if (e.key === "Escape" && toast.classList.contains("is-shown")) hideToast();
        return;
      }
      if (e.key === "Escape") {
        e.preventDefault();
        closeCart();
        return;
      }
      if (e.key !== "Tab") return;
      const f = $$('button:not([disabled]), a[href], input, [tabindex]:not([tabindex="-1"])', drawer).filter((el) => el.offsetParent !== null || el === document.activeElement);
      if (!f.length) return;
      const first = f[0], lastEl = f[f.length - 1];
      if (!drawer.contains(document.activeElement)) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        first.focus();
      }
    });
    let drag = null;
    drawer.addEventListener("pointerdown", (e) => {
      if (e.pointerType === "mouse" || !isOpen) return;
      drag = { x: e.clientX, y: e.clientY, t: performance.now(), dx: 0, active: false, id: e.pointerId };
    });
    drawer.addEventListener("pointermove", (e) => {
      if (!drag || e.pointerId !== drag.id) return;
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (!drag.active) {
        if (Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy) * 1.4 && dx > 0) {
          drag.active = true;
          root.classList.add("is-dragging");
          try {
            drawer.setPointerCapture(e.pointerId);
          } catch (_) {
          }
        } else if (Math.abs(dy) > 10) {
          drag = null;
          return;
        }
      }
      if (drag.active) {
        const d = dx > 0 ? dx : dx * 0.2;
        drag.v = (d - drag.dx) / Math.max(1, performance.now() - drag.t);
        drag.t = performance.now();
        drag.dx = d;
        drawer.style.setProperty("--drag", `${d.toFixed(1)}px`);
      }
    });
    const endDrag = () => {
      if (!drag) return;
      const d = drag;
      drag = null;
      if (!d.active) return;
      root.classList.remove("is-dragging");
      if (d.dx > drawer.offsetWidth * 0.28 || (d.v || 0) > 0.55) closeCart();
      else drawer.style.setProperty("--drag", "0px");
    };
    drawer.addEventListener("pointerup", endDrag);
    drawer.addEventListener("pointercancel", endDrag);
    const tImg = $("[data-toast-img]"), tName = $("[data-toast-name]"), tPrice = $("[data-toast-price]"), tWas = $("[data-toast-was]"), tHint = $("[data-toast-hint]");
    let toastTimer = 0, toastLeft = TOAST_MS, toastStart = 0, toastPaused = false;
    toast.style.setProperty("--toast-ms", TOAST_MS + "ms");
    function placeToast() {
      const hdr = document.querySelector('[data-section="header"] .hdr-bar') || document.querySelector('[data-section="header"]');
      let top = 16;
      if (hdr) {
        const r = hdr.getBoundingClientRect();
        if (r.bottom > 0) top = Math.max(16, r.bottom + 12);
      }
      toast.style.setProperty("--toast-top", `${Math.round(top)}px`);
    }
    function showToast(id) {
      const p = byId2[id];
      if (!p) return;
      const wasShown = toast.classList.contains("is-shown");
      placeToast();
      tImg.src = imgOf(p);
      tImg.setAttribute("style", fitStyle(keyOf(p), 72 / 80, 0.12));
      tName.textContent = p.name;
      tPrice.textContent = kr(p.price);
      tWas.textContent = kr(p.price0);
      const sub = subtotal();
      const sl = campaign2.freeShipping - sub, gl = campaign2.giftThreshold - sub;
      tHint.innerHTML = sl > 0 ? `<span class="cart-mini" style="--p:${(sub / campaign2.freeShipping).toFixed(3)}"><i></i></span><span><b>${krN(sl)}</b> til fri fragt</span>` : gl > 0 ? `<span class="cart-mini" style="--p:${(sub / campaign2.giftThreshold).toFixed(3)}"><i></i></span><span>Fri fragt \xB7 <b>${krN(gl)}</b> til gratis Lip Balm</span>` : `${starsSvg("cart-stars-i")}<span>Fri fragt og gratis Lip Balm</span>`;
      if (wasShown && !reduce) {
        toast.classList.remove("is-swap");
        void toast.offsetWidth;
        toast.classList.add("is-swap");
      }
      toast.classList.add("is-shown");
      toast.setAttribute("aria-hidden", "false");
      say(`${p.name} er lagt i kurven.`);
      toastLeft = TOAST_MS;
      startToastTimer(true);
    }
    function startToastTimer(reset) {
      clearTimeout(toastTimer);
      if (reset) {
        toast.classList.remove("is-timing", "is-paused");
        void toast.offsetWidth;
        toast.classList.add("is-timing");
      }
      toastStart = performance.now();
      toastTimer = setTimeout(() => hideToast(), toastLeft);
    }
    function hideToast(instant) {
      clearTimeout(toastTimer);
      if (toast.contains(document.activeElement)) {
        try {
          (document.querySelector("[data-cart]") || document.body).focus();
        } catch (_) {
        }
      }
      toast.classList.remove("is-shown", "is-timing", "is-paused", "is-swap");
      toast.setAttribute("aria-hidden", "true");
      if (instant) {
        const c = $(".cart-toast__card", toast);
        c.style.transition = "none";
        void c.offsetWidth;
        c.style.transition = "";
      }
    }
    const pauseToast = () => {
      if (!toast.classList.contains("is-shown") || toastPaused) return;
      toastPaused = true;
      clearTimeout(toastTimer);
      toastLeft -= performance.now() - toastStart;
      toast.classList.add("is-paused");
    };
    const resumeToast = () => {
      if (!toastPaused) return;
      toastPaused = false;
      toast.classList.remove("is-paused");
      if (toast.classList.contains("is-shown")) startToastTimer(false);
    };
    toast.addEventListener("pointerenter", pauseToast);
    toast.addEventListener("pointerleave", resumeToast);
    toast.addEventListener("focusin", pauseToast);
    toast.addEventListener("focusout", (e) => {
      if (!toast.contains(e.relatedTarget)) resumeToast();
    });
    $("[data-toast-close]").addEventListener("click", () => hideToast());
    $("[data-toast-open]").addEventListener("click", () => {
      hideToast(true);
      store2.openCart();
    });
    toast.setAttribute("aria-hidden", "true");
    const barCount = $("[data-cart-bar-count]"), barClock = $("[data-cart-bar-clock]"), barOpen = $("[data-cart-bar-open]");
    let barWanted = q.get("bar") === "1", lastCount = store2.count();
    function renderBar() {
      const n = store2.count();
      barCount.hidden = n === 0;
      barCount.textContent = String(n);
      if (n > lastCount && !reduce) {
        barCount.classList.remove("is-bump");
        void barCount.offsetWidth;
        barCount.classList.add("is-bump");
      }
      lastCount = n;
      barOpen.setAttribute("aria-label", n ? `\xC5bn kurven, ${n} ${n === 1 ? "vare" : "varer"}` : "\xC5bn kurven");
      const show = barWanted && !isOpen;
      bar.classList.toggle("is-shown", show);
      bar.setAttribute("aria-hidden", show ? "false" : "true");
      if (show) bar.removeAttribute("inert");
      else bar.setAttribute("inert", "");
    }
    barOpen.addEventListener("click", () => store2.openCart());
    function tickClock() {
      const ms = Math.max(0, ctx.clock.end - ctx.clock.now());
      const d = Math.floor(ms / 864e5), h = Math.floor(ms % 864e5 / 36e5), m = Math.floor(ms % 36e5 / 6e4);
      barClock.textContent = ms <= 0 ? "Black Week er slut" : `Slutter om ${d ? d + " d " : ""}${h} t ${m} m \xB7 30. nov.`;
    }
    tickClock();
    setInterval(tickClock, 15e3);
    const hero = document.querySelector('[data-section="hero"]');
    if (hero) {
      new IntersectionObserver(([e]) => {
        const past = !e.isIntersecting && e.boundingClientRect.top < 0;
        if (q.get("bar") !== "1" && past !== barWanted) {
          barWanted = past;
          renderBar();
        }
      }, { threshold: 0 }).observe(hero);
    } else {
      const onScroll = () => {
        const past = window.scrollY > window.innerHeight * 0.8;
        if (q.get("bar") !== "1" && past !== barWanted) {
          barWanted = past;
          renderBar();
        }
      };
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    let sayT = 0;
    function say(msg) {
      clearTimeout(sayT);
      announce.textContent = "";
      sayT = setTimeout(() => {
        announce.textContent = msg;
      }, 60);
    }
    let quiet = false;
    store2.on((type, detail) => {
      if (type === "cart:open") {
        openCart();
        return;
      }
      if (type === "cart:add") {
        render(!isOpen);
        if (!isOpen && !quiet) showToast(detail.id);
        return;
      }
      if (type === "cart:change") render(!isOpen);
    });
    if (q.get("open") === "1") {
      quiet = true;
      if (!store2.get().cart.length) {
        store2.add("skin-oil", 1);
        store2.add("day-cream", 1);
      }
      quiet = false;
    }
    render(true);
    if (q.get("open") === "1" || q.get("open") === "empty") requestAnimationFrame(() => store2.openCart());
    if (q.get("toast")) setTimeout(() => store2.add(q.get("toast"), 1), 300);
  }

  // .build/entry-preview-cart.js
  reg("cart", init);
  boot();
})();
