//npms
import React from "react";
//Styles
import { HeaderStyle, HeaderLogoStyle } from "./Header.styled";
//Components
import SocialButtons from "../../Buttons/SocialButtons/SocialButtons";
import ProductsMenu from "../ProductsMenu/ProductsMenu";
import { useMediaQuery } from "@mui/material";
//Imgs
import HeaderLogo from "../../../Images/WhiteLogo.png";

const Header = () => {
    const isTablet = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    const handleLogoClick = () => {
        window.location.href = '/';
      };

  return (
    <HeaderStyle tablet={isTablet} mobile={isMobile}>
      <HeaderLogoStyle src={HeaderLogo} alt="HeaderLogo" onClick={handleLogoClick}/>
      <ProductsMenu />
      <SocialButtons />
    </HeaderStyle>
  );
};

export default Header;
