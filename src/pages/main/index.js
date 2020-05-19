import React from 'react';

import { Container, Header, Aside, Content, List, ImgContainer } from './styles';
import Foto1 from '../../assets/img1.jpg';
import Foto2 from '../../assets/img2.jpg';
import Foto3 from '../../assets/img3.jpg';
import Foto4 from '../../assets/img4.jpg';
import Foto5 from '../../assets/img5.jpg';
import Foto6 from '../../assets/img6.jpg';
import Foto7 from '../../assets/img7.jpg';
import Foto8 from '../../assets/img8.jpg';
import Foto9 from '../../assets/img9.jpg';
import Foto10 from '../../assets/img10.jpg';
import logo from '../../assets/logo2.svg';

const photos = [
  Foto1, 
  Foto2, 
  Foto3, 
  Foto4, 
  Foto5, 
  Foto6, 
  Foto7, 
  Foto8, 
  Foto9, 
  Foto10];

function handleButtonClick(item) {
  
}

function main() {
  return (
    <Container>
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Fredericka+the+Great|Poiret+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <Header>
        <img src={logo}/>
      </Header>
      <Aside>
        <div>
          <text>Menu</text>
        </div>
        <List>
          {photos.map(item => 
            <li key={item}>
              <button
                onClick={() => handleButtonClick(item)}
              >
                Foto {photos.indexOf(item) + 1}
              </button>
            </li>
          )}
        </List>
      </Aside>
      <Content>
        <ImgContainer>
            <img />
        </ImgContainer>
      </Content>
    </Container>
  );
}

export default main;