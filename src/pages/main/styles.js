import styled, { keyframes } from 'styled-components';
import texture from '../../assets/texture2.jpg';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-template-rows: 10vh 90vh;
  grid-template-areas: "header content"
                       "aside content"
                       "aside content"; 
`;

export const Header = styled.div`
  grid-area: header;
  height: 100%;

  background: rgba(230, 232, 241, 0.05);
  
  display: flex;
  justify-content: center;
  align-itens: center;

  border-right: 3px solid #E6E8F1;
  box-shadow: 3px -5px 6px rgba(79,18,63,0.3);

  img {
    width: 90%;
    height: 90%;
  }
`;

export const Aside = styled.div`
  grid-area: aside;
  
  height: 100%;
  background: rgba(230, 232, 241, 0.01);

  border-right: 3px solid #E6E8F1;
  
  display: flex;
  flex-direction: column;

  div {
    height: 40px;
    width: 100%;
  
    display: flex;
    justify-content: center;
    align-itens: center;
  
    margin-bottom: 20px;
 
    text {
      padding-top: 6px;
      color: #611C54;
      font-size: 38px;
      text-shadow: 2px 2px 3px #73276B;
      letter-spacing: 6px;
    }
  }
`;

export const List = styled.ul`
  max-height: 530px;
  list-style: none;
  
  padding-top: 5px;
  border-bottom: 1px solid #E6E8F1;

  overflow: auto;

  ::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #73276B;
    border-radius: 10px;
  }

  li {
    margin-bottom: 12px;
    }
  }
`;

export const Button = styled.button`
background: transparent;
      
height: 2.0rem;
width: 85%;

font: 20px 'Poiret One','Fredericka the Great', cursive;
color: #000;

border-style: none;
border-bottom: 1px solid #611C54;
border-top: 1px solid #611C54;
border-radius: 3px;
margin-left: 10px;

text-align: center;

transition: 0.4s;

&:hover {
  height: 2.7rem;
  width: 90%;

  background: #0AB467;
  color: #FFFFFF;

  margin-left: 7px;

  &:active {
    opacity: 0.9;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
  }
`;

export const Content = styled.div`
  grid-area: content;
  padding: 10px;
  
  display: flex;
  align-items: center;
  justify-content: center;

  background: url(${texture}) no-repeat;
  background-size: cover;
`;

export const ImgContainer = styled.div`
  width: 80%;
  height: 80%;
  max-height: 500px;
  max-width: 800px;

  display: flex;
  justify-content: center;
  align-itens: center;

  background: transparet;
  background-position: top;
  
  box-shadow: 8px 8px 10px rgba(0,0,0, 0.15),
              0px -3px 10px rgba(0,0,0, 0.15);

  border-radius: 5px;

  img {
    max-width: 100%;
    max-height: 100%;

    box-shadow: 8px 8px 10px rgba(0,0,0, 0.3),
                -3px -3px 10px rgba(0,0,0, 0.3);

    transition: 0.8s;

    &:hover {
      transform: rotate(-8deg);
    }
  }
`;