import styled from "styled-components";
import { Menu } from "@material-ui/core";

export const HorizontalMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ProductMenu = styled.div`
  cursor: pointer;
`;

export const ProductSubMenu = styled(Menu)`
  && {
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.7);
    ul{
      width: 20vw;
      padding: 5vh 2vw;
    }
  }
`;
