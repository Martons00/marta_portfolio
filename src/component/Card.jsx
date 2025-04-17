import React, { useState, useRef } from 'react';
import './CSS/ProjectCard.css';

function ProjectCard({ image, topText, label, buttonText, buttonUrl }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }
  };

  return (
    <div
      className="project-card"
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="card-content" style={{ backgroundImage: `url(${image})` }}>
        <div className="card-overlay">
          {isHovered && (
            <div className="title-group">
              <div className="top-text">{topText}</div>
              <div className="subtitle">{label || "Default Subtitle"}</div>
            </div>
          )}


          {isHovered && (
            <div
              className="hover-container"
              style={{
                position: 'absolute',
                left: `${mousePosition.x}px`,
                top: `${mousePosition.y + 40}px`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div className="hover-box">
                {label || "Work"}
              </div>
              <div className="hover-box-shadow"></div>
            </div>
          )}



          {/* Bottone bianco che appare solo in hover */}
          <a
            href={buttonUrl}
            className={`project-card-button${isHovered ? ' show' : ''}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {buttonText || "guttavelfroelbert.com"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
