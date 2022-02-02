import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Logo
import { ReactComponent as Logo } from "../assets/crown.svg";

const Header = () => {
  return (
    <Wrapper>
      <Link to="/">
        <Logo alt="logo" />
      </Link>
      <NavMenu>
        <Link to="/shop">SHOP</Link>
        <Link to="/shop">CONTACT</Link>
        <Link to="/signin">SIGNIN</Link>
      </NavMenu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  a {
    height: 100%;
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const NavMenu = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default Header;
