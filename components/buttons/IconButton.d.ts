import * as React from "react";

/**
 * IconButton — square version of Button for a single icon. Provide an
 * accessible `label`. Pass a Lucide icon (or any node) as children.
 */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ink" | "volt" | "ghost";
  size?: "sm" | "md" | "lg";
  /** Accessible label (required for icon-only buttons). */
  label: string;
}

export function IconButton(props: IconButtonProps): JSX.Element;
