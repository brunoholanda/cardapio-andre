import * as S from './styles';
import logo from '../../../assets/img/logo.png';

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterImageSection>
        <img src={logo} alt="" />
      </S.FooterImageSection>

      <S.FooterSection>
        <S.Title>Segmentos</S.Title>
        <S.LinksList>
          <S.LinkItem>Cardápio Digital para Marmitarias</S.LinkItem>
          <S.LinkItem>Cardápio Digital para Pizzarias</S.LinkItem>
          <S.LinkItem>Cardápio Digital para Restaurantes</S.LinkItem>
          <S.LinkItem>Cardápio Digital para Esfiharias</S.LinkItem>
        </S.LinksList>
      </S.FooterSection>

      <S.FooterSection>
        <S.Title>Cardapex</S.Title>
        <S.LinksList>
          <S.LinkItem>Quem Somos</S.LinkItem>
          <S.LinkItem>Parcerias</S.LinkItem>
          <S.LinkItem>Contato</S.LinkItem>
        </S.LinksList>
      </S.FooterSection>

      <S.FooterSocial>
        <S.SocialIcon href="#" target="_blank">🔗 Facebook</S.SocialIcon>
        <S.SocialIcon href="#" target="_blank">🔗 Instagram</S.SocialIcon>
        <S.SocialIcon href="#" target="_blank">🔗 LinkedIn</S.SocialIcon>
      </S.FooterSocial>
    </S.FooterContainer>
  );
};

export default Footer;
