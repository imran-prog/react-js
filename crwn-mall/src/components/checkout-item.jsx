import React from "react";
import styled from "styled-components";

const CheckOutItem = ({ cartItems: { name, imageUrl, quantity, price } }) => {
  return (
    <Wrapper>
      <Image>
        <img src={imageUrl} alt={name} />
      </Image>
      <Block>{name}</Block>
      <Block>{quantity}</Block>
      <Block>{price}</Block>
      <Remove>&#10005;</Remove>
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
`;

const Remove = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

export default CheckOutItem;
