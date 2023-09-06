import styled from "styled-components";
import { css } from "styled-components";

export const TVLiveButtonStyle = styled.a`
  .TVButton {
    width: 200px;
    height: 50px;
    background-color: rgba(0, 30, 13, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 35px;
    text-align: center;
    background: -webkit-linear-gradient(
      90deg,
      rgb(0, 30, 13),
      rgb(27, 85, 52),
      rgb(0, 30, 13)
    );
    background: -moz-linear-gradient(
      90deg,
      rgb(0, 30, 13),
      rgb(27, 85, 52),
      rgb(0, 30, 13)
    );
    background: linear-gradient(
      90deg,
      rgb(0, 30, 13),
      rgb(27, 85, 52),
      rgb(0, 30, 13)
    );
    z-index: 0;

    /* Notebook 1280*/
    ${(props) =>
      props.Notebook &&
      css`
        width: 175px;
        height: 45px;
      `}
    /* Tablet 960*/
    ${(props) =>
      props.Tablet &&
      css`
        width: 150px;
        height: 45px;
        font-size: 12px;
      `}
    /* Mobile 600*/
    ${(props) =>
      props.Mobile &&
      css`
        width: 115px;
        height: 30px;
        font-size: 9px;
      `}
  }
`;
