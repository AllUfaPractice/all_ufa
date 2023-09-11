import styled from "styled-components";
import { css } from "styled-components";
import {Slide, SheduleText,InformationContainer} from "../../styles/global.styled"

export const FirstSlide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px) saturate(110%);
  -webkit-backdrop-filter: blur(5px) saturate(180%);
  background-color: rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 10px 5px -5px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0px 10px 5px -5px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 10px 5px -5px rgba(0, 0, 0, 0.6);
    padding: 5vh 0px 10vh;
    height: 100vh;
    width: 100%;


  ${(props) =>
    (props.largedesktop || props.desktop || props.notebook) &&
    css`
      img {
        border-radius:50% ;
        height: calc(15vw + 15vw);
        margin: calc(2.5vw + 2.5vw);
        transform: translateX(20%);
      }
    `}
  ${(props) =>
    (props.tablet || props.mobile) &&
    css`
      img {
        border-radius:50% ;
        height: calc(40vw + 40vw);
      }
    `}
`;

  export const InformationContainerExp = styled(InformationContainer)`
  justify-content: start;

  `;
  //Главный заголовок
  export const MainTitle = styled.div`
  //Выравнивание
  z-index: -1;
  padding: 40px;
  width: 100%;
  //Фон
  background-color: rgba(0, 30, 13, 0.9);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(0, 0, 0, 0.725);
  -webkit-border-top-left-radius: 50px;
  -webkit-border-bottom-left-radius: 50px;
  -moz-border-radius-topleft: 50px;
  -moz-border-radius-bottomleft: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;

  //Текст
  h1{
    font-size:calc(1.25vw + 1.25vh);
  }

  ${(props) =>
    (props.tablet || props.mobile) &&
    css`
      display: none;
    `}
`;
  //Расписание область
export const SheduleSlide = styled(Slide)`
  
  margin-bottom: 10vh;
  height: auto;
  //Фон
  backdrop-filter: blur(5px) saturate(110%);
  -webkit-backdrop-filter: blur(5px) saturate(180%);
  background-color: rgba(0, 0, 0, 0.3);
  //Тень
  -webkit-box-shadow: 0px 10px 5px -5px rgba(0, 0, 0, 0.6),
    0px -10px 5px -5px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0px 10px 5px -5px rgba(0, 0, 0, 0.6),
    0px -10px 5px -5px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 10px 5px -5px rgba(0, 0, 0, 0.6),
    0px -10px 5px -5px rgba(0, 0, 0, 0.6);
`;
//Расписание Ячейки
export const Shedule = styled(SheduleText)`
  //Выравнивание
  grid-template-columns: repeat(3,1fr);

  .TitleTime{
     grid-area: 1 / 1 / 2 / 4; 
  }
`;
//Область Тарифов
export const TariffContainer = styled.p`
  //Выравнивание
  margin-bottom: 10vh;
`;
