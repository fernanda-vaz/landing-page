/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import { Title, Text } from "./reusable/Texts";
import LogoAirbnb from '../icons/logos_airbnb.svg'
import LogoAndroid from '../icons/logos_android-icon.svg'
import LogoApiary from '../icons/logos_apiary.svg'
import LogoApple from '../icons/logos_apple-app-store.svg'
import LogoBasecamp from '../icons/logos_basecamp.svg'
import LogoIbm from '../icons/logos_ibm.svg'
import { MyButtonTransparent } from "./reusable/Buttons";

const PartnersContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10%;
`;

const Logos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10%;
    margin: 50px;
`

const Logo = styled.img`
    width: 72px;
`

function Partners() {
  return (
    <PartnersContainer>
      <Title>Partners</Title>
      <Text>
        We focus on ergonomics and meeting you where you work.
        <br />
        It's only a keystroke away.
      </Text>

      <Logos>
        <Logo src={LogoApple} alt=""/>
        <Logo src={LogoApiary} alt=""/>
        <Logo src={LogoAndroid} alt=""/>
        <Logo src={LogoBasecamp} alt=""/>
        <Logo src={LogoAirbnb} alt=""/>
        <Logo src={LogoIbm} alt=""/>
      </Logos>

      <MyButtonTransparent>All Partners</MyButtonTransparent>
    </PartnersContainer>
  );
}

export default Partners
