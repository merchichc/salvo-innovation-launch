import React from "react";

/* Tag — outlined chip for topics, filters, metadata. Optional removable X. */

export function Tag({ children, onRemove, active = false, style, ...rest }) {
  return (
    <span
      style={{
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
        ...style,
      }}
      {...rest}
    >
      {children}
      {onRemove && (
        <button
          onClick={onRemove}
          aria-label="Remove"
          style={{
            border: "none", background: "none", cursor: "pointer", padding: 0,
            display: "inline-flex", color: "inherit", lineHeight: 0, opacity: 0.7,
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
      )}
    </span>
  );
}
