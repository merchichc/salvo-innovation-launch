import * as React from "react";

/** Select — native select with Salvo field styling + chevron. Pass <option>s. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
}
export function Select(props: SelectProps): JSX.Element;
