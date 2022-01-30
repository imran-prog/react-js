import React from "react";
import styled from "styled-components";
// Components
import Directory from "./Directory";

const Home = () => {
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
  padding: 20px 80px;
`;

export default Home;
