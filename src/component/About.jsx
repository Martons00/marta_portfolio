import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import ProgramIcons from './ProgramIcons';
import { Container, Row, Col } from 'react-bootstrap';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faStar } from '@fortawesome/free-solid-svg-icons';
import './CSS/About.css'; // Import your CSS file for styling
import ProjectCard from './Card';

const About = () => {
    return (
        <div >
            <Container className="my-5">
                <Row className="align-items-center">
                    <Col md={7} style={{ textAlign: 'left' }} >
                        <h2>Marta Spaccapietra</h2>
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
                        />
                    </Col>
                </Row>
            </Container>
            <VerticalTimeline lineColor="#444">
                {/* Education */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: '#181818', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid #181818' }}
                    date="Oct 2024"
                    iconStyle={{ background: '#ffe066', color: '#181818' }}
                    icon={<FontAwesomeIcon icon={faGraduationCap} />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Università Suor Orsola Benincasa (Naples, Italy)
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        MA, Public and Business Communication, Cum Laude
                    </h4>
                    <ul className="timeline-details">
                        <li>
                            <strong>Awards:</strong> won the “best branding strategy” award for advising a generative AI player (Logogramma), in targeting the healthcare market in their branding strategy based on value proposition/curve analysis, and reference customers’ benchmark.
                        </li>
                        <li>
                            <strong>Extracurricular:</strong> elaborated the branding strategy for a tour operator targeting customer base expansion, covering end customer profiling, planning (PED), social media, Gantt, and content creation.
                        </li>
                    </ul>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: '#222', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid #222' }}
                    date="Jun 2023"
                    iconStyle={{ background: '#2196f3', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faGraduationCap} />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Apple Developer Academy (Naples, Italy)
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Professional Certificate in App Development
                    </h4>
                    <ul className="timeline-details">
                        <li>Won "The Big Hack" Hackathon for designing the interface of a wearable medical device.</li>
                        <li>Developed app designs using Scrum/Agile methodology, including applications for color blindness support and contraceptive tracking.</li>
                    </ul>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: '#222', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid #222' }}
                    date="Feb 2022"
                    iconStyle={{ background: '#2196f3', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faGraduationCap} />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Apple Foundation Program (Naples, Italy)
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Certificate of Attendance
                    </h4>
                    <ul className="timeline-details">
                        <li>Developed an iOS app prototype focused on intrusive thoughts using cognitive ergonomics techniques.</li>
                    </ul>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: '#222', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid #222' }}
                    date="Oct 2021"
                    iconStyle={{ background: '#2196f3', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faGraduationCap} />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Università di Pavia (Pavia, Italy)
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        BA in Public and Business Communication
                    </h4>
                    <ul className="timeline-details">
                        <li>Participated in a research workshop on identity, digital reputation, and personal branding.</li>
                    </ul>
                </VerticalTimelineElement>

                {/* Work Experience */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#181818', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid #181818' }}
                    date="Sep 2024 - Ongoing"
                    iconStyle={{ background: '#16cc52', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faBriefcase} />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Municipality of Naples (Naples, Italy)
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Civil Service
                    </h4>
                    <ul className="timeline-details">
                        <li>Planned and executed cultural initiatives like events and social media campaigns.</li>
                        <li>Organized HPV vaccine awareness events targeting young women.</li>
                        <li>Promoted the cultural hub/study area in a re-purposed building.</li>
                    </ul>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#181818', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid #181818' }}
                    date="March 2024"
                    iconStyle={{ background: '#16cc52', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faBriefcase} />}
                >
                    <h3 className="vertical-timeline-element-title">
                        TED Talks - TED × Napoli (Naples, Italy)
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Event Assistant
                    </h4>
                    <ul className="timeline-details">
                        <li>Supported online promotion, event management, guest reception, and logistics organization.</li>
                    </ul>
                </VerticalTimelineElement>

                {/* Additional Information */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--info"
                    contentStyle={{ background: '#222', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid #222' }}
                    iconStyle={{ background: '#444', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faStar} />}
                >
                    <h3 className="vertical-timeline-element-title">Additional Information</h3>
                    <ul>
                        <li><strong>Languages:</strong> English (C1 Advanced Level, Cambridge CAE), Italian (Native).</li>
                        <li><strong>Computer Skills:</strong> Office Suite, ECDL Full Standard Level.</li>
                        <li><strong>Interests:</strong> Volleyball (semi-professional level 2007-2018), motorsports, art.</li>
                    </ul>
                </VerticalTimelineElement>
            </VerticalTimeline>
            <ProgramIcons />
        </div>
    );
};

export default About;
