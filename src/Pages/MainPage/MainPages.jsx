//NPM
import React from "react";
import { useMediaQuery } from "@mui/material";
//Styles
import {
  MainPageStyle,
  UTPSlide
} from "./MainPages.styled";
//Components

const MainPage = () => {

  const isLargeDesktop = useMediaQuery((theme) => theme.breakpoints.up("xl"));
  const isDesktop = useMediaQuery((theme) =>theme.breakpoints.between("lg", "xl"));
  const isNotebook = useMediaQuery((theme) =>theme.breakpoints.between("md", "lg"));
  const isTablet = useMediaQuery((theme) =>theme.breakpoints.between("sm", "md"));
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <MainPageStyle>
      <UTPSlide>
        <h1>Реклама на ВСЮ УФУ</h1>
        <h2>lorem lorem lorem lorem lorem lorem</h2>
      </UTPSlide>
    </MainPageStyle>
  );
};

export default MainPage;
