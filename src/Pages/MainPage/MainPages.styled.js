import styled from "styled-components";
import BGImg from "../../Images/MainPageFirstSlideBackgroud.jpg"

export const MainPageStyle = styled('div')(() => ({
  margin: '0',
  padding: '0',
  fontFamily: 'Raleway, sans-serif',
  fontWeight: '0',
}))

export const UTPSlide = styled('div')(() => ({
  height: '100vh',
  width: '100%',
  padding: '0',
  margin: '0',

  backgroundImage: `url(${BGImg})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',

  display: "grid",
  gridTemplateRows: "1fr 1fr 0.3fr",
  alignItems: "end",
  justifyContent: "center",

  "& h1, & h2": {
    color: "white",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "400",
    width: "100%",
  },

  "& h1": {
    gridColumn: "1/3",
    gridRow: "1/2",
  },

  "& h2": {
    gridColumn: "1/3",
    gridRow: "2/3",
  },
}))