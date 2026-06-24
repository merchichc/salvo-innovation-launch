/* @ds-bundle: {"format":3,"namespace":"SalvoInnovationDesignSystem_cdc9ce","components":[{"name":"BurstMark","sourcePath":"components/brand/BurstMark.jsx"},{"name":"SalvoLogo","sourcePath":"components/brand/SalvoLogo.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/content/Eyebrow.jsx"},{"name":"Stat","sourcePath":"components/content/Stat.jsx"},{"name":"Tag","sourcePath":"components/content/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/BurstMark.jsx":"be16811d3da0","components/brand/SalvoLogo.jsx":"a23f87b6f835","components/buttons/Button.jsx":"83294f320283","components/buttons/IconButton.jsx":"27f9b27e8dab","components/content/Badge.jsx":"b43478ae5d5c","components/content/Card.jsx":"b330afef40e2","components/content/Eyebrow.jsx":"7fe05d6fd703","components/content/Stat.jsx":"8422f62a7aa6","components/content/Tag.jsx":"91958750d315","components/forms/Input.jsx":"2873e6412b65","components/forms/Select.jsx":"ad24b7ca9371","components/forms/Textarea.jsx":"00d841fb8bbc","components/navigation/Accordion.jsx":"fa6824e2669f","components/navigation/Tabs.jsx":"8c774b787a8e","ui_kits/website/AboutScreen.jsx":"02747a0638b6","ui_kits/website/App.jsx":"31577727e2f4","ui_kits/website/Chrome.jsx":"e0347fddfccb","ui_kits/website/ContactScreen.jsx":"11a0dc765864","ui_kits/website/HomeScreen.jsx":"3bf183b131a4","ui_kits/website/Icons.jsx":"bcb609672e21","ui_kits/website/PricingScreen.jsx":"1e80d2c660ba","ui_kits/website/ServicesScreen.jsx":"36dd62c1b5b1","ui_kits/website/WorkshopsScreen.jsx":"b1222331598f"},"inlinedExternals":[],"unexposedExports":[{"name":"useFieldStyles","sourcePath":"components/forms/Input.jsx"}]} */

(() => {

const __ds_ns = (window.SalvoInnovationDesignSystem_cdc9ce = window.SalvoInnovationDesignSystem_cdc9ce || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/BurstMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Salvo burst mark — sonar-ping / muzzle-burst radiating from a lower-left
   origin. The brand symbol. Rendered inline so it can take any tone. */

const ARCS = [33, 50, 67];
const arcPath = r => `M ${19 + r} 81 A ${r} ${r} 0 0 0 19 ${81 - r}`;
const RAYS = [{
  x1: 89.38,
  y1: 58.13,
  x2: 102.69,
  y2: 53.81
}, {
  x1: 71.33,
  y1: 28.67,
  x2: 81.22,
  y2: 18.77
}, {
  x1: 41.87,
  y1: 10.62,
  x2: 46.19,
  y2: -2.69
}];
const TONES = {
  signal: {
    stroke: "#ff4a1c",
    core: "#0a1a2b"
  },
  ink: {
    stroke: "#0a1a2b",
    core: "#0a1a2b"
  },
  paper: {
    stroke: "#f6f1e7",
    core: "#d4ff47"
  },
  volt: {
    stroke: "#d4ff47",
    core: "#f6f1e7"
  }
};
function BurstMark({
  tone = "signal",
  size = 40,
  title = "Salvo",
  style,
  ...rest
}) {
  const c = TONES[tone] || TONES.signal;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "-4 -6 110 112",
    width: size,
    height: size,
    role: "img",
    "aria-label": title,
    fill: "none",
    style: style
  }, rest), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "81",
    r: "8.5",
    fill: c.core
  }), ARCS.map(r => /*#__PURE__*/React.createElement("path", {
    key: r,
    d: arcPath(r),
    stroke: c.stroke,
    strokeWidth: "8",
    strokeLinecap: "round"
  })), RAYS.map((l, i) => /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: l.x1,
    y1: l.y1,
    x2: l.x2,
    y2: l.y2,
    stroke: c.stroke,
    strokeWidth: "8",
    strokeLinecap: "round"
  })));
}
Object.assign(__ds_scope, { BurstMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/BurstMark.jsx", error: String((e && e.message) || e) }); }

// components/brand/SalvoLogo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The Salvo logo lockup. Mark + "SALVO" wordmark set live in Space Grotesk
   (so the type renders correctly — unlike the wordmark SVG used via <img>). */

const WORD_COLOR = {
  ink: "#0a1a2b",
  paper: "#f6f1e7",
  signal: "#ff4a1c"
};
const MARK_TONE = {
  ink: "signal",
  // ink lockup uses the signal mark for the flare of color
  paper: "volt",
  signal: "signal"
};
function SalvoLogo({
  variant = "lockup",
  tone = "ink",
  size = 36,
  style,
  ...rest
}) {
  const markTone = MARK_TONE[tone] || "signal";
  const word = WORD_COLOR[tone] || "#0a1a2b";
  if (variant === "mark") {
    return /*#__PURE__*/React.createElement(__ds_scope.BurstMark, _extends({
      tone: markTone,
      size: size,
      style: style
    }, rest));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: size * 0.28,
      lineHeight: 1,
      ...style
    }
  }, rest), variant === "lockup" && /*#__PURE__*/React.createElement(__ds_scope.BurstMark, {
    tone: markTone,
    size: size
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '"Space Grotesk", system-ui, sans-serif',
      fontWeight: 700,
      fontSize: size * 0.92,
      letterSpacing: "-0.04em",
      color: word
    }
  }, "SALVO"));
}
Object.assign(__ds_scope, { SalvoLogo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SalvoLogo.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Salvo Button — pill, with the signature hard offset ink shadow and a
   press-into-shadow interaction. Styling is injected once as a scoped
   stylesheet that reads brand CSS custom properties. */

const CSS = `
.salvo-btn {
  --_shadow: var(--ink-900);
  font-family: var(--font-body);
  font-weight: 700;
  letter-spacing: -0.01em;
  display: inline-flex; align-items: center; justify-content: center; gap: 0.5em;
  border-radius: var(--radius-pill);
  border: 2px solid var(--ink-900);
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  transition: transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), background-color var(--dur-fast) var(--ease-out);
  box-shadow: 4px 4px 0 var(--_shadow);
}
.salvo-btn--sm { font-size: 0.875rem; padding: 0.4rem 0.95rem; }
.salvo-btn--md { font-size: 1rem; padding: 0.62rem 1.35rem; }
.salvo-btn--lg { font-size: 1.125rem; padding: 0.85rem 1.7rem; }
.salvo-btn--primary { background: var(--signal-500); color: #fff; }
.salvo-btn--primary:hover { background: var(--signal-600); }
.salvo-btn--secondary { background: var(--white); color: var(--ink-900); }
.salvo-btn--secondary:hover { background: var(--paper); }
.salvo-btn--volt { background: var(--volt-500); color: var(--ink-900); }
.salvo-btn--volt:hover { background: var(--volt-400); }
.salvo-btn--ink { background: var(--ink-900); color: var(--paper); }
.salvo-btn--ink:hover { background: var(--ink-800); }
.salvo-btn--ghost { background: transparent; border-color: transparent; box-shadow: none; color: var(--ink-900); }
.salvo-btn--ghost:hover { background: rgba(10,26,43,0.06); }

.salvo-btn:not(.salvo-btn--ghost):hover { transform: translate(-2px,-2px); box-shadow: 6px 6px 0 var(--_shadow); }
.salvo-btn:not(.salvo-btn--ghost):active { transform: translate(2px,2px); box-shadow: 0 0 0 var(--_shadow); }
.salvo-btn:focus-visible { outline: none; box-shadow: var(--ring); }
.salvo-btn:disabled, .salvo-btn[aria-disabled="true"] { opacity: 0.45; pointer-events: none; box-shadow: 4px 4px 0 var(--_shadow); transform: none; }
.salvo-btn--full { width: 100%; }
@media (prefers-reduced-motion: reduce) { .salvo-btn { transition: none; } }
`;
let injected = false;
function useStyles() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-salvo", "button");
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Button({
  variant = "primary",
  size = "md",
  as = "button",
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  className = "",
  children,
  ...rest
}) {
  useStyles();
  const Tag = as;
  const cls = ["salvo-btn", `salvo-btn--${variant}`, `salvo-btn--${size}`, fullWidth ? "salvo-btn--full" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* IconButton — square pill button for a single icon. Same interaction model
   as Button. Pass a Lucide (or any) icon node as children. */

function IconButton({
  variant = "secondary",
  size = "md",
  label,
  children,
  ...rest
}) {
  const pad = {
    sm: "0.42rem",
    md: "0.6rem",
    lg: "0.8rem"
  }[size] || "0.6rem";
  return /*#__PURE__*/React.createElement(__ds_scope.Button, _extends({
    variant: variant,
    size: size,
    "aria-label": label,
    style: {
      padding: pad,
      ...(rest.style || {})
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/content/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Badge — small status pill. Solid or soft. For statuses, counts, "new". */

const TONES = {
  signal: {
    solid: ["var(--signal-500)", "#fff"],
    soft: ["var(--signal-100)", "var(--signal-700)"]
  },
  volt: {
    solid: ["var(--volt-500)", "var(--ink-900)"],
    soft: ["var(--volt-100)", "var(--volt-700)"]
  },
  ink: {
    solid: ["var(--ink-900)", "var(--paper)"],
    soft: ["var(--sand-100)", "var(--ink-800)"]
  },
  success: {
    solid: ["var(--success-500)", "#fff"],
    soft: ["var(--success-100)", "#0d6e48"]
  },
  warning: {
    solid: ["var(--warning-500)", "var(--ink-900)"],
    soft: ["var(--warning-100)", "#7a4d00"]
  },
  danger: {
    solid: ["var(--danger-500)", "#fff"],
    soft: ["var(--danger-100)", "#9b1424"]
  }
};
function Badge({
  children,
  tone = "signal",
  variant = "solid",
  dot = false,
  style,
  ...rest
}) {
  const [bg, fg] = (TONES[tone] || TONES.signal)[variant === "soft" ? "soft" : "solid"];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.45em",
      fontFamily: "var(--font-body)",
      fontSize: "0.78rem",
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: "0.01em",
      padding: "0.32em 0.7em",
      borderRadius: "var(--radius-pill)",
      background: bg,
      color: fg,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: "0.5em",
      height: "0.5em",
      borderRadius: "50%",
      background: "currentColor"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Card — content surface in two brand flavors:
   · "sticker" (signature): 2px ink border + hard offset shadow, lifts on hover
   · "soft": white surface + soft elevation shadow
   Plus tone variants for ink/signal/volt fills. */

const CSS = `
.salvo-card {
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  background: var(--white);
  color: var(--ink-900);
  display: block;
  transition: transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
}
.salvo-card--sticker { border: 2px solid var(--ink-900); box-shadow: 4px 4px 0 var(--ink-900); }
.salvo-card--soft { border: 1px solid var(--border-subtle); box-shadow: var(--shadow-md); }
.salvo-card--flat { border: 1px solid var(--border-subtle); }
.salvo-card--ink { background: var(--ink-900); color: var(--paper); border-color: var(--ink-900); }
.salvo-card--signal { background: var(--signal-500); color: #fff; border-color: var(--ink-900); }
.salvo-card--volt { background: var(--volt-500); color: var(--ink-900); border-color: var(--ink-900); }
.salvo-card--paper { background: var(--paper); }

a.salvo-card, .salvo-card--interactive { cursor: pointer; text-decoration: none; }
a.salvo-card--sticker:hover, .salvo-card--sticker.salvo-card--interactive:hover { transform: translate(-3px,-3px); box-shadow: 7px 7px 0 var(--ink-900); }
a.salvo-card--soft:hover, .salvo-card--soft.salvo-card--interactive:hover { transform: translateY(-3px); box-shadow: var(--shadow-lg); }
@media (prefers-reduced-motion: reduce) { .salvo-card { transition: none; } }
`;
let injected = false;
function useStyles() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-salvo", "card");
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Card({
  variant = "sticker",
  tone = "default",
  interactive = false,
  as = "div",
  className = "",
  children,
  ...rest
}) {
  useStyles();
  const Tag = as;
  const cls = ["salvo-card", `salvo-card--${variant}`, tone !== "default" ? `salvo-card--${tone}` : "", interactive ? "salvo-card--interactive" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Eyebrow / kicker — mono, uppercase, tracked label that sits above headings.
   The "nautical instrument" voice. Optional leading rule and index. */

function Eyebrow({
  children,
  index,
  tone = "signal",
  rule = true,
  style,
  ...rest
}) {
  const color = tone === "ink" ? "var(--ink-900)" : tone === "paper" ? "var(--paper)" : tone === "muted" ? "var(--text-muted)" : "var(--signal-600)";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-eyebrow)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color,
      display: "inline-flex",
      alignItems: "center",
      gap: "0.6em",
      ...style
    }
  }, rest), rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: "1.6em",
      height: 0,
      borderTop: "2px solid currentColor"
    }
  }), index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.6
    }
  }, index), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Stat — big display number with a label. For metrics / proof points.
   Numbers use the display face; labels use mono. */

function Stat({
  value,
  label,
  sub,
  tone = "ink",
  align = "left",
  style,
  ...rest
}) {
  const num = tone === "signal" ? "var(--signal-500)" : tone === "paper" ? "var(--paper)" : "var(--ink-900)";
  const lab = tone === "paper" ? "var(--text-on-dark-muted)" : "var(--text-muted)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(2.4rem, 5vw, 3.5rem)",
      lineHeight: 0.95,
      letterSpacing: "-0.03em",
      color: num
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "0.72rem",
      fontWeight: 700,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: lab,
      marginTop: "0.6em"
    }
  }, label), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.9rem",
      color: lab,
      marginTop: "0.35em"
    }
  }, sub));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Stat.jsx", error: String((e && e.message) || e) }); }

// components/content/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Tag — outlined chip for topics, filters, metadata. Optional removable X. */

function Tag({
  children,
  onRemove,
  active = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.45em",
      fontFamily: "var(--font-body)",
      fontSize: "0.85rem",
      fontWeight: 600,
      padding: "0.34em 0.8em",
      borderRadius: "var(--radius-pill)",
      border: "1.5px solid var(--ink-900)",
      background: active ? "var(--ink-900)" : "transparent",
      color: active ? "var(--paper)" : "var(--ink-900)",
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      padding: 0,
      display: "inline-flex",
      color: "inherit",
      lineHeight: 0,
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Salvo form field styles — shared by Input, Textarea, Select.
   2px borders, pill/rounded, signal focus ring. */

const FIELD_CSS = `
.salvo-field-wrap { display: flex; flex-direction: column; gap: 0.4rem; font-family: var(--font-body); }
.salvo-field-label { font-family: var(--font-mono); font-size: 0.72rem; font-weight: 700; letter-spacing: var(--tracking-eyebrow); text-transform: uppercase; color: var(--ink-800); }
.salvo-field {
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--ink-900);
  background: var(--white);
  border: 2px solid var(--ink-900);
  border-radius: var(--radius-md);
  padding: 0.7rem 0.95rem;
  width: 100%;
  transition: box-shadow var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out);
  appearance: none;
}
.salvo-field::placeholder { color: var(--sand-400); }
.salvo-field:hover { border-color: var(--ink-700); }
.salvo-field:focus-visible, .salvo-field:focus { outline: none; box-shadow: 4px 4px 0 var(--signal-500); }
.salvo-field--invalid { border-color: var(--danger-500); }
.salvo-field--invalid:focus { box-shadow: 4px 4px 0 var(--danger-500); }
.salvo-field:disabled { opacity: 0.5; background: var(--paper-dim); }
.salvo-field-hint { font-size: 0.8rem; color: var(--text-muted); }
.salvo-field-hint--error { color: var(--danger-500); font-weight: 600; }
.salvo-select-wrap { position: relative; }
.salvo-select-wrap > svg { position: absolute; right: 0.85rem; top: 50%; transform: translateY(-50%); pointer-events: none; color: var(--ink-800); }
.salvo-field--select { padding-right: 2.4rem; cursor: pointer; }
@media (prefers-reduced-motion: reduce) { .salvo-field { transition: none; } }
`;
let injected = false;
function useFieldStyles() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-salvo", "fields");
  el.textContent = FIELD_CSS;
  document.head.appendChild(el);
}
function Wrap({
  label,
  hint,
  error,
  htmlFor,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "salvo-field-wrap",
    htmlFor: htmlFor
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "salvo-field-label"
  }, label), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: "salvo-field-hint" + (error ? " salvo-field-hint--error" : "")
  }, error || hint));
}
function Input({
  label,
  hint,
  error,
  className = "",
  id,
  ...rest
}) {
  useFieldStyles();
  return /*#__PURE__*/React.createElement(Wrap, {
    label: label,
    hint: hint,
    error: error,
    htmlFor: id
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    className: ["salvo-field", error ? "salvo-field--invalid" : "", className].filter(Boolean).join(" ")
  }, rest)));
}
Object.assign(__ds_scope, { useFieldStyles, Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Select — native select with Salvo field styling and a chevron. */

function Select({
  label,
  hint,
  error,
  children,
  className = "",
  id,
  ...rest
}) {
  __ds_scope.useFieldStyles();
  return /*#__PURE__*/React.createElement("label", {
    className: "salvo-field-wrap",
    htmlFor: id
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "salvo-field-label"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "salvo-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    className: ["salvo-field", "salvo-field--select", error ? "salvo-field--invalid" : "", className].filter(Boolean).join(" ")
  }, rest), children), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  }))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: "salvo-field-hint" + (error ? " salvo-field-hint--error" : "")
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Textarea — multiline field, same Salvo field styling. */

function Textarea({
  label,
  hint,
  error,
  rows = 4,
  className = "",
  id,
  ...rest
}) {
  __ds_scope.useFieldStyles();
  return /*#__PURE__*/React.createElement("label", {
    className: "salvo-field-wrap",
    htmlFor: id
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "salvo-field-label"
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    rows: rows,
    className: ["salvo-field", error ? "salvo-field--invalid" : "", className].filter(Boolean).join(" "),
    style: {
      resize: "vertical",
      minHeight: "5rem"
    }
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: "salvo-field-hint" + (error ? " salvo-field-hint--error" : "")
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/* Accordion — list of expandable items separated by ink rules. Single-open by
   default; allowMultiple to keep several open. items: [{ id, title, content }]. */
const CSS = `
.salvo-acc { border-top: 2px solid var(--ink-900); }
.salvo-acc-item { border-bottom: 2px solid var(--ink-900); }
.salvo-acc-head {
  width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 1rem;
  background: transparent; border: none; cursor: pointer; text-align: left;
  font-family: var(--font-display); font-weight: 700; font-size: 1.15rem; color: var(--ink-900);
  padding: 1.15rem 0.25rem;
}
.salvo-acc-head:hover { color: var(--signal-600); }
.salvo-acc-head:focus-visible { outline: none; box-shadow: var(--ring); border-radius: var(--radius-sm); }
.salvo-acc-icon { flex: none; transition: transform var(--dur-base) var(--ease-out); color: var(--signal-500); }
.salvo-acc-head[aria-expanded="true"] .salvo-acc-icon { transform: rotate(45deg); }
.salvo-acc-panel { overflow: hidden; max-height: 0; transition: max-height var(--dur-slow) var(--ease-out); }
.salvo-acc-panel--open { max-height: 600px; }
.salvo-acc-body { padding: 0 0.25rem 1.3rem; color: var(--text-secondary); font-size: 1rem; line-height: var(--leading-normal); max-width: 60ch; }
@media (prefers-reduced-motion: reduce) { .salvo-acc-icon, .salvo-acc-panel { transition: none; } }
`;
let injected = false;
function useStyles() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-salvo", "accordion");
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpen = [],
  className = "",
  ...rest
}) {
  useStyles();
  const [open, setOpen] = useState(new Set(defaultOpen));
  const toggle = id => {
    setOpen(prev => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(id)) next.delete(id);else next.add(id);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["salvo-acc", className].filter(Boolean).join(" ")
  }, rest), items.map(it => {
    const isOpen = open.has(it.id);
    return /*#__PURE__*/React.createElement("div", {
      className: "salvo-acc-item",
      key: it.id
    }, /*#__PURE__*/React.createElement("button", {
      className: "salvo-acc-head",
      "aria-expanded": isOpen,
      onClick: () => toggle(it.id)
    }, /*#__PURE__*/React.createElement("span", null, it.title), /*#__PURE__*/React.createElement("svg", {
      className: "salvo-acc-icon",
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.5",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 5v14M5 12h14"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "salvo-acc-panel" + (isOpen ? " salvo-acc-panel--open" : "")
    }, /*#__PURE__*/React.createElement("div", {
      className: "salvo-acc-body"
    }, it.content)));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/* Tabs — segmented pill tablist. Controlled (value/onChange) or uncontrolled
   (defaultValue). items: [{ id, label }]. */
const CSS = `
.salvo-tabs { display: inline-flex; gap: 4px; padding: 5px; background: var(--paper-dim); border: 2px solid var(--ink-900); border-radius: var(--radius-pill); }
.salvo-tab {
  font-family: var(--font-body); font-weight: 700; font-size: 0.95rem;
  border: none; cursor: pointer; background: transparent; color: var(--ink-800);
  padding: 0.5rem 1.1rem; border-radius: var(--radius-pill); white-space: nowrap;
  transition: background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out);
}
.salvo-tab:hover { color: var(--ink-900); }
.salvo-tab[aria-selected="true"] { background: var(--ink-900); color: var(--paper); }
.salvo-tab:focus-visible { outline: none; box-shadow: var(--ring); }
.salvo-tabs--signal .salvo-tab[aria-selected="true"] { background: var(--signal-500); color: #fff; }
@media (prefers-reduced-motion: reduce) { .salvo-tab { transition: none; } }
`;
let injected = false;
function useStyles() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-salvo", "tabs");
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  tone = "ink",
  className = "",
  ...rest
}) {
  useStyles();
  const [internal, setInternal] = useState(defaultValue ?? (items[0] && items[0].id));
  const active = value !== undefined ? value : internal;
  const select = id => {
    if (value === undefined) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    className: ["salvo-tabs", tone === "signal" ? "salvo-tabs--signal" : "", className].filter(Boolean).join(" ")
  }, rest), items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    role: "tab",
    "aria-selected": active === it.id,
    className: "salvo-tab",
    onClick: () => select(it.id)
  }, it.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutScreen.jsx
try { (() => {
/* About screen — the name story + values. */
const {
  Button: AbButton,
  Card: AbCard,
  Stat: AbStat
} = window.SalvoInnovationDesignSystem_cdc9ce;
function AboutScreen({
  onNavigate
}) {
  const values = [{
    icon: "target",
    t: "Decisions, not decks",
    d: "Every session ends with a real call the room owns — not a document that gathers dust."
  }, {
    icon: "zap",
    t: "Momentum is the product",
    d: "A stuck team is expensive. We optimise for the fastest honest path forward."
  }, {
    icon: "users",
    t: "The room is the expert",
    d: "Your team knows more than any consultant. We design the structure that gets it out."
  }, {
    icon: "anchor",
    t: "Save what's worth saving",
    d: "We're honest about what to fix, what to ship, and what to let sink. Salvō — we save."
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--paper)",
      position: "relative",
      overflow: "hidden",
      borderBottom: "2px solid var(--ink-900)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/motif-burst-rays.svg",
    alt: "",
    style: {
      position: "absolute",
      left: -50,
      bottom: -70,
      width: 380,
      opacity: 0.8
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      padding: "clamp(56px,8vw,104px) clamp(20px,5vw,56px)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "About Salvo"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(2.6rem,6vw,4.6rem)",
      lineHeight: 0.98,
      letterSpacing: "-0.035em",
      margin: "18px 0 0"
    }
  }, "A burst of fire, and a hand on the wheel.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "clamp(56px,8vw,104px) 0"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
      gap: 44,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--signal-600)",
      marginBottom: 16
    }
  }, "Why \"Salvo\"?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(1.5rem,3vw,2.1rem)",
      lineHeight: 1.18,
      letterSpacing: "-0.02em",
      color: "var(--ink-900)",
      margin: "0 0 20px"
    }
  }, "A ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--signal-500)"
    }
  }, "salvo"), " is a broadside \u2014 a sudden, simultaneous burst of fire. In Latin, ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic"
    }
  }, "salv\u014D"), " means ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: "linear-gradient(transparent 58%, var(--volt-500) 58%)"
    }
  }, "\u201CI save.\u201D")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.65,
      color: "var(--text-secondary)",
      maxWidth: "54ch"
    }
  }, "That's the whole idea. We inject a burst of fire \u2014 of progress, of clarity, of momentum \u2014 into teams and ideas that have run aground. And we do it with a salvager's honesty: we save the ship worth saving, and we're straight with you about the rest."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.65,
      color: "var(--text-secondary)",
      maxWidth: "54ch",
      marginTop: 14
    }
  }, "Fast, decisive, a little bit loud. Never beige.")), /*#__PURE__*/React.createElement(Photo, {
    h: 360,
    tone: "ink",
    motif: "ripple",
    label: "Salv\u014D \u2014 I save"
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "clamp(56px,8vw,96px) 0",
      background: "var(--white)",
      borderTop: "2px solid var(--ink-900)",
      borderBottom: "2px solid var(--ink-900)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "What we believe",
    title: "Four things we won't budge on"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
      gap: 22
    }
  }, values.map(v => /*#__PURE__*/React.createElement(AbCard, {
    key: v.t,
    variant: "soft",
    style: {
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 50,
      height: 50,
      borderRadius: 12,
      background: "var(--ink-900)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: v.icon,
    size: 26,
    color: "var(--volt-500)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 21,
      margin: "0 0 8px",
      letterSpacing: "-0.02em"
    }
  }, v.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      lineHeight: 1.55,
      color: "var(--text-secondary)",
      margin: 0
    }
  }, v.d)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "clamp(48px,7vw,80px) 0"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(160px,1fr))",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(AbStat, {
    value: "2019",
    label: "Studio founded"
  }), /*#__PURE__*/React.createElement(AbStat, {
    value: "120+",
    label: "Workshops run",
    tone: "signal"
  }), /*#__PURE__*/React.createElement(AbStat, {
    value: "11",
    label: "Countries"
  }), /*#__PURE__*/React.createElement(AbStat, {
    value: "\u221E",
    label: "Sticky notes"
  })))), /*#__PURE__*/React.createElement(CTABand, {
    onNavigate: onNavigate
  }));
}
Object.assign(window, {
  AboutScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
/* App — client-side router for the Salvo marketing site kit. */
function App() {
  const [screen, setScreen] = React.useState("home");
  const navigate = id => {
    setScreen(id);
    window.scrollTo({
      top: 0,
      behavior: "instant" in window ? "instant" : "auto"
    });
  };
  const Screen = {
    home: window.HomeScreen,
    services: window.ServicesScreen,
    workshops: window.WorkshopsScreen,
    pricing: window.PricingScreen,
    about: window.AboutScreen,
    contact: window.ContactScreen
  }[screen] || window.HomeScreen;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Nav, {
    current: screen,
    onNavigate: navigate
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Screen, {
    onNavigate: navigate
  })), /*#__PURE__*/React.createElement(Footer, {
    onNavigate: navigate
  }));
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
/* Site chrome — Nav, Footer, and shared section building blocks.
   Pulls Button/SalvoLogo from the Salvo bundle, Icon from Icons.jsx. */
const DS = window.SalvoInnovationDesignSystem_cdc9ce;
const {
  Button,
  SalvoLogo
} = DS;
const NAV = [{
  id: "home",
  label: "Home"
}, {
  id: "services",
  label: "Services"
}, {
  id: "workshops",
  label: "Workshops"
}, {
  id: "pricing",
  label: "Pricing"
}, {
  id: "about",
  label: "About"
}];
function Container({
  children,
  size = "max",
  style
}) {
  const max = size === "narrow" ? "760px" : size === "wide" ? "1320px" : "1180px";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: max,
      margin: "0 auto",
      padding: "0 clamp(20px, 5vw, 56px)",
      ...style
    }
  }, children);
}
function Nav({
  current,
  onNavigate
}) {
  const [open, setOpen] = React.useState(false);
  const go = id => {
    onNavigate(id);
    setOpen(false);
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(246,241,231,0.82)",
      backdropFilter: "blur(12px)",
      borderBottom: "2px solid var(--ink-900)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 72
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go("home"),
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      padding: 0
    },
    "aria-label": "Salvo home"
  }, /*#__PURE__*/React.createElement(SalvoLogo, {
    tone: "ink",
    size: 30
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4
    },
    className: "salvo-nav-links"
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    onClick: () => go(n.id),
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 15,
      padding: "8px 12px",
      borderRadius: 8,
      color: current === n.id ? "var(--signal-600)" : "var(--ink-900)"
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => go("contact")
  }, "Book a salvo"), /*#__PURE__*/React.createElement("button", {
    className: "salvo-nav-burger",
    onClick: () => setOpen(!open),
    "aria-label": "Menu",
    style: {
      display: "none",
      border: "2px solid var(--ink-900)",
      background: "var(--white)",
      borderRadius: 10,
      width: 40,
      height: 40,
      cursor: "pointer",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: open ? "x" : "menu",
    size: 20
  }))))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--sand-200)",
      background: "var(--paper)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      padding: "10px 0 16px"
    }
  }, NAV.concat([{
    id: "contact",
    label: "Contact"
  }]).map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    onClick: () => go(n.id),
    style: {
      textAlign: "left",
      border: "none",
      background: "none",
      padding: "12px 4px",
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 18,
      color: "var(--ink-900)",
      borderBottom: "1px solid var(--sand-200)"
    }
  }, n.label))))));
}
function Eyebrow({
  children,
  tone = "signal"
}) {
  const color = tone === "paper" ? "var(--paper)" : tone === "ink" ? "var(--ink-900)" : "var(--signal-600)";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 0,
      borderTop: "2px solid currentColor"
    }
  }), children);
}
function SectionHead({
  eyebrow,
  title,
  intro,
  tone = "ink",
  align = "left",
  max = 720
}) {
  const titleColor = tone === "paper" ? "var(--paper)" : "var(--ink-900)";
  const introColor = tone === "paper" ? "var(--text-on-dark-muted)" : "var(--text-secondary)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: max,
      margin: align === "center" ? "0 auto" : 0,
      textAlign: align
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18,
      display: "flex",
      justifyContent: align === "center" ? "center" : "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: tone === "paper" ? "paper" : "signal"
  }, eyebrow)), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(2rem, 4vw, 3rem)",
      lineHeight: 1.04,
      letterSpacing: "-0.03em",
      color: titleColor,
      margin: 0
    }
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontSize: 19,
      lineHeight: 1.55,
      color: introColor,
      maxWidth: "60ch",
      marginLeft: align === "center" ? "auto" : 0,
      marginRight: align === "center" ? "auto" : 0
    }
  }, intro));
}

/* Duotone photo placeholder — where real ink+signal duotone photography goes. */
function Photo({
  label = "Workshop in session",
  h = 320,
  tone = "ink",
  motif = "ripple",
  radius = 18,
  style
}) {
  const bg = tone === "signal" ? "var(--signal-500)" : tone === "volt" ? "var(--volt-500)" : "var(--ink-900)";
  const fg = tone === "volt" ? "var(--ink-900)" : "var(--paper)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: h,
      borderRadius: radius,
      border: "2px solid var(--ink-900)",
      background: bg,
      overflow: "hidden",
      display: "flex",
      alignItems: "flex-end",
      boxShadow: "var(--shadow-hard)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/motif-${motif}.svg`,
    alt: "",
    style: {
      position: "absolute",
      right: -40,
      top: -40,
      width: 240,
      opacity: tone === "ink" ? 0.5 : 0.85,
      filter: tone === "ink" ? "invert(1)" : "brightness(0)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      margin: 16,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: fg,
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "zap",
    size: 14,
    color: fg
  }), " ", label));
}
function CTABand({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--signal-500)",
      borderTop: "2px solid var(--ink-900)",
      borderBottom: "2px solid var(--ink-900)"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      padding: "clamp(56px,8vw,96px) clamp(20px,5vw,56px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 28,
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(2.2rem,4.5vw,3.4rem)",
      lineHeight: 1.02,
      letterSpacing: "-0.03em",
      color: "#fff",
      margin: 0
    }
  }, "Ready to get unstuck?"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 19,
      color: "rgba(255,255,255,0.9)",
      maxWidth: "48ch"
    }
  }, "Tell us what's stuck. We'll tell you the fastest way through \u2014 usually in a week.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ink",
    size: "lg",
    onClick: () => onNavigate("contact"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Book a salvo"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNavigate("workshops")
  }, "See the formats")))));
}
function Footer({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--ink-900)",
      color: "var(--paper)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/motif-ripple.svg",
    alt: "",
    style: {
      position: "absolute",
      left: -80,
      bottom: -80,
      width: 300,
      opacity: 0.12,
      filter: "invert(1)"
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      padding: "clamp(48px,7vw,80px) clamp(20px,5vw,56px) 32px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 40,
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement(SalvoLogo, {
    tone: "paper",
    size: 32
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      color: "var(--text-on-dark-muted)",
      fontSize: 15.5,
      lineHeight: 1.6
    }
  }, "Product consulting and workshop facilitation. We bring the fire \u2014 you bring the product worth saving.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 56,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(FootCol, {
    title: "Company",
    items: [["Services", "services"], ["Workshops", "workshops"], ["Pricing", "pricing"], ["About", "about"]],
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(FootCol, {
    title: "Get in touch",
    items: [["Contact", "contact"], ["hello@salvo.studio", "contact"], ["Book a salvo", "contact"]],
    onNavigate: onNavigate
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      paddingTop: 22,
      borderTop: "1px solid var(--border-on-dark)",
      display: "flex",
      flexWrap: "wrap",
      gap: 12,
      justifyContent: "space-between",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.04em",
      color: "var(--text-on-dark-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Salvo Innovation"), /*#__PURE__*/React.createElement("span", null, "SALV\u014C \u2014 \u201CI SAVE\u201D \xB7 51.5074\xB0 N, 0.1278\xB0 W"))));
}
function FootCol({
  title,
  items,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--volt-500)",
      marginBottom: 14
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => onNavigate(it[1]),
    style: {
      textAlign: "left",
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "var(--paper)",
      fontFamily: "var(--font-body)",
      fontSize: 15,
      padding: 0
    }
  }, it[0]))));
}
Object.assign(window, {
  Container,
  Nav,
  Footer,
  CTABand,
  SectionHead,
  Eyebrow,
  Photo
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
/* Contact screen — uses the Salvo form primitives. */
const {
  Button: CtButton,
  Input: CtInput,
  Textarea: CtTextarea,
  Select: CtSelect,
  Card: CtCard
} = window.SalvoInnovationDesignSystem_cdc9ce;
function ContactScreen({
  onNavigate
}) {
  const [sent, setSent] = React.useState(false);
  const details = [{
    icon: "mail",
    label: "Email",
    value: "hello@salvo.studio"
  }, {
    icon: "message-circle",
    label: "Response time",
    value: "Within 1 working day"
  }, {
    icon: "map-pin",
    label: "Based in",
    value: "London · working worldwide"
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "clamp(48px,7vw,88px) 0 clamp(56px,8vw,104px)",
      background: "var(--paper)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: 44
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Book a salvo"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(2.4rem,5vw,4rem)",
      lineHeight: 0.99,
      letterSpacing: "-0.035em",
      margin: "18px 0 0"
    }
  }, "Tell us what's stuck."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      fontSize: 19,
      lineHeight: 1.55,
      color: "var(--text-secondary)",
      maxWidth: "44ch"
    }
  }, "A sentence or two is plenty to start. We'll reply with the fastest way through \u2014 and whether a workshop or a longer engagement fits."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, details.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.label,
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 12,
      background: "var(--white)",
      border: "2px solid var(--ink-900)",
      boxShadow: "var(--shadow-hard)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: d.icon,
    size: 20,
    color: "var(--signal-500)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, d.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16.5,
      color: "var(--ink-900)"
    }
  }, d.value)))))), /*#__PURE__*/React.createElement(CtCard, {
    variant: "sticker",
    style: {
      padding: "clamp(24px,4vw,36px)"
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "40px 10px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: "50%",
      background: "var(--volt-500)",
      border: "2px solid var(--ink-900)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 22px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 32,
    color: "var(--ink-900)",
    stroke: 3
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 26,
      margin: "0 0 8px"
    }
  }, "Message away."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      margin: "0 0 22px"
    }
  }, "We'll be in touch within a working day. Keep an eye on your inbox."), /*#__PURE__*/React.createElement(CtButton, {
    variant: "secondary",
    onClick: () => setSent(false)
  }, "Send another")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(CtInput, {
    id: "c-name",
    label: "Your name",
    placeholder: "Jane Marlow",
    required: true
  }), /*#__PURE__*/React.createElement(CtInput, {
    id: "c-email",
    label: "Work email",
    type: "email",
    placeholder: "jane@acme.com",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(CtSelect, {
    id: "c-team",
    label: "Team size",
    defaultValue: "2\u201310"
  }, /*#__PURE__*/React.createElement("option", null, "Just me"), /*#__PURE__*/React.createElement("option", null, "2\u201310"), /*#__PURE__*/React.createElement("option", null, "11\u201350"), /*#__PURE__*/React.createElement("option", null, "50+")), /*#__PURE__*/React.createElement(CtSelect, {
    id: "c-int",
    label: "Interested in",
    defaultValue: "A workshop"
  }, /*#__PURE__*/React.createElement("option", null, "A workshop"), /*#__PURE__*/React.createElement("option", null, "Product consulting"), /*#__PURE__*/React.createElement("option", null, "Ongoing (Fleet)"), /*#__PURE__*/React.createElement("option", null, "Not sure yet"))), /*#__PURE__*/React.createElement(CtTextarea, {
    id: "c-msg",
    label: "What's stuck?",
    rows: 4,
    placeholder: "We can't agree on what to build next\u2026",
    required: true
  }), /*#__PURE__*/React.createElement(CtButton, {
    variant: "primary",
    size: "lg",
    type: "submit",
    fullWidth: true,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Send it"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      color: "var(--text-muted)",
      textAlign: "center",
      margin: 0
    }
  }, "No spam. No 80-slide readouts. Just a fast, human reply.")))))));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
/* Home screen. */
const {
  Button: SButton,
  Card: SCard,
  Stat: SStat,
  Badge: SBadge
} = window.SalvoInnovationDesignSystem_cdc9ce;
function HeroHome({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--paper)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/brand-flags-salvo.svg",
    alt: "",
    style: {
      position: "absolute",
      right: 16,
      top: 8,
      width: "min(740px, 76vw)",
      opacity: 0.97,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative",
      padding: "clamp(104px,13vw,156px) clamp(20px,5vw,56px) clamp(48px,7vw,90px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 860
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Product consulting & workshop facilitation"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(3rem, 8vw, 6.2rem)",
      lineHeight: 0.96,
      letterSpacing: "-0.035em",
      color: "var(--ink-900)",
      margin: "20px 0 0"
    }
  }, "Your product is stuck.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--signal-500)"
    }
  }, "We bring the fire.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 26,
      fontSize: "clamp(18px,2.4vw,22px)",
      lineHeight: 1.5,
      color: "var(--text-secondary)",
      maxWidth: "54ch"
    }
  }, "Salvo runs sharp, decisive workshops that turn months of debate into a week of progress \u2014 for scrappy startups and big teams alike."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34,
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(SButton, {
    variant: "primary",
    size: "lg",
    onClick: () => onNavigate("contact"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Book a salvo"), /*#__PURE__*/React.createElement(SButton, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNavigate("workshops")
  }, "See the formats")))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "2px solid var(--ink-900)",
      background: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      padding: "20px clamp(20px,5vw,56px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 28,
      flexWrap: "wrap",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "Trusted by teams at"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "clamp(20px,4vw,52px)",
      flexWrap: "wrap",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 20,
      color: "var(--ink-800)",
      opacity: 0.75
    }
  }, /*#__PURE__*/React.createElement("span", null, "Northwind"), /*#__PURE__*/React.createElement("span", null, "Vela"), /*#__PURE__*/React.createElement("span", null, "Harbor&Co"), /*#__PURE__*/React.createElement("span", null, "Kestrel"), /*#__PURE__*/React.createElement("span", null, "Loomis"))))));
}
function WhatWeDo({
  onNavigate
}) {
  const offers = [{
    icon: "compass",
    tag: "Consulting",
    title: "Digital product consulting",
    body: "Strategy, discovery and direction for products that have lost their bearings. We help you find the next right thing to build — and the confidence to ship it.",
    points: ["Product strategy & roadmaps", "Discovery & user research", "Embedded with your team"],
    tone: "default"
  }, {
    icon: "zap",
    tag: "Facilitation",
    title: "Workshop design & facilitation",
    body: "High-energy, decision-forward workshops for leadership and product teams. We design the session, run the room, and hand you outcomes — not homework.",
    points: ["Product sprints + a tested prototype", "Strategy & alignment days", "Remote, in-person or hybrid"],
    tone: "ink"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "clamp(64px,9vw,112px) 0"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "What we do",
    title: "Two ways we light a fire",
    intro: "Whether you need a steady hand over months or a decisive burst in a week \u2014 we meet your product where it's stuck."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: 22
    }
  }, offers.map(o => /*#__PURE__*/React.createElement(SCard, {
    key: o.tag,
    variant: "sticker",
    tone: o.tone,
    interactive: true,
    style: {
      padding: 34
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      width: 56,
      height: 56,
      borderRadius: 14,
      alignItems: "center",
      justifyContent: "center",
      background: o.tone === "ink" ? "var(--signal-500)" : "var(--ink-900)",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: o.icon,
    size: 28,
    color: o.tone === "ink" ? "#fff" : "var(--volt-500)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: o.tone === "ink" ? "var(--volt-500)" : "var(--signal-600)",
      marginBottom: 10
    }
  }, o.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 28,
      lineHeight: 1.05,
      letterSpacing: "-0.02em",
      margin: 0,
      color: o.tone === "ink" ? "var(--paper)" : "var(--ink-900)"
    }
  }, o.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 16.5,
      lineHeight: 1.55,
      color: o.tone === "ink" ? "var(--text-on-dark-muted)" : "var(--text-secondary)"
    }
  }, o.body), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: "20px 0 26px",
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 11
    }
  }, o.points.map(p => /*#__PURE__*/React.createElement("li", {
    key: p,
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center",
      fontSize: 15.5,
      fontWeight: 600,
      color: o.tone === "ink" ? "var(--paper)" : "var(--ink-900)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18,
    color: "var(--signal-500)",
    stroke: 3
  }), p))), /*#__PURE__*/React.createElement(SButton, {
    variant: o.tone === "ink" ? "volt" : "ink",
    size: "md",
    onClick: () => onNavigate(o.tag === "Facilitation" ? "workshops" : "services"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 16
    })
  }, "Explore ", o.tag.toLowerCase()))))));
}
function Method() {
  const steps = [{
    n: "01",
    t: "Frame",
    d: "We pin down the real problem and the decision that has to be made. No solution-jumping."
  }, {
    n: "02",
    t: "Diverge",
    d: "Fast, structured idea generation. Everyone contributes — the loudest voice doesn't win."
  }, {
    n: "03",
    t: "Decide",
    d: "We converge to one clear direction the room actually agrees on. On the day."
  }, {
    n: "04",
    t: "Prototype",
    d: "You leave with something testable — a prototype, a plan, a next step. Not a deck."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "clamp(64px,9vw,112px) 0",
      background: "var(--white)",
      borderTop: "2px solid var(--ink-900)",
      borderBottom: "2px solid var(--ink-900)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "The Salvo Method",
    title: "Four moves. One week. A decision you can build on."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
      gap: 20
    }
  }, steps.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      borderTop: "3px solid var(--signal-500)",
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: "0.12em",
      color: "var(--signal-600)"
    }
  }, s.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 24,
      margin: "10px 0 8px",
      letterSpacing: "-0.02em"
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      lineHeight: 1.55,
      color: "var(--text-secondary)",
      margin: 0
    }
  }, s.d))))));
}
function StatsBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--ink-900)",
      color: "var(--paper)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/motif-ripple.svg",
    alt: "",
    style: {
      position: "absolute",
      right: -60,
      top: -60,
      width: 320,
      opacity: 0.14,
      filter: "invert(1)"
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      padding: "clamp(56px,8vw,96px) clamp(20px,5vw,56px)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(SStat, {
    tone: "paper",
    value: "Days",
    label: "Idea \u2192 tested prototype"
  }), /*#__PURE__*/React.createElement(SStat, {
    tone: "paper",
    value: "120+",
    label: "Workshops facilitated"
  }), /*#__PURE__*/React.createElement(SStat, {
    tone: "paper",
    value: "40+",
    label: "Teams unstuck"
  }), /*#__PURE__*/React.createElement(SStat, {
    tone: "paper",
    value: "9/10",
    label: "Would run another"
  }))));
}
function Testimonial({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "clamp(64px,9vw,112px) 0"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    size: "narrow",
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "quote",
    size: 44,
    color: "var(--signal-500)"
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(1.6rem,3.4vw,2.5rem)",
      lineHeight: 1.15,
      letterSpacing: "-0.02em",
      color: "var(--ink-900)",
      margin: "20px 0 28px"
    }
  }, "\u201CWe'd argued about this roadmap for six months. Salvo got us to a decision \u2014 a real one \u2014 by Thursday lunch.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: "50%",
      background: "var(--signal-500)",
      border: "2px solid var(--ink-900)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      color: "#fff"
    }
  }, "RM"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700
    }
  }, "Renata Mbeki"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-muted)"
    }
  }, "VP Product, Northwind")))));
}
function HomeScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HeroHome, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(WhatWeDo, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(Method, null), /*#__PURE__*/React.createElement(StatsBand, null), /*#__PURE__*/React.createElement(Testimonial, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(CTABand, {
    onNavigate: onNavigate
  }));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Icons.jsx
try { (() => {
/* Icons — inline Lucide (ISC) path data so icons inherit currentColor and
   recolor cleanly in React. Salvo standardizes on Lucide, 2px stroke. */
const {
  createElement: h
} = React;
const PATHS = {
  "arrow-right": ["M5 12h14", "m12 5 7 7-7 7"],
  "arrow-up-right": ["M7 7h10v10", "M7 17 17 7"],
  target: [{
    c: [12, 12, 10]
  }, {
    c: [12, 12, 6]
  }, {
    c: [12, 12, 2]
  }],
  compass: [{
    c: [12, 12, 10]
  }, "M16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88Z"],
  zap: ["M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"],
  users: ["M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", {
    c: [9, 7, 4]
  }, "M22 21v-2a4 4 0 0 0-3-3.87", "M16 3.13a4 4 0 0 1 0 7.75"],
  anchor: [{
    c: [12, 5, 3]
  }, "M12 22V8", "M5 12H2a10 10 0 0 0 20 0h-3"],
  calendar: [{
    r: [3, 4, 18, 18, 2]
  }, "M3 10h18", "M8 2v4", "M16 2v4"],
  check: ["M20 6 9 17l-5-5"],
  "check-big": ["M21.801 10A10 10 0 1 1 17 3.335", "m9 11 3 3L22 4"],
  menu: ["M4 12h16", "M4 6h16", "M4 18h16"],
  x: ["M18 6 6 18", "M6 6l12 12"],
  star: ["M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"],
  "map-pin": ["M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0", {
    c: [12, 10, 3]
  }],
  mail: [{
    r: [2, 4, 20, 16, 2]
  }, "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"],
  layers: ["M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z", "m6.08 9.5-3.49 1.59a1 1 0 0 0 0 1.83l8.59 3.91a2 2 0 0 0 1.65 0l8.59-3.9a1 1 0 0 0 0-1.83l-3.49-1.6", "m6.08 14.5-3.49 1.59a1 1 0 0 0 0 1.83l8.59 3.91a2 2 0 0 0 1.65 0l8.59-3.9a1 1 0 0 0 0-1.83l-3.49-1.6"],
  "message-circle": ["M7.9 20A9 9 0 1 0 4 16.1L2 22Z"],
  clock: [{
    c: [12, 12, 10]
  }, "M12 6v6l4 2"],
  lightbulb: ["M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5", "M9 18h6", "M10 22h4"],
  rocket: ["M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z", "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z", "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"],
  "trending-up": ["M16 7h6v6", "m22 7-8.5 8.5-5-5L2 17"],
  quote: ["M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.5a.5.5 0 0 1 .5.5v.5a2 2 0 0 1-2 2 1 1 0 1 0 0 2 4 4 0 0 0 4-4V5a2 2 0 0 0-2-2z", "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.5a.5.5 0 0 1 .5.5v.5a2 2 0 0 1-2 2 1 1 0 1 0 0 2 4 4 0 0 0 4-4V5a2 2 0 0 0-2-2z"],
  flag: ["M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z", "M4 22v-7"]
};
function Icon({
  name,
  size = 24,
  stroke = 2,
  color = "currentColor",
  style,
  ...rest
}) {
  const segs = PATHS[name] || [];
  const children = segs.map((s, i) => {
    if (typeof s === "string") return h("path", {
      key: i,
      d: s
    });
    if (s.c) return h("circle", {
      key: i,
      cx: s.c[0],
      cy: s.c[1],
      r: s.c[2]
    });
    if (s.r) return h("rect", {
      key: i,
      x: s.r[0],
      y: s.r[1],
      width: s.r[2],
      height: s.r[3],
      rx: s.r[4]
    });
    return null;
  });
  return h("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style,
    "aria-hidden": true,
    ...rest
  }, children);
}
Object.assign(window, {
  Icon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PricingScreen.jsx
try { (() => {
/* Pricing screen. */
const {
  Button: PrButton,
  Card: PrCard,
  Badge: PrBadge,
  Tabs: PrTabs,
  Accordion: PrAccordion
} = window.SalvoInnovationDesignSystem_cdc9ce;
function PricingScreen({
  onNavigate
}) {
  const tiers = [{
    name: "Spark",
    price: "$5k",
    unit: "/ session",
    tag: "Single workshop",
    desc: "One sharp, facilitated session to break a specific logjam.",
    features: ["Half- or full-day workshop", "Agenda designed around your decision", "Facilitation + digital whiteboard", "Outcomes summary next day"],
    cta: "Book a Spark",
    highlight: false
  }, {
    name: "Salvo",
    price: "$15k",
    unit: "/ sprint",
    tag: "Most popular",
    desc: "The full product sprint — from fuzzy problem to a custom, tested prototype.",
    features: ["Full product sprint", "Pre-sprint scoping & recruiting", "A custom prototype + 5 user tests", "Decision, artefacts & next steps", "2-week follow-up check-in"],
    cta: "Book a Salvo",
    highlight: true
  }, {
    name: "Fleet",
    price: "Custom",
    unit: "",
    tag: "Ongoing",
    desc: "Embedded consulting and a cadence of workshops over months.",
    features: ["Fractional product leadership", "Recurring strategy & sprint cadence", "Team facilitation coaching", "Quarterly roadmap resets"],
    cta: "Talk to us",
    highlight: false
  }];
  const faqs = [{
    id: "p1",
    title: "What's not included?",
    content: "Travel and venue for in-person sessions are billed at cost. Everything else — design, facilitation, tools, write-ups — is in the price."
  }, {
    id: "p2",
    title: "Can we mix consulting and workshops?",
    content: "That's exactly what Fleet is for. We'll shape a cadence that fits how your team actually works."
  }, {
    id: "p3",
    title: "Do you offer a guarantee?",
    content: "If you finish a Salvo sprint and don't have a clear decision and a tested prototype, we'll make it right. That's never happened, but the promise stands."
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--paper)",
      borderBottom: "2px solid var(--ink-900)"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      padding: "clamp(56px,8vw,96px) clamp(20px,5vw,56px)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Pricing")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(2.6rem,6vw,4.4rem)",
      lineHeight: 0.99,
      letterSpacing: "-0.035em",
      margin: 0
    }
  }, "Clear prices. No surprises."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      fontSize: 20,
      color: "var(--text-secondary)",
      maxWidth: "46ch",
      margin: "20px auto 0"
    }
  }, "Pick the burst that fits. Every option ends with a decision you can build on."))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "clamp(48px,7vw,88px) 0"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: 22,
      alignItems: "stretch"
    }
  }, tiers.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.name,
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(PrCard, {
    variant: "sticker",
    tone: t.highlight ? "ink" : "default",
    style: {
      padding: 32,
      display: "flex",
      flexDirection: "column",
      width: "100%",
      position: "relative",
      ...(t.highlight ? {
        boxShadow: "6px 6px 0 var(--signal-500)"
      } : {})
    }
  }, t.highlight && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -14,
      right: 22
    }
  }, /*#__PURE__*/React.createElement(PrBadge, {
    tone: "signal"
  }, "Most popular")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: t.highlight ? "var(--volt-500)" : "var(--signal-600)"
    }
  }, t.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 30,
      margin: "10px 0 4px",
      letterSpacing: "-0.02em",
      color: t.highlight ? "var(--paper)" : "var(--ink-900)"
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 6,
      margin: "8px 0 4px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 44,
      letterSpacing: "-0.03em",
      color: t.highlight ? "var(--volt-500)" : "var(--signal-500)"
    }
  }, t.price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: t.highlight ? "var(--text-on-dark-muted)" : "var(--text-muted)"
    }
  }, t.unit)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      lineHeight: 1.5,
      color: t.highlight ? "var(--text-on-dark-muted)" : "var(--text-secondary)",
      margin: "6px 0 22px"
    }
  }, t.desc), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      flex: 1
    }
  }, t.features.map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    style: {
      display: "flex",
      gap: 10,
      fontSize: 15,
      color: t.highlight ? "var(--paper)" : "var(--ink-900)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18,
    color: "var(--signal-500)",
    stroke: 3,
    style: {
      flex: "none",
      marginTop: 1
    }
  }), f))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(PrButton, {
    variant: t.highlight ? "volt" : "primary",
    size: "md",
    fullWidth: true,
    onClick: () => onNavigate("contact")
  }, t.cta)))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "clamp(48px,7vw,88px) 0",
      background: "var(--white)",
      borderTop: "2px solid var(--ink-900)"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    size: "narrow"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    align: "center",
    eyebrow: "Pricing FAQ",
    title: "Before you ask"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(PrAccordion, {
    items: faqs,
    defaultOpen: ["p1"]
  })))), /*#__PURE__*/React.createElement(CTABand, {
    onNavigate: onNavigate
  }));
}
Object.assign(window, {
  PricingScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PricingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesScreen.jsx
try { (() => {
/* Services screen. */
const {
  Button: SvButton,
  Card: SvCard,
  Accordion: SvAccordion
} = window.SalvoInnovationDesignSystem_cdc9ce;
function ServicesScreen({
  onNavigate
}) {
  const lines = [{
    tag: "01 — Consulting",
    icon: "compass",
    title: "Digital product consulting",
    lead: "For products that have lost their bearings.",
    body: "We embed with your team to find the next right thing to build. Strategy that survives contact with reality, discovery that kills bad bets early, and a roadmap your whole org can rally behind.",
    items: ["Product & portfolio strategy", "Discovery & customer research", "Roadmap & prioritisation", "Fractional product leadership"],
    tone: "default"
  }, {
    tag: "02 — Facilitation",
    icon: "zap",
    title: "Workshop design & facilitation",
    lead: "For decisions that have to happen now.",
    body: "We design and run high-energy sessions that get a room to a real decision — fast. You bring the people who can decide; we bring the structure, the momentum, and a custom, tested prototype to show for it.",
    items: ["Product sprints", "A custom, tested prototype", "Strategy & alignment days", "Discovery & kickoff workshops"],
    tone: "ink"
  }];
  const faqs = [{
    id: "f1",
    title: "Do you work with startups or only big companies?",
    content: "Both. We've run sprints for three-person startups and alignment days for 200-person product orgs. The format flexes; the energy doesn't."
  }, {
    id: "f2",
    title: "Remote, in person, or hybrid?",
    content: "All three. Our remote sessions are designed for remote — not an in-person workshop bolted onto a video call."
  }, {
    id: "f3",
    title: "How quickly can you start?",
    content: "Most engagements kick off within two weeks. A single workshop can often be booked sooner."
  }, {
    id: "f4",
    title: "What do we actually walk away with?",
    content: "A decision, the artefacts behind it, and a clear next step. Usually a tested prototype or a one-page plan — never an 80-slide readout."
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--paper)",
      position: "relative",
      overflow: "hidden",
      borderBottom: "2px solid var(--ink-900)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/brand-stickies.svg",
    alt: "",
    style: {
      position: "absolute",
      right: -10,
      bottom: -24,
      width: "min(40vw, 400px)",
      opacity: 0.97,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      padding: "clamp(56px,8vw,104px) clamp(20px,5vw,56px)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 780
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Services"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(2.6rem,6vw,4.6rem)",
      lineHeight: 0.98,
      letterSpacing: "-0.035em",
      margin: "18px 0 0",
      color: "var(--ink-900)"
    }
  }, "Steady guidance, or a decisive burst."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 22,
      fontSize: 20,
      lineHeight: 1.5,
      color: "var(--text-secondary)",
      maxWidth: "52ch"
    }
  }, "Two service lines, one goal: get your product moving and keep it moving.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "clamp(56px,8vw,104px) 0"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 56
    }
  }, lines.map((l, idx) => /*#__PURE__*/React.createElement("div", {
    key: l.tag,
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: 36,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      order: idx % 2 ? 2 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--signal-600)"
    }
  }, l.tag), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(2rem,4vw,2.8rem)",
      letterSpacing: "-0.03em",
      lineHeight: 1.04,
      margin: "12px 0 6px"
    }
  }, l.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      fontWeight: 700,
      color: "var(--signal-600)",
      margin: "0 0 12px"
    }
  }, l.lead), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16.5,
      lineHeight: 1.6,
      color: "var(--text-secondary)",
      maxWidth: "50ch"
    }
  }, l.body), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: "flex",
      flexWrap: "wrap",
      gap: 10
    }
  }, l.items.map(it => /*#__PURE__*/React.createElement("span", {
    key: it,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      border: "1.5px solid var(--ink-900)",
      borderRadius: 999,
      padding: "7px 14px",
      fontSize: 14.5,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    color: "var(--signal-500)",
    stroke: 3
  }), it)))), /*#__PURE__*/React.createElement("div", {
    style: {
      order: idx % 2 ? 1 : 2
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    h: 300,
    tone: l.tone === "ink" ? "ink" : l.tone === "volt" ? "volt" : "signal",
    motif: l.tone === "ink" ? "ripple" : "burst-rays",
    label: l.title
  }))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "clamp(56px,8vw,96px) 0",
      background: "var(--white)",
      borderTop: "2px solid var(--ink-900)"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    size: "narrow"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    align: "center",
    eyebrow: "Questions",
    title: "The usual questions"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(SvAccordion, {
    items: faqs,
    defaultOpen: ["f1"]
  })))), /*#__PURE__*/React.createElement(CTABand, {
    onNavigate: onNavigate
  }));
}
Object.assign(window, {
  ServicesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WorkshopsScreen.jsx
try { (() => {
/* Workshops screen — techniques / example exercises. */
const {
  Button: WkButton,
  Card: WkCard,
  Badge: WkBadge,
  Tabs: WkTabs
} = window.SalvoInnovationDesignSystem_cdc9ce;
function WorkshopsScreen({
  onNavigate
}) {
  const [cat, setCat] = React.useState("all");
  const techniques = [{
    cat: "diverge",
    name: "Crazy 8s",
    dur: "8 min",
    group: "Any size",
    desc: "Eight ideas, eight minutes, one folded sheet. Quantity beats precious. Breaks the blank page every time.",
    icon: "zap"
  }, {
    cat: "decide",
    name: "Dot voting",
    dur: "10 min",
    group: "3–30",
    desc: "Everyone gets dots, the wall makes the call. Silent, fast, and immune to the loudest voice in the room.",
    icon: "target"
  }, {
    cat: "frame",
    name: "How Might We",
    dur: "15 min",
    group: "Any size",
    desc: "Turn problems and gripes into open, optimistic questions you can actually design against.",
    icon: "lightbulb"
  }, {
    cat: "frame",
    name: "Lightning Demos",
    dur: "20 min",
    group: "4–12",
    desc: "Steal shamelessly. The team demos great solutions from anywhere, then we mine them for ideas.",
    icon: "trending-up"
  }, {
    cat: "decide",
    name: "The Decider",
    dur: "5 min",
    group: "Leadership",
    desc: "When consensus stalls, one named decider breaks the tie. Clarity beats comfortable ambiguity.",
    icon: "flag"
  }, {
    cat: "diverge",
    name: "Note-and-Vote",
    dur: "12 min",
    group: "Any size",
    desc: "Generate solo, share together, vote silently. The fairest way to harvest a group's best thinking.",
    icon: "users"
  }, {
    cat: "prototype",
    name: "Storyboarding",
    dur: "45 min",
    group: "4–10",
    desc: "Sketch the solution frame by frame before anyone builds a thing. Cheap to change, costly to skip.",
    icon: "layers"
  }, {
    cat: "prototype",
    name: "Test with 5",
    dur: "1 day",
    group: "5 users",
    desc: "Five real users, one prototype, a wall of patterns. The fastest reality check you'll ever run.",
    icon: "check-big"
  }];
  const cats = [{
    id: "all",
    label: "All"
  }, {
    id: "frame",
    label: "Frame"
  }, {
    id: "diverge",
    label: "Diverge"
  }, {
    id: "decide",
    label: "Decide"
  }, {
    id: "prototype",
    label: "Prototype"
  }];
  const shown = cat === "all" ? techniques : techniques.filter(t => t.cat === cat);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--ink-900)",
      color: "var(--paper)",
      position: "relative",
      overflow: "hidden",
      borderBottom: "2px solid var(--ink-900)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/brand-stickies.svg",
    alt: "",
    style: {
      position: "absolute",
      right: -16,
      top: 24,
      width: "min(36vw, 360px)",
      opacity: 0.97,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      padding: "clamp(56px,8vw,104px) clamp(20px,5vw,56px)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 600
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "paper"
  }, "Workshop techniques"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(2.6rem,6vw,4.6rem)",
      lineHeight: 0.98,
      letterSpacing: "-0.035em",
      margin: "18px 0 0",
      color: "var(--paper)"
    }
  }, "The exercises behind the magic."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 22,
      fontSize: 20,
      lineHeight: 1.5,
      color: "var(--text-on-dark-muted)",
      maxWidth: "54ch"
    }
  }, "A peek at the plays we run in the room. Steal them for your own sessions \u2014 or let us bring the whole playbook.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "clamp(48px,7vw,88px) 0"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto",
      maxWidth: "100%"
    }
  }, /*#__PURE__*/React.createElement(WkTabs, {
    items: cats,
    value: cat,
    onChange: setCat
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: 20
    }
  }, shown.map(t => /*#__PURE__*/React.createElement(WkCard, {
    key: t.name,
    variant: "sticker",
    interactive: true,
    style: {
      padding: 26,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 12,
      background: "var(--volt-500)",
      border: "2px solid var(--ink-900)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: t.icon,
    size: 24,
    color: "var(--ink-900)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--signal-600)"
    }
  }, t.cat)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 22,
      margin: "0 0 8px",
      letterSpacing: "-0.02em"
    }
  }, t.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.5,
      color: "var(--text-secondary)",
      margin: "0 0 18px",
      flex: 1
    }
  }, t.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      fontWeight: 700,
      color: "var(--ink-800)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 14
  }), t.dur), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      fontWeight: 700,
      color: "var(--ink-800)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "users",
    size: 14
  }), t.group))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "clamp(56px,8vw,96px) 0",
      background: "var(--white)",
      borderTop: "2px solid var(--ink-900)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
      gap: 40,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Bring us in",
    title: "Want the whole playbook in your room?",
    intro: "We design the agenda around your decision, run every minute of it, and leave your team with the artefacts and the momentum to keep going."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26,
      display: "flex",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(WkButton, {
    variant: "primary",
    size: "lg",
    onClick: () => onNavigate("contact"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Book a workshop"), /*#__PURE__*/React.createElement(WkButton, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNavigate("pricing")
  }, "See pricing"))), /*#__PURE__*/React.createElement(Photo, {
    h: 300,
    tone: "signal",
    motif: "burst-rays",
    label: "Product sprint"
  })))), /*#__PURE__*/React.createElement(CTABand, {
    onNavigate: onNavigate
  }));
}
Object.assign(window, {
  WorkshopsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WorkshopsScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BurstMark = __ds_scope.BurstMark;

__ds_ns.SalvoLogo = __ds_scope.SalvoLogo;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
