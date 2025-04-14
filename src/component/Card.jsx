import React, { useState, useRef } from 'react';
import './CSS/ProjectCard.css';

function ProjectCard({ image, topText, bottomText, label }) {
  // Stato per tracciare l'hover e le coordinate del mouse
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);
  
  // Gestisce il movimento del mouse all'interno della card
  const handleMouseMove = (e) => {
    if (cardRef.current) {
      // Calcola la posizione relativa del mouse all'interno della card
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
          <div className="top-text">{topText}</div>
          
          {/* Container per i box che seguono il puntatore */}
          {isHovered && (
            <div 
              className="hover-container"
              style={{
                position: 'absolute',
                left: `${mousePosition.x}px`,
                top: `${mousePosition.y+40}px`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              {/* Box principale con testo */}
              <div className="hover-box">
                {label || "Work"}
              </div>
              
              {/* Box grigio sottostante */}
              <div className="hover-box-shadow"></div>
            </div>
          )}
          
          <div className="bottom-text">{bottomText}</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
