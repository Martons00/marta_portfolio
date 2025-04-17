import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'react-vertical-timeline-component/style.min.css';
import './CSS/About.css'; // Import your CSS file for styling
import ProjectCard from './Card';
import { useParams } from 'react-router-dom';

function Project (props){
    
  const param = useParams();
  const id = param.id;

    return (
        <div >
            <Container className="my-5">
                <Row className="align-items-center">
                    <Col md={7} style={{ textAlign: 'left' }} >
                        <h2>{id}</h2>
                        <p>
                            Passionate about design and visual communication, I have developed a solid understanding of branding and corporate communication strategies throughout my academic journey.
                        </p>
                        <p>
                            With strong teamwork skills and a proactive attitude, I am always ready to collaborate with colleagues to achieve common goals. I love exploring new ideas and innovative concepts in the field of communication, and I am constantly committed to learning new skills and adapting to industry changes.
                        </p>
                        <p>
                            I am seeking opportunities that allow me to leverage my skills and passion for design and communication, contributing to the success of companies and organizations that value innovation and creativity. I am available for interviews and networking, and I look forward to connecting with industry professionals and exploring new opportunities for growth and professional development.
                        </p>
                    </Col>
                    <Col md={5} className="mb-4 mb-md-0">
                        <ProjectCard
                            bottomText="I am a passionate and creative designer with a strong background in branding and communication. I thrive on creating impactful experiences that resonate with people."
                            image="https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866574_1280.jpg"
                            label="About Me"
                            size="medium"
                            isLinked={false}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Project;