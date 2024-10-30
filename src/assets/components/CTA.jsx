import styled from "styled-components";
import { Title } from "./reusable/Texts";
import { MyButtonBlue } from "./reusable/Buttons";
import LineChart from '../img/LineChart.png'

const CTAContainer = styled.section`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #343434;
  padding: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 20px;
`;

function CTA() {
  return (
    <CTAContainer>
      <Content>
        <Title textAlign="left">OpenType feature <br /> and Variable fonts</Title>
        <MyButtonBlue width="300px">Try For Free</MyButtonBlue>
      </Content>
      <img src={LineChart} alt="" />
    </CTAContainer>
  );
}

export default CTA;
