import React, { useEffect, useState } from 'react';
import './CSS/GridLayout.css';
import ProjectCard from './Card';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
      id: 'outline-01',
      title: 'Welcome to my portfolio',
      subtitle: 'A personal portfolio to showcase my work.',
      type: 'stats',
      image: '',
      fallback: 'https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866574_1280.jpg',
      size: 'small'
    },
    {
      id: '03',
      title: 'Space Motion',
      subtitle: 'Education, Entertainment.',
      type: 'work',
      image: '',
      fallback: 'https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg',
      size: 'medium'
    },
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
      id: 'outline-02',
      title: 'My works',
      subtitle: 'A personal portfolio to showcase my work.',
      type: 'stats',
      image: '',
      fallback: 'https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866574_1280.jpg',
      size: 'small'
    },
    {
      id: 'outline-01',
      title: 'About Me',
      subtitle: 'A personal portfolio to showcase my work.',
      type: 'stats',
      image: '',
      fallback: 'https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866574_1280.jpg',
      size: 'm-small'
    },
    {
      id: 'jornal',
      title: 'Jornal',
      subtitle: 'A personal portfolio to showcase my work.',
      type: 'jornal',
      image: '',
      fallback: 'https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866574_1280.jpg',
      size: 's-small'
    },
    {
      id: 'jornal',
      title: 'Jornal',
      subtitle: 'A personal portfolio to showcase my work.',
      type: 'jornal',
      image: '',
      fallback: 'https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866574_1280.jpg',
      size: 's-small'
    },
  ];

  const getColSpan = size => {
    switch (size) {
      case 'large':   return 12;
      case 'medium':  return 8;
      case 'small': 
      case 'm-small': return 4;
      case 's-small': return 4;
      default:        return 4;
    }
  };

  const getColH = size => {
    switch (size) {
      case 'large':   return "300px";
      case 'medium':  return "500px";
      case 'small':  return "500px";
      case 'm-small': return "600px";
      case 's-small': return "600px";
      default:        return "500px";
    }
  };

  return (
    <Container fluid className="grid-layout">
      <Row className="g-3 gx-4 gy-4" > 
      {projects.map((project, idx) => {
        // Path coerente con la logica di Work.jsx
        const imgPath = `../assets/Copertine/${project.id}.png`;
        const imageModule = images[imgPath];
        // Scegli immagine locale se esiste, altrimenti fallback esterno
        const imageSrc = imageModule ? imageModule.default : (project.fallback || project.image);

        return (
          <Col
            xs={12}
            sm={12}
            md={getColSpan(project.size)}
            lg={getColSpan(project.size)}
            key={project.id}
            className={` ${project.type}   ${animate ? 'fade-in-up' : ''}`}
            style={{ animationDelay: `${idx * 120}ms`, height: getColH(project.size) }}
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
            ) : project.type === 'jornal' ? (
              <Col style={{height : "100%"}}> 
                <Row className="stats-card" style={{height : "50%", margin  : "5px"}}>
                  <div className="stat-item">{project.title}</div>
                  <div className="stat-item">{project.subtitle}</div>
                  <div className="stat-item">{project.description}</div>
                </Row>
                <Row className="stats-card"style={{height : "50%", margin  : "5px"}}>
                  <div className="stat-item">{project.title}</div>
                  <div className="stat-item">{project.subtitle}</div>
                  <div className="stat-item">{project.description}</div>
                </Row>
              </Col>
            )  : (
              <div className="about-card">
                <p>{project.content}</p>
              </div>
            )}
          </Col>
        );
      })}
      </Row>
    </Container>
  );
}

export default GridLayout;
