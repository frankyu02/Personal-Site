import { createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`
    :root{
        --blue: #0a93c4;
    }
    html {
    word-break: break-word;
    font-size: 10px;
    background-color: var(--white);
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
    padding: 0 10px;
  }
`;
export default GlobalStyles