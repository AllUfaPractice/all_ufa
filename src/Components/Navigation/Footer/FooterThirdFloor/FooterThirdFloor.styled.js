import styled from "styled-components";
import { css } from "styled-components";

export const FooterThirdFloorStyle = styled.div`
  background-color: rgb(0, 30, 13);
  a {
    text-decoration: none;
    color: white;
  }
  ${(props) =>
    props.largedesktop &&
    css`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      text-align: center;
      align-items: center;
    `}
  ${(props) =>
    props.desktop &&
    css`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      text-align: center;
      align-items: center;
    `}
  ${(props) =>
    props.notebook &&
    css`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      text-align: center;
      align-items: center;
    `}
  ${(props) =>
    props.tablet &&
    css`
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      a {
        text-align: center;
        align-items: center;
      }
    `}
  ${(props) =>
    props.mobile &&
    css`
    margin: 0;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      a {
        text-align: center;
        align-items: center;
      }
    `}
`;
