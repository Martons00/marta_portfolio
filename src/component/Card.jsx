import React from 'react';
import './CSS/ProjectCard.css'; // Import the CSS file for styling

function ProjectCard({ image, topText, bottomText, centerLabel }) {
  return (
    <div className="project-card">
      <div className="card-content" style={{ backgroundImage: `url(${image})` }}>
        <div className="card-overlay">
          <div className="top-text">{topText}</div>
          
          
          <div className="bottom-text">{bottomText}</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
