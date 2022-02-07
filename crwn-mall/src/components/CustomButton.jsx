import React from "react";
import styled from "styled-components";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <Wrapper
    className={`${inverted ? "inverted" : null} ${
      isGoogleSignIn ? "is-google" : null
    }`}
    {...otherProps}
  >
    {children}
  </Wrapper>
);

const Wrapper = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  &.is-google {
    background-color: #4285f4;
    color: #ffffff;

    &:hover {
      background-color: #357ae8;
      border: none;
    }
  }

  &.inverted {
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
  }
`;

export default CustomButton;
