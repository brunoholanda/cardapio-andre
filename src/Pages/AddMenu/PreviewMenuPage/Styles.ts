import styled from 'styled-components';

export const PreviewContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: var(--laranja-padrao);
`;

export const ItemList = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export const ItemCard = styled.div`
  padding: 10px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;

  h3 {
    color: var(--laranja-padrao);
  }
`;
