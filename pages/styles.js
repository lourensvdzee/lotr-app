import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --font-family: 'Lora', serif;
    --primary-color: #0070f3;
  }

  @font-face {
    font-family: 'Lora';
    src: url('..resources/Lora/static/Lora-Regular.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  body {
    font-family: var(--font-family);
  }

  #app-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(110.24deg, rgba(255, 255, 255, 0) 49.9%, rgba(255, 255, 255, 0.2) 100%), #242C31;
  }

  ...
`;

export default GlobalStyles;

