import { MemoryRouter as Router } from "react-router-dom";
import React from "react";
import "./App.css";
import { AppRoutes } from "./Router";
//Styles
import { theme } from "../src/styles/theme";
import { ThemeProvider } from "@mui/material";
import GlobalStyled from "./styles/global.styled";
import { CssBaseline } from "@mui/material";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyled />
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}
