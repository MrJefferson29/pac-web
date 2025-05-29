import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.jpg';

const StyledNavbar = styled(Navbar)`
  background-color: #121212;
  padding: 0.8rem 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Brand = styled(Navbar.Brand)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 1.25rem;
  color: #f8f9fa;
  &:hover {
    color: #f8f9fa;
  }
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const StyledNavLink = styled(Nav.Link)`
  padding: 0.5rem 1rem;
  color: #f8f9fa !important;
  font-weight: 500;
  transition: background 0.2s ease-in-out;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
  }
`;

const StyledDropdown = styled(NavDropdown)`
  .dropdown-toggle {
    color: #f8f9fa !important;
    font-weight: 500;
    padding: 0.5rem 1rem;
  }

  .dropdown-menu {
    background-color: #222;
    border: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .dropdown-item {
    color: #f8f9fa;
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;

// Reused Google Form link
const googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSdUXAAQErMC_I0iFPzwMIdg4d64Qd12uzQ2ReTfgdOHIvIjig/viewform?usp=dialog';

function Navbars() {
  return (
    <StyledNavbar expand="lg" variant="dark">
      <Container>
        <Brand href="/">
          <Logo src={logo} alt="PAC Logo" />
          PAC PROGRAM
        </Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <StyledNavLink href="/">Home</StyledNavLink>
            <StyledNavLink href="/features">Core Features</StyledNavLink>
            <StyledNavLink href="/importance">Importance & Impact</StyledNavLink>
            <StyledNavLink href="/pac-coordinators">PAC Coordinators</StyledNavLink>

            <StyledDropdown title="Apply as" id="basic-nav-dropdown">
              <NavDropdown.Item
                href={googleFormURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                PAC Coordinator
              </NavDropdown.Item>
              <NavDropdown.Item
                href={googleFormURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                PAC Volunteer
              </NavDropdown.Item>
              <NavDropdown.Item
                href={googleFormURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                PAC Sponsor
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>
            </StyledDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}

export default Navbars;
