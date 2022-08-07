import React from "react";
import styled from "styled-components";

import { educationDetails } from "../data";
const Container = styled.div`
  padding-top: 80px;
  background: #eeeeee;
  overflow: hidden;
  @media only screen and (max-width: 480px) {
    padding: 50px 10px 0px 10px;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    padding: 60px 10px 20px 10px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    padding: 70px 10px 20px 10px;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  border-bottom: 2px solid #ccc;
  width: 15%;
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

const lightShade = "#303841";

const Wrapper = styled.div`
  background-color: #eeeeee;
  padding: 80px 15px;
  @media only screen and (max-width: 480px) {
    padding: 30px 10px 40px 10px;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    padding: 40px 10px 40px 10px;
  }
  @media only screen and (min-width: 769px) and (max-width:1024px) {
    padding: 50px 10px 80px 10px;
  }
`;

const TimelineItems = styled.div`
  max-width: 1000px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 2px;
    height: 100%;
    background-color: ${lightShade};
    left: calc(50% - 1px);
    @media only screen and (max-width: 480px) {
      left: 7px;
    }
    @media only screen and (min-width: 481px) and (max-width: 768px) {
      left: 7px;
    }
  }
`;

const Item = styled.div`
  margin-bottom: 40px;
  width: 100%;
  position: relative;
  &:last-child {
    margin-bottom: 0;
  }
  &:nth-child(odd) {
    padding-right: calc(50% + 30px);
    text-align: right;
    @media only screen and (max-width:480px) {
      padding-right: 0;
      text-align: left;
      padding-left: 37px;
    }
    @media only screen and (min-width: 481px) and (max-width:768px)  {
      padding-right: 0;
      text-align: left;
      padding-left: 37px;
    }
  }
  &:nth-child(even) {
    padding-left: calc(50% + 30px);
    @media only screen and (max-width:480px) {
      padding-left: 37px;
    }
    @media only screen and (min-width: 481px) and (max-width:768px)  {
      padding-left: 37px;
    }
  }
`;

const Dot = styled.div`
  height: 16px;
  width: 16px;
  background-color: #ff5722;
  position: absolute;
  left: calc(50% - 8px);
  border-radius: 50%;
  top: 5px;
  @media only screen and (max-width: 480px) {
    left: 0;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    left: 0;
  }
`;

const Date = styled.div`
  font-size: 18px;
  color: #ff5722;
  margin: 6px 0 15px;
  @media only screen and (max-width: 480px) {
    font-size: 17px;
    margin: 6px 0 12px;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 17px;
    margin: 6px 0 12px;
  }
`;

const Content = styled.div`
  background-color: ${lightShade};
  padding: 30px;
  border-radius: 5px;
  @media only screen and (max-width: 480px) {
    padding: 15px;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    padding: 15px;
  }
`;

const WorkTitle = styled.h3`
  font-size: 20px;
  color: #eeeeee;
  margin: 0 0 10px;
  font-weight: 500;
  @media only screen and (max-width: 480px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 18px;
  }
`;

const Desc = styled.div`
  color: #eeeeee;
  font-size: 16px;
  font-weight: 300;
  line-height: 22px;
  @media only screen and (max-width: 480px) {
    font-size: 15px;
    line-height: 20px;
  }
`;

const Work = () => {
  return (
    <Container>
      <Title>
        <Line />
        <Text>EDUCATION</Text>
        <Line />
      </Title>
      <Wrapper>
        <TimelineItems>
          {educationDetails.map((item) => {
            return (
              <Item key={item.id}>
                <Dot />
                <Date>{item.year}</Date>
                <Content>
                  <WorkTitle>
                    {item.std} <sup>{item.sup}</sup>
                  </WorkTitle>
                  <Desc>{item.place}</Desc>
                </Content>
              </Item>
            );
          })}
        </TimelineItems>
      </Wrapper>
    </Container>
  );
};

export default Work;
