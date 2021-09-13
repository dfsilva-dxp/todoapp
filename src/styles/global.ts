import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
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
  background: #f2f3f5;
  color: #353646;
  font-family: "Roboto", sans-serif;
  overflow: hidden;
}
input, 
textarea, 
button,
label {
  font: 400 1rem/1rem "Roboto", sans-serif;
  outline: 0;
}
ol,
ul {
  list-style: none;
}
span {
  display: inline-block;
}
strong {
  font: 700 1rem/1.2rem "Rajdhani", sans-serif;
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
::-webkit-scrollbar {
  width: 7px !important;
}
::-webkit-scrollbar-track {
  background: #232323 !important;
}
::-webkit-scrollbar-thumb {
  background: #232323 !important;
}
::-webkit-scrollbar-thumb:hover {
  background: #3585f3 !important;
}
`;
