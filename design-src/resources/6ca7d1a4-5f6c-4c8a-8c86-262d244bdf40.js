/* @ds-bundle: {"format":3,"namespace":"NatureCellDesignSystem_52829d","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"TrustBadge","sourcePath":"components/commerce/TrustBadge.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"PriceTag","sourcePath":"components/core/PriceTag.jsx"},{"name":"Rating","sourcePath":"components/core/Rating.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"QuantityStepper","sourcePath":"components/forms/QuantityStepper.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"a6bc6fa1f1ac","components/commerce/ProductCard.jsx":"22160936c1c2","components/commerce/TrustBadge.jsx":"4099ab10673d","components/core/Badge.jsx":"03dc80814344","components/core/Button.jsx":"17eb57df6856","components/core/PriceTag.jsx":"2e642d994f08","components/core/Rating.jsx":"11b6136f90ac","components/forms/Input.jsx":"38e3d85977fb","components/forms/QuantityStepper.jsx":"f2ea02fc681e","ui_kits/webshop/app.jsx":"a2fceedcd7a0","ui_kits/webshop/data.js":"97753ed6addb","ui_kits/webshop/sections.jsx":"e42f9ccbf6fa","ui_kits/webshop/ui.jsx":"418348669bbc","ui_kits/webshop/views.jsx":"092808a4250c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NatureCellDesignSystem_52829d = window.NatureCellDesignSystem_52829d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NatureCell brand lockup. Wordmark is typeset (always crisp, themeable);
 * the circular mark is a raster asset passed via `markSrc`.
 */
function Logo({
  variant = 'full',
  // 'full' | 'wordmark' | 'mark'
  tone = 'ink',
  // 'ink' | 'sage' | 'paper' (paper = for dark bgs)
  size = 40,
  // mark size in px (wordmark scales with it)
  markSrc = '',
  // url to logo-mark-*.png
  href,
  style,
  ...rest
}) {
  const colors = {
    ink: {
      word: 'var(--ink-900)',
      sub: 'var(--ink-700)'
    },
    sage: {
      word: 'var(--sage-600)',
      sub: 'var(--sage-600)'
    },
    paper: {
      word: 'var(--paper)',
      sub: 'rgba(247,245,239,0.85)'
    }
  }[tone] || {
    word: 'var(--ink-900)',
    sub: 'var(--ink-700)'
  };
  const wordScale = size / 40;
  const mark = markSrc ? /*#__PURE__*/React.createElement("img", {
    src: markSrc,
    alt: "NatureCell",
    width: size,
    height: size,
    style: {
      display: 'block',
      width: size,
      height: size
    }
  }) : null;
  const word = /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 30 * wordScale,
      color: colors.word,
      lineHeight: 1
    }
  }, "NatureCell"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-regular)',
      fontSize: 11 * wordScale,
      letterSpacing: '0.34em',
      textTransform: 'uppercase',
      color: colors.sub,
      marginTop: 5 * wordScale,
      paddingLeft: '0.34em'
    }
  }, "Denmark"));
  const content = variant === 'mark' ? mark : variant === 'wordmark' ? word : /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12 * wordScale
    }
  }, mark, word);
  const wrapStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
    ...style
  };
  if (href) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: wrapStyle
  }, rest), content);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: wrapStyle
  }, rest), content);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/commerce/TrustBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Trust signal chip — the brand's honesty proof points. Icon + short label.
 * Pass a thin Lucide <svg> (or any node) as `icon`.
 */
function TrustBadge({
  icon = null,
  label,
  sublabel = null,
  align = 'left',
  // 'left' | 'center'
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: align === 'center' ? 'column' : 'row',
      alignItems: 'center',
      textAlign: align === 'center' ? 'center' : 'left',
      gap: align === 'center' ? 8 : 12,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 42,
      height: 42,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--sage-100)',
      color: 'var(--sage-700)'
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-900)',
      lineHeight: 1.3
    }
  }, label), sublabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-500)',
      lineHeight: 1.3
    }
  }, sublabel)));
}
Object.assign(__ds_scope, { TrustBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/TrustBadge.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small status / label pill. Sale flags ("SPAR 27%"), sold-out, new, sage tag.
 */
function Badge({
  tone = 'sage',
  // 'sage' | 'sale' | 'soldout' | 'neutral' | 'outline'
  size = 'md',
  // 'sm' | 'md'
  children,
  style,
  ...rest
}) {
  const tones = {
    sage: {
      bg: 'var(--sage-100)',
      fg: 'var(--sage-700)',
      bd: 'transparent'
    },
    sale: {
      bg: 'var(--sale)',
      fg: '#fff',
      bd: 'transparent'
    },
    soldout: {
      bg: 'var(--ink-100)',
      fg: 'var(--ink-500)',
      bd: 'transparent'
    },
    neutral: {
      bg: 'var(--paper-2)',
      fg: 'var(--ink-700)',
      bd: 'var(--border-default)'
    },
    outline: {
      bg: 'transparent',
      fg: 'var(--sage-700)',
      bd: 'var(--sage-300)'
    }
  }[tone];
  const sizing = {
    sm: {
      pad: '3px 8px',
      fs: '10px'
    },
    md: {
      pad: '4px 11px',
      fs: 'var(--text-xs)'
    }
  }[size];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: sizing.pad,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-medium)',
      fontSize: sizing.fs,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      lineHeight: 1,
      color: tones.fg,
      background: tones.bg,
      border: `1px solid ${tones.bd}`,
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NatureCell button. Pill-shaped, calm sage. Primary solid, secondary outline,
 * ghost text. Gentle hover-darken + tiny lift, press settles. No bounce.
 */
function Button({
  variant = 'primary',
  // 'primary' | 'secondary' | 'ghost'
  size = 'md',
  // 'sm' | 'md' | 'lg'
  full = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      pad: '8px 16px',
      fs: 'var(--text-sm)',
      gap: 6
    },
    md: {
      pad: '12px 24px',
      fs: 'var(--text-md)',
      gap: 8
    },
    lg: {
      pad: '15px 32px',
      fs: 'var(--text-lg)',
      gap: 9
    }
  }[size];
  const base = {
    display: full ? 'flex' : 'inline-flex',
    width: full ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes.gap,
    padding: sizes.pad,
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--weight-semibold)',
    fontSize: sizes.fs,
    lineHeight: 1.1,
    letterSpacing: '0.01em',
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: '1.5px solid transparent',
    transition: 'background var(--dur-fast) var(--ease-soft), color var(--dur-fast) var(--ease-soft), border-color var(--dur-fast) var(--ease-soft), transform var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft)',
    opacity: disabled ? 0.45 : 1,
    WebkitTapHighlightColor: 'transparent'
  };
  const variants = {
    primary: {
      background: 'var(--action)',
      color: 'var(--action-contrast)',
      borderColor: 'var(--action)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--sage-700)',
      borderColor: 'var(--sage-400)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--sage-700)',
      borderColor: 'transparent'
    }
  }[variant];
  const onEnter = e => {
    if (disabled) return;
    const el = e.currentTarget;
    el.style.transform = 'translateY(-1px)';
    if (variant === 'primary') {
      el.style.background = 'var(--action-hover)';
      el.style.borderColor = 'var(--action-hover)';
      el.style.boxShadow = 'var(--shadow-sm)';
    } else {
      el.style.background = 'var(--sage-50)';
    }
  };
  const onLeave = e => {
    const el = e.currentTarget;
    el.style.transform = 'translateY(0)';
    el.style.boxShadow = 'none';
    el.style.background = variants.background;
    el.style.borderColor = variants.borderColor;
  };
  const onDown = e => {
    if (disabled) return;
    const el = e.currentTarget;
    el.style.transform = 'translateY(0)';
    if (variant === 'primary') {
      el.style.background = 'var(--action-pressed)';
      el.style.borderColor = 'var(--action-pressed)';
    } else {
      el.style.background = 'var(--sage-100)';
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: {
      ...base,
      ...variants,
      ...style
    },
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onMouseDown: onDown,
    onMouseUp: onEnter
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/PriceTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Price display in DKK. Shows a compare-at (struck) price when on sale.
 * Formats Danish style: "499,00 kr" (comma decimals, thin-space thousands).
 */
function fmt(value) {
  const n = Number(value);
  const s = n.toLocaleString('da-DK', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return `${s} kr`;
}
function PriceTag({
  price,
  compareAt = null,
  // original price when on sale
  size = 'md',
  // 'sm' | 'md' | 'lg'
  align = 'left',
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      now: 'var(--text-md)',
      was: 'var(--text-xs)'
    },
    md: {
      now: 'var(--text-xl)',
      was: 'var(--text-sm)'
    },
    lg: {
      now: 'var(--text-2xl)',
      was: 'var(--text-md)'
    }
  }[size];
  const onSale = compareAt != null && Number(compareAt) > Number(price);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 10,
      justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: sizes.now,
      fontWeight: 'var(--weight-medium)',
      color: onSale ? 'var(--sale)' : 'var(--ink-900)',
      lineHeight: 1
    }
  }, fmt(price)), onSale && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: sizes.was,
      color: 'var(--ink-400)',
      textDecoration: 'line-through',
      lineHeight: 1
    }
  }, fmt(compareAt)));
}
Object.assign(__ds_scope, { PriceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PriceTag.jsx", error: String((e && e.message) || e) }); }

// components/core/Rating.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Star rating, sage-filled. Read-only display with optional count.
 * Uses inline SVG stars (thin, rounded) — no icon dependency.
 */
function Star({
  fill,
  size
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2.6l2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.95 6.2 21.05l1.1-6.45L2.6 9.95l6.5-.95L12 2.6z",
    fill: fill ? 'var(--sage-500)' : 'none',
    stroke: fill ? 'var(--sage-500)' : 'var(--ink-300)',
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  }));
}
function Rating({
  value = 5,
  max = 5,
  size = 16,
  count = null,
  // number of reviews, optional
  style,
  ...rest
}) {
  const rounded = Math.round(value);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 2
    }
  }, Array.from({
    length: max
  }).map((_, i) => /*#__PURE__*/React.createElement(Star, {
    key: i,
    fill: i < rounded,
    size: size
  }))), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-500)'
    }
  }, "(", count, ")"));
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rating.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Product card — white on paper, hairline border, barely-there shadow.
 * Photo on white ground, sage eyebrow, name, price, quick-add. Calm hover lift.
 */
function ProductCard({
  image,
  name,
  eyebrow = 'CBD Skin Care',
  price,
  compareAt = null,
  saveLabel = null,
  // e.g. "Spar 27%"
  rating = null,
  ratingCount = null,
  soldOut = false,
  onAdd = () => {},
  onOpen = () => {},
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-soft)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-xs)',
      transform: hover ? 'translateY(-3px)' : 'translateY(0)',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      display: 'flex',
      gap: 6,
      zIndex: 2
    }
  }, saveLabel && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "sale",
    size: "sm"
  }, saveLabel), soldOut && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "soldout",
    size: "sm"
  }, "Udsolgt")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onOpen,
    style: {
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      background: 'var(--surface-photo)',
      aspectRatio: '1 / 1',
      display: 'block',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    loading: "lazy",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      transform: hover ? 'scale(1.03)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out)',
      mixBlendMode: 'multiply'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      padding: '16px 18px 18px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--sage-600)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h3", {
    onClick: onOpen,
    style: {
      margin: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-regular)',
      fontSize: 'var(--text-xl)',
      lineHeight: 1.2,
      color: 'var(--ink-900)'
    }
  }, name), rating != null && /*#__PURE__*/React.createElement(__ds_scope.Rating, {
    value: rating,
    count: ratingCount,
    size: 14
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PriceTag, {
    price: price,
    compareAt: compareAt,
    size: "md"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": `Tilføj ${name} til kurv`,
    disabled: soldOut,
    onClick: onAdd,
    onMouseEnter: e => {
      if (!soldOut) e.currentTarget.style.background = 'var(--action-hover)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = soldOut ? 'var(--ink-200)' : 'var(--action)';
    },
    style: {
      flex: 'none',
      width: 42,
      height: 42,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      background: soldOut ? 'var(--ink-200)' : 'var(--action)',
      color: '#fff',
      fontSize: 22,
      lineHeight: 1,
      cursor: soldOut ? 'not-allowed' : 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast) var(--ease-soft)'
    }
  }, "+"))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with floating-free label, sage focus ring. Calm, rounded.
 */
function Input({
  label,
  hint,
  error,
  type = 'text',
  id,
  style,
  ...rest
}) {
  const inputId = id || (label ? `nc-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--ink-500)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      color: 'var(--ink-900)',
      background: 'var(--cloud)',
      padding: '12px 15px',
      borderRadius: 'var(--radius-md)',
      border: `1.5px solid ${error ? 'var(--danger)' : focus ? 'var(--sage-500)' : 'var(--border-default)'}`,
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      outline: 'none',
      transition: 'border-color var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft)',
      width: '100%',
      boxSizing: 'border-box'
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: error ? 'var(--danger)' : 'var(--ink-400)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/QuantityStepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Quantity stepper with − / + controls. Pill-shaped, sage hover.
 */
function QuantityStepper({
  value = 1,
  min = 1,
  max = 99,
  onChange = () => {},
  size = 'md',
  // 'sm' | 'md'
  style,
  ...rest
}) {
  const dims = {
    sm: {
      btn: 30,
      fs: 'var(--text-sm)',
      w: 34
    },
    md: {
      btn: 40,
      fs: 'var(--text-md)',
      w: 42
    }
  }[size];
  const step = d => {
    const next = Math.min(max, Math.max(min, value + d));
    if (next !== value) onChange(next);
  };
  const Btn = ({
    d,
    label,
    disabled
  }) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: () => step(d),
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.color = 'var(--sage-700)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = disabled ? 'var(--ink-300)' : 'var(--ink-700)';
    },
    style: {
      width: dims.btn,
      height: dims.btn,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      background: 'transparent',
      color: disabled ? 'var(--ink-300)' : 'var(--ink-700)',
      fontSize: 18,
      lineHeight: 1,
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'color var(--dur-fast) var(--ease-soft)'
    }
  }, d < 0 ? '−' : '+');
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      border: '1.5px solid var(--border-default)',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--cloud)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(Btn, {
    d: -1,
    label: "F\xE6rre",
    disabled: value <= min
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: dims.w,
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: dims.fs,
      fontWeight: 'var(--weight-medium)',
      color: 'var(--ink-900)'
    }
  }, value), /*#__PURE__*/React.createElement(Btn, {
    d: 1,
    label: "Flere",
    disabled: value >= max
  }));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// ui_kits/webshop/app.jsx
try { (() => {
/* NatureCell webshop — app shell & routing state. */
const {
  AnnouncementBar,
  Header,
  Hero,
  TrustBar,
  StorySection,
  Footer,
  FeaturedGrid,
  Collection,
  ProductDetail,
  CartDrawer
} = window;
function App() {
  const {
    products,
    byId
  } = window.NC_DATA;
  const [route, setRoute] = React.useState({
    name: 'home'
  });
  const [filter, setFilter] = React.useState('all');
  const [lines, setLines] = React.useState([{
    id: 'skin-oil',
    qty: 1
  }]);
  const [cartOpen, setCartOpen] = React.useState(false);
  const cartCount = lines.reduce((s, l) => s + l.qty, 0);
  const addToCart = (id, qty = 1) => {
    setLines(prev => {
      const ex = prev.find(l => l.id === id);
      if (ex) return prev.map(l => l.id === id ? {
        ...l,
        qty: Math.min(10, l.qty + qty)
      } : l);
      return [...prev, {
        id,
        qty
      }];
    });
    setCartOpen(true);
  };
  const setQty = (id, qty) => setLines(prev => prev.map(l => l.id === id ? {
    ...l,
    qty
  } : l));
  const removeLine = id => setLines(prev => prev.filter(l => l.id !== id));
  const goHome = () => {
    setRoute({
      name: 'home'
    });
    window.scrollTo(0, 0);
  };
  const goShop = f => {
    setFilter(f || 'all');
    setRoute({
      name: 'collection'
    });
    window.scrollTo(0, 0);
  };
  const openProduct = id => {
    setRoute({
      name: 'product',
      id
    });
    window.scrollTo(0, 0);
  };
  const featured = ['skin-oil', 'complete', 'day-cream', 'serum'].map(id => byId[id]);
  let view;
  if (route.name === 'home') {
    view = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
      onShop: goShop,
      onOpen: openProduct
    }), /*#__PURE__*/React.createElement(TrustBar, null), /*#__PURE__*/React.createElement(FeaturedGrid, {
      products: featured,
      onAdd: addToCart,
      onOpen: openProduct
    }), /*#__PURE__*/React.createElement(StorySection, null));
  } else if (route.name === 'collection') {
    view = /*#__PURE__*/React.createElement(Collection, {
      products: products,
      filter: filter,
      onFilter: setFilter,
      onAdd: addToCart,
      onOpen: openProduct
    });
  } else if (route.name === 'product') {
    const p = byId[route.id];
    const related = products.filter(x => x.id !== p.id && x.cat === p.cat && !x.bundle).slice(0, 4);
    view = /*#__PURE__*/React.createElement(ProductDetail, {
      p: p,
      related: related,
      onAdd: addToCart,
      onOpen: openProduct,
      onBack: () => goShop(filter)
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": route.name
  }, /*#__PURE__*/React.createElement(AnnouncementBar, null), /*#__PURE__*/React.createElement(Header, {
    cartCount: cartCount,
    onCart: () => setCartOpen(true),
    onHome: goHome,
    onShop: goShop,
    route: route.name
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      minHeight: '60vh'
    }
  }, view), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(CartDrawer, {
    open: cartOpen,
    lines: lines,
    byId: byId,
    onClose: () => setCartOpen(false),
    onQty: setQty,
    onRemove: removeLine
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/webshop/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/webshop/data.js
try { (() => {
/* NatureCell webshop — sample catalogue (recreated from naturecell.dk).
   Prices in DKK. Images live in assets/products/. */
window.NC_DATA = function () {
  const P = '../../assets/products/';
  const products = [{
    id: 'skin-oil',
    name: 'CBD Hudpleje Olie 1000 mg',
    size: '30 ml',
    eyebrow: 'CBD Skin Care',
    price: 499,
    rating: 4.8,
    ratingCount: 126,
    thread: 'lavender',
    img: P + 'skin-oil.webp',
    cat: 'hudpleje',
    hero: true,
    desc: 'Udviklet som en del af en enkel og gennemtænkt hudplejerutine — til alle hudtyper. CBD i samspil med MCT-olie efterlader huden blød, velplejet og smuk.',
    bullets: ['Indeholder CBD (cannabidiol)', 'Med MCT-olie — fugtgivende og blødgørende', 'Vegansk · uden syntetisk parfume', 'Absorberes hurtigt, fedter ikke']
  }, {
    id: 'day-cream',
    name: 'CBD Dagcreme',
    size: '50 ml',
    eyebrow: 'CBD Skin Care',
    price: 399,
    rating: 4.7,
    ratingCount: 89,
    thread: 'gold',
    img: P + 'day-cream.webp',
    cat: 'hudpleje',
    desc: 'Let dagcreme med CBD, aloe vera, sheasmør og agurkeekstrakt, der bidrager til en glat og velplejet hud.',
    bullets: ['CBD, aloe vera & sheasmør', 'Let, hurtigt indtrængende', 'Til alle hudtyper', 'Vegansk']
  }, {
    id: 'night-cream',
    name: 'CBD Natcreme',
    size: '50 ml',
    eyebrow: 'CBD Skin Care',
    price: 449,
    rating: 4.8,
    ratingCount: 73,
    thread: 'sky',
    img: P + 'night-cream.webp',
    cat: 'hudpleje',
    desc: 'Fugtighedsbevarende natcreme med CBD, mandelolie, squalane og mangokerneolie, der understøtter hudens naturlige fugt om natten.',
    bullets: ['CBD, mandelolie & squalane', 'Nærende natformel', 'Til alle hudtyper', 'Vegansk']
  }, {
    id: 'cleansing-gel',
    name: 'CBD Rensegel',
    size: '100 ml',
    eyebrow: 'CBD Skin Care',
    price: 299,
    rating: 4.6,
    ratingCount: 54,
    thread: 'coral',
    img: P + 'cleansing-gel.webp',
    cat: 'hudpleje',
    desc: 'Mild ansigtsrens med CBD, solsikkeolie og Sodium PCA, som renser og samtidig bevarer hudens fugtbalance.',
    bullets: ['Mild, daglig ansigtsrens', 'Bevarer hudens fugtbalance', 'CBD & solsikkeolie', 'Vegansk']
  }, {
    id: 'serum',
    name: 'CBD Hyaluronic Serum',
    size: '30 ml',
    eyebrow: 'CBD Skin Care',
    price: 299,
    rating: 4.9,
    ratingCount: 41,
    thread: 'lavender',
    img: P + 'hyaluron-serum.webp',
    cat: 'hudpleje',
    desc: 'Fugtboostende serum med hyaluronsyre og CBD til et mere ensartet og udhvilet hududtryk.',
    bullets: ['Hyaluronsyre + CBD', 'Intens fugt', 'Brug under dag- eller natcreme', 'Vegansk']
  }, {
    id: 'body-lotion',
    name: 'CBD Bodylotion',
    size: '200 ml',
    eyebrow: 'CBD Skin Care',
    price: 249,
    rating: 4.8,
    ratingCount: 112,
    thread: 'sky',
    img: P + 'body-lotion.webp',
    cat: 'hudpleje',
    desc: 'Nærende bodylotion med CBD til tør og stram hud — trækker hurtigt ind og efterlader kroppen blød.',
    bullets: ['Til tør kropshud', 'Hurtigt indtrængende', 'CBD & planteolier', 'Vegansk']
  }, {
    id: 'shampoo',
    name: 'CBD Shampoo 750 mg',
    size: '300 ml',
    eyebrow: 'CBD Hair Care',
    price: 199,
    rating: 4.5,
    ratingCount: 38,
    thread: 'gold',
    img: P + 'shampoo.webp',
    cat: 'haar',
    desc: 'Mild shampoo med CBD, der renser nænsomt og plejer både hovedbund og hår.',
    bullets: ['Mild daglig shampoo', 'Plejer hovedbunden', 'CBD-beriget', 'Vegansk']
  }, {
    id: 'love',
    name: 'CBD Love Lubricant 75 mg',
    size: '30 ml',
    eyebrow: 'CBD Skin Care',
    price: 129,
    rating: 4.7,
    ratingCount: 23,
    thread: 'lavender',
    img: P + 'love-lubricant.webp',
    cat: 'hudpleje',
    desc: 'Skånsom intimglidecreme med CBD og naturlige, organiske ingredienser. Til alle hudtyper.',
    bullets: ['Naturlige & organiske ingredienser', 'Til alle hudtyper', 'CBD-beriget']
  }, {
    id: 'drops-1000',
    name: 'CBD Olie 10% — Drops 1000 mg',
    size: '10 ml',
    eyebrow: 'CBD Care',
    price: 399,
    rating: 4.8,
    ratingCount: 207,
    thread: 'clay',
    img: P + 'cbd-drops-1000mg.webp',
    cat: 'ekstrakt',
    kraft: true,
    desc: 'Fuldspektret CBD-dråber, 10%. Produceret på GMP- og ISO-certificerede faciliteter. Testet til < 0,2% THC med analysecertifikat pr. parti.',
    bullets: ['10% · 1000 mg CBD', 'GMP- & ISO-certificeret produktion', '< 0,2% THC — analysecertifikat', 'Naturlige & organiske ingredienser']
  }, {
    id: 'drops-2000',
    name: 'CBD Olie 20% — Drops 2000 mg',
    size: '10 ml',
    eyebrow: 'CBD Care',
    price: 599,
    rating: 4.9,
    ratingCount: 96,
    thread: 'clay',
    img: P + 'cbd-drops-2000mg.webp',
    cat: 'ekstrakt',
    kraft: true,
    desc: 'Vores stærkeste fuldspektret CBD-dråber, 20%. Samme certificerede produktion og batch-test.',
    bullets: ['20% · 2000 mg CBD', 'GMP- & ISO-certificeret produktion', '< 0,2% THC — analysecertifikat', 'Naturlige & organiske ingredienser']
  }, {
    id: 'complete',
    name: 'Sampakke: Komplet CBD Hudpleje',
    size: 'Rens · Dag · Nat · Olie',
    eyebrow: 'Sampakke',
    price: 1198,
    compareAt: 1646,
    save: 'Spar 27%',
    rating: 4.9,
    ratingCount: 64,
    thread: 'sky',
    img: P + 'startpakke-plus.webp',
    cat: 'hudpleje',
    bundle: true,
    desc: 'Komplet CBD-hudplejesæt til alle hudtyper — rensegel, dagcreme, natcreme og 1000 mg olie. Effektiv pleje døgnet rundt.',
    bullets: ['4 produkter i én pakke', 'Pleje morgen og aften', 'Spar 27% vs. løskøb', 'Til alle hudtyper']
  }, {
    id: 'all-day-facial',
    name: 'All Day Facial CBD Care',
    size: '5 produkter',
    eyebrow: 'Sampakke',
    price: 860,
    compareAt: 1147,
    save: 'Spar 25%',
    rating: 4.9,
    ratingCount: 31,
    thread: 'gold',
    img: P + 'all-day-facial.webp',
    cat: 'hudpleje',
    bundle: true,
    desc: 'Den komplette ansigtsrutine: rens, serum, dag- og natcreme samt olie — alt du behøver til en effektiv daglig rutine.',
    bullets: ['Komplet ansigtsrutine', 'Anbefalet af kosmetolog', 'Spar 25%', 'Til alle hudtyper']
  }];
  const byId = Object.fromEntries(products.map(p => [p.id, p]));
  return {
    products,
    byId
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/webshop/data.js", error: String((e && e.message) || e) }); }

// ui_kits/webshop/sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* NatureCell webshop — page sections & chrome. */
const {
  Icon,
  Logo,
  Button,
  Badge,
  PriceTag,
  Rating,
  QuantityStepper,
  TrustBadge,
  ProductCard,
  fmtKr
} = window;

/* ---- Announcement bar -------------------------------------------------- */
function AnnouncementBar() {
  const items = ['Fri fragt over 399 kr.', 'Først godkendt i Danmark', 'Afsendes hver dag kl. 14', '< 0,2% THC · analysecertifikat'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--sage-700)',
      color: 'var(--paper)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      letterSpacing: '0.1em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '9px 24px',
      display: 'flex',
      justifyContent: 'center',
      gap: 36,
      flexWrap: 'wrap'
    }
  }, items.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      opacity: i === 0 ? 1 : 0.82
    }
  }, i === 0 && /*#__PURE__*/React.createElement(Icon, {
    name: "truck",
    size: 15,
    stroke: 2
  }), t))));
}

/* ---- Header ------------------------------------------------------------ */
function Header({
  cartCount,
  onCart,
  onHome,
  onShop,
  route
}) {
  const nav = [{
    label: 'CBD Hudpleje',
    go: () => onShop('hudpleje')
  }, {
    label: 'CBD Ekstrakt',
    go: () => onShop('ekstrakt')
  }, {
    label: 'Sampakker',
    go: () => onShop('bundle')
  }, {
    label: 'Om CBD',
    go: () => {}
  }, {
    label: 'Kundecases',
    go: () => {}
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(247,245,239,0.86)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '14px 24px',
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 24,
      alignItems: 'center'
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.label,
    type: "button",
    onClick: n.go,
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      padding: '4px 0',
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-700)',
      borderBottom: '2px solid transparent'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--sage-700)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--ink-700)'
  }, n.label))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onHome,
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      justifySelf: 'center'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 34
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center',
      justifySelf: 'end'
    }
  }, /*#__PURE__*/React.createElement(IconBtn, {
    name: "search",
    label: "S\xF8g"
  }), /*#__PURE__*/React.createElement(IconBtn, {
    name: "user",
    label: "Konto"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Kurv",
    onClick: onCart,
    style: {
      position: 'relative',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      padding: 9,
      borderRadius: 'var(--radius-pill)'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--sage-50)',
    onMouseLeave: e => e.currentTarget.style.background = 'none'
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bag",
    size: 22,
    color: "var(--ink-800, #38574B)"
  }), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      right: 2,
      minWidth: 18,
      height: 18,
      padding: '0 5px',
      borderRadius: 9,
      background: 'var(--sage-500)',
      color: '#fff',
      fontSize: 11,
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)'
    }
  }, cartCount)))));
}
function IconBtn({
  name,
  label
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      padding: 9,
      borderRadius: 'var(--radius-pill)',
      color: 'var(--ink-700)'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--sage-50)',
    onMouseLeave: e => e.currentTarget.style.background = 'none'
  }, /*#__PURE__*/React.createElement(Icon, {
    name: name,
    size: 22
  }));
}

/* ---- Hero -------------------------------------------------------------- */
function Hero({
  onShop,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '48px 24px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--sage-500)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      minHeight: 460
    }
  }, /*#__PURE__*/React.createElement(ThreadField, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '64px 56px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 22,
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 'var(--text-xs)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'rgba(247,245,239,0.92)'
    }
  }, "CBD Skin Care \xB7 Denmark"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-4xl)',
      lineHeight: 1.05,
      letterSpacing: '-0.01em',
      color: 'var(--paper)'
    }
  }, "Naturlig pleje.", /*#__PURE__*/React.createElement("br", null), "\xC6gte resultater."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 420,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-lg)',
      lineHeight: 1.6,
      color: 'rgba(247,245,239,0.92)'
    }
  }, "Danmarks f\xF8rste godkendte CBD-hudplejeserie. Plantebaseret, vegansk og formuleret med n\xF8je udvalgte ingredienser af naturlig oprindelse."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onShop('hudpleje'),
    style: {
      padding: '14px 30px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      background: 'var(--paper)',
      color: 'var(--sage-700)',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-md)'
    }
  }, "Shop hudpleje"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onOpen('skin-oil'),
    style: {
      padding: '14px 26px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      background: 'transparent',
      color: 'var(--paper)',
      border: '1.5px solid rgba(247,245,239,0.6)',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-md)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, "Bestseller: CBD Olie ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrowR",
    size: 18,
    stroke: 2
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/products/skin-oil.webp",
    alt: "CBD Hudpleje Olie",
    style: {
      width: '92%',
      maxHeight: 420,
      objectFit: 'contain',
      filter: 'drop-shadow(0 24px 48px rgba(44,70,61,0.28))'
    }
  }))));
}

/* Decorative chevron field + single thread, echoing the packaging system */
function ThreadField() {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 1,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '52%',
      height: '78%',
      background: 'repeating-linear-gradient(125deg, transparent 0 9px, rgba(255,255,255,0.10) 9px 10px)',
      clipPath: 'polygon(0 24%, 70% 100%, 0 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '6%',
      bottom: '8%',
      width: '46%',
      height: 2,
      background: 'var(--thread-mauve)',
      transform: 'rotate(-52deg)',
      transformOrigin: 'left bottom',
      opacity: 0.85,
      borderRadius: 2
    }
  }));
}

/* ---- Trust bar --------------------------------------------------------- */
function TrustBar() {
  const items = [{
    icon: 'leaf',
    label: 'Først godkendt i Danmark',
    sublabel: 'CBD-hudpleje siden 2019'
  }, {
    icon: 'shield',
    label: '< 0,2% THC',
    sublabel: 'Analysecertifikat pr. parti'
  }, {
    icon: 'sprout',
    label: 'Naturlige ingredienser',
    sublabel: 'Vegansk · uden parfume'
  }, {
    icon: 'check',
    label: 'e-mærket webshop',
    sublabel: 'Tryg & sikker handel'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: '1px solid var(--border-soft)',
      borderBottom: '1px solid var(--border-soft)',
      background: 'var(--paper-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '26px 24px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 24
    }
  }, items.map(it => /*#__PURE__*/React.createElement(TrustBadge, _extends({
    key: it.label
  }, it)))));
}

/* ---- Customer story ---------------------------------------------------- */
function StorySection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '24px 24px 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--sage-100)',
      borderRadius: 'var(--radius-xl)',
      padding: '64px 56px',
      display: 'grid',
      gridTemplateColumns: '1fr',
      placeItems: 'center',
      textAlign: 'center',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 'var(--text-xs)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--sage-700)'
    }
  }, "\xC6gte mennesker \xB7 \xE6gte historier"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 760,
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontStyle: 'italic',
      fontSize: 'var(--text-3xl)',
      lineHeight: 1.4,
      color: 'var(--sage-900)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sage-400)'
    }
  }, "\u201C"), "Min hud f\xF8les mere fri, og det var f\xF8rste gang, jeg oplevede en creme, der reelt gjorde en forskel.", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sage-400)'
    }
  }, "\u201D")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Rating, {
    value: 5,
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-500)'
    }
  }, "Annette \u2014 kundecase")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 560,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-500)'
    }
  }, "Vi lover ikke mirakler \u2014 vi deler kundernes egne oplevelser. Resultater kan variere fra person til person.")));
}

/* ---- Footer ------------------------------------------------------------ */
function Footer() {
  const cols = [{
    h: 'Shop',
    items: ['CBD Hudpleje', 'CBD Ekstrakt', 'Sampakker', 'Hår & krop', 'Gavekort']
  }, {
    h: 'Om NatureCell',
    items: ['Om os', 'Om CBD', 'Kundecases', 'Artikler', 'Kundeklub']
  }, {
    h: 'Kundeservice',
    items: ['Kontakt', 'Fragt & levering', 'Returnering', 'Handelsbetingelser', 'Privatliv']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-900)',
      color: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px 24px 32px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 36,
    tone: "paper"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 300,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      lineHeight: 1.6,
      color: 'rgba(247,245,239,0.7)'
    }
  }, "Dansk CBD-hudpleje, plantebaseret og formuleret med naturlige ingredienser. F\xF8rst godkendt i Danmark."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'rgba(247,245,239,0.5)'
    }
  }, "e-m\xE6rket \xB7 GMP \xB7 ISO")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 'var(--text-xs)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'rgba(247,245,239,0.55)'
    }
  }, c.h), c.items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'rgba(247,245,239,0.85)',
      textDecoration: 'none'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--sage-300)',
    onMouseLeave: e => e.currentTarget.style.color = 'rgba(247,245,239,0.85)'
  }, it))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(247,245,239,0.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '18px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: 'rgba(247,245,239,0.55)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 NatureCell Denmark"), /*#__PURE__*/React.createElement("span", null, "Kosmetiske produkter \u2014 ikke beregnet til at diagnosticere eller behandle sygdom."))));
}
Object.assign(window, {
  AnnouncementBar,
  Header,
  Hero,
  ThreadField,
  TrustBar,
  StorySection,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/webshop/sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/webshop/ui.jsx
try { (() => {
/* NatureCell webshop — UI primitives (self-contained, mirror the DS components). */

/* ---- Icons (Lucide path data — thin rounded strokes) ------------------ */
function Icon({
  name,
  size = 22,
  stroke = 1.75,
  color = 'currentColor',
  style
}) {
  const paths = {
    search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m21 21-4.3-4.3"
    })),
    user: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "8",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 21c0-4 4-6 8-6s8 2 8 6"
    })),
    bag: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 6h18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 10a4 4 0 0 1-8 0"
    })),
    menu: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 6h18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 12h18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 18h18"
    })),
    x: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M18 6 6 18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m6 6 12 12"
    })),
    chevR: /*#__PURE__*/React.createElement("path", {
      d: "m9 18 6-6-6-6"
    }),
    chevD: /*#__PURE__*/React.createElement("path", {
      d: "m6 9 6 6 6-6"
    }),
    arrowR: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m12 5 7 7-7 7"
    })),
    leaf: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M2 21c0-3 1.85-5.36 5.08-6"
    })),
    shield: /*#__PURE__*/React.createElement("path", {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z"
    }),
    truck: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M14 18V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 9h4l4 4v4a1 1 0 0 1-1 1h-1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "7.5",
      cy: "18.5",
      r: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "17.5",
      cy: "18.5",
      r: "2"
    })),
    check: /*#__PURE__*/React.createElement("path", {
      d: "M20 6 9 17l-5-5"
    }),
    sprout: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M7 20h10"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 20c5.5-2.5.8-6.4 3-10"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2Z"
    })),
    heart: /*#__PURE__*/React.createElement("path", {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
    }),
    droplet: /*#__PURE__*/React.createElement("path", {
      d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7Z"
    })
  };
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style,
    "aria-hidden": "true"
  }, paths[name]);
}

/* ---- Logo -------------------------------------------------------------- */
function Logo({
  size = 38,
  tone = 'ink',
  mark = true
}) {
  const c = tone === 'paper' ? {
    w: 'var(--paper)',
    s: 'rgba(247,245,239,.85)'
  } : tone === 'sage' ? {
    w: 'var(--sage-600)',
    s: 'var(--sage-600)'
  } : {
    w: 'var(--ink-900)',
    s: 'var(--ink-700)'
  };
  const sc = size / 38;
  const src = tone === 'paper' ? '../../assets/logo-mark-white.png' : '../../assets/logo-mark-ink.png';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 11 * sc
    }
  }, mark && /*#__PURE__*/React.createElement("img", {
    src: src,
    width: size,
    height: size,
    alt: "",
    style: {
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 400,
      fontSize: 27 * sc,
      color: c.w,
      lineHeight: 1
    }
  }, "NatureCell"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 400,
      fontSize: 10 * sc,
      letterSpacing: '0.34em',
      textTransform: 'uppercase',
      color: c.s,
      marginTop: 4 * sc,
      paddingLeft: '0.34em'
    }
  }, "Denmark")));
}

/* ---- Button ------------------------------------------------------------ */
function Button({
  variant = 'primary',
  size = 'md',
  full,
  disabled,
  iconRight,
  children,
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  const sz = {
    sm: '8px 16px',
    md: '12px 24px',
    lg: '15px 32px'
  }[size];
  const fs = {
    sm: 'var(--text-sm)',
    md: 'var(--text-md)',
    lg: 'var(--text-lg)'
  }[size];
  const v = {
    primary: {
      background: h ? 'var(--sage-600)' : 'var(--sage-500)',
      color: '#fff',
      border: '1.5px solid transparent',
      boxShadow: h ? 'var(--shadow-sm)' : 'none'
    },
    secondary: {
      background: h ? 'var(--sage-50)' : 'transparent',
      color: 'var(--sage-700)',
      border: '1.5px solid var(--sage-400)'
    },
    ghost: {
      background: h ? 'var(--sage-50)' : 'transparent',
      color: 'var(--sage-700)',
      border: '1.5px solid transparent'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: full ? 'flex' : 'inline-flex',
      width: full ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      padding: sz,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: fs,
      lineHeight: 1.1,
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'all var(--dur-fast) var(--ease-soft)',
      transform: h && !disabled ? 'translateY(-1px)' : 'none',
      ...v,
      ...style
    }
  }, children, iconRight && /*#__PURE__*/React.createElement(Icon, {
    name: iconRight,
    size: 18,
    stroke: 2
  }));
}

/* ---- Badge ------------------------------------------------------------- */
function Badge({
  tone = 'sage',
  size = 'md',
  children,
  style
}) {
  const t = {
    sage: {
      bg: 'var(--sage-100)',
      fg: 'var(--sage-700)',
      bd: 'transparent'
    },
    sale: {
      bg: 'var(--sale)',
      fg: '#fff',
      bd: 'transparent'
    },
    soldout: {
      bg: 'var(--ink-100)',
      fg: 'var(--ink-500)',
      bd: 'transparent'
    },
    neutral: {
      bg: 'var(--paper-2)',
      fg: 'var(--ink-700)',
      bd: 'var(--border-default)'
    },
    outline: {
      bg: 'transparent',
      fg: 'var(--sage-700)',
      bd: 'var(--sage-300)'
    },
    kraft: {
      bg: 'var(--clay-100)',
      fg: 'var(--clay-600)',
      bd: 'transparent'
    }
  }[tone];
  const pad = size === 'sm' ? '3px 8px' : '4px 11px';
  const fs = size === 'sm' ? '10px' : 'var(--text-xs)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: pad,
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: fs,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      lineHeight: 1,
      color: t.fg,
      background: t.bg,
      border: `1px solid ${t.bd}`,
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}

/* ---- Price ------------------------------------------------------------- */
function fmtKr(v) {
  return Number(v).toLocaleString('da-DK', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }) + ' kr';
}
function PriceTag({
  price,
  compareAt,
  size = 'md',
  style
}) {
  const now = {
    sm: 'var(--text-md)',
    md: 'var(--text-xl)',
    lg: 'var(--text-2xl)'
  }[size];
  const was = {
    sm: 'var(--text-xs)',
    md: 'var(--text-sm)',
    lg: 'var(--text-md)'
  }[size];
  const sale = compareAt && compareAt > price;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 10,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: now,
      fontWeight: 500,
      color: sale ? 'var(--sale)' : 'var(--ink-900)',
      lineHeight: 1
    }
  }, fmtKr(price)), sale && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: was,
      color: 'var(--ink-400)',
      textDecoration: 'line-through',
      lineHeight: 1
    }
  }, fmtKr(compareAt)));
}

/* ---- Rating ------------------------------------------------------------ */
function Rating({
  value = 5,
  count,
  size = 16,
  style
}) {
  const r = Math.round(value);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 2
    }
  }, Array.from({
    length: 5
  }).map((_, i) => /*#__PURE__*/React.createElement("svg", {
    key: i,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2.6l2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.95 6.2 21.05l1.1-6.45L2.6 9.95l6.5-.95L12 2.6z",
    fill: i < r ? 'var(--sage-500)' : 'none',
    stroke: i < r ? 'var(--sage-500)' : 'var(--ink-300)',
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  })))), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-500)'
    }
  }, "(", count, ")"));
}

/* ---- QuantityStepper --------------------------------------------------- */
function QuantityStepper({
  value = 1,
  min = 1,
  max = 99,
  onChange = () => {},
  size = 'md'
}) {
  const b = size === 'sm' ? 30 : 40;
  const step = d => {
    const n = Math.min(max, Math.max(min, value + d));
    if (n !== value) onChange(n);
  };
  const Bt = ({
    d,
    dis,
    lbl
  }) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": lbl,
    disabled: dis,
    onClick: () => step(d),
    style: {
      width: b,
      height: b,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      background: 'transparent',
      color: dis ? 'var(--ink-300)' : 'var(--ink-700)',
      fontSize: 18,
      cursor: dis ? 'not-allowed' : 'pointer'
    }
  }, d < 0 ? '−' : '+');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      border: '1.5px solid var(--border-default)',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--cloud)'
    }
  }, /*#__PURE__*/React.createElement(Bt, {
    d: -1,
    dis: value <= min,
    lbl: "F\xE6rre"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: size === 'sm' ? 34 : 42,
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      color: 'var(--ink-900)'
    }
  }, value), /*#__PURE__*/React.createElement(Bt, {
    d: 1,
    dis: value >= max,
    lbl: "Flere"
  }));
}

/* ---- TrustBadge -------------------------------------------------------- */
function TrustBadge({
  icon,
  label,
  sublabel,
  align = 'left'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: align === 'center' ? 'column' : 'row',
      alignItems: 'center',
      textAlign: align === 'center' ? 'center' : 'left',
      gap: align === 'center' ? 8 : 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--sage-100)',
      color: 'var(--sage-700)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 22
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-900)',
      lineHeight: 1.3
    }
  }, label), sublabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-500)',
      lineHeight: 1.3
    }
  }, sublabel)));
}

/* ---- ProductCard ------------------------------------------------------- */
function ProductCard({
  p,
  onAdd,
  onOpen
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--cloud)',
      border: '1px solid var(--border-soft)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: h ? 'var(--shadow-md)' : 'var(--shadow-xs)',
      transform: h ? 'translateY(-3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      display: 'flex',
      gap: 6,
      zIndex: 2
    }
  }, p.save && /*#__PURE__*/React.createElement(Badge, {
    tone: "sale",
    size: "sm"
  }, p.save), p.kraft && !p.save && /*#__PURE__*/React.createElement(Badge, {
    tone: "kraft",
    size: "sm"
  }, "CBD Care")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onOpen,
    style: {
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      background: 'var(--cloud)',
      aspectRatio: '1/1',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: p.name,
    loading: "lazy",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      mixBlendMode: 'multiply',
      transform: h ? 'scale(1.03)' : 'none',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      padding: '16px 18px 18px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--sage-600)'
    }
  }, p.eyebrow), /*#__PURE__*/React.createElement("h3", {
    onClick: onOpen,
    style: {
      margin: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-xl)',
      lineHeight: 1.2,
      color: 'var(--ink-900)'
    }
  }, p.name), /*#__PURE__*/React.createElement(Rating, {
    value: p.rating,
    count: p.ratingCount,
    size: 14
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(PriceTag, {
    price: p.price,
    compareAt: p.compareAt,
    size: "md"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": 'Tilføj ' + p.name,
    onClick: onAdd,
    onMouseEnter: e => e.currentTarget.style.background = 'var(--sage-600)',
    onMouseLeave: e => e.currentTarget.style.background = 'var(--sage-500)',
    style: {
      flex: 'none',
      width: 42,
      height: 42,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      background: 'var(--sage-500)',
      color: '#fff',
      fontSize: 22,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast)'
    }
  }, "+"))));
}
Object.assign(window, {
  Icon,
  Logo,
  Button,
  Badge,
  PriceTag,
  Rating,
  QuantityStepper,
  TrustBadge,
  ProductCard,
  fmtKr
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/webshop/ui.jsx", error: String((e && e.message) || e) }); }

// ui_kits/webshop/views.jsx
try { (() => {
/* NatureCell webshop — collection, product detail, cart. */
const {
  Icon,
  Button,
  Badge,
  PriceTag,
  Rating,
  QuantityStepper,
  ProductCard,
  TrustBadge,
  fmtKr
} = window;

/* ---- Featured grid (home) ---------------------------------------------- */
function FeaturedGrid({
  products,
  onAdd,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px 24px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-xs)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--sage-600)'
    }
  }, "Mest elskede"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-3xl)',
      letterSpacing: '-0.01em',
      color: 'var(--ink-900)'
    }
  }, "Favoritter til din rutine")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-sm)',
      color: 'var(--sage-700)'
    }
  }, "Se alle produkter ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrowR",
    size: 17,
    stroke: 2
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 22
    }
  }, products.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    p: p,
    onAdd: () => onAdd(p.id),
    onOpen: () => onOpen(p.id)
  }))));
}

/* ---- Collection / PLP -------------------------------------------------- */
const FILTERS = [{
  id: 'all',
  label: 'Alle'
}, {
  id: 'hudpleje',
  label: 'Hudpleje'
}, {
  id: 'ekstrakt',
  label: 'CBD Ekstrakt'
}, {
  id: 'bundle',
  label: 'Sampakker'
}, {
  id: 'haar',
  label: 'Hår & krop'
}];
function Collection({
  products,
  filter,
  onFilter,
  onAdd,
  onOpen
}) {
  const shown = products.filter(p => filter === 'all' ? true : filter === 'bundle' ? p.bundle : filter === 'haar' ? p.cat === 'haar' : p.cat === filter && !p.bundle);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '40px 24px 72px'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-400)',
      marginBottom: 18
    }
  }, "Forside ", /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '0 6px'
    }
  }, "/"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-700)'
    }
  }, "CBD Hudpleje")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-3xl)',
      letterSpacing: '-0.01em',
      color: 'var(--ink-900)'
    }
  }, "CBD Hudpleje"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 640,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      color: 'var(--ink-500)',
      lineHeight: 1.6
    }
  }, "Den f\xF8rste CBD-hudplejeserie godkendt til salg i Danmark. En one-size-really-does-fit-all l\xF8sning til alle hudtyper.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 24,
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      flexWrap: 'wrap'
    }
  }, FILTERS.map(f => {
    const on = f.id === filter;
    return /*#__PURE__*/React.createElement("button", {
      key: f.id,
      type: "button",
      onClick: () => onFilter(f.id),
      style: {
        padding: '8px 16px',
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: 'var(--text-sm)',
        border: '1.5px solid ' + (on ? 'var(--sage-500)' : 'var(--border-default)'),
        background: on ? 'var(--sage-500)' : 'transparent',
        color: on ? '#fff' : 'var(--ink-700)'
      }
    }, f.label);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-400)'
    }
  }, shown.length, " produkter")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 22
    }
  }, shown.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    p: p,
    onAdd: () => onAdd(p.id),
    onOpen: () => onOpen(p.id)
  }))));
}

/* ---- Product detail / PDP ---------------------------------------------- */
function ProductDetail({
  p,
  onAdd,
  onBack,
  related,
  onOpen
}) {
  const [qty, setQty] = React.useState(1);
  const [openAcc, setOpenAcc] = React.useState('beskrivelse');
  const acc = [{
    id: 'beskrivelse',
    h: 'Beskrivelse',
    body: p.desc
  }, {
    id: 'brug',
    h: 'Sådan bruger du den',
    body: 'Påfør på ren, tør hud morgen og/eller aften. Til ydre brug. Undgå direkte kontakt med øjnene. Opbevares køligt og mørkt.'
  }, {
    id: 'ingredienser',
    h: 'Ingredienser',
    body: 'CBD (Cannabidiol), naturlige planteolier og botaniske ekstrakter. Vegansk. Uden tilsatte syntetiske duftstoffer. Testet < 0,2% THC.'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '32px 24px 72px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onBack,
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginBottom: 22,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-sm)',
      color: 'var(--sage-700)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      transform: 'rotate(180deg)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevR",
    size: 16,
    stroke: 2
  })), " Tilbage"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 96,
      background: 'var(--cloud)',
      borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--border-soft)',
      aspectRatio: '1/1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: p.name,
    style: {
      width: '88%',
      height: '88%',
      objectFit: 'contain',
      mixBlendMode: 'multiply'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, p.save && /*#__PURE__*/React.createElement(Badge, {
    tone: "sale"
  }, p.save), p.kraft && /*#__PURE__*/React.createElement(Badge, {
    tone: "kraft"
  }, "CBD Care"), /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, "Vegansk")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-xs)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--sage-600)'
    }
  }, p.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-3xl)',
      lineHeight: 1.1,
      letterSpacing: '-0.01em',
      color: 'var(--ink-900)'
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      color: 'var(--ink-400)'
    }
  }, p.size)), /*#__PURE__*/React.createElement(Rating, {
    value: p.rating,
    count: p.ratingCount
  }), /*#__PURE__*/React.createElement(PriceTag, {
    price: p.price,
    compareAt: p.compareAt,
    size: "lg"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 480,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      lineHeight: 1.7,
      color: 'var(--ink-700)'
    }
  }, p.desc), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '2px 0 6px',
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, p.bullets.map(b => /*#__PURE__*/React.createElement("li", {
    key: b,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-700)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sage-600)',
      marginTop: 1,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 17,
    stroke: 2.2
  })), b))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    value: qty,
    onChange: setQty,
    max: 10
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: "bag",
    onClick: () => onAdd(p.id, qty),
    style: {
      flex: 1
    }
  }, "Tilf\xF8j til kurv \xB7 ", fmtKr(p.price * qty))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      padding: '16px 0 4px',
      borderTop: '1px solid var(--border-soft)',
      marginTop: 6,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(TrustBadge, {
    icon: "truck",
    label: "Fri fragt over 399 kr.",
    sublabel: "Afsendes hver dag kl. 14"
  }), /*#__PURE__*/React.createElement(TrustBadge, {
    icon: "shield",
    label: "< 0,2% THC",
    sublabel: "Analysecertifikat pr. parti"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      borderTop: '1px solid var(--border-soft)'
    }
  }, acc.map(a => {
    const open = openAcc === a.id;
    return /*#__PURE__*/React.createElement("div", {
      key: a.id,
      style: {
        borderBottom: '1px solid var(--border-soft)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setOpenAcc(open ? '' : a.id),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 2px',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-display)',
        fontWeight: 400,
        fontSize: 'var(--text-md)',
        color: 'var(--ink-900)'
      }
    }, a.h, /*#__PURE__*/React.createElement("span", {
      style: {
        transform: open ? 'rotate(180deg)' : 'none',
        transition: 'transform var(--dur-fast)',
        color: 'var(--ink-400)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevD",
      size: 18,
      stroke: 2
    }))), open && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '0 2px 18px',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-sm)',
        lineHeight: 1.7,
        color: 'var(--ink-500)',
        maxWidth: 480
      }
    }, a.body));
  })))), related && related.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 24px',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-2xl)',
      color: 'var(--ink-900)'
    }
  }, "Passer godt sammen med"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 22
    }
  }, related.map(rp => /*#__PURE__*/React.createElement(ProductCard, {
    key: rp.id,
    p: rp,
    onAdd: () => onAdd(rp.id, 1),
    onOpen: () => onOpen(rp.id)
  })))));
}

/* ---- Cart drawer ------------------------------------------------------- */
function CartDrawer({
  open,
  lines,
  byId,
  onClose,
  onQty,
  onRemove
}) {
  const subtotal = lines.reduce((s, l) => s + byId[l.id].price * l.qty, 0);
  const FREE = 399;
  const pct = Math.min(100, Math.round(subtotal / FREE * 100));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'rgba(32,38,35,0.4)',
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity var(--dur-base) var(--ease-soft)'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      width: 420,
      maxWidth: '92vw',
      zIndex: 1001,
      background: 'var(--paper)',
      boxShadow: 'var(--shadow-lg)',
      display: 'flex',
      flexDirection: 'column',
      transform: open ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 24px',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--text-xl)',
      color: 'var(--ink-900)'
    }
  }, "Din kurv"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Luk",
    onClick: onClose,
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--ink-500)',
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 22
  }))), lines.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 14,
      color: 'var(--ink-400)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bag",
    size: 40,
    stroke: 1.4
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)'
    }
  }, "Din kurv er tom")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 24px',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-600, #5E665F)',
      marginBottom: 9
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "truck",
    size: 16,
    stroke: 2,
    color: "var(--sage-600)"
  }), subtotal >= FREE ? /*#__PURE__*/React.createElement("span", null, "Du har ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--sage-700)'
    }
  }, "fri fragt"), " \uD83C\uDF89") : /*#__PURE__*/React.createElement("span", null, "K\xF8b for ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink-900)'
    }
  }, fmtKr(FREE - subtotal)), " mere og f\xE5 fri fragt")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 3,
      background: 'var(--sage-100)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      background: 'var(--sage-500)',
      transition: 'width var(--dur-base) var(--ease-out)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '8px 24px'
    }
  }, lines.map(l => {
    const p = byId[l.id];
    return /*#__PURE__*/React.createElement("div", {
      key: l.id,
      style: {
        display: 'flex',
        gap: 14,
        padding: '16px 0',
        borderBottom: '1px solid var(--border-soft)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 72,
        height: 72,
        flex: 'none',
        background: 'var(--cloud)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-soft)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: p.img,
      alt: p.name,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        mixBlendMode: 'multiply'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: 'var(--text-sm)',
        color: 'var(--ink-900)',
        lineHeight: 1.3
      }
    }, p.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-xs)',
        color: 'var(--ink-400)'
      }
    }, p.size), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement(QuantityStepper, {
      value: l.qty,
      onChange: n => onQty(l.id, n),
      size: "sm",
      max: 10
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: 'var(--text-sm)',
        color: 'var(--ink-900)'
      }
    }, fmtKr(p.price * l.qty)))), /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": "Fjern",
      onClick: () => onRemove(l.id),
      style: {
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        color: 'var(--ink-300)',
        alignSelf: 'flex-start',
        padding: 2
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 16
    })));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 24px 24px',
      borderTop: '1px solid var(--border-soft)',
      background: 'var(--paper-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      color: 'var(--ink-700)'
    }
  }, "Subtotal"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--text-xl)',
      color: 'var(--ink-900)'
    }
  }, fmtKr(subtotal))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    full: true,
    iconRight: "arrowR"
  }, "G\xE5 til kassen"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-400)'
    }
  }, "Moms inkluderet \xB7 fragt beregnes ved kassen")))));
}
Object.assign(window, {
  FeaturedGrid,
  Collection,
  ProductDetail,
  CartDrawer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/webshop/views.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.TrustBadge = __ds_scope.TrustBadge;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.PriceTag = __ds_scope.PriceTag;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

})();
