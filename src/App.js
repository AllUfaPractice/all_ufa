//npm
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import { AppRoutes } from "./Router";
import ScrollToTop from "./Scripts/ScrollToTop";
//Styles
import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import theme from "./styles/theme";
//Components
import ScrollButton from "./Components/Buttons/ScrollButton/ScrollButton";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollButton />
      <Router>
        <ScrollToTop>
          <AppRoutes />
        </ScrollToTop>
      </Router>
    </ThemeProvider>
  );
}
