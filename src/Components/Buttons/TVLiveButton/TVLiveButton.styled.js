import styled from "styled-components";
import { css } from "styled-components";

export const TVLiveButtonStyle = styled.a`
  .TVButton {
    width: calc(6.6vh + 12.4vw);
    height: 5vh;
    background-color: rgba(0, 30, 13, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 70px;
    text-align: center;
    font-size: 22px;
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
        font-size: 18px;
        border-radius: 48px;
      `}

    /* Notebook 1280*/
    ${(props) =>
      props.Notebook &&
      css`
        font-size: 12px;
        border-radius: 28px;
      `}

    /* Tablet 960*/
    ${(props) =>
      props.Tablet &&
      css`
        font-size: 10px;
        border-radius: 26px;
      `}

    /* Mobile 600*/
    ${(props) =>
      props.Mobile &&
      css`
        font-size: 8px;
        border-radius: 25px;
      `}
  }
`;
