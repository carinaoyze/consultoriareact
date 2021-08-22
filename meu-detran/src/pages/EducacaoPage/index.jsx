import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

export default function EducacaoPage() {
    return (
        <>
            <Helmet>
                <title>MEU DETRAN | Serviços de cursos e educação no trânsito</title>
            </Helmet>
            <Container as="section" fluid className="px-5 py-3">
                <header className="text-secondary mb-3">
                    <h4 className="text-uppercase fw-bold fs-4 d-flex align-items-center">
                        <div className="icone-padrao">
                            <i className="fas fa-graduation-cap"></i>
                        </div> 
                        Educação
                    </h4>
                    <p className="m-0 fs-6">
                        Serviços de cursos presenciais e EAD, e medidas para educação no trânsito.
                    </p>
                </header>
            </Container>
        </>
    )
}