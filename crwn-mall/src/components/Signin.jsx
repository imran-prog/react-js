import React from "react";
import styled from "styled-components";
// Components
import Login from "./Login";
import Register from "./Register";

const Signin = () => {
  return (
    <Wrapper>
      <Login />
      <Register />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
`;

export default Signin;
