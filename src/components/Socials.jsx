import styled from 'styled-components';
import facebookIcon from '../assets/socials/facebook.svg';
import twitterIcon from '../assets/socials/twitter.svg';
import instagramIcon from '../assets/socials/instagram.svg';

const socialsList = [
  {
    id: 1,
    url: 'www.facebook.com',
    image: facebookIcon,
    alt: 'facebook logo',
  },
  {
    id: 2,
    url: 'www.twitter.com',
    image: twitterIcon,
    alt: 'twitter logo',
  },
  {
    id: 3,
    url: 'www.instagram.com',
    image: instagramIcon,
    alt: 'instagram logo',
  },
];

const StyledSocialsIcon = styled.ul`
  display: flex;
  gap: 1.6rem;
`;

function SocialsIcon() {
  return (
    <StyledSocialsIcon>
      {socialsList.map((icon) => {
        return (
          <li key={icon.id}>
            <a href={icon.url}>
              <img src={icon.image} alt={icon.alt} />
            </a>
          </li>
        );
      })}
    </StyledSocialsIcon>
  );
}

export default SocialsIcon;