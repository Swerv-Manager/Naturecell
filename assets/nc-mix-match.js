/* Bland selv (sections/nc-mix-match.liquid): kunden vaelger produkter, pakken viser trin, pris og
   besparelse, og "Laeg hele pakken i kurven" laegger alt i kurven i et kald (/cart/add.js med items).
   Rabatten trykkes igennem af Shopifys automatiske rabatter; her vises kun prisen. */
(function () {
  'use strict';

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function fill(str, vals) { return String(str).replace(/\{(\w+)\}/g, function (m, k) { return vals[k] != null ? vals[k] : m; }); }
  function esc(s) { var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

  var CBD_ICON = '<span class="nc-cbd-i"><svg class="nc-cbd" aria-hidden="true" focusable="false"><use href="#nc-cbd"></use></svg></span>';
  function cbd(text) {
    var html = esc(text);
    if (!document.getElementById('nc-cbd')) return html;
    return html.replace(/CBD-/g, '<span class="nc-cbd-w">' + CBD_ICON + '-</span>').replace(/CBD/g, CBD_ICON);
  }

  function money(cents, format) {
    var f = format || '{{amount_with_comma_separator}} kr';
    var m = f.match(/\{\{\s*(\w+)\s*\}\}/);
    var kind = m ? m[1] : 'amount';
    var neg = cents < 0;
    var c = Math.abs(Math.round(cents));
    var whole = Math.floor(c / 100);
    var frac = c % 100;
    var th = ',', dec = '.';
    if (kind.indexOf('comma_separator') !== -1) { th = '.'; dec = ','; }
    else if (kind.indexOf('apostrophe') !== -1) { th = '\''; dec = '.'; }
    else if (kind.indexOf('space_separator') !== -1) { th = ' '; dec = ','; }
    var s = String(whole).replace(/\B(?=(\d{3})+(?!\d))/g, th);
    if (frac && kind.indexOf('no_decimals') === -1) s += dec + (frac < 10 ? '0' : '') + frac;
    return f.replace(/\{\{\s*\w+\s*\}\}/, (neg ? '-' : '') + s);
  }

  function init(root) {
    var cfg = {};
    try { cfg = JSON.parse(($('[data-mm-config]', root) || {}).textContent || '{}'); } catch (e) { cfg = {}; }
    var tiers = (cfg.tiers || []).slice().sort(function (a, b) { return a.qty - b.qty; });
    var t = cfg.i18n || {};
    var first = tiers[0] || { qty: 1, pct: 0 };
    var maxQty = tiers.length ? tiers[tiers.length - 1].qty : 1;
    var storeKey = 'nc-mm-' + (root.getAttribute('data-nc-mm-id') || '');

    var cards = $all('[data-mm-card]', root);
    var byId = {};
    cards.forEach(function (c) {
      byId[c.getAttribute('data-id')] = {
        el: c,
        id: c.getAttribute('data-id'),
        price: parseInt(c.getAttribute('data-price'), 10) || 0,
        title: c.getAttribute('data-title') || '',
        thumb: c.getAttribute('data-thumb') || '',
        areas: c.getAttribute('data-areas') || '',
        rating: parseFloat(c.getAttribute('data-rating')) || 0,
        index: parseInt(c.getAttribute('data-index'), 10) || 0
      };
    });

    var pack = {};
    try { pack = JSON.parse(sessionStorage.getItem(storeKey) || '{}') || {}; } catch (e) { pack = {}; }
    Object.keys(pack).forEach(function (id) { if (!byId[id] || !(pack[id] > 0)) delete pack[id]; });
    var order = Object.keys(pack);

    function save() { try { sessionStorage.setItem(storeKey, JSON.stringify(pack)); } catch (e) {} }
    function count() { return order.reduce(function (n, id) { return n + (pack[id] || 0); }, 0); }
    function tierFor(n) { var cur = null; tiers.forEach(function (tr) { if (n >= tr.qty) cur = tr; }); return cur; }
    function nextTier(n) { for (var i = 0; i < tiers.length; i++) { if (tiers[i].qty > n) return tiers[i]; } return null; }
    function unitAfter(price, pct) { return Math.round(price * (100 - pct) / 100); }

    function setQty(id, q) {
      q = Math.max(0, Math.min(99, q));
      if (q > 0) {
        if (!pack[id]) order.push(id);
        pack[id] = q;
      } else {
        delete pack[id];
        order = order.filter(function (x) { return x !== id; });
      }
      save();
      render();
    }

    var listEl = $('[data-mm-list]', root);
    var emptyEl = $('[data-mm-empty]', root);
    var sumEl = $('[data-mm-sum]', root);
    var msgEl = $('[data-mm-msg]', root);
    var fillEl = $('[data-mm-fill]', root);
    var errEl = $('[data-mm-error]', root);
    var mbar = $('[data-mm-mbar]', root);

    function render() {
      var n = count();
      var cur = tierFor(n);
      var nxt = nextTier(n);
      var pct = cur ? cur.pct : 0;
      var shownPct = cur ? cur.pct : first.pct;

      /* Trin og fremskridt */
      $all('[data-mm-tier]', root).forEach(function (el) {
        var q = parseInt(el.getAttribute('data-mm-tier'), 10);
        el.classList.toggle('is-reached', n >= q);
        el.classList.toggle('is-active', !!cur && cur.qty === q);
      });
      $all('[data-mm-dot]', root).forEach(function (el) {
        el.classList.toggle('is-reached', n >= parseInt(el.getAttribute('data-mm-dot'), 10));
      });
      if (fillEl) fillEl.style.width = Math.min(100, n / maxQty * 100) + '%';

      if (msgEl) {
        if (!cur) {
          msgEl.textContent = n === 0 ? fill(t.pickFor, { n: first.qty, pct: first.pct }) : fill(t.pickMore, { n: first.qty - n, pct: first.pct });
        } else if (nxt) {
          msgEl.textContent = fill(t.nowMore, { pct: cur.pct, n: nxt.qty - n, next: nxt.pct });
        } else {
          msgEl.textContent = fill(t.full, { pct: cur.pct });
        }
      }

      /* Kort */
      Object.keys(byId).forEach(function (id) {
        var p = byId[id];
        var q = pack[id] || 0;
        p.el.classList.toggle('is-in-pack', q > 0);
        var badge = $('[data-mm-badge]', p.el); if (badge) badge.hidden = q === 0;
        var add = $('[data-mm-add]', p.el); if (add) add.hidden = q > 0;
        var st = $('[data-mm-stepper]', p.el); if (st) st.hidden = q === 0;
        var out = $('[data-mm-qty]', p.el); if (out) out.textContent = q;
        var now = $('[data-mm-now]', p.el); if (now) now.textContent = money(unitAfter(p.price, shownPct), cfg.money);
        var at = $('[data-mm-at]', p.el); if (at) at.textContent = fill(t.at, { pct: shownPct });
      });

      /* Pakken */
      var normal = 0, total = 0;
      var html = '';
      order.forEach(function (id) {
        var p = byId[id]; var q = pack[id];
        if (!p || !q) return;
        var line = p.price * q;
        var after = line - Math.round(line * pct / 100);
        normal += line; total += after;
        html += '<li class="nc-mm__item" data-mm-line="' + esc(id) + '">' +
          (p.thumb ? '<img src="' + esc(p.thumb) + '" alt="" width="52" height="52" loading="lazy">' : '<span></span>') +
          '<div class="nc-mm__item-name"><strong>' + cbd(p.title) + '</strong><span>' +
          (pct ? '<s>' + esc(money(p.price, cfg.money)) + '</s>' : '') + esc(money(unitAfter(p.price, pct), cfg.money)) + '</span>' +
          '<button type="button" data-mm-remove>' + esc(t.remove || '') + '</button></div>' +
          '<div class="nc-mm__stepper nc-mm__stepper--sm">' +
          '<button type="button" data-mm-dec aria-label="' + esc(fill(t.dec, { title: p.title })) + '">−</button>' +
          '<output>' + q + '</output>' +
          '<button type="button" data-mm-inc aria-label="' + esc(fill(t.inc, { title: p.title })) + '">+</button></div></li>';
      });
      if (listEl) { listEl.innerHTML = html; listEl.hidden = n === 0; }
      if (emptyEl) emptyEl.hidden = n > 0;
      if (sumEl) {
        sumEl.hidden = n === 0;
        $('[data-mm-normal]', sumEl).textContent = money(normal, cfg.money);
        $('[data-mm-total]', sumEl).textContent = money(total, cfg.money);
        $('[data-mm-save]', sumEl).textContent = money(normal - total, cfg.money) + ' (' + pct + ' %)';
        var saveRow = $('[data-mm-save-row]', sumEl); if (saveRow) saveRow.hidden = pct === 0;
      }

      var ready = n >= first.qty;
      $all('[data-mm-submit]', root).forEach(function (b) {
        b.disabled = !ready;
        b.textContent = ready ? t.addAll : fill(t.pickMin, { n: first.qty });
      });
      if (mbar) {
        mbar.hidden = n === 0;
        root.classList.toggle('has-mbar', n > 0);
        var mc = $('[data-mm-mcount]', mbar); if (mc) mc.textContent = fill(t.selected, { n: n });
        var mt = $('[data-mm-mtotal]', mbar); if (mt) mt.textContent = money(total, cfg.money);
      }
      if (errEl && n === 0) errEl.hidden = true;
    }

    /* Klik: tilfoej, plus, minus, fjern, laeg i kurv */
    root.addEventListener('click', function (e) {
      var tgt = e.target;
      var card = tgt.closest('[data-mm-card]');
      var line = tgt.closest('[data-mm-line]');
      var id = card ? card.getAttribute('data-id') : (line ? line.getAttribute('data-mm-line') : null);
      if (tgt.closest('[data-mm-add]') && id) { setQty(id, (pack[id] || 0) + 1); return; }
      if (tgt.closest('[data-mm-inc]') && id) { setQty(id, (pack[id] || 0) + 1); return; }
      if (tgt.closest('[data-mm-dec]') && id) { setQty(id, (pack[id] || 0) - 1); return; }
      if (tgt.closest('[data-mm-remove]') && id) { setQty(id, 0); return; }

      var sub = tgt.closest('[data-mm-submit]');
      if (sub && !sub.disabled) {
        var items = order.map(function (x) { return { id: parseInt(x, 10), quantity: pack[x] }; }).filter(function (i) { return i.quantity > 0; });
        if (!items.length) return;
        $all('[data-mm-submit]', root).forEach(function (b) { b.disabled = true; b.classList.add('is-busy'); });
        if (errEl) errEl.hidden = true;
        fetch(cfg.cartAdd || '/cart/add.js', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({ items: items })
        })
          .then(function (r) {
            return r.json().then(function (data) {
              if (!r.ok) throw new Error(data.description || data.message || ('HTTP ' + r.status));
              return data;
            });
          })
          .then(function () {
            pack = {}; order = []; save(); render();
            if (window.ncRefreshCart) return window.ncRefreshCart(true);
            window.location.href = cfg.cartUrl || '/cart';
          })
          .catch(function (err) {
            if (errEl) { errEl.textContent = (t.error ? t.error + ' ' : '') + err.message; errEl.hidden = false; }
          })
          .then(function () {
            $all('[data-mm-submit]', root).forEach(function (b) { b.classList.remove('is-busy'); });
            render();
          });
      }
    });

    /* Filtre */
    var filterWrap = $('[data-mm-filters]', root);
    if (filterWrap) {
      filterWrap.addEventListener('click', function (e) {
        var b = e.target.closest('[data-mm-filter]');
        if (!b) return;
        var area = b.getAttribute('data-mm-filter');
        $all('[data-mm-filter]', filterWrap).forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        Object.keys(byId).forEach(function (id) {
          var p = byId[id];
          p.el.hidden = !!area && p.areas.indexOf(',' + area + ',') === -1;
        });
      });
      /* Skjul filtre uden produkter */
      $all('[data-mm-filter]', filterWrap).forEach(function (b) {
        var area = b.getAttribute('data-mm-filter');
        if (!area) return;
        var any = Object.keys(byId).some(function (id) { return byId[id].areas.indexOf(',' + area + ',') !== -1; });
        if (!any) b.hidden = true;
      });
    }

    /* Sortering */
    var sortSel = $('[data-mm-sort]', root);
    var grid = $('[data-mm-grid]', root);
    if (sortSel && grid) {
      sortSel.addEventListener('change', function () {
        var list = Object.keys(byId).map(function (id) { return byId[id]; });
        var v = sortSel.value;
        list.sort(function (a, b) {
          if (v === 'price-asc') return a.price - b.price || a.index - b.index;
          if (v === 'price-desc') return b.price - a.price || a.index - b.index;
          if (v === 'rating') return b.rating - a.rating || a.index - b.index;
          return a.index - b.index;
        });
        list.forEach(function (p) { grid.appendChild(p.el); });
      });
    }

    render();
  }

  function boot() { $all('[data-nc-mm]').forEach(init); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
  document.addEventListener('shopify:section:load', function (e) {
    var root = e.target && e.target.querySelector && e.target.querySelector('[data-nc-mm]');
    if (root) init(root);
  });
})();
