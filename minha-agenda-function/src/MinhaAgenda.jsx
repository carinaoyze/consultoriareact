import React, { useState } from 'react';
import Cabecalho from './components/Cabecalho';
import Container from './components/Container';
import Formulario from './components/Formulario';
import TabelaContatos from './components/TabelaContatos';

export default function MinhaAgenda() {
    return (
        <>
            <Cabecalho titulo="Minha Agenda" texto="Confira abaixo sua lista de contatos cadastrados." />
            <Container>
                <Formulario />
            </Container>
            <Container>
                <TabelaContatos />
            </Container>
        </>
    );
}