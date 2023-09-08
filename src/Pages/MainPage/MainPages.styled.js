import styled from "styled-components";
import { css } from "styled-components";
import BGImg from "../../Images/MainPageFirstSlideBackgroud.jpg";

export const MainPageStyle = styled.div`
  * {
    margin: 0;
    padding: 0;
    font-family: "PT sans", sans-serif;
  }
`;

export const UTPSlide = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 0.9fr 0.3fr;
  justify-items: center;
  height: 100vh;
  background-image: url(${BGImg});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;

  h1 {
    color: white;
    font-size: 110px;
    text-align: center;
    align-self: end;
    font-weight: 400;
  }
  h2 {
    color: white;
    font-size: 45px;
    text-align: center;
  }

  /* Decktop 1920 */
  ${(props) =>
    props.Desktop &&
    css`
      h1 {
        font-size: 70px;
      }
      h2 {
        font-size: 30px;
      }
    `}
  /* Notebook 1280*/
${(props) =>
    props.Notebook &&
    css`
      h1 {
        font-size: 55px;
      }
      h2 {
        font-size: 22px;
      }
    `}
/* Tablet 960*/
${(props) =>
    props.Tablet &&
    css`
      h1 {
        font-size: 45px;
      }
      h2 {
        font-size: 16px;
      }
    `}
/* Mobile 600*/
${(props) =>
    props.Mobile &&
    css`
      h1 {
        font-size: 38px;
      }
      h2 {
        font-size: 14px;
      }
    `}
`;
