import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body.light {
    --color: black;
    --accent-1: white;
    --accent-2: #a1a1a1;
    --background: #f5f5f5;
    --border: #c7c7c7;
    --primary: #7045ff;
    --success: #5dcb8e;
    --error: #e8235e;
    --yellow: #f5a623;
    --dark: #1b1c23;
    --primary-color: white;
  }

  body {
    --color: white;
    --accent-1: #21242d;
    --accent-2: #a1a1a1;
    --background: #1b1c23;
    --border: #262a30;
    --primary: #7045ff;
    --success: #5dcb8e;
    --error: #e8235e;
    --yellow: #f5a623;
    --dark: #1b1c23;
    --primary-color: white;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  body {
    background: var(--background);
    color: var(--color);
    font: 14px "Open Sans", sans-serif;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    margin: 0;
  }
`

export const Container = styled.div`
  max-width: 1200px;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
`;
