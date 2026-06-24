import React, { useState } from "react";

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

export function Accordion({ items = [], allowMultiple = false, defaultOpen = [], className = "", ...rest }) {
  useStyles();
  const [open, setOpen] = useState(new Set(defaultOpen));
  const toggle = (id) => {
    setOpen((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };
  return (
    <div className={["salvo-acc", className].filter(Boolean).join(" ")} {...rest}>
      {items.map((it) => {
        const isOpen = open.has(it.id);
        return (
          <div className="salvo-acc-item" key={it.id}>
            <button
              className="salvo-acc-head"
              aria-expanded={isOpen}
              onClick={() => toggle(it.id)}
            >
              <span>{it.title}</span>
              <svg className="salvo-acc-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
            </button>
            <div className={"salvo-acc-panel" + (isOpen ? " salvo-acc-panel--open" : "")}>
              <div className="salvo-acc-body">{it.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
