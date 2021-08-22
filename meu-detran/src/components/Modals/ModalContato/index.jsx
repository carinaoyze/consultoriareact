import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import FormContato from '../../Forms/FormContato';

export default function ModalContato() {
    const [status, setStatus] = useState(false);

    return (
        <>
            <Button onClick={() => setStatus(true)} variant="outline-info" className="w-100 py-2">
                <i className="fas fa-headset fs-5 px-1 d-inline-block"></i> Fale conosco
            </Button>

            <Modal size="lg" centered show={status} onHide={() => setStatus(false)}>
                <Modal.Header closeButton>
                    <Modal.Title as="h4">Fale conosco</Modal.Title>
                    <p>Preencha com seus dados e registre suas Dúvidas e/ou Reclamações.</p>
                </Modal.Header>
                <Modal.Body>
                    <FormContato />
                </Modal.Body>
            </Modal>
        </>
    )
}
