import { createTheme } from "@mui/material";
import Background from "../Images/Background.png";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1440,
      xl: 1920,
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
            html, body {
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              min-height: 100vh;
              margin: 0;
              background-image: url(${Background});
              background-repeat: no-repeat;
              background-position: center center;
              background-attachment: fixed;
              background-size: cover;
            }
    
            body {
              position: relative;
              z-index: 0;
              overflow-x: hidden;
              font-size: 1.6rem;
              font-family: 'Raleway', 'Inter', 'Open Sans', sans-serif;
            }
          `,
    },
  },
});

export default theme;
