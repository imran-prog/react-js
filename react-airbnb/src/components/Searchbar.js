import React from "react";
import styled from "styled-components";

const Searchbar = () => {
  return (
    <Wrapper>
      <input placeholder="Where you are going?" type="search" />
      <button>
        <span className="material-icons">search</span>
      </button>
    </Wrapper>
  ); 
};

const Wrapper = styled.div`
  background: transparent;
  height: 40px;
  width: 100%;
  display: flex;

  input {
    width: 100%;
    border-radius: 20px;
  }
`;

export default Searchbar;
