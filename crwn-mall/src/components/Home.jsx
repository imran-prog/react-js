import React from "react";
import styled from "styled-components";
// Components
import Directory from "./Directory";

const Home = (props) => {
  return (
    <Wrapper>
      <Directory />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;
`;

export default Home;
