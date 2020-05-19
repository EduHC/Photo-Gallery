import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-template-rows: 10vh 90vh;
  grid-template-areas: "header header"
                       "aside content"
                       "aside content"; 
`;

export const Header = styled.div`
  background: #3D062B;
  grid-area: header;
  display: flex;
  justify-content: center;
  align-itens: center;
  border-bottom: 4px solid #4F123F;

  img {
    height: 100px;
    width: 250px;
  }
`;

export const Aside = styled.div`
  grid-area: aside;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  border-right: 4px solid rgba(190, 192, 206, 0.09);
  background: rgba(190, 192, 206, 0.1);

  div {
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-itens: center;
    margin-bottom: 20px;
 
    text {
      font-size: 42px;
      color: #3D062B;
      text-shadow: 3px 3px 5px #73276B;
      letter-spacing: 8px;
    }
  }
`;

export const List = styled.ul`
  padding-top: 20px;
  border-radius: 10px;
  list-style: none;
  max-height: 530px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 5px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #73276B;
    border-radius: 10px;
  }

  li {
    margin-bottom: 10px;

    Button {
      height: 3.0rem;
      width: 85%;
      background: #611C54;
      border-radius: 10px;
      padding-top: 1%;
      font: 28px 'Poiret One','Fredericka the Great', cursive;
      color: white;
      transition: 0.3s;
      margin-left: 10px;
      border-style: none;
      box-shadow: 3px 3px 3px rgba(0,0,0, 0.4);

      &:hover {
        height: 3.2rem;
        width: 90%;
        margin-left: 7px;
        background: #73276B;
        color: #E6E8F1;
      }
    }
  }
`;

export const Content = styled.div`
  grid-area: content;
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
  margin-left: 100px;
`;

export const ImgContainer = styled.div`
  width: 80%;
  height: 80%;
  border-radius: 10px;
  border-style: groove;
  border-width: 10px;
  border-color: #BEC0CE;
`;