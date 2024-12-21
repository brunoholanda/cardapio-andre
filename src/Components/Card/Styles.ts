import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
`;

export const CardWrapper = styled.div`
  position: relative;
  text-align: center;
  transition: 0.3s ease;
`;

export const CardImage = styled.img`
  width: 250px;
  border-radius: 8px;
  margin-bottom: 4.5em;
`;

export const CardLink = styled.div`
  text-decoration: none;
  color: var(--preto);
`;

export const CardBackground = styled.div`
  background-color: var(--laranja-padrao);
  border-radius: 8px;
  width: 220px;
  height: 130px;
  padding: 0.5em 0;
  position: absolute;
  margin-top: -7em;
  left: 15px;

  &:hover {
    background-color: var(--laranja);
    margin-top: -9em;
    transition: 0.2s ease;
  }
`;

export const CardTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin: 0.5em 0;
`;

export const CardDescription = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin: 1em 0;
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  margin: 0.4em 0;
`;

export const CardPrice = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

export const CardButton = styled.button`
  background-color: var(--laranja-claro);
  border: 1px solid var(--laranja);
  border-radius: 8px;
  width: 80px;
  height: 23px;
  font-size: 14px;

  &:hover {
    background-color: var(--preto);
    color: var(--branco);
    border: none;
  }
`;
