import * as React from "react";

/** Tag — outlined chip for topics, filters, metadata. Optional removable X. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Active/selected (filled ink). */
  active?: boolean;
  /** Show a remove button and call this when clicked. */
  onRemove?: () => void;
}
export function Tag(props: TagProps): JSX.Element;
