import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, message } from 'antd';
import Loading from '../../Components/Loading';

import * as S from './Styles';
import Btn from '../../Components/Btn';
import { useAuth } from '../../context/AuthContext';
import api from '../../Components/api/api';

const Authentication = () => {
  const [username, setUsername] = useState<string>(''); // Estado para o email
  const [password, setPassword] = useState<string>(''); // Estado para a senha
  const [loginError, setLoginError] = useState<string>(''); // Estado para erros de login
  const [isLoading, setIsLoading] = useState<boolean>(false); // Estado de carregamento

  const navigate = useNavigate();
  const { updateAuthData } = useAuth();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginError('');
    setIsLoading(true);

    try {
      const response = await api.post('/api/v1/goorace/oauth/token', {
        email: username,
        password,
      });

      const { accessToken, refreshToken } = response.data.data;

      if (!accessToken) {
        throw new Error('Token de acesso não recebido.');
      }

      updateAuthData({
        authToken: accessToken,
        refreshToken, 
        userID: null, 
        companyID: null,
        userType: [],
        companyName: null,
        userName: null,
      });

      setUsername('');
      setPassword('');
      navigate('/home'); 
    } catch (error) {
      setIsLoading(false);
      const errorMessage =
        (error as { response?: { data?: { message?: string } } })?.response?.data?.message ||
        'Erro ao fazer login.';
      setLoginError(errorMessage);
      message.error(errorMessage); 
    }
  };

  return (
    <S.AuthContainer>
      <div className="bg-left-bottom"></div>
      {isLoading ? (
        <S.LoadingOverlay>
          <Loading />
        </S.LoadingOverlay>
      ) : (
        <S.AuthForm onSubmit={handleLogin}>
          <h1 style={{ color: 'var(--cinza-texto)' }}>
            Bem vindo ao <span style={{ color: 'var(--laranja-padrao)' }}>LOGIN</span>
          </h1>
          <S.InputContainer>
            <label htmlFor="username">E-mail</label>
            <input
              type="text"
              id="username"
              placeholder="E-mail"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </S.InputContainer>
          <S.InputContainer>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {loginError && <S.Error>{loginError}</S.Error>}
          </S.InputContainer>
          <Btn type="submit">Entrar</Btn>
          <S.ForgotPassword>
            <Button type="link">Esqueci minha senha</Button>
          </S.ForgotPassword>
        </S.AuthForm>
      )}
    </S.AuthContainer>
  );
};

export default Authentication;
