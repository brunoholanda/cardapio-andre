import { useState } from 'react';
import { message } from 'antd';
import Loading from '../../Components/Loading';
import Btn from '../../Components/Btn';
import api from '../../Components/api/api';
import * as S from '../Auth/Styles';
import InputMask from 'react-input-mask';

import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

const emailDomains = [
  'gmail.com',
  'hotmail.com',
  'yahoo.com',
  'outlook.com',
  'icloud.com',
  'live.com',
  'bol.com.br',
  'uol.com.br',
  'aol.com',
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [cep, setCep] = useState('');
  const [emailSuggestions, setEmailSuggestions] = useState<string[]>([]);
  const [passwordValidation, setPasswordValidation] = useState({
    lengthValid: false,
    uppercaseValid: false,
    specialCharValid: false,
  });

  const handlePasswordChange = (value: string) => {
    setPassword(value);

    const lengthValid = value.length >= 8;
    const uppercaseValid = /[A-Z]/.test(value);
    const specialCharValid = /[^A-Za-z0-9]/.test(value);

    setPasswordValidation({
      lengthValid,
      uppercaseValid,
      specialCharValid,
    });
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\(\d{2}\) 9 \d{4}-\d{4}$/;
    return phoneRegex.test(phone);
  };

  const validateCep = (cep: string) => {
    const cepRegex = /^\d{5}-\d{3}$/;
    return cepRegex.test(cep);
  };
  const validateStep1 = () => {
    if (!name || !email || !phone || !password) {
      message.error('Preencha todos os campos obrigatórios antes de continuar.');
      return false;
    }

    if (!validatePhone(phone)) {
      message.error('Digite um telefone válido no formato (99) 9 9999-9999.');
      return false;
    }

    if (!passwordValidation.lengthValid || !passwordValidation.uppercaseValid || !passwordValidation.specialCharValid) {
      message.error('A senha não atende aos requisitos mínimos.');
      return false;
    }

    return true;
  };


  const validateStep3 = () => {
    if (!businessName || !cep) {
      message.error('Preencha todos os campos obrigatórios.');
      return false;
    }

    if (!validateCep(cep)) {
      message.error('Digite um CEP válido no formato 99999-999.');
      return false;
    }

    return true;
  };


  const handleNext = () => {
    if (currentStep === 1 && !validateStep1()) return;
    if (currentStep === 3 && !validateStep3()) return;

    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleRegister = async () => {
    setIsLoading(true);
    try {
      const response = await api.post('/api/v1/register', {
        name,
        email,
        phone,
        password,
        businessName,
        cep,
      });

      if (response.status === 201) {
        message.success('Cadastro realizado com sucesso!');
        setCurrentStep(1); // Reset para o primeiro passo
        setName('');
        setEmail('');
        setPhone('');
        setPassword('');
        setBusinessName('');
        setCep('');
        setConfirmationCode('');
      } else {
        throw new Error('Erro ao realizar o cadastro.');
      }
    } catch (error) {
      const errorMessage =
        (error as { response?: { data?: { message?: string } } })?.response?.data?.message ||
        'Erro ao realizar o cadastro.';
      message.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);

    // Detecta o texto antes de "@"
    const [localPart, domainPart] = value.split('@');

    // Exibe sugestões apenas se houver "@" e algo depois dele
    if (domainPart) {
      const filteredDomains = emailDomains
        .filter((domain) => domain.startsWith(domainPart))
        .map((domain) => `${localPart}@${domain}`);
      setEmailSuggestions(filteredDomains);
    } else {
      setEmailSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setEmail(suggestion);
    setEmailSuggestions([]); // Limpa as sugestões após selecionar
  };

  return (
    <S.AuthContainer>
      <div className="bg-left-bottom"></div>
      {isLoading ? (
        <S.LoadingOverlay>
          <Loading />
        </S.LoadingOverlay>
      ) : (
        <S.AuthForm>
          <h1 style={{ color: 'var(--cinza-texto)' }}>
            Bem vindo ao <span style={{ color: 'var(--laranja-padrao)' }}>Cadastro</span>
          </h1>
          <S.StepIndicator>
            <S.Step active={currentStep === 1}>PASSO 1</S.Step>
            <S.Step active={currentStep === 2}>PASSO 2</S.Step>
            <S.Step active={currentStep === 3}>PASSO 3</S.Step>
          </S.StepIndicator>
          {currentStep === 1 && (
            <>
              <S.StepsMessage>
                <h2>Informe seus dados para começar</h2>
                <p>
                  Digite seus dados corretamente para confirmar seu cadastro. Se o e-mail ou telefone forem inválidos, sua conta poderá ser cancelada.
                </p>
              </S.StepsMessage>
              <S.InputContainer>
                <label htmlFor="name">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Nome Completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </S.InputContainer>
              <S.InputContainer>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  required
                />
                {emailSuggestions.length > 0 && (
                  <S.SuggestionsList>
                    {emailSuggestions.map((suggestion, index) => (
                      <S.SuggestionItem
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        {suggestion}
                      </S.SuggestionItem>
                    ))}
                  </S.SuggestionsList>
                )}
              </S.InputContainer>
              <S.InputContainer>
                <label htmlFor="phone">Telefone</label>
                <InputMask
                  mask="(99) 9 9999-9999"
                  id="phone"
                  placeholder="Telefone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                >
                  {(inputProps: React.InputHTMLAttributes<HTMLInputElement>) => (
                    <input {...inputProps} type="tel" />
                  )}
                </InputMask>
              </S.InputContainer>

              <S.InputContainer>
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                  required
                />
                <div className="validate-password">
                  <p>
                    {passwordValidation.lengthValid ? (
                      <CheckOutlined style={{ color: 'green' }} />
                    ) : (
                      <CloseOutlined style={{ color: 'red' }} />
                    )}{' '}
                    A senha deve conter pelo menos 8 dígitos;
                  </p>
                  <p>
                    {passwordValidation.uppercaseValid ? (
                      <CheckOutlined style={{ color: 'green' }} />
                    ) : (
                      <CloseOutlined style={{ color: 'red' }} />
                    )}{' '}
                    Deve conter pelo menos uma letra maiúscula;
                  </p>
                  <p>
                    {passwordValidation.specialCharValid ? (
                      <CheckOutlined style={{ color: 'green' }} />
                    ) : (
                      <CloseOutlined style={{ color: 'red' }} />
                    )}{' '}
                    Deve conter pelo menos um caractere especial.
                  </p>
                </div>
              </S.InputContainer>


              <Btn onClick={handleNext}>Próximo</Btn>
            </>
          )}
          {currentStep === 2 && (
            <>
              <S.StepsMessage>
                <h2>Digite o código de confirmação</h2>
                <p>
                  Confirme o código de 6 dígitos recebido no e-mail ou SMS. Atenção: nunca clique em links enviados por SMS ou telefone.
                </p>
              </S.StepsMessage>
              <S.InputContainer>
                <label htmlFor="confirmationCode">Código de Confirmação</label>
                <input
                  type="text"
                  id="confirmationCode"
                  placeholder="Digite o código recebido"
                  value={confirmationCode}
                  onChange={(e) => setConfirmationCode(e.target.value)}
                  required
                />
              </S.InputContainer>
              <S.ButtonGroup>
                <Btn onClick={handleBack}>Voltar</Btn>
                <Btn onClick={handleNext}>Próximo</Btn>
              </S.ButtonGroup>
            </>
          )}
          {currentStep === 3 && (
            <>
              <S.StepsMessage>
                <h2>Dados do seu estabelecimento</h2>
                <p>
                  Inclua os dados do seu estabelecimento para concluir
                </p>
              </S.StepsMessage>
              <S.InputContainer>
                <label htmlFor="businessName">Nome do Estabelecimento</label>
                <input
                  type="text"
                  id="businessName"
                  placeholder="Nome do Estabelecimento"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  required
                />
              </S.InputContainer>
              <S.InputContainer>
                <label htmlFor="cep">CEP</label>
                <InputMask
                  mask="99999-999"
                  id="cep"
                  placeholder="CEP"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  required
                >
                  {(inputProps: React.InputHTMLAttributes<HTMLInputElement>) => (
                    <input {...inputProps} type="text" />
                  )}
                </InputMask>
              </S.InputContainer>
              <S.ButtonGroup>
                <Btn onClick={handleBack}>Voltar</Btn>
                <Btn onClick={handleRegister}>Concluir !</Btn>
              </S.ButtonGroup>
            </>
          )}
        </S.AuthForm>
      )}
    </S.AuthContainer>
  );
};

export default MultiStepForm;
