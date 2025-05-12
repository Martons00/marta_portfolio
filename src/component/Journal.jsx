import React from 'react';
import './CSS/Work.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {ProjectCard} from './Card';

const images = import.meta.glob('../assets/CopertineJ/*.{png,jpg,jpeg,svg,gif}', { eager: true });

const JournalItems = [
    { id: '01', name: 'Formula 1', description: '', link: '01' },
    { id: '02', name: 'Art', description: '', link: '02' },
];

const Journal = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h2>My Passion</h2>
            <Container >
            <Row className="gx-4 gy-4">
                {JournalItems.map((journalItem) => {
                    const imgPath = `../assets/CopertineJ/${journalItem.id}.png`;
                    const imageModule = images[imgPath];
                    const imageSrc = imageModule ? imageModule.default : '';

                    return (
                        <Col key={journalItem.id} xs={12} sm={6} md={6} lg={4} style={{ gap: '20px' }}>
                            <ProjectCard
                                image={imageSrc}
                                title={journalItem.name}
                                subtitle={journalItem.description}
                                buttonText="View my passion"
                                buttonUrl={journalItem.link}
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

export default Journal;
