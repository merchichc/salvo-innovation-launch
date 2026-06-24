import React from "react";
import { useFieldStyles } from "./Input.jsx";

/* Textarea — multiline field, same Salvo field styling. */

export function Textarea({ label, hint, error, rows = 4, className = "", id, ...rest }) {
  useFieldStyles();
  return (
    <label className="salvo-field-wrap" htmlFor={id}>
      {label && <span className="salvo-field-label">{label}</span>}
      <textarea
        id={id}
        rows={rows}
        className={["salvo-field", error ? "salvo-field--invalid" : "", className].filter(Boolean).join(" ")}
        style={{ resize: "vertical", minHeight: "5rem" }}
        {...rest}
      />
      {(error || hint) && (
        <span className={"salvo-field-hint" + (error ? " salvo-field-hint--error" : "")}>
          {error || hint}
        </span>
      )}
    </label>
  );
}
