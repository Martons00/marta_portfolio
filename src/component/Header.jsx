import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(props) {
  // Stato per il menu mobile (gestito automaticamente da React Bootstrap)
  const [expanded, setExpanded] = useState(false);

  // Funzione per chiudere il menu dopo il click su un link
  const closeMenu = () => {
    setExpanded(false);
  };

  return (
    <Navbar 
      bg="dark" 
      variant="dark" 
      expand="md" 
      expanded={expanded} 
      onToggle={setExpanded} 
      className="w-100"
    >
      <Container fluid>
        {/* Logo del sito */}
        <Navbar.Brand as={NavLink} to="/marta_portfolio" onClick={closeMenu}>
          Il Mio Sito
        </Navbar.Brand>
        
        {/* Pulsante toggle per dispositivi mobili */}
        <Navbar.Toggle 
          aria-controls="responsive-navbar-nav" 
          aria-label="Menu di navigazione"
        />
        
        {/* Contenuto collassabile della navbar */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={NavLink} 
              to="/" 
              onClick={closeMenu}
              className={({isActive}) => isActive ? "active" : ""}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/servizi" 
              onClick={closeMenu}
              className={({isActive}) => isActive ? "active" : ""}
            >
              Servizi
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/progetti" 
              onClick={closeMenu}
              className={({isActive}) => isActive ? "active" : ""}
            >
              Progetti
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/contatti" 
              onClick={closeMenu}
              className={({isActive}) => isActive ? "active" : ""}
            >
              Contatti
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
