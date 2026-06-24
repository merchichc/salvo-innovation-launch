import * as React from "react";

/** Stat — big display number with a mono label, for metrics / proof points. */
export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  value: React.ReactNode;
  label: React.ReactNode;
  sub?: React.ReactNode;
  tone?: "ink" | "signal" | "paper";
  align?: "left" | "center";
}
export function Stat(props: StatProps): JSX.Element;
