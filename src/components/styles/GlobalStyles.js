import { createGlobalStyle } from "styled-components";
import "@fontsource/source-sans-pro";
const GlobalStyles = createGlobalStyle`
  :root{
        --blue: #0a93c4;
        --green: #3ede89;
        --darkblue: #0c8496;
        --lightblue: rgba(237,253,255,1);
        --background: #232946;
        --headline: #fffffe;
        --paragraph: #b8c1ec;
        --button: #eebbc3;
        --button-Text: #232946;
        --image-background: #b8c1ec;
    }
  html {
    word-break: break-word;
    font-size: 10px;
    background-color: var(--background);
  }
  footer{
    text-align: center;
    font-family: "Source Sans Pro";
    font-size: 23px;
    margin-bottom: 25px;
    color: var(--paragraph);
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
    &::-webkit-scrollbar {
    width: 5px;               /* width of the entire scrollbar */
    }

    &::-webkit-scrollbar-track {
      background: var(--background);        /* color of the tracking area */
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--paragraph);    /* color of the scroll thumb */
      border: 3px solid var(--paragraph);  /* creates padding around scroll thumb */
    }
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
export default GlobalStyles;
