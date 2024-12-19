import styled from 'styled-components';
import bgLeftTop from '../../assets/img/bg-left-top.png';
import bgRightMidle from '../../assets/img/bg-right-midle.png';
import bgLeftBottom from '../../assets/img/bg-left-bottom.png';

export const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;

  
  /* Imagem bg-left-top */
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 0;
    width: 250px; /* Ajuste conforme necessário */
    height: 250px;
    background: url(${bgLeftTop}) no-repeat center center;
    background-size: contain;
    z-index: 0; /* Imagem atrás do conteúdo */
  }

  /* Imagem bg-right-midle */
  &::after {
    content: '';
    position: absolute;
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
    width: 200px; /* Ajuste conforme necessário */
    height: 200px;
    background: url(${bgRightMidle}) no-repeat center center;
    background-size: contain;
    z-index: 0; /* Imagem atrás do conteúdo */
  }

  /* Imagem bg-left-bottom */
  div.bg-left-bottom {
    position: absolute;
    bottom: 40px;
    left: -20px;
    width: 200px; /* Ajuste conforme necessário */
    height: 200px;
    background: url(${bgLeftBottom}) no-repeat center center;
    background-size: contain;
    z-index: 0; /* Imagem atrás do conteúdo */
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h1 {
    font-size: 18px;
    color: white;
    margin-bottom: 10px;
  }
`;

export const Content = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  color: #333;
`;

export const Footer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  button {
    width: 48%;
  }

  button:last-child {
    width: 100%;
  }
`;
