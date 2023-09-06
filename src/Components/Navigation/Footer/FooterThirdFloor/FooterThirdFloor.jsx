import React from "react";
import { FooterThirdFloorStyle } from "./FooterThirdFloor.styled";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

const FooterThirdFloor = () => {
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
    <FooterThirdFloorStyle
      largedesktop={isLargeDesktop}
      desktop={isDesktop}
      notebook={isNotebook}
      tablet={isTablet}
      mobile={isMobile}
    >
      <p></p>
      <Link>Политика конфиденциальности</Link>
      <Link>Пользовательское соглашение</Link>
      <p></p>
    </FooterThirdFloorStyle>
  );
};
export default FooterThirdFloor;
