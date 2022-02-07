import React from "react";
import styled from "styled-components";
// Logo
import { ReactComponent as ShoppingBag } from "../assets/shopping-bag.svg";

const CartIcon = () => {
  return (
    <Wrapper>
      <ShoppingBag className="shopping-icon" />
      <ItemCount>0</ItemCount>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 45px;
  height: 45px;
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
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;

export default CartIcon;
