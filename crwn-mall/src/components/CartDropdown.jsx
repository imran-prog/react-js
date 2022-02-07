import React from "react";
import styled from "styled-components";
// Custom Button
import CustomButton from "./CustomButton";

const CartDropdown = () => {
  return (
    <Wrapper>
      <Content />
      <CustomButton className="button">Go to Cart</CustomButton>
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

export default CartDropdown;
