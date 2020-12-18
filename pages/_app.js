import Head from 'next/head';
import { ThemeProvider, Global, css } from '@emotion/react';
import { CSSReset } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';

import SEO from '../next-seo.config';
import theme from '@/styles/theme';
import '@/styles/components/PostContent.scss';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
            html {
              scroll-behavior: smooth;
            }
            #__next {
              display: flex;
              flex-direction: column;
              min-height: 100vh;
            }
          `}
      />
      <CSSReset />
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App