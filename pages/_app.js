import { CSSReset, ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import { Global, css } from '@emotion/react';
import Head from 'next/head';
import { KBarProvider } from 'kbar';

import '@/styles/components/PostContent.scss';
import SEO from '../next-seo.config';
import theme from '@/styles/theme';

const App = ({ Component, pageProps }) => {
  const kbarActions = [
    {
      id: 'blog',
      name: 'Blog',
      shortcut: ['b'],
      keywords: 'blog',
      perform: () => window.location.pathname = 'blog'
    },
    {
      id: 'about',
      name: 'about',
      shortcut: ['r'],
      keywords: 'about',
      perform: () => window.location.pathname = 'about'
    }
  ]
	
  return (
    <KBarProvider actions={kbarActions}>
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
    </KBarProvider>
  )
}

export default App