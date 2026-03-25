import { Container } from "../../components/Container";
import Headline from '../../components/ui/Headline';
import styled from "styled-components";
import Form from '../../components/Form';
import SocialContacBlock from '../../components/SocialContacBlock';

const FooterPhone = styled.a`
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
  display: flex;
`;

function Contact() {
  return (
    <Container>
      <Headline title={'Contacts'} style={{ marginTop: '2.5rem', marginBottom: '7.25rem' }} />
      <div
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
          gap: '1rem',
          marginBottom: '4rem',
        }}>
        <FooterPhone href="tel:+88000000000">8 800 000 00 00</FooterPhone>
        <FooterPhone href="mailto:emailexample@email.com">emailexample@email.com</FooterPhone>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '4rem', flexWrap: 'wrap'}}>
        <Form />
        <SocialContacBlock />
      </div>
    </Container>
  );
}

export default Contact;