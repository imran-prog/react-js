import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <Content>© 2022 - All right reserved by Disney Cloner's 😇 </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 40px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  background-color: #010101;
  display: flex;
`;

const Content = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Footer;
