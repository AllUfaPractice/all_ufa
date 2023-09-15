// NPM
import { useMediaQuery } from "@mui/material";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

// Styles
import {
  FirstSlide,
  MainTitle,
  Shedule,
  SheduleSlide,
  TariffContainer,
} from "./CapitalPage.styled";

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
import CapitalMainImage from "../../Images/CapitalMainImage1.png";

const CapitalPage = () => {
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
        <LazyLoadImage src={CapitalMainImage} alt="Столица"></LazyLoadImage>
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
            Любимые телеведущие обсудят волнующие темы в легкой и веселой
            атмосфере
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
            Любимые телеведущие обсудят волнующие темы в легкой и веселой
            атмосфере, и покажут, что даже плохая ситуация может рассмешить.
          </li>
          <li>
            С понедельника по пятницу, с семи до восьми, вас ждут -
            увлекательные рубрики, лучшие шутки, полезная информация.
          </li>
          <li>
            И самое главное - позитивное настроение, которое будет сопровождать
            вовремя, а затем и после просмотра.
          </li>

          <p>Все программы дублируются ВК телеканала «Вся Уфа»</p>
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
          <p>Прямой эфир</p>
          <p>13:30 - 15:00</p>
          <p>Повтор</p>
          <p>19:30 - 21:00</p>
          <p>Повтор</p>
          <p>23:30 - 01:00</p>
          <p>Повтор</p>
          <p>04:00 - 05:30</p>
          <p>Повтор</p>
          <p>08:00 - 09:30</p>
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
          Гость в студии
        </ThirdTitleText>

        <TariffText
          largedesktop={isLargeDesktop}
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          <p>
            Участие руководителя (представителя, коллектива) в прямом эфире
            программы
          </p>
          <TariffTimeText>До 15 минут</TariffTimeText>
        </TariffText>

        <ThirdTitleText
          largedesktop={isLargeDesktop}
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          Горячие новости
        </ThirdTitleText>

        <TariffText
          largedesktop={isLargeDesktop}
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          <p>Сюжет о Вашей компании</p>
          <TariffTimeText>До 2,5 минут</TariffTimeText>
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
          <p>Акции, новости Вашей компании</p>
          <TariffTimeText>До 30 секунд</TariffTimeText>
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

export default CapitalPage;
