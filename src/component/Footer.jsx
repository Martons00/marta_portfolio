import React from 'react';
import { NavLink } from 'react-router-dom';
import './CSS/Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-left">
          <p className="copyright">
            © {new Date().getFullYear()} Marta Spaccapietra
          </p>
        </div>
        
        <div className="footer-center">
          <nav className="footer-nav">
            <ul>
              <li>
                <NavLink to="/marta_portfolio/work">
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink to="/marta_portfolio/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/marta_portfolio/journal">
                  Journal
                </NavLink>
              </li>
              <li>
                <NavLink to="/marta_portfolio/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="footer-right">
          <div className="social-links">
            <a href="https://www.behance.net/martaspaccap" target="_blank" rel="noopener noreferrer">
              Behance
            </a>
            <a href="mailto:marta.spaccapietra@gmail.com" target="_blank" rel="noopener noreferrer">
              Mail
            </a>
            <a href="https://linkedin.com/in/marta-spaccapietra" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
