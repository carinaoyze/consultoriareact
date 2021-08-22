import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

export default function HabilitacaoPage() {
    return (
        <>
            <Helmet>
                <title>MEU DETRAN | Serviços referentes a sua CNH</title>
            </Helmet>
            <Container as="section" fluid className="px-5 py-3">
                <header className="text-secondary mb-3">
                    <h4 className="text-uppercase fw-bold fs-4 d-flex align-items-center">
                        <div className="icone-padrao">
                            <i className="fas fa-id-card"></i>
                        </div> 
                        Habilitação
                    </h4>
                    <p className="m-0 fs-6">
                        Serviços on-line referentes a sua habilitação CNH.
                    </p>
                </header>
            </Container>
        </>
    )
}