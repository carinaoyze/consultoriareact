import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

export default function AgendamentoPage() {
    return (
        <>
            <Helmet>
                <title>MEU DETRAN | Serviços de Atendimento Presencial</title>
            </Helmet>
            <Container as="section" fluid className="px-5 py-3">
                <header className="text-secondary mb-3">
                    <h4 className="text-uppercase fw-bold fs-4 d-flex align-items-center">
                        <div className="icone-padrao">
                            <i className="far fa-calendar-check"></i>
                        </div> 
                        Agendamento
                    </h4>
                    <p className="m-0 fs-6">
                        Disponível para todos os serviços de atendimento presencial.
                    </p>
                </header>
            </Container>
        </>
    )
}