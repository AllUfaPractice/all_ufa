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
} from "./SummerUfa.styled";

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

// image
import SummerUfaMainImage from "../../Images/SummerUfaMainImage.jpg";

const SummerUfaPage = () => {
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
        <img src={SummerUfaMainImage} alt="Летняя Уфа"></img>
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
            В прямом эфире телеканала «Вся Уфа» гости марафона вместе с ведущими
            говорят о красоте, отдыхе, туризме, модных тенденциях и о летнем
            досуге в целом и рассказывают о своих продуктах с точки зрения
            сезонности и разнообразия оказываемых услуг. О Вас узнает вся Уфа!
          </p>
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
          <p>27 июня</p>
          <p>13:30 19:30 23:30</p>
          <p>28 июня</p>
          <p>10:00 19:00</p>
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
            Участие представителя компании в прямом эфире, где он рассказывает о
            её деятельности, качестве услуг, акциях и т.д.
          </p>
          <TariffTimeText>До 15 мин.</TariffTimeText>
        </TariffText>

        <ThirdTitleText
          largedesktop={isLargeDesktop}
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          Рекламный сюжет о вашей компании
        </ThirdTitleText>

        <TariffText
          largedesktop={isLargeDesktop}
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          <p>
            По согласованному сценарию съёмочная группа делает сюжет на вашей
            территории, далее производится монтаж и сюжет транслируется во время
            марафона с подводкой ведущих
          </p>
          <TariffTimeText>3 мин</TariffTimeText>
        </TariffText>

        <ThirdTitleText
          largedesktop={isLargeDesktop}
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          Рекламный сюжет о вашей компании, с проведением розыгрыша
        </ThirdTitleText>

        <TariffText
          largedesktop={isLargeDesktop}
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          <p>Рекламный сюжет о вашей компании, с проведением розыгрыша</p>
          <TariffTimeText>3 мин</TariffTimeText>
        </TariffText>

        <ThirdTitleText
          largedesktop={isLargeDesktop}
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          Гость в студии + рекламный сюжет о вашей компании, с проведением
          розыгрыша
        </ThirdTitleText>

        <TariffText
          largedesktop={isLargeDesktop}
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          <p>
            Участие представителя компании в прямом эфире + розыгрыш +
            производство рекламного сюжета и его трансляция в эфире
          </p>
          <TariffTimeText>15+3 мин.</TariffTimeText>
        </TariffText>
      </TariffContainer>
    </MyGlobalStyles>
  );
};

export default SummerUfaPage;
