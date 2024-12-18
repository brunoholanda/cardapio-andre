import { Outlet } from 'react-router-dom';
import * as S from './Styles';
import { HeaderSystem } from '../HeaderSystem';

export default function PageBodySystem() {
    return (
        <S.Container>
            <S.Content>
                <HeaderSystem />  {/* Adicione o header aqui */}
                <Outlet />
                <FooterDev />
            </S.Content>
        </S.Container>
    );
}

function FooterDev() {
    return (
        <S.FooterDevContainer>
            <S.FooterText>CardapiX Desenvolvimento de Software</S.FooterText>
            <S.FooterText>Copyright© CardapiX Software 2025. Todos os direitos reservados.</S.FooterText>
        </S.FooterDevContainer>
    );
}
