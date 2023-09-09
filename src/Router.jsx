import { Route, Routes } from 'react-router-dom';
import React from 'react';
//Pages
import MainPage from "./Pages/MainPage/MainPages";
import BabyBoomPage from "./Pages/BabyBoomPage/BabyBoomPage";
import CapitalPage from "./Pages/CapitalPage/CapitalPage";
import WeatherPage from "./Pages/WeatherPage/WeatherPage";
import CookingShowPPage from "./Pages/CookingShowPage/CookingShowPage";
import SummerUfaPage from "./Pages/SummerUfa/SummerUfaPage";
import UfaIsAwarePage from "./Pages/UfaIsAware/UfaIsAwarePage";
import UfaOfChildhoodPage from "./Pages/UfaOfChildhood/UfaOfChildhoodPage";
import TickerPage from './Pages/TickerPage/TickerPage';
import  AboutPage  from './Pages/AboutPage/AboutPage';
//Components
import Navbar from "./Components/Navigation/Navbar/Navbar";
import Footer from "./Components/Navigation/Footer/Footer";

export const AppRoutes = () => (
  <>
    <Navbar />

    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/baby-boom" element={<BabyBoomPage />} />
      <Route path="/capital" element={<CapitalPage />} />
      <Route path="/weather" element={<WeatherPage />} />
      <Route path="/cooking-show" element={<CookingShowPPage />} />
      <Route path="/summer-ufa" element={<SummerUfaPage />} />
      <Route path="/ufa-is-aware" element={<UfaIsAwarePage />} />
      <Route path="/ufa-of-childhood" element={<UfaOfChildhoodPage />} />
      <Route path="/ticker" element={<TickerPage/>} /> 
      <Route path="/About" element={<AboutPage />} />
    </Routes>

    <Footer />
  </>
);
