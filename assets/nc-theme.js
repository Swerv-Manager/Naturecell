/* ============================================================
   NatureCell tema — adfaerd
   Vanilla JS, ingen dependencies. Moenstrene matcher det
   godkendte design: hero-karrusel 7s, marquee-pause (CSS),
   megamenu, kurv-skuffe med fri fragt-bar (399 kr),
   favoritter i localStorage ('nc_favs'), quiz, faneblade.
   ============================================================ */
(function () {
  'use strict';

  var FREE_SHIP = 39900; // oere

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function fmtKr(cents) {
    var n = Math.round(cents / 100);
    return n.toLocaleString('da-DK') + ' kr.';
  }
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- Karrusel (hero) --- */
  $all('[data-nc-carousel]').forEach(function (root) {
    var slides = $all('[data-nc-slide]', root);
    var dots = $all('[data-nc-dot]', root);
    if (slides.length < 2) return;
    var idx = 0;
    var timer = null;
    var interval = parseInt(root.getAttribute('data-nc-carousel'), 10) || 7000;

    function apply() {
      var track = $('[data-nc-track]', root);
      if (track) track.style.transform = 'translateX(' + (-idx * 100) + '%)';
      dots.forEach(function (d, i) { d.classList.toggle('is-active', i === idx); });
    }
    function goTo(i) {
      idx = ((i % slides.length) + slides.length) % slides.length;
      apply();
      restart();
    }
    function restart() {
      if (timer) clearInterval(timer);
      if (!reducedMotion && interval) timer = setInterval(function () { idx = (idx + 1) % slides.length; apply(); }, interval);
    }
    dots.forEach(function (d, i) { d.addEventListener('click', function () { goTo(i); }); });
    var prev = $('[data-nc-prev]', root);
    var next = $('[data-nc-next]', root);
    if (prev) prev.addEventListener('click', function () { goTo(idx - 1); });
    if (next) next.addEventListener('click', function () { goTo(idx + 1); });
    apply();
    restart();
  });

  /* --- Faneblade (shop omraade/behov, megamenu, om-cbd) --- */
  $all('[data-nc-tabs]').forEach(function (root) {
    var tabs = $all('[data-nc-tab]', root);
    var panels = $all('[data-nc-panel]', root);
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var key = tab.getAttribute('data-nc-tab');
        tabs.forEach(function (t) { t.classList.toggle('is-active', t === tab); t.setAttribute('aria-selected', t === tab ? 'true' : 'false'); });
        panels.forEach(function (p) { p.hidden = p.getAttribute('data-nc-panel') !== key; });
      });
    });
  });

  /* --- Vandrette rails: pil-knapper --- */
  $all('[data-nc-railwrap]').forEach(function (wrap) {
    var rail = $('[data-nc-railscroll]', wrap);
    if (!rail) return;
    $all('[data-nc-rail-prev]', wrap).forEach(function (b) {
      b.addEventListener('click', function () { rail.scrollBy({ left: -Math.max(320, rail.clientWidth * 0.7), behavior: 'smooth' }); });
    });
    $all('[data-nc-rail-next]', wrap).forEach(function (b) {
      b.addEventListener('click', function () { rail.scrollBy({ left: Math.max(320, rail.clientWidth * 0.7), behavior: 'smooth' }); });
    });
  });

  /* --- Megamenu + mobilnav --- */
  var header = $('[data-nc-header]');
  if (header) {
    $all('[data-nc-mega-toggle]', header).forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var panel = $('[data-nc-mega]', header);
        if (!panel) return;
        var open = !panel.classList.contains('is-open');
        panel.classList.toggle('is-open', open);
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    });
    document.addEventListener('click', function (e) {
      var panel = $('[data-nc-mega]', header);
      if (panel && panel.classList.contains('is-open') && !header.contains(e.target)) {
        panel.classList.remove('is-open');
        $all('[data-nc-mega-toggle]', header).forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      var panel = $('[data-nc-mega]', header);
      if (panel) panel.classList.remove('is-open');
      closeDrawer();
      var mob = $('[data-nc-mobilenav]');
      if (mob) mob.classList.remove('is-open');
      document.documentElement.classList.remove('nc-lock');
    });
    var burger = $('[data-nc-burger]', header);
    if (burger) {
      burger.addEventListener('click', function () {
        var nav = $('[data-nc-mobilenav]');
        if (!nav) return;
        var open = !nav.classList.contains('is-open');
        nav.classList.toggle('is-open', open);
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
        document.documentElement.classList.toggle('nc-lock', open);
      });
    }
    $all('[data-nc-mobilenav] [data-nc-close]').forEach(function (b) {
      b.addEventListener('click', function () {
        var nav = $('[data-nc-mobilenav]');
        if (nav) nav.classList.remove('is-open');
        document.documentElement.classList.remove('nc-lock');
      });
    });
  }

  /* --- Kurv --- */
  function openDrawer() {
    var d = $('[data-nc-drawer]');
    if (!d) return;
    d.classList.add('is-open');
    d.removeAttribute('inert');
    document.documentElement.classList.add('nc-lock');
  }
  function closeDrawer() {
    var d = $('[data-nc-drawer]');
    if (!d) return;
    d.classList.remove('is-open');
    d.setAttribute('inert', '');
    document.documentElement.classList.remove('nc-lock');
  }
  window.ncOpenCart = openDrawer;
  window.ncRefreshCart = function (open) { return refreshCart(open); };

  function refreshCart(open) {
    return fetch(window.Shopify && window.Shopify.routes ? window.Shopify.routes.root + '?sections=nc-cart-drawer' : '/?sections=nc-cart-drawer')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        var html = data['nc-cart-drawer'];
        if (!html) return;
        var holder = document.createElement('div');
        holder.innerHTML = html;
        var fresh = $('[data-nc-drawer]', holder);
        var cur = $('[data-nc-drawer]');
        if (fresh && cur) {
          var wasOpen = cur.classList.contains('is-open');
          cur.innerHTML = fresh.innerHTML;
          if (wasOpen || open) openDrawer();
        }
        return fetch('/cart.js').then(function (r) { return r.json(); }).then(function (cart) {
          $all('[data-nc-cart-count]').forEach(function (el) { el.textContent = cart.item_count; });
        });
      })
      .catch(function () {});
  }

  document.addEventListener('click', function (e) {
    var t = e.target;

    var openBtn = t.closest && t.closest('[data-nc-cart-open]');
    if (openBtn) { e.preventDefault(); refreshCart(true); return; }

    var closeBtn = t.closest && t.closest('[data-nc-cart-close]');
    if (closeBtn) { e.preventDefault(); closeDrawer(); return; }

    var overlay = t.closest && t.closest('[data-nc-drawer-overlay]');
    if (overlay) { closeDrawer(); return; }

    var add = t.closest && t.closest('[data-nc-add]');
    if (add) {
      e.preventDefault();
      var vid = add.getAttribute('data-nc-add');
      var qty = parseInt(add.getAttribute('data-nc-qty') || '1', 10);
      if (!vid) return;
      add.classList.add('is-busy');
      fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ id: parseInt(vid, 10), quantity: qty }),
      })
        .then(function (r) { if (!r.ok) throw new Error('add failed'); return r.json(); })
        .then(function () { return refreshCart(true); })
        .catch(function () { window.location.href = '/cart'; })
        .then(function () { add.classList.remove('is-busy'); });
      return;
    }

    var lineBtn = t.closest && t.closest('[data-nc-line-qty]');
    if (lineBtn) {
      e.preventDefault();
      var key = lineBtn.getAttribute('data-nc-line');
      var q = parseInt(lineBtn.getAttribute('data-nc-line-qty'), 10);
      fetch('/cart/change.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ id: key, quantity: q }),
      })
        .then(function () { return refreshCart(false); })
        .catch(function () {});
      return;
    }
  });

  /* PDP: laeg-i-kurv-formular via AJAX */
  $all('form[data-nc-product-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var fd = new FormData(form);
      var btn = form.querySelector('[type="submit"]');
      if (btn) btn.classList.add('is-busy');
      fetch('/cart/add.js', { method: 'POST', body: fd, headers: { 'Accept': 'application/json' } })
        .then(function (r) { if (!r.ok) throw new Error('add failed'); return r.json(); })
        .then(function () { return refreshCart(true); })
        .catch(function () { form.submit(); })
        .then(function () { if (btn) btn.classList.remove('is-busy'); });
    });
  });

  /* Antalsvaelger */
  document.addEventListener('click', function (e) {
    var step = e.target.closest && e.target.closest('[data-nc-step]');
    if (!step) return;
    var wrap = step.closest('[data-nc-qty-wrap]');
    var input = wrap && wrap.querySelector('input[type="number"]');
    if (!input) return;
    var v = parseInt(input.value || '1', 10) + parseInt(step.getAttribute('data-nc-step'), 10);
    input.value = Math.max(parseInt(input.min || '1', 10), v);
    input.dispatchEvent(new Event('change', { bubbles: true }));
  });

  /* --- PDP: galleri-thumbnails --- */
  $all('[data-nc-gallery]').forEach(function (g) {
    var main = $('[data-nc-gallery-main] img', g);
    $all('[data-nc-thumb]', g).forEach(function (th) {
      th.addEventListener('click', function () {
        if (!main) return;
        var src = th.getAttribute('data-nc-thumb');
        var srcset = th.getAttribute('data-nc-thumb-srcset');
        main.src = src;
        if (srcset) main.srcset = srcset;
        $all('[data-nc-thumb]', g).forEach(function (x) { x.classList.toggle('is-active', x === th); });
      });
    });
  });

  /* --- Favoritter (localStorage, som i designet) --- */
  function favs() {
    try { return JSON.parse(localStorage.getItem('nc_favs') || '[]'); } catch (e) { return []; }
  }
  function setFavs(list) {
    try { localStorage.setItem('nc_favs', JSON.stringify(list)); } catch (e) {}
    window.dispatchEvent(new CustomEvent('nc-favs-changed'));
  }
  function paintFavs() {
    var list = favs();
    $all('[data-nc-fav]').forEach(function (b) {
      b.classList.toggle('is-active', list.indexOf(b.getAttribute('data-nc-fav')) !== -1);
    });
    $all('[data-nc-fav-count]').forEach(function (el) {
      el.textContent = list.length;
      el.classList.toggle('is-empty', list.length === 0);
    });
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-nc-fav]');
    if (!b) return;
    e.preventDefault();
    var h = b.getAttribute('data-nc-fav');
    var list = favs();
    var i = list.indexOf(h);
    if (i === -1) list.push(h); else list.splice(i, 1);
    setFavs(list);
    paintFavs();
  });
  window.addEventListener('nc-favs-changed', paintFavs);
  paintFavs();

  /* Favoritside: hent produktkort for gemte handles */
  var favPage = $('[data-nc-fav-page]');
  if (favPage) {
    var list = favs();
    var grid = $('[data-nc-fav-grid]', favPage);
    var empty = $('[data-nc-fav-empty]', favPage);
    if (!list.length) {
      if (empty) empty.hidden = false;
    } else {
      if (empty) empty.hidden = true;
      list.forEach(function (h) {
        fetch('/products/' + h + '?view=nc-card')
          .then(function (r) { if (!r.ok) throw new Error('nope'); return r.text(); })
          .then(function (html) {
            var d = document.createElement('li');
            d.innerHTML = html;
            if (grid) grid.appendChild(d);
          })
          .catch(function () {});
      });
    }
  }

  /* --- Quiz --- */
  $all('[data-nc-quiz]').forEach(function (root) {
    var products = [];
    try { products = JSON.parse($('[data-nc-quiz-data]', root).textContent); } catch (e) {}
    var state = { step: 0, area: null, need: null };
    function show() {
      $all('[data-nc-quiz-step]', root).forEach(function (s) {
        s.hidden = parseInt(s.getAttribute('data-nc-quiz-step'), 10) !== state.step;
      });
      var bar = $('[data-nc-quiz-progress]', root);
      if (bar) bar.style.width = (Math.min(state.step, 3) / 3 * 100) + '%';
      if (state.step === 3) result();
    }
    function result() {
      var out = $('[data-nc-quiz-result]', root);
      if (!out) return;
      /* Produktkortene er renderet server-side (nc-quiz.liquid); vis de tre der matcher. */
      var cards = $all('[data-nc-quiz-card]', out);
      var split = function (s) { return (s || '').split(',').map(function (x) { return x.trim().toLowerCase(); }).filter(Boolean); };
      var all = cards.map(function (c) {
        return { el: c, areas: split(c.getAttribute('data-areas')), needs: split(c.getAttribute('data-needs')), rating: parseFloat(c.getAttribute('data-rating')) || 0 };
      });
      var list = all.slice();
      if (state.area) {
        var al = list.filter(function (p) { return p.areas.indexOf(state.area) !== -1; });
        if (al.length) list = al;
      }
      if (state.need) {
        var nl = list.filter(function (p) { return p.needs.indexOf(state.need) !== -1; });
        if (nl.length) list = nl;
      }
      list.sort(function (a, b) { return b.rating - a.rating; });
      list = list.slice(0, 3);
      cards.forEach(function (c) { c.hidden = true; });
      list.forEach(function (p) { p.el.hidden = false; });
      if (!cards.length) {
        /* Fallback: JSON-liste (aeldre skabelon). */
        var legacy = products.slice();
        if (state.area) legacy = legacy.filter(function (p) { return (p.areas || []).indexOf(state.area) !== -1; });
        legacy = legacy.slice(0, 3);
        out.innerHTML = '';
        legacy.forEach(function (p) {
          var li = document.createElement('a');
          li.className = 'nc-quiz-hit';
          li.href = p.url;
          li.innerHTML = '<span class="nc-quiz-hit__media"><img src="' + p.img + '" alt="" loading="lazy"></span>' +
            '<span class="nc-quiz-hit__body"><strong>' + p.title + '</strong><span>' + p.price + '</span></span>';
          out.appendChild(li);
        });
      }
      var lbl = $('[data-nc-quiz-labels]', root);
      if (lbl) {
        var la = root.querySelector('[data-nc-quiz-area="' + state.area + '"]');
        var ln = root.querySelector('[data-nc-quiz-need="' + state.need + '"]');
        lbl.textContent = [la && la.getAttribute('data-nc-label'), ln && ln.getAttribute('data-nc-label')].filter(Boolean).join(' · ');
      }
    }
    root.addEventListener('click', function (e) {
      var t = e.target;
      if (t.closest('[data-nc-quiz-start]')) { state.step = 1; show(); }
      var a = t.closest('[data-nc-quiz-area]');
      if (a) { state.area = a.getAttribute('data-nc-quiz-area'); state.step = 2; show(); }
      var n = t.closest('[data-nc-quiz-need]');
      if (n) { state.need = n.getAttribute('data-nc-quiz-need'); state.step = 3; show(); }
      if (t.closest('[data-nc-quiz-back]')) { state.step = Math.max(0, state.step - 1); show(); }
      if (t.closest('[data-nc-quiz-restart]')) { state.step = 1; state.area = null; state.need = null; show(); }
    });
    show();
  });

  /* --- Sticky koebsbar paa mobil (PDP) --- */
  var buybar = $('[data-nc-buybar]');
  if (buybar) {
    var anchor = $('[data-nc-buybar-anchor]');
    if ('IntersectionObserver' in window && anchor) {
      new IntersectionObserver(function (entries) {
        buybar.classList.toggle('is-visible', !entries[0].isIntersecting);
      }, { rootMargin: '-80px 0px 0px 0px' }).observe(anchor);
    }
  }
})();
