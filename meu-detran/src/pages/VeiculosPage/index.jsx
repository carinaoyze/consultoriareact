import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import CabecalhoPage from '../../components/CabecalhoPage';
import ConsultaDebitosForm from '../../components/Forms/Veiculos/ConsultaDebitosForm';
import GuiaFlexForm from '../../components/Forms/Veiculos/GuiaFlexForm';
import GuiaLicenciamentoMultasForm from '../../components/Forms/Veiculos/GuiaLicenciamentoMultasForm';
import AlteracaoEnderecoVeiculoForm from '../../components/Forms/Veiculos/AlteracaoEnderecoVeiculoForm';
import TabBox from '../../components/TabBox';

export default function VeiculosPage() {
    const conteudosPage = [
        { text: 'Calendário Licenciamento', component: <p>Conteúdo 1</p> },
        { text: 'Consulta Débitos de Veículos', component: <ConsultaDebitosForm className="w-50" /> },
        { text: 'Guia de Licenciamento e Multas', component: <GuiaLicenciamentoMultasForm className="w-50" /> },
        { text: 'Guia Flex', component: <GuiaFlexForm className="w-50" /> },
        { text: 'Alteração de Endereço de Veículo', component: <AlteracaoEnderecoVeiculoForm />, acessoProtegido: true },
        { text: 'ATPV-e Intenção de Venda', component: <p>Conteúdo 6</p> },
    ];

    return (
        <>
            <Helmet>
                <title>MEU DETRAN | Serviços para Veículos</title>
            </Helmet>
            <Container as="section" fluid className="px-5 py-3">
                <CabecalhoPage titulo="Veículo" texto="Serviços direcionados para regularização de seus veículos.">
                    <i className="fas fa-car"></i>
                </CabecalhoPage>
                <TabBox>
                    <TabBox.Nav>
                        {
                            conteudosPage.map((conteudo, index) => {
                                return <TabBox.Link text={conteudo.text} tabKey={index} acessoProtegido={conteudo.acessoProtegido}  />;
                            })
                        }
                    </TabBox.Nav>
                    <TabBox.Container>
                        {
                            conteudosPage.map((conteudo, index) => {
                                return (
                                    <TabBox.Content tabKey={index} acessoProtegido={conteudo.acessoProtegido}>
                                        { conteudo.component }
                                    </TabBox.Content>
                                )
                            })
                        }                        
                    </TabBox.Container>
                </TabBox>
            </Container>
        </>
    )
}
