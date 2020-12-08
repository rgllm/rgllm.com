import { ThemeProvider, Global, css } from '@emotion/react';
import { CSSReset } from '@chakra-ui/react';

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
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App