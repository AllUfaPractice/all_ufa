import styled from "styled-components";
import { css } from "styled-components";

export const UfaIsAwarePageStyled = styled.div`
  * {
    margin: 0;
    padding: 0;
    font-family: Raleway, sans-serif;
    font-weight: 0;
  }
  background-color: rgb(19, 69, 41);
`;

export const NameStyle = styled.div`
  display: grid;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
  justify-items: center;
  padding-top: 235px;
  height: 100%;

  .ImageCont {
    width: 100%;
    display: grid;
    background-size: 40%;
  }
  img {
    width: 96%;
    height: 100%;
    border-radius: 5%;
    margin: 0 auto;
  }
  /* Decktop 1920 */
  ${(props) =>
    props.Desktop &&
    css`
      padding-top: 235px;
      img {
        width: 96%;
      }
    `}
  /* Notebook 1280*/
${(props) =>
    props.Notebook &&
    css`
      height: 100%;
      padding-top: 120px;
      img {
        width: 96%;
      }
    `}
/* Tablet 960*/
${(props) =>
    props.Tablet &&
    css`
      height: 50%;
      padding-top: 0;
      img {
        width: 100%;
        border-radius: 0;
      }
    `}
/* Mobile 600*/
${(props) =>
    props.Mobile &&
    css`
      height: 50%;
      padding-top: 0;
      img {
        width: 100%;
        border-radius: 0;
      }
    `}
`;

export const InfoStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.6fr;

  .InfoTextCont {
    background-color: white;
    padding: 3% 7% 4% 7%;
    border-radius: 0 0 50px 0;
    width: 100%;
  }
  .InfoContText {
    display: grid;
    width: 90%;
  }
  .text {
    font-size: 40px;
    font-weight: 900;
    text-align: justify;
    padding: 20px 0 20px 40px;
  }
  img {
    display: block;
    margin-left: auto;
    width: 80%;
    border-radius: 0 0 0 50%;
  }

  /* Decktop 1920 */
  ${(props) =>
    props.Desktop &&
    css`
      .text {
        font-size: 28px;
        margin-bottom: 20px;
      }
    `}
  /* Notebook 1280*/
${(props) =>
    props.Notebook &&
    css`
      .text {
        font-size: 25px;
        margin-bottom: 20px;
      }
      .InfoTextCont {
        padding: 5% 7% 5% 7%;
      }
      img {
        width: 90%;
      }
    `}
/* Tablet 960*/
${(props) =>
    props.Tablet &&
    css`
      .text {
        font-size: 18px;
        margin-bottom: 0px;
        padding: 10px 0 10px 20px;
      }
      .InfoTextCont {
        padding: 5% 4% 5% 4%;
      }
      img {
        width: 100%;
      }
    `}
/* Mobile 600*/
${(props) =>
    props.Mobile &&
    css`
      .text {
        font-size: 9px;
        margin-bottom: 0px;
        padding: 5px 0 5px 20px;
      }
      .InfoTextCont {
        padding: 5% 4% 5% 4%;
      }
      img {
        width: 80%;
      }
    `}
`;

export const ReleaseStyle = styled.div`
  padding: 80px 0;
  .MainText {
    font-size: 80px;
    color: white;
    text-align: center;
    margin: 100px 0;
  }
  .RelaseCont {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 80px 0 0 0;
  }
  .ContText {
    display: grid;
    align-items: center;
    width: 80%;
    background-color: rgb(120, 184, 148);
    border-radius: 40px;
    padding: 80px 0px;
    box-shadow: -15px -15px 20px black;
    margin: 10px;
  }
  .ContLeft {
    margin-left: auto;
  }
  .ContRight {
    margin-right: auto;
  }
  .Text {
    font-size: 60px;
    font-weight: 600;
    color: white;
    text-align: center;
    margin: 5px 0;
  }

  /* Decktop 1920 */
  ${(props) =>
    props.Desktop &&
    css`
      padding: 60px 0;
      .MainText {
        font-size: 60px;
        margin: 60px 0;
      }
      .RelaseCont {
        margin: 80px 0 0 0;
      }
      .ContText {
        width: 80%;
        border-radius: 40px;
        padding: 55px 0px;
        box-shadow: -10px -10px 20px black;
        margin: 10px;
      }
      .ContLeft {
        margin-left: auto;
      }
      .ContRight {
        margin-right: auto;
      }
      .Text {
        font-size: 40px;
      }
    `}
  /* Notebook 1280*/
${(props) =>
    props.Notebook &&
    css`
      padding: 60px 0;
      .MainText {
        font-size: 45px;
        margin: 60px 0;
      }
      .RelaseCont {
        margin: 80px 0 0 0;
      }
      .ContText {
        padding: 45px 0px;
        box-shadow: -10px -10px 20px black;
        margin: 10px;
      }
      .ContLeft {
        margin-left: auto;
      }
      .ContRight {
        margin-right: auto;
      }
      .Text {
        font-size: 35px;
      }
    `}
/* Tablet 960*/
${(props) =>
    props.Tablet &&
    css`
      padding: 60px 0;
      .MainText {
        font-size: 30px;
        margin: 30px 0;
      }
      .RelaseCont {
        margin: 40px 0 0 0;
      }
      .ContText {
        padding: 30px 0px;
        box-shadow: -5px -5px 10px black;
        margin: 10px;
        border-radius: 30px;
      }
      .ContLeft {
        margin-left: auto;
      }
      .ContRight {
        margin-right: auto;
      }
      .Text {
        font-size: 24px;
      }
    `}
/* Mobile 600*/
${(props) =>
    props.Mobile &&
    css`
      padding: 20px 0;
      .MainText {
        font-size: 24px;
        margin: 0;
      }
      .RelaseCont {
        margin: 40px 0 0 0;
      }
      .ContText {
        padding: 20px 0px;
        box-shadow: -5px -5px 10px black;
        margin: 10px;
        border-radius: 20px;
      }
      .ContLeft {
        margin-left: auto;
      }
      .ContRight {
        margin-right: auto;
      }
      .Text {
        font-size: 16px;
      }
    `}
`;


