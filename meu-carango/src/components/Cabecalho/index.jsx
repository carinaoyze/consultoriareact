import React from 'react'
import logoMeuCarango from '../../assets/images/meu-carango-logo.png';

export default function Cabecalho({ children }) {
    return (
        <header id="topo">
            <div className="container flex">
                <img src={ logoMeuCarango } alt="MeuCarango" />

                <form className="flex" action="">
                    <label for="termo">Caixa de pesquisa</label>
                    <input type="text" name="termo" id="termo" placeholder="Digite sua pesquisa..." />
                    <button type="submit">
                        <i className="fas fa-search"></i>
                    </button>
                </form>

                <a href="#" className="lnk-destaque lnk-financiamento">
                    <i className="fas fa-dollar-sign"></i> Financiamento
                </a>
            </div>

            { children }
        </header>
    )
}
