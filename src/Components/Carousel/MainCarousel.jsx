import React, { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { ContStyle, ButtonsStyle } from "./MainCarousel.styled";
import { useMediaQuery } from "@mui/material";

const MainCarousel = () => {
  const isLargeDesktop = useMediaQuery((theme) => theme.breakpoints.up("xl"));
  const isDesktop = useMediaQuery((theme) =>
    theme.breakpoints.between("lg", "xl")
  );
  const isNotebook = useMediaQuery((theme) =>
    theme.breakpoints.between("md", "lg")
  );
  const isTablet = useMediaQuery((theme) =>
    theme.breakpoints.between("sm", "md")
  );
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows:false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
        },
      },
    ],
  };
  return (
    <ContStyle
      LargeDesktop={isLargeDesktop}
      Desktop={isDesktop}
      Notebook={isNotebook}
      Tablet={isTablet}
      Mobile={isMobile}
    >
      <Slider {...settings}>
        <Project />
        <div className="asd">
          <p>2</p>
        </div>
        <Project />
      </Slider>
    </ContStyle>
  );
};

export default MainCarousel;
