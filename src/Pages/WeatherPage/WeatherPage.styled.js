import styled from "styled-components";
import { css } from "styled-components";

// Image
import BlackLine from "../../Images/BlackLine.jpg"

export const WeatherStyle = styled.div`
  * {
    margin: 0;
    padding: 0;
    font-family: Raleway, sans-serif;
  }
  background-color: rgb(19, 69, 41);
`;

export const NameStyle = styled.div`
  display: grid;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
  justify-items: center;
  padding-top: 10%;
  height: 1100px;

  .ImageCont {
    width: 100%;
    display: grid;
    background-image: url(${BlackLine});
    background-repeat: repeat-x;
    background-position: center;
    background-size: 30%;
  }
  img {
    width: 40%;
    border-radius: 100%;
    margin: 0 auto;
  }
  /* Decktop 1920 */
  ${(props) =>
    props.Desktop &&
    css`
      height: 680px;
      padding-top: 15%;
      img {
        width: 35%;
      }
    `}
  /* Notebook 1280*/
${(props) =>
    props.Notebook &&
    css`
      height: 500px;
      padding-top: 15%;
      img {
        width: 35%;
      }
    `}
/* Tablet 960*/
${(props) =>
    props.Tablet &&
    css`
      height: 450px;
      padding-top: 0;
      img {
        width: 35%;
      }
    `}
/* Mobile 600*/
${(props) =>
    props.Mobile &&
    css`
      height: 350px;
      padding-top: 0;
      img {
        width: 50%;
      }
    `}
`;