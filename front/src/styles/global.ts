import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html,
  body,
  #root {
    width: 100%;
    -webkit-print-color-adjust: exact;
    background-color: black;
    font-family: 'Indie Flower', cursive;
  }
`;
