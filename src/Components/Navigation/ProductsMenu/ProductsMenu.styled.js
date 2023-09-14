import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductsMenuStyle = styled.div`
  align-self: center;
  margin: auto;
`;

export const ModalMenuStyle = styled.div`
  //Выравнивание
  display: grid;
  width: 25vw;
  min-width: 400px;
  height: auto;
  margin: 15vh auto;
  padding: 5vh 3vw;
  //Фон
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.125);
  border-radius: 50px;
`;

export const ModalLinkStyle = styled(Link)`
  padding: 0 5%;
  text-decoration: none;
  color: black;
  line-height: 5vh;
  font-size: calc(1vw + 1vh);
`;

export const ModalAboutLinkStyle = styled(Link)`
  padding: 5% 5%;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.7);
  line-height: 5vh;
  font-size: calc(1vw + 1vh);
`;

export const ModalMainLinkStyle = styled(Link)`
  padding: 5% 5%;
  text-decoration: none;
  color: rgba(0, 0, 0, 1);
  line-height: 5vh;
  margin-bottom: 1%;
  font-size: calc(1vw + 1vh);
`;

export const ModalButtonStyle = styled(Button)`
  && {
    font-family: "Raleway", sans-serif;
    color: rgba(217, 217, 217, 1);
    text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
      1px 1px 1px rgba(0, 0, 0, 0.5);
    text-decoration: none;
    font-size: calc(1px + 1vw + 1vh);
  }
`;

export const ModalMenuLogoStyle = styled.img`
  width: 100%;
`;
