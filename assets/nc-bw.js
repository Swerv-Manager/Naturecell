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

  /* Faseskift mens siden står åben: genindlæs, så priser og tema passer. */
  if (window.ncBW && window.ncBW.T) {
    var T = window.ncBW.T, now = Date.now();
    [T.vip, T.open, T.end].forEach(function (t) {
      var ms = t - now;
      if (ms > 0 && ms < 2147483647) setTimeout(function () { location.reload(); }, ms + 1500);
    });
  }
})();
