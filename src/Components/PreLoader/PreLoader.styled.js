import styled from "styled-components";

export const PreLoaderStyle = styled.div`
  background-color: rgba(22, 84, 38, 1);
  width: 100vw;
  height: 100vh;
  z-index: 99999999999;
  position: absolute;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const PreLoaderText = styled.p`
    color: rgba(255, 255, 255, 1);
    letter-spacing: 0.1vw;
`;

