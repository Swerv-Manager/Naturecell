// theme-trust-bar – live theme nc-trust-bar, instance "trust2" (mobile_mode: items). The section itself has no JS in
// the theme; the only runtime need is the CBD icon sprite (layout/theme.liquid renders snippets/nc-cbd-sprite once),
// which the label "Første danske CBD hudpleje · 2019" references via <use href="#nc-cbd">.
import { ensureCbdSprite } from '../theme-trust/cbd-sprite.js';

export default function init() {
  ensureCbdSprite();
}
