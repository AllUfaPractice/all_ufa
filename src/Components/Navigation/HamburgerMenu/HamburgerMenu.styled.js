import styled from "styled-components";
import { css } from "styled-components";

export const HamburgerStyle = styled.nav`
  display: fixed;
  ${(props) =>
    props.largedesktop &&
    css`
      display: none;
    `}
  ${(props) =>
    props.desktop &&
    css`
      display: none;
    `}
  ${(props) =>
    props.notebook &&
    css`
      display: none;
    `}
    ${(props) => props.tablet && css``}
  ${(props) => props.mobile && css``}
`;

