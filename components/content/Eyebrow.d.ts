import * as React from "react";

/** Eyebrow — mono uppercase kicker label above headings. */
export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "signal" | "ink" | "paper" | "muted";
  /** Optional index shown before the label, e.g. "02". */
  index?: string | number;
  /** Leading rule line. Default true. */
  rule?: boolean;
}
export function Eyebrow(props: EyebrowProps): JSX.Element;
