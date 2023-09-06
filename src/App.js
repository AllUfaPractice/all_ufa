import { MemoryRouter as Router } from "react-router-dom";
import React from "react";
import "./App.css";
import { AppRoutes } from "./Router";
//Styles
import { theme } from "../src/Styles/theme";
import { ThemeProvider } from "@mui/material";
import GlobalStyled from "./Styles/global.styled";
import { CssBaseline } from "@mui/material";
import ScrollToTop from "./Scripts/ScrollToTop";
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
