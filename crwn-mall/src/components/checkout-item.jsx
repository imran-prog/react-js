import React from "react";
import styled from "styled-components";
// redux
import { connect } from "react-redux";
import { removeItem, addItem, decreaseItem } from "../redux/cart/cart.actions";
const CheckOutItem = ({ cartItems, removeItem, addItem, decreaseItem }) => {
  const { name, imageUrl, quantity, price } = cartItems;

  return (
    <Wrapper>
      <Image>
        <img src={imageUrl} alt={name} />
      </Image>
      <Block>{name}</Block>
      <Block className="quantity">
        <Arrow onClick={() => decreaseItem(cartItems)}>&#10094;</Arrow>
        <Qunatity>{quantity}</Qunatity>
        <Arrow onClick={() => addItem(cartItems)}>&#10095;</Arrow>
      </Block>
      <Block>{price}</Block>
      <Remove onClick={() => removeItem(cartItems)}>&#10005;</Remove>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

const Image = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Block = styled.span`
  width: 23%;

  &.quantity {
    display: flex;
  }
`;

const Qunatity = styled.span`
  margin: 0 10px;
`;

const Arrow = styled.div`
  cursor: pointer;
`;

const Remove = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  decreaseItem: (item) => dispatch(decreaseItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
