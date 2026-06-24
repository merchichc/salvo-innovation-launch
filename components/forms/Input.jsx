import React from "react";

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
export function useFieldStyles() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-salvo", "fields");
  el.textContent = FIELD_CSS;
  document.head.appendChild(el);
}

function Wrap({ label, hint, error, htmlFor, children }) {
  return (
    <label className="salvo-field-wrap" htmlFor={htmlFor}>
      {label && <span className="salvo-field-label">{label}</span>}
      {children}
      {(error || hint) && (
        <span className={"salvo-field-hint" + (error ? " salvo-field-hint--error" : "")}>
          {error || hint}
        </span>
      )}
    </label>
  );
}

export function Input({ label, hint, error, className = "", id, ...rest }) {
  useFieldStyles();
  return (
    <Wrap label={label} hint={hint} error={error} htmlFor={id}>
      <input
        id={id}
        className={["salvo-field", error ? "salvo-field--invalid" : "", className].filter(Boolean).join(" ")}
        {...rest}
      />
    </Wrap>
  );
}
