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
  background-image: radial-gradient(circle, #212223, #1c1c1d, #171718, #111112, #090909);
  font-family: 'Roboto', sans-serif;
}
`
