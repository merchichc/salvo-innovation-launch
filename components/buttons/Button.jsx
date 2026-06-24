import React from "react";

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

export function Button({
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
  const cls = [
    "salvo-btn",
    `salvo-btn--${variant}`,
    `salvo-btn--${size}`,
    fullWidth ? "salvo-btn--full" : "",
    className,
  ].filter(Boolean).join(" ");
  return (
    <Tag className={cls} {...rest}>
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
