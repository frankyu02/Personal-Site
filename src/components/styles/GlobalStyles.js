import { createGlobalStyle } from 'styled-components'
import "@fontsource/source-sans-pro";
const GlobalStyles = createGlobalStyle`
    :root{
        --blue: #0a93c4;
        --green: #3ede89;
        --darkblue: #0c8496;
    }
  html {
    word-break: break-word;
    font-size: 10px;
    background-color: var(--white);
  }
  footer{
    text-align: center;
    font-family: "Source Sans Pro";
    font-size: 23px;
    margin-bottom: 25px;
    p{
      margin: 0;
    }
    @media(max-width: 969px){
      font-size: 18px;
    }
  }
  body {
    margin: 0;
    padding: 0;
    font-size: 2rem;
    scrollbar-width: thin;
    scrollbar-color: #0a93c4 #EEEEEF;
  }
  * {
    box-sizing: border-box;
  }
  .p-0 {
    padding: 0px 0px;
  }
  .container {
    width: 100%;
    margin: 0 auto;
    max-width: 1400px;
  }
`;
export default GlobalStyles