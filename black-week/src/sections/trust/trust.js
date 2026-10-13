// TRUST – the bindrune mark is drawn as one slow, glowing line (a bright "pen" head travels along each
// stroke), then the line hands over to the solid white logo mark. A warm light pool behind it follows the
// pointer with viscous damping. No WebGL here on purpose: SVG keeps the logo geometry exact and costs ~0.
// Static, fully-visible mark without JS / with prefers-reduced-motion.

export default function init(root, ctx) {
  const strokes = root.querySelector('.trust-mark__strokes');
  const stage = root.querySelector('.trust-stage');
  if (!strokes || !stage) return;

  const q = new URLSearchParams(location.search);
  const reduced = ctx.prefersReducedMotion || q.get('trust-static') === '1';
  if (reduced || !('IntersectionObserver' in window)) return; // CSS default = finished mark

  // comet layer = a clone of the stroke paths with a short, bright dash riding the drawing head
  const comet = strokes.cloneNode(true);
  comet.setAttribute('class', 'trust-mark__comet');
  strokes.after(comet);

  root.classList.add('is-armed');
  // force the armed state to paint before we allow the draw, so the transition always runs
  void root.offsetWidth;

  const io = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return;
    io.disconnect();
    requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add('is-drawn')));
    // once everything has settled, drop the comet layer (no idle filters left on the page)
    setTimeout(() => comet.remove(), 6200);
  }, { threshold: 0.3 });
  io.observe(stage);

  initPointerLight(root, stage, ctx);
}

// Light pool drifts toward the pointer like oil under glass: critically damped, never springy.
function initPointerLight(root, stage, ctx) {
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  let tx = 50, ty = 46, x = 50, y = 46, raf = 0, visible = false;
  const tick = () => {
    x += (tx - x) * 0.045; y += (ty - y) * 0.045;
    stage.style.setProperty('--mx', x.toFixed(2) + '%');
    stage.style.setProperty('--my', y.toFixed(2) + '%');
    raf = (visible && (Math.abs(tx - x) > 0.05 || Math.abs(ty - y) > 0.05)) ? requestAnimationFrame(tick) : 0;
  };
  const kick = () => { if (!raf && visible) raf = requestAnimationFrame(tick); };
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; kick(); }, { rootMargin: '80px' }).observe(stage);
  root.addEventListener('pointermove', (e) => {
    const r = stage.getBoundingClientRect();
    // clamp so the pool stays a soft halo around the mark, it never chases the cursor across the page
    tx = 50 + Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / (r.width * 0.9))) * 16;
    ty = 46 + Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height / 2)) / (r.height * 0.9))) * 16;
    kick();
  }, { passive: true });
  root.addEventListener('pointerleave', () => { tx = 50; ty = 46; kick(); });
}
