import styled from "styled-components";
import { css } from "styled-components";

export const MainInformationStyle = styled.a`
  * {
    margin: 0;
    padding: 0;
  }
`;
export const FisrtInformationStyle = styled.a`
  * {
    margin: 0;
    padding: 0;
  }
  .cont {
    margin: 30px 80px;
  }
  .UpDawn {
    background-color: rgb(0, 167, 93);
    text-align: center;
    width: 80px;
    height: 30px;
    border-radius: 15px;
    margin: 0px auto;
  }
  svg {
    height: 30px;
    width: 30px;
  }
  h3 {
    text-align: center;
    font-size: 25px;
    font-weight: bold;
  }
  .MainTextCont {
    margin: 30px 0;
  }
  .TextCont {
    display: grid;
    grid-template-columns: 0.7fr 1fr;
    margin: 30px 0;
    align-items: center;
    justify-items: end;
  }
  .SecondTextCont {
    display: grid;
    grid-template-columns: 1fr 0.7fr;
    margin: 60px 0;
    align-items: center;
    justify-items: start;
  }
  .SecondTextCont .text {
    text-align: start;
  }
  .num {
    text-align: center;
    border: solid rgb(0, 167, 93) 2px;
    border-radius: 50%;
    height: 20px;
    padding: 10px 0;
    width: 40px;
    font-size: 18px;
    font-weight: 600;
    justify-items: end;
  }
  .text {
    font-size: 18px;
    font-weight: 600;
    text-align: end;
  }

  @media screen and (max-width: 700px) {
    .MainTextCont {
      margin: 30px 0;
    }
    .TextCont {
      justify-items: center;
    }
    .SecondTextCont {
      justify-items: center;
    }
  }

  @media screen and (max-width: 500px) {
    .text {
      font-size: 14px;
    }
    .cont {
      margin: 30px 40px;
    }
    .TextCont {
      margin: 15px 0;
    }
    .SecondTextCont {
      margin: 30px 0;
    }
  }
`;
export const SecondInformationStyle = styled.a`
  * {
    margin: 0;
    padding: 0;
  }
  .cont {
    margin: 80px 80px;
  }
  h3 {
    text-align: center;
    font-size: 25px;
    font-weight: bold;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    margin-top: 40px;
  }
  .SecondInformationCont {
    height: 500px;
    width: 350px;
    margin: 25px;
    background-color: grey;
    border-radius: 30px;
  }

  @media screen and (max-width: 1280px) {
    .SecondInformationCont {
      height: 350px;
      width: 250px;
      margin: 5px;
    }
  }
  @media screen and (max-width: 900px) {
    .SecondInformationCont {
      height: 500px;
      width: 350px;
    }
    .grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media screen and (max-width: 550px) {
    .SecondInformationCont {
      height: 350px;
      width: 250px;
      margin: 5px;
    }
  }
  @media screen and (max-width: 400px) {
    .SecondInformationCont {
      height: 250px;
      width: 180px;
      margin: 5px;
    }
  }
`;

export const ThirdInformationStyle = styled.a`
  * {
    margin: 0;
    padding: 0;
  }
  h3 {
    text-align: center;
    font-size: 25px;
    font-weight: bold;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    margin: 30px 80px;
  }
  .ThirdInformationCont {
    height: 500px;
    width: 350px;
    margin: 25px;
    background-color: grey;
    border-radius: 30px;
  }
  .InformationCont {
    height: 500px;
    width: 350px;
    margin: 25px;
  }
  h4 {
    text-align: center;
    font-size: 22px;
    font-weight: bold;
  }
  .IformationText {
    font-size: 18px;
    font-weight: 600;
    margin: 15px 0;
  }
  @media screen and (max-width: 900px) {
    .grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media screen and (max-width: 550px) {
    .ThirdInformationCont {
      height: 350px;
      width: 250px;
      margin: 5;
    }
    .InformationCont{
      height: 350px;
      width: 250px;
      margin: 5;
    }
    .grid {
      margin: 30px 20px;
    }
    h4 {
      text-align: center;
      font-size: 18px;
      font-weight: bold;
    }
    .IformationText {
      font-size: 14px;
      font-weight: 600;
      margin: 15px 0;
    }
  }
`;
export const PartnersStyle = styled.a`
*{
  margin: 0;
  padding: 0;
}
.cont{
  margin: 80px 80px;
}
  h3{
    text-align: center;
    font-size: 25px;
    font-weight: bold;
  }
  .PartnersImg{
    width: 100%;
    height: 230px;
    background-image: url('https://sun9-10.userapi.com/impg/0qbDljgSjd2wb5UKpg3ZXOMJFEqJGTAijj4IMQ/eve9K5gDaeU.jpg?size=1219x128&quality=95&sign=a87b95b86efdab08891583fc44bb09cc&type=album');
    background-repeat: no-repeat;
    background-size: 100%;
    margin-top: 25px;
    }
`;
