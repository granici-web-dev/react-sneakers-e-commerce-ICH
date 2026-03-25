import styled from 'styled-components';
import { Container } from './Container';
import SocialsIcon from '../components/Socials'

const StyledFooter = styled.div`
  background-color: #232425;
  padding: 4rem 1rem;
`;

const FooterHeadline = styled.h5`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 2.4rem;
`;

const FooterPhone = styled.a`
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
`;

const FooterNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterSocials = styled.ul`
  display: flex;
  gap: 1.6rem;
  align-items: center;
`;

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <FooterHeadline>Contacts</FooterHeadline>
            <FooterNav>
              <FooterPhone href="tel:+88000000000">8 800 000 00 00</FooterPhone>
              <FooterPhone href="mailto:emailexample@email.com">emailexample@email.com</FooterPhone>
            </FooterNav>
          </div>
          <FooterSocials>
            <SocialsIcon />
          </FooterSocials>
        </div>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
