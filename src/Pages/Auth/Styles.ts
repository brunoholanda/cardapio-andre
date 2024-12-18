import styled from 'styled-components';
import bgLeftTop from '../../assets/img/bg-left-top.png';
import bgRightMidle from '../../assets/img/bg-right-midle.png';
import bgLeftBottom from '../../assets/img/bg-left-bottom.png';

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f7f7f7;
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

export const AuthForm = styled.form`
  background: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;
  margin: auto;
  z-index: 1; /* Conteúdo na frente das imagens */
  position: relative; /* Garante que o z-index funcione */

  h1 {
    color: var(--cinza-texto);
    margin-bottom: 2rem;
    text-align: center;
    font-size: 24px;
  }
`;


export const InputContainer = styled.div`
  margin-bottom: 2rem;

  label {
    display: block;
    color: var(--cinza-texto);
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;

    &::placeholder {
      color: #aaa;
    }
  }
`;

export const ForgotPassword = styled.div`
  text-align: center;
  color: var(--azul);
  margin-top: 3rem;
  margin-bottom: 1rem;
  cursor: pointer;

  a {
    text-decoration: none;
  }
`;

export const RegisterPrompt = styled.div`
  text-align: center;
  margin-top: 20px;
  background-color: var(--cor-de-fundo);
  padding: 1rem;
  border-radius: 8px;

  a {
    color: var(--azul);
    cursor: pointer;
    text-decoration: none;
  }
`;

export const Error = styled.div`
  color: red; 
  margin-top: 8px;
  font-size: 14px;
  text-align: center;
`;

export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;