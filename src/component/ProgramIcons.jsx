import React from 'react';
import './CSS/ProgramIcons.css';
// Puoi usare le icone di react-icons o le tue SVG
import { FaFigma, FaMicrosoft, FaSlack, FaSketch, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiMiro, SiCanva } from 'react-icons/si';
import { MdChat } from 'react-icons/md';

const icons = [
  { name: 'Figma', icon: <FaFigma /> },
  { name: 'Miro', icon: <SiMiro /> },
  { name: 'Office', icon: <FaMicrosoft /> },
  { name: 'Slack', icon: <FaSlack /> },
  { name: 'Sketch', icon: <FaSketch /> },
  { name: 'Canva', icon: <SiCanva /> },
  { name: 'Chat', icon: <MdChat /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'Insta', icon: <FaInstagram /> },
];

function ProgramIcons() {
  return (
    <div className="program-icons-container">
      <div className="program-title">
        My Skils
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
