import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";
import { HamburgerStyle } from "./HamburgerMenu.styled";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.common.white, // Установка цвета иконки
  },
  drawer: {
    width: 400,
  },
}));

const HamburgerMenu = () => {
  const isLargeDesktop = useMediaQuery((theme) => theme.breakpoints.up("xl"));
  const isDesktop = useMediaQuery((theme) =>
    theme.breakpoints.between("lg", "xl")
  );
  const isNotebook = useMediaQuery((theme) =>
    theme.breakpoints.between("md", "lg")
  );

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
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <HamburgerStyle largedesktop={isLargeDesktop} desktop={isDesktop} notebook={isNotebook}>
      <div className={classes.root}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
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
