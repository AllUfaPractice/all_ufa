import styled from "styled-components";
import { css } from "styled-components";

export const GlobalStyles = styled.div`
  margin: 0;
  padding: 0;
  font-family: "Raleway", sans-serif;
`;

export const Slide = styled.div`
  height: 100vh;
  width: 100%;
`;

export const MainTitleText = styled.h1`
  text-align: center;
  color: rgba(255, 255, 255, 1);
  font-weight: 700;

  ${(props) =>
    props.largedesktop &&
    css`
      font-size: 80px;
    `}

  ${(props) =>
    props.desktop &&
    css`
      font-size: 55px;
    `}

  ${(props) =>
    props.notebook &&
    css`
      font-size: 45px;
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

export const InformationText = styled.p`
  text-align: justify;
  color: rgba(0, 0, 0, 1);

  ${(props) =>
    props.largedesktop &&
    css`
      font-size: 40px;
    `}
  ${(props) =>
    props.desktop &&
    css`
      font-size: 35px;
    `}
   ${(props) =>
    props.notebook &&
    css`
      font-size: 30px;
    `}
   ${(props) =>
    props.tablet &&
    css`
      font-size: 18px;
    `}
   ${(props) =>
    props.mobile &&
    css`
      font-size: 14px;
    `}
`;

export const SecondTitle = styled.h2`
  text-align: center;
  color: rgba(255, 255, 255, 1);
  text-shadow: 4px 3px 0 #7a7a7a;

  ${(props) =>
    props.largedesktop &&
    css`
      font-size: 80px;
    `}
  ${(props) =>
    props.desktop &&
    css`
      font-size: 60px;
    `}
   ${(props) =>
    props.notebook &&
    css`
      font-size: 45px;
    `}
   ${(props) =>
    props.tablet &&
    css`
      font-size: 30px;
    `}
   ${(props) =>
    props.mobile &&
    css`
      font-size: 24px;
    `}
`;

export const ThirdTitle = styled.h3`
  text-align: center;
  color: rgba(255, 255, 255, 1);
  font-weight: 400;

  ${(props) =>
    props.largedesktop &&
    css`
      font-size: 60px;
      letter-spacing: 10px;
    `}
  ${(props) =>
    props.desktop &&
    css`
      font-size: 45px;
      letter-spacing: 10px;
    `}
   ${(props) =>
    props.notebook &&
    css`
      font-size: 35px;
      letter-spacing: 7xpx;
    `}
   ${(props) =>
    props.tablet &&
    css`
      font-size: 24px;
      letter-spacing: 2px;
    `}
   ${(props) =>
    props.mobile &&
    css`
      font-size: 16px;
      letter-spacing: 0px;
    `}
`;

export const SheduleText = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 1);
  color: transparent;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);

  ${(props) =>
    props.largedesktop &&
    css`
      font-size: 60px;
    `}
  ${(props) =>
    props.desktop &&
    css`
      font-size: 40px;
    `}
   ${(props) =>
    props.notebook &&
    css`
      font-size: 35px;
    `}
   ${(props) =>
    props.tablet &&
    css`
      font-size: 24px;
    `}
   ${(props) =>
    props.mobile &&
    css`
      font-size: 16px;
    `}
`;

export const TariffText = styled.p`
  text-align: left;
  color: rgba(0, 0, 0, 1);
  font-weight: 900;
  ${(props) =>
    props.largedesktop &&
    css`
      font-size: 40px;
    `}
  ${(props) =>
    props.desktop &&
    css`
      font-size: 35px;
    `}
   ${(props) =>
    props.notebook &&
    css`
      font-size: 25px;
    `}
   ${(props) =>
    props.tablet &&
    css`
      font-size: 14px;
    `}
   ${(props) =>
    props.mobile &&
    css`
      font-size: 10px;
    `}
`;

export const TariffTime = styled.p`
  text-align: left;

  ${(props) =>
    props.largedesktop &&
    css`
      font-size: 60px;
    `}
  ${(props) =>
    props.desktop &&
    css`
      font-size: 40px;
    `}
   ${(props) =>
    props.notebook &&
    css`
      font-size: 35px;
    `}
   ${(props) =>
    props.tablet &&
    css`
      font-size: 24px;
    `}
   ${(props) =>
    props.mobile &&
    css`
      font-size: 16px;
    `}
`;
