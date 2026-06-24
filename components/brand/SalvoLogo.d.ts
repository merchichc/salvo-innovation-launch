import * as React from "react";

/**
 * The Salvo logo — burst mark + "SALVO" wordmark, set live in Space Grotesk.
 * Use this for any real logo lockup (the wordmark SVG files don't load the
 * brand font when referenced via <img>).
 *
 * @startingPoint section="Brand" subtitle="Logo lockup, mark & wordmark" viewport="700x180"
 */
export interface SalvoLogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** lockup = mark + word; mark = symbol only; wordmark = text only. Default "lockup". */
  variant?: "lockup" | "mark" | "wordmark";
  /** Color treatment. ink/signal for light bg, paper for dark bg. Default "ink". */
  tone?: "ink" | "paper" | "signal";
  /** Pixel height of the mark; wordmark scales from it. Default 36. */
  size?: number;
}

export function SalvoLogo(props: SalvoLogoProps): JSX.Element;
