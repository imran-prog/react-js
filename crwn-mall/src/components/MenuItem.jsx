import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const openLink = () => {
    const path = location.pathname;
    if (path === "/") {
      navigate(linkUrl);
    }
  };

  return (
    <Wrapper onClick={openLink}>
      <Image className={size} imageUrl={imageUrl} />
      <Content>
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </Content>
    </Wrapper>
  );
};

const Image = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-size: cover;

  &.large {
    height: 380px;
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
  background-color: white;
  opacity: 0.7;
  position: absolute;

  .title {
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
  }

  .subtitle {
    font-weight: lighter;
    font-size: 16px;
  }
`;

const Wrapper = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;

  &:hover {
    cursor: pointer;

    & Image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & Content {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

export default MenuItem;
