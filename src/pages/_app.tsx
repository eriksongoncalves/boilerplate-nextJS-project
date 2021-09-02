import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { DefaultSeo } from 'next-seo';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import SEO from '../../next-seo.config';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Boilerplate - NextJS</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="" />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
