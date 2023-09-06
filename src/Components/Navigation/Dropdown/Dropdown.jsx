import React, { useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import {
  DropdownStyle,
  DropdownStyleModal,
  DropdownStyleLinkIcon,
  DropdownStyleLink,
} from "./Dropdown.styled.js";
import { Link } from "react-router-dom";

const ModalButton = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <DropdownStyle>
        <Button onClick={handleOpen}>Наши продукты</Button>
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "11%",
              left: "50%",
              transform: "translate(-50%, 0%)",
              width: "30%",
              height: "50%",
              bgcolor: "rgb(31,57,42,0.7)",
              borderRadius: "0px 0px 20px 20px",
              backdropFilter: "blur(5px)",
            }}
          >
            <DropdownStyleModal>
              <DropdownStyleLink>
                <DropdownStyleLinkIcon />
                <Link to="/src/Pages/BabyBoomPage/BabyBoomPage.jsx">
                  Детки БУМ!
                </Link>
              </DropdownStyleLink>
              <DropdownStyleLink>
                <DropdownStyleLinkIcon />
                <Link to="/src/Pages/CookingShowPage/CookingShowPage.jsx">
                  Куленарное шоу вкусно
                </Link>
              </DropdownStyleLink>
              <DropdownStyleLink>
                <DropdownStyleLinkIcon />
                <Link to="/src/Pages/UfaIsAware/UfaIsAwarePage.jsx">
                  Уфа в курсе
                </Link>
              </DropdownStyleLink>
              <DropdownStyleLink>
                <DropdownStyleLinkIcon />
                <Link to="/src/Pages/SummerUfa/SummerUfaPage.jsx">
                  Летняя Уфа
                </Link>
              </DropdownStyleLink>
              <DropdownStyleLink>
                <DropdownStyleLinkIcon />
                <Link to="/src/Pages/WeatherPage/WeatherPage.jsx">
                  Прогноз Погоды
                </Link>
              </DropdownStyleLink>
              <DropdownStyleLink>
                <DropdownStyleLinkIcon />
                <Link to="/src/Pages/Capital/CapitalPage.jsx">Столица</Link>
              </DropdownStyleLink>
              <DropdownStyleLink>
                <DropdownStyleLinkIcon />
                <Link to="/src/Pages/UfaOfChildhood/UfaOfChildhoodPage.jsx">
                  Уфа-столица детства
                </Link>
              </DropdownStyleLink>
              <DropdownStyleLink>
                <DropdownStyleLinkIcon />
                <Link to="/src/Pages/BabyBoomPage/BabyBoomPage.jsx">
                  Телемарафон
                </Link>
              </DropdownStyleLink>
            </DropdownStyleModal>
          </Box>
        </Modal>
      </DropdownStyle>
    </div>
  );
};

export default ModalButton;
