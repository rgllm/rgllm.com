import Head from 'next/head';
import { Global, css } from '@emotion/react';
import { CSSReset, ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';

import SEO from '../next-seo.config';
import theme from '@/styles/theme';
import '@/styles/components/PostContent.scss';

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider options={{ useSystemColorMode: true,  initialColorMode: 'light' }}>
        <CSSReset />
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
						.chakra-ui-dark #__next {
							background: black;
						}
          `}
        />
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default App