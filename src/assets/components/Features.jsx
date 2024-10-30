import styled from "styled-components";
import { Title, Text } from "./reusable/Texts";
import BannerImg from "../img/features.png";
import RestaurantIcon from "../icons/features-restaurant.svg";
import AlienIcon from "../icons/features-alien.svg";
import InfinityIcon from "../icons/features-infinity.svg";

const FeaturesContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5%;
  padding: 10px 20px;
`;
const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
`;

const ItemTitle = styled.div`
  display: flex;
  padding: 0px 10px;
`;
const Icon = styled.img`
  width: 36px;
`;

function Features() {
  return (
    <FeaturesContainer id="product">
      <Title>FEATURES</Title>
      <Text margin="50px">
        Most calendars are designed for teams. Slate is designed for <br />
        freelancers who want a simple way to plan their schedule.
      </Text>
      <Content>
        <img src={BannerImg} alt="" />
        <Items>
          <Item>
            <ItemTitle>
              <Icon src={RestaurantIcon} alt="" />
              <Text textAlign="left">A single source of truth</Text>
            </ItemTitle>
            <Text textAlign="left">
              When you add work to your Slate calendar we automatically
              calculate useful insights
            </Text>
          </Item>

          <Item>
            <ItemTitle>
              <Icon src={AlienIcon} alt="" />
              <Text textAlign="left">Intuitive interface</Text>
            </ItemTitle>
            <Text textAlign="left">
              When you add work to your Slate calendar we automatically
              calculate useful insights
            </Text>
          </Item>

          <Item>
            <ItemTitle>
              <Icon src={InfinityIcon} alt="" />
              <Text textAlign="left">Or with rules</Text>
            </ItemTitle>
            <Text textAlign="left">
              When you add work to your Slate calendar we automatically
              calculate useful insights
            </Text>
          </Item>
        </Items>
      </Content>
    </FeaturesContainer>
  );
}

export default Features;
