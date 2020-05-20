import styled, { keyframes } from 'styled-components';
import background from '../../assets/backImage.jpg';

const circle = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
`;

const curve = keyframes`
  0%
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-template-rows: 10vh 90vh;
  grid-template-areas: "header header"
                       "aside content"
                       "aside content"; 
`;

export const Header = styled.div`
  grid-area: header;
  height: 50px;

  background: rgba(230, 232, 241, 0.3);
  
  display: flex;
  justify-content: center;
  align-itens: center;

  border-bottom-left-radius: 70%;
  border-bottom-right-radius: 70%;

  box-shadow: 3px 3px 15px rgba(79, 18, 63, 0.1);

  img {
    height: 100px;
    width: 300px;
    background: transparent;
   
    border-radius: 20%;

    box-shadow: 2px 10px 16px rgba(79, 18, 63, 0.05),
                -2px 10px 16px rgba(79, 18, 63, 0.05);
  }
`;

export const Aside = styled.div`
  grid-area: aside;
  
  height: 100%;
  
  background: rgba(230, 232, 241, 0.01);
  
  display: flex;
  flex-direction: column;
  
  padding-top: 10px;
  border-radius: 10px;

  box-shadow: 2px 15px 6px rgba(79,18,63,0.3);

  div {
    height: 40px;
    width: 100%;
  
    display: flex;
    justify-content: center;
    align-itens: center;
  
    margin-bottom: 20px;
 
    text {
      color: #3D062B;
      font-size: 48px;
      text-shadow: 3px 3px 5px #73276B;
      letter-spacing: 6px;
    }
  }
`;

export const List = styled.ul`
  max-height: 530px;
  list-style: none;
  
  padding-top: 20px;
  border-radius: 10px;
  
  overflow: auto;

  ::-webkit-scrollbar {
    width: 8px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #73276B;
    border-radius: 10px;
  }

  li {
    margin-bottom: 15px;

    Button {
      background: transparent;
      
      height: 3.0rem;
      width: 85%;
      
      font: 30px 'Poiret One','Fredericka the Great', cursive;
      color: #73276B;
  
      border-style: none;
      border-bottom: 1px solid #611C54;
      border-top: 1px solid #611C54;
      border-radius: 3px;
      margin-left: 10px;

      text-align: center;
      
      transition: 0.4s;

      &:hover {
        height: 3.2rem;
        width: 90%;
  
        background: #73276B;
        color: #E6E8F1;
  
        margin-left: 7px;
      }
    }
  }
`;

export const Content = styled.div`
  grid-area: content;
  padding: 20px;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgContainer = styled.div`
  width: 80%;
  height: 80%;
  max-height: 580px;
  max-width: 1000px;

  background-image: url(${background});
  background-position: left;

  box-shadow: 8px 8px 10px rgba(0,0,0, 0.15),
              0px -3px 10px rgba(0,0,0, 0.15);

  border-radius: 2%;

  img {
    width: 100%;
    height: 100%;

    box-shadow: 8px 8px 10px rgba(0,0,0, 0.6),
                -3px -3px 10px rgba(0,0,0, 0.6);

    transition: 0.8s;

    &:hover {
      transform: rotate(-6deg);
    }
  }
`;

export const Circle = styled.ul`
  height: 50px;
  width: 50px;

  list-style: none;
  border-radius: 50%;
 
  background: black;
  background: radial-gradient(circle at 20px 14px, transparent, #73276B);

  display: block;
  position: absolute;
  bottom: -50px;
`;