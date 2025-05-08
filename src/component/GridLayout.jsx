import React, { useEffect, useState } from 'react';
import './CSS/GridLayout.css';
import ProjectCard from './Card';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import backMOV from '../assets/backName.mp4';

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
      vid: { backMOV }, // Usa immagine locale se c'è, altrimenti fallback esterno sotto
      fallback: 'https://cdn.pixabay.com/photo/2022/03/11/10/55/texture-7061796_1280.jpg',
      size: 'large-h'
    },
    {
      id: 'outline-01',
      title: 'Welcome to my portfolio',
      subtitle: `Hello and welcome! I'm thrilled to share my creative journey with you through this portfolio. Here you'll discover a curated collection of my professional work, showcasing my skills, experience, and passion for design.
Browse through my projects to see how I approach challenges, solve problems, and deliver results that exceed expectations. Each case study provides insights into my creative process, technical abilities, and the impact of my solutions.
Beyond my work samples, you'll find information about my background, skills, and the values that drive my professional approach. I've included details about my education, career path, and areas of expertise to give you a comprehensive understanding of what I bring to the table.`
      ,
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
      case 'large': return 12;
      case 'medium': return 8;
      case 'small':
      case 'm-small': return 4;
      case 's-small': return 4;
      case 'large-h': return 12;
      default: return 4;
    }
  };

  const getColH = size => {
    switch (size) {
      case 'large': return "80vh";
      case 'large-h': return "60vh";
      case 'medium': return "100vh";
      case 'small': return "100vh";
      case 'm-small': return "100vh";
      case 's-small': return "100vh";
      default: return "500px";
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
              md={12}
              lg={getColSpan(project.size)}
              key={project.id}
              className={` ${project.type}   ${animate ? 'fade-in-up' : ''}`}
              style={{ animationDelay: `${idx * 120}ms`, height: getColH(project.size) }}
            >
              {project.type === 'header' ? (
                <div className="header-card">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="background-video"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}
                  >
                    <source src={backMOV} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
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
                <div className="stats-card" style={{textAlign: 'justify'}}>
                  <div className="stat-item">{project.title}</div>
                  <div className="stat-item">{project.subtitle}</div>
                  <div className="stat-item">{project.description}</div>
                </div>
              ) : project.type === 'jornal' ? (
                <Col style={{ height: "100%" }}>
                  <Row className="stats-card" style={{ height: "50%", margin: "5px" }}>
                    <div className="stat-item">{project.title}</div>
                    <div className="stat-item">{project.subtitle}</div>
                    <div className="stat-item">{project.description}</div>
                  </Row>
                  <Row className="stats-card" style={{ height: "50%", margin: "5px" }}>
                    <div className="stat-item">{project.title}</div>
                    <div className="stat-item">{project.subtitle}</div>
                    <div className="stat-item">{project.description}</div>
                  </Row>
                </Col>
              ) : (
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
