import * as React from "react";

/**
 * Salvo Button — pill button with the signature hard offset ink shadow and a
 * press-into-shadow interaction. The primary CTA element.
 *
 * @startingPoint section="Buttons" subtitle="All variants & sizes" viewport="700x200"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. Default "primary". */
  variant?: "primary" | "secondary" | "ink" | "volt" | "ghost";
  /** Size. Default "md". */
  size?: "sm" | "md" | "lg";
  /** Render as a different element/component, e.g. "a". Default "button". */
  as?: any;
  /** Stretch to container width. */
  fullWidth?: boolean;
  /** Icon node rendered before the label. */
  iconLeft?: React.ReactNode;
  /** Icon node rendered after the label. */
  iconRight?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
