import React, { Component } from 'react';

import { Container, 
  Header, 
  Aside, 
  Content, 
  List, 
  ImgContainer} from './styles';

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
import logo from '../../assets/logo.svg';

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

export default class Main extends Component {
  state = {
    currentPhoto: '',
  };  

  componentDidMount(){
    this.setState({ currentPhoto: Foto1 });

    // this.generateList();
  }

  handleSubmit(item) {
    this.setState({ currentPhoto: item });
  }

  /* generateList() {
    const ulSquares = document.querySelector("Circle");

    for(let i = 0; i < 6; i++) {
      const li = document.createElement("li");

      ulSquares.appendChild(li);
    }
  } */

  render() {
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
                  onClick={() => this.handleSubmit(item)}
                >
                  Foto {photos.indexOf(item) + 1}
                </button>
              </li>
            )}
          </List>
        </Aside>
        <Content>
          <ImgContainer>
            <img src={this.state.currentPhoto}/>
          </ImgContainer> 
        </Content>
      </Container>
    );
  }
  }
