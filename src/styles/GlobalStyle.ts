import { createGlobalStyle, css } from "styled-components";
import { respondTo } from "../helper/MediaQueryHelper";

const PrimaryTheme = css`
  :root {
    --blue-color: #345ff6; /* Change the color to your desired value */
    --gunmetal-color: #253347;
    --darkElectricBlue-color: #5e6e85;
    --borders-color: #d8e2e7;
    --pureWhite-color: #ffff;
    --gradient-color: rgba(214, 230, 254, 1);
    --linearBlue-color: linear-gradient(
      90deg,
      #345ff7 0%,
      #587dff 100%
    ); // use only at background property
    --heroBg-color: #e7f5fe;

    // font
    --base-font-family: "Inter";

    // photography variable
    --font-size-heading-xl: 4rem; // 64px
    --font-size-heading-l: 3rem;//48px
    --font-size-heading-m:1.5rem ; // 24px
    --font-size-heading-s:1.25rem ; // 20px
    --font-size-body-m:1rem ; // 16px;
    --font-size-body-m-bold: 1rem; // 16px bold
    --font-size-body-s: 0.875rem; //14px
  }
`;

const GlobalStyles = createGlobalStyle<{}>`

    ${PrimaryTheme}
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: var(--base-font-family);
    }

    body {
        width:100%;
        min-height:100vh;
        overflow-x:hidden;
        color:var(--quinary-color);

        /** media query screen helper function */
        ${respondTo("xs")`background:var(--blue-color)`}
        ${respondTo("sm")`background:var(--gunmetal-color)`}
        ${respondTo("md")`background:var(--darkElectricBlue-color)`}
        ${respondTo("l")`background:var(--borders-color)`}
        ${respondTo("xl")`background:var(--linearBlue-color)`}
    }
`;

export default GlobalStyles;

/**
 variable guide name; 
 * Font Variables:
--base-font-family
--heading-font-family
--paragraph-font-family
--code-font-family

Color Variables:
--primary-color
--secondary-color
--accent-color
--background-color
--text-color
--link-color

Spacing Variables:
--spacing-small
--spacing-medium
--spacing-large
--padding
--margin
--line-height

Typography Variables:
--font-size-base
--font-size-heading
--font-size-subheading
--font-size-small
--font-size-large
--font-weight-normal
--font-weight-bold
--letter-spacing

Border and Box Shadow Variables:
--border-color
--border-radius
--border-width
--box-shadow

Animation and Transition Variables:
--animation-duration
--transition-duration
--ease-in
--ease-out
--ease-in-out

Theme Variables:
--light-theme
--dark-theme
--theme-primary
--theme-secondary
--theme-accent
--theme-background

Media Query Breakpoints:
--mobile-breakpoint
--tablet-breakpoint
--desktop-breakpoint
--large-desktop-breakpoint

Form and Input Variables:
--input-background
--input-border-color
--input-border-radius
--input-padding
--input-font-color
--input-placeholder-color
--input-focus-color

Layout Variables:
--container-max-width
--header-height
--footer-height
--sidebar-width
--content-padding
 */
