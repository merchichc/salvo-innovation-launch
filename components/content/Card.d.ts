import * as React from "react";

/**
 * Card — content surface. "sticker" (signature: 2px ink border + hard offset
 * shadow) or "soft" (white + soft shadow), with optional tone fills.
 *
 * @startingPoint section="Content" subtitle="Sticker & soft cards, all tones" viewport="700x300"
 */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Surface style. Default "sticker". */
  variant?: "sticker" | "soft" | "flat";
  /** Fill tone. Default "default" (white). */
  tone?: "default" | "paper" | "ink" | "signal" | "volt";
  /** Enable hover lift even when not an <a>. */
  interactive?: boolean;
  /** Element/component to render. Default "div" (use "a" for links). */
  as?: any;
}

export function Card(props: CardProps): JSX.Element;
