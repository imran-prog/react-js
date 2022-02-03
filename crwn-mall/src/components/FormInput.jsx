import React from "react";
import styled, { css } from "styled-components";

const InputForm = ({ handleChange, label, ...otherProps }) => {
  return (
    <Wrapper>
      <Input onChange={handleChange} {...otherProps} />
      {label ? (
        <Label className={`${otherProps.value.length ? "shrink" : ""}`}>
          {label}
        </Label>
      ) : null}
    </Wrapper>
  );
};

const shrinkLabel = () => css`
  top: -14px;
  font-size: 12px;
  color: black;
`;

const Label = styled.label`
  color: grey;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabel()};
  }
`;

const Input = styled.input`
  background: none;
  background-color: white;
  color: grey;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid grey;
  margin: 25px 0;
  letter-spacing: ${(props) => (props.type === "password" ? "0.2rem" : "0")};

  &:focus {
    outline: none;
  }

  &:focus ~ ${Label} {
    ${shrinkLabel()};
  }
`;

const Wrapper = styled.div`
  position: relative;
  margin: 45px 0;
`;

export default InputForm;
