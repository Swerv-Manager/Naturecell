// theme-story – live theme nc-story (section "story"). No video is set on the live homepage, so the theme's
// [data-nc-play] click-to-play handler has nothing to do here; the only runtime need is the CBD icon sprite
// (snippets/nc-cbd-sprite.liquid, rendered once by the theme layout) used by the body copy via snippets/nc-cbd.
import { ensureCbdSprite } from './cbd-sprite.js';

export default function init() {
  ensureCbdSprite();
}
