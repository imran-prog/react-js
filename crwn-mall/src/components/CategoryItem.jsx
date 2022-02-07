import React from "react";
import styled from "styled-components";
import CustomButton from "./CustomButton";

const CategoryItem = ({ id, name, price, imageUrl }) => {
  return (
    <Wrapper>
      <Image src={imageUrl} alt={name} />
      <Content>
        <Title>{name}</Title>
        <Price>{price}</Price>
      </Content>
      <CustomButton className="custom-button" inverted>
        Add to cart
      </CustomButton>
    </Wrapper>
  );
};

const Image = styled.img`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  object-fit: cover;
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

const Wrapper = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  display: flex;
  justify-content: center;

  .custom-button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    ${Image} {
      opacity: 0.8;
    }

    .custom-button {
      opacity: 0.85;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default CategoryItem;
