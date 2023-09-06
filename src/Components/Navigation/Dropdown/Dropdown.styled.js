import styled from "styled-components";

export const DropdownStyle = styled.div`
  Button {
    text-decoration: none;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 800;
    line-height: 28px;
    display: flex;
    width: 100%;
    z-index: 2;
  }
  Button:hover {
    background: #122018;
  }
`;

export const DropdownStyleModal = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  text-align: center;
  align-items: center;
  margin: 5%;
  height: 90%;
  width: 90%;
`;

export const DropdownStyleLink = styled.a`
  a {
    height: 100%;
    width: 100%;
    text-decoration: none;
    color: white;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 800;
    font-size: 25px;
    line-height: 28px;
  }
`;
