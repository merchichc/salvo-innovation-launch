import * as React from "react";

/**
 * The Salvo burst symbol on its own — a sonar-ping / muzzle-burst radiating
 * from a lower-left origin. The brand mark; not for use as a UI icon.
 *
 * @startingPoint section="Brand" subtitle="The burst symbol, all tones" viewport="700x180"
 */
export interface BurstMarkProps extends React.SVGAttributes<SVGSVGElement> {
  /** Color treatment. signal/ink for light bg, paper/volt for dark bg. Default "signal". */
  tone?: "signal" | "ink" | "paper" | "volt";
  /** Pixel size (square). Default 40. */
  size?: number;
  /** Accessible label. Default "Salvo". */
  title?: string;
}

export function BurstMark(props: BurstMarkProps): JSX.Element;
