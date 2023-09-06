import React from "react";
import Navbar from "../../Components/Navigation/Navbar/Navbar";
import HamburgerMenu from "../../Components/Navigation/HamburgerMenu/HamburgerMenu";
import {
  BBPageStyle,
  NameStyle,
  InfoStyle,
  ReleaseStyle,
  TariffStyle,
  FirstContTariff,
  SecondContTariff,
  ThirdContTariff,
  CommunicationStyle,
} from "./BabyBoomPage.styled";

//Image
import BBMainImage from "../../Images/BBMainImage.png";
import BBImage from "../../Images/BBImage.jpg";

// NPM
import { useMediaQuery } from "@mui/material";

const BabyBoomPage = () => {
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
    <BBPageStyle>
      <HamburgerMenu />
      <NameStyle
        LargeDesktop={isLargeDesktop}
        Desktop={isDesktop}
        Notebook={isNotebook}
        Tablet={isTablet}
        Mobile={isMobile}
      >
        <div className="emptycont"></div>
        <img src={BBMainImage} />
        <div className="ContText">
          <p>Уникальный формат</p>
          <p>для</p>
          <p>всей семьи</p>
        </div>
      </NameStyle>

      <InfoStyle
        Desktop={isDesktop}
        Notebook={isNotebook}
        Tablet={isTablet}
        Mobile={isMobile}
      >
        <div className="InfoText">
          <li className="text"></li>
          <p className="text">
            «Детки BOOM!» Телепроект для всей семьи в уникальном
            развлекательно-познавательном формате.
          </p>
          <li className="text"></li>
          <p className="text">
            Весёлая ведущая Алинка-Апельсинка вместе с экспертами отвечают на
            вопросы родителей.
          </p>
          <li className="text"></li>
          <p className="text">
            Каждая программа посвящена определённой тематике: подготовка к
            празднику, правила дорожного движения, обзор развлечений, детское
            здоровье, домашние животные и многое другое.
          </p>
          <li className="text"></li>
          <p className="text">
            Весь эфир проходит под наблюдением главных гостей, конечно же детей!
          </p>
          <li className="text"></li>
          <p className="text">
            Именно они будут тестировать и оценивать детские товары, принимать
            участие в мастер-классах, интерактивах и флешмобах.
          </p>
        </div>
        <div>
          <img src={BBImage} />
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
            <p className="Text">Будни</p>
          </div>
          <div className="ContText ContRight">
            <p className="Text">13:50 - 15:00</p>
          </div>
          <div className="ContText ContLeft">
            <p className="Text">Повторы</p>
          </div>
          <div className="ContText ContRight">
            <p className="Text">21:15</p>
          </div>
          <div className="ContText ContLeft">
            <p className="Text">Повторы</p>
          </div>
          <div className="ContText ContRight">
            <p className="Text">11:05</p>
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
        <FirstContTariff
          Desktop={isDesktop}
          Notebook={isNotebook}
          Tablet={isTablet}
          Mobile={isMobile}
        >
          <div className="ContText">
            <li className="Text"></li>
            <p className="Text">
              Размещение ЛОГО в анонсирующих роликах с озвучиванием генерального
              спонсора программы ( 5 программ)
            </p>
            <li className="Text"></li>
            <p className="Text">
              Озвучивание ведущей генерального спонсора в каждой программе ( 5
              программ)
            </p>
            <li className="Text"></li>
            <p className="Text">
              Сюжет о Вашей компании (1 выход + повторы) -общее количество
              выходов - 6
            </p>
            <li className="Text"></li>
            <p className="Text">
              Участие в формате гостя в прямом эфире (15-20 мин)
            </p>
          </div>
          <p className="MainText MainContText">
            Генеральный партнер телемарафона
          </p>
        </FirstContTariff>
        <SecondContTariff
          Desktop={isDesktop}
          Notebook={isNotebook}
          Tablet={isTablet}
          Mobile={isMobile}
        >
          <div className="ContText">
            <p className="Text">
              Непринужденное общение с ведущими, ненавязчивая реклама
              деятельности компании Заказчика, эксклюзивная информация об
              услугах, товаре, а так же скидках и акциях!
            </p>
            <p className="Text TextTime">До 15 минут</p>
          </div>
          <p className="MainText MainContText">Гость в студии</p>
        </SecondContTariff>
        <ThirdContTariff
          Desktop={isDesktop}
          Notebook={isNotebook}
          Tablet={isTablet}
          Mobile={isMobile}
        >
          <div className="ContText">
            <li className="Text ContGridOne"></li>
            <p className="Text ContGridTwo">
              Размещение ЛОГО в анонсирующих роликах с озвучиванием генерального
              спонсора программы ( 5 программ)
            </p>
            <li className="Text ContGridThree"></li>
            <p className="Text ContGridFour">
              Озвучивание ведущей генерального спонсора в каждой программе ( 5
              программ)
            </p>
            <li className="Text ContGridFive"></li>
            <p className="Text ContGridSix">
              Сюжет о Вашей компании (1 выход + повторы) -общее количество
              выходов - 6
            </p>
            <p className="Text TextTime ContGridSeven">От 3 до 5 минут</p>
          </div>
          <p className="MainText MainContText">
            Видеосюжет о Вашем товаре и услуге в праздничном формате
          </p>
        </ThirdContTariff>
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
    </BBPageStyle>
  );
};

export default BabyBoomPage;
