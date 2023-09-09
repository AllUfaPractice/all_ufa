// NPM
import { useMediaQuery } from "@mui/material";
import React from "react";

// Styles
import {
  FirstSlide,
  MainTitle,
  Shedule,
  SheduleSlide,
  TariffContainer,
} from "./Ticker.styled";

// Global Styles

import {
  MyGlobalStyles,
  MainTitleText,
  InformationText,
  SecondTitleText,
  TariffTimeText,
  InformationContainer,
  TariffText,
  ThirdTitleText,
} from "../../styles/global.styled";

// Image
import TickerImage from "../../Images/TickerImage.jpg";

const TickerPage = () => {
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
    <MyGlobalStyles>
      <FirstSlide
        largedesktop={isLargeDesktop}
        desktop={isDesktop}
        notebook={isNotebook}
        tablet={isTablet}
        mobile={isMobile}
      >
        <img src={TickerImage} alt="Летняя Уфа"></img>
      </FirstSlide>

      <InformationContainer
        largedesktop={isLargeDesktop}
        desktop={isDesktop}
        notebook={isNotebook}
        tablet={isTablet}
        mobile={isMobile}
      >
        <InformationText
          largedesktop={isLargeDesktop}
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          <p>
            «Вся Уфа» — многопрофильная организация подведомственная
            Администрации города Уфы — столицы Республики Башкортостан. Это
            информационный центр в который ежедневно поступают сообщения со всей
            Уфы
          </p>
          <p>Мы на связи с:</p>
          <li>
            Администрациями всех 7 районов города: Советский, Октябрьский,
            Кировский, Ленинский, Орджоникидзевский, Дёмский, Калининский
          </li>
          <li>Государственными и муниципальными ведомствами</li>
          <li>Культурными, научными, спортивными учреждениями</li>
          <li>Народными корреспондентами и горожанами</li>
          <li>Нашими друзьями и партнёрами</li>
        </InformationText>
      </InformationContainer>

      <SheduleSlide
        largedesktop={isLargeDesktop}
        desktop={isDesktop}
        notebook={isNotebook}
        tablet={isTablet}
        mobile={isMobile}
      >
        <SecondTitleText
          largedesktop={isLargeDesktop}
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          График выхода шоу
        </SecondTitleText>
        <Shedule
          largedesktop={isLargeDesktop}
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          <p>Будни</p>
          <p>17:05</p>
          <p>Повтор</p>
          <p>9:30 12:05</p>
        </Shedule>
      </SheduleSlide>

      <SecondTitleText
        largedesktop={isLargeDesktop}
        desktop={isDesktop}
        notebook={isNotebook}
        tablet={isTablet}
        mobile={isMobile}
      >
        Количество выходов
      </SecondTitleText>

      <TariffContainer>
        <TariffText
          largedesktop={isLargeDesktop}
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          <p>28 (14 выходов+14 повторов) / сутки </p>
        </TariffText>
      </TariffContainer>
    </MyGlobalStyles>
  );
};

export default TickerPage;
