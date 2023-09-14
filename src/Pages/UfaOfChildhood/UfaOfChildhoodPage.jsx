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
} from "./UfaOfChildhood.styled";

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
import UfaOfChildhoodImage from "../../Images/UfaOfChildhoodImage.png";

const UfaOfChildhoodPage = () => {
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
        <img src={UfaOfChildhoodImage} />
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
          <p>Вторник</p>
          <p>13:15 19:15 23:15</p>
          <p>Среда</p>
          <p>7:15</p>
          <p>Суббота</p>
          <p>18:30</p>
          <p>Воскресенье</p>
          <p>9:15</p>
        </Shedule>
      </SheduleSlide>
    </MyGlobalStyles>
  );
};

export default UfaOfChildhoodPage;
