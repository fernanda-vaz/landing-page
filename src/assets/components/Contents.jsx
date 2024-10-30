/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import { Title, Text, Subtitle } from "./reusable/Texts";
import { MyButtonBlue } from "./reusable/Buttons";
import MacbookImage from "../img/MacbookPro.png";
import BoardImg from "../img/BoardsNotifications.png";

const ContentContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0px;
`;

const Cards = styled.div`
  display: flex;
  width: 90%;
  gap: 40px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 31px 0 rgba(0, 0, 0, 0.15);
  background: #f9f9f9;
  border-radius: 10px;
  padding: 40px 20px;
  gap: 50px;
`;

function Contents() {
  return (
    <ContentContainer id="about">
      <Title>Contents</Title>
      <Text>
        We focus on ergonomics and meeting you where you work.
        <br />
        It's only a keystroke away.
      </Text>

      <Cards>
        <Card>
          <Subtitle color="#313131">Work</Subtitle>
          <Text color="#313131">
            Ever wondered if you're too reliant on a client for work? Slate
            helps you identify.
          </Text>
          <MyButtonBlue>Sign Up</MyButtonBlue>
          <img src={MacbookImage} alt="" />
        </Card>

        <Card>
          <Subtitle color="#313131">Work</Subtitle>
          <Text color="#313131">
            Ever wondered if you're too reliant on a client for work? Slate
            helps you identify.
          </Text>
          <MyButtonBlue>Try For Free</MyButtonBlue>
          <img src={BoardImg} alt="" />
        </Card>
      </Cards>
    </ContentContainer>
  );
}

export default Contents;
