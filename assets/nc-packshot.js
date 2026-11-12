/* ============================================================
   NatureCell: packshots paa samme underkant.
   Kundens rettelse 08-10-2026: "Sikr ens underkant for alle
   produkter/packshots for at skabe visuel ro paa siden."

   Billederne har forskellig luft omkring produktet, saa CSS alene
   kan ikke stille dem ens. Scriptet laeser en lille kopi af hvert
   billede i et canvas, finder produktets kant (alt der afviger fra
   baggrundsfarven), og flytter/skalerer billedet, saa produktets
   underkant staar paa samme linje i alle kort og fliser.

   Falder stille tilbage til CSS (contain, centreret), hvis et billede
   ikke kan laeses, fx uden CORS-headere. Resultatet huskes i
   sessionStorage, saa hvert billede kun analyseres en gang pr. besoeg.
   ============================================================ */
(function () {
  'use strict';
  if (!document.createElement('canvas').getContext) return;

  var BASE = 0.86;   /* produktets underkant: andel af boksens hoejde */
  var MAX_H = 0.78;  /* produktet maa hoejst fylde saa meget af boksen ... */
  var MAX_W = 0.78;
  var MIN_H = 0.52;  /* ... og smaa produkter (lip balm) loeftes op til dette */
  var MAX_UP = 1.6;  /* men aldrig mere end 1,6x (billedkvalitet) */
  var SIZE = 120;    /* analysekopiens stoerste side i px */
  var DIFF = 26;     /* farveafstand fra baggrunden, der taeller som produkt */

  var cache = {};
  try { cache = JSON.parse(sessionStorage.getItem('nc_ps') || '{}') || {}; } catch (e) { cache = {}; }
  function save() { try { sessionStorage.setItem('nc_ps', JSON.stringify(cache)); } catch (e) { /* privat vindue */ } }
  function cacheKey(src) { return src.replace(/[?&](width|height|crop|format)=[^&]*/g, ''); }
  function smallSrc(src) { return /[?&]width=\d+/.test(src) ? src.replace(/([?&]width=)\d+/, '$1' + (SIZE * 2)) : src; }

  function analyze(src, cb) {
    var k = cacheKey(src);
    if (cache[k]) return cb(cache[k]);
    var im = new Image();
    im.crossOrigin = 'anonymous';
    im.onload = function () {
      var w = im.naturalWidth, h = im.naturalHeight;
      if (!w || !h) return cb(null);
      var s = Math.min(1, SIZE / Math.max(w, h));
      var cw = Math.max(1, Math.round(w * s)), ch = Math.max(1, Math.round(h * s));
      var c = document.createElement('canvas');
      c.width = cw; c.height = ch;
      var ctx = c.getContext('2d', { willReadFrequently: true });
      var d;
      try { ctx.drawImage(im, 0, 0, cw, ch); d = ctx.getImageData(0, 0, cw, ch).data; } catch (e) { return cb(null); }
      function px(x, y) { var i = (y * cw + x) * 4; return [d[i], d[i + 1], d[i + 2], d[i + 3]]; }
      /* Baggrund: median af hjoerner og kantmidter (taaler et enkelt afvigende hjoerne) */
      var samples = [px(0, 0), px(cw - 1, 0), px(0, ch - 1), px(cw - 1, ch - 1), px(cw >> 1, 0), px(cw >> 1, ch - 1), px(0, ch >> 1), px(cw - 1, ch >> 1)];
      var bg = [0, 1, 2, 3].map(function (n) { return samples.map(function (p) { return p[n]; }).sort(function (a, b) { return a - b; })[4]; });
      var transparent = bg[3] < 20;
      var x0 = cw, x1 = -1, y0 = ch, y1 = -1;
      for (var y = 0; y < ch; y++) {
        for (var x = 0; x < cw; x++) {
          var i = (y * cw + x) * 4, a = d[i + 3], hit;
          if (transparent) hit = a > 40;
          else hit = a > 40 && (Math.abs(d[i] - bg[0]) > DIFF || Math.abs(d[i + 1] - bg[1]) > DIFF || Math.abs(d[i + 2] - bg[2]) > DIFF);
          if (hit) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
        }
      }
      if (x1 < 0 || x1 - x0 < 2 || y1 - y0 < 2) return cb(null);
      /* Fylder "produktet" naesten hele billedet, er det et stemningsbillede, ikke et packshot */
      if ((x1 - x0 + 1) / cw > 0.97 && (y1 - y0 + 1) / ch > 0.97) return cb(null);
      var r = { x0: x0 / cw, x1: (x1 + 1) / cw, y0: y0 / ch, y1: (y1 + 1) / ch, w: w, h: h };
      cache[k] = r; save(); cb(r);
    };
    im.onerror = function () { cb(null); };
    im.src = src;
  }

  function place(img) {
    var r = img._ncPs;
    if (!r) return;
    var W = img.clientWidth, H = img.clientHeight;
    if (!W || !H) return;
    /* Billedet ligger med object-fit: contain, centreret: find dets rendering i boksen */
    var s0 = Math.min(W / r.w, H / r.h), w0 = r.w * s0, h0 = r.h * s0, ox = (W - w0) / 2, oy = (H - h0) / 2;
    var bx0 = ox + r.x0 * w0, bx1 = ox + r.x1 * w0, by0 = oy + r.y0 * h0, by1 = oy + r.y1 * h0;
    var pw = bx1 - bx0, ph = by1 - by0, cx = (bx0 + bx1) / 2;
    var s = 1;
    if (ph > MAX_H * H) s = MAX_H * H / ph;
    else if (ph < MIN_H * H) s = Math.min(MAX_UP, MIN_H * H / ph);
    if (pw * s > MAX_W * W) s = MAX_W * W / pw;
    /* transform-origin 0 0: punktet (cx, by1) skal lande paa (W/2, BASE*H) */
    var tx = W / 2 - s * cx, ty = BASE * H - s * by1;
    img.style.transform = 'translate(' + tx.toFixed(2) + 'px,' + ty.toFixed(2) + 'px) scale(' + s.toFixed(4) + ')';
    img.classList.add('is-placed');
  }

  var placed = [];
  var ro = ('ResizeObserver' in window) ? new ResizeObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) place(entries[i].target);
  }) : null;

  function setup(img) {
    if (img._ncPsInit) return;
    img._ncPsInit = true;
    var src = img.currentSrc || img.src;
    if (!src) return;
    analyze(smallSrc(src), function (r) {
      if (!r) return;
      img._ncPs = r;
      place(img);
      placed.push(img);
      if (ro) ro.observe(img);
    });
  }

  function init(root) {
    var imgs = (root && root.querySelectorAll) ? root.querySelectorAll('img.nc-packshot') : [];
    if (root && root.classList && root.classList.contains('nc-packshot')) imgs = [root];
    for (var i = 0; i < imgs.length; i++) {
      (function (img) {
        if (img.complete && img.naturalWidth) setup(img);
        else img.addEventListener('load', function () { setup(img); }, { once: true });
      })(imgs[i]);
    }
  }

  function start() {
    init(document);
    if ('MutationObserver' in window) {
      new MutationObserver(function (muts) {
        for (var i = 0; i < muts.length; i++) {
          var added = muts[i].addedNodes;
          for (var j = 0; j < added.length; j++) if (added[j].nodeType === 1) init(added[j]);
        }
      }).observe(document.body, { childList: true, subtree: true });
    }
    if (!ro) {
      var t;
      window.addEventListener('resize', function () { clearTimeout(t); t = setTimeout(function () { placed.forEach(place); }, 120); });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
