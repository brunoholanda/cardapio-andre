import styled from 'styled-components';

export const Section = styled.section`
  padding: 40px 20px;
  text-align: center;
  background: #f9f9f9;
  margin: 20px 0;
`;

export const Title = styled.h1`
  font-size: 32px;
  color: #333;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 20px;
`;

export const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background: var(--laranja-padrao);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 18px;
  margin-top: 15px;

  &:hover {
    background:var(--laranja-padrao);
  }
`;

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
`;

export const FeatureItem = styled.li`
  font-size: 18px;
  margin: 10px 0;
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TestimonialCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;

  p {
    font-size: 16px;
    color: #555;
    margin-bottom: 10px;
  }

  strong {
    font-size: 14px;
    color: #333;
  }
`;
