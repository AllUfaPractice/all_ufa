import React from "react";
//Styles
import { MainPageStyle, UTPSlide } from "./MainPages.styled";
//Components
import TVLiveButton from "../../Components/Buttons/TVLiveButton/TVLiveButton";

// NPM
import { useMediaQuery } from "@mui/material";

const MainPage = () => {
  const isLargeDesktop = useMediaQuery((theme) => theme.breakpoints.up("xl"));
  const isDesktop = useMediaQuery((theme) =>
    theme.breakpoints.between("lg", "xl")
  );
  const isNotebook = useMediaQuery((theme) =>
    theme.breakpoints.between("md", "lg")
  );
  const isTablet = useMediaQuery((theme) =>
    theme.breakpoints.between("sm", "md")
  );
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <MainPageStyle>
      <UTPSlide
        Desktop={isDesktop}
        Notebook={isNotebook}
        Tablet={isTablet}
        Mobile={isMobile}
      >
        <h1>Реклама на ВСЮ УФУ</h1>
        <h2>lorem lorem lorem lorem lorem lorem</h2>
        <TVLiveButton />
      </UTPSlide>
    </MainPageStyle>
  );
};

export default MainPage;
