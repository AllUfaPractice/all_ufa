import styled from "styled-components";
import { css } from "styled-components";
import { Slide, SheduleText } from "../../styles/global.styled";

//Первый слайд
export const FirstSlide = styled(Slide)`
  //Выравнивание
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px) saturate(110%);
  -webkit-backdrop-filter: blur(5px) saturate(180%);
  background-color: rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 10px 5px -5px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0px 10px 5px -5px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 10px 5px -5px rgba(0, 0, 0, 0.6);

  ${(props) =>
    props.largedesktop &&
    css`
      img {
        height: 80vh;
        transform: translateX(15%);
      }
    `}
  ${(props) =>
    props.desktop &&
    css`
      img {
        height: 80vh;
        transform: translateX(20%);
      }
    `}
   ${(props) =>
    props.notebook &&
    css`
      img {
        height: 50vh;
        transform: translateX(15%);
      }
    `}
   ${(props) =>
    props.tablet &&
    css`
      img {
        height: 35vh;
      }
    `}
   ${(props) =>
    props.mobile &&
    css`
      img {
        height: 30vh;
      }
    `}
`;
//ПГлавный заголовок
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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;
//Область Тарифов
export const TariffContainer = styled.p`
  //Выравнивание
  margin-bottom: 10vh;
`;


