import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNav = styled.nav`
  display: flex;
  gap: 4rem;
  align-items: center;
  
`;

const NavStyle = {
  white: {
    color: '#fff',
  },
  grey: {
    color: 'rgba(255, 255, 255, 0.5)',
  },
};

function Nav() {
  return (
    <StyledNav>
      <NavLink to="/" style={({ isActive }) => (isActive ? NavStyle.white : NavStyle.grey)} end>
        Home
      </NavLink>
      <NavLink to="/cart" style={({ isActive }) => (isActive ? NavStyle.white : NavStyle.grey)}>
        Cart
      </NavLink>
      <NavLink to="/contact" style={({ isActive }) => (isActive ? NavStyle.white : NavStyle.grey)}>
        Contact
      </NavLink>
    </StyledNav>
  );
}

export default Nav;
