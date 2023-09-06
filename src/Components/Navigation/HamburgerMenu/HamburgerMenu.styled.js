import styled from "styled-components";
import { css } from "styled-components";

export const HamburgerStyle = styled.nav`
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
`;