import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    background: url(${({ backgroundImage }) => backgroundImage}) no-repeat center center fixed;
    background-size: cover; 
  }

  * {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle