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
} from "./CookingShow.styled";

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
import CookingMainShowImage from "../../Images/CookingShowMainImage.png";

const CookingShowPPage = () => {
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
        <img src={CookingMainShowImage} alt="Столица"></img>
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
            Самая вкусная программа на телеканале «Вся Уфа»
          </MainTitleText>
        </MainTitle>
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
          <li>
            В кулинарном шоу своими рецептами поделятся самые известные люди
            республики. Согласитесь, всегда интересно узнать, что любят есть
            депутат, звезда ютуба, народный артист или даже веселый таксист, а
            также что готовят в лучших заведениях нашего города!
          </li>
          <li>
            Очаровательная ведущая, сочные кадры, лайфхаки от гостей – все это в
            программе «Вкусно»
          </li>
          <li>
            Ведущая рубрики и ее соведущие (известные люди республики, партнеры
            наших эфиров) постараются показать зрителям простые и проверенные
            временем рецепты из реальной жизни, а также рассказать о продуктах,
            которые участвуют в блюдах и о партнерах, которые помогают нам
            создать эту программу.
          </li>
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
          <p>Вторник</p>
          <p>13:15 19:15 23:15</p>
          <p>Среда</p>
          <p>7:15</p>
          <p>Суббота</p>
          <p>18:30</p>
          <p>Воскресенье</p>
          <p>9:45</p>
        </Shedule>
      </SheduleSlide>

      <SecondTitleText
        largedesktop={isLargeDesktop}
        desktop={isDesktop}
        notebook={isNotebook}
        tablet={isTablet}
        mobile={isMobile}
      >
        Тарифы
      </SecondTitleText>

      <TariffContainer>
        <ThirdTitleText
          largedesktop={isLargeDesktop}
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          Участие в рубрике
        </ThirdTitleText>

        <TariffText
          largedesktop={isLargeDesktop}
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          <p>Совместное приготовление блюда</p>
        </TariffText>

        <ThirdTitleText
          largedesktop={isLargeDesktop}
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          Акции, новости Вашей компании
        </ThirdTitleText>

        <TariffText
          largedesktop={isLargeDesktop}
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          <p>Рекламный ролик перед или после программы</p>
          <TariffTimeText>До 20 сек.</TariffTimeText>
        </TariffText>

        <ThirdTitleText
          largedesktop={isLargeDesktop}
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          Скрытая реклама (Product placement)
        </ThirdTitleText>

        <TariffText
          largedesktop={isLargeDesktop}
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          <p>
            (продукция в кадре) + озвучивание ведущими партнера, продукция
            крупным планом 1 раз в час
          </p>
        </TariffText>
      </TariffContainer>
    </MyGlobalStyles>
  );
};

export default CookingShowPPage;
