import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export const GlobalStyles = createGlobalStyle`
:root {
  --white: #fff;
  --gray-50: #f7f8fa;
  --gray-100: #e6e8eb;
  --gray-150: #ced4da;
  --gray-200: #afb2b1;
  --gray-500: #808080;
  --gray-800: #494d4b;

  --green-500: #88F9D4;

  --red-500: #e5001b;

  --yellow-500: #ffbb11;

  --purple-300: #9f75ff;
  --purple-400: #9164fa;
  --purple-500: #8257e5;
  --purple-800: #6f48c9;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  vertical-align: baseline;
}
html {
  @media (max-width: 1080px) {
    font-size: 93.75%;
  }
  @media (max-width: 768px) {
    font-size: 87.5%;
  }
}
body {
  background: var(--gray-50);
  font-family: "Poppins", sans-serif;
  color: var(--gray-800);
  line-height: 1.5;
  font-weight: 400;
  overflow: hidden;
}
input, 
textarea, 
button,
label {
  font: 400 0.9375rem/0.9375rem "Barlow Condensed", sans-serif;
  outline: 0;
  color: var(--gray-500);
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Barlow Condensed", sans-serif;
}
ol,
ul {
  list-style: none;
}
span {
  display: inline-block;
}
a {
  text-decoration: none;
  color: inherit;
}
button { 
  cursor: pointer;
}
[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

.Toastify__toast-theme--colored.Toastify__toast--success {
  background: var(--green-500) !important;
  color: var(--gray-800) !important;
}
.Toastify__toast-theme--colored.Toastify__toast--error {
  background: var(--red-500) !important;
}

::-webkit-scrollbar {
  width: 7px !important;
}
::-webkit-scrollbar-track {
  background: var(--gray-100) !important;
}
::-webkit-scrollbar-thumb {
  background: var(--purple-400) !important;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--purple-500) !important;
}
`;
