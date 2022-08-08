import React from 'react'
import styled, { keyframes } from 'styled-components'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';



const Container = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
overflow: hidden;
padding: 80px;
background: #303841;
@media only screen and (max-width:480px)  {
   flex-direction: column;
   padding: 20px;
   padding-bottom: 100px;
}

@media only screen and (min-width: 481px) and (max-width:768px) {
   flex-direction: column;
   padding: 20px;
   padding-bottom: 100px;
}

@media only screen and (min-width: 769px) and (max-width:1024px) {
    padding: 40px 80px;
}
`;

const Left = styled.div`
color: white;
display: flex;
flex-direction: column;
`;

const Message = styled.h2`
margin: 20px 0;
@media only screen and (max-width:480px) { 
    font-size: 20px;
}
`;

const SocialIcons = styled.div`
display: flex;
align-items: center;
margin: 10px 0;
`;

const Icon = styled.a`
display: flex;
justify-content: center;
align-items: center;
margin-right: 20px;
font-weight: 500;
height: 40px;
width: 40px;
border-radius: 50%;
background: #eeeeee;
color: #303841;
&:hover {
    background: #00adb5;
    color: white;
    cursor: pointer;
}
@media only screen and (max-width:480px) { 
    height: 35px;
    width: 35px;
}
`;

const UserName = styled.h3`
font-weight: 500;
font-size: 22px;
@media only screen and (max-width:480px) { 
    font-weight: 400;
    font-size: 18px;
}
`;

const Right = styled.div`
display: flex;
margin-top: 50px;
@media only screen and (max-width:480px)  { 
    margin-top: 100px;
}

@media only screen and (min-width: 481px) and (max-width:768px) { 
    margin-top: 100px;
}

`;

const Wrapper = styled.div`
position: relative;
`;

const Cup = styled.div`
position: relative;
width: 200px;
height: 170px;
background: linear-gradient(to right,#f9f9f9, #d9d9d9);
border-bottom-left-radius: 45%;
border-bottom-right-radius: 45%;
@media only screen and (max-width:480px)  { 
    height: 150px;
    width: 150px;
}
@media only screen and  (min-width: 481px) and (max-width:768px) { 
    height: 150px;
    width: 150px;
}
@media only screen and (min-width: 769px) and (max-width:1024px) {
    height: 150px;
    width: 150px;
}
`;

const Top = styled.div`
position: absolute;
top: -30px;
left:0;
width: 100%;
height: 60px;
background: linear-gradient(to right,#f9f9f9,#d9d9d9);
border-radius: 50%;
`;

const Circle = styled.div`
position: absolute;
overflow: hidden;
top: 5px;
left: 10px;
width: calc(100% - 20px);
height: 50px;
background: linear-gradient(to left,#f9f9f9,#d9d9d9);
border-radius: 50%;
box-sizing: border-box;
`;

const Tea = styled.div`
position: absolute;
top: 20px;
left:0;
width: 100%;
height: 100%;
background: linear-gradient(#c57e65,#e28462);
border-radius: 50%;
`;
const Handle = styled.div`
position: absolute;
right: -45px;
top: 20px;
width: 60px;
height: 80px;
border: 20px solid #dcdcdc;
border-left: 20px solid transparent;
border-bottom: 20px solid transparent;
border-radius: 50%;
transform: rotate(42deg);
@media only screen and (max-width:480px)  { 
    height: 50px;
    width: 60px;
    transform: rotate(55deg);
    top: 15px;
}
@media only screen and (min-width: 481px) and (max-width:768px) { 
    height: 50px;
    width: 60px;
    transform: rotate(55deg);
    top: 15px;
}
@media only screen and (min-width: 769px) and (max-width:1024px) {
    height: 50px;
    width: 60px;
    transform: rotate(55deg);
    top: 15px;
}
`;

const Plate =styled.div`
position: absolute;
bottom: -45px;
left: 53%;
transform: translateX(-50%);
width: 320px;
height: 170px;
background: linear-gradient(to right,#f9f9f9,#e7e7e7);
border-radius: 50%;
box-shadow: 0 35px 35px rgba(0,0,0,0.2);
&::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border-radius: 50%;
    background: linear-gradient(to left,#f9f9f9,#e7e7e7);
}

&::after {
    content: '';
    position: absolute;
    top: 30px;
    left: 30px;
    right: 30px;
    bottom: 30px;
    background: radial-gradient(rgba(0,0,0,0.2) 25%, transparent, transparent);
    border-radius: 50%;
}
@media only screen and (max-width:480px) { 
    height: 150px;
    width: 290px;
}
@media only screen and (min-width: 481px) and (max-width:768px) { 
    height: 150px;
    width: 290px;
}
@media only screen and (min-width: 769px) and (max-width:1024px) {
    height: 150px;
    width: 290px;
}
`;


const Vapour = styled.div`
position: relative;
display: flex;
z-index: 1;
padding: 0 20px;
bottom: -10px;

`;

const vapourAnim = keyframes`
0%{
transform: translateY(0) scaleX(1);
opacity: 0;
}
15%{
    opacity: 1;
}
50%{
transform: translateY(-150px) scaleX(5);
}
95%{
    opacity: 0;
}
100% {
    transform: translateY(-300px) scaleX(10);
}

`;

const VapourSpan = styled.div`
position: relative;
bottom: 50px;
display: block;
margin: 0 2px 50px;
min-width: 8px;
height: 120px;
background: #fff;
border-radius: 50%;
animation: ${vapourAnim} 5s linear infinite;
opacity: 0;
filter: blur(8px);
animation-delay: calc(${(props)=> props.i}*(-0.5s));
@media only screen and (max-width:480px) { 
    &:nth-last-child(-n+6) {
        visibility: hidden;
    }
   
}
@media only screen and  (min-width: 481px) and (max-width:768px) { 
    &:nth-last-child(-n+6) {
        visibility: hidden;
    }
   
}
@media only screen and (min-width: 769px) and (max-width:1024px) {
    &:nth-last-child(-n+6) {
        visibility: hidden;
    }
}
`;



const Contact = () => {
  return (
    <Container>
        <Left>
        <Message>Swing by for a cup of ☕, or leave me a note:</Message>
        <SocialIcons>
            <Icon href='mailto:hetpatel2312.hp@gmail.com'><EmailIcon /></Icon>
            <UserName>/hetpatel2312.hp@gmail.com</UserName>
        </SocialIcons>
        <SocialIcons>
            <Icon href='https://www.linkedin.com/in/hetpatel2312/'><LinkedInIcon /></Icon>
            <UserName >/in/hetpatel2312</UserName>
        </SocialIcons>
        <SocialIcons>
            <Icon  href='https://github.com/developerHet'><GitHubIcon /></Icon>
            <UserName>/developerHet</UserName>
        </SocialIcons>
    </Left>
    <Right>
        <Wrapper>
            <Plate></Plate>
            <Cup>
                <Top>
                    <Vapour>
                        <VapourSpan i="1"/>
                        <VapourSpan i="3"/>
                        <VapourSpan i="16"/>
                        <VapourSpan i="5"/>
                        <VapourSpan i="13"/>
                        <VapourSpan i="20"/>
                        <VapourSpan i="6"/>
                        <VapourSpan i="7"/>
                        <VapourSpan i="10"/>
                        <VapourSpan i="8"/>
                        <VapourSpan i="17"/>
                        <VapourSpan i="11"/>
                        <VapourSpan i="12"/>
                        <VapourSpan i="14"/>
                        {/* <VapourSpan i="2"/>
                        <VapourSpan i="9"/>
                        <VapourSpan i="18"/>
                        <VapourSpan i="15"/>
                        <VapourSpan i="4"/>
                        <VapourSpan i="19"/> */}
                        
                    </Vapour>
                    <Circle>
                        <Tea></Tea>
                    </Circle>
                </Top>
                <Handle></Handle>
            </Cup>
        </Wrapper>
    </Right>
    
    </Container>
  )
}

export default Contact