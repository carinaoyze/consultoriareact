import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import FormLogin from '../../Forms/FormLogin';

export default function ModalLogin() {
    const [status, setStatus] = useState(false);

    return (
        <>
            <Button onClick={() => setStatus(true)} variant="outline-light" className="w-100">
                Login
            </Button>

            <Modal size="lg" centered show={status} onHide={() => setStatus(false)}>
                <Modal.Header closeButton>
                    <Modal.Title as="h4">Login</Modal.Title>
                    <p>Insira os dados abaixo para acessar os serviços.</p>
                </Modal.Header>
                <Modal.Body>
                    <FormLogin />
                </Modal.Body>
            </Modal>
        </>
    )
}