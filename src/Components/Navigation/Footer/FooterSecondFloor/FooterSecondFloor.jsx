import React from "react";
import {
  FooterSecondFloorStyle,
  FooterSecondFloorLogo,
  FooterSecondFloorTitle,
  FooterSecondFloorText,
  FooterSecondFloorContacts,
  FooterSecondFloorMenu,
  FooterSecondFloorMenuLinks,
} from "./FooterSecondFloor.styled";
import { useMediaQuery } from "@mui/material";
import Logo from "../../../../Images/WhiteLogoText.png";
import { Link } from "react-router-dom";

const FooterSecondFloor = () => {
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
    <FooterSecondFloorStyle
      largedesktop={isLargeDesktop}
      desktop={isDesktop}
      notebook={isNotebook}
      tablet={isTablet}
      mobile={isMobile}
    >
      <FooterSecondFloorMenu
        largedesktop={isLargeDesktop}
        desktop={isDesktop}
        notebook={isNotebook}
        tablet={isTablet}
        mobile={isMobile}
      >
        <FooterSecondFloorTitle
          largedesktop={isLargeDesktop}
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          Меню
        </FooterSecondFloorTitle>
        <FooterSecondFloorMenuLinks
          largedesktop={isLargeDesktop}
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          <Link to="/src/Pages/BabyBoomPage/BabyBoomPage.jsx">Главная</Link>
          <Link to="/src/Pages/BabyBoomPage/BabyBoomPage.jsx">О нас</Link>
          <Link to="/src/Pages/BabyBoomPage/BabyBoomPage.jsx">Детки БУМ!</Link>
          <Link to="/src/Pages/BabyBoomPage/BabyBoomPage.jsx">АФИША</Link>
          <Link to="/src/Pages/BabyBoomPage/BabyBoomPage.jsx">
            Бегущая строка
          </Link>
          <Link to="/src/Pages/BabyBoomPage/BabyBoomPage.jsx">Летняя Уфа</Link>
          <Link to="/src/Pages/BabyBoomPage/BabyBoomPage.jsx">
            Прогноз Погоды
          </Link>
          <Link to="/src/Pages/BabyBoomPage/BabyBoomPage.jsx">Столица</Link>
          <Link to="/src/Pages/BabyBoomPage/BabyBoomPage.jsx">Телегазета</Link>
          <Link to="/src/Pages/BabyBoomPage/BabyBoomPage.jsx">Телемарафон</Link>
        </FooterSecondFloorMenuLinks>
      </FooterSecondFloorMenu>

      <FooterSecondFloorLogo
        largedesktop={isLargeDesktop}
        desktop={isDesktop}
        notebook={isNotebook}
        tablet={isTablet}
        mobile={isMobile}
      >
        <img src={Logo} alt={Logo} />
        <p>
          © Муниципальное унитарное предприятие «Продюсерский центр «Вся
          Уфа»городского округа город Уфа Республики Башкортостан (МУП ПЦ «Вся
          Уфа»)
        </p>
      </FooterSecondFloorLogo>

      <FooterSecondFloorContacts
        largedesktop={isLargeDesktop}
        desktop={isDesktop}
        notebook={isNotebook}
        tablet={isTablet}
        mobile={isMobile}
      >
        <FooterSecondFloorTitle
          largedesktop={isLargeDesktop}
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          Адрес
        </FooterSecondFloorTitle>
        <FooterSecondFloorText
          largedesktop={isLargeDesktop}
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          450092, г. Уфа, ул. Авроры, 25
        </FooterSecondFloorText>
        <FooterSecondFloorTitle
          largedesktop={isLargeDesktop}
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          Телефон
        </FooterSecondFloorTitle>
        <FooterSecondFloorText
          largedesktop={isLargeDesktop}
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          (347) 255-90-31
        </FooterSecondFloorText>
        <FooterSecondFloorTitle
          largedesktop={isLargeDesktop}
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          E-mail
        </FooterSecondFloorTitle>
        <FooterSecondFloorText
          largedesktop={isLargeDesktop}
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          news@allufa.ru
        </FooterSecondFloorText>
      </FooterSecondFloorContacts>
    </FooterSecondFloorStyle>
  );
};
export default FooterSecondFloor;
