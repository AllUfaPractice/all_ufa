import React, { useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import {
  DropdownStyle,
  DropdownStyleModal,
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
                <Link to="/baby-boom">
                  Детки БУМ!
                </Link>
              </DropdownStyleLink>
              <DropdownStyleLink>
                <Link to="/cooking-show">
                  Куленарное шоу вкусно
                </Link>
              </DropdownStyleLink>
              <DropdownStyleLink>
                <Link to="/ufa-is-aware">
                  Уфа в курсе
                </Link>
              </DropdownStyleLink>
              <DropdownStyleLink>
                <Link to="/summer-ufa">
                  Летняя Уфа
                </Link>
              </DropdownStyleLink>
              <DropdownStyleLink>
                <Link to="/weather">
                  Прогноз Погоды
                </Link>
              </DropdownStyleLink>
              <DropdownStyleLink>
                <Link to="/capital">Столица</Link>
              </DropdownStyleLink>
              <DropdownStyleLink>
                <Link to="/ufa-of-childhood">
                  Уфа-столица детства
                </Link>
              </DropdownStyleLink>
              <DropdownStyleLink>
                <Link to="/">
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
