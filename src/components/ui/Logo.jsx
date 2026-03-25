import styled from 'styled-components';

const StyledLogo = styled.a`
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
`;

function Logo() {
  return <StyledLogo href='/'>sneaker-store</StyledLogo>
}


export default Logo;