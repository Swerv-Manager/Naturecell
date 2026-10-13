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

  // src/sections/stories/stories.js
  var clamp = (x, a, b) => Math.max(a, Math.min(b, x));
  var esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  var SHOT = {
    "skin-oil": { src: "products/skin-oil.webp", box: [1200, 1200, 473, 242, 722, 1007], h: 0.9 },
    "night-cream": { src: "products/night-cream.webp", box: [1200, 1200, 345, 96, 913, 1154], h: 0.86 },
    "body-lotion": { src: "products/body-lotion.webp", box: [800, 1200, 186, 163, 601, 1143], h: 0.94 },
    "komplet-pakken": { src: "products/startpakke-plus.webp", box: [1200, 1200, 172, 77, 1149, 1121], h: 0.92 },
    "shampoo": { src: "products/shampoo.webp", box: [1200, 1200, 455, 64, 764, 1149], h: 1 },
    "serum": { src: "products/hyaluron-serum.webp", box: [800, 1200, 108, 225, 742, 1111], h: 0.9 }
  };
  var PORTRAIT = [
    { x: 172, hr: 56, sw: 132, sun: [254, 104], sr: 120 },
    { x: 150, hr: 52, sw: 124, sun: [72, 118], sr: 112 },
    { x: 178, hr: 58, sw: 150, sun: [232, 300], sr: 130 },
    { x: 160, hr: 54, sw: 128, sun: [86, 86], sr: 118 },
    { x: 182, hr: 57, sw: 144, sun: [262, 160], sr: 110 },
    { x: 150, hr: 50, sw: 120, sun: [210, 78], sr: 124 }
  ];
  function portraitSvg(i) {
    const c = PORTRAIT[i % PORTRAIT.length];
    const id = `stp${i}`;
    const hy = 200, sy = hy + c.hr * 1.02 + 22;
    return `<svg viewBox="0 0 320 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
  <defs>
    <radialGradient id="${id}s" cx="50%" cy="50%" r="50%"><stop offset="0" style="stop-color:var(--c4);stop-opacity:.95"/><stop offset=".55" style="stop-color:var(--c4);stop-opacity:.35"/><stop offset="1" style="stop-color:var(--c4);stop-opacity:0"/></radialGradient>
    <linearGradient id="${id}f" x1="0" y1="0" x2=".35" y2="1"><stop offset="0" style="stop-color:var(--c3);stop-opacity:.42"/><stop offset="1" style="stop-color:var(--c3);stop-opacity:.82"/></linearGradient>
    <radialGradient id="${id}h" cx="38%" cy="32%" r="70%"><stop offset="0" style="stop-color:var(--c4);stop-opacity:.55"/><stop offset=".6" style="stop-color:var(--c3);stop-opacity:.28"/><stop offset="1" style="stop-color:var(--c3);stop-opacity:.6"/></radialGradient>
    <filter id="${id}b" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="3.2"/></filter>
    <filter id="${id}bb" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="14"/></filter>
  </defs>
  <circle cx="${c.sun[0]}" cy="${c.sun[1]}" r="${c.sr}" fill="url(#${id}s)" filter="url(#${id}bb)"/>
  <g filter="url(#${id}b)">
    <path d="M${c.x - c.sw} 430 C${c.x - c.sw} ${sy + 40} ${c.x - c.sw * 0.62} ${sy} ${c.x} ${sy} C${c.x + c.sw * 0.62} ${sy} ${c.x + c.sw} ${sy + 40} ${c.x + c.sw} 430 Z" fill="url(#${id}f)"/>
    <ellipse cx="${c.x}" cy="${hy}" rx="${c.hr}" ry="${c.hr * 1.18}" fill="url(#${id}h)"/>
  </g>
  <circle cx="${c.sun[0]}" cy="${c.sun[1]}" r="${c.sr * 0.62}" fill="none" style="stroke:var(--c4)" stroke-width="1" opacity=".55"/>
</svg>`;
  }
  var ICON = {
    bag: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.6 8.25h12.8l-1.05 10.6a2 2 0 0 1-1.99 1.8H8.64a2 2 0 0 1-1.99-1.8z"/><path d="M9 10.5V7a3 3 0 0 1 6 0v3.5"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5.5 12.6 4.1 4.1 8.9-9.4"/></svg>'
  };
  function init(root, ctx) {
    const { fmt: fmt2, store: store2, byId: byId2 } = ctx;
    const kr = (n2) => fmt2.kr(n2).replace(/ (?=kr\.)/, "\xA0");
    const $ = (s, el = root) => el.querySelector(s);
    const $$ = (s, el = root) => [...el.querySelectorAll(s)];
    const RM = ctx.prefersReducedMotion;
    const FINE = matchMedia("(hover: hover) and (pointer: fine)").matches;
    const carousel = $("[data-stories-carousel]");
    const viewport = $("[data-stories-viewport]");
    const track = $("[data-stories-track]");
    const cards = $$(".stories-card", track);
    const thumb = $("[data-stories-thumb]");
    const nowEl = $("[data-stories-now]");
    const prevBtn = $("[data-stories-prev]");
    const nextBtn = $("[data-stories-next]");
    const live = $("[data-stories-live]");
    const bubble = $("[data-stories-cursor]");
    const n = cards.length;
    if (!n) return;
    cards.forEach((card, i) => {
      card.style.setProperty("--i", i);
      const portrait = $(".stories-portrait", card);
      if (portrait) portrait.insertAdjacentHTML("afterbegin", portraitSvg(i));
      const slot = $(".stories-product", card);
      const p = slot && byId2[slot.dataset.product];
      if (!p) {
        slot && slot.remove();
        return;
      }
      const who = ($(".stories-name", card) || {}).textContent || "";
      const name = p.name + (p.strength ? ` ${p.strength}` : "");
      const s = SHOT[p.id];
      let img = "";
      if (s) {
        const [w, , x0, y0, x1, y1] = s.box;
        let k = 0.7 * s.h / (y1 - y0);
        k = Math.min(k, 0.76 / (x1 - x0));
        const left = 0.5 - (x0 + x1) / 2 * k, top = 0.88 - y1 * k;
        img = `<img src="${ctx.asset(s.src)}" alt="" loading="lazy" decoding="async" draggable="false" style="width:${(w * k * 100).toFixed(2)}%;left:${(left * 100).toFixed(2)}%;top:${(top * 100).toFixed(2)}%">`;
      }
      const price = p.pct ? `<span class="nc-price"><span class="nc-price__now">${kr(p.price)}</span><span class="nc-price__was">F\xF8rpris <s>${kr(p.price0)}</s></span></span>` : `<span class="nc-price"><span class="nc-price__now">${kr(p.price)}</span></span>`;
      slot.innerHTML = `
      <span class="stories-prod__shot" aria-hidden="true">${img}</span>
      <span class="stories-prod__meta">
        <span class="stories-prod__eyebrow">${esc(who)} bruger</span>
        <a class="stories-prod__name" href="#deals">${esc(name)}</a>
        ${price}
      </span>
      <button class="nc-btn nc-btn--light stories-add" type="button" data-add="${esc(p.id)}" aria-label="L\xE6g ${esc(name)} i kurv">
        <span class="stories-add__idle">L\xE6g i kurv</span><span class="stories-add__done" aria-hidden="true">${ICON.check}Lagt i kurv</span>
      </button>`;
      const im = $("img", slot);
      if (im) im.addEventListener("error", () => im.remove(), { once: true });
    });
    root.addEventListener("click", (e) => {
      const b = e.target.closest("[data-add]");
      if (!b || !root.contains(b)) return;
      store2.add(b.dataset.add, 1);
      b.classList.remove("is-added");
      void b.offsetWidth;
      b.classList.add("is-added");
      clearTimeout(b._t);
      b._t = setTimeout(() => b.classList.remove("is-added"), 2e3);
      live.textContent = `${byId2[b.dataset.add]?.name || "Produktet"} er lagt i kurven.`;
    });
    let stops = [], max = 0, step = 1;
    let x = 0, v = 0, target = 0, mode = "idle", raf = 0, last = 0, index = 0;
    const OMEGA = RM ? 40 : 8.5;
    const RUBBER = 0.32;
    function measure() {
      const o = cards[0].offsetLeft;
      stops = cards.map((c) => c.offsetLeft - o);
      if (n > 1) {
        const padL = parseFloat(getComputedStyle(viewport).paddingLeft) || 0;
        const room = viewport.clientWidth - 2 * padL - cards[n - 1].offsetWidth;
        stops[n - 1] = Math.max(stops[n - 2] + 1, stops[n - 1] - Math.max(0, room));
      }
      max = stops[n - 1];
      step = n > 1 ? stops[1] - stops[0] : 1;
    }
    const nearest = (pos) => {
      let best = 0;
      for (let i = 1; i < n; i++) if (Math.abs(stops[i] - pos) < Math.abs(stops[best] - pos)) best = i;
      return best;
    };
    const rubber = (raw2) => raw2 < 0 ? raw2 * RUBBER : raw2 > max ? max + (raw2 - max) * RUBBER : raw2;
    function render() {
      track.style.transform = `translate3d(${(-x).toFixed(2)}px,0,0)`;
      for (let i2 = 0; i2 < n; i2++) {
        const p = clamp((x - stops[i2]) / step, -1.6, 1.6);
        cards[i2].style.setProperty("--p", p.toFixed(4));
        cards[i2].style.setProperty("--d", Math.abs(p).toFixed(4));
      }
      const f = max ? clamp(x / max, -0.06, 1.06) : 0;
      thumb.style.transform = `translate3d(${(f * (n - 1) * 100).toFixed(3)}%,0,0)`;
      const i = nearest(x);
      if (i !== index) setIndex(i);
    }
    function setIndex(i, announce) {
      index = i;
      nowEl.textContent = String(i + 1).padStart(2, "0");
      if (!RM) {
        nowEl.classList.remove("is-tick");
        void nowEl.offsetWidth;
        nowEl.classList.add("is-tick");
      }
      prevBtn.disabled = i === 0;
      nextBtn.disabled = i === n - 1;
      cards.forEach((c, k) => c.classList.toggle("is-active", k === i));
      if (announce) live.textContent = `Kundecase ${i + 1} af ${n}: ${($(".stories-name", cards[i]) || {}).textContent || ""}`;
    }
    function loop(t) {
      raf = 0;
      const dt = Math.min(0.05, last ? (t - last) / 1e3 : 1 / 60);
      last = t;
      if (mode === "spring") {
        const sub = 4, h = dt / sub;
        for (let s = 0; s < sub; s++) {
          const a = -OMEGA * OMEGA * (x - target) - 2 * OMEGA * v;
          v += a * h;
          x += v * h;
        }
        if (Math.abs(x - target) < 0.25 && Math.abs(v) < 4) {
          x = target;
          v = 0;
          mode = "idle";
        }
      }
      render();
      if (mode === "spring") raf = requestAnimationFrame(loop);
      else last = 0;
    }
    const kick = () => {
      if (!raf) {
        last = 0;
        raf = requestAnimationFrame(loop);
      }
    };
    function settleTo(i, vel = v) {
      target = stops[clamp(i, 0, n - 1)];
      const dist = target - x;
      if (Math.sign(vel) === Math.sign(dist)) vel = Math.sign(vel) * Math.min(Math.abs(vel), OMEGA * Math.abs(dist) * 0.92);
      else vel *= 0.35;
      v = vel;
      mode = "spring";
      kick();
    }
    const goTo = (i, announce) => {
      settleTo(i);
      if (announce) setIndex(clamp(i, 0, n - 1), true);
    };
    prevBtn.addEventListener("click", () => goTo(Math.max(0, nearestTarget() - 1), true));
    nextBtn.addEventListener("click", () => goTo(Math.min(n - 1, nearestTarget() + 1), true));
    const nearestTarget = () => mode === "spring" ? nearest(target) : nearest(x);
    carousel.addEventListener("keydown", (e) => {
      if (e.target.closest("input, textarea")) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goTo(Math.min(n - 1, nearestTarget() + 1), true);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goTo(Math.max(0, nearestTarget() - 1), true);
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(0, true);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(n - 1, true);
      }
    });
    track.addEventListener("focusin", (e) => {
      const i = cards.indexOf(e.target.closest(".stories-card"));
      if (i >= 0 && i !== nearestTarget()) goTo(i, true);
    });
    viewport.addEventListener("scroll", () => {
      viewport.scrollLeft = 0;
    });
    let drag = null, moved = false;
    viewport.addEventListener("pointerdown", (e) => {
      if (e.button !== 0 || e.target.closest("button")) return;
      drag = { id: e.pointerId, sx: e.clientX, sy: e.clientY, x0: x, raw: x, lock: 0, samples: [[e.timeStamp, x]] };
      moved = false;
      if (mode === "spring") {
        drag.x0 = x;
        mode = "held";
        v = 0;
      }
      if (e.pointerType === "mouse") e.preventDefault();
      setBubblePressed(true);
    });
    window.addEventListener("pointermove", (e) => {
      if (!drag || e.pointerId !== drag.id) return;
      const dx = e.clientX - drag.sx, dy = e.clientY - drag.sy;
      if (!drag.lock) {
        if (Math.abs(dx) > 6 && Math.abs(dx) > Math.abs(dy) * 1.1) {
          drag.lock = 1;
          moved = true;
          viewport.classList.add("is-dragging");
          try {
            viewport.setPointerCapture(e.pointerId);
          } catch (_) {
          }
        } else if (Math.abs(dy) > 8) {
          endDrag(e, true);
          return;
        } else return;
      }
      drag.raw = drag.x0 - dx;
      x = rubber(drag.raw);
      const s = drag.samples;
      s.push([e.timeStamp, x]);
      while (s.length > 2 && e.timeStamp - s[0][0] > 90) s.shift();
      if (!raf) raf = requestAnimationFrame((t) => {
        raf = 0;
        render();
      });
    });
    function endDrag(e, cancelled) {
      if (!drag) return;
      const d = drag;
      drag = null;
      viewport.classList.remove("is-dragging");
      setBubblePressed(false);
      if (!d.lock) {
        if (mode === "held") settleTo(nearest(x), 0);
        return;
      }
      const s = d.samples, a = s[0], b = s[s.length - 1];
      const dtv = (b[0] - a[0]) / 1e3;
      let vel = dtv > 8e-3 ? (b[1] - a[1]) / dtv : 0;
      if (e.timeStamp - b[0] > 80) vel = 0;
      vel = clamp(vel, -5200, 5200);
      const projected = x + vel * 0.24;
      let i = nearest(clamp(projected, 0, max));
      const from = nearest(d.x0);
      const dragged = x - d.x0;
      if (!cancelled && i === from) {
        if (Math.abs(vel) > 320 && Math.abs(dragged) > 12) i = clamp(from + Math.sign(vel), 0, n - 1);
        else if (Math.abs(dragged) > step * 0.18 && Math.sign(vel) !== -Math.sign(dragged)) i = clamp(from + Math.sign(dragged), 0, n - 1);
      }
      settleTo(i, vel);
      if (i !== from) setIndex(i, true);
    }
    window.addEventListener("pointerup", (e) => endDrag(e));
    window.addEventListener("pointercancel", (e) => endDrag(e, true));
    viewport.addEventListener("click", (e) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
        moved = false;
      }
    }, true);
    viewport.addEventListener("dragstart", (e) => e.preventDefault());
    let wheelT = 0;
    viewport.addEventListener("wheel", (e) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();
      if (mode === "spring") mode = "held";
      const dx = e.deltaMode === 1 ? e.deltaX * 16 : e.deltaX;
      const raw2 = x + dx * (x < 0 || x > max ? RUBBER : 1);
      x = clamp(raw2, -90, max + 90);
      if (!raf) raf = requestAnimationFrame((t) => {
        raf = 0;
        render();
      });
      clearTimeout(wheelT);
      wheelT = setTimeout(() => {
        mode = "idle";
        settleTo(nearest(x), 0);
      }, 110);
    }, { passive: false });
    const ro = new ResizeObserver(() => {
      measure();
      x = target = stops[index] || 0;
      v = 0;
      mode = "idle";
      render();
    });
    ro.observe(viewport);
    measure();
    render();
    setIndex(0);
    let setBubblePressed = () => {
    };
    if (FINE && bubble) {
      root.classList.add("has-cursor");
      let bx = -200, by = -200, tx = -200, ty = -200, on = false, pressed = false, s = 0.4, bRaf = 0;
      const span = $("span", bubble);
      const tickB = () => {
        bRaf = 0;
        const k = RM ? 1 : 0.2;
        bx += (tx - bx) * k;
        by += (ty - by) * k;
        const sTarget = on ? pressed ? 0.78 : 1 : 0.4;
        s += (sTarget - s) * (RM ? 1 : 0.16);
        bubble.style.transform = `translate3d(${bx.toFixed(1)}px,${by.toFixed(1)}px,0) scale(${s.toFixed(3)})`;
        if (Math.abs(tx - bx) > 0.2 || Math.abs(ty - by) > 0.2 || Math.abs(sTarget - s) > 2e-3) bRaf = requestAnimationFrame(tickB);
      };
      const kickB = () => {
        if (!bRaf) bRaf = requestAnimationFrame(tickB);
      };
      const setOn = (v2) => {
        if (on !== v2) {
          on = v2;
          bubble.classList.toggle("is-on", v2);
          kickB();
        }
      };
      viewport.addEventListener("pointermove", (e) => {
        if (e.pointerType !== "mouse") return;
        if (!on && !drag) {
          bx = e.clientX;
          by = e.clientY;
        }
        tx = e.clientX;
        ty = e.clientY;
        setOn(!!drag || !e.target.closest("a, button"));
        kickB();
      });
      viewport.addEventListener("pointerleave", () => {
        if (!drag) setOn(false);
      });
      window.addEventListener("scroll", () => {
        if (on && !drag) setOn(false);
      }, { passive: true });
      setBubblePressed = (p) => {
        pressed = p;
        if (span) span.style.opacity = p ? ".75" : "";
        kickB();
      };
    }
    if (!RM && "IntersectionObserver" in window) {
      carousel.classList.add("is-pre");
      const io = new IntersectionObserver((es) => {
        if (!es.some((en) => en.isIntersecting)) return;
        io.disconnect();
        requestAnimationFrame(() => {
          carousel.classList.add("is-enter");
          requestAnimationFrame(() => carousel.classList.remove("is-pre"));
          setTimeout(() => carousel.classList.remove("is-enter"), 2200);
        });
      }, { threshold: 0.18 });
      io.observe(carousel);
    }
  }

  // .build/entry-preview-stories.js
  reg("stories", init);
  boot();
})();
