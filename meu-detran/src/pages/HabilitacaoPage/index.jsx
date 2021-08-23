import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import CabecalhoPage from '../../components/CabecalhoPage';

export default function HabilitacaoPage() {
    return (
        <>
            <Helmet>
                <title>MEU DETRAN | Serviços referentes a sua CNH</title>
            </Helmet>
            <Container as="section" fluid className="px-5 py-3">
                <CabecalhoPage titulo="Habilitação" texto="Serviços on-line referentes a sua habilitação CNH.">
                    <i className="fas fa-id-card"></i>
                </CabecalhoPage>
            </Container>
        </>
    )
}