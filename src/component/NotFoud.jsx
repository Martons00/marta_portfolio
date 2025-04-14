import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const NotFound = () => {
    const navigate = useNavigate();
    const handleGoHome = () => {
        navigate('/marta_portfolio');
    };
    return (
        <Row >
            <Col>
                <h1>Where are you going?</h1>
                <button onClick={handleGoHome} style={{ width: "40%" }}>Come back to homepage</button>
            </Col>
        </Row>
    );
};

export default NotFound;