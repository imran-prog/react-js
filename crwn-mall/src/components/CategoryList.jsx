import React from "react";
import styled from "styled-components";
// Component
import CategoryItem from "./CategoryItem";

const CategoryList = ({ title, items }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CategoryItem key={item.id} {...item} />
          ))}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default CategoryList;
