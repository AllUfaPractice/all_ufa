import React from "react";
import HamburgerMenu from "../../Components/Navigation/HamburgerMenu/HamburgerMenu";

import {
  CookingShowPage,
  NameStyle,
  InfoStyle,
  ReleaseStyle,
  TariffStyle,
  CommunicationStyle
} from "./CookingShow.styled";

// Image
import CookingMainShowImage from "../../Images/CookingShowMainImage.png";
import CookingShowImage from "../../Images/CookingShowImage.png";

// NPM
import { useMediaQuery } from "@mui/material";

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
    <CookingShowPage>
      <HamburgerMenu />

      <NameStyle
        LargeDesktop={isLargeDesktop}
        Desktop={isDesktop}
        Notebook={isNotebook}
        Tablet={isTablet}
        Mobile={isMobile}
      >
        <div className="emptycont"></div>
        <img src={CookingMainShowImage} />
        <div className="ContText">
          <p>
            Сколько бы тебе не было лет, и какой бы статус ты не занимал –
            вкусно завтракать, обедать и ужинать любят все! А значит и смотреть
            самую вкусную программу на телеканале «Вся Уфа» будут тоже ВСЕ!
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
              В кулинарном шоу своими рецептами поделятся самые известные люди
              республики. Согласитесь, всегда интересно узнать, что любят есть
              депутат, звезда ютуба, народный артист или даже веселый таксист, а
              также что готовят в лучших заведениях нашего города!
            </p>
            <li className="text"></li>
            <p className="text">
              Очаровательная ведущая, сочные кадры, лайфхаки от гостей – все это
              в программе «Вкусно»
            </p>
            <li className="text"></li>
            <p className="text">
              Ведущая рубрики и ее соведущие (известные люди республики,
              партнеры наших эфиров) постараются показать зрителям простые и
              проверенные временем рецепты из реальной жизни, а также рассказать
              о продуктах, которые участвуют в блюдах и о партнерах, которые
              помогают нам создать эту программу.
            </p>
          </div>
          <p className="SecondText">
            Все программы дублируются ВК телеканала «Вся Уфа»
          </p>
        </div>
        <div>
          <img src={CookingShowImage} />
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
            <p className="Text">Вторник</p>
          </div>
          <div className="ContText ContRight">
            <p className="Text">13:15</p>
            <p className="Text">19:15</p>
            <p className="Text">23:15</p>
          </div>
          <div className="ContText ContLeft">
            <p className="Text">Среда</p>
          </div>
          <div className="ContText ContRight">
            <p className="Text">7:15</p>
          </div>
          <div className="ContText ContLeft">
            <p className="Text">Суббота</p>
          </div>
          <div className="ContText ContRight">
            <p className="Text">18:30</p>
          </div>
          <div className="ContText ContLeft">
            <p className="Text">Воскресенье</p>
          </div>
          <div className="ContText ContRight">
            <p className="Text">9:45</p>
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
            <p className="Text">Совместное приготовление блюда</p>
            <p className="Text "></p>
          </div>
          <p className="MainText MainContText">Участие в рубрике</p>
        </div>

        <div className="GridCont">
          <div className="ContText">
            <p className="Text">Рекламный ролик перед или после программы</p>
            <p className="Text TextTime">До 20 сек</p>
          </div>
          <p className="MainText MainContText">Акции, новости Вашей компании</p>
        </div>

        <div className="GridCont">
          <div className="ContText">
            <p className="Text">
              (продукция в кадре) + озвучивание ведущими партнера, продукция
              крупным планом 1 раз в час
            </p>
            <p className="Text "></p>
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
    </CookingShowPage>
  );
};

export default CookingShowPPage;
