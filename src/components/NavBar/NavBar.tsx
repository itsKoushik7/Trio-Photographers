import React from 'react';
import { Stack, styled } from '@mui/material';
import { NavLink, NavLinkProps } from 'react-router-dom';

// Define the type for the style function
interface LinkStyleProps {
  isActive: boolean;
}

const NavBar = () => {
  const StyledStack = styled(Stack)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    gap: '20px',
    backgroundColor: 'rgba(74, 98, 138, 1)',
    position: 'sticky',
    top: '0px',
    zIndex: '3',
    width: '100%',
  });

  // Define the link style function with the correct type for isActive
  const linkStyle = ({ isActive }: LinkStyleProps): React.CSSProperties => ({
    textDecoration: 'none',
    width: '70px',
    height: '25px',
    color: isActive ? 'white' : 'slategrey', // White color when active, slate grey when inactive
    backgroundColor: isActive ? '#4A628A' : 'whitesmoke', // Background color changes when active
    textAlign: 'center',
    borderRadius: '10px',
    marginTop: '10px',
    marginBottom: '10px',
    padding: '5px',
    fontWeight: isActive ? 'bold' : 'normal', // Bold text for active link
    transition: 'all 0.3s ease', // Smooth transition effect
  });

  return (
    <StyledStack>
      <NavLink to="/" end style={linkStyle}>
        Home
      </NavLink>
      <NavLink to="/gallery" style={linkStyle}>
        Gallery
      </NavLink>
      <NavLink to="/about" style={linkStyle}>
        About
      </NavLink>
      <NavLink to="/contact" style={linkStyle}>
        Contact
      </NavLink>
    </StyledStack>
  );
};

export default NavBar;
