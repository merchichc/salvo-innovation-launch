import * as React from "react";

/** Badge — small status pill (solid or soft), with optional leading dot. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "signal" | "volt" | "ink" | "success" | "warning" | "danger";
  variant?: "solid" | "soft";
  dot?: boolean;
}
export function Badge(props: BadgeProps): JSX.Element;
