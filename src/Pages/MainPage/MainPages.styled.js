import styled from "styled-components";
import { css } from "styled-components";
import BGImg from "../../Images/MainPageFirstSlideBackgroud.jpg";
import { Link } from "react-router-dom";

export const MainPageStyle = styled.div`
  * {
    margin: 0;
    padding: 0;
    font-family: "PT sans", sans-serif;
  }
`;

export const UTPSlide = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1.5fr 0.9fr 0.5fr;
  justify-items: center;
  height: 100vh;
  background-image: url(${BGImg});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;

  h1 {
    color: white;
    font-size: 110px;
    text-align: center;
    align-self: end;
    font-weight: 400;
  }
  h2 {
    color: white;
    font-size: 45px;
    text-align: center;
  }

  /* Decktop 1920 */
  ${(props) =>
    props.Desktop &&
    css`
      h1 {
        font-size: 70px;
      }
      h2 {
        font-size: 30px;
      }
    `}
  /* Notebook 1280*/
${(props) =>
    props.Notebook &&
    css`
      h1 {
        font-size: 55px;
      }
      h2 {
        font-size: 22px;
      }
    `}
/* Tablet 960*/
${(props) =>
    props.Tablet &&
    css`
      h1 {
        font-size: 45px;
      }
      h2 {
        font-size: 16px;
      }
    `}
/* Mobile 600*/
${(props) =>
    props.Mobile &&
    css`
      h1 {
        font-size: 38px;
      }
      h2 {
        font-size: 14px;
      }
    `}
`;

export const ProductContStyle = styled.div`
  background-color: rgba(3, 35, 18, 0.55);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);

  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;

  .penultimate {
    grid-area: 3 / 1 / 4 / 3;
  }
  .lastgrid {
    grid-area: 3 / 2 / 4 / 4;
  }

  ${(props) =>
    props.Tablet &&
    css`
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(4, 1fr);
      .penultimate {
        grid-area: 4 / 1 / 5 / 2;;
      }
      .lastgrid {
        grid-area: 4 / 2 / 5 / 3;;
      }
    `}

  ${(props) =>
    props.Mobile &&
    css`
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(8, 1fr);

      .penultimate {
        grid-area: 7 / 1 / 8 / 2;;
      }
      .lastgrid {
        grid-area: 8 / 1 / 9 / 2;;
      }
    `}
`;

export const ProductStyle = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.725);

  display: grid;
  grid-template-rows: 1fr 0.6fr 1fr;
  justify-items: center;
  width: 33.33vw;
  height: 45vh;
  h3 {
    font-size: calc(2.4vh + 1.4vw);
    color: white;
    text-align: center;
    align-self: center;
  }
  p {
    font-size: calc(1.26vh + 0.63vw);
    color: white;
    text-align: center;
    width: 80%;
  }

  ${(props) =>
    props.Tablet &&
    css`
      width: 50vw;
      height: 40vh;
    `}

  ${(props) =>
    props.Mobile &&
    css`
      width: 100vw;
      height: 45vh;
    `};
`;

export const ProductLink = styled(Link)`
  font-size: calc(1.44vh + 0.81vw);
  align-self: center;
  text-align: center;
  color: white;
  width: 40%;
  padding: 3% 0;
  text-decoration: none;

  color: #fff;
  transition: all 0.3s;
  position: relative;

  transition: all 0.3s;

  ::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-top-style: solid;
    border-bottom-style: solid;
    border-top-color: rgba(255, 255, 255, 0.5);
    border-bottom-color: rgba(255, 255, 255, 0.5);
    transform: scale(0.1, 1);
  }
  :hover {
    letter-spacing: 2px;
  }
  :hover::before {
    opacity: 1;
    transform: scale(1, 1);
  }
  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.3s;
    background-color: rgba(255, 255, 255, 0.1);
  }
  :hover::after {
    opacity: 0;
    transform: scale(0.1, 1);
  }
`;
