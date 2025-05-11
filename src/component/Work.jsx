import React from 'react';
import './CSS/Work.css';
import ProjectCard from './Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const images = import.meta.glob('../assets/Copertine/*.{png,jpg,jpeg,svg,gif}', { eager: true });

const projects = [
    { id: '01', name: 'Rei Co-op', description: 'Case Study, Redesign', link: '01' },
    { id: '02', name: 'InColors', description: 'Education, Entertainment, Accesibility', link: '02' },
    { id: '03', name: 'Space Motion', description: 'Education, Kid', link: '03' },
    { id: '04', name: 'Trive', description: 'Health, Fitnetss', link: '04' },
    { id: '05', name: 'Trive ', description: 'Design Documentation', link: '05' },
];

const Work = () => {
    return (
        <div>
            <h2>My Work</h2>
            <Container >
            <Row className="gx-4 gy-4">
                {projects.map((project) => {
                    const imgPath = `../assets/Copertine/${project.id}.png`;
                    const imageModule = images[imgPath];
                    const imageSrc = imageModule ? imageModule.default : '';

                    return (
                        <Col key={project.id} xs={12} sm={6} md={6} lg={4} style={{ gap: '20px' }}>
                            <ProjectCard
                                image={imageSrc}
                                title={project.name}
                                subtitle={project.description}
                                buttonText="View Project"
                                buttonUrl={project.link}
                                isLinked={true}
                            />
                        </Col>
                    );
                })}
                </Row>
            </Container>
        </div>
    );
};

export default Work;
