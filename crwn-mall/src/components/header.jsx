import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Logo
import { ReactComponent as Logo } from "../assets/crown.svg";
// Firebase
import { logout } from "../firebase";
// Connect to redux
import { connect } from "react-redux";
// Components
import CartIcon from "./CartIcon";
import CartDropdown from "./CartDropdown";

const Header = ({ currentUser, hidden }) => {
  return (
    <Wrapper>
      <Link to="/">
        <Logo alt="logo" />
      </Link>
      <NavMenu>
        <Link to="/shop">SHOP</Link>
        <Link to="/shop">CONTACT</Link>
        {currentUser ? (
          <div onClick={logout}>SIGN OUT</div>
        ) : (
          <Link to="/signin">SIGN IN</Link>
        )}
        <CartIcon />
      </NavMenu>
      {hidden ? null : <CartDropdown />}
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

  a,
  div {
    padding: 10px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

// mapStatetoProps
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
