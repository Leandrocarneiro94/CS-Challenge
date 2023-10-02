import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFFFFF;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    font-family: "Inter",sans-serif;
    height: 100%;
    width: 100%;
  }

  body {
    background-color: var(--white);
  }
`


export default GlobalStyle
