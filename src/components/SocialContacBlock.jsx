import snapChatIcon from '../assets/socials/snapchat-big.svg';
import facebookIcon from '../assets/socials/facebook-big.svg';
import xIcon from '../assets/socials/x-big.svg';

const socialListIcons = [
  {
    id: 1,
    url: 'www.snapchat.com',
    image: snapChatIcon,
    alt: 'snachat icon',
  },
  {
    id: 2,
    url: 'www.facebook.com',
    image: facebookIcon,
    alt: 'facebook icon',
  },
  {
    id: 3,
    url: 'www.x.com',
    image: xIcon,
    alt: 'x icon',
  },
];

function SocialContacBlock() {
  return (
    <div
      style={{
        padding: '2rem',
        backgroundColor: 'rgba(250, 250, 250, 1)',
      }}>
        <h5 style={{fontSize: '1.2rem', fontWeight: '500', marginBottom: '2rem', textAlign: 'center'}}>Follow us:</h5>
      <ul style={{ display: 'flex', gap: '3rem' }}>
        {socialListIcons.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.url}>
                <img src={item.image} alt={item.alt} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SocialContacBlock;
