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

  // src/sections/faq/faq.js
  var VISC = "cubic-bezier(.16, .84, .24, 1)";
  var SOFT = "cubic-bezier(.4, 0, .2, 1)";
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  var ICON_ERR = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"/><path d="M12 7.5v5.5M12 16.4v.1"/></svg>';
  var ICON_OK = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
  function init(root, ctx) {
    const reduce = ctx.prefersReducedMotion;
    const params = new URLSearchParams(location.search);
    const items = [...root.querySelectorAll("[data-faq-item]")].map((el) => ({
      el,
      btn: el.querySelector(".faq-btn"),
      panel: el.querySelector(".faq-a"),
      anim: null
    }));
    const setHidden = (panel, on) => {
      if (on) panel.setAttribute("hidden", "until-found");
      else panel.removeAttribute("hidden");
    };
    function animateHeight(it, from, to, dur, easing, done2) {
      if (it.anim) it.anim.cancel();
      if (reduce || from === to) {
        done2 && done2();
        return;
      }
      const a = it.panel.animate([{ height: `${from}px` }, { height: `${to}px` }], { duration: dur, easing });
      it.anim = a;
      a.onfinish = () => {
        it.anim = null;
        done2 && done2();
      };
    }
    function open(it, animate = true) {
      if (it.el.classList.contains("is-open")) return;
      const from = it.anim ? it.panel.getBoundingClientRect().height : 0;
      setHidden(it.panel, false);
      it.btn.setAttribute("aria-expanded", "true");
      it.el.classList.add("is-open");
      if (!animate) return;
      const to = it.panel.scrollHeight;
      const dur = Math.round(Math.min(760, 420 + to * 1.1));
      animateHeight(it, from, to, dur, VISC);
    }
    function close(it, animate = true) {
      if (!it.el.classList.contains("is-open")) return;
      const from = it.panel.getBoundingClientRect().height;
      it.btn.setAttribute("aria-expanded", "false");
      it.el.classList.remove("is-open");
      if (!animate) {
        setHidden(it.panel, true);
        return;
      }
      const dur = Math.round(Math.min(560, 320 + from * 0.7));
      animateHeight(it, from, 0, dur, SOFT, () => setHidden(it.panel, true));
    }
    const toggle = (it) => {
      if (it.el.classList.contains("is-open")) {
        close(it);
        return;
      }
      items.forEach((o) => o !== it && close(o));
      open(it);
    };
    items.forEach((it, i) => {
      it.btn.addEventListener("click", () => toggle(it));
      it.panel.addEventListener("beforematch", () => {
        items.forEach((o) => o !== it && close(o, false));
        open(it, false);
      });
      it.btn.addEventListener("keydown", (e) => {
        const k = e.key;
        let j = null;
        if (k === "ArrowDown") j = (i + 1) % items.length;
        else if (k === "ArrowUp") j = (i - 1 + items.length) % items.length;
        else if (k === "Home") j = 0;
        else if (k === "End") j = items.length - 1;
        if (j !== null) {
          e.preventDefault();
          items[j].btn.focus();
        }
      });
    });
    const hashMatch = /^#faq-q(\d+)$/.exec(location.hash);
    const want = params.has("faq") ? +params.get("faq") : hashMatch ? +hashMatch[1] : 1;
    if (want >= 1 && want <= items.length) open(items[want - 1], false);
    const chip = root.querySelector("[data-faq-countdown]");
    const left = root.querySelector("[data-faq-left]");
    const pad = (n) => String(n).padStart(2, "0");
    function tick() {
      const ms = ctx.clock.end - ctx.clock.now();
      if (ms <= 0) {
        chip.hidden = true;
        return;
      }
      chip.hidden = false;
      const s = Math.floor(ms / 1e3);
      const d = Math.floor(s / 86400), h = Math.floor(s % 86400 / 3600), m = Math.floor(s % 3600 / 60), sec = s % 60;
      left.textContent = d > 0 ? `${d} ${d === 1 ? "dag" : "dage"}, ${h} t. ${pad(m)} min.` : `${h} t. ${pad(m)} min. ${pad(sec)} sek.`;
    }
    if (chip && left) {
      tick();
      setInterval(tick, 1e3);
    }
    const gift = root.querySelector("[data-faq-gift]");
    if (gift) {
      const label = gift.querySelector("[data-faq-gift-label]");
      const sum = gift.querySelector("[data-faq-gift-sum]");
      const fill = gift.querySelector("[data-faq-gift-fill]");
      const T = ctx.campaign.giftThreshold;
      const render = () => {
        const sub = ctx.store.subtotal();
        const reached = sub > T;
        gift.classList.toggle("is-done", reached);
        fill.style.setProperty("--p", Math.min(1, sub / T).toFixed(4));
        sum.textContent = `${ctx.fmt.kr(sub)} af ${ctx.fmt.kr(T)}`;
        if (reached) label.innerHTML = `${ICON_OK}Din Lip Balm f\xF8lger med`;
        else if (sub === 0) label.textContent = "Din kurv er tom endnu";
        else label.textContent = `L\xE6g for ${ctx.fmt.kr(T + 1 - sub)} mere i kurven`;
      };
      render();
      ctx.store.on((type) => {
        if (type === "cart:add" || type === "cart:change") render();
      });
    }
    const club = root.querySelector(".faq-club");
    const body = root.querySelector("[data-faq-club]");
    const form = root.querySelector("[data-faq-form]");
    const field = root.querySelector("[data-faq-field]");
    const input = root.querySelector("#faq-email");
    const err = root.querySelector("[data-faq-err]");
    const done = root.querySelector("[data-faq-done]");
    const doneEmail = root.querySelector("[data-faq-done-email]");
    const status = root.querySelector("[data-faq-status]");
    if (!form) return;
    let touched = false;
    const check = (v) => {
      v = v.trim();
      if (!v) return "Skriv din e-mail, s\xE5 kan vi byde dig velkommen.";
      if (!EMAIL_RE.test(v)) return "Den e-mail ser ikke helt rigtig ud. Pr\xF8v fx navn@eksempel.dk.";
      return "";
    };
    const showError = (msg) => {
      field.classList.toggle("is-invalid", !!msg);
      input.setAttribute("aria-invalid", msg ? "true" : "false");
      if (msg) {
        field.classList.remove("is-invalid");
        void field.offsetWidth;
        field.classList.add("is-invalid");
        err.innerHTML = `${ICON_ERR}<span>${msg}</span>`;
      } else err.textContent = "";
    };
    input.addEventListener("input", () => {
      if (touched && !check(input.value)) showError("");
    });
    input.addEventListener("blur", () => {
      if (touched) showError(check(input.value));
    });
    function succeed(email) {
      doneEmail.textContent = email;
      const from = body.getBoundingClientRect().height;
      const finish = () => {
        form.hidden = true;
        done.hidden = false;
        club.classList.add("is-done");
        status.textContent = `Tak. Du er nu tilmeldt kundeklubben med ${email}.`;
        const to = body.getBoundingClientRect().height;
        if (!reduce) body.animate([{ height: `${from}px` }, { height: `${to}px` }], { duration: 700, easing: VISC });
        done.focus({ preventScroll: true });
      };
      if (reduce) return finish();
      form.animate(
        [{ opacity: 1, transform: "none", filter: "blur(0)" }, { opacity: 0, transform: "translateY(-6px)", filter: "blur(2px)" }],
        { duration: 260, easing: SOFT, fill: "forwards" }
      ).onfinish = finish;
    }
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      touched = true;
      const msg = check(input.value);
      showError(msg);
      if (msg) {
        input.focus();
        return;
      }
      form.classList.add("is-busy");
      form.setAttribute("aria-busy", "true");
      setTimeout(() => {
        form.classList.remove("is-busy");
        form.removeAttribute("aria-busy");
        succeed(input.value.trim());
      }, reduce ? 0 : 900);
    });
    const stage = params.get("club");
    if (stage === "error") {
      input.value = "navn@eksempel";
      touched = true;
      showError(check(input.value));
    }
    if (stage === "busy") {
      input.value = "maja@eksempel.dk";
      form.classList.add("is-busy");
    }
    if (stage === "done") {
      input.value = "maja@eksempel.dk";
      succeed("maja@eksempel.dk");
    }
  }

  // .build/entry-preview-faq.js
  reg("faq", init);
  boot();
})();
