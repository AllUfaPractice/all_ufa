import React from "react";
//Styles
import {
  NavbarStyle,
  NavbarLogoStyle,
  NavbarLinks,
  NavbarSocialLinks,
} from "./Navbar.styled";
//Images
import logo from "../../../Images/WhiteLogo.png";
//NPM
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { FaWhatsapp, FaVk, FaTelegramPlane, FaYoutube } from 'react-icons/fa';
//Components
import ModalButton from "../Dropdown/Dropdown";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

const Navbar = () => {
  const isLargeDesktop = useMediaQuery((theme) => theme.breakpoints.up("xl"));
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.between("lg", "xl"));
  const isNotebook = useMediaQuery((theme) => theme.breakpoints.between("md", "lg"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <NavbarStyle largedesktop={isLargeDesktop} desktop={isDesktop} notebook={isNotebook} tablet={isTablet} mobile={isMobile}>
      <HamburgerMenu/>
      <NavbarLogoStyle largedesktop={isLargeDesktop} desktop={isDesktop} notebook={isNotebook} tablet={isTablet} mobile={isMobile}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </NavbarLogoStyle>
      <NavbarLinks largedesktop={isLargeDesktop} desktop={isDesktop} notebook={isNotebook} tablet={"display: none"} mobile={isMobile}>
        <Button><Link to="https://allufa.ru/">Наш сайт</Link></Button>
        <ModalButton/>  
        <Button><Link to="#">О нас</Link></Button>
      </NavbarLinks>
      
      <NavbarSocialLinks largedesktop={isLargeDesktop} desktop={isDesktop} notebook={isNotebook} tablet={isTablet} mobile={isMobile}>
        {/* WhatsApp */}
        <Link to="/">
          <FaWhatsapp></FaWhatsapp>
        </Link>
        {/* VK */}
        <Link to="https://vk.com/allufa_ru">
          <FaVk />
        </Link>
        {/* Telegram */}
        <Link to="/">
          <FaTelegramPlane />
        </Link>
        {/* Youtube */}
        <Link to="https://www.youtube.com/channel/UCJDJaiMm9F_7wwmUc4JhJUQ">
          <FaYoutube />
        </Link>
      </NavbarSocialLinks>
    </NavbarStyle>
  );
};

export default Navbar;
