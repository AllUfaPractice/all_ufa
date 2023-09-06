import React from "react";
import { TVLiveButtonStyle } from "./TVLiveButton.styled";
import { Button } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const TVLiveButton = () => {
  const isLargeDesktop = useMediaQuery((theme) => theme.breakpoints.up("xl"));
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.between("lg", "xl"));
  const isNotebook = useMediaQuery((theme) => theme.breakpoints.between("md", "lg"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <TVLiveButtonStyle LargeDesktop={isLargeDesktop} Desktop={isDesktop} Notebook={isNotebook} Tablet={isTablet} Mobile={isMobile}>
      <Button
        className="TVButton"
        color="primary"
        disabled={false}
        size="medium"
        variant="contained"
        href="https://allufa.ru/TV-online/"
      >
        Прямой эфир
      </Button>
    </TVLiveButtonStyle>
  );
};

export default TVLiveButton;
