import { ChakraProvider } from '@chakra-ui/react'
import customTheme from '../styles/theme'
import { Global, css } from '@emotion/react'
import '../app/globals.css'; // Adjusted path to your global CSS
import { prismDarkTheme } from '../styles/prism'
const GlobalStyle = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          ${prismDarkTheme};
          ::selection {
            background-color: #90cdf4;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
     
          ::-webkit-scrollbar {
            width: 8px;
            background: #080808;
          }

          ::-webkit-scrollbar-thumb {
            background: #111111;
            border-radius: 8px;
          }
        `}
      />
      {children}
    </>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <GlobalStyle>
        <Component {...pageProps} />
      </GlobalStyle>
    </ChakraProvider>
  )
}
export default MyApp