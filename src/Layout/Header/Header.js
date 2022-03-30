import React, { useState } from "react";
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap'

import css from './Header.module.css'

import { useHttpClient } from '../../Container/hooks/http'
import Spinner from '../../Container/spinner/Spinner'

const Header = () => {
    const {isLoading, error, sendRequest, clearError} = useHttpClient()
    const [modalTambah, setModalTambah] = useState(false)
    const [dataTambah, setDataTambah] = useState({
        nama: '',
        uang: 0
    })

    const tambahWalletHandler = async (event) => {
        event.preventDefault()
        try {
            await sendRequest(
                'http://localhost:5000/user/',
                'POST',
                JSON.stringify({
                    nama: dataTambah.nama,
                    uang: dataTambah.uang
                }),
                {
                    'Content-Type': 'application/json'
                }
            )
        } catch (err) {}
        setModalTambah(!modalTambah)
    }

    const buttonTambahHandler = () => {
        setModalTambah(true)
    }

    const changeInputNama = (e) => {
        let input = e.target.value
        setDataTambah.nama(input)
    }
    
    const changeInputUang = (e) => {
        let input = e.target.value
        setDataTambah.uang(input)
    }

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

            {!isLoading && 
                <Container fluid className={css.Header}>
                    <Row>
                        <Col sm={2}>
                            
                        </Col>
                        <Col sm={8} className={css.Brand}>
                            <h1>E-Wallet</h1>
                        </Col>
                        <Col sm={2}>
                            <Button variant="primary" onClick={buttonTambahHandler}>Tambah</Button>
                        </Col>
                    </Row>
                </Container>
            }

            {modalTambah && 
                <Modal>
                    <Form onSubmit={(e) => tambahWalletHandler(e)}>
                        <Modal.Header>
                            <Modal.Title>Tambah User Wallet</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group>
                                <Form.Label>Nama</Form.Label>
                                <Form.Control type="text" placeholder="Masukkan nama" onInput={changeInputNama} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Saldo Awal</Form.Label>
                                <Form.Control type="number" placeholder="Masukkan jumlah uang" onInput={changeInputUang} />
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            }
        </React.Fragment>
        
    )
}

export default Header