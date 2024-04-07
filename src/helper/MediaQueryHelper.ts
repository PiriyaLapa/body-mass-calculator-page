import { css } from "styled-components";

// Define breakpoings
const breakpoints = {
  xs: 375 /** Very Extra Small */,
  s: 567 /** Extra Small */,
  sm: 768 /** Small */,
  md: 992 /** Medium */,
  l: 1200 /** Large */,
  xl: 1600 /** Extra Large */,
};

type Breakpoints = keyof typeof breakpoints;

class MediaQueryHelper {
  breakpoints: Record<Breakpoints, number>;
  constructor(breakpoints: Record<Breakpoints, number>) {
    this.breakpoints = breakpoints;
  }

  respondTo(key: Breakpoints) {
    return (literals: TemplateStringsArray, ...placeholder: any[]) => css`
      @media (min-width: ${this.breakpoints[key]}px) {
        ${css(literals, ...placeholder)}
      }
    `;
  }

  respondToMax(key: Breakpoints) {
    return (literals: TemplateStringsArray, ...placeholder: any[]) => css`
      @media (max-width: ${this.breakpoints[key]}px) {
        ${css(literals, ...placeholder)}
      }
    `;
  }
}

const mediaQueryHelper = new MediaQueryHelper(breakpoints);
export const respondTo = mediaQueryHelper.respondTo.bind(mediaQueryHelper);
export const respondToMax = mediaQueryHelper.respondToMax.bind(mediaQueryHelper);
