import React from "react";
import styled from "styled-components";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <Wrapper>
      <Image src={imageUrl} alt={name} />
      <Content>
        <Name>{name}</Name>
        <Price>
          {quantity} x ${price}
        </Price>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

const Image = styled.img`
  width: 30%;
`;

const Content = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

const Name = styled.span`
  font-size: 16px;
`;

const Price = styled.span``;

export default CartItem;
