import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { DefaultSeo } from 'next-seo'
import NextNprogress from 'nextjs-progressbar'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import SEO from '../../next-seo.config'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Boilerplate - NextJS</title>
        <link rel="shortcut icon" href="/images/icon-512.png" />
        <link rel="apple-touch-icon" href="/images/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <NextNprogress
        color="#F231A5"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
