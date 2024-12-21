import { Modal } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background: #f9f9f9;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: var(--laranja-claro);
  margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const MenuCard = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

export const MenuInfo = styled.div`
  strong {
    font-size: 16px;
    color: #333;
  }
  p {
    font-size: 14px;
    color: #777;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;


export const QRCodeModal = styled(Modal)`
  .ant-modal-header {
    background-color: var(--laranja-padrao);
    color: var(--branco);
    border-bottom: none;
  }

  .ant-modal-title {
    color: var(--branco);
    font-size: 18px;
    text-align: center;
  }

  .ant-modal-body {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: var(--cinza-claro);
  }

  .ant-modal-footer {
    display: none; /* Remove o rodapé */
  }

  .qr-code-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--branco);
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;