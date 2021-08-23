import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import CabecalhoPage from '../../components/CabecalhoPage';

export default function AgendamentoPage() {
    return (
        <>
            <Helmet>
                <title>MEU DETRAN | Serviços de Atendimento Presencial</title>
            </Helmet>
            <Container as="section" fluid className="px-5 py-3">
                <CabecalhoPage titulo="Agendamento" texto="Disponível para todos os serviços de atendimento presencial.">
                    <i className="far fa-calendar-check"></i>
                </CabecalhoPage>
            </Container>
        </>
    )
}