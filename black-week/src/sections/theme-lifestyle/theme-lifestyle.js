// theme-lifestyle – live theme nc-lifestyle (section "lifestyle"). The theme has no JS for this band: the ritual video
// is a native <video autoplay muted loop playsinline>. Mockup-only additions:
//  - poster frame + a WebM copy as second <source> (Chromium builds without H.264, e.g. the screenshot runner, fall
//    through to it; real browsers play the theme's own MP4 exactly like the live site),
//  - prefers-reduced-motion: the clip stays on its first frame instead of looping (BRIEF accessibility rule).
export default function init(root, ctx) {
  const v = root.querySelector('.nc-lifestyle__main video');
  if (!v) return;
  v.muted = true; // property, not just the attribute, so autoplay policies always allow it
  if (ctx && ctx.prefersReducedMotion) { v.removeAttribute('autoplay'); v.pause(); return; }
  const p = v.play && v.play();
  if (p && p.catch) p.catch(() => {});
}
