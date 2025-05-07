import React from 'react';
import './CSS/Contact.css';
import ProjectCard from './Card';
import { Container, Row, Col } from 'react-bootstrap';
import PhotoCV from '../assets/PhotoCV.jpg';
import CV from '../assets/CV.pdf';
import Napoli from '../assets/Napoli.jpeg';
import Pavia from '../assets/Pavia.jpg';
import Figure from 'react-bootstrap/Figure';


const Contact = () => {
    return (
        <div className="contact-root">
            <Container>
                <Row className="align-items-top justify-content-between">
                    <Col md={7} style={{ textAlign: 'justify' }}>
                        <h2>Let's work together!</h2>
                        <h1>Connect</h1>
                    </Col>
                    <Col md={5} className="d-flex justify-content-center">
                        <img src={PhotoCV} alt="Contact" className="contact-image" />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="align-items-top justify-content-between">
                    <Col md={3} style={{ textAlign: 'center' }}>
                        <p>Behance</p>
                        <a
                            href="https://www.behance.net/martaspaccap"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'white', textDecoration: 'underline' }}
                        >
                            Behance
                        </a>
                    </Col>
                    <Col md={3} style={{ textAlign: 'center' }}>
                        <p>Mail</p>
                        <a
                            href="mailto:marta.spaccapietra@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'white', textDecoration: 'underline' }}
                        >
                            Mail
                        </a>
                    </Col>
                    <Col md={3} style={{ textAlign: 'center' }}>
                        <p>LinkedIn</p>
                        <a
                            href="https://linkedin.com/in/marta-spaccapietra"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'white', textDecoration: 'underline' }}
                        >
                            LinkedIn
                        </a>
                    </Col>
                    <Col md={3} style={{ textAlign: 'center' }}>
                        <p>Call Me</p>
                        <a
                            href="tel:+393480707250"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'white', textDecoration: 'underline' }}
                        >
                            +39 3480707250
                        </a>
                    </Col>
                </Row>
            </Container>
            <div className="contact-resume-row">
                <a
                    href={CV}
                    download
                    className="contact-resume-btn"
                >
                    Download my Resume
                </a>
            </div>
            <Container>
                <Row className="justify-content-center">
                    <Col md={5} className="d-flex flex-column align-items-center">
                        <img src={Napoli} alt="Naples" className="contact-image-city" />
                        <p className="city-caption">Naples, Italy</p>
                    </Col>
                    <Col md={5} className="d-flex flex-column align-items-center">
                        <img src={Pavia} alt="Pavia" className="contact-image-city" />
                        <p className="city-caption">Pavia, Italy</p>
                    </Col>
                </Row>
            </Container>


        </div>
    );
};

export default Contact;
