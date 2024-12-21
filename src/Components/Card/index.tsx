import React from 'react';
import * as S from './Styles';

interface CardProps {
  id: string;
  titulo: string;
  imagem: string;
  descricao: string;
  preco: string;
}

const Card: React.FC<CardProps> = ({  titulo, imagem, descricao, preco }) => {
  return (
    <S.CardWrapper>
      <S.CardImage src={imagem} alt={titulo} />
      <S.CardBackground>
        <S.CardTitle>{titulo}</S.CardTitle>
        <S.CardDescription>{descricao}</S.CardDescription>
        <S.CardActions>
          <S.CardPrice>{preco}</S.CardPrice>
          <S.CardButton>PEDIR</S.CardButton>
        </S.CardActions>
      </S.CardBackground>
    </S.CardWrapper>
  );
};

export default Card;
