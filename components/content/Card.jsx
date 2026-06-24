import React from "react";

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

export function Card({
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
  const cls = [
    "salvo-card",
    `salvo-card--${variant}`,
    tone !== "default" ? `salvo-card--${tone}` : "",
    interactive ? "salvo-card--interactive" : "",
    className,
  ].filter(Boolean).join(" ");
  return (
    <Tag className={cls} {...rest}>
      {children}
    </Tag>
  );
}
