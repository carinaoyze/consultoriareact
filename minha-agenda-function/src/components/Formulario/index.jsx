import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ContatosActions } from '../../store/ducks/contatos';

function Formulario() {
    const dispatch = useDispatch();
    const [nome, setNome] = useState('');
    const [tel, setTelefone] = useState('');
    let isBotaoDisabled = !nome || !tel;

    const handleForm = (e) => {
        e.preventDefault();
        const novoContato = { nome, tel };
        dispatch({ type: ContatosActions.ADD_CONTATO, payload: { novoContato } });
        
        setNome('');
        setTelefone('');
    }

    
    return (
        <div className="card mb-3 p-3">
            <form onSubmit={ handleForm } className="row">
                <div className="form-group col-md-5">
                    <label>Nome:</label>
                    <input type="text" value={ nome } onChange={(e) => setNome(e.target.value)} className="form-control" placeholder="Digite o nome do contato" />
                    { !nome && <span className="text-danger">Nome é obrigatório!</span> }
                </div>
                <div className="form-group col-md-5">
                    <label>Telefone:</label>
                    <input type="tel" value={ tel } onChange={(e) => setTelefone(e.target.value)} className="form-control" placeholder="Digite o telefone do contato" />
                    { !tel && <span className="text-danger">Telefone é obrigatório!</span> }
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

export default Formulario;