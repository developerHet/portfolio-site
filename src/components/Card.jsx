import styled from "styled-components";


const neutral900 = "hsl(207, 19%, 9%)";
const neutral100 = "hsl(0, 0%, 100%)";
const accent400 = "#00adb5";

const padding = "0.8rem";

const Title = styled.h2`
  position: relative;
  width: max-content;
  &::after {
    content: "";
    position: absolute;
    height: 4px;
    width: calc(100% + ${padding});
    background: ${accent400};
    left: calc(${padding}*-1);
    bottom: -2px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 500ms;
  }
`;

const Content = styled.div`
  padding: ${padding};
  background: linear-gradient(
    hsl(0 0% 0% / 0),
    hsl(20 0% 0% / 0.3) 20%,
    hsl(0 0% 0% / 1)
  );
  transform: translateY(20%);
  transition: transform 500ms ease;
  & > *:not(${Title}) {
    opacity: 0;
    transition: opacity 500ms linear;
  }
`;

const Container = styled.div`
  color: ${neutral100};
  width: 300px;
  height: 100px;
  margin: auto;
  background-image: url(${(props) => props.img});
  padding: 10rem 0 0;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: hidden;
  transition: transform 500ms ease;
  line-height: 1.3;
  &:hover,
  &:focus-within {
    transform: scale(1.05);
  }
  &:hover ${Title}::after,&:focus-within ${Title}::after {
    transform: scaleX(1);
  }
  &:hover ${Content},&:focus-within ${Content} {
    
    transform: translateY(-35%);
    transition-delay: 500ms;
    @media only screen and (max-width: 480px) {
   transform: translateY(-45%);
  }
  }
  &:hover ${Content}>*:not(${Title}),
  &:focus-within ${Content}>*:not(${Title}) {
    opacity: 1;
    transition-delay: 1000ms;
  }
  &:focus-within ${Content} {
    transition-duration: 0ms;
  }
  @media only screen and (max-width: 480px) {
    width: 250px;
    height: 80px;
  }
`;

const Desc = styled.p`
  color: rgb(255 255 255 / 0.95);
  margin: 10px 0;
`;

const Button = styled.a`
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  color: ${neutral900};
  background-color: ${accent400};
  padding: 0.5em 1.25em;
  border-radius: 0.25rem;
  &:hover,
  &:focus {
    background-color: ${neutral100};
  }
  @media only screen and (max-width: 480px) {
    padding: 0.4em 1em;
  }
`;

const Card = ({ item }) => {
  return (
    <Container img={item.img}>
      <Content>
        <Title>{item.title}</Title>
        <Desc>{item.desc}</Desc>
        <Button href={item.link} target="_blank">Click Here</Button>
      </Content>
    </Container>
  );
};

export default Card;
