import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import Card from '../../components/Card';
import './homepage.scss';

export default function HomePage() {
    return (
        <>
            <Helmet>
                <title>MEU DETRAN | Seja bem-vindo(a)</title>
            </Helmet>
            <div className="homepage py-4">
                <Container>
                    <Row className="my-3">
                        <Col>
                            <Card titulo="Agendamento" texto="Disponível para todos os serviços de atendimento presencial." url="/agendamento">
                                <i className="far fa-calendar-check"></i>
                            </Card>
                        </Col>
                        <Col>
                            <Card titulo="Veículos" texto="Serviços direcionados para regularização de seus veículos." url="/veiculos">
                                <i className="fas fa-car"></i>
                            </Card>
                        </Col>
                        <Col>
                            <Card titulo="Habilitação" texto="Serviços on-line referentes a sua habilitação CNH." url="/habilitacao">
                                <i className="fas fa-id-card"></i>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col>
                            <Card titulo="Infração" texto="Consultas, apresentação de recursos e pagamento de multas." url="/infracao">
                                <i className="fas fa-exclamation-triangle"></i>
                            </Card>
                        </Col>
                        <Col>
                            <Card titulo="Educação" texto="Serviços de cursos presenciais e EAD, e medidas para educação no trânsito." url="/educacao">
                                <i className="fas fa-graduation-cap"></i>
                            </Card>
                        </Col>
                        <Col>
                            <Card titulo="Credenciamento" texto="Área disponível para regularização de Credenciamento." url="/credenciamento">
                                <i className="far fa-clipboard"></i>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
