import React from "react";
import styled from "styled-components";

const CategoryItem = ({ id, name, price, imageUrl }) => {
  return (
    <Wrapper>
      <Image src={imageUrl} alt={name} />
      <Content>
        <Title>{name}</Title>
        <Price>{price}</Price>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

const Content = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

const Title = styled.p`
  width: 90%;
  margin-bottom: 15px;
`;

const Price = styled.p`
  width: 10%;
`;

export default CategoryItem;
