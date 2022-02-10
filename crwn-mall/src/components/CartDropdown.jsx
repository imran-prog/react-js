import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// Custom Button
import CustomButton from "./CustomButton";
import CartItem from "./CartItem";
// Redux
import { connect } from "react-redux";
import { selectCartItems } from "../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import toggleCart from "../redux/cart/cart.actions";

const CartDropdown = ({ cartItem, dispatch }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Content>
        {cartItem.length > 0 ? (
          cartItem.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyMessage>Your Cart Is Empty</EmptyMessage>
        )}
      </Content>
      <CustomButton
        className="button"
        onClick={() => {
          dispatch(toggleCart());
          navigate("/checkout");
        }}
      >
        Go to Cart
      </CustomButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  .button {
    margin-top: auto;
  }
`;

const Content = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const EmptyMessage = styled.div`
  font-size: 18px;
  margin: 50px auto;
`;

const mapStateToProps = createStructuredSelector({
  cartItem: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
