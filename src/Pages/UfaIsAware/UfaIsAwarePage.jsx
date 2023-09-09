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
} from "./UfaIsAware.styled";

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
import UfaIsAwareMainImage from "../../Images/UfaIsAwareMainImage.jpg";

const UfaIsAwarePage = () => {
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
        <img src={UfaIsAwareMainImage} alt="Летняя Уфа"></img>
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
            Программа для тех, кто хочет расширить свой кругозор. В формате
            познавательного интервью, можно узнать буквально всё: от медицины до
            искусства, от новейших технологий до исторических фактов. Каждое
            интервью фокусируется на конкретной теме.
          </p>
          <p>
            Задача программы – донести сложную информацию в доступном и
            интересном формате для всех зрителей, в частности до тех, кто не
            имеет профессионального образования в области науки.
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
            {/* Участие представителя компании в прямом эфире, где он рассказывает о
            её деятельности, качестве услуг, акциях и т.д. */}
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
          {/* Рекламный сюжет о вашей компании */}
        </ThirdTitleText>

        <TariffText
          largedesktop={isLargeDesktop}
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          <p>
            {/* По согласованному сценарию съёмочная группа делает сюжет на вашей
            территории, далее производится монтаж и сюжет транслируется во время
            марафона с подводкой ведущих */}
          </p>
          <TariffTimeText></TariffTimeText>
        </TariffText>

        <ThirdTitleText
          largedesktop={isLargeDesktop}
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          {/* Рекламный сюжет о вашей компании, с проведением розыгрыша */}
        </ThirdTitleText>

        <TariffText
          largedesktop={isLargeDesktop}
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          {/* <p>Рекламный сюжет о вашей компании, с проведением розыгрыша</p> */}
          <TariffTimeText></TariffTimeText>
        </TariffText>

        <ThirdTitleText
          largedesktop={isLargeDesktop}
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          {/* Гость в студии + рекламный сюжет о вашей компании, с проведением
          розыгрыша */}
        </ThirdTitleText>

        <TariffText
          largedesktop={isLargeDesktop}
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          <p>
            {/* Участие представителя компании в прямом эфире + розыгрыш +
            производство рекламного сюжета и его трансляция в эфире */}
          </p>
          <TariffTimeText></TariffTimeText>
        </TariffText>
      </TariffContainer>
    </MyGlobalStyles>
  );
};

export default UfaIsAwarePage;
