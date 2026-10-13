// FAQ – accordion with viscous height motion, live end-date chip, gift meter and kundeklub signup.
// Staging (screenshots / QA): ?faq=3 opens question 3 (0 = all closed) · ?club=error | ?club=done | ?club=busy

const VISC = 'cubic-bezier(.16, .84, .24, 1)';
const SOFT = 'cubic-bezier(.4, 0, .2, 1)';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const ICON_ERR = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"/><path d="M12 7.5v5.5M12 16.4v.1"/></svg>';
const ICON_OK = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';

export default function init(root, ctx) {
  const reduce = ctx.prefersReducedMotion;
  const params = new URLSearchParams(location.search);

  /* ------------------------------------------------------------ accordion */
  const items = [...root.querySelectorAll('[data-faq-item]')].map((el) => ({
    el,
    btn: el.querySelector('.faq-btn'),
    panel: el.querySelector('.faq-a'),
    anim: null,
  }));

  const setHidden = (panel, on) => {
    if (on) panel.setAttribute('hidden', 'until-found');
    else panel.removeAttribute('hidden');
  };

  function animateHeight(it, from, to, dur, easing, done) {
    if (it.anim) it.anim.cancel();
    if (reduce || from === to) { done && done(); return; }
    const a = it.panel.animate([{ height: `${from}px` }, { height: `${to}px` }], { duration: dur, easing });
    it.anim = a;
    a.onfinish = () => { it.anim = null; done && done(); };
  }

  function open(it, animate = true) {
    if (it.el.classList.contains('is-open')) return;
    const from = it.anim ? it.panel.getBoundingClientRect().height : 0;
    setHidden(it.panel, false);
    it.btn.setAttribute('aria-expanded', 'true');
    it.el.classList.add('is-open');
    if (!animate) return;
    const to = it.panel.scrollHeight;
    // longer answers travel further – keep perceived speed constant, like oil settling
    const dur = Math.round(Math.min(760, 420 + to * 1.1));
    animateHeight(it, from, to, dur, VISC);
  }

  function close(it, animate = true) {
    if (!it.el.classList.contains('is-open')) return;
    const from = it.panel.getBoundingClientRect().height;
    it.btn.setAttribute('aria-expanded', 'false');
    it.el.classList.remove('is-open');
    if (!animate) { setHidden(it.panel, true); return; }
    const dur = Math.round(Math.min(560, 320 + from * 0.7));
    animateHeight(it, from, 0, dur, SOFT, () => setHidden(it.panel, true));
  }

  const toggle = (it) => {
    if (it.el.classList.contains('is-open')) { close(it); return; }
    items.forEach((o) => o !== it && close(o));
    open(it);
  };

  items.forEach((it, i) => {
    it.btn.addEventListener('click', () => toggle(it));
    // find-in-page reveals a collapsed answer (hidden="until-found")
    it.panel.addEventListener('beforematch', () => { items.forEach((o) => o !== it && close(o, false)); open(it, false); });
    it.btn.addEventListener('keydown', (e) => {
      const k = e.key;
      let j = null;
      if (k === 'ArrowDown') j = (i + 1) % items.length;
      else if (k === 'ArrowUp') j = (i - 1 + items.length) % items.length;
      else if (k === 'Home') j = 0;
      else if (k === 'End') j = items.length - 1;
      if (j !== null) { e.preventDefault(); items[j].btn.focus(); }
    });
  });

  // initial state: first answer open (the most asked question), or staged via ?faq=N / #faq-qN
  const hashMatch = /^#faq-q(\d+)$/.exec(location.hash);
  const want = params.has('faq') ? +params.get('faq') : hashMatch ? +hashMatch[1] : 1;
  if (want >= 1 && want <= items.length) open(items[want - 1], false);

  /* ------------------------------------------------------------ live end-date chip */
  const chip = root.querySelector('[data-faq-countdown]');
  const left = root.querySelector('[data-faq-left]');
  const pad = (n) => String(n).padStart(2, '0');
  function tick() {
    const ms = ctx.clock.end - ctx.clock.now();
    if (ms <= 0) { chip.hidden = true; return; }
    chip.hidden = false;
    const s = Math.floor(ms / 1000);
    const d = Math.floor(s / 86400), h = Math.floor((s % 86400) / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
    left.textContent = d > 0
      ? `${d} ${d === 1 ? 'dag' : 'dage'}, ${h} t. ${pad(m)} min.`
      : `${h} t. ${pad(m)} min. ${pad(sec)} sek.`;
  }
  if (chip && left) { tick(); setInterval(tick, 1000); }

  /* ------------------------------------------------------------ gift meter (reads the real cart) */
  const gift = root.querySelector('[data-faq-gift]');
  if (gift) {
    const label = gift.querySelector('[data-faq-gift-label]');
    const sum = gift.querySelector('[data-faq-gift-sum]');
    const fill = gift.querySelector('[data-faq-gift-fill]');
    const T = ctx.campaign.giftThreshold;
    const render = () => {
      const sub = ctx.store.subtotal();
      const reached = sub > T;
      gift.classList.toggle('is-done', reached);
      fill.style.setProperty('--p', Math.min(1, sub / T).toFixed(4));
      sum.textContent = `${ctx.fmt.kr(sub)} af ${ctx.fmt.kr(T)}`;
      if (reached) label.innerHTML = `${ICON_OK}Din Lip Balm følger med`;
      else if (sub === 0) label.textContent = 'Din kurv er tom endnu';
      else label.textContent = `Læg for ${ctx.fmt.kr(T + 1 - sub)} mere i kurven`;
    };
    render();
    ctx.store.on((type) => { if (type === 'cart:add' || type === 'cart:change') render(); });
  }

  /* ------------------------------------------------------------ kundeklub signup */
  const club = root.querySelector('.faq-club');
  const body = root.querySelector('[data-faq-club]');
  const form = root.querySelector('[data-faq-form]');
  const field = root.querySelector('[data-faq-field]');
  const input = root.querySelector('#faq-email');
  const err = root.querySelector('[data-faq-err]');
  const done = root.querySelector('[data-faq-done]');
  const doneEmail = root.querySelector('[data-faq-done-email]');
  const status = root.querySelector('[data-faq-status]');
  if (!form) return;

  let touched = false;
  const check = (v) => {
    v = v.trim();
    if (!v) return 'Skriv din e-mail, så kan vi byde dig velkommen.';
    if (!EMAIL_RE.test(v)) return 'Den e-mail ser ikke helt rigtig ud. Prøv fx navn@eksempel.dk.';
    return '';
  };
  const showError = (msg) => {
    field.classList.toggle('is-invalid', !!msg);
    input.setAttribute('aria-invalid', msg ? 'true' : 'false');
    if (msg) {
      // restart the soft entry animation on a new message
      field.classList.remove('is-invalid'); void field.offsetWidth; field.classList.add('is-invalid');
      err.innerHTML = `${ICON_ERR}<span>${msg}</span>`;
    } else err.textContent = '';
  };
  input.addEventListener('input', () => { if (touched && !check(input.value)) showError(''); });
  input.addEventListener('blur', () => { if (touched) showError(check(input.value)); });

  function succeed(email) {
    doneEmail.textContent = email;
    const from = body.getBoundingClientRect().height;
    const finish = () => {
      form.hidden = true;
      done.hidden = false;
      club.classList.add('is-done');
      status.textContent = `Tak. Du er nu tilmeldt kundeklubben med ${email}.`;
      const to = body.getBoundingClientRect().height;
      if (!reduce) body.animate([{ height: `${from}px` }, { height: `${to}px` }], { duration: 700, easing: VISC });
      done.focus({ preventScroll: true });
    };
    if (reduce) return finish();
    form.animate([{ opacity: 1, transform: 'none', filter: 'blur(0)' }, { opacity: 0, transform: 'translateY(-6px)', filter: 'blur(2px)' }],
      { duration: 260, easing: SOFT, fill: 'forwards' }).onfinish = finish;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    touched = true;
    const msg = check(input.value);
    showError(msg);
    if (msg) { input.focus(); return; }
    form.classList.add('is-busy');
    form.setAttribute('aria-busy', 'true');
    // mockup: no network – simulate a calm, short round-trip
    setTimeout(() => { form.classList.remove('is-busy'); form.removeAttribute('aria-busy'); succeed(input.value.trim()); }, reduce ? 0 : 900);
  });

  // staging
  const stage = params.get('club');
  if (stage === 'error') { input.value = 'navn@eksempel'; touched = true; showError(check(input.value)); }
  if (stage === 'busy') { input.value = 'maja@eksempel.dk'; form.classList.add('is-busy'); }
  if (stage === 'done') { input.value = 'maja@eksempel.dk'; succeed('maja@eksempel.dk'); }
}
