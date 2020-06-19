import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f5f5f5;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width: 1200px;
    margin: 0 auto;
    padding: 30px 20px;
  }

  button {
    cursor: pointer;
  }

  img {
    width: 50px;
    height: 50px;
  }
`;
