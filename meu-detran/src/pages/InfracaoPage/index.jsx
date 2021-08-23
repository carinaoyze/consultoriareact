import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import CabecalhoPage from '../../components/CabecalhoPage';

export default function InfracaoPage() {
    return (
        <>
            <Helmet>
                <title>MEU DETRAN | Serviços para consultas, apresentação e pagamento de multas</title>
            </Helmet>
            <Container as="section" fluid className="px-5 py-3">
                <CabecalhoPage titulo="Infração" texto="Consultas, apresentação de recursos e pagamento de multas.">
                    <i className="fas fa-exclamation-triangle"></i>
                </CabecalhoPage>
            </Container>
        </>
    )
}