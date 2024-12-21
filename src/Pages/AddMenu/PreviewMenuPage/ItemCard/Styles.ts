import styled from 'styled-components';

export const ItemCard = styled.div`
  display: flex;
  align-items: flex-start;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  background-color: #fff;
`;

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 16px;
`;

export const ItemDetails = styled.div`
  flex: 1;

  h3 {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
  }

  p {
    margin: 8px 0;
    font-size: 14px;
  }
`;

export const Actions = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 8px;

  button {
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;

    &:nth-child(1) {
      background-color: var(--laranja-claro);
      color: white;
    }

    &:nth-child(2) {
      background-color: #d9534f;
      color: white;
    }

    &:hover {
      opacity: 0.9;
    }
  }
`;
