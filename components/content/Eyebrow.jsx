import React from "react";

/* Eyebrow / kicker — mono, uppercase, tracked label that sits above headings.
   The "nautical instrument" voice. Optional leading rule and index. */

export function Eyebrow({ children, index, tone = "signal", rule = true, style, ...rest }) {
  const color =
    tone === "ink" ? "var(--ink-900)" :
    tone === "paper" ? "var(--paper)" :
    tone === "muted" ? "var(--text-muted)" :
    "var(--signal-600)";
  return (
    <span
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-eyebrow)",
        fontWeight: 700,
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color,
        display: "inline-flex",
        alignItems: "center",
        gap: "0.6em",
        ...style,
      }}
      {...rest}
    >
      {rule && (
        <span style={{ width: "1.6em", height: 0, borderTop: "2px solid currentColor" }} />
      )}
      {index != null && <span style={{ opacity: 0.6 }}>{index}</span>}
      {children}
    </span>
  );
}
