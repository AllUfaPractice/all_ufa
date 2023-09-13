import styled, { css } from "styled-components";

export const HeaderStyle = styled.header`
  //Выравнивание
  z-index: 999;
  display: grid;
  grid-template-columns: 0.3fr 1fr 0.3fr;
  position: fixed;
  margin: 3vh 1vw;
  width: 98vw;
  height: 10vh;
  padding: 0 5vw;
  //Фон
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(22, 84, 38, 0.75);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  -webkit-box-shadow: 0px 10px 5px -5px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 10px 5px -5px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 10px 5px -5px rgba(0, 0, 0, 0.3);
  ${(props) =>
    (props.tablet || props.mobile) &&
    css`
      display: none;
    `}
`;

export const HeaderLogoStyle = styled.img`
  cursor: pointer;
  align-self: center;
  width: 15vw;
  max-width: 200px;
`;
