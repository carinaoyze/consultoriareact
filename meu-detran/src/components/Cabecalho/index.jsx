import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ModalContato from '../Modals/ModalContato';
import ModalCadastro from '../Modals/ModalCadastro';
import ModalLogin from '../Modals/ModalLogin';
import UserCard from '../UserCard';
import AuthContext from '../../contexts/AuthContext';

import logoMeuDetran from '../../assets/images/detran-ms.png';
import './cabecalho.scss';

export default function Cabecalho() {
    const { autenticado } = useContext(AuthContext);

    return (
        <header className="cabecalho-site position-relative">
            <Container fluid className="py-2 px-md-4 px-xl-5">
                <Row className="align-items-center pb-2 pt-3 mb-1">
                    <Col sm="auto" className="pr-0">
                        <img src={ logoMeuDetran } alt="Meu Detran" />
                    </Col>
                    <Col className="pr-sm-0 pr-md-3">
                        <h2 className="mb-0">
                            <Link to="/">
                                Meu <span>Detran</span>
                            </Link>
                        </h2>
                        <h3 className="text-white mb-1">Serviços Digitais</h3>
                        <h4 className="mb-2">Departamento Estadual de Trânsito</h4>
                    </Col>
                    <Col sm={6} md={6} lg={5} className="ml-auto mt-3 mt-sm-0">
                        <Row className="mb-2">
                            <Col>
                                <ModalContato />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ModalCadastro />
                            </Col>
                            <Col className="pl-0 d-flex align-items-center justify-content-end">
                                { autenticado ? <UserCard /> : <ModalLogin /> }
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}
