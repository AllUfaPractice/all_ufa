import React from "react";
import Navbar from "../../Components/Navigation/Navbar/Navbar";
import HamburgerMenu from "../../Components/Navigation/HamburgerMenu/HamburgerMenu";
import {
  UfaIsAwarePageStyled,
  NameStyle,
  InfoStyle,
  ReleaseStyle,
} from "./UfaIsAware.styled";

// Image
import UfaIsAwareMainImage from "../../Images/UfaIsAwareMainImage.jpg";
import UfaIsAwareImage from "../../Images/UfaIsAwareImage.jpg";

// NPM
import { useMediaQuery } from "@mui/material";

const UfaIsAwarePage = () => {
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
          <img src={UfaIsAwareMainImage} />
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
            <p className="text">
              Программа для тех, кто хочет расширить свой кругозор. В формате
              познавательного интервью, можно узнать буквально всё: от медицины
              до искусства, от новейших технологий до исторических фактов.
              Каждое интервью фокусируется на конкретной теме.
            </p>
            <p className="text">
              Задача программы – донести сложную информацию в доступном и
              интересном формате для всех зрителей, в частности до тех, кто не
              имеет профессионального образования в области науки.
            </p>
          </div>
        </div>
        <div>
          <img src={UfaIsAwareImage} />
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
            <p className="Text">Будни</p>
          </div>
          <div className="ContText ContRight">
            <p className="Text">17:05</p>
          </div>
          <div className="ContText ContLeft">
            <p className="Text">Повтор</p>
          </div>
          <div className="ContText ContRight">
            <p className="Text">9:30</p>
            <p className="Text">12:05</p>
          </div>
        </div>
      </ReleaseStyle>
    </UfaIsAwarePageStyled>
  );
};

export default UfaIsAwarePage;
