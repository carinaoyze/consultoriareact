import React, { Component } from 'react';
import Cabecalho from './components/Cabecalho';
import Container from './components/Container';
import Formulario from './components/Formulario';
import TabelaContatos from './components/TabelaContatos';

export default class MinhaAgenda extends Component {
    state = {
        contatos: []
    }

    adicionarContato = (nome, telefone) => {
        const contatoInfo = { nome, telefone }
        const contatos = this.state.contatos;
        contatos.push(contatoInfo);
        this.setState({ contatos });
    }

    excluirContato = (indice) => {
        const contatos = this.state.contatos;
        contatos.splice(indice, 1);
        this.setState({ contatos });
    }

    render() {

        return (
            <>
                <Cabecalho titulo="Minha Agenda" texto="Confira abaixo sua lista de contatos cadastrados." />
                <Container>
                    <Formulario adicionarContatoCallback={ this.adicionarContato } />
                </Container>
                <Container>
                    <TabelaContatos excluirContatoCallback={ this.excluirContato } listaContatos={ this.state.contatos } />
                </Container>
            </>
        );
    }
}