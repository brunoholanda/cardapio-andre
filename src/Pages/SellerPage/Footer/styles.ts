import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: var(--laranja-padrao);
  color: white;
  padding: 20px 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
`;

export const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
`;

export const FooterImageSection = styled.div`
  min-width: 200px;
  margin: 0;
  img {
    width: 100px;
    height: 90px;
  }
`;

export const Title = styled.h3`
  font-size: 25px;
  color: white;
  margin-bottom: 10px;
  font-weight: 400;
`;

export const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const LinkItem = styled.li`
  font-size: 14px;
  color: white;
  margin: 5px 0;
  font-weight: 400;

  &:hover {
    color: black;
    cursor: pointer;
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  gap: 10px;
`;

export const SocialIcon = styled.a`
  font-size: 14px;
  color: white;
  text-decoration: none;

  &:hover {
    color: black;
  }
`;
