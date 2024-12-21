import React from 'react';
import * as S from './Styles';

interface ItemCardProps {
  id: string;
  name: string;
  price: string;
  description?: string;
  image?: string; // Adicionado o campo para a imagem
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ id, name, price, description, image, onEdit, onDelete }) => {
  return (
    <S.ItemCard>
      {image && <S.ItemImage src={image} alt={name} />} {/* Exibe a imagem se disponível */}
      <S.ItemDetails>
        <h3>{name}</h3>
        <p>R$ {price}</p>
        {description && <p>{description}</p>}
        <S.Actions>
          <button onClick={() => onEdit(id)}>Editar</button>
          <button onClick={() => onDelete(id)}>Excluir</button>
        </S.Actions>
      </S.ItemDetails>
    </S.ItemCard>
  );
};

export default ItemCard;
