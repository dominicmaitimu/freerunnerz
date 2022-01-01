import { createGlobalStyle } from 'styled-components';
import { tPrimary } from './theme';

const fontPath = '/fonts/'

const TypographyStyle = createGlobalStyle`

  /* Gobold Bold Italic */
  @font-face {
  font-family: 'Gobold';
  font-style: italic;
  font-weight: normal;
  src: url('${ fontPath }gobold_bold_italic-webfont.woff2') format('woff2'),
    url('${ fontPath }gobold_bold_italic-webfont.woff') format('woff');
  }

  /* Gobold Thin */
  @font-face {
  font-family: 'Gobold';
  font-style: normal;
  font-weight: lighter;
  src: url('${ fontPath }gobold_thin-webfont.woff2') format('woff2'),
    url('${ fontPath }gobold_thin-webfont.woff') format('woff');
  }

  /* Gobold Thin Italic */
  @font-face {
  font-family: 'Gobold';
  font-style: italic;
  font-weight: lighter;
  src: url('${ fontPath }gobold_thin_italic-webfont-webfont.woff2') format('woff2'),
    url('${ fontPath }gobold_thin_italic-webfont-webfont.woff') format('woff');
  }

  html, body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-kerning: normal;
    font-smooth: always; /* stylelint-disable-line */
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
  }

  body {
    color: ${tPrimary.colors.secondary};
    font-family: 'Gobold', sans-serif;
    font-style: normal;
    font-weight: lighter;
  }
`

export default TypographyStyle;
