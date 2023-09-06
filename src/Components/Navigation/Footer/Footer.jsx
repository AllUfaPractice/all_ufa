import React from "react";
import { FooterStyle } from "./Footer.styled";
import { useMediaQuery } from "@mui/material";
import FooterFirstFloor from "./FooterFirstFloor/FooterFirstFloor";
import FooterSecondFloor from "./FooterSecondFloor/FooterSecondFloor";
import FooterThirdFloor from "./FooterThirdFloor/FooterThirdFloor";

const Footer = () => {
  const isLargeDesktop = useMediaQuery((theme) => theme.breakpoints.up("xl"));
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.between("lg", "xl"));
  const isNotebook = useMediaQuery((theme) => theme.breakpoints.between("md", "lg"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <FooterStyle largedesktop={isLargeDesktop} desktop={isDesktop} notebook={isNotebook} tablet={isTablet} mobile={isMobile}>
      <FooterFirstFloor/>
      <FooterSecondFloor/>
      <FooterThirdFloor/>
    </FooterStyle>
  );
};
export default Footer;
