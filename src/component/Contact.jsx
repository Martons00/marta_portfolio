import React from 'react';
import './CSS/Contact.css';
import { Container, Row, Col, Figure } from 'react-bootstrap';
import PhotoCV from '../assets/PhotoCV.jpg';
import CV from '../assets/CV.pdf';
import Napoli from '../assets/Napoli.jpeg';
import Pavia from '../assets/Pavia.jpg';
import Behance from '../assets/behance.svg';
import LinkedIn from '../assets/linkedin.svg';
import Mail from '../assets/mail.svg';

const Contact = () => (
    <div>
        <Container fluid className="contact-root">
            <Row>
                <Col md={8} xs={12} style={{ paddingBottom: '1.5rem' }}>
                    <Row className='h-50 gx-4 contact-row'>
                        <Col className='contact-card d-flex flex-column justify-content-between'>
                            <div className="connect-top">
                                <span className="connect-subtitle">Let's work together!</span>
                                <h1 className="connect-title">Connect</h1>
                            </div>
                            <div className="connect-info">
                                <div>marta.spaccapietra@gmail.com</div>
                                <div>@marta spaccapietra</div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='h-50 gx-4 contact-row'>
                        <Col xs={2} md={2}>
                            <Row className="contact-card d-flex flex-column justify-content-center align-items-center">
                                <Row className="icon-row">
                                    <a href="https://www.behance.net/martaspaccap"style={{padding: '0'}}>
                                        <Figure className="icon-figure">
                                            <Figure.Image
                                                src={Behance}
                                                alt="Behance"
                                                className="contact-icon-image"
                                            />
                                        </Figure>
                                    </a>
                                </Row>
                                <Row className="icon-row">
                                    <a href="mailto:marta.spaccapietra@gmail.com" style={{padding: '0'}}>
                                        <Figure className="icon-figure">
                                            <Figure.Image
                                                src={Mail}
                                                alt="Mail"
                                                className="contact-icon-image"
                                            />
                                        </Figure>
                                    </a>
                                </Row>
                                <Row className="icon-row">
                                    <a href="https://linkedin.com/in/marta-spaccapietra" style={{padding: '0'}}>
                                        <Figure className="icon-figure">
                                            <Figure.Image
                                                src={LinkedIn}
                                                alt="LinkedIn"
                                                className="contact-icon-image"
                                            />
                                        </Figure>
                                    </a>
                                </Row>
                            </Row>
                        </Col>

                        <Col xs={10} md={10} >
                            <div className='contact-card'>

                                <Col className='contact-card d-flex flex-column justify-content-between'>
                                    <div className="connect-top">
                                        <span className="connect-subtitle">About!</span>
                                    </div>
                                    <div className="connect-info">
                                        <div style={{ textAlign: 'justify' }}>Passionate about design and visual communication, I have developed a solid understanding of branding and corporate communication strategies throughout my academic journey.</div>
                                    </div>
                                </Col>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={4} xs={12}>
                    <Figure style={{paddingTop: '1.5rem'}} >
                        <Figure.Image src={PhotoCV} alt="Contact" className="contact-image" />
                    </Figure>
                </Col>
            </Row>
        </Container>

        <Container className='contact-root'>
            {/* bottone resume */}
            <Row className="justify-content-center my-5">
                <Col xs="auto">
                    <a href={CV} download className="contact-resume-btn">
                        Download my Resume
                    </a>
                </Col>
            </Row>

            {/* città */}
            <Row className="justify-content-center gx-4 mb-5">
                {[
                    { img: Napoli, label: 'Naples, Italy' },
                    { img: Pavia, label: 'Pavia, Italy' },
                ].map((c, i) => (
                    <Col key={i} xs={12} lg={5} className="text-center mb-4 mb-lg-0">
                        <Figure>
                            <Figure.Image src={c.img}
                                alt={c.label}
                                className="contact-image-city" />
                            <Figure.Caption className="city-caption">
                                {c.label}
                            </Figure.Caption>
                        </Figure>
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
);

export default Contact;
