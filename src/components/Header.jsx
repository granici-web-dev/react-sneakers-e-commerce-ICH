import Logo from './ui/Logo';
import styled from 'styled-components';
import { Container } from '../components/Container';
import Nav from '../components/Nav';

const StyledHeader = styled.div`
  padding: 2.6rem 1rem;
  background-color: #3b3c3d;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Header() {
  return (
    <StyledHeader>
      <Container>
        <StyledWrapper>
          <Logo />
          <Nav />
        </StyledWrapper>
      </Container>
    </StyledHeader>
  );
}

export default Header;
