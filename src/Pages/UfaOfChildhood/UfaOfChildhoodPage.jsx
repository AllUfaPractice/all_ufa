import React from "react";
import Navbar from "../../Components/Navigation/Navbar/Navbar";
import HamburgerMenu from "../../Components/Navigation/HamburgerMenu/HamburgerMenu";
import {
  NameStyle,
  UfaIsAwarePageStyled,
  InfoStyle,
  ReleaseStyle,
} from "./UfaOfChildhood.styled";

// Image
import UfaOfChildhoodGif from "../../Images/UfaOfChildhood.gif";
import UfaOfChildhoodImage from "../../Images/UfaOfChildhoodImage.png";

// NPM
import { useMediaQuery } from "@mui/material";

const UfaOfChildhoodPage = () => {
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
  return (
    <UfaIsAwarePageStyled>
      <HamburgerMenu />
      <NameStyle
        LargeDesktop={isLargeDesktop}
        Desktop={isDesktop}
        Notebook={isNotebook}
        Tablet={isTablet}
        Mobile={isMobile}
      >
        <div className="ImageCont">
          <img src={UfaOfChildhoodGif} />
        </div>
      </NameStyle>

      <InfoStyle
        Desktop={isDesktop}
        Notebook={isNotebook}
        Tablet={isTablet}
        Mobile={isMobile}
      >
        <div className="InfoTextCont">
          <div className="InfoContText">
            <li className="text"></li>
            <p className="text">
              В прямом эфире телеканала «Вся Уфа» гости марафона вместе с
              ведущими говорят о красоте, отдыхе, туризме, модных тенденциях и о
              летнем досуге в целом и рассказывают о своих продуктах с точки
              зрения сезонности и разнообразия оказываемых услуг. О Вас узнает
              вся Уфа!
            </p>
          </div>
        </div>
        <div>
          <img src={UfaOfChildhoodImage} />
        </div>
      </InfoStyle>

      <ReleaseStyle
        Desktop={isDesktop}
        Notebook={isNotebook}
        Tablet={isTablet}
        Mobile={isMobile}
      >
        <p className="MainText">График выход шоу</p>
        <div className="RelaseCont">
          <div className="ContText ContLeft">
            <p className="Text">Вторник</p>
          </div>
          <div className="ContText ContRight">
            <p className="Text">13:15 </p>
            <p className="Text">19:15</p>
            <p className="Text">23:15</p>
          </div>
          <div className="ContText ContLeft">
            <p className="Text">Среда</p>
          </div>
          <div className="ContText ContRight">
            <p className="Text">7:15</p>
          </div>
          <div className="ContText ContLeft">
            <p className="Text">Суббота</p>
          </div>
          <div className="ContText ContRight">
            <p className="Text">18:30</p>
          </div>
          <div className="ContText ContLeft">
            <p className="Text">Воскресенье</p>
          </div>
          <div className="ContText ContRight">
            <p className="Text">9:15</p>
          </div>
        </div>
      </ReleaseStyle>
    </UfaIsAwarePageStyled>
  );
};

export default UfaOfChildhoodPage;
