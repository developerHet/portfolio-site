import React from 'react'
import styled from 'styled-components'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TeaCup from './TeaCup';



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
        <TeaCup />
    </Right>
    
    </Container>
  )
}

export default Contact