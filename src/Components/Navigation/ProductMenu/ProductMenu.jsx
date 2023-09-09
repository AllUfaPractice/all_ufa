//npm
import React, { useState } from "react";
import { MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
//Styles
import {
  HorizontalMenu,
  ProductMenu,
  ProductSubMenu,
} from "./ProductMenu.styled";

const ProductMenuButton = ({ onClick, children }) => (
  <ProductMenu onClick={onClick}>{children}</ProductMenu>
);

const MenuItems = () => {
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);

  const handleProductMenuClick = (event) => {
    setIsProductMenuOpen(true);
  };

  const handleProductMenuClose = () => {
    setIsProductMenuOpen(false);
  };

  return (
    <>
      <HorizontalMenu>
        <ProductMenuButton>Наш сайт</ProductMenuButton>
        <ProductMenuButton onClick={handleProductMenuClick}>
          Продукты
        </ProductMenuButton>
        <ProductMenuButton>О нас</ProductMenuButton>
      </HorizontalMenu>
      <ProductSubMenu
        anchorEl={isProductMenuOpen}
        open={Boolean(isProductMenuOpen)}
        onClose={handleProductMenuClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
      >
        <MenuItem>
          <Link to="/baby-boom">Детки БУМ!</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/cooking-show">Куленарное шоу вкусно</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/summer-ufa">Летняя Уфа</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/weather">Прогноз Погоды</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/capital">Столица</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/ufa-of-childhood">Уфа-столица детства</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/">Телемарафон</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/ufa-is-aware">Уфа в курсе</Link>
        </MenuItem>
      </ProductSubMenu>
    </>
  );
};

export default MenuItems;
