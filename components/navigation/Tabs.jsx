import React, { useState } from "react";

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

export function Tabs({ items = [], value, defaultValue, onChange, tone = "ink", className = "", ...rest }) {
  useStyles();
  const [internal, setInternal] = useState(defaultValue ?? (items[0] && items[0].id));
  const active = value !== undefined ? value : internal;
  const select = (id) => {
    if (value === undefined) setInternal(id);
    onChange && onChange(id);
  };
  return (
    <div
      role="tablist"
      className={["salvo-tabs", tone === "signal" ? "salvo-tabs--signal" : "", className].filter(Boolean).join(" ")}
      {...rest}
    >
      {items.map((it) => (
        <button
          key={it.id}
          role="tab"
          aria-selected={active === it.id}
          className="salvo-tab"
          onClick={() => select(it.id)}
        >
          {it.label}
        </button>
      ))}
    </div>
  );
}
