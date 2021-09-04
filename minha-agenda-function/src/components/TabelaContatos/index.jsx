import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContatosActions } from '../../store/ducks/contatos';

function TabelaContatos() {
    const listaContatos = useSelector(state => state.contatos);
    const dispatch = useDispatch();

    return (
        <table className="table table-bordered table-striped">
            <thead className="thead-light">
                <tr>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    listaContatos.map((contato, index) => {
                        return (
                            <tr key={index}>
                                <td>{contato.nome}</td>
                                <td>{contato.tel}</td>
                                <td>
                                    <button onClick={() => dispatch({ type: ContatosActions.REMOVE_CONTATO, payload: { index } })} className="btn btn-danger">
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}

export default TabelaContatos;