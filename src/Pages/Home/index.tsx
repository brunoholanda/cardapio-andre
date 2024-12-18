import React from 'react';
import { Avatar, Card } from 'antd';
import * as S from './Styles';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Assumindo que você tem um contexto de autenticação

const { Meta } = Card;

const Home: React.FC = () => {
  const { authData } = useAuth(); // Obtém os dados de autenticação do usuário logado

  return (
    <S.Container>
      <Link to="/configurar-cardapio">
        <S.CardItem>
          <Meta
            avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
            title="Configurar seu cardápio"
            description="Cadastre e configure seu cardápio online, aqui você pode gerenciar e organizar seu cardápio de forma prática e eficiente."
          />
        </S.CardItem>
      </Link>
      <S.CardItem onClick={() => console.log('Dados da Empresa')}>
        <Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=10" />}
          title="Dados da Empresa"
          description="Aqui você pode atualizar os dados da sua empresa, endereço, contato, razão social e mais."
        />
      </S.CardItem>
      {authData.userType.includes('1') && (  // Condicional para exibir "Gestão de Usuários" apenas se userType for 1
        <Link to="/usuarios">
          <S.CardItem onClick={() => console.log('Gestão de Usuários')}>
            <Meta
              avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=11" />}
              title="Gestão de Usuários"
              description="Aqui você pode adicionar usuários ao sistema. Tome cuidado ao fornecer acesso aos dados da sua empresa, editar seus dados e mais."
            />
          </S.CardItem>
        </Link>
      )}
    </S.Container>
  );
};

export default Home;
