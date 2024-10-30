import styled from "styled-components";
import { Text } from "./reusable/Texts";
import AdressIcon from "../icons/footer-map.svg";
import PhoneIcon from "../icons/footer-phone.svg";
import Facebook from "../icons/social-facebook.svg";
import Linkedin from "../icons/social-linkedin.svg";
import Twitter from "../icons/social-twitter.svg";

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10%;
  padding: 30px 0px;
`;

const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

const Menu = styled.div`
  display: flex;
`;

const List = styled.ul`
  color: #f9f9f9;
  font-family: "Rubik", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  margin-top: 30px;
  margin-left: 40px;
`;

const Contact = styled.div`
  display: flex;
  gap: 10px;
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 30px;
  margin: 20px 0px;
`;

function Footer() {
  return (
    <FooterContainer id="contact">
      <Content>
        <Menu>
          <FooterMenu>
            <Text>Fingertipe</Text>
            <List>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Examples</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Update</a>
              </li>
            </List>
          </FooterMenu>
          <FooterMenu>
            <Text>Resources</Text>
            <List>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Examples</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Update</a>
              </li>
            </List>
          </FooterMenu>
          <FooterMenu>
            <Text>About</Text>
            <List>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Examples</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Update</a>
              </li>
            </List>
          </FooterMenu>
        </Menu>
        <ContactContent>
          <Contact>
            <img src={AdressIcon} alt="" />
            <Text textAlign="lef" fontSize="12px">7480 Mockingbird Hill undefined </Text>
          </Contact>
          <Contact>
            <img src={PhoneIcon} alt="" />
            <Text textAlign="lef" fontSize="12px">(239) 555-0108 </Text>
          </Contact>
          <SocialMedia>
            <img src={Twitter} alt="" />
            <img src={Facebook} alt="" />
            <img src={Linkedin} alt="" />
          </SocialMedia>
        </ContactContent>
      </Content>
    </FooterContainer>
  );
}

export default Footer;
