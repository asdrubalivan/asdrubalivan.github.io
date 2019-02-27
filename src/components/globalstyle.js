import { createGlobalStyle } from 'styled-components'
import woff from '../fonts/century_gothic/gothic.woff'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "CenturyGothic";
    src: url(${woff});
  }
  *, *::after, *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
      font-family: CenturyGothic, Century Gothic, AppleGothic, sans-serif;
  }
  body {
    box-sizing: border-box;
    > div {
      overflow-x: hidden;
    }
  }
  html {
    font-size: 62.5%;
  }
`

export default GlobalStyle
