import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import FormCadastro from '../../Forms/FormCadastro';

export default function ModalCadastro() {
    const [status, setStatus] = useState(false);

    return (
        <>
            <Button onClick={() => setStatus(true)} variant="outline-success" className="w-100">
                Cadastre-se
            </Button>

            <Modal size="lg" centered show={status} onHide={() => setStatus(false)}>
                <Modal.Header closeButton>
                    <Modal.Title as="h4">Cadastre-se</Modal.Title>
                    <p>Faça seu cadastro para ter acesso a todos os serviços.</p>
                </Modal.Header>
                <Modal.Body>
                    <FormCadastro />
                </Modal.Body>
            </Modal>
        </>
    )
}