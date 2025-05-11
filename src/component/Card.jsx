import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './CSS/ProjectCard.css';

function ProjectCard({ image, title, subtitle, buttonText, buttonUrl, isLinked }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }
  };
  const newLocal = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
  </svg>

    const backgroundStyle =
    subtitle === "Design Documentation" 
      ? {
          backgroundImage: `url(${image})`,
          backgroundPosition: "top left",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }
      : {
          backgroundImage: `url(${image})`};



  return (
    <div
      className="project-card"
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="card-content"
        style={backgroundStyle}
      >
        <div className="card-overlay">
          {isHovered && isLinked && (
            <div className="title-group">
              <div className="top-text">{title || ""}</div>
              <div className="subtitle">{subtitle || ""}</div>
            </div>
          )}

          {isHovered && isLinked && (
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
                {title || ""}
              </div>
              <div className="hover-box-shadow"></div>
            </div>
          )}

          {/* Bottone bianco che appare solo in hover */}
          <button
            className={`project-card-button${isHovered && isLinked ? ' show' : ''}`}
            onClick={() => navigate(buttonUrl)}
          >
            {buttonText || ""}
            {newLocal}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
