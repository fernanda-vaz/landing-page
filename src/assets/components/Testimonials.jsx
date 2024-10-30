import styled from "styled-components";
import { Title, Text } from "./reusable/Texts";
import Avatar1 from '../img/avatar-1.png'
import Avatar2 from '../img/avatar-2.png'
import Avatar3 from '../img/avatar-3.png'
import Avatar4 from '../img/avatar-4.png'

const TestimonialsContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10%;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 5%;
  margin: 10%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #dedede;
  max-width: 500px;
  margin: 20px;
`;

const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`;

const AvatarImg = styled.img`
    width: 70px;
    height: 70px;
`

function Testimonials() {
  return (
    <TestimonialsContainer>
      <Title>Testimonials</Title>
      <Content>
        <Card>
          <Avatar>
            <AvatarImg src={Avatar1} alt="" />
            <Text textAlign="left">Joe Bell <br />Designer</Text>
          </Avatar>
          <Text textAlign="left">
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year. Slate helps you see how
            many more days you need to work to reach your financial goal for the
            month and year.your financial goal for the month and year.
          </Text>
        </Card>
        <Card>
          <Avatar>
            <AvatarImg src={Avatar2} alt="" />
            <Text textAlign="left">Francisco Lane <br />Designer</Text>
          </Avatar>
          <Text textAlign="left">
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year. Slate helps you see how
            many more days you need to work to reach your financial goal for the
            month and year.your financial goal for the month and year.
          </Text>
        </Card>
        <Card>
          <Avatar>
            <AvatarImg src={Avatar3} alt="" />
            <Text textAlign="left">Ralph Fisher <br />Designer</Text>
          </Avatar>
          <Text textAlign="left">
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year. Slate helps you see how
            many more days you need to work to reach your financial goal for the
            month and year.your financial goal for the month and year.
          </Text>
        </Card>
        <Card>
          <Avatar>
            <AvatarImg src={Avatar4} alt="" />
            <Text textAlign="left">Jorge Murphy <br />Designer</Text>
          </Avatar>
          <Text textAlign="left">
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year. Slate helps you see how
            many more days you need to work to reach your financial goal for the
            month and year.your financial goal for the month and year.
          </Text>
        </Card>
      </Content>
    </TestimonialsContainer>
  );
}

export default Testimonials;
