import * as React from "react";

/** Textarea — multiline field with Salvo field styling. */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
}
export function Textarea(props: TextareaProps): JSX.Element;
