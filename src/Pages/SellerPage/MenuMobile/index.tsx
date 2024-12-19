import { useSwipeable } from 'react-swipeable';
import * as S from './styles';
import { useState } from 'react';
import logo from '../../../assets/img/logo.png';

function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIsOpen(false),
    trackMouse: true,
  });

  return (
    <S.StyledHeader>
      <S.MenuIcon onClick={() => setIsOpen(!isOpen)}>&#9776;</S.MenuIcon>

      {/* Botão de Login */}
      <S.LoginButton to="/login">Entrar</S.LoginButton>

      <S.StyledNav {...handlers} isOpen={isOpen}>
        <S.MenuBar>
          <S.MenuText>CardapiX</S.MenuText>
          <S.CloseIcon onClick={() => setIsOpen(false)}>&times;</S.CloseIcon>
        </S.MenuBar>

        <S.ButtonsContainer>
          <S.NavButton to="/cadastro">Cadastrar</S.NavButton>
          <S.NavButton to="/login">Entrar</S.NavButton>
        </S.ButtonsContainer>

        <S.StyledLink to="#cadastro" onClick={() => setIsOpen(false)}>Sobre Nós</S.StyledLink>
        <S.StyledLink to="#gerar-qrcode" onClick={() => setIsOpen(false)}>Teste Grátis</S.StyledLink>
        <S.StyledLink to="#contato" onClick={() => setIsOpen(false)}>Fale Conosco</S.StyledLink>
        <img src={logo} alt="logomarca do sistema tipagem com hamburguer e o nome cardapix" />
      </S.StyledNav>
    </S.StyledHeader>
  );
}

export default MenuMobile;
