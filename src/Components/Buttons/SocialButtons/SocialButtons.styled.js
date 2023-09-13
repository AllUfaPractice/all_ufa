import styled, { css } from "styled-components";
import { Button } from "@mui/material";

export const SocialButtonsStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
`;

export const SocialButtonStyle = styled(Button)`
  && {
    //Выравнивание
    height: 5vh;
    width: 5vh;
    margin: 0 10px;
    position: relative;
    //Фон
    background-color: rgba(255, 255, 255, 0.1);
    //Тень
    -webkit-box-shadow: 0px -5px 20px 5px rgba(29, 76, 49, 0.5);
    -moz-box-shadow: 0px -5px 20px 5px rgba(29, 76, 49, 0.5);
    box-shadow: 0px -5px 20px 5px rgba(29, 76, 49, 0.5);
    //Текст
    font-size: calc(1px + 1vw + 1vh);
    color: rgba(255, 255, 255, 0.9);

    // Six-sided shape
    clip-path: polygon(15% 0%, 85% 0%, 100% 30%, 85% 100%, 15% 100%, 0% 70%);
  }
`;
