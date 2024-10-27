import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Navigation = () => {
  return (
    <Navbar expand="lg" fixed="top" className="navbar-custom bg-dark">
      <Container className="d-flex justify-content-between">
        {/* Left Section: Brand */}
        <Navbar.Brand href="/">MATT MARTNICK</Navbar.Brand>

        {/* Right Section: Links */}
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link href="#art">Art</Nav.Link>
            <Nav.Link href="#design">Design</Nav.Link>
            <Nav.Link href="#interactive">Interactive</Nav.Link>

            {/* Social Media Links */}
            <a href="https://www.behance.net/mattMartnick" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faBehance} style={{ marginTop: '0.5vh', marginLeft: '1.5vw', fontSize: '2em', color: '#ebe6e2', textDecoration: 'none' }} />
            </a>
            <a href="https://www.linkedin.com/in/matthew-martnick/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} style={{ marginTop: '0.5vh', marginLeft: '1.5vw', fontSize: '2em', color: '#ebe6e2', textDecoration: 'none' }} />
            </a>
            <a href="https://www.instagram.com/doom_monsta/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} style={{ marginTop: '0.5vh', marginLeft: '1.5vw', fontSize: '2em', color: '#ebe6e2', textDecoration: 'none' }} />
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
