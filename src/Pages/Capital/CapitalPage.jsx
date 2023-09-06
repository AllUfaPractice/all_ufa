import React from "react";
import Navbar from "../../Components/Navigation/Navbar/Navbar";
import HamburgerMenu from "../../Components/Navigation/HamburgerMenu/HamburgerMenu";
import {
  CapitalPageStyle,
  NameStyle,
  InfoStyle,
  ReleaseStyle,
  TariffStyle,
  CommunicationStyle,
} from "./CapitalPage.styled";

// Image
import CapitalMainImage from "../../Images/CapitalMainImage.png";
import CapitalImgae from "../../Images/CapitaImage.jpg";

// NPM
import { useMediaQuery } from "@mui/material";

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
    <CapitalPageStyle>
      <HamburgerMenu />
      <NameStyle
        LargeDesktop={isLargeDesktop}
        Desktop={isDesktop}
        Notebook={isNotebook}
        Tablet={isTablet}
        Mobile={isMobile}
      >
        <div className="emptycont"></div>
        <img src={CapitalMainImage} />
        <div className="ContText">
          <p>
            Программа «Столица» - телепрограмма совершенно нового формата, где
            ведущие и зрители окажутся намного ближе, чем могут себе
            представить!
          </p>
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
            <li className="text"></li>
            <p className="text">
              Любимые телеведущие обсудят волнующие темы в легкой и веселой
              атмосфере, и покажут, что даже плохая ситуация может рассмешить.
            </p>
            <li className="text"></li>
            <p className="text">
              С понедельника по пятницу, с семи до восьми, вас ждут -
              увлекательные рубрики, лучшие шутки, полезная информация.
            </p>
            <li className="text"></li>
            <p className="text">
              И самое главное - позитивное настроение, которое будет
              сопровождать вовремя, а затем и после просмотра.
            </p>
          </div>
          <p className="SecondText">
            Все программы дублируются ВК телеканала «Вся Уфа»
          </p>
        </div>
        <div>
          <img src={CapitalImgae} />
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
            <p className="Text">Прямой эфир</p>
          </div>
          <div className="ContText ContRight">
            <p className="Text">13:30 - 15:00</p>
          </div>
          <div className="ContText ContLeft">
            <p className="Text">Повторы</p>
          </div>
          <div className="ContText ContRight">
            <p className="Text">19:30 - 21:00</p>
            <p className="Text">23:30 - 01:00</p>
            <p className="Text">04:00 - 05:30</p>
            <p className="Text">08:00 - 09:30</p>
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
              Участие руководителя (представителя, коллектива) в прямом эфире
              программы
            </p>
            <p className="Text TextTime">До 15 минут</p>
          </div>
          <p className="MainText MainContText">Гость в студии</p>
        </div>

        <div className="GridCont">
          <div className="ContText">
            <p className="Text">Сюжет о Вашей компании</p>
            <p className="Text TextTime">До 2,5 Минут</p>
          </div>
          <p className="MainText MainContText">Горячие новости</p>
        </div>

        <div className="GridCont">
          <div className="ContText">
            <p className="Text">Акции, новости Вашей компании</p>
            <p className="Text TextTime">До 30 сек</p>
          </div>
          <p className="MainText MainContText">Акции, новости Вашей компании</p>
        </div>

        <div className="GridCont">
          <div className="ContText">
            <p className="Text">
              (продукция в кадре) + озвучивание ведущими партнера, продукция
              крупным планом 1 раз в час
            </p>
            <p className="Text"></p>
          </div>
          <p className="MainText MainContText">
            Скрытая реклама (Product placement)
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
    </CapitalPageStyle>
  );
};

export default CapitalPage;
