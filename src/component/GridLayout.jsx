import React, { useEffect, useState } from 'react';
import './CSS/GridLayout.css'; 
import ProjectCard from './Card';

function GridLayout() {
  // Stato per attivare l’animazione dopo il mount
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Attiva l’animazione dopo il mount
    setAnimate(true);
  }, []);

    const projects = [
        {
          id: 1,
          title: 'Marta Spaccapietra',
          type: 'header',
          image: 'https://cdn.pixabay.com/photo/2022/03/11/10/55/texture-7061796_1280.jpg', // Sfondo astratto giallo
          size: 'large'
        },
        {
          id: 2,
          title: 'Nimbus Apparel',
          type: 'work',
          image: 'https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866574_1280.jpg', // Immagine di moda
          size: 'medium'
        },
        {
          id: 3,
          title: 'Solara Foods',
          type: 'work',
          image: 'https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg', // Immagine aziendale
          size: 'small'
        },
        {
          id: 4,
          title: '50+ brand identities',
          subtitle: '80% client retention',
          description: '10+ years',
          type: 'stats',
          size: 'small'
        },
        {
          id: 5,
          content: 'We create bold brand identities and meaningful experiences that connect with people. Our work is focused on clear, impactful design that drives engagement and growth.',
          type: 'about',
          size: 'medium'
        },
        {
          id: 6,
          title: 'Pinnacle Ventures',
          type: 'work',
          image: 'https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg', // Immagine aziendale
          size: 'small'
        }
      ];
    

      return (
        <div className="grid-container">
          {projects.map((project, idx) => (
            <div 
              key={project.id} 
              className={`grid-item ${project.size} ${project.type} ${animate ? 'fade-in-up' : ''}`}
              style={{ animationDelay: `${idx * 120}ms` }} // delay a cascata
            >
              {project.type === 'header' ? (
                <div className="header-card" style={{backgroundImage: `url(${project.image})`}}>
                  <h1>{project.title}</h1>
                </div>
              ) : project.type === 'work' ? (
                <ProjectCard 
                  image={project.image}
                  title={project.title}
                  subtitle={project.subtitle}
                  isLinked={true}
                  buttonUrl="https://guttavelfroelbert.com"
                  buttonText={"guttavelfroelbert.com"}
                />
              ) : project.type === 'stats' ? (
                <div className="stats-card">
                  <div className="stat-item">{project.title}</div>
                  <div className="stat-item">{project.subtitle}</div>
                  <div className="stat-item">{project.description}</div>
                </div>
              ) : (
                <div className="about-card">
                  <p>{project.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }
    
    export default GridLayout;
