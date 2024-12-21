import styled from 'styled-components';
import { EnvironmentOutlined } from '@ant-design/icons';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;

export const Logo = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 1rem;
`;

export const EstablishmentName = styled.h1`
  font-size: 1.8rem;
  color: #333;
  margin: 0.5rem 0;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0.5rem 0;
`;

export const Address = styled.p`
  font-size: 1rem;
  color: #333;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(EnvironmentOutlined)`
  font-size: 1.2rem;
  color: var(--laranja);
  margin-right: 0.5rem;
`;
