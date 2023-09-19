//npm
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { AppRoutes } from "./Router";
import ScrollToTop from "./Scripts/ScrollToTop";
//Styles
import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import theme from "./styles/theme";
import "./App.css";
//Components
import ScrollButton from "./Components/Buttons/ScrollButton/ScrollButton";
import PreLoader from "./Components/PreLoader/Preloader";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollButton />
      <Router>
        <ScrollToTop>
          <PreLoader/>
          <AppRoutes />
        </ScrollToTop>
      </Router>
    </ThemeProvider>
  );
}
