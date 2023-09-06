import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";
import { HamburgerStyle, } from "./HamburgerMenu.styled";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.common.white, // Установка цвета иконки
  },
  drawer: {
    width: "320px",
    height: '100vh',
    backgroundColor: "rgb(31, 57, 42, 0.9)",
    border: '1px solid black',
    color: 'white',
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  homelink: {
    color: "white",
    textDecoration: "none",
    fontSize: "30px",
    width: "100%",
    paddingLeft: "20px",
    paddingTop: "50px",
    paddingBottom: "20px",
    fontWeight: "bolder",
    letterSpacing: "10px",
    fontFamily: "PT Sans",
  },
  link: {
    width: "100%",
    textAlign: "left",
    color: "white",
    textDecoration: "none",
    fontSize: "22px",
    paddingLeft: "20px",
    letterSpacing: "2px",
    fontFamily: "Raleway",
  },
}));

const HamburgerMenu = () => {
  const isLargeDesktop = useMediaQuery((theme) => theme.breakpoints.up("xl"));
  const isDesktop = useMediaQuery((theme) =>theme.breakpoints.between("lg", "xl"));
  const isNotebook = useMediaQuery((theme) =>theme.breakpoints.between("md", "lg"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const classes = useStyles();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(open);
  };

  const sideList = () => (
    <div
      className={classes.drawer}
      bgColor="black"
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button className={classes.listItem}>
          <Link className={classes.homelink} to="/">Главная</Link>
        </ListItem>
        <ListItem button className={classes.listItem} >
          <Link className={classes.link} to="/baby-boom">Baby Boom</Link>
        </ListItem>
        <ListItem button className={classes.listItem}>
          <Link className={classes.link} to="/capital">Столица</Link>
        </ListItem>
        <ListItem button className={classes.listItem}>
          <Link className={classes.link} to="/cooking-show">Вкусно</Link>
        </ListItem>
        <ListItem button className={classes.listItem}>
          <Link className={classes.link} to="/summer-ufa">Летняя Уфа</Link>
        </ListItem>
        <ListItem button className={classes.listItem}>
          <Link className={classes.link} to="/ufa-is-aware">Уфа в курсе</Link>
        </ListItem>
        <ListItem button className={classes.listItem}>
          <Link className={classes.link} to="/ufa-of-childhood">Столица детства</Link>
        </ListItem>
        <ListItem button className={classes.listItem}>
          <Link className={classes.link} to="/weather">Прогноз погоды</Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <HamburgerStyle largedesktop={isLargeDesktop} desktop={isDesktop} notebook={isNotebook} tablet={isTablet} mobile={isMobile}>
      <div className={classes.root}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)
            }
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
          <Drawer open={isOpen} onClose={toggleDrawer(false)}>
            {sideList()}
          </Drawer>        
      </div>
    </HamburgerStyle>
  );
};

export default HamburgerMenu;
