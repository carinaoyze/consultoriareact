import React from 'react'
import { Link } from 'react-router-dom';

export default function Menu({ children }) {
    return (
        <nav id="menu">
            <button className="btn-mobile">
                <i className="fas fa-bars"></i>
            </button>
            <div className="container flex">
                <ul className="menu-principal">
                    <li><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
                    <li><Link to="/sobre">Sobre a Empresa</Link></li>
                    <li><Link to="/veiculos">Veículos</Link></li>
                    <li><Link to="/contato">Fale conosco</Link></li>
                </ul>

                { children }
            </div>
        </nav>
    )
}
