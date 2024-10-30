import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
    return (
        <div className="page-container" style={{ margin: '40px 0' }}>
            <Container>
                <Row className="hero-section">
                    <Col md={12} className="text-center">
                        <h1 className="hero-title">About Culinary Critics</h1>
                        <p className="hero-subtitle">Connecting Food Lovers With Great Restaurants Since 2024</p>
                    </Col>
                </Row>

                <Row className="content-section dark">
                    <Col md={12} className="text-center">
                        <h2 className="section-title">Our Mission</h2>
                        <p className="section-text">
                            At Culinary Critics, we believe every meal tells a story. Our platform empowers food enthusiasts
                            to share their dining experiences and helps others discover exceptional restaurants in their area.
                        </p>
                    </Col>
                </Row>

                <Row className="content-section justify-content-center">
                    <Col md={4}>
                        <Card className="feature-card text-center" style={{ borderColor: '#CC5500', borderWidth: '2px' }}>
                            <Card.Body>
                                <Card.Title>Honest Reviews</Card.Title>
                                <Card.Text>
                                    Real reviews from real food lovers. Our community shares authentic dining experiences
                                    to help you make informed choices.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;
