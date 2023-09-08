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
        position: static;
        width: 80%;
      }
      .ContText {
        background: none;
        display: none;
      }
      p {
        display: none;
      }
    `}
`;

export const InfoStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  
  .InfoText {
    display: grid;
    grid-template-columns: 0.01fr 1fr;
    background-color: white;
    width: 90%;
    padding: 5%;
    border-radius: 125px;
  }
  .text {
    font-size: 40px;
    font-weight: 900;
    margin-bottom: 40px;
  }

  /* Decktop 1920 */
  ${(props) =>
    props.Desktop &&
    css`
      .text {
        font-size: 35px;
        margin-bottom: 35px;
      }
    `}
  /* Notebook 1280*/
${(props) =>
    props.Notebook &&
    css`
      .text {
        font-size: 30px;
        margin-bottom: 30px;
      }
      .InfoText{
        border-radius: 90px;
      }
    `}
/* Tablet 960*/
${(props) =>
    props.Tablet &&
    css`
      .InfoText {
        border-radius: 50px;
      }
      .text {
        font-size: 18px;
        margin-bottom: 20px;
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


export const TariffStyle = styled.div`
  .MainText {
    font-size: 80px;
    color: white;
    text-align: center;
    margin: 100px 0;
  }
  .ContText li {
    list-style-type: auto;
    margin-right: 20px;
  }
  .Text {
    color: black;
    font-size: 35px;
    font-weight: 900;
    margin: 15px 0;
  }
  .MainContText {
    font-family: serif;
    width: 75%;
    margin: auto;
  }
  .MainSecondText{
    font-size: 60px;
    letter-spacing: 10px;
    color: white;
    font-weight: 400;
    text-align: center;
    font-weight: 900;
  }

  .TextTime {
    width: 70%;
    height: 180px;
    padding: 40px 0;
    margin: auto 0;
    margin-left: 20%;
    text-align: center;
    border-left: solid gray 2px;
  }

  /* Decktop 1920 */
  ${(props) =>
    props.Desktop &&
    css`
      .MainText {
        font-size: 60px;
        margin: 100px 0;
      }
      .MainSecondText{
        font-size: 45px;
      }
      .MainContText {
        font-family: serif;
        width: 75%;
        margin: auto;
      }
      .Text {
        color: black;
        font-size: 35px;
        margin: 15px 0;
      }
      .TextTime {
        width: 70%;
        height: 180px;
        padding: 40px 0;
        margin: auto 0;
        margin-left: 20%;
        text-align: center;
        border-left: solid gray 2px;
      }
    `}
  /* Notebook 1280*/
  ${(props) =>
    props.Notebook &&
    css`
      .MainText {
        font-size: 45px;
        margin: 50px 0;
      }
      .MainContText {
        font-family: serif;
        width: 75%;
        margin: auto;
      }
      .Text {
        color: black;
        font-size: 25px;
        margin: 15px 0;
      }
      .MainSecondText{
        font-size: 35px;
        letter-spacing: 7xpx;
      }
      .TextTime {
        width: 70%;
        height: 80px;
        padding: 0;
        margin: auto 0;
        margin-left: 20%;
        text-align: center;
        border-left: solid gray 2px;
      }
    `}
  /* Tablet 960*/
  ${(props) =>
    props.Tablet &&
    css`
      .MainText {
        font-size: 30px;
        margin: 50px 0;
      }
      .MainContText {
        font-family: serif;
        width: 75%;
        margin: auto;
      }
      .Text {
        color: black;
        font-size: 14px;
        margin: 10px 0;
      }
      .MainSecondText{
        font-size: 24px;
        letter-spacing: 2px;
      }
      .TextTime {
        width: 70%;
        height: 30px;
        padding: 0 0 0 5px;
        margin: auto 0;
        margin-left: 20%;
        text-align: center;
        border-left: solid gray 2px;
      }
    `}
  /* Mobile 600*/
  ${(props) =>
    props.Mobile &&
    css`
      .MainText {
        font-size: 24px;
        margin: 25px 0;
      }
      .MainContText {
        font-size: 18px;
        font-family: serif;
        width: 75%;
        margin: auto;
      }
      .Text {
        color: black;
        font-size: 10px;
        margin: 6px 0;
      }
      .MainSecondText{
        font-size: 16px;
        letter-spacing: 0px;
      }
      .TextTime {
        width: 70%;
        height: 35px;
        padding: 0 0 0 5px;
        margin: auto 0;
        margin-left: 0;
        text-align: center;
        border-left: solid gray 1px;
  `}
`;

export const FirstContTariff = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.6fr;
  align-items: center;
  padding-bottom: 50px;

  .ContText {
    display: grid;
    grid-template-columns: 0.01fr 1fr;
    background-color: white;
    border-radius: 0 60px 60px 0;
    width: 95%;
    padding: 3% 8% 3% 7%;
  }

  /* Decktop 1920 */
  ${(props) =>
    props.Desktop &&
    css`
      .ContText {
        display: grid;
        grid-template-columns: 0.01fr 1fr;
        background-color: white;
        border-radius: 0 60px 60px 0;
        padding: 4% 15% 4% 7%;
      }
    `}
  /* Notebook 1280*/
  ${(props) =>
    props.Notebook &&
    css`
      .ContText {
        display: grid;
        grid-template-columns: 0.01fr 1fr;
        background-color: white;
        border-radius: 0 60px 60px 0;
        padding: 2% 15% 2% 7%;
      }
    `}
  /* Tablet 960*/
  ${(props) =>
    props.Tablet &&
    css`
      padding-bottom: 25px;
      .ContText {
        display: grid;
        grid-template-columns: 0.01fr 1fr;
        background-color: white;
        border-radius: 0 40px 40px 0;
        padding: 2% 15% 2% 7%;
      }
    `}
  /* Mobile 600*/
  ${(props) =>
    props.Mobile &&
    css`
      padding-bottom: 20px;
      .ContText {
        display: grid;
        grid-template-columns: 0.01fr 1fr;
        background-color: white;
        border-radius: 0 20px 20px 0;
        padding: 0 15% 0 7%;
      }
    `}
`;

export const SecondContTariff = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.6fr;
  align-items: center;
  padding: 50px 0;

  .ContText {
    display: grid;
    grid-template-columns: 1fr 0.2fr;
    align-items: center;
    background-color: white;
    border-radius: 0 60px 60px 0;
    width: 95%;
    padding: 3% 0% 3% 7%;
  }
  /* Decktop 1920 */
  ${(props) =>
    props.Desktop &&
    css`
      .ContText {
        display: grid;
        grid-template-columns: 1fr 0.28fr;
        align-items: center;
        background-color: white;
        border-radius: 0 60px 60px 0;
        width: 95%;
        padding: 4% 0% 4% 7%;
      }
    `}
  /* Notebook 1280*/
  ${(props) =>
    props.Notebook &&
    css`
      .ContText {
        display: grid;
        grid-template-columns: 1fr 0.28fr;
        align-items: center;
        background-color: white;
        border-radius: 0 60px 60px 0;
        width: 95%;
        padding: 2% 0% 2% 7%;
      }
    `}
  /* Tablet 960*/
  ${(props) =>
    props.Tablet &&
    css`
      padding: 25px 0;
      .ContText {
        display: grid;
        grid-template-columns: 1fr 0.28fr;
        align-items: center;
        background-color: white;
        border-radius: 0 40px 40px 0;
        width: 95%;
        padding: 2% 0% 2% 7%;
      }
    `}
  /* Mobile 600*/
  ${(props) =>
    props.Mobile &&
    css`
      padding: 10px 0;
      .ContText {
        display: grid;
        grid-template-columns: 1fr 0.28fr;
        align-items: center;
        background-color: white;
        border-radius: 0 20px 20px 0;
        width: 95%;
        padding: 0 0% 0 7%;
      }
    `}
`;

export const ThirdContTariff = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.6fr;
  align-items: center;
  padding: 50px 0;

  .ContGridOne {
    grid-area: 1 / 1 / 2 / 2;
  }
  .ContGridTwo {
    grid-area: 1 / 2 / 2 / 3;
  }
  .ContGridThree {
    grid-area: 2 / 1 / 3 / 2;
  }
  .ContGridFour {
    grid-area: 2 / 2 / 3 / 3;
  }
  .ContGridFive {
    grid-area: 3 / 1 / 4 / 2;
  }
  .ContGridSix {
    grid-area: 3 / 2 / 4 / 3;
  }
  .ContGridSeven {
    grid-area: 1 / 3 / 4 / 4;
  }

  .ContText {
    display: grid;
    grid-template-columns: 0.01fr 1fr 0.2fr;
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    background-color: white;
    border-radius: 0 60px 60px 0;
    width: 95%;
    padding: 3% 0% 3% 7%;
  }


