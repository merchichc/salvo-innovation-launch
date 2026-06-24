import * as React from "react";

/** Accordion — expandable items separated by ink rules. items: {id,title,content}. */
export interface AccordionItem { id: string; title: React.ReactNode; content: React.ReactNode; }
export interface AccordionProps {
  items: AccordionItem[];
  /** Allow more than one panel open at once. */
  allowMultiple?: boolean;
  /** Item ids open initially. */
  defaultOpen?: string[];
  className?: string;
}
export function Accordion(props: AccordionProps): JSX.Element;
