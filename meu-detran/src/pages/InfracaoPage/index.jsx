import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

export default function InfracaoPage() {
    return (
        <>
            <Helmet>
                <title>MEU DETRAN | Serviços para consultas, apresentação e pagamento de multas</title>
            </Helmet>
            <Container as="section" fluid className="px-5 py-3">
                <header className="text-secondary mb-3">
                    <h4 className="text-uppercase fw-bold fs-4 d-flex align-items-center">
                        <div className="icone-padrao">
                            <i className="fas fa-exclamation-triangle"></i>
                        </div> 
                        Infração
                    </h4>
                    <p className="m-0 fs-6">
                        Consultas, apresentação de recursos e pagamento de multas.
                    </p>
                </header>
            </Container>
        </>
    )
}