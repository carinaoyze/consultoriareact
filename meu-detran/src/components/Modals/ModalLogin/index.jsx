import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import FormLogin from '../../Forms/FormLogin';

export default function ModalLogin({ showModal, hideBtnLogin, showCloseButton }) {
    const [status, setStatus] = useState(showModal);

    return (
        <>
            { 
                !hideBtnLogin ? 
                <Button onClick={() => setStatus(true)} variant="outline-light" className="w-100">
                    Login
                </Button> 
                :
                <Button variant="link" className="text-primary" onClick={() => setStatus(true)}>
                    Clique para fazer Login
                </Button>
            }

            <Modal size="lg" centered show={status} onHide={() => setStatus(false)}>
                <Modal.Header closeButton={showCloseButton}>
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

ModalLogin.defaultProps = {
    showModal: false,
    hideBtnLogin: false,
    showCloseButton: true
}