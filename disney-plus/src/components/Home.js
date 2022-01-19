import React from "react";
import styled from "styled-components";
//Components
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Grid from "./Grid";

const Home = (props) => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Grid header="Recommended for You" />
      <Grid header="New To Disney" />
      <Grid header="Originals" />
      <Grid header="Trendings" />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
