import React from "react";
import HamburgerMenu from "../../Components/Navigation/HamburgerMenu/HamburgerMenu";
import { WeatherStyle, NameStyle } from "./WeatherPage.styled";

// Npm
import { useMediaQuery } from "@mui/material";

// Image
import WeatherMainImage from "../../Images/WeatherMainImage.png";

const WeatherPage = () => {
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
    <WeatherStyle>
      <HamburgerMenu />
      <NameStyle
        LargeDesktop={isLargeDesktop}
        Desktop={isDesktop}
        Notebook={isNotebook}
        Tablet={isTablet}
        Mobile={isMobile}
      >
        <div className="ImageCont">
          <img src={WeatherMainImage}/>
        </div>
      </NameStyle>
    </WeatherStyle>
  );
};

export default WeatherPage;
