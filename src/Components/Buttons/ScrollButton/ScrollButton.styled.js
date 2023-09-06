import styled from "styled-components";

export const ScrollButtonWrapper = styled.div`
  /* Стили для контейнера кнопки */
  position: fixed;
  bottom: 20px;
  right: 20px;
  display:${({ isVisible }) => (isVisible ? "block" : "none")};
  z-index: 9999; 
  cursor: pointer;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  font-size: 50px;
  color: rgb(255,255,255,0.3);
`;
