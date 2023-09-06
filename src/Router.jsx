import { Route, Routes } from 'react-router-dom';
import React from 'react';
//Pages
import MainPage from "./Pages/MainPage/MainPages";
import BabyBoomPage from "./Pages/BabyBoomPage/BabyBoomPage";
import CapitalPage from "./Pages/Capital/CapitalPage";
import WeatherPage from "./Pages/WeatherPage/WeatherPage";
import CookingShowPPage from "./Pages/CookingShowPage/CookingShowPage";
import SummerUfaPage from "./Pages/SummerUfa/SummerUfaPage";
import UfaIsAwarePage from "./Pages/UfaIsAware/UfaIsAwarePage";
import UfaOfChildhoodPage from "./Pages/UfaOfChildhood/UfaOfChildhoodPage";
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
    </Routes>

    <Footer />
  </>
);
