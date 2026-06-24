import React from "react";

/* Badge — small status pill. Solid or soft. For statuses, counts, "new". */

const TONES = {
  signal: { solid: ["var(--signal-500)", "#fff"], soft: ["var(--signal-100)", "var(--signal-700)"] },
  volt: { solid: ["var(--volt-500)", "var(--ink-900)"], soft: ["var(--volt-100)", "var(--volt-700)"] },
  ink: { solid: ["var(--ink-900)", "var(--paper)"], soft: ["var(--sand-100)", "var(--ink-800)"] },
  success: { solid: ["var(--success-500)", "#fff"], soft: ["var(--success-100)", "#0d6e48"] },
  warning: { solid: ["var(--warning-500)", "var(--ink-900)"], soft: ["var(--warning-100)", "#7a4d00"] },
  danger: { solid: ["var(--danger-500)", "#fff"], soft: ["var(--danger-100)", "#9b1424"] },
};

export function Badge({ children, tone = "signal", variant = "solid", dot = false, style, ...rest }) {
  const [bg, fg] = (TONES[tone] || TONES.signal)[variant === "soft" ? "soft" : "solid"];
  return (
    <span
      style={{
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
        ...style,
      }}
      {...rest}
    >
      {dot && (
        <span style={{ width: "0.5em", height: "0.5em", borderRadius: "50%", background: "currentColor" }} />
      )}
      {children}
    </span>
  );
}
