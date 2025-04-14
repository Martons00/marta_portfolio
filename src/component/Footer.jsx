import React from 'react';
import './CSS/Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-left">
          <p className="copyright">© {new Date().getFullYear()} Marta Spaccapietra</p>
        </div>
        
        <div className="footer-center">
          <nav className="footer-nav">
            <ul>
              <li><a href="/work">Work</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/journal">Journal</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </div>
        
        <div className="footer-right">
          <div className="social-links">
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
