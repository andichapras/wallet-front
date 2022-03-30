import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap'

import css from './Home.module.css'

import { useHttpClient } from '../hooks/http'
import Spinner from '../spinner/Spinner'

const Home = () => {
    const {isLoading, error, sendRequest, clearError} = useHttpClient()
    const [loadedWallet, setLoadedWallet] = useState()
    

    useEffect(() => {
        const fetchWallet = async () => {
            try {
                const responseData = await sendRequest('http://localhost:5000/user/')
                setLoadedWallet(responseData)
            } catch (err) {}
        }
        fetchWallet()
    }, [sendRequest])

    return (
        <React.Fragment>
            <Modal show={error} onHide={clearError}>
                <Modal.Header>
                    <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{error}</p>
                </Modal.Body>
            </Modal>

            {isLoading && (
                <div>
                    <Spinner />
                </div>
            )}

            {!isLoading && loadedWallet && 
                <Container fluid>
                    <Row>
                        {loadedWallet.map((w, idx) => (
                            <Col xs={12} md={4} lg={3} >
                                <Button className={css.Button}>
                                    <div>
                                        <h3>{w.nama}</h3>
                                    </div>
                                    <div>
                                        <h5>Saldo : {w.saldo}</h5>
                                    </div>
                                </Button>
                            </Col>
                        ))
                        }
                    </Row>
                </Container>
            }
        </React.Fragment>
    )
}

export default Home