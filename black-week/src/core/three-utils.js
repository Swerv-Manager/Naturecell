// Helpers for WebGL sections: render only while visible, cap DPR, honour reduced motion.
export function visibilityGate(el, onChange) {
  let visible = false;
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; onChange && onChange(visible); }, { rootMargin: '120px' });
  io.observe(el);
  return () => visible;
}
export const dpr = () => Math.min(window.devicePixelRatio || 1, 2);
