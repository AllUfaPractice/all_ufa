// NPM
import { useMediaQuery } from "@mui/material";
import React from "react";

// Styles
import {
  FirstSlide,
  MainTitle,
  InformationContainerExp,
  Shedule,
  SheduleSlide,
  TariffContainer,
} from "./WeatherPage.styled";

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
import WeatherMainImage from "../../Images/WeatherMainImage.png";

const WeatherPage = () => {
  const isLargeDesktop = useMediaQuery((theme) => theme.breakpoints.up("xl"));
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.between("lg", "xl"));
  const isNotebook = useMediaQuery((theme) => theme.breakpoints.between("md", "lg"));
  const isTablet = useMediaQuery((theme) =>theme.breakpoints.between("sm", "md"));
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
        <img src={WeatherMainImage} alt="Столица"></img>
        <MainTitle
          largedesktop={isLargeDesktop}
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          <MainTitleText
            largedesktop={isLargeDesktop}
            desktop={isDesktop}
            notebook={isNotebook}
            tablet={isTablet}
            mobile={isMobile}
          >
            Прогноз погоды
          </MainTitleText>
        </MainTitle>
      </FirstSlide>

      <InformationContainerExp
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
          <li>
          Ролик до 20 секунд
          </li>
          <li>
          Объявление ведущим Генерального партнера (Спонсора)
          </li>
          <li>
          Баннер внизу экрана с контактами
          </li>
          <li>Ролик перед выходом погоды</li>
        </InformationText>
      </InformationContainerExp>

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
          <p className="TitleTime">Будни</p>
          <p>06:26</p>
          <p>07:14</p>
          <p>08:14</p>
          <p>09:14</p>
          <p>10:14</p>
          <p>12:58</p>
          <p>13:43</p>
          <p>14:26</p>
          <p>16:13</p>
          <p>18:14</p>
          <p>19:14</p>
          <p>20:56</p>
          <p>22:26</p>
          <p>23:14</p>
          <p>00:14</p>
        </Shedule>

        <Shedule
          largedesktop={isLargeDesktop}
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          <p className="TitleTime">Выходные</p>
          <p>07:07</p>
          <p>09:14</p>
          <p>11:56</p>
          <p>12:40</p>
          <p>16:58</p>
          <p>18:28</p>
          <p>20:56</p>
          <p>22:56</p>
          
        </Shedule>
      </SheduleSlide>

    </MyGlobalStyles>
  );
};

export default WeatherPage;
