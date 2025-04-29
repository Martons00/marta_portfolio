import React, { useEffect, useState } from 'react';
import './CSS/GridLayout.css';
import ProjectCard from './Card';

const images = import.meta.glob('../assets/Copertine/*.{png,jpg,jpeg,svg,gif}', { eager: true });

function GridLayout() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const projects = [
    {
      id: '00',
      title: 'Marta Spaccapietra',
      type: 'header',
      image: '', // Usa immagine locale se c'è, altrimenti fallback esterno sotto
      fallback: 'https://cdn.pixabay.com/photo/2022/03/11/10/55/texture-7061796_1280.jpg',
      size: 'large'
    },
    {
      id: '01-about',
      title: 'Rei Co-op',
      subtitle: 'A personal portfolio to showcase my work.',
      type: 'stats',
      image: '',
      fallback: 'https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866574_1280.jpg',
      size: 'small'
    },
    ,
    {
      id: '01-large',
      title: 'Rei Co-op',
      subtitle: 'A personal portfolio to showcase my work.',
      type: 'work',
      image: '',
      fallback: 'https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866574_1280.jpg',
      size: 'large'
    },
    {
      id: '02',
      title: 'InColors',
      subtitle: 'Education, Entertainment.',
      type: 'work',
      image: '',
      fallback: 'https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg',
      size: 'medium'
    },
    {
      id: '03',
      title: 'Space Motion',
      subtitle: 'Education, Entertainment.',
      type: 'work',
      image: '',
      fallback: 'https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg',
      size: 'medium'
    }
  ];

  return (
    <div className="grid-container">
      {projects.map((project, idx) => {
        // Path coerente con la logica di Work.jsx
        const imgPath = `../assets/Copertine/${project.id}.png`;
        const imageModule = images[imgPath];
        // Scegli immagine locale se esiste, altrimenti fallback esterno
        const imageSrc = imageModule ? imageModule.default : (project.fallback || project.image);

        return (
          <div
            key={project.id}
            className={`grid-item ${project.size} ${project.type} ${animate ? 'fade-in-up' : ''}`}
            style={{ animationDelay: `${idx * 120}ms` }}
          >
            {project.type === 'header' ? (
              <div className="header-card" style={{ backgroundImage: `url(${imageSrc})` }}>
                <h1>{project.title}</h1>
              </div>
            ) : project.type === 'work' ? (
              <ProjectCard
                image={imageSrc}
                title={project.title}
                subtitle={project.subtitle}
                isLinked={true}
                buttonUrl={'work/' + project.id.replace('-large', '')}
                buttonText={"Discover"}
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
        );
      })}
    </div>
  );
}

export default GridLayout;
