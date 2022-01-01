import { ServerStyleSheet } from 'styled-components';
import Document from 'next/document';
import React from 'react';

export default class BaseDocument extends Document {
  // eslint-disable-next-line
  public static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          // eslint-disable-next-line
          enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    };
  };
};
