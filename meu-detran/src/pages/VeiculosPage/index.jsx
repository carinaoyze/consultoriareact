import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import CabecalhoPage from '../../components/CabecalhoPage';

export default function VeiculosPage() {
    return (
        <>
            <Helmet>
                <title>MEU DETRAN | Serviços para Veículos</title>
            </Helmet>
            <Container as="section" fluid className="px-5 py-3">
                <CabecalhoPage titulo="Veículo" texto="Serviços direcionados para regularização de seus veículos.">
                    <i className="fas fa-car"></i>
                </CabecalhoPage>
            </Container>
        </>
    )
}
