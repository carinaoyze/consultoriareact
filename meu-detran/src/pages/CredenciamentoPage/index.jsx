import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

export default function CredenciamentoPage() {
    return (
        <>
            <Helmet>
                <title>MEU DETRAN | Serviços para regularização de credenciamento</title>
            </Helmet>
            <Container as="section" fluid className="px-5 py-3">
                <header className="text-secondary mb-3">
                    <h4 className="text-uppercase fw-bold fs-4 d-flex align-items-center">
                        <div className="icone-padrao">
                            <i class="far fa-clipboard"></i>
                        </div> 
                        Credenciamento
                    </h4>
                    <p className="m-0 fs-6">
                        Área disponível para regularização de Credenciamento.
                    </p>
                </header>
            </Container>
        </>
    )
}