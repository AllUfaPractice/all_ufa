import React from "react";
import {
  ProductsMenuStyle,
  ModalMenuStyle,
  ModalLinkStyle,
  ModalButtonStyle,
  ModalMenuLogoStyle,
  ModalAboutLinkStyle,
  ModalMainLinkStyle
} from "./ProductsMenu.styled";
import { Modal } from "@material-ui/core";
import ModalMenuLogo from "../../Images/AboutImage.png";

const ProductsMenu = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ProductsMenuStyle>
      <ModalButtonStyle onClick={handleOpen}>Меню</ModalButtonStyle>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalMenuStyle>
          <ModalMenuLogoStyle src={ModalMenuLogo}></ModalMenuLogoStyle>
          <ModalMainLinkStyle onClick={handleClose} to="/">Главная</ModalMainLinkStyle>
          <ModalLinkStyle onClick={handleClose} to="/baby-boom">Детки BOOM!</ModalLinkStyle>
          <ModalLinkStyle onClick={handleClose} to="/capital">Столица</ModalLinkStyle>
          <ModalLinkStyle onClick={handleClose} to="/cooking-show-vkusno">Вкусно</ModalLinkStyle>
          <ModalLinkStyle onClick={handleClose} to="/ufa-is-aware">Уфа в курсе</ModalLinkStyle>
          <ModalLinkStyle onClick={handleClose} to="/summer-ufa">Летняя Уфа</ModalLinkStyle>
          <ModalLinkStyle onClick={handleClose} to="/weather">Прогноз погоды</ModalLinkStyle>
          <ModalLinkStyle onClick={handleClose} to="/ufa-of-childhood">Уфа - Столица детства</ModalLinkStyle>
          <ModalLinkStyle onClick={handleClose} to="/ticker">Бегущая строка</ModalLinkStyle>
          <ModalAboutLinkStyle onClick={handleClose} to="/about-us">О нас</ModalAboutLinkStyle>
        </ModalMenuStyle>
      </Modal>
    </ProductsMenuStyle>
  );
};
export default ProductsMenu;
