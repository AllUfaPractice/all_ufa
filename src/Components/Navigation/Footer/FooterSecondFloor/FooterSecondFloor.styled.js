import styled from "styled-components";
import { css } from "styled-components";

export const FooterSecondFloorStyle = styled.div`
  ${(props) =>
    props.largedesktop &&
    css`
      padding-top: 50px;
      padding-bottom: 50px;
      text-align: center;
      align-items: center;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      width: 100%;
      background: rgb(31, 57, 42);
      background: linear-gradient(
        90deg,
        rgba(31, 57, 42, 1) 0%,
        rgba(27, 85, 52, 1) 50%,
        rgba(31, 57, 42, 1) 100%
      );
    `}
  ${(props) =>
    props.desktop &&
    css`
      padding-top: 50px;
      padding-bottom: 50px;
      text-align: center;
      align-items: center;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      width: 100%;
      background: rgb(31, 57, 42);
      background: linear-gradient(
        90deg,
        rgba(31, 57, 42, 1) 0%,
        rgba(27, 85, 52, 1) 50%,
        rgba(31, 57, 42, 1) 100%
      );
    `}
  ${(props) =>
    props.notebook &&
    css`
      padding-top: 50px;
      padding-bottom: 50px;
      text-align: center;
      align-items: center;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      width: 100%;
      background: rgb(31, 57, 42);
      background: linear-gradient(
        90deg,
        rgba(31, 57, 42, 1) 0%,
        rgba(27, 85, 52, 1) 50%,
        rgba(31, 57, 42, 1) 100%
      );
    `}
  ${(props) =>
    props.tablet &&
    css`
      display: grid;
      grid-template-rows: 0.5fr 1fr 0.1fr;
    `}
  ${(props) => props.mobile && css``}
`;

export const FooterSecondFloorMenu = styled.div`
  ${(props) => props.largedesktop && css``}
  ${(props) => props.desktop && css``}
  ${(props) => props.notebook && css``}
  ${(props) =>
    props.tablet &&
    css`
      padding-top: 20px;
    `}
  ${(props) => props.mobile && css``}
`;
export const FooterSecondFloorMenuLinks = styled.div`
  ${(props) =>
    props.largedesktop &&
    css`
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
      padding-left: 200px;
      a {
        text-decoration: none;
        color: white;
        font-size: 20px;
        padding: 10px;
        text-align: left;
      }
    `}
  ${(props) =>
    props.desktop &&
    css`
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
      padding-left: 100px;
      a {
        text-decoration: none;
        color: white;
        font-size: 20px;
        padding: 7px;
        text-align: left;
      }
    `}
  ${(props) =>
    props.notebook &&
    css`
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
      padding-left: 50px;
      a {
        text-decoration: none;
        color: white;
        font-size: 15px;
        padding: 5px;
        text-align: left;
      }
    `}
  ${(props) =>
    props.tablet &&
    css`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      text-align: center;
      a {
        text-decoration: none;
        color: white;
        font-size: 15px;
        padding: 2px;
      }
    `}
  ${(props) =>
    props.mobile &&
    css`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      text-align: center;
      a {
        text-decoration: none;
        color: white;
        font-size: 10px;
        padding: 2px;
      }
    `}
`;

export const FooterSecondFloorLogo = styled.div`
  ${(props) =>
    props.largedesktop &&
    css`
      img {
        margin: 0;
        text-align: center;
        width: 300px;
      }
      p {
        font-size: 20px;
        text-align: center;
        padding-left: 50px;
        padding-right: 50px;
        color: white;
      }
    `}
  ${(props) =>
    props.desktop &&
    css`
      img {
        margin: 0;
        text-align: center;
        width: 300px;
      }
      p {
        font-size: 20px;
        text-align: center;
        padding-left: 50px;
        padding-right: 50px;
        color: white;
      }
    `}
  ${(props) =>
    props.notebook &&
    css`
      img {
        margin: 0;
        text-align: center;
        width: 200px;
      }
      p {
        font-size: 14px;
        text-align: center;
        padding-left: 50px;
        padding-right: 50px;
        color: white;
      }
    `}
  ${(props) =>
    props.tablet &&
    css`
      * {
        margin: 0;
      }
      display: grid;
      grid-template-rows: 0.8fr 0.5fr;
      text-align: center;
      justify-content: center;
      border-top: 1px solid white;
      border-bottom: 1px solid white;
      margin-top: 20px;
      padding-top: 10px;
      margin-bottom: 20px;
      padding-bottom: 10px;
      img {
        display: flex;
        margin: 0;
        text-align: center;
        align-items: center;
        justify-content: center;
        width: 200px;
        display: flex;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
      }
      p {
        font-size: 14px;
        text-align: center;
        padding-left: 50px;
        padding-right: 50px;
        color: white;
      }
    `}
  ${(props) =>
    props.mobile &&
    css`
      * {
        margin: 0;
      }
      display: grid;
      grid-template-rows: 0.8fr 0.5fr;
      text-align: center;
      justify-content: center;
      border-top: 1px solid white;
      border-bottom: 1px solid white;
      margin-top: 20px;
      padding-top: 10px;
      margin-bottom: 20px;
      padding-bottom: 10px;
      img {
        display: flex;
        margin: 0;
        text-align: center;
        align-items: center;
        justify-content: center;
        width: 150px;
        display: flex;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
      }
      p {
        font-size: 10px;
        text-align: center;
        padding-left: 50px;
        padding-right: 50px;
        color: white;
      }
    `}
`;

export const FooterSecondFloorTitle = styled.h1`
  color: white;
  text-decoration: underline;
  ${(props) =>
    props.largedesktop &&
    css`
      font-size: 25px;
    `}
  ${(props) =>
    props.desktop &&
    css`
      font-size: 23px;
    `}
  ${(props) =>
    props.notebook &&
    css`
      font-size: 18px;
    `}
  ${(props) =>
    props.tablet &&
    css`
      font-size: 16px;
      text-align: center;
    `}
  ${(props) =>
    props.mobile &&
    css`
      text-align: center;
      font-size: 15px;
    `}
`;

export const FooterSecondFloorText = styled.p`
  color: white;
  ${(props) =>
    props.largedesktop &&
    css`
      font-size: 18px;
    `}
  ${(props) =>
    props.desktop &&
    css`
      font-size: 18px;
    `}
  ${(props) =>
    props.notebook &&
    css`
      font-size: 13px;
    `}
  ${(props) =>
    props.tablet &&
    css`
      font-size: 13px;
    `}
  ${(props) =>
    props.mobile &&
    css`
      font-size: 13px;
    `}
`;

export const FooterSecondFloorContacts = styled.div`
  ${(props) => props.largedesktop && css``}
  ${(props) => props.desktop && css``}
  ${(props) => props.notebook && css``}
  ${(props) =>
    props.tablet &&
    css`
      display: grid;
      grid-template-columns: 0.5fr 1.5fr 0.5fr 1fr 0.5fr 1fr;
      padding-bottom: 20px;
    `}
  ${(props) =>
    props.mobile &&
    css`
      display: grid;
      grid-template-columns: 0.5fr 1.5fr;
      grid-template-rows: 1fr 1fr 1fr;
      padding-bottom: 20px;
    `}
`;
