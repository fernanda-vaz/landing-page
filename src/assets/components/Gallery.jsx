/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import { Title, Text } from "./reusable/Texts";
import Img1 from '../img/card-1.png'
import Img2 from '../img/card-2.png'
import Img3 from '../img/card-3.png'
import Img4 from '../img/card-4.png'
import Img5 from '../img/card-5.png'
import Img6 from '../img/card-6.png'
import Img7 from '../img/card-7.png'

const GalleryContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 40px;
`;

const Cards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px 300px;
    gap: 50px;
`

const Img = styled.img`
    border-radius: 10px;
`

function Gallery() {
  return (
    <GalleryContainer>
      <Title>Gallery</Title>
      <Text>
        We focus on ergonomics and meeting you where you work.<br />It's only a
        keystroke away.
      </Text>

      <Cards>
        <Img src={Img1} alt=""/>
        <Img src={Img2} alt=""/>
        <Img src={Img3} alt=""/>
        <Img src={Img4} alt=""/>
        <Img src={Img5} alt=""/>
        <Img src={Img6} alt=""/>
        <Img src={Img7} alt=""/>
      </Cards>
    </GalleryContainer>
  );
}

export default Gallery;
