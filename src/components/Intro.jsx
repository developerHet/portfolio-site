import React from "react";
import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media only screen and (max-width: 1024px) {
    height: 50vh;
    padding: 30px;
  } 
  @media only screen and (max-width: 768px) {
    height: unset;
    padding: 45px 0;
  } 
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;
 
`;

const Left = styled.div`
  flex: 1;
  @media only screen and (max-width: 992px) {
    display: none;
  }
`;





const Right = styled.div`
  flex: 1;
  color: #eeeeee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Outer = styled.div`
  background: #b4b4b4;
  opacity: 0.9;
  width: 700px;
  padding: 10px;
  border-radius: 7px 7px 0px 0px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media only screen and (max-width: 480px) {
    width: 330px;
    height: 15px;
    padding: 5px;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 430px;
    height: 18px;
    padding: 10px;
  }
`;

const Dot = styled.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #f9f9f9;
  border-radius: 50%;
  margin: 0 4px 0 0;
  background: ${(props) => props.color === "red" && "#FF6057"};
  background: ${(props) => props.color === "amber" && "#FFBD2E"};
  background: ${(props) => props.color === "green" && "#27C93F"};
  border: ${(props) => props.color === "red" && "1px solid #E14640"};
  border: ${(props) => props.color === "amber" && "1px solid #DFA123"};
  border: ${(props) => props.color === "green" && "1px solid #1DAD2B"};
  @media only screen and (max-width: 480px) {
    width: 5px;
    height: 5px;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 7px;
    height: 7px;
  }
`;

const TextDiv = styled.div`
  background: #d9d9d9;
  padding: 10px;
  opacity: 0.9;
  width: 700px;
  height: 400px;
  border-radius: 0px 0px 7px 7px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media only screen and (max-width: 480px) {
    padding: 5px;
    width: 330px;
    height: 390px;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    padding: 10px;
    width: 430px;
    height: 390px;
  }
`;

const Heading = styled.h2`
  color: black;
  margin: 30px 15px 35px 15px;
  letter-spacing: 1px;
  @media only screen and (max-width: 480px) {
    font-size: 20px;
    margin: 20px 15px 25px 15px;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 23px;
    margin: 20px 15px 25px 15px;
  }
`;

const P = styled.div`
  color: black;
  margin: 20px 15px;
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1;
  @media only screen and (max-width: 480px) {
    font-size: 15px;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 17.5px;
  }
`;

const Intro = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <img src="/imgs/introimg.png" alt="intro"/>
        </Left>
        <Right>
          <Outer>
            <Dot color="red" />
            <Dot color="amber" />
            <Dot color="green" />
          </Outer>
          <TextDiv>
            <Heading>Hello, Nice to have you here!</Heading>
            <P>
              I’m Het Patel, a Software Developer pursuing my graduation in
              computer science and engineering with a specialization in cyber
              security. I enjoy debugging problems. Whether it's finding the
              most elegant way to write a line of code or figuring out which
              chord fits the best. I have a strong desire to learn new things,
              which increases my enthusiasm for trying anything new. I like to
              think out of the box and try to develop something which is yet not
              there in the market.I also have developed several projects.
            </P>
            <P>
              I like to communicate with people and am eager to learn from them.
              I'm happy to help out however I can wherever I can. Also, like to
              work in a team as you’ll learn quickly and effectively as the
              saying “Two heads are better than one”.
            </P>
          </TextDiv>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Intro;
