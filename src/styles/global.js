import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    font-family: 'Poiret One', 'Fredericka the Great', cursive;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    background: rgba(230, 232, 241, 0.2);
    overflow: hidden;
  }

  button {
    cursor: pointer;
  }
`;
