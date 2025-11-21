import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const StatsSection = ({ stats }) => {
    return (
        <section className="py-5 bg-light">
            <Container>
                <Row className="g-4">
                    {stats.map((stat, index) => (
                        <Col key={index} md={6} lg={3}>
                            <Card className="h-100 border-0 shadow-sm text-center py-4 hover-card">
                                <Card.Body>
                                    <div className="display-4 fw-bold text-primary mb-2">{stat.value}</div>
                                    <div className="text-muted fs-5">{stat.label}</div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default StatsSection;
