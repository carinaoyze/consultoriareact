import React from 'react'
import logoRodape from '../../assets/images/meu-carango-rodape.png';

export default function Rodape({ children }) {
    return (
        <footer id="rodape">
            <div className="container flex">
                <img src={ logoRodape } alt="Logo MeuCarango" />
                { children }
            </div>

            <div className="container flex">
                <address>
                    Rua Guarujá, 589 Vila Madalena <br />
                    São Paulo / SP
                </address>

                <p>
                    Copyright &copy; MeuCarango<br />
                    Todos os direitos reservados.
                </p>
            </div>
        </footer>
    )
}
