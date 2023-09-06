import React from "react";
import Navbar from "../../Components/Navigation/Navbar/Navbar";
import HamburgerMenu from "../../Components/Navigation/HamburgerMenu/HamburgerMenu";
import {
  SummerUfaPageStyle,
  NameStyle,
  InfoStyle,
  ReleaseStyle,
  TariffStyle,
  CommunicationStyle,
} from "./SummerUfa.styled";

// image
import SummerUfaMainImage from "../../Images/SummerUfaMainImage.jpg"
import SummerUfaImage from "../../Images/SummerUfaImage.png";

// NPM
import { useMediaQuery } from "@mui/material";

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
    <SummerUfaPageStyle>
      <HamburgerMenu />
      <NameStyle
        LargeDesktop={isLargeDesktop}
        Desktop={isDesktop}
        Notebook={isNotebook}
        Tablet={isTablet}
        Mobile={isMobile}
      >
        <div className="ImageCont">
        <img src={SummerUfaMainImage} />
        </div>
      </NameStyle>

      <InfoStyle
        Desktop={isDesktop}
        Notebook={isNotebook}
        Tablet={isTablet}
        Mobile={isMobile}
      >
        <div className="InfoTextCont">
          <div className="InfoContText">
            <p className="text">
              В прямом эфире телеканала «Вся Уфа» гости марафона вместе с
              ведущими говорят о красоте, отдыхе, туризме, модных тенденциях и о
              летнем досуге в целом и рассказывают о своих продуктах с точки
              зрения сезонности и разнообразия оказываемых услуг. О Вас узнает
              вся Уфа!
            </p>
          </div>
        </div>
        <div>
          <img src={SummerUfaImage} />
        </div>
      </InfoStyle>

      <ReleaseStyle
        Desktop={isDesktop}
        Notebook={isNotebook}
        Tablet={isTablet}
        Mobile={isMobile}
      >
        <p className="MainText">График выход шоу</p>
        <div className="RelaseCont">
          <div className="ContText ContLeft">
            <p className="Text">27 июня</p>
          </div>
          <div className="ContText ContRight">
            <p className="Text">13:30 прямой эфир</p>
            <p className="Text">19:30 повтор</p>
            <p className="Text">23:30 повтор</p>
          </div>
          <div className="ContText ContLeft">
            <p className="Text">28 июня</p>
          </div>
          <div className="ContText ContRight">
            <p className="Text">10:00 повтор</p>
            <p className="Text">19:00 повтор</p>
          </div>
        </div>
      </ReleaseStyle>

      <TariffStyle
        Desktop={isDesktop}
        Notebook={isNotebook}
        Tablet={isTablet}
        Mobile={isMobile}
      >
        <p className="MainText">Тарифы</p>
        <div className="GridCont">
          <div className="ContText">
            <p className="Text">
              Участие представителя компании в прямом эфире, где он рассказывает
              о её деятельности, качестве услуг, акциях и т.д.
            </p>
            <p className="Text TextTime">До 15 мин.</p>
          </div>
          <p className="MainText MainContText">Гость в студии</p>
        </div>

        <div className="GridCont">
          <div className="ContText">
            <p className="Text">
              По согласованному сценарию съёмочная группа делает сюжет на вашей
              территории, далее производится монтаж и сюжет транслируется во
              время марафона с подводкой ведущих
            </p>
            <p className="Text TextTime">3 Мин.</p>
          </div>
          <p className="MainText MainContText">
            Рекламный сюжет о вашей компании
          </p>
        </div>

        <div className="GridCont">
          <div className="ContText">
            <p className="Text">
              Рекламный сюжет о вашей компании, с проведением розыгрыша
            </p>
            <p className="Text TextTime">3 мин.</p>
          </div>
          <p className="MainText MainContText">
            Рекламный сюжет о вашей компании, с проведением розыгрыша
          </p>
        </div>

        <div className="GridCont">
          <div className="ContText">
            <p className="Text">
              Участие представителя компании в прямом эфире + розыгрыш +
              производство рекламного сюжета и его трансляция в эфире
            </p>
            <p className="Text TextTime">15+3 мин.</p>
          </div>
          <p className="MainText MainContText">
            Гость в студии + рекламный сюжет о вашей компании, с проведением
            розыгрыша
          </p>
        </div>
      </TariffStyle>

      <CommunicationStyle
        Desktop={isDesktop}
        Notebook={isNotebook}
        Tablet={isTablet}
        Mobile={isMobile}
      >
        <div className="ContText">
          <p className="MainText OneGridCont">Способы связи</p>
          <p className="Text TwoGridCont">email: marta1989-08@mail.ru</p>
          <p className="Text ThreeGridCont">
            контактный телефон: 8 927-920-90-10
          </p>
        </div>
      </CommunicationStyle>
    </SummerUfaPageStyle>
  );
};

export default SummerUfaPage;
