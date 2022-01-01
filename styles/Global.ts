import { createGlobalStyle } from 'styled-components';
import { tPrimary } from './theme';

const GlobalBaseStyle = createGlobalStyle`

  html,
  body {
    height: 100%;
    margin: 0;
  }

  body {
    background-color: ${tPrimary.colors.primary};
    border: 0.5em solid white;
    box-sizing: border-box;
  }

  a {
    &:focus {
      outline: none;
    }
  }

  #__next {
    height: 100%;
  }
`

export default GlobalBaseStyle;
