import { Link } from 'react-router-dom';
import {
  Section,
  Title,
  Subtitle,
  Button,
  FeaturesList,
  FeatureItem,
  TestimonialCard,
} from './styles';

function Content() {
  return (
    <main>
      {/* Seção de Introdução */}
      <Section>
        <Title>Venda Seu Cardápio Online</Title>
        <Subtitle>
          Transforme seu negócio e permita que seus clientes acessem seu cardápio através de um QR Code personalizado.
        </Subtitle>
        <Link to='./cadastro'>
          <Button>Comece Agora</Button>
        </Link>
      </Section>

      {/* Seção de Recursos */}
      <Section>
        <Title>Recursos Incríveis</Title>
        <FeaturesList>
          <FeatureItem>📱 Compatível com dispositivos móveis</FeatureItem>
          <FeatureItem>🔒 Segurança e privacidade</FeatureItem>
          <FeatureItem>📊 Relatórios de vendas detalhados</FeatureItem>
          <FeatureItem>⚡ Acesso rápido e fácil</FeatureItem>
        </FeaturesList>
      </Section>

      {/* Seção de Depoimentos */}
      <Section>
        <Title>O Que Nossos Clientes Dizem</Title>
        <TestimonialCard>
          <p>"Esse sistema transformou nosso negócio! Fácil de usar e muito eficiente."</p>
          <strong>— Cliente Satisfeito</strong>
        </TestimonialCard>
      </Section>

      {/* Seção de CTA */}
      <Section>
        <Title>Pronto para Começar?</Title>
        <Button href="#cadastro">Cadastre-se Agora</Button>
      </Section>
    </main>
  );
}

export default Content;
