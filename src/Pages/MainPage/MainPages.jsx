import React from "react";
//Styles
import {
  MainPageStyle,
  UTPSlide,
  ProductContStyle,
  ProductStyle,
  ProductLink,
} from "./MainPages.styled";

//Components
import TVLiveButton from "../../Components/Buttons/TVLiveButton/TVLiveButton";

// NPM
import { useMediaQuery } from "@mui/material";

const MainPage = () => {
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
    <MainPageStyle>
      <UTPSlide
        Desktop={isDesktop}
        Notebook={isNotebook}
        Tablet={isTablet}
        Mobile={isMobile}
      >
        <h1>Реклама на ВСЮ УФУ</h1>
        <h2>lorem lorem lorem lorem lorem lorem</h2>
        <TVLiveButton />
      </UTPSlide>

      <ProductContStyle
        Desktop={isDesktop}
        Notebook={isNotebook}
        Tablet={isTablet}
        Mobile={isMobile}
      >
        <ProductStyle
          Desktop={isDesktop}
          Notebook={isNotebook}
          Tablet={isTablet}
          Mobile={isMobile}
        >
          <h3>Детки BOOM</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo a
            obcaecati minus esse numquam reprehenderit sequi
          </p>
          <ProductLink to="/baby-boom">
            Read more
          </ProductLink>
        </ProductStyle>

        <ProductStyle
          Desktop={isDesktop}
          Notebook={isNotebook}
          Tablet={isTablet}
          Mobile={isMobile}
        >
          <h3>Столица</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo a
            obcaecati minus esse numquam reprehenderit sequi
          </p>

          <ProductLink to="/capital">
            Read more
          </ProductLink>
        </ProductStyle>

        <ProductStyle
          Desktop={isDesktop}
          Notebook={isNotebook}
          Tablet={isTablet}
          Mobile={isMobile}
        >
          <h3>Вкусно</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo a
            obcaecati minus esse numquam reprehenderit sequi
          </p>

          <ProductLink to="/cooking-show-vkusno">
            Read more
          </ProductLink>
        </ProductStyle>

        <ProductStyle
          Desktop={isDesktop}
          Notebook={isNotebook}
          Tablet={isTablet}
          Mobile={isMobile}
        >
          <h3>Уфа в Курсе</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo a
            obcaecati minus esse numquam reprehenderit sequi
          </p>

          <ProductLink to="/ufa-is-aware">
            Read more
          </ProductLink>
        </ProductStyle>

        <ProductStyle
          Desktop={isDesktop}
          Notebook={isNotebook}
          Tablet={isTablet}
          Mobile={isMobile}
        >
          <h3>Летняя Уфа</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo a
            obcaecati minus esse numquam reprehenderit sequi
          </p>

          <ProductLink to="/summer-ufa">
            Read more
          </ProductLink>
        </ProductStyle>

        <ProductStyle
          Desktop={isDesktop}
          Notebook={isNotebook}
          Tablet={isTablet}
          Mobile={isMobile}
        >
          <h3>Прогноз погоды</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo a
            obcaecati minus esse numquam reprehenderit sequi
          </p>

          <ProductLink to="/weather">
            Read more
          </ProductLink>
        </ProductStyle>

        <ProductStyle
          Desktop={isDesktop}
          Notebook={isNotebook}
          Tablet={isTablet}
          Mobile={isMobile}
        >
          <h3>Уфа - Столица детства</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo a
            obcaecati minus esse numquam reprehenderit sequi
          </p>

          <ProductLink to="/ufa-of-childhood">
            Read more
          </ProductLink>
        </ProductStyle>

        <ProductStyle
          Desktop={isDesktop}
          Notebook={isNotebook}
          Tablet={isTablet}
          Mobile={isMobile}
        >
          <h3>Детсво</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo a
            obcaecati minus esse numquam reprehenderit sequi
          </p>

          <ProductLink to="/ufa-of-childhood">
            Read more
          </ProductLink>
        </ProductStyle>

        <ProductStyle className="lastgrid"
          Desktop={isDesktop}
          Notebook={isNotebook}
          Tablet={isTablet}
          Mobile={isMobile}
        >
          <h3>Бегущая строка</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo a
            obcaecati minus esse numquam reprehenderit sequi
          </p>

          <ProductLink to="/ticker">
            Read more
          </ProductLink>
        </ProductStyle>
      </ProductContStyle>
    </MainPageStyle>
  );
};

export default MainPage;
