import React from "react";
import { BurstMark } from "./BurstMark.jsx";

/* The Salvo logo lockup. Mark + "SALVO" wordmark set live in Space Grotesk
   (so the type renders correctly — unlike the wordmark SVG used via <img>). */

const WORD_COLOR = {
  ink: "#0a1a2b",
  paper: "#f6f1e7",
  signal: "#ff4a1c",
};
const MARK_TONE = {
  ink: "signal", // ink lockup uses the signal mark for the flare of color
  paper: "volt",
  signal: "signal",
};

export function SalvoLogo({ variant = "lockup", tone = "ink", size = 36, style, ...rest }) {
  const markTone = MARK_TONE[tone] || "signal";
  const word = WORD_COLOR[tone] || "#0a1a2b";

  if (variant === "mark") {
    return <BurstMark tone={markTone} size={size} style={style} {...rest} />;
  }

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: size * 0.28,
        lineHeight: 1,
        ...style,
      }}
      {...rest}
    >
      {variant === "lockup" && <BurstMark tone={markTone} size={size} />}
      <span
        style={{
          fontFamily: '"Space Grotesk", system-ui, sans-serif',
          fontWeight: 700,
          fontSize: size * 0.92,
          letterSpacing: "-0.04em",
          color: word,
        }}
      >
        SALVO
      </span>
    </span>
  );
}
