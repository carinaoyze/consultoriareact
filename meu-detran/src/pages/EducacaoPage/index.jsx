import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import CabecalhoPage from '../../components/CabecalhoPage';

export default function EducacaoPage() {
    return (
        <>
            <Helmet>
                <title>MEU DETRAN | Serviços de cursos e educação no trânsito</title>
            </Helmet>
            <Container as="section" fluid className="px-5 py-3">
                <CabecalhoPage titulo="Educação" texto="Serviços de cursos presenciais e EAD, e medidas para educação no trânsito.">
                    <i className="fas fa-graduation-cap"></i>
                </CabecalhoPage>
            </Container>
        </>
    )
}