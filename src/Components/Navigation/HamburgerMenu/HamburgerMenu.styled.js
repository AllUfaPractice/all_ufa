import styled from "styled-components";
import { css } from "styled-components";

export const HamburgerStyle = styled.nav`
  z-index: 999;
  width: 100vw;
  position: fixed;
  ${(props) =>
    (props.largedesktop || props.desktop || props.notebook) &&
    css`
      display: none;
    `}
`;
