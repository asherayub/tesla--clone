import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [burgerOpen, setBurgerOpen] = useState(true);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model Y</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerOpen(false)} />
      </RightMenu>
      <BurgerNav show={burgerOpen}>
        <CustomClose onClick={()=>setBurgerOpen(true)} />
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Readster</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  backdrop-filter: blur(5px);
  z-index: 3;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    color: black;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  // gap: 5px;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
    color: black;
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  // z-index: 6;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;

  width: 300px;
  height: 100vh;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  transform: ${(props) => (props.show ? "translateX(100%)" : "translateX(0)")};
  transition: transform 200ms ease-in;

  li {
    list-style: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 5px;
    width: 100%;
    text-align: center;
    a {
      color: black;
      font-size: 20px;
      font-weight: 600;
      text-transform: uppercase;
    }
  }
`;
const CustomClose = styled(CloseIcon)`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;
