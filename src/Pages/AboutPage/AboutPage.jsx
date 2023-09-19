// NPM
import { useMediaQuery } from "@mui/material";
import React from "react";

// Styles
import {
  InformationContainerExp,
  InformationTextExp,
  FirstSlide,
  UsSlide,
  UsSlideCont,
} from "./AboutPage.styled";

// Global Styles
import { MyGlobalStyles } from "../../styles/global.styled";

//Image
import AboutImage from "../../Images/AboutImage1.png";

const AboutPage = () => {
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
        desktop={isDesktop}
        notebook={isNotebook}
        tablet={isTablet}
        mobile={isMobile}
      >
        <img src={AboutImage} />
        <h1>Наша миссия: поддержка и продвижение бренда Уфы</h1>
      </FirstSlide>

      <InformationContainerExp
        largedesktop={isLargeDesktop}
        desktop={isDesktop}
        notebook={isNotebook}
        tablet={isTablet}
        mobile={isMobile}
      >
        <InformationTextExp
          largedesktop={isLargeDesktop}
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          <p>
            «Вся Уфа» — многопрофильная организация подведомственная
            Администрации города Уфы — столицы Республики Башкортостан. Это
            информационный центр в который ежедневно поступают сообщения со всей
            Уфы
          </p>
          <p>Мы на связи с:</p>
          <li>
            администрациями всех 7 районов города: Советский, Октябрьский,
            Кировский, Ленинский, Орджоникидзевский, Дёмский, Калининский
          </li>
          <li>
            государственными и муниципальными ведомствами ~ культурными,
            научными, спортивными учреждениями
          </li>
          <li>народными корреспондентами и горожанами</li>
          <li>нашими друзьями и партнёрами</li>
        </InformationTextExp>
      </InformationContainerExp>

      {/*редакциявсейyфы*/}
      <UsSlide
        desktop={isDesktop}
        notebook={isNotebook}
        tablet={isTablet}
        mobile={isMobile}
      >
        <h3>#редакциявсейyфы</h3>

        <UsSlideCont
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          <p>
            Мы ежедневно и круглосуточно рассказываем о жизни башкирской столицы
            во всём её разнообразии:
          </p>

          <p>
            События | Люди | История | Культура | Искусство | Развлечения |
            Пространства | Детство | Спорт | Вкусы | Знания
          </p>

          <p>
            Часто, мы освещаем непростые истории, огласка которых очень важна, а
            иногда даже спасительна для героев наших сюжетов.
          </p>

          <p>
            По будням, журналисты компании каждый час выходят в прямой эфир с
            оперативными новостями-пятиминутками, а более подробной информацией
            делятся в 13-ти и 19-ти часовых выпусках.
          </p>
        </UsSlideCont>
      </UsSlide>

      {/* #всяуфавещает */}
      <UsSlide
        desktop={isDesktop}
        notebook={isNotebook}
        tablet={isTablet}
        mobile={isMobile}
      >
        <h3>#всяуфавещает</h3>

        <UsSlideCont
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          <li>
            В эфире телеканала с охватом более 3 000 000 телеприёмников (Уфа,
            Стерлитамак, Салават, Ишимбай, Октябрьский, Нефтекамск,
            Благовещенск, Белебей, Туймазы)
          </li>

          <li>на сайте с посещаемостью более 2000 человек в сутки</li>

          <li>в ВК, Телеграмм, Ютуб</li>

          <li>на стриминговых сервисах ЛАЙМ HD, Peers.TV и др</li>
        </UsSlideCont>
      </UsSlide>

      {/* #программывсейуфы */}
      <UsSlide
        desktop={isDesktop}
        notebook={isNotebook}
        tablet={isTablet}
        mobile={isMobile}
      >
        <h3>#программывсейуфы</h3>

        <UsSlideCont
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          <p>
            Информационно-развлекательные и познавательные программы на любой
            вкус и для всей всей семьи, а главное — они про твой город:
            «Столица», «Детки Бум», «Место Происшествия», «Уфа в курсе»,
            «Смотри, какая Уфа», «Афиша Уфы», «Хит Уфы», «Вкусно».
          </p>
        </UsSlideCont>
      </UsSlide>

      {/* #медиашколавсейуфы */}
      <UsSlide
        desktop={isDesktop}
        notebook={isNotebook}
        tablet={isTablet}
        mobile={isMobile}
      >
        <h3>#медиашколавсейуфы</h3>

        <UsSlideCont
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          <p>
            Вся Уфа, это социальный лифт для молодых авторов, будущих
            журналистов, деятелей медиа и культуры, где равные возможности
            предоставляются всем независимо от того, новичок ты, или уже
            заработал себе имя.
          </p>

          <p>
            Прояви свой талант, найди новую аудиторию, улучши качество
            материала. С 99 года, через наши стены прошли настоящие
            профессионалы своего дела. Медиашкола для взрослых и детей ждёт
            всех, кто желает прокачать свои ораторские навыки, избавиться от
            страха публичных выступлений и попробовать себя в роли журналиста
          </p>
        </UsSlideCont>
      </UsSlide>

      {/* #проектывсейуфы */}
      <UsSlide
        desktop={isDesktop}
        notebook={isNotebook}
        tablet={isTablet}
        mobile={isMobile}
      >
        <h3>#проектывсейуфы</h3>

        <UsSlideCont
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          <p>
            Мы занимаемся проектным продюсированием – разрабатываем, запускаем,
            интегрируем, администрируем и развиваем разноформатные проекты для
            продвижения брендов, событий и медийных личностей. Создаём сами и
            поддерживаем множество социальных проектов
          </p>

          <p>
            Организация прямых трансляций- концертно-зрелищные, спортивные и
            культурно массовые мероприятия
          </p>

          <p>
            Производство программ под ключ- от идеи и оформления, до съёмок и
            продвижения
          </p>

          <p>
            Организация событий любого формата и сложности- от городских
            фестивалей до корпоративных и светских праздников- от идеи и
            сценарного плана, до артистов и технического обеспечения
          </p>
        </UsSlideCont>
      </UsSlide>

      {/*#рекламавсейуфы */}
      <UsSlide
        desktop={isDesktop}
        notebook={isNotebook}
        tablet={isTablet}
        mobile={isMobile}
      >
        <h3>#рекламавсейуфы</h3>

        <UsSlideCont
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          <p>
            Мы занимаемся производством аудио-визуальной рекламы и её
            размещением на наших площадках
          </p>

          <p>Аудио-ролики- озвучка- радио- мастеринг</p>

          <p>Видео-ролики- графика и анимация- имиджевые</p>
          <li>обучающие</li>
          <li>социальные- отчётные</li>
          <li>вирусные</li>
          <li>видео-арт</li>

          <p>Выездные съёмки- новостные сюжеты- документальные фильмы</p>
          <li>рекламные и презентационные ролики</li>

          <p>Размещение рекламы</p>
          <li>рекламные блоки в эфире телеканала</li>
          <li>межпрограммки</li>
          <li>бегущая строка- новостные сюжеты</li>
          <li>афиша</li>
          <li>телегазета</li>
          <li>сотрудничество с артистами и блогерами</li>
        </UsSlideCont>
      </UsSlide>

      {/*#базавсейуфы */}
      <UsSlide
        desktop={isDesktop}
        notebook={isNotebook}
        tablet={isTablet}
        mobile={isMobile}
      >
        <h3>#базавсейуфы</h3>

        <UsSlideCont
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          <p>
            На Всей Уфе созданы все условия для создания и продвижения
            медиапродукта:- команда сценаристов, журналистов, визажистов,
            редакторская и режиссёрская группа
          </p>
          <li>отдел графики и монтажа</li>
          <li>отдел маркетинга и рекламы</li>
          <li>площадка для разных форматов мероприятий и презентаций</li>
          <li>переговорка</li>

          <p>
            Съёмочный павильон- площадка для организации съёмок рекламных
            роликов, музыкальных записей и телепередач
          </p>

          <p>Аппаратно-студийный комплекс</p>
          <li>
            видео и звукозаписывающая аппаратура, декорации, подъёмные
            устройства и прожекторы
          </li>
        </UsSlideCont>
      </UsSlide>

      {/*#партнёрывсейуфы*/}
      <UsSlide
        desktop={isDesktop}
        notebook={isNotebook}
        tablet={isTablet}
        mobile={isMobile}
      >
        <h3>#партнёрывсейуфы</h3>

        <UsSlideCont
          desktop={isDesktop}
          notebook={isNotebook}
          tablet={isTablet}
          mobile={isMobile}
        >
          <p>
            Мы открыты к сотрудничеству и партнёрским отношениям. Делая вклад в
            нашу организацию ваша компания получает:
          </p>
          <li>
            улучшение имиджа и деловой репутации на местном и национальном
            уровнях
          </li>
          <li>
            создание позитивного восприятия у СМИ, общественности и органов
            государственной власти
          </li>
          <li>
            свидетельство о устойчивом развитии и укрепление взаимоотношений с
            инвесторами
          </li>
          <li>ассоциирование бренда с городом и его развитием</li>
          <li>рост лояльности среди сотрудников и партнёров</li>
          <li>повышение доверия у разных целевых аудиторий</li>

          <p>Возможности по рекламным интеграциям:</p>
          <div className="emptycont"></div>

          <p>Гость в студии</p>
          <li>
            непринуждённое общение с ведущими, нативная реклама вашей
            деятельности и демонстрация вашей экспертности по обсуждаемой теме
          </li>
          <div className="emptycont"></div>

          <p>
            Партнёр рубрики- видеосюжет о вашем товаре, услуге, продукте, бренде
          </p>
          <li>размещение рекламного ролика во время рубрики</li>

          <p>Партнёр программы- продакт-плейсмент</p>
          <li>
            озвучивание ведущими- размещение рекламного ролика во время
            программы
          </li>
        </UsSlideCont>
      </UsSlide>
    </MyGlobalStyles>
  );
};

export default AboutPage;
