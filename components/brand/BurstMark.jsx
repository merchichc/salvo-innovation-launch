import React from "react";

/* Salvo burst mark — sonar-ping / muzzle-burst radiating from a lower-left
   origin. The brand symbol. Rendered inline so it can take any tone. */

const ARCS = [33, 50, 67];
const arcPath = (r) => `M ${19 + r} 81 A ${r} ${r} 0 0 0 19 ${81 - r}`;
const RAYS = [
  { x1: 89.38, y1: 58.13, x2: 102.69, y2: 53.81 },
  { x1: 71.33, y1: 28.67, x2: 81.22, y2: 18.77 },
  { x1: 41.87, y1: 10.62, x2: 46.19, y2: -2.69 },
];

const TONES = {
  signal: { stroke: "#ff4a1c", core: "#0a1a2b" },
  ink: { stroke: "#0a1a2b", core: "#0a1a2b" },
  paper: { stroke: "#f6f1e7", core: "#d4ff47" },
  volt: { stroke: "#d4ff47", core: "#f6f1e7" },
};

export function BurstMark({ tone = "signal", size = 40, title = "Salvo", style, ...rest }) {
  const c = TONES[tone] || TONES.signal;
  return (
    <svg
      viewBox="-4 -6 110 112"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      fill="none"
      style={style}
      {...rest}
    >
      <circle cx="19" cy="81" r="8.5" fill={c.core} />
      {ARCS.map((r) => (
        <path key={r} d={arcPath(r)} stroke={c.stroke} strokeWidth="8" strokeLinecap="round" />
      ))}
      {RAYS.map((l, i) => (
        <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke={c.stroke} strokeWidth="8" strokeLinecap="round" />
      ))}
    </svg>
  );
}
