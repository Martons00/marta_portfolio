import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/Header.css'; // Import the CSS file for styling

function Header(props) {
  const [expanded, setExpanded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // Rileva cambiamenti nella dimensione della finestra
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          Marta_Spaccapietra
        </Navbar.Brand>
        
        {/* Pulsante toggle per dispositivi mobili */}
        <Navbar.Toggle 
          aria-controls="responsive-navbar-nav" 
          aria-label="Menu di navigazione"
        />
        
        {/* Contenuto collassabile della navbar */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={isDesktop ? "mx-auto" : "ms-0"}>
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
