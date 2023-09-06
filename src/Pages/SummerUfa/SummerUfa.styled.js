import styled from "styled-components";
import { css } from "styled-components";

// image
import GreenLine from "../../Images/GreenLine.jpg";

export const SummerUfaPageStyle = styled.div`
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
  padding-top: 12%;
  height: 1100px;

  .ImageCont {
    width: 100%;
    display: grid;
    background-image: url(${GreenLine});
    background-repeat: repeat-x;
    background-position: center;
    background-size: 40%;
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

export const InfoStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.6fr;

  .InfoTextCont {
    background-color: white;
    padding: 7% 7% 7% 7%;
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
    padding-left: 40px;
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
        margin-bottom: 15px;
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
        margin-bottom: 10px;
        padding-left: 20px;
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

export const TariffStyle = styled.div`
  .MainText {
    font-size: 80px;
    color: white;
    text-align: center;
    margin: 100px 0;
  }
  .GridCont {
    display: grid;
    grid-template-columns: 1fr 0.7fr;
    align-items: center;
    padding: 50px 0;
  }

  .ContText {
    display: grid;
    grid-template-columns: 1fr 0.2fr;
    align-items: center;
    background-color: white;
    border-radius: 0 60px 60px 0;
    width: 95%;
    padding: 4% 0% 4% 7%;
  }
  .ContText li {
    list-style-type: auto;
    margin-right: 20px;
  }
  .Text {
    color: black;
    font-size: 45px;
    margin: 30px 0;
  }
  .MainContText {
    font-family: serif;
    width: 75%;
    margin: auto;
  }

  .TextTime {
    width: 70%;
    padding: 10px;
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
        color: white;
        text-align: center;
        margin: 100px 0;
      }
      .GridCont {
        display: grid;
        grid-template-columns: 1fr 0.7fr;
        align-items: center;
        padding: 20px 0;
      }

      .ContText {
        display: grid;
        grid-template-columns: 1fr 0.2fr;
        align-items: center;
        background-color: white;
        border-radius: 0 40px 40px 0;
        width: 95%;
        padding: 2% 2% 2% 7%;
      }
      .ContText li {
        list-style-type: auto;
        margin-right: 20px;
      }
      .Text {
        color: black;
        font-size: 30px;
        margin: 30px 0;
      }
      .MainContText {
        font-family: serif;
        width: 75%;
        margin: auto;
      }

      .TextTime {
        width: 70%;
        padding: 10px;
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
        font-size: 40px;
        color: white;
        text-align: center;
        margin: 50px 0;
      }
      .GridCont {
        display: grid;
        grid-template-columns: 1fr 0.7fr;
        align-items: center;
        padding: 20px 0;
      }

      .ContText {
        display: grid;
        grid-template-columns: 1fr 0.2fr;
        align-items: center;
        background-color: white;
        border-radius: 0 40px 40px 0;
        width: 95%;
        padding: 2% 2% 2% 7%;
      }
      .ContText li {
        list-style-type: auto;
        margin-right: 20px;
      }
      .Text {
        color: black;
        font-size: 20px;
        margin: 30px 0;
      }
      .MainContText {
        font-family: serif;
        width: 75%;
        margin: auto;
      }

      .TextTime {
        width: 70%;
        padding: 10px;
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
        font-size: 25px;
        color: white;
        text-align: center;
        margin: 50px 0;
      }
      .GridCont {
        display: grid;
        grid-template-columns: 1fr 0.7fr;
        align-items: center;
        padding: 10px 0;
      }

      .ContText {
        display: grid;
        grid-template-columns: 1fr 0.2fr;
        align-items: center;
        background-color: white;
        border-radius: 0 20px 20px 0;
        width: 95%;
        padding: 2% 3% 2% 5%;
      }
      .ContText li {
        list-style-type: auto;
        margin-right: 20px;
      }
      .Text {
        color: black;
        font-size: 10px;
        margin: 20px 0;
      }
      .MainContText {
        font-family: serif;
        width: 75%;
        margin: auto;
      }

      .TextTime {
        width: 70%;
        padding: 10px;
        margin: auto 0;
        margin-left: 20%;
        text-align: center;
        border-left: solid gray 1px;
      }
    `}
  /* Mobile 600*/
  ${(props) =>
    props.Mobile &&
    css`
      .MainText {
        font-size: 18px;
        color: white;
        text-align: center;
        margin: 15px 0;
      }
      .GridCont {
        display: grid;
        grid-template-columns: 1fr 0.7fr;
        align-items: center;
        padding: 8px 0;
      }

      .ContText {
        display: grid;
        grid-template-columns: 1fr 0.2fr;
        align-items: center;
        background-color: white;
        border-radius: 0 10px 10px 0;
        width: 95%;
        padding: 2% 5% 2% 7%;
      }
      .ContText li {
        list-style-type: auto;
        margin-right: 20px;
      }
      .Text {
        color: black;
        font-size: 10px;
        margin: 20px 0;
      }
      .MainContText {
        font-family: serif;
        width: 75%;
        margin: auto;
      }

      .TextTime {
        width: 70%;
        padding: 10px;
        margin: auto 0;
        margin-left: 20%;
        text-align: center;
        border-left: solid gray 1px;
      }
    `}
`;

export const CommunicationStyle = styled.div`
  padding: 130px 0;
  .ContText {
    display: grid;
    grid-template-columns: 0.6fr 1fr;
    grid-template-rows: repeat(2, 1fr);
    background-color: white;
    width: 75%;
    margin-left: auto;
    border-radius: 60px 0 0 60px;
    padding: 5% 5% 3% 5%;
  }
  .OneGridCont {
    grid-area: 1 / 1 / 3 / 2;
  }
  .TwoGridCont {
    grid-area: 1 / 2 / 2 / 3;
  }
  .ThreeContText {
    grid-area: 2 / 2 / 3 / 3;
  }

  .MainText {
    font-size: 60px;
    font-weight: 600;
  }
  .Text {
    font-size: 40px;
    font-weight: 800;
    text-align: end;
    margin: 20px 0;
  }

  /* Decktop 1920 */
  ${(props) =>
    props.Desktop &&
    css`
      padding: 100px 0;
      .ContText {
        border-radius: 60px 0 0 60px;
        padding: 3% 3% 3% 5%;
      }
      .MainText {
        font-size: 40px;
        font-weight: 600;
      }
      .Text {
        font-size: 28px;
        font-weight: 800;
        text-align: end;
        margin: 20px 0;
      }
    `}
  /* Notebook 1280*/
  ${(props) =>
    props.Notebook &&
    css`
      padding: 80px 0;
      .ContText {
        border-radius: 50px 0 0 50px;
        padding: 3% 3% 3% 5%;
      }
      .MainText {
        font-size: 30px;
        font-weight: 600;
      }
      .Text {
        font-size: 18px;
        font-weight: 800;
        text-align: end;
        margin: 20px 0;
      }
    `}
  /* Tablet 960*/
  ${(props) =>
    props.Tablet &&
    css`
      padding: 60px 0;
      .ContText {
        border-radius: 40px 0 0 40px;
        padding: 3% 3% 3% 5%;
      }
      .MainText {
        font-size: 20px;
        font-weight: 600;
      }
      .Text {
        font-size: 12px;
        font-weight: 800;
        text-align: end;
        margin: 20px 0;
      }
    `}
  /* Mobile 600*/
  ${(props) =>
    props.Mobile &&
    css`
      padding: 40px 0;
      .ContText {
        grid-template-columns: 0.4fr 1fr;
        border-radius: 25px 0 0 25px;
        padding: 3% 3% 3% 5%;
      }
      .MainText {
        font-size: 14px;
        font-weight: 600;
      }
      .Text {
        font-size: 8px;
        font-weight: 800;
        text-align: end;
        margin: 10px 0;
      }
    `}
`;
