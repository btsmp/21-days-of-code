import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:'Roboto', sans-serif;
}

body {
  display: grid;
  height: 100vh;
  place-content: center;
  background-color: black;
  font-family: 'Roboto', sans-serif;
}
`
