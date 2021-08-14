import React from 'react'
import { Link } from 'react-router-dom';
import imagem1 from '../../assets/images/home-imagem-1.jpg';
import imagem2 from '../../assets/images/home-imagem-2.jpg';
import imagem3 from '../../assets/images/home-imagem-3.jpg';
import '../../assets/css/grid-principal.css';

export default function GridPrincipal() {
    return (
        <section className="container grid-principal">
            <figure>
                <img src={ imagem1 } alt="Foto da Concessionária" />
                <figcaption>
                    Conheça nossa empresa <br />
                    <Link to="/sobre">
                        Saiba mais <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                </figcaption>
            </figure>

            <img src={ imagem2 } alt="Foto do pátio da Concessionária 2" />

            <p className="texto-1">
                Condições especiais de Financiamento
            </p>

            <p className="texto-2">
                Trabalhamos com todas as marcas
            </p>

            <img src={ imagem3 } alt="Foto do pátio da Concessionária 3" />
        </section>
    )
}
