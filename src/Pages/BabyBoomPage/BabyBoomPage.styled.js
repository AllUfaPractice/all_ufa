import styled from "styled-components";
import { css } from "styled-components";

export const BBPageStyle = styled.div`
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
  grid-template-columns: 0.8fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
  justify-items: center;
  height: 1100px;
  img {
    width: 80%;
    position: absolute;
    left: -10%;
  }

  .ContText {
    padding: 60px 90px 60px 90px;
    background-color: rgb(0, 30, 13);
    width: 80%;
  }
  p {
    font-size: 80px;
    color: white;
    text-align: center;
  }

  /* Decktop 1920 */
  ${(props) =>
    props.Desktop &&
    css`
      height: 900px;
      img {
        width: 80%;
      }

      .ContText {
        padding: 45px 75px 45px 75px;
      }
      p {
        font-size: 55px;
      }
    `}
  /* Notebook 1280*/
${(props) =>
    props.Notebook &&
    css`
      height: 750px;
      img {
        width: 80%;
      }
      .ContText {
        padding: 45px 75px 45px 75px;
      }
      p {
        font-size: 45px;
      }
    `}
/* Tablet 960*/
${(props) =>
    props.Tablet &&
    css`
      grid-template-columns: 0.6fr 1fr;
      height: 400px;
      img {
        width: 80%;
        left: -13%;
      }
      .ContText {
        padding: 30px 35px 30px 40px;
      }
      p {
        font-size: 30px;
      }
    `}
/* Mobile 600*/
${(props) =>
    props.Mobile &&
    css`
      display: grid;
      grid-template-columns: 1fr;
      height: 250px;
      .emptycont {
        display: none;
      }
      img {
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
  grid-template-columns: 1fr 0.6fr;

  .InfoText {
    display: grid;
    grid-template-columns: 0.01fr 1fr;
    background-color: white;
    width: 90%;
    padding: 5% 25% 0 10%;
    border-radius: 0 0 50px 0;
  }
  .text {
    font-size: 35px;
    font-weight: 900;
    margin-bottom: 40px;
    text-align: justify;
  }
  img {
    display: block;
    margin-left: auto;
    width: 95%;
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
    `}
/* Tablet 960*/
${(props) =>
    props.Tablet &&
    css`
      .text {
        font-size: 18px;
        margin-bottom: 15px;
      }
    `}
/* Mobile 600*/
${(props) =>
    props.Mobile &&
    css`
      .text {
        font-size: 8px;
        margin-bottom: 15px;
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
      padding: 60px 0;
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
  .ContText li {
    list-style-type: auto;
    margin-right: 20px;
  }
  .Text {
    color: black;
    font-size: 45px;
    margin: 30px 0;
    text-align: justify;
  }
  .MainContText {
    font-family: serif;
    width: 75%;
    margin: auto;
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
      .MainContText {
        font-family: serif;
        width: 75%;
        margin: auto;
      }
      .Text {
        color: black;
        font-size: 30px;
        margin: 30px 0;
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
        font-size: 20px;
        margin: 15px 0;
      }
      .TextTime {
        width: 70%;
        height: 80px;
        padding: 40px 0;
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
        font-size: 16px;
        margin: 10px 0;
      }
      .TextTime {
        width: 70%;
        height: 30px;
        padding: 40px 0;
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
        font-size: 6px;
        margin: 6px 0;
      }
      .TextTime {
        width: 70%;
        height: 15px;
        padding: 20px 0;
        margin: auto 0;
        margin-left: 20%;
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
    width: 80%;
    padding: 8% 15% 8% 7%;
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
        width: 80%;
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
        width: 80%;
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
        width: 80%;
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
        width: 80%;
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
    padding: 8% 0% 8% 7%;
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
    padding: 8% 0% 8% 7%;
  }

  /* Decktop 1920 */
  ${(props) =>
    props.Desktop &&
    css`
      .ContText {
        display: grid;
        grid-template-columns: 0.01fr 1fr 0.3fr;
        grid-template-rows: repeat(3, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
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
        grid-template-columns: 0.01fr 1fr 0.3fr;
        grid-template-rows: repeat(3, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
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
        grid-template-columns: 0.01fr 1fr 0.3fr;
        grid-template-rows: repeat(3, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
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
        grid-template-columns: 0.01fr 1fr 0.3fr;
        grid-template-rows: repeat(3, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        background-color: white;
        border-radius: 0 20px 20px 0;
        width: 95%;
        padding: 0 0% 0 7%;
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
        grid-template-columns: 0.40fr 1fr;
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


