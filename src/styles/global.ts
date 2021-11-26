import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
    --green-jussi: #03FFA5;
    --write: #FFFFFF;
    --black: #000000;
    --pink-jussi: #EE0E7D;
    --grey-200: #F2F2F2;
    --grey-400: #C4C4C4;
    --gray-700: #5B5B5B;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }

    scroll-behavior: smooth;

  }


  body {
    background: var(--write);
  }

  body, input, button {
    font-family: 'Barlow', sans-serif;
    font-weight: 500;
  }

  strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }
`
