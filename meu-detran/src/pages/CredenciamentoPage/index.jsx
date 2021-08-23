import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import CabecalhoPage from '../../components/CabecalhoPage';

export default function CredenciamentoPage() {
    return (
        <>
            <Helmet>
                <title>MEU DETRAN | Serviços para regularização de credenciamento</title>
            </Helmet>
            <Container as="section" fluid className="px-5 py-3">
                <CabecalhoPage titulo="Credenciamento" texto="Área disponível para regularização de Credenciamento.">
                    <i className="far fa-clipboard"></i>
                </CabecalhoPage>
            </Container>
        </>
    )
}