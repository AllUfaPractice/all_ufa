//npm
import { MemoryRouter as Router } from "react-router-dom";
import React from "react";
import { AppRoutes } from "./Router";
import ScrollToTop from "./Scripts/ScrollToTop";
//Styles
import { theme } from "../src/Styles/theme";
import { ThemeProvider } from "@mui/material";
import GlobalStyled from "./Styles/global.styled";
import { CssBaseline } from "@mui/material";
//Components
import "./App.css";
import ScrollButton from "./Components/Buttons/ScrollButton/ScrollButton";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyled />
      <ScrollButton />
      <Router>
        <ScrollToTop>
          <AppRoutes />
        </ScrollToTop>
      </Router>
    </ThemeProvider>
  );
}
