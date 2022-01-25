import React from "react";
import styled from "styled-components";

const Popup = (props) => {
  return (
    <Wrapper>
      <Content>
        <Cross onClick={props.handleClose}>x</Cross>
        {props.elementData}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  background: #00000050;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`;

const Content = styled.div`
  position: relative;
  width: 70%;
  margin: 0 auto;
  height: auto;
  max-height: 70vh;
  margin-top: calc(100vh - 85vh - 20px);
  background: transparent;
  border-radius: 4px;
  padding: 20px;
  overflow: auto;
`;

const Cross = styled.div`
  content: "x";
  cursor: pointer;
  position: fixed;
  right: calc(38% - 30px);
  top: calc(108vh - 85vh - 33px);
  background: #ededed;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  line-height: 20px;
  text-align: center;
  border: 1px solid #999;
  font-size: 20px;
`;

export default Popup;
