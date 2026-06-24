import React from "react";

/* Stat — big display number with a label. For metrics / proof points.
   Numbers use the display face; labels use mono. */

export function Stat({ value, label, sub, tone = "ink", align = "left", style, ...rest }) {
  const num =
    tone === "signal" ? "var(--signal-500)" :
    tone === "paper" ? "var(--paper)" : "var(--ink-900)";
  const lab =
    tone === "paper" ? "var(--text-on-dark-muted)" : "var(--text-muted)";
  return (
    <div style={{ textAlign: align, ...style }} {...rest}>
      <div style={{
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "clamp(2.4rem, 5vw, 3.5rem)",
        lineHeight: 0.95,
        letterSpacing: "-0.03em",
        color: num,
      }}>{value}</div>
      <div style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.72rem",
        fontWeight: 700,
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: lab,
        marginTop: "0.6em",
      }}>{label}</div>
      {sub && (
        <div style={{ fontSize: "0.9rem", color: lab, marginTop: "0.35em" }}>{sub}</div>
      )}
    </div>
  );
}
