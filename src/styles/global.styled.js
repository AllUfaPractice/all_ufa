import styled from "styled-components";
import { css } from "styled-components";

export const MyGlobalStyles = styled.div`
  margin: 0;
  padding: 0;
  * {
    font-size: calc(1px + 1vw + 1vh);
  }

  h1 {
    font-size: calc(2vw + 2vh);
  }

  h2 {
    font-size: calc(2vw + 1.5vh);
  }

  h3 {
    font-size: calc(1.5vw + 1.2vh);
  }
  h4 {
    font-size: calc(1.2vw + 1vh);
  }
  p {
    font-size: calc(1px + 1vw + 1vh);
  }
`;

export const Slide = styled.div`
  ${(props) =>
    (props.largedesktop || props.desktop || props.notebook) &&
    css`
      padding: 5vh 0 10vh 0;
      height: 100vh;
      width: 100%;
    `}
  ${(props) =>
    (props.tablet || props.mobile) &&
    css`
      padding: 5vh 0;
      height: 100vh;
      width: 100%;
    `}
`;

export const MainTitleText = styled.h1`
  text-align: center;
  color: rgba(255, 255, 255, 1);
  font-weight: 700;
  text-shadow: 3px 5px 2px rgba(71, 71, 71, 1);
  letter-spacing: 10px;

  ${(props) =>
    props.largedesktop &&
    css`
      //font-size: 80px;
    `}

  ${(props) =>
    props.desktop &&
    css`
      //font-size: 55px;
    `}

  ${(props) =>
    props.notebook &&
    css`
      //font-size: 30px;
    `}

  ${(props) =>
    props.tablet &&
    css`
      display: none;
    `}

  ${(props) =>
    props.mobile &&
    css`
      display: none;
    `}
`;

export const InformationContainer = styled.div`
  //Выравнивание
  display: flex;
  height: 70vh;
  width: 90vw;
  margin: 15vh 5vw;
  justify-content: center;
  //Фон
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.125);
  border-radius: 50px;
  //Тень
  -webkit-box-shadow: 0px 10px 5px -5px rgba(0, 0, 0, 0.6),
    0px -10px 5px -5px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0px 10px 5px -5px rgba(0, 0, 0, 0.6),
    0px -10px 5px -5px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 10px 5px -5px rgba(0, 0, 0, 0.6),
    0px -10px 5px -5px rgba(0, 0, 0, 0.6);
  //Текст Выравнивание
  align-items: center;

  ${(props) => (props.largedesktop || props.desktop || props.notebook) && css``}

  ${(props) =>
    props.largedesktop &&
    css`
      padding: 8vh;
      //Текст
      li {
        margin: 6vh 0;
      }
    `}
  ${(props) =>
    props.desktop &&
    css`
      //Текст Выравнивание
      padding: 10vh;
      //Текст
      li {
        margin: 6vh 0;
      }
    `}
   ${(props) =>
    props.notebook &&
    css`
      //Текст Выравнивание
      padding: 8vh;
      //Текст
      li {
        margin: 3vh 0;
      }
    `}
   ${(props) =>
    props.tablet &&
    css`
      //Текст Выравнивание
      padding: 6vh;
      //Текст
      li {
        margin: 5vh 0;
      }
    `}
   ${(props) =>
    props.mobile &&
    css`
      //Текст Выравнивание
      padding: 3vh;
      //Текст
      li {
        margin: 5vh 0;
      }
    `}
`;

export const InformationText = styled.p`
  text-align: left;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
  text-shadow: 2px 2px 0px #ffffff, 5px 4px 0px rgba(0, 0, 0, 0.15);
`;

export const SecondTitleText = styled.h2`
  //Фон
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.125);
  //Текст
  text-align: center;
  color: rgba(255, 255, 255, 1);
  text-shadow: 4px 3px 0 #7a7a7a;
`;

export const ThirdTitleText = styled.h3`
  //Фон
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  //Текст
  font-family: PT Serif;
  font-weight: 400;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  text-shadow: 3px 3px 1px rgba(0, 0, 0, 1);
  ${(props) =>
    (props.largedesktop || props.desktop || props.notebook) &&
    css`
      //Выравнивание
      width: 50vw;
      margin-left: auto;
      padding: 0 5vw;
      //Фон
      -webkit-border-top-left-radius: 50px;
      -webkit-border-bottom-left-radius: 50px;
      -moz-border-radius-topleft: 50px;
      -moz-border-radius-bottomleft: 50px;
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
      border: 1px solid rgba(255, 255, 255, 0.125);
      //Тень
      -webkit-box-shadow: -15px 0px 30px 15px rgba(0, 0, 0, 0.4);
      -moz-box-shadow: -15px 0px 30px 15px rgba(0, 0, 0, 0.4);
      box-shadow: -15px 0px 30px 15px rgba(0, 0, 0, 0.4);
    `}
  ${(props) =>
    props.largedesktop &&
    css`
      letter-spacing: 10px;
    `}
  ${(props) =>
    props.desktop &&
    css`
      letter-spacing: 10px;
    `}
   ${(props) =>
    props.notebook &&
    css`
      letter-spacing: 7xpx;
    `}
   ${(props) =>
    props.tablet &&
    css`
      letter-spacing: 2px;
    `}
   ${(props) =>
    props.mobile &&
    css`
      letter-spacing: 1px;
    `}
`;

export const SheduleText = styled.h4`
  //Выравнивание
  display: grid;
  //Текст
  text-align: center;
  color: rgba(255, 255, 255, 1);
  p {
    //Выравнивание
    margin: 0;
    //Фон
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background: rgba(120, 184, 148, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    //Текст Выравнивание
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  ${(props) =>
    (props.largedesktop || props.desktop || props.notebook || props.tablet) &&
    css`
      //Тень текста
      text-shadow: 2px 2px 0px rgba(0, 30, 13, 0.9),
        2px -2px 0px rgba(0, 30, 13, 0.9), -2px 2px 0px rgba(0, 30, 13, 0.9),
        -2px -2px 0px rgba(0, 30, 13, 0.9), 2px 0px 0px rgba(0, 30, 13, 0.9),
        0px 2px 0px rgba(0, 30, 13, 0.9), -2px 0px 0px rgba(0, 30, 13, 0.9),
        0px -2px 0px rgba(0, 30, 13, 0.9);
    `}
  ${(props) =>
    props.largedesktop &&
    css`
      //Выравнивание
      column-gap: 5vw;
      row-gap: 10vh;
      margin: 0 20vw;
      padding-top: 5vh;
      //Текст
      p {
        height: 10vh;
      }
    `}
  ${(props) =>
    props.desktop &&
    css`
      //Выравнивание
      column-gap: 5vw;
      row-gap: 10vh;
      margin: 0 20vw;
      padding-top: 5vh;
      //Текст
      p {
        height: 10vh;
      }
    `}
   ${(props) =>
    props.notebook &&
    css`
      //Выравнивание
      column-gap: 5vw;
      row-gap: 7vh;
      margin: 0 10vw;
      padding-top: 5vh;
      //Текст
      p {
        height: 7vh;
      }
    `}
   ${(props) =>
    props.tablet &&
    css`
      //Выравнивание
      column-gap: 5vw;
      row-gap: 5vh;
      margin: 0 10vw;
      padding-top: 5vh;
      //Текст
      p {
        height: 5vh;
      }
    `}
   ${(props) =>
    props.mobile &&
    css`
      //Выравнивание
      column-gap: 5vw;
      row-gap: 5vh;
      margin: 0 10vw;
      padding-top: 5vh;
      //Текст
      p {
        height: 5vh;
      }
    `}
`;

export const TariffText = styled.p`
  //Выравнивание
  padding: 3vh 5vh;
  //Текст
  text-align: left;
  color: rgba(0, 0, 0, 1);
  font-family: PT Serif;
  font-weight: 400;
  line-height: 42px;
  letter-spacing: 0.02em;
  text-align: left;

  //Фон
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.125);

  //Тень
  -webkit-box-shadow: 15px 0px 30px 15px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 15px 0px 30px 15px rgba(0, 0, 0, 0.4);
  box-shadow: 15px 0px 30px 15px rgba(0, 0, 0, 0.4);

  ${(props) =>
    (props.largedesktop || props.desktop || props.notebook) &&
    css`
      //Выравнивание
      -webkit-border-top-right-radius: 50px;
      -webkit-border-bottom-right-radius: 50px;
      -moz-border-radius-topright: 50px;
      -moz-border-radius-bottomright: 50px;
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
      width: 70vw;
    `}
`;

export const TariffTimeText = styled.p`
  text-align: left;
  color: rgba(0, 0, 0, 0.7);
`;

