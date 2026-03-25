import styled from 'styled-components';
import facebookIcon from '../assets/socials/facebook.svg'

const StyledSocialsIcon = styled.ul`
  display: flex;
  gap: 1.6rem;
`;

function SocialsIcon() {
  return (
    <StyledSocialsIcon>
      <li>
        <a href="">
          <img src={facebookIcon} alt="" />
        </a>
      </li>
    </StyledSocialsIcon>
  );
}

export default SocialsIcon;