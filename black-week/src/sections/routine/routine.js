// NatureCell® Black Week – "Byg din rutine".
// Step toggles + Morgen/Aften drive the WebGL plinth (stage.js); the panel prices the routine live at Black
// Week prices, automatically applying the best Sampakke (All Day Facial / Komplet Pakken) when the chosen
// steps cover one, and shows progress towards fri fragt (399 kr.) and the gratis CBD Lip Balm (699 kr.).
import { visibilityGate } from '../../core/three-utils.js';
import { createStage } from './stage.js';

const IMG = '../src/sections/routine/img/';
// h = real pack height in cm (truthful relative sizes), aspect = packshot width / height
const STEPS = [
  { key: 'rens',  id: 'cleansing-gel', label: 'Rens',  short: 'CBD Rensegel',     h: 12.9, aspect: 0.3445, amber: true,  when: ['morgen', 'aften'] },
  { key: 'serum', id: 'serum',         label: 'Serum', short: 'Hyaluronic Serum', h: 9.5,  aspect: 0.32,   amber: true,  when: ['morgen', 'aften'] },
  { key: 'dag',   id: 'day-cream',     label: 'Dag',   short: 'CBD Dagcreme',     h: 14.5, aspect: 0.2182, amber: false, when: ['morgen'] },
  { key: 'nat',   id: 'night-cream',   label: 'Nat',   short: 'CBD Natcreme',     h: 14.5, aspect: 0.2209, amber: false, when: ['aften'] },
  { key: 'olie',  id: 'skin-oil',      label: 'Olie',  short: 'Vidunder Olien',   h: 9.5,  aspect: 0.3235, amber: true,  when: ['aften'] },
];
const S = Object.fromEntries(STEPS.map(s => [s.key, s]));
const BUNDLES = [
  { id: 'komplet-pakken', covers: ['rens', 'dag', 'nat', 'olie'] },
  { id: 'all-day-facial', covers: ['rens', 'dag', 'nat'] },
];
const CAPTION = {
  morgen: 'Let og beskyttende – klar til dagen.',
  aften: 'Nærende og roligt – huden plejes, mens du sover.',
};

const joinDa = (arr) => arr.length < 2 ? arr.join('') : `${arr.slice(0, -1).join(', ')} og ${arr[arr.length - 1]}`;

function webglOK() {
  try { const c = document.createElement('canvas'); return !!(window.WebGL2RenderingContext && c.getContext('webgl2')); } catch (e) { return false; }
}

export default function init(root, ctx) {
  const { byId, fmt, campaign } = ctx;
  const $ = (s) => root.querySelector(s);
  const $$ = (s) => [...root.querySelectorAll(s)];
  const stageEl = $('.routine-stage');
  const canvas = $('.routine-canvas');
  const svg = $('.routine-lines');
  const tagsEl = $('.routine-tags');

  const state = { sel: new Set(['rens', 'serum', 'dag', 'nat']), mode: 'morgen', hover: null };
  const q = new URLSearchParams(location.search);
  if (q.get('routine')) state.sel = new Set(q.get('routine').split(',').filter(k => S[k]));
  if (q.get('mode') === 'aften') state.mode = 'aften';

  // ---- static prices in the step rows
  $$('.routine-step').forEach(b => {
    const p = byId[S[b.dataset.key].id];
    b.querySelector('[data-now]').textContent = fmt.kr(p.price);
    b.querySelector('[data-was]').textContent = fmt.kr(p.price0);
    b.setAttribute('aria-label', `${S[b.dataset.key].label}: ${p.name}, ${fmt.kr(p.price)}, førpris ${fmt.kr(p.price0)}`);
  });
  const kp = byId['komplet-pakken'];
  $('[data-kp-price]').textContent = fmt.kr(kp.price);
  $('[data-kp-was]').textContent = fmt.kr(kp.price0);
  $('[data-spot-price]').textContent = fmt.kr(kp.price);
  $('[data-spot-was]').textContent = `Førpris ${fmt.kr(kp.price0)}`;

  // ---- pricing: cheapest honest combination of singles and Sampakker
  function quote(sel) {
    const keys = STEPS.map(s => s.key).filter(k => sel.has(k));
    const build = (bundle) => {
      const rest = bundle ? keys.filter(k => !bundle.covers.includes(k)) : keys;
      const lines = [...(bundle ? [{ id: bundle.id, covers: bundle.covers }] : []), ...rest.map(k => ({ id: S[k].id, covers: [k] }))];
      const total = lines.reduce((s, l) => s + byId[l.id].price, 0);
      const was = lines.reduce((s, l) => s + byId[l.id].price0, 0);
      return { lines, total, was, bundle: bundle ? bundle.id : null };
    };
    let best = build(null);
    for (const b of BUNDLES) if (b.covers.every(k => sel.has(k))) { const o = build(b); if (o.total < best.total) best = o; }
    return best;
  }

  // ---- stage (WebGL or static fallback)
  let stage = null;
  const tags = {};
  const lines = {};
  STEPS.forEach(s => {
    const t = document.createElement('div');
    t.className = 'routine-tag'; t.dataset.key = s.key;
    t.innerHTML = `<span class="routine-tag__n"></span><span class="routine-tag__t"><b>${s.label}</b><small>${s.short}</small></span>`;
    tagsEl.appendChild(t); tags[s.key] = t;
    const l = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    l.setAttribute('class', 'routine-line'); svg.appendChild(l); lines[s.key] = l;
    const d = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    d.setAttribute('class', 'routine-line__dot'); d.setAttribute('r', '2.5'); svg.appendChild(d); lines[s.key + ':dot'] = d;
  });

  function order() { return STEPS.filter(s => state.sel.has(s.key) && s.when.includes(state.mode)).map(s => s.key); }

  function onFrame(a) {
    svg.setAttribute('viewBox', `0 0 ${a.W} ${a.H}`);
    const narrow = a.W < 560;
    const act = a.items.filter(i => i.active && i.op > 0.02).sort((x, y) => x.x - y.x);
    const seq = order();
    const tierGap = narrow ? 40 : 54;
    const headroom = narrow ? 30 : 46;
    const minTop = Math.min(...act.map(i => i.y), a.ceil + 40);
    const tiered = act.length > 2 || narrow;
    const baseY = Math.max((narrow ? 74 : 104) + (tiered ? tierGap : 0), minTop - headroom);
    const pad = narrow ? 30 : 64;
    a.items.forEach(i => {
      const t = tags[i.key], l = lines[i.key], d = lines[i.key + ':dot'];
      const show = i.active && i.op > 0.02;
      if (!show) { t.style.opacity = '0'; l.style.opacity = '0'; d.style.opacity = '0'; t.classList.remove('is-on'); return; }
      const idx = act.indexOf(i);
      const tier = tiered ? idx % 2 : 0;
      const ty = baseY - tier * tierGap;
      const tw = t.offsetWidth || 120;
      const tx = Math.min(Math.max(i.x, tw / 2 + pad * 0.25), a.W - tw / 2 - pad * 0.25);
      t.style.transform = `translate3d(${(tx - tw / 2).toFixed(1)}px, ${(ty - t.offsetHeight).toFixed(1)}px, 0)`;
      const o = Math.max(0, Math.min(1, (i.op - 0.35) / 0.65));
      t.style.opacity = o.toFixed(3); l.style.opacity = (o * 0.9).toFixed(3); d.style.opacity = o.toFixed(3);
      t.classList.toggle('is-on', true);
      t.classList.toggle('is-hover', i.hover > 0.5);
      t.querySelector('.routine-tag__n').textContent = String(seq.indexOf(i.key) + 1);
      const y0 = ty + 8, y1 = i.y - 8;
      l.setAttribute('d', `M${tx.toFixed(1)} ${y0.toFixed(1)} L${tx.toFixed(1)} ${(y0 + 6).toFixed(1)} L${i.x.toFixed(1)} ${Math.max(y0 + 6, y1 - 10).toFixed(1)} L${i.x.toFixed(1)} ${y1.toFixed(1)}`);
      d.setAttribute('cx', i.x.toFixed(1)); d.setAttribute('cy', (y1 + 3).toFixed(1));
    });
  }

  function onHover(key) {
    state.hover = key;
    $$('.routine-step').forEach(b => b.classList.toggle('is-linked', b.dataset.key === key));
  }

  const useGL = webglOK() && !/[?&]routine3d=off\b/.test(location.search);
  if (useGL) {
    {
      try {
        stage = createStage({
          canvas, reduced: ctx.prefersReducedMotion, onFrame, onHover,
          items: STEPS.map(s => ({ ...s, src: IMG + s.key + '.webp' })),
        });
        const isVisible = visibilityGate(stageEl, v => stage && stage.setVisible(v));
        stage.setVisible(isVisible() || true);
        stage.setSelection(state.sel, state.mode);
        stage.setSpot(quote(state.sel).bundle === 'komplet-pakken');
        root.classList.add('is-gl');
      } catch (e) { console.warn('[routine] WebGL unavailable, using static stage', e); goStatic(); }
    }
  } else goStatic();

  function goStatic() {
    root.classList.add('is-static');
    stage = null;
    renderStatic();
  }
  function renderStatic() {
    if (!root.classList.contains('is-static')) return;
    const row = $('.routine-fallback__row');
    const keys = order();
    row.innerHTML = keys.map((k, i) => `<figure style="--h:${S[k].h}"><span class="routine-fallback__n">${i + 1}</span><img src="${IMG + k}.webp" alt=""></figure>`).join('');
  }

  // ---- UI wiring
  const steps = $$('.routine-step');
  steps.forEach(b => {
    b.addEventListener('click', () => {
      const k = b.dataset.key;
      state.sel.has(k) ? state.sel.delete(k) : state.sel.add(k);
      update();
    });
    b.addEventListener('pointerenter', () => stage && stage.setHover(b.dataset.key));
    b.addEventListener('pointerleave', () => stage && stage.setHover(null));
    b.addEventListener('focus', () => stage && stage.setHover(b.dataset.key));
    b.addEventListener('blur', () => stage && stage.setHover(null));
  });
  const modeBtns = $$('.routine-mode__btn');
  modeBtns.forEach(b => b.addEventListener('click', () => { state.mode = b.dataset.mode; update(); }));
  $('.routine-mode').addEventListener('keydown', (e) => {
    if (!['ArrowLeft', 'ArrowRight'].includes(e.key)) return;
    e.preventDefault();
    state.mode = state.mode === 'morgen' ? 'aften' : 'morgen';
    update(); root.querySelector(`.routine-mode__btn[data-mode="${state.mode}"]`).focus();
  });

  $('[data-bundle-btn]').addEventListener('click', () => {
    BUNDLES[0].covers.forEach(k => state.sel.add(k));
    update();
  });

  // CTA → each line into the cart, calm confirmation
  const cta = $('[data-cta]');
  let ctaT = 0;
  cta.addEventListener('click', () => {
    const qt = quote(state.sel);
    if (!qt.lines.length) return;
    qt.lines.forEach(l => ctx.store.add(l.id, 1));
    cta.classList.add('is-added');
    clearTimeout(ctaT);
    ctaT = setTimeout(() => cta.classList.remove('is-added'), 2400);
    setTimeout(() => ctx.store.openCart(), 650);
  });

  // ---- animated total
  let shown = null, raf = 0;
  function tweenTotal(to) {
    const el = $('[data-total]');
    if (shown === null || ctx.prefersReducedMotion) { shown = to; el.textContent = fmt.kr(to); return; }
    const from = shown, t0 = performance.now(), dur = 520;
    cancelAnimationFrame(raf);
    const f = (now) => {
      const t = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - t, 3);
      shown = from + (to - from) * e; el.textContent = fmt.kr(shown);
      if (t < 1) raf = requestAnimationFrame(f); else shown = to;
    };
    raf = requestAnimationFrame(f);
  }

  function update() {
    const sel = state.sel;
    root.dataset.mode = state.mode;
    modeBtns.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.mode === state.mode)));
    const seq = order();
    steps.forEach(b => {
      const k = b.dataset.key, on = sel.has(k);
      b.setAttribute('aria-pressed', String(on));
      const n = seq.indexOf(k);
      b.querySelector('[data-n]').textContent = on && n >= 0 ? `${n + 1} · ` : '';
      b.classList.toggle('is-resting', on && n < 0);
    });
    $('[data-count]').textContent = sel.size ? `${sel.size} af ${STEPS.length} valgt` : 'Ingen trin valgt';

    const qt = quote(sel);
    tweenTotal(qt.total);
    $('[data-cta-sum]').textContent = qt.total ? fmt.kr(qt.total) : '';
    $('[data-was-total]').textContent = qt.total ? `Førpris ${fmt.kr(qt.was)}` : 'Vælg mindst ét trin';
    const save = qt.was - qt.total;
    $('[data-save]').textContent = save > 0 ? `Du sparer ${fmt.kr(save)}` : '';
    const bn = $('[data-bundle-note]');
    if (qt.bundle) {
      const b = byId[qt.bundle];
      bn.hidden = false;
      bn.innerHTML = `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 8.4l2.6 2.5L12 5.4"/></svg><span><b>${b.name}</b>-prisen er brugt for ${joinDa(BUNDLES.find(x => x.id === qt.bundle).covers.map(k => S[k].label))}.</span>`;
    } else bn.hidden = true;
    root.classList.toggle('is-empty', !qt.total);
    cta.disabled = !qt.total;
    $('.routine-cta__label').textContent = qt.total ? 'Læg rutinen i kurv' : 'Vælg mindst ét trin';
    cta.setAttribute('aria-label', qt.total ? `Læg rutinen i kurv – ${fmt.kr(qt.total)}` : 'Vælg mindst ét trin');

    // meter: one track, two milestones (fri fragt 399, gratis Lip Balm 699)
    const ship = campaign.freeShipping, gift = campaign.giftThreshold, max = 800;
    const meter = $('[data-meter]');
    meter.style.setProperty('--fill', Math.min(1, qt.total / max).toFixed(4));
    meter.style.setProperty('--ship', (ship / max).toFixed(4));
    meter.style.setProperty('--gift', (gift / max).toFixed(4));
    meter.classList.toggle('has-ship', qt.total >= ship);
    meter.classList.toggle('has-gift', qt.total >= gift);
    const st = $('[data-meter-status]');
    if (qt.total >= gift) st.innerHTML = '<b>Fri fragt</b> og <b>gratis CBD Lip Balm</b> (værdi 79 kr.) følger med.';
    else if (qt.total >= ship) st.innerHTML = `<b>Fri fragt</b> er med. Mangler ${fmt.kr(gift - qt.total)} til gratis CBD Lip Balm (værdi 79 kr.).`;
    else if (qt.total > 0) st.innerHTML = `Mangler ${fmt.kr(ship - qt.total)} til fri fragt og ${fmt.kr(gift - qt.total)} til gratis CBD Lip Balm.`;
    else st.textContent = `Fri fragt over ${fmt.kr(ship)} – og gratis CBD Lip Balm (værdi 79 kr.) ved køb over ${fmt.kr(gift)}`;

    // Komplet Pakken nudge
    const box = $('[data-bundle]'), txt = $('[data-bundle-text]'), btn = $('[data-bundle-btn]');
    const kpOn = qt.bundle === 'komplet-pakken';
    box.classList.toggle('is-active', kpOn);
    if (kpOn) {
      txt.textContent = 'Rens, Dag, Nat og Olie er samlet i Komplet Pakken – og prisen er trukket fra.';
      btn.hidden = true;
    } else {
      const missing = BUNDLES[0].covers.filter(k => !sel.has(k));
      const full = new Set([...sel, ...missing]);
      const diff = quote(full).total - qt.total;
      const loose = missing.reduce((s, k) => s + byId[S[k].id].price, 0);
      const extra = loose - diff;
      if (!sel.size || missing.length === 4) {
        txt.textContent = `Rens, Dag, Nat og Olie samlet for ${fmt.kr(kp.price)} – ${fmt.kr(byId['cleansing-gel'].price + byId['day-cream'].price + byId['night-cream'].price + byId['skin-oil'].price - kp.price)} mindre end enkeltvis.`;
        btn.textContent = 'Vælg Komplet Pakken';
      } else {
        txt.textContent = `Tilføj ${joinDa(missing.map(k => S[k].label))} for kun ${fmt.kr(diff)} mere – så får du hele Komplet Pakken${extra > 0 ? ` og sparer ${fmt.kr(extra)} ekstra` : ''}.`;
        btn.textContent = `Tilføj ${joinDa(missing.map(k => S[k].label))}`;
      }
      btn.hidden = false;
    }

    $('[data-caption]').textContent = CAPTION[state.mode];
    const empty = $('[data-empty]');
    empty.hidden = !!sel.size && seq.length > 0;
    empty.textContent = !sel.size ? 'Vælg et trin – så stiller vi det frem.' : `Ingen af dine valgte trin bruges om ${state.mode === 'morgen' ? 'morgenen' : 'aftenen'}.`;
    $('.routine-spot').hidden = !kpOn;

    if (stage) { stage.setSelection(sel, state.mode); stage.setSpot(kpOn); }
    renderStatic();
  }
  update();
}
