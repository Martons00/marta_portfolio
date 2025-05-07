import React from 'react';
import './CSS/ProgramIcons.css';
// Puoi usare le icone di react-icons o le tue SVG
import { FaFigma, FaMicrosoft, FaSlack, FaSketch, FaGithub } from 'react-icons/fa';
import { SiMiro, SiCanva } from 'react-icons/si';

import NotionLogo from '../assets/Notion-logo.svg.png';



const icons = [
  { name: 'Office', icon: <FaMicrosoft /> },
  { name: 'Sketch', icon: <FaSketch /> },
  { name: 'Figma', icon: <FaFigma /> },
  { name: 'Miro', icon: <SiMiro /> },
  { name: 'Canva', icon: <SiCanva /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'Slack', icon: <FaSlack /> },
  { name: 'Notion', icon: <img src={NotionLogo} alt="Notion" style={{ width: '25px' }} /> },

];

function ProgramIcons() {
  return (
    <div className="program-icons-container">
      <div className="program-title">
        My Skills
      </div>
      <div className="program-icons-list">
        {icons.map(({ name, icon }) => (
          <div className="program-icon-item" key={name}>
            <span className="icon">{icon}</span>
            <span className="label">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgramIcons;
