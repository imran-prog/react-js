import React from "react";
import styled from "styled-components";
// Logo
import { ReactComponent as ShoppingBag } from "../assets/shopping-bag.svg";
// Redux
import { connect } from "react-redux";
import toggleCart from "../redux/cart/cart.actions";
import { selectCartItemsCount } from "../redux/cart/cart.selectors";

const CartIcon = ({ toggleCart, itemCount }) => {
  return (
    <Wrapper onClick={toggleCart}>
      <ShoppingBag className="shopping-icon" />
      <ItemCount>{itemCount}</ItemCount>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 32px;
  height: 42px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &.shopping-icon {
    width: 24px;
    height: 24px;
  }
`;

const ItemCount = styled.span`
  position: absolute;
  font-size: 11px;
  font-weight: bold;
  bottom: 11px;
`;

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
