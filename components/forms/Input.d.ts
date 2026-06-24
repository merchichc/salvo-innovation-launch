import * as React from "react";

/**
 * Input — text field with mono label, hint/error, and the signal hard-shadow
 * focus state.
 *
 * @startingPoint section="Forms" subtitle="Inputs, textarea, select" viewport="700x320"
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  /** Error message; also styles the field as invalid. */
  error?: React.ReactNode;
}
export function Input(props: InputProps): JSX.Element;
