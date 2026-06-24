import * as React from "react";

/**
 * Tabs — segmented pill tablist. Controlled (value/onChange) or uncontrolled
 * (defaultValue).
 *
 * @startingPoint section="Navigation" subtitle="Segmented tabs + accordion" viewport="700x260"
 */
export interface TabItem { id: string; label: React.ReactNode; }
export interface TabsProps {
  items: TabItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (id: string) => void;
  /** Active-tab color. Default "ink". */
  tone?: "ink" | "signal";
  className?: string;
}
export function Tabs(props: TabsProps): JSX.Element;
