import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = (props) => {
  return (
    <Wrapper>
      <Content>
        <Logo>
          <Link to="/">
            <img src="/images/airbnb.png" alt="airbnb" />
          </Link>
        </Logo>
        <UserList>
          <Host>Become a Host</Host>
          <LangRegion>
            <span className="material-icons">language</span>
          </LangRegion>
          <UserData>
            <span className="material-icons">menu</span>
            <img src="/images/account.svg" alt="profile" />
          </UserData>
        </UserList>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #000;
  width: 100%;
  position: sticky;
  top: 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 80px;
  height: 80px;

  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const Logo = styled.div`
  img {
    width: 120px;

    @media (max-width: 768px) {
      width: 80px;
    }
  }
`;

const UserList = styled.div`
  display: flex;
`;

const Host = styled.button`
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  border-radius: 22px;
  font-weight: 600;
  padding: 12px;
  line-height: 0px;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

const LangRegion = styled(Host)`
  margin-right: 8px;
  span {
    font-size: 18px;
  }
`;

const UserData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(255, 255, 255);
  border-radius: 22px;
  padding: 12px;
  

  .material-icons {
    color: #222222;
    font-size: 16px;
    font-weight: 100;
  }
`;

export default Header;
