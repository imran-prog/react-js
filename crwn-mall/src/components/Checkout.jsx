import React from "react";
import styled from "styled-components";
// Redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../redux/cart/cart.selectors";
import { selectCartTotal } from "../redux/cart/cart.selectors";

const Checkout = ({ cartItems, total }) => {
  return (
    <Wrapper>
      <Header>
        <HBlock>
          <BlockText>Product</BlockText>
        </HBlock>
        <HBlock>
          <BlockText>Description</BlockText>
        </HBlock>
        <HBlock>
          <BlockText>Quantity</BlockText>
        </HBlock>
        <HBlock>
          <BlockText>Price</BlockText>
        </HBlock>
        <HBlock>
          <BlockText>Remove</BlockText>
        </HBlock>
      </Header>
      <Content>{cartItems.map((cartItem) => cartItem.name)}</Content>
      <Total>Total: ${total}</Total>
    </Wrapper>
  );
};

// Styled Components
const Wrapper = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

const Header = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

const HBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

const BlockText = styled.span``;

const Content = styled.div``;

const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

// Redux
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
