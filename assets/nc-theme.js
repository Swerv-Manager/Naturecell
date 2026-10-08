/* ============================================================
   NatureCell tema — adfaerd
   Vanilla JS, ingen dependencies. Moenstrene matcher det
   godkendte design: hero-karrusel 7s, marquee-pause (CSS),
   megamenu, kurv-skuffe med fri fragt-bar (399 kr),
   favoritter i localStorage ('nc_favs'), quiz, faneblade.
   ============================================================ */
(function () {
  'use strict';

  /* Sprogbevidst rod: paa /de/ er Shopify.routes.root '/de/'. Alle kald og
     redirects skal bruge den, ellers falder kunden tilbage til dansk indhold,
     og kurv-/produktsvar kommer retur paa forkert sprog. */
  var NC_ROOT = (window.Shopify && window.Shopify.routes && window.Shopify.routes.root) || '/';
  function ncUrl(path) { return NC_ROOT + String(path).replace(/^\/+/, ''); }

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
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
    return fetch(ncUrl('?sections=nc-cart-drawer'))
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
        return fetch(ncUrl('/cart.js')).then(function (r) { return r.json(); }).then(function (cart) {
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
      fetch(ncUrl('/cart/add.js'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ id: parseInt(vid, 10), quantity: qty }),
      })
        .then(function (r) { if (!r.ok) throw new Error('add failed'); return r.json(); })
        .then(function () { return refreshCart(true); })
        .catch(function () { window.location.href = ncUrl('/cart'); })
        .then(function () { add.classList.remove('is-busy'); });
      return;
    }

    var lineBtn = t.closest && t.closest('[data-nc-line-qty]');
    if (lineBtn) {
      e.preventDefault();
      var key = lineBtn.getAttribute('data-nc-line');
      var q = parseInt(lineBtn.getAttribute('data-nc-line-qty'), 10);
      fetch(ncUrl('/cart/change.js'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ id: key, quantity: q }),
      })
        .then(function () { return refreshCart(false); })
        .catch(function () {});
      return;
    }
  });

  /* Rabatkode i kurv-skuffen: Shopifys /discount/KODE-link gemmer koden til kassen og
     sender tilbage til samme side, hvor skuffen aabnes igen med en bekraeftelse. */
  document.addEventListener('submit', function (e) {
    var form = e.target.closest && e.target.closest('form[data-nc-discount]');
    if (!form) return;
    e.preventDefault();
    var input = form.querySelector('input');
    var code = input && input.value.trim();
    if (!code) return;
    var back = window.location.pathname + window.location.search + '#nc-cart-discount';
    window.location.href = ncUrl('/discount/' + encodeURIComponent(code)) + '?redirect=' + encodeURIComponent(back);
  });
  if (window.location.hash === '#nc-cart-discount') {
    refreshCart(true).then(function () {
      var note = $('[data-nc-discount-note]');
      if (note) note.hidden = false;
    });
    try { history.replaceState(null, '', window.location.pathname + window.location.search); } catch (err) {}
  }

  /* PDP: laeg-i-kurv-formular via AJAX */
  $all('form[data-nc-product-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var fd = new FormData(form);
      var btn = form.querySelector('[type="submit"]');
      if (btn) btn.classList.add('is-busy');
      fetch(ncUrl('/cart/add.js'), { method: 'POST', body: fd, headers: { 'Accept': 'application/json' } })
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
        var ratio = parseFloat(th.getAttribute('data-nc-thumb-ratio') || '1');
        /* srcset fra hovedbilledet skal fjernes, ellers bliver browseren ved det gamle billede */
        if (srcset) main.srcset = srcset; else main.removeAttribute('srcset');
        main.src = src;
        if (th.hasAttribute('data-nc-thumb-alt')) main.alt = th.getAttribute('data-nc-thumb-alt');
        /* alle billeder fylder rammen; is-photo markerer ikke-kvadratiske billeder */
        main.classList.toggle('is-photo', Math.abs(ratio - 1) > 0.04);
        $all('[data-nc-thumb]', g).forEach(function (x) { x.classList.toggle('is-active', x === th); });
      });
    });
  });

  /* --- Soegeforslag mens man skriver (Shopify Predictive Search + sektionen predictive-search) --- */
  $all('[data-nc-predictive]').forEach(function (form) {
    var input = $('input[name="q"]', form);
    var box = $('[data-nc-ps]', form);
    var endpoint = form.getAttribute('data-nc-predictive');
    if (!input || !box || !endpoint || !window.fetch || !window.DOMParser) return;
    var timer = null;
    var last = '';
    var ctrl = null;
    function close() { box.hidden = true; input.setAttribute('aria-expanded', 'false'); }
    function open() { if (box.innerHTML.trim()) { box.hidden = false; input.setAttribute('aria-expanded', 'true'); } }
    function run() {
      var q = input.value.trim();
      if (q.length < 2) { last = ''; box.innerHTML = ''; close(); return; }
      if (q === last) { open(); return; }
      last = q;
      if (ctrl) ctrl.abort();
      ctrl = window.AbortController ? new AbortController() : null;
      var url = endpoint + '?q=' + encodeURIComponent(q) + '&section_id=predictive-search' +
        '&resources[type]=product,collection,page,article,query&resources[limit]=6&resources[limit_scope]=each' +
        '&resources[options][unavailable_products]=last';
      fetch(url, ctrl ? { signal: ctrl.signal } : {})
        .then(function (r) { return r.ok ? r.text() : ''; })
        .then(function (html) {
          if (q !== input.value.trim()) return;
          var res = html ? new DOMParser().parseFromString(html, 'text/html').querySelector('[data-nc-ps-results]') : null;
          box.innerHTML = res ? res.outerHTML : '';
          if (res) open(); else close();
        })
        .catch(function () {});
    }
    input.setAttribute('autocomplete', 'off');
    input.addEventListener('input', function () { clearTimeout(timer); timer = setTimeout(run, 220); });
    input.addEventListener('focus', function () { if (input.value.trim().length >= 2) open(); });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowDown' && !box.hidden) {
        var first = $('a', box);
        if (first) { e.preventDefault(); first.focus(); }
      }
    });
    box.addEventListener('keydown', function (e) {
      var links = $all('a', box);
      var i = links.indexOf(document.activeElement);
      if (i < 0) return;
      if (e.key === 'ArrowDown') { e.preventDefault(); (links[i + 1] || links[0]).focus(); }
      if (e.key === 'ArrowUp') { e.preventDefault(); if (i === 0) input.focus(); else links[i - 1].focus(); }
      if (e.key === 'Escape') { close(); input.focus(); }
    });
    document.addEventListener('click', function (e) { if (!form.contains(e.target)) close(); });
    form.addEventListener('focusout', function () {
      setTimeout(function () { if (!form.contains(document.activeElement)) close(); }, 0);
    });
  });

  /* --- Video: YouTube og Vimeo indlaeses foerst, naar kunden trykker afspil (ingen cookies forinden) --- */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('[data-nc-embed]') : null;
    if (!btn) return;
    var f = document.createElement('iframe');
    f.src = btn.getAttribute('data-nc-embed');
    f.title = btn.getAttribute('data-nc-embed-title') || '';
    f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen';
    f.setAttribute('allowfullscreen', '');
    if (btn.parentNode.classList) btn.parentNode.classList.add('is-playing');
    btn.parentNode.replaceChild(f, btn);
  });

  /* --- Video fra Shopify Filer: plakat med playknap, videoen indsaettes og afspilles foerst ved klik --- */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('[data-nc-play]') : null;
    if (!btn) return;
    var box = btn.parentNode;
    var tpl = box.querySelector('template[data-nc-play-src]');
    if (!tpl) return;
    var node = document.importNode(tpl.content, true);
    var v = node.querySelector('video');
    box.classList.add('is-playing');
    box.replaceChild(node, btn);
    if (v && v.play) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
  });

  /* --- Kundevideoer (YouTube) aabner i et vindue paa siden, ikke paa YouTube (kundens rettelse 08-10) --- */
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('[data-nc-yt]') : null;
    if (!a) return;
    var id = a.getAttribute('data-nc-yt');
    if (!id) return;
    e.preventDefault();
    var portrait = a.getAttribute('data-nc-yt-portrait') !== 'false';
    var box = document.createElement('div');
    box.className = 'nc-ytbox' + (portrait ? ' nc-ytbox--portrait' : '');
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-label', a.getAttribute('data-nc-yt-name') || '');
    var closeLabel = a.getAttribute('data-nc-yt-close') || 'Luk';
    box.innerHTML = '<div class="nc-ytbox__back" data-nc-yt-close></div>' +
      '<div class="nc-ytbox__frame">' +
      '<button type="button" class="nc-ytbox__close" data-nc-yt-close aria-label="' + closeLabel.replace(/"/g, '&quot;') + '">' +
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg></button>' +
      '<iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1&rel=0&playsinline=1&modestbranding=1" title="' + (a.getAttribute('data-nc-yt-name') || '').replace(/"/g, '&quot;') + '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>' +
      '</div>';
    document.body.appendChild(box);
    document.body.classList.add('nc-ytbox-open');
    var closeBtn = box.querySelector('.nc-ytbox__close');
    if (closeBtn) closeBtn.focus();
    function close() {
      if (box.parentNode) box.parentNode.removeChild(box);
      document.body.classList.remove('nc-ytbox-open');
      document.removeEventListener('keydown', onKey);
      a.focus();
    }
    function onKey(ev) { if (ev.key === 'Escape') close(); }
    box.addEventListener('click', function (ev) { if (ev.target.closest('[data-nc-yt-close]')) close(); });
    document.addEventListener('keydown', onKey);
  });

  /* --- Vandret rulning med pile (fx emne-chips paa bloggen): pilene vises kun, naar der er mere at se --- */
  $all('[data-nc-hscroll]').forEach(function (wrap) {
    var track = $('[data-nc-hscroll-track]', wrap);
    var prev = $('[data-nc-hscroll-prev]', wrap);
    var next = $('[data-nc-hscroll-next]', wrap);
    if (!track || !prev || !next) return;
    function update() {
      var max = track.scrollWidth - track.clientWidth;
      prev.hidden = track.scrollLeft <= 4;
      next.hidden = track.scrollLeft >= max - 4;
      wrap.classList.toggle('is-scrollable', max > 4);
    }
    function go(dir) { track.scrollBy({ left: dir * Math.max(160, track.clientWidth * 0.7), behavior: 'smooth' }); }
    prev.addEventListener('click', function () { go(-1); });
    next.addEventListener('click', function () { go(1); });
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    var active = $('.is-active', track);
    if (active && active.offsetLeft > track.clientWidth * 0.6) track.scrollLeft = active.offsetLeft - 16;
    update();
  });

  /* --- Kollektion: sortering (beholder tag-filteret i stien, nulstiller sidetal) --- */
  $all('[data-nc-sort]').forEach(function (sel) {
    sel.addEventListener('change', function () {
      var u = new URL(window.location.href);
      u.searchParams.set('sort_by', sel.value);
      u.searchParams.delete('page');
      window.location.href = u.toString();
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
        fetch(ncUrl('/products/' + h + '?view=nc-card'))
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
      var max = parseInt(root.getAttribute('data-nc-quiz-max'), 10) || 3;
      /* Faste anbefalinger (blokke i sektionen) vinder: omraade + behov, ellers omraade + alle behov, ellers alle omraader + behov. */
      var rules = [];
      try { rules = JSON.parse(($('[data-nc-quiz-rules]', root) || {}).textContent || '[]'); } catch (e) {}
      var pick = function (a, n) { return rules.filter(function (r) { return r.area === a && r.need === n && r.handles && r.handles.length; })[0]; };
      var rule = pick(state.area, state.need) || pick(state.area, 'any') || pick('any', state.need);
      var list = [];
      if (rule) {
        rule.handles.forEach(function (h) {
          var hit = all.filter(function (p) { return p.el.getAttribute('data-handle') === h; })[0];
          if (hit && list.indexOf(hit) === -1) list.push(hit);
        });
      }
      if (!list.length) {
        /* Uden fast anbefaling: produkter til omraadet, foerst dem der matcher behovet, derefter de oevrige, hver gruppe efter rating. */
        var pool = all.slice();
        if (state.area) {
          var al = pool.filter(function (p) { return p.areas.indexOf(state.area) !== -1; });
          if (al.length) pool = al;
        }
        var byRating = function (a, b) { return b.rating - a.rating; };
        var hits = pool.filter(function (p) { return state.need && p.needs.indexOf(state.need) !== -1; }).sort(byRating);
        /* Opfyldning kun med produkter, der har behovs-tags (ikke fx tilbehoer og intimpleje). */
        var rest = pool.filter(function (p) { return hits.indexOf(p) === -1 && p.needs.length; }).sort(byRating);
        list = hits.concat(rest);
      }
      list = list.slice(0, max);
      cards.forEach(function (c) { c.hidden = true; });
      list.forEach(function (p, i) { p.el.hidden = false; p.el.style.order = i; });
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
