import React, { useState } from 'react';
import Cabecalho from './components/Cabecalho';
import Container from './components/Container';
import Formulario from './components/Formulario';
import TabelaContatos from './components/TabelaContatos';

export default function MinhaAgenda() {
    const [contatos, setContatos] = useState([]);

    const adicionarContato = (nome, telefone) => {
        const contatoInfo = { nome, telefone }
        contatos.push(contatoInfo);
        setContatos([ ...contatos ]);
    }

    const excluirContato = (indice) => {
        contatos.splice(indice, 1);
        setContatos([ ...contatos ]);
    }

    return (
        <>
            <Cabecalho titulo="Minha Agenda" texto="Confira abaixo sua lista de contatos cadastrados." />
            <Container>
                <Formulario adicionarContatoCallback={ adicionarContato } />
            </Container>
            <Container>
                <TabelaContatos excluirContatoCallback={ excluirContato } listaContatos={ contatos } />
            </Container>
        </>
    );
}