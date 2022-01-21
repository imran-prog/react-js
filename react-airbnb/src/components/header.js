import styled from "styled-components";

const Header = (props) => {
  return (
    <Wrapper>
      <Content>
        <Logo>
          <img src="" alt="airbnb" />
        </Logo>
        <UserList>
          <Host>Become a Host</Host>
          <LangRegion>
            <img src="" alt="" />
          </LangRegion>
          <UserData>
            <img src="" alt="" />
            <img src="" alt="" />
          </UserData>
        </UserList>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Content = styled.div``;

const Logo = styled.div``;

const UserList = styled.div``;

const Host = styled.button``;

const LangRegion = styled.button``;

const UserData = styled.div``;

export default Header;
