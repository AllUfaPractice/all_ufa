import styled from "styled-components";
import { css } from "styled-components";

export const TVLiveButtonStyle = styled.a`
  .TVButton {
    width: 400px;
    height: 100px;
    background-color: rgba(0, 30, 13, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 70px;
    text-align: center;
    font-size: 30px;
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

    /* Decktop 1920 */
    ${(props) =>
      props.Desktop &&
      css`
        width: 300px;
        height: 75px;
        font-size: 20px;
        border-radius: 48px;
      `}

    /* Notebook 1280*/
    ${(props) =>
      props.Notebook &&
      css`
        width: 180px;
        height: 45px;
        font-size: 12px;
        border-radius: 28px;
      `}

    /* Tablet 960*/
    ${(props) =>
      props.Tablet &&
      css`
        width: 150px;
        height: 40px;
        font-size: 11px;
        border-radius: 26px;
      `}

    /* Mobile 600*/
    ${(props) =>
      props.Mobile &&
      css`
        width: 140px;
        height: 38px;
        font-size: 9px;
        border-radius: 25px;
      `}
  }
`;
