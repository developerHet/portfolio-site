import React from "react";
import ProfileBlob from "./assets/ProfileBlob";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import styled, { keyframes } from "styled-components";
import LeetcodeLogo from "./assets/LeetcodeLogo";


const Container = styled.div`
  background-color: #303841;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: #eeeeee;
  @media only screen and (max-width:480px) { 
    flex-direction: column;
    justify-content: center;
    text-align: center;
    //height: fit-content;
  }
  @media only screen and (min-width: 481px) and (max-width:768px) { 
    flex-direction: column;
    justify-content: center;
    text-align: center;
    //height: fit-content;
  }

  @media only screen and (min-width: 769px) and (max-width:1024px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 50px;
  }
  
`;


const Left = styled.div`

@media only screen and (max-width:480px)  {
   flex-direction: column;
   justify-content: center;
   text-align: center;
  }
  @media only screen and (min-width: 481px) and (max-width:768px)  {
   flex-direction: column;
   justify-content: center;
   text-align: center;
  }
  @media only screen and (min-width: 769px) and (max-width:1024px) {
    flex-direction: column;
   justify-content: center;
   text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 4.5rem;
  line-height: 1;
  font-weight: 500;
  @media only screen and (max-width:480px) { 
    font-size: 3rem;
  }
  @media only screen and (min-width: 481px) and (max-width:768px)  {
   font-size: 3.5rem;
  }
  @media only screen and (min-width: 769px) and (max-width:1024px) {
    font-size: 4rem;
  }
`;

const Name = styled.span`
  color: #00adb5;
`;

const Desc = styled.h3`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 400;
  padding-left: 3px;
  margin: 10px 0px;
`;

const typing = keyframes`
0% {
  opacity: 1;
  left: 0;
}
 100% {
  opacity: 1;
  left: 100% ;
} 
`;

const DescSpan = styled.span`
  position: relative;
  
  &::after {
    content: "";
    background: #303841;
    //left: 0;
    opacity: 0;
    position: absolute;
    height: 121%;
    width: 100%;
    border-left: 2px solid #eeeeee;
    animation: ${typing} 6s steps(28);
  }
`;

// const ButtonWrap = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: fit-content;
//   height: fit-content;
//   background: #00adb5;
//   color: #303841;
//   padding: 8px 10px;
//   border-radius: 10px;
//   box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
//   transition: 0.2s;
//   &:hover {
//     background: none;
//     color: #eeeeee;
//     border: 1px solid #00adb5;
//   }
// `;

// const CVIcon = styled.div`
// margin-right: 10px;
// `;

// const CVTitle = styled.div`
// font-weight: 700;
// `;

const Right = styled.div`
  position: relative;
`;

const floatIcon = keyframes`
0%{
  transform: translateY(0) ;
}
50% {
  transform: translateY(-1.5rem) ;
}
100% {
  transform: translateY(0) ;
}
`;

const IconOne = styled.div`
  position: absolute;
  left: 13%;
  top: 17%;
  animation: ${floatIcon} 4s ease-in-out infinite;
`;

const IconTwo = styled.div`
  position: absolute;
  left: 13%;
  bottom: 10%;
  animation: ${floatIcon} 4s ease-in-out infinite;
`;

const IconThree = styled.div`
  position: absolute;
  right: 0%;
  top: 45%;
  animation: ${floatIcon} 4s ease-in-out infinite;
`;

const IconSpan = styled.div`
  height: 60px;
  width: 60px;
  display: block;
  color: #ff5722;
  background: #eeeeee;
  border-radius: 50%;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  font-size: 100px;
  justify-content: center;
  fill: #ff5722;
`;

const ToolTip = styled.div`
  background: #eeeeee;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  top: 0px;
  position: absolute;
  color: #eeeeee;
  font-size: 20px;
  padding: 10px 18px;
  border-radius: 25px;
  opacity: 0;
  pointer-events: none;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  &::before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    background: #eeeeee;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
`;
const Icon = styled.div`
  margin: 0 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 2;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  &:hover ${IconSpan} {
    color: ${(props) => props.sColor};
  }

  &:hover ${ToolTip} {
    top: -70px;
    opacity: 1;
    pointer-events: auto;
  }

  &:hover ${IconSpan} {
    color: #eeeeee;
    fill: #eeeeee;
  }

  &:hover ${ToolTip}, &:hover ${IconSpan} {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.4);
  }

  &:hover ${ToolTip}, &:hover ${IconSpan}, &:hover ${ToolTip}::before {
    background: ${(props) => props.bColor};
  }
`;

const LinkedIn = styled(LinkedInIcon)`
  transform: scale(1.2);
`;

const Github = styled(GitHubIcon)`
  transform: scale(1.2);
`;

const Header = () => {
  return (
    <Container>
      {/* <Wrapper> */}
        <Left>
          <Title>
            Hi There, <br /> I'm <Name>Het Patel</Name>
          </Title>
          <Desc>
            <DescSpan>I am Full Stack Developer !!</DescSpan>
          </Desc>
          {/* <ButtonWrap>
            <CVIcon>
              <DescriptionIcon />
            </CVIcon>
            <CVTitle>Download CV</CVTitle>
          </ButtonWrap> */}
        </Left>
        <Right>
          <ProfileBlob />
          {/* <IconContainer> */}
          <IconOne>
            <Icon bColor="#0072b1" sColor="#EEEEEE">
              <ToolTip>LinkedIn</ToolTip>
              <IconSpan>
                <LinkedIn />
              </IconSpan>
            </Icon>
          </IconOne>
          <IconTwo>
            <Icon bColor="#171515" sColor="#EEEEEE">
              <ToolTip>GitHub</ToolTip>
              <IconSpan>
                <Github />
              </IconSpan>
            </Icon>
          </IconTwo>
          <IconThree>
            <Icon bColor="#f89f1b" sColor="#EEEEEE">
              <ToolTip>LeetCode</ToolTip>
              <IconSpan>
                <LeetcodeLogo />
              </IconSpan>
            </Icon>
          </IconThree>
          {/* </IconContainer> */}
        </Right>
      {/* </Wrapper> */}
    </Container>
  );
};

export default Header;
