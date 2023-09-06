import styled from "styled-components";
import { css } from "styled-components";

export const NavbarStyle = styled.nav`
  display: grid;
  grid-template-columns: 1.3fr 2fr 1.3fr;
  position: fixed;
  align-items: center;
  text-align: center;
  z-index: 1;
  border: 1px solid black;
  ${(props) =>
    props.largedesktop &&
    css`
      width: 98%;
      height: 10%;
      margin: 1%;
      border-radius: 100px;
      backdrop-filter: blur(10px);
      background-color: rgb(31, 57, 42, 0.7);
    `}
  ${(props) =>
    props.desktop &&
    css`
      width: 98%;
      height: 10%;
      margin: 1%;
      border-radius: 50px;
      backdrop-filter: blur(10px);
      background-color: rgb(31, 57, 42, 0.7);
    `}
  ${(props) =>
    props.notebook &&
    css`
      width: 98%;
      height: 10%;
      margin: 1%;
      border-radius: 50px;
      backdrop-filter: blur(10px);
      background-color: rgb(31, 57, 42, 0.7);
    `}
  ${(props) =>
    props.tablet &&
    css`
      width: 100%;
      backdrop-filter: blur(10px);
      background-color: rgb(31, 57, 42, 0.7);
    `}
  ${(props) =>
    props.mobile &&
    css`
      width: 100%;
      backdrop-filter: blur(10px);
      background-color: rgb(31, 57, 42, 0.7);
    `}
`;

export const NavbarLogoStyle = styled.div`
  user-select: none;
  ${(props) =>
    props.largedesktop &&
    css`
      img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 220px;
      }
    `}
  ${(props) =>
    props.desktop &&
    css`
      img {
        display: block;
        width: 170px;
        margin-left: auto;
        margin-right: auto;
      }
    `}
  ${(props) =>
    props.notebook &&
    css`
      img {
        display: block;
        width: 120px;
        margin-left: auto;
        margin-right: auto;
      }
    `}
  ${(props) =>
    props.tablet &&
    css`
      img {
        display: block;
        width: 120px;
        margin-left: auto;
        margin-right: auto;
      }
    `}
  ${(props) =>
    props.mobile &&
    css`
      img {
        display: block;
        width: 80px;
        margin-left: auto;
        margin-right: auto;
      }
    `}
`;

export const NavbarLinks = styled.div`
  ${(props) =>
    props.largedesktop &&
    css`
      a {
        text-decoration: none;
        color: white;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 800;
        font-size: 25px;
        line-height: 28px;
      }
      Button {
        color: white;
        border-radius: 30px;
        font-size: 25px;
      }
      Button:hover {
        background: #122018;
      }
    `}
  ${(props) =>
    props.desktop &&
    css`
      a {
        text-decoration: none;
        color: white;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 800;
        font-size: 18px;
        line-height: 28px;
      }
      Button {
        color: white;
        border-radius: 30px;
        font-size: 18px;
      }
      Button:hover {
        background: #122018;
      }
    `}
  ${(props) =>
    props.notebook &&
    css`
      a {
        text-decoration: none;
        color: white;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 800;
        font-size: 13px;
        line-height: 28px;
      }
      Button {
        color: white;
        border-radius: 30px;
        font-size: 13px;
      }
      Button:hover {
        background: #122018;
      }
    `}
    @media (max-width: 960px) {
    display: none;
  }

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
`;

export const NavbarSocialLinks = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.largedesktop &&
    css`
      a {
        display: flex;
        justify-content: center;
        align-items: center;

        border: 1px solid white;
        border-radius: 100px;

        color: white;
        font-size: 35px;

        width: 50px;
        height: 50px;
        margin-left: 10px;
      }
    `}
  ${(props) =>
    props.desktop &&
    css`
      a {
        display: flex;
        justify-content: center;
        align-items: center;

        border: 1px solid white;
        border-radius: 100px;

        color: white;
        font-size: 20px;

        width: 30px;
        height: 30px;
        margin-left: 10px;
      }
    `}
  ${(props) =>
    props.notebook &&
    css`
      a {
        display: flex;
        justify-content: center;
        align-items: center;

        border: 1px solid white;
        border-radius: 100px;

        color: white;
        font-size: 20px;
        width: 30px;
        height: 30px;
        margin-left: 10px;
      }
    `}
  ${(props) =>
    props.tablet &&
    css`
      a {
        display: none;
      }
    `}
  ${(props) =>
    props.mobile &&
    css`
      a {
        display: none;
      }
    `}
`;
