import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Questrial', 'Helvetica', sans-serif;

    body {
      margin: 0;
      padding: 0;
    }

    a {
      text-decoration: none;
    }
  }
`

export default GlobalStyle
