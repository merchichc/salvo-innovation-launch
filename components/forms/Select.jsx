import React from "react";
import { useFieldStyles } from "./Input.jsx";

/* Select — native select with Salvo field styling and a chevron. */

export function Select({ label, hint, error, children, className = "", id, ...rest }) {
  useFieldStyles();
  return (
    <label className="salvo-field-wrap" htmlFor={id}>
      {label && <span className="salvo-field-label">{label}</span>}
      <span className="salvo-select-wrap">
        <select
          id={id}
          className={["salvo-field", "salvo-field--select", error ? "salvo-field--invalid" : "", className].filter(Boolean).join(" ")}
          {...rest}
        >
          {children}
        </select>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
      </span>
      {(error || hint) && (
        <span className={"salvo-field-hint" + (error ? " salvo-field-hint--error" : "")}>
          {error || hint}
        </span>
      )}
    </label>
  );
}
