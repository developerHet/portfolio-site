import React from "react";
import styled from "styled-components";
import SliderF from "./SliderF";
import CurveOne from "./assets/CurveOne.svg";

const Container = styled.div`
  background: #eeeeee;
  //background-image: url(${CurveOne});
  position: relative;
  overflow: hidden;
  padding: 20px 0 60px 0px;
  @media only screen and (max-width: 480px) {
    padding: 20px 0px 60px 0px;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    padding: 20px 0px 60px 0px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    padding: 0px 0px 60px 0px;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  border-bottom: 2px solid #ccc;
  width: 13%;
`;
const Text = styled.h1`
  color: #00adb5;
  text-align: center;
  margin: 0 20px;
  text-transform: uppercase;
  font-size: 26px;
  letter-spacing: 1px;
  font-weight: 600;
`;

const Slider = styled.div`
  padding: 0 50px;
  margin-top: 70px;
  @media only screen and (max-width: 480px) {
    padding: 0 10px;
    margin-top: 20px;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    padding: 0px 10px;
    margin-top: 35px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    padding: 0px 10px;
    margin-top: 40px;
  }
`;

const Projects = () => {
  return (
    <Container>
      <Title>
        <Line />
        <Text>Projects</Text>
        <Line />
      </Title>
      <Slider>
        <SliderF />
      </Slider>
    </Container>
  );
};

export default Projects;
