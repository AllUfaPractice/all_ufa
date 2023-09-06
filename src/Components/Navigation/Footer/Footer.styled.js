import styled from "styled-components";
import { css } from "styled-components";

export const FooterStyle = styled.div`
  width: 100%;
  height: 15%;
  ${(props) => props.largedesktop && css``}
  ${(props) => props.desktop && css``}
  ${(props) => props.notebook && css``}
  ${(props) => props.tablet && css``}
  ${(props) => props.mobile && css``}
`;
