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

  // src/sections/theme-testimonials/theme-testimonials.js
  var SCORE = 4.7;
  var COUNT = 615;
  var TP_URL = "https://dk.trustpilot.com/review/naturecell.dk";
  var word = (s) => s >= 4.3 ? "Fremragende" : s >= 3.8 ? "Rigtig godt" : s >= 2.8 ? "Middel" : s >= 1.8 ? "D\xE5rligt" : "Meget d\xE5rligt";
  var STAR = "M23 31.2l7.1-1.8 3 9.2L23 31.2zm16.4-11.9H26.9L23 7.4l-3.9 11.9H6.6l10.2 7.4-3.9 11.9 10.2-7.4 6.3-4.5 10.1-7.4z";
  var REVIEWS = [
    { stars: 5, title: "Bl\xF8d hud hele dagen", text: "Jeg bruger dagcremen hver morgen. Den tr\xE6kker hurtigt ind og efterlader huden bl\xF8d.", name: "Hanne", when: "for 2 dage siden" },
    { stars: 5, title: "Hurtig levering og venlig service", text: "Pakken kom dagen efter, flot pakket, og jeg fik hurtigt svar p\xE5 mit sp\xF8rgsm\xE5l.", name: "Mette", when: "for 4 dage siden" },
    { stars: 5, title: "Fast del af min aftenrutine", text: "Olien har en mild duft, og min hud f\xF8les velplejet om morgenen.", name: "Lars", when: "for 6 dage siden" },
    { stars: 4, title: "Fedter ikke", text: "H\xE5ndcremen giver god fugt uden at fedte. Den st\xE5r nu ved k\xF8kkenvasken.", name: "Susanne", when: "for 1 uge siden" },
    { stars: 5, title: "Rart at handle dansk", text: "Fin kvalitet fra en dansk familievirksomhed, og emballagen er rigtig p\xE6n.", name: "Karin", when: "for 1 uge siden" },
    { stars: 5, title: "Mild mod min sarte hud", text: "Rensegelen er mild, og huden strammer ikke bagefter. Jeg k\xF8ber den igen.", name: "Jonas", when: "for 2 uger siden" }
  ];
  function starsSvg(score, cls = "tp-stars") {
    const r = Math.round(score * 2) / 2;
    let s = `<svg class="${cls}" viewBox="0 0 251 46" aria-hidden="true" focusable="false">`;
    for (let i = 0; i < 5; i++) {
      const x = i * 51, fill = r - i;
      s += `<rect x="${x}" width="46" height="46" fill="#dcdce6"/>`;
      if (fill >= 1) s += `<rect x="${x}" width="46" height="46" fill="#00b67a"/>`;
      else if (fill >= 0.5) s += `<rect x="${x}" width="23" height="46" fill="#00b67a"/>`;
      s += `<path transform="translate(${x} 0)" fill="#fff" d="${STAR}"/>`;
    }
    return s + "</svg>";
  }
  var LOGO = '<span class="tp-logo"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 1.5l2.6 7.9H23l-6.8 4.9 2.6 7.9L12 17.3l-6.8 4.9 2.6-7.9L1 9.4h8.4z"/></svg>Trustpilot</span>';
  var CHEV = (d) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;
  var VER = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="11" fill="currentColor"/><path d="m7 12.5 3.2 3L17 9" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  function hydrate(widget) {
    if (widget.dataset.tpHydrated) return;
    const count = COUNT.toLocaleString("da-DK");
    const score = String(SCORE).replace(".", ",");
    const cards = REVIEWS.map((r) => `<a class="tp-rv" href="${TP_URL}" target="_blank" rel="noopener" data-standin><span class="tp-rv__top">${starsSvg(r.stars)}<span class="tp-rv__ver">${VER}Verificeret</span></span><span class="tp-rv__title">${esc(r.title)}</span><span class="tp-rv__text">${esc(r.text)}</span><span class="tp-rv__who"><b>${esc(r.name)}</b>, ${esc(r.when)}</span></a>`).join("");
    const box = document.createElement("div");
    box.className = "tp-cr";
    box.innerHTML = `<a class="tp-cr__sum" href="${TP_URL}" target="_blank" rel="noopener" aria-label="${word(SCORE)}: ${score} ud af 5 p\xE5 Trustpilot, baseret p\xE5 ${count} anmeldelser"><span class="tp-cr__word">${word(SCORE)}</span>${starsSvg(SCORE)}<span class="tp-cr__based">Baseret p\xE5 <b>${count} anmeldelser</b></span>${LOGO}</a><div class="tp-cr__main"><div class="tp-cr__row"><button type="button" class="tp-cr__arrow" data-dir="-1" aria-label="Forrige anmeldelse">${CHEV("m15 18-6-6 6-6")}</button><div class="tp-cr__track" role="list" aria-label="Anmeldelser p\xE5 Trustpilot">${cards}</div><button type="button" class="tp-cr__arrow" data-dir="1" aria-label="N\xE6ste anmeldelse">${CHEV("m9 18 6-6-6-6")}</button></div><p class="tp-cr__foot" data-standin>Mockup: eksempler p\xE5 anmeldelser \u2013 live-siden viser de rigtige fra Trustpilot</p></div>`;
    box.querySelectorAll(".tp-rv").forEach((a) => a.setAttribute("role", "listitem"));
    const fallback = widget.querySelector(".nc-testi__tp-fallback");
    if (fallback) fallback.style.display = "none";
    widget.appendChild(box);
    const track = box.querySelector(".tp-cr__track");
    const [prev, next] = box.querySelectorAll(".tp-cr__arrow");
    const step = () => {
      const card = track.querySelector(".tp-rv");
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return card ? card.getBoundingClientRect().width + gap : track.clientWidth;
    };
    const sync = () => {
      const max = track.scrollWidth - track.clientWidth;
      prev.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft >= max - 2;
    };
    [prev, next].forEach((b) => b.addEventListener("click", () => track.scrollBy({ left: step() * +b.dataset.dir })));
    track.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    sync();
    widget.dataset.tpHydrated = "1";
  }
  function init(root) {
    root.querySelectorAll(".trustpilot-widget").forEach(hydrate);
  }

  // .build/entry-preview-theme-testimonials.js
  reg("theme-testimonials", init);
  boot();
})();
