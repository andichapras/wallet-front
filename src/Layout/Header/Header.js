import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap'

import css from './Header.module.css'

const Header = () => {
    return (
        <Container>
            <Row>
                <Col sm={2}>
                    <h1>E-Wallet</h1>
                </Col>
                <Col sm={8}></Col>
                <Col sm={2}>
                    <Button variant="primary">Tambah</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Header