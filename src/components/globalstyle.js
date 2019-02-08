import { createGlobalStyle } from 'styled-components'
import woff from '../fonts/century_gothic/gothic.woff'

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
      font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
      src: url(${ woff });
  }
  body {
    box-sizing: border-box;
  }
  html {
    font-size: 100%;
  }
`

export default GlobalStyle
