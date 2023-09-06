import styled from "styled-components";
import { css } from "styled-components";

export const TickerStyle = styled.div`
  display: flex;
  width: 160%;
  animation: ticker 15s linear infinite;
  justify-content: space-around;

  .ImgCont {
    display: flex;
    align-items: center;
    padding: 0;
    white-space: nowrap;
  }
  @keyframes ticker {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-70%);
    }
  }
  img {
    display: block;
    margin: 0;
    padding: 20px 20px;
    margin: 0 80px;
  }
  .ArtImg {
    width: 15%;
  }
  .BashImg {
    width: 200%;
  }
  .RosKIMg {
    width: 50%;
  }

  /* LDesktop */
  ${(props) =>
    props.LargeDesktop &&
    css`
      img {
        margin: 0 120px;
      }
      .ArtImg {
        width: 400px;
      }
    `}
  /* Decktop 1920 */
${(props) =>
    props.Desktop &&
    css`
      img {
        margin: 0 120px;
      }
      .ArtImg {
        width: 250px;
      }
      .BashImg {
        width: 250px;
      }
    `}
/* Notebook 1280*/
${(props) =>
    props.Notebook &&
    css`
      img {
        margin: 0 120px;
      }
      .ArtImg {
        width: 250px;
      }
      .BashImg {
        width: 250px;
      }
    `}
/* Tablet 960*/
${(props) =>
    props.Tablet &&
    css`
      img {
        margin: 0 80px;
      }
      .ArtImg {
        width: 180px;
      }
      .BashImg {
        width: 180px;
      }
    `}
/* Mobile 600*/
${(props) =>
    props.Mobile &&
    css`
       animation: ticker 6s linear infinite;
      img {
        margin: 0 20px;
      }
      .ArtImg {
        width: 80px;
      }
      .BashImg {
        width: 80px;
      }
      .RosKImg {
        width: 220px;
      }
    `}
`;
