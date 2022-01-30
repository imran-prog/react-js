import React from "react";
import styled from "styled-components";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <Wrapper className={size} imageUrl={imageUrl}>
      <Content>
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-size: cover;

  &.large {
    height: 380px;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

const Content = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;

  .title {
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
    text-transform: uppercase;
  }

  .subtitle {
    font-weight: lighter;
    font-size: 16px;
  }
`;

export default MenuItem;
