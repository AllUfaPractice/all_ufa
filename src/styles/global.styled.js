import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    html,body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    scroll-behavior: smooth;
    scroll-padding-top: 0px; /* Высота вашей фиксированной шапки, если таковая имеется */
    margin: 0;
    padding: 0;
    }
    body {
    position: relative;
    z-index: -1;
    overflow-x: hidden;
    font-size: 1.6rem;
    font-family: 'Raleway', 'Inter', Open Sans;
  }
`;
export default GlobalStyled;
