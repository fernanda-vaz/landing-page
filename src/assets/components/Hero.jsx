import styled from "styled-components";
import { Title, Text} from "./reusable/Texts";
import { MyButtonBlue, MyButtonTransparent } from "./reusable/Buttons";
import HeroBanner from '../img/home-bg.svg';

const HeroContainer = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
    margin-top: 20vh;
    padding: 20px 0px;
`
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;
    width: 100%;
`

const HeroImg = styled.img`
    width: 100%;
`

function Hero() {
  return (
    <HeroContainer id="home">
      <Title fontSize="80px">Work at the speed<br />of thought</Title>
      <Text fontSize="20px">
        Most calendars are designed for teams. Slate is designed for <br/> freelancers
        who want a simple way to plan their schedule.
      </Text>
      <ButtonContainer>
        <MyButtonBlue>Try For Free</MyButtonBlue>
        <MyButtonTransparent>Learn More</MyButtonTransparent>
      </ButtonContainer>
        <HeroImg src={HeroBanner} alt="" />
    </HeroContainer>
  );
}

export default Hero;
