import React from "react";
import styled from "styled-components";
// Components
import Collection from "./Collection";

const Shop = ({ collection }) => {
  return (
    <Wrapper>
      <Collection />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Shop;
