import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap'

import css from './Home.module.css'

const Home = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Button variant="primary">Test</Button>
                </Col>
                <Col>
                    <Button variant="primary">Test</Button>
                </Col>
                <Col>
                    <Button variant="primary">Test</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="primary">Test</Button>
                </Col>
                <Col>
                    <Button variant="primary">Test</Button>
                </Col>
                <Col>
                    <Button variant="primary">Test</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="primary">Test</Button>
                </Col>
                <Col>
                    <Button variant="primary">Test</Button>
                </Col>
                <Col>
                    <Button variant="primary">Test</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Home