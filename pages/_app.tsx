import { ThemeProvider } from 'styled-components';
import { useRouter} from 'next/router';
import type { AppProps } from 'next/app';

import GlobalBaseStyle from '../styles/Global';
import TypographyStyle from '../styles/Typography';

import {
  ThemeType,
  tPrimary,
} from '../styles/theme';

const setTheme = (theme: ThemeType) => {
  switch(theme) {
    case 'primary':
    default:
      return tPrimary;
  }
};

function BaseApp({ Component, pageProps }: AppProps) {
  const { query } = useRouter();
  
  return (
    <ThemeProvider theme={setTheme(query.theme as ThemeType)}>
      <GlobalBaseStyle />
      <TypographyStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default BaseApp;
