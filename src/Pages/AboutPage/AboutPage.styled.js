import styled from "styled-components";
import { css } from "styled-components";
import {InformationContainer,InformationText} from "../../styles/global.styled"


export const FirstSlide = styled.div`
  height: 100vh;
  background-color: white;

  img {
    padding-top:10vh ;
    width: -webkit-fill-available;
  }
  h1 {
    text-align: center;
    font-size:calc(1.25vw + 1.25vh);
  }
  ${(props) =>
    (props.tablet || props.mobile) &&
    css`
      height:40vh;
    `}
`;

export const InformationContainerExp = styled(InformationContainer)`
  height: 90vh;
  margin:5vh auto;

  ${(props) =>
    (props.tablet || props.mobile) &&
    css`
      height:70vh;
      margin:15vh auto;
    `}
`;

export const InformationTextExp = styled(InformationText)`
li{
  margin: 3vh 0;
}
`;

export const UsSlide = styled.div`
  display: grid;
  justify-items: center;
  margin: 70px 0 70px 0;
  h3{
    color: white;
  }
`;

export const UsSlideCont = styled.div`  
   background-color: rgba(3, 35, 18, 0.55);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border-radius: 1;
  border: 1px solid rgba(255, 255, 255, 0.125);
  width: 85%;
  padding: 8% 7% 8% 7%;
  border-radius: 30px 250px;
  margin: 30px;
  p {
    color: white;
    margin: 3vh 0;
  }
  li{
    color: white;
    margin: 2vh 0;
    list-style-type: none;
    margin-left: 15px;
  }
  li::before {
    content: "-";
    position: relative;
    left: -10px;
  }
  .emptycont {
    height: 50px;
  }

  ${(props) =>
    (props.tablet || props.mobile) &&
    css`
      border-radius: 25px 120px;
    `}
`;
