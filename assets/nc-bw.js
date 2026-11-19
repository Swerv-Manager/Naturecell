/* NatureCell Black Week 2026 (Swerv 12.11): nedtællinger, datotidslinje, gavefaner og VIP-tilmelding. */
(function () {
  'use strict';

  function pad(n) { return (n < 10 ? '0' : '') + n; }

  /* Nedtællinger: [data-nc-cd="2026-11-30T22:59:00Z"] med [data-u="d|h|m|s"] indeni. */
  var cds = [].slice.call(document.querySelectorAll('[data-nc-cd]')).map(function (el) {
    return { el: el, to: Date.parse(el.getAttribute('data-nc-cd')), u: el.querySelectorAll('[data-u]') };
  }).filter(function (c) { return !isNaN(c.to); });

  function tick() {
    var now = Date.now();
    cds.forEach(function (c) {
      var s = Math.max(0, Math.floor((c.to - now) / 1000));
      var v = { d: Math.floor(s / 86400), h: Math.floor((s % 86400) / 3600), m: Math.floor((s % 3600) / 60), s: s % 60 };
      for (var i = 0; i < c.u.length; i++) {
        var k = c.u[i].getAttribute('data-u'), t = pad(v[k]);
        if (c.u[i].textContent !== t) c.u[i].textContent = t;
      }
    });
  }
  if (cds.length) { tick(); setInterval(tick, 1000); }

  /* Datotidslinje: [data-nc-dates] med punkter [data-end]. Første kommende = is-next, tidligere = is-past. */
  [].forEach.call(document.querySelectorAll('[data-nc-dates]'), function (list) {
    var items = list.querySelectorAll('[data-end]'), now = Date.now(), next = -1;
    for (var i = 0; i < items.length; i++) { if (next < 0 && Date.parse(items[i].getAttribute('data-end')) > now) next = i; }
    for (var j = 0; j < items.length; j++) {
      items[j].classList.remove('is-next', 'is-past', 'is-future');
      items[j].classList.add(next === -1 || j < next ? 'is-past' : j === next ? 'is-next' : 'is-future');
    }
  });

  /* Gavefaner på forsiden: [data-nc-gifttabs] med knapper [data-tab] og paneler [data-panel]. */
  [].forEach.call(document.querySelectorAll('[data-nc-gifttabs]'), function (box) {
    box.addEventListener('click', function (e) {
      var b = e.target.closest('[data-tab]');
      if (!b) return;
      var key = b.getAttribute('data-tab');
      [].forEach.call(box.querySelectorAll('[data-tab]'), function (x) {
        var on = x === b; x.classList.toggle('is-active', on); x.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      [].forEach.call(box.querySelectorAll('[data-panel]'), function (p) { p.hidden = p.getAttribute('data-panel') !== key; });
    });
  });

  /* VIP-tilmelding lykkedes (Shopifys kundeformular er sendt): giv VIP-adgang på denne enhed. */
  if (document.querySelector('[data-nc-vip-success]') && window.ncBW && window.ncBW.setVip) window.ncBW.setVip();

  /* VIP-kode (Swerv 19.11): rigtig kode giver VIP-adgang på enheden og sender videre (?return= eller Black Week-siden). */
  [].forEach.call(document.querySelectorAll('form[data-nc-vip-code]'), function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input[name="code"]');
      var msg = form.querySelector('[data-nc-vip-code-msg]');
      var bw = window.ncBW;
      if (bw && bw.tryCode && bw.tryCode(input && input.value)) {
        bw.setVip();
        var back = '';
        try { back = new URLSearchParams(location.search).get('return') || ''; } catch (err) {}
        if (!/^\/(?!\/)/.test(back) || back.indexOf(bw.vipUrl) === 0) back = form.getAttribute('data-next') || '/';
        location.href = back;
        return;
      }
      if (msg) msg.hidden = false;
      if (input) { input.setAttribute('aria-invalid', 'true'); input.focus(); }
    });
  });

  /* Kampagnegave (Swerv 19.11): under VIP Access Håndcremen over 499 kr, i Black Week Eksfolieringshandsken over 899 kr
     (beløb efter rabat, uden gaven selv). Gaven lægges i kurven som egen linje (_nc_gift) og fjernes igen under
     grænsen. Prisen bliver 0 af Shopifys automatiske "Køb X få Y"-rabat, som også har grænsen. Kører ved
     sideindlæsning, når kurv-skuffen opdateres, og før kassen. */
  var giftBusy = null;
  function giftSync() {
    var bw = window.ncBW;
    if (!bw || !bw.gifts || (bw.phase === 'vip' && !bw.vipOk)) return Promise.resolve(false);
    if (giftBusy) return giftBusy;
    var g = bw.gifts[bw.phase] || null;
    var root = (window.Shopify && Shopify.routes && Shopify.routes.root) || '/';
    var json = function (r) { if (!r.ok) throw new Error(r.status); return r.json(); };
    var post = function (url, body) {
      return fetch(root + url, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(body) }).then(json);
    };
    giftBusy = fetch(root + 'cart.js', { headers: { Accept: 'application/json' } }).then(json).then(function (cart) {
      var lines = cart.items || [], base = 0, mine = [], other = [];
      lines.forEach(function (it) {
        var isGift = it.properties && it.properties._nc_gift;
        if (!isGift) { base += it.final_line_price; return; }
        if (g && it.variant_id === g.id) mine.push(it); else other.push(it);
      });
      var want = !!(g && g.id && g.ok && base > 0 && base >= g.min);
      var ops = [];
      other.forEach(function (it) { ops.push(['cart/change.js', { id: it.key, quantity: 0 }]); });
      mine.forEach(function (it, i) {
        if (!want || i > 0) ops.push(['cart/change.js', { id: it.key, quantity: 0 }]);
        else if (it.quantity !== 1) ops.push(['cart/change.js', { id: it.key, quantity: 1 }]);
      });
      if (want && !mine.length) ops.push(['cart/add.js', { items: [{ id: g.id, quantity: 1, properties: { _nc_gift: '1' } }] }]);
      return ops.reduce(function (pr, op) { return pr.then(function () { return post(op[0], op[1]); }); }, Promise.resolve())
        .then(function () { return ops.length > 0; });
    }).catch(function () { return false; }).then(function (changed) { giftBusy = null; return changed; });
    return giftBusy;
  }
  window.ncBW && (window.ncBW.giftSync = giftSync);

  if (window.ncBW && window.ncBW.gifts && window.ncBW.phase !== 'normal') {
    var onCartPage = /\/cart\/?$/.test(location.pathname);
    giftSync().then(function (changed) {
      if (!changed) return;
      if (onCartPage) location.reload(); else if (window.ncRefreshCart) window.ncRefreshCart(false);
    });
    /* Kurv-skuffen gentegnes efter hver ændring: synk gaven bagefter (debounce, ingen løkke ved egne ændringer). */
    var drawer = document.querySelector('[data-nc-drawer]'), giftTimer = 0, selfRefresh = false;
    if (drawer && window.MutationObserver) {
      new MutationObserver(function () {
        if (selfRefresh) { selfRefresh = false; return; }
        clearTimeout(giftTimer);
        giftTimer = setTimeout(function () {
          giftSync().then(function (changed) {
            if (changed && window.ncRefreshCart) { selfRefresh = true; window.ncRefreshCart(drawer.classList.contains('is-open')); }
          });
        }, 250);
      }).observe(drawer, { childList: true });
    }
    /* Før kassen: sørg for at gaven er rigtig, så kunden ikke mister den eller får den uden at være over grænsen. */
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a.nc-drawer__checkout, button[name="checkout"]');
      if (!a || a.getAttribute('aria-disabled') === 'true' || a.disabled || a.__ncGiftDone) return;
      e.preventDefault();
      giftSync().then(function () {
        a.__ncGiftDone = true;
        if (a.tagName === 'A') location.href = a.href; else a.click();
      });
    }, true);
  }

  /* Faseskift mens siden står åben: genindlæs, så priser og tema passer. */
  if (window.ncBW && window.ncBW.T) {
    var T = window.ncBW.T, now = Date.now();
    [T.vip, T.open, T.end].forEach(function (t) {
      var ms = t - now;
      if (ms > 0 && ms < 2147483647) setTimeout(function () { location.reload(); }, ms + 1500);
    });
  }
})();
