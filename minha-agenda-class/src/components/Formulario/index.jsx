import React, { Component } from 'react';

class Formulario extends Component {
    state = {
        nome: '',
        telefone: ''
    }

    handleForm = (e) => {
        e.preventDefault();
        this.props.adicionarContatoCallback( this.state.nome, this.state.telefone );
        this.setState({ nome: '', telefone: '' });
    }

    render() {
        let isBotaoDisabled = !this.state.nome || !this.state.telefone;
        
        return (
            <div className="card mb-3 p-3">
                <form onSubmit={ this.handleForm } className="row">
                    <div className="form-group col-md-5">
                        <label>Nome:</label>
                        <input type="text" value={ this.state.nome } onChange={(e) => this.setState({ nome: e.target.value })} className="form-control" placeholder="Digite o nome do contato" />
                        { !this.state.nome && <span className="text-danger">Nome é obrigatório!</span> }
                    </div>
                    <div className="form-group col-md-5">
                        <label>Telefone:</label>
                        <input type="tel" value={ this.state.telefone } onChange={(e) => this.setState({ telefone: e.target.value })} className="form-control" placeholder="Digite o telefone do contato" />
                        { !this.state.telefone && <span className="text-danger">Telefone é obrigatório!</span> }
                    </div>
                    <div className="form-group col-md-2 mt-3 text-center">
                        <button disabled={ isBotaoDisabled } className="btn btn-primary btn-lg mt-2 w-100">
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Formulario;