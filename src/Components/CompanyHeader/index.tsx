import React from 'react';
import * as S from './Styles';
import logo from '../../assets/img/favicon.png'; // Substitua pelo caminho correto da logo

interface HeaderInfoProps {
  establishmentName: string;
  description: string;
  address: string;
}

const HeaderInfo: React.FC<HeaderInfoProps> = ({
  establishmentName,
  description,
  address,
}) => {
  return (
    <S.HeaderContainer>
      <S.Logo src={logo} alt="Logo" />
      <S.EstablishmentName>{establishmentName}</S.EstablishmentName>
      <S.Description>{description}</S.Description>
      <S.Address>
        <S.Icon /> {address}
      </S.Address>
    </S.HeaderContainer>
  );
};

export default HeaderInfo;
