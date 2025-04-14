import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/Header.css'; // File CSS personalizzato

function Header(props) {
  const [expanded, setExpanded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // Aggiorna lo stato in base alle dimensioni della finestra
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Chiude il menu dopo il click su un link
  const closeMenu = () => {
    setExpanded(false);
  };

  return (
    <Navbar 
      expand="md" 
      expanded={expanded} 
      onToggle={setExpanded} 
      className="w-100 custom-navbar"
    >
      <Container fluid>
        {/* Logo del sito */}
        <Navbar.Brand as={NavLink} to="/marta_portfolio" onClick={closeMenu}>
          Marta_Spaccapietra
        </Navbar.Brand>
        
        {!isDesktop && (
          <button 
            className="open-menu-btn" 
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Close Menu" : "Open Menu"}
          </button>
        )}
        
        
        {/* Menu di navigazione */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={isDesktop ? "mx-auto" : "ms-0"}>
            <Nav.Link 
              as={NavLink} 
              to="/" 
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Work
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/servizi" 
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/progetti" 
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Journal
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/contatti" 
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
