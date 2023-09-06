import styled from "styled-components";
import { css } from "styled-components";

export const FooterFirstFloorStyle = styled.div`
  * {
    margin: 0;
  }
  width: 100%;
  height: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  background-color: #001e0d;
  ${(props) => props.largedesktop && css``}
  ${(props) => props.desktop && css``}
  ${(props) => props.notebook && css``}
  ${(props) => props.tablet && css``}
  ${(props) => props.mobile && css``}
`;

export const FooterFirstFloorStyleSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  ${(props) => props.largedesktop && css``}
  ${(props) => props.desktop && css``}
  ${(props) => props.notebook && css``}
  ${(props) => props.tablet && css``}
  ${(props) => props.mobile && css``}
`;

export const FooterFirstFloorStyleSocialLogo = styled.p`
  ${(props) =>
    props.largedesktop &&
    css`
      display: flex;
      font-size: 25px;
    `}
  ${(props) =>
    props.desktop &&
    css`
      display: flex;
      font-size: 25px;
    `}
  ${(props) =>
    props.notebook &&
    css`
      display: flex;
      font-size: 25px;
    `}
  ${(props) => props.tablet && css`
      font-size: 25px;
  `}
  ${(props) => props.mobile && css`font-size: 25px;`}
`;
export const FooterFirstFloorStyleSocialTitle = styled.p`
  margin-left: 10px;
  ${(props) =>
    props.largedesktop &&
    css`
      display: flex;
      font-size: 15px;
    `}
  ${(props) =>
    props.desktop &&
    css`
      display: flex;
      font-size: 15px;
    `}
  ${(props) =>
    props.notebook &&
    css`
      display: flex;
      font-size: 15px;
    `}
  ${(props) =>
    props.tablet &&
    css`
      display: none;
    `}
  ${(props) =>
    props.mobile &&
    css`
      display: none;
    `}
`;
