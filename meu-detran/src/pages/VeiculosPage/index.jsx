import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

export default function VeiculosPage() {
    return (
        <>
            <Helmet>
                <title>MEU DETRAN | Serviços para Veículos</title>
            </Helmet>
            <Container as="section" fluid className="px-5 py-3">
                <header className="text-secondary mb-3">
                    <h4 className="text-uppercase fw-bold fs-4 d-flex align-items-center">
                        <div className="icone-padrao">
                            <i class="fas fa-car"></i>
                        </div> 
                        Veículo
                    </h4>
                    <p className="m-0 fs-6">
                        Serviços direcionados para regularização de seus veículos.
                    </p>
                </header>
            </Container>
        </>
    )
}
