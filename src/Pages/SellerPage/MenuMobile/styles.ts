import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface NavProps {
  isOpen: boolean;
}

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .4rem 1rem;
  background-color: #ff7f50;

  img {
    width: 100px;
    height: 90px;
    position: relative;
    left: 50px;
    top: 160px;
  }
`;

export const MenuIcon = styled.div`
  font-size: 35px;
  cursor: pointer;
  color: white;
`;

export const StyledNav = styled.nav<NavProps>`
  position: fixed;
  top: 0;
  left: ${(props) => (props.isOpen ? '0' : '-100%')};
  height: 100vh;
  width: 200px;
  transition: left 0.3s ease-in-out;
  padding: 15px;
  background-color: #ff7f50;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7);
  z-index: 2;
`;


export const MenuBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const MenuText = styled.div`
  font-size: 28px;
  color: white;
`;

export const CloseIcon = styled.div`
  font-size: 35px;
  cursor: pointer;
  color: white;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
`;


export const NavButton = styled(Link)`
  font-size: 16px;
  color: var(--laranja-padrao);
  text-decoration: none;
  background: white;
  padding: 10px 15px;
  border-radius: 5px;
  margin-right: 10px;
  flex: 1;
  text-align: center;

  &:hover {
    background: black;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  padding: 8px 0;
  text-decoration: none;
  color: white;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;

export const LogoImage = styled.img`
  height: 50px;
  width: auto;
  display: block;
`;

export const LoginButton = styled(Link)`
  font-size: 18px;
  color: var(--laranja-padrao);
  text-decoration: none;
  padding: 8px 16px;
  width: 100px;
  text-align: center;
  background: white;
  border-radius: 5px;
  cursor: pointer;
  margin-left: auto;

  &:hover {
    background: black;
  }
`;