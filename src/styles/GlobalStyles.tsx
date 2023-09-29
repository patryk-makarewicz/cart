'use client';

import { createGlobalStyle } from 'styled-components';
import { pxToRem } from './helpers';

const GlobalStyles = createGlobalStyle`*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

html,
body {
  padding: 0;
  margin: 0;
  font-size: ${pxToRem('16px')};
  background-color: #f8fafb;
  color: #404040;
  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
}

a {
  color: inherit;
  text-decoration: none;
}

:root {
  --text-color: #242424;
  --background-color: #f8fafb;
  --background-secondary-color: #ffffff;
  --border-color: #e5e5e5;
}

@media (prefers-color-scheme: dark) {
  :root {
    --text-color: #ffffff;
    --background-color: #242424;
    --background-secondary-color: #2b2f34;
    --border-color: #242424;
  }
}

 /* Change autocomplete styles in WebKit */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    transition: background-color 5000s ease-in-out 0s;
}

//* react chat widget custom styles
.rcw-launcher {
  display: flex;
  align-items: center;
  justify-content: center;
}

.rcw-sender {
  justify-content: space-between;
  align-items: center;
}

.rcw-launcher,
.rcw-conversation-container,
.rcw-header  {
  background-color: #0278ab !important;
}
`;

export default GlobalStyles;
