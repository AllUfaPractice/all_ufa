// NPM
import React from "react";
import { useMediaQuery } from "@mui/material";

//Styles
import {
  FirstSlide,
  MainTitle,
  Shedule,
  SheduleSlide,
  TariffContainer,
} from "./BabyBoomPage.styled";

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

//Image
import BBMainImage from "../../Images/BBMainImage.png";

const BabyBoomPage = () => {
  const isLargeDesktop = useMediaQuery((theme) => theme.breakpoints.up("xl"));
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.between("lg", "xl"));
  const isNotebook = useMediaQuery((theme) => theme.breakpoints.between("md", "lg"));
  const isTablet = useMediaQuery((theme) =>theme.breakpoints.between("sm", "md"));
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <MyGlobalStyles>
      <FirstSlide largedesktop={isLargeDesktop} desktop={isDesktop} notebook={isNotebook} tablet={isTablet} mobile={isMobile}>
        <img src={BBMainImage} alt="Детки BOOM!"></img>
        <MainTitle largedesktop={isLargeDesktop} desktop={isDesktop} notebook={isNotebook} tablet={isTablet} mobile={isMobile}>
          <MainTitleText
            largedesktop={isLargeDesktop}
            desktop={isDesktop}
            notebook={isNotebook}
            tablet={isTablet}
            mobile={isMobile}
          >
            Уникальный формат для всей семьи
          </MainTitleText>
        </MainTitle>
      </FirstSlide>

      <InformationContainer largedesktop={isLargeDesktop} desktop={isDesktop} notebook={isNotebook} tablet={isTablet} mobile={isMobile}>
        <InformationText largedesktop={isLargeDesktop} desktop={isDesktop} notebook={isNotebook} tablet={isTablet} mobile={isMobile}>
          <li>
            «Детки BOOM!» Телепроект для всей семьи в уникальном
            развлекательно-познавательном формате.
          </li>
          <li>
            Весёлая ведущая Алинка-Апельсинка вместе с экспертами отвечают на
            вопросы родителей.
          </li>
          <li>
            Каждая программа посвящена определённой тематике: подготовка к
            празднику, правила дорожного движения, обзор развлечений, детское
            здоровье, домашние животные и многое другое.
          </li>
          <li>
            Весь эфир проходит под наблюдением главных гостей, конечно же детей!
          </li>
          <li>
            Именно они будут тестировать и оценивать детские товары, принимать
            участие в мастер-классах, интерактивах и флешмобах.
          </li>
        </InformationText>
      </InformationContainer>

      <SheduleSlide largedesktop={isLargeDesktop} desktop={isDesktop} notebook={isNotebook} tablet={isTablet} mobile={isMobile}>
        <SecondTitleText largedesktop={isLargeDesktop} desktop={isDesktop} notebook={isNotebook} tablet={isTablet} mobile={isMobile}>
          График выхода шоу
        </SecondTitleText>
        <Shedule largedesktop={isLargeDesktop} desktop={isDesktop} notebook={isNotebook} tablet={isTablet} mobile={isMobile}>
          <p>Будни</p>
          <p>13:50 - 15:00</p>
          <p>Повтор</p>
          <p>21:15</p>
          <p>Повтор</p>
          <p>11:05</p>
        </Shedule>
      </SheduleSlide>

      <SecondTitleText largedesktop={isLargeDesktop} desktop={isDesktop} notebook={isNotebook} tablet={isTablet} mobile={isMobile}>
        Тарифы
      </SecondTitleText>

      <TariffContainer>
        <ThirdTitleText largedesktop={isLargeDesktop} desktop={isDesktop} notebook={isNotebook} tablet={isTablet} mobile={isMobile}>
          Генеральный партнер телемарафона
        </ThirdTitleText>

        <TariffText largedesktop={isLargeDesktop} desktop={isDesktop} notebook={isNotebook} tablet={isTablet} mobile={isMobile}>
          <li>
            Размещение ЛОГО в анонсирующих роликах с озвучиванием генерального
            спонсора программы (5 программ)
          </li>
          <li>
            Озвучивание ведущей генерального спонсора в каждой программе ( 5
            программ)
          </li>
          <li>
            Сюжет о Вашей компании (1 выход + повторы) -общее количество выходов
            - 6
          </li>
          <li>Участие в формате гостя в прямом эфире (15-20 мин)</li>
        </TariffText>

        <ThirdTitleText largedesktop={isLargeDesktop} desktop={isDesktop} notebook={isNotebook} tablet={isTablet} mobile={isMobile}>
          Гость в студии
        </ThirdTitleText>

        <TariffText largedesktop={isLargeDesktop} desktop={isDesktop} notebook={isNotebook} tablet={isTablet} mobile={isMobile}>
          <p>
            Непринужденное общение с ведущими, ненавязчивая реклама деятельности
            компании Заказчика, эксклюзивная информация об услугах, товаре, а
            так же скидках и акциях!
          </p>
          <TariffTimeText>До 15 минут</TariffTimeText>
        </TariffText>

        <ThirdTitleText largedesktop={isLargeDesktop} desktop={isDesktop} notebook={isNotebook} tablet={isTablet} mobile={isMobile}>
          Видеосюжет о Вашем товаре и услуге в праздничном формате
        </ThirdTitleText>

        <TariffText largedesktop={isLargeDesktop} desktop={isDesktop} notebook={isNotebook} tablet={isTablet} mobile={isMobile}>
          <li>
            Изготовление рекламного сюжета с выездом по месту деятельности
            заказчика
          </li>
          <li>
            Заранее прописанный сценарий, профессиональная съемка и креативный
            монтаж
          </li>
          <li>
            Вы получите видеоматериал, который выйдет в эфире телеканала «Вся
            Уфа», и в дальнейшем сможете размещать на любых площадках.
          </li>
          <TariffTimeText>От 3 до 5 минут</TariffTimeText>
        </TariffText>
      </TariffContainer>
    </MyGlobalStyles>
  );
};

export default BabyBoomPage;
