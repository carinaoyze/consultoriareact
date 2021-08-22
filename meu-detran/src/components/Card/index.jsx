import React from 'react';
import { Link } from 'react-router-dom';
import './card.scss';

const Card = ({ url, titulo, texto, children }) => {
    return (
        <Link to={ url } className="the-card bg-white text-secondary text-decoration-none h-100 d-block px-3 px-lg-4 py-2 py-lg-3 rounded shadow">
            <h4 className="text-uppercase fw-bold fs-4 d-flex align-items-center">
                <div className="icone-padrao">
                    { children }
                </div> 
                { titulo }
            </h4>
            <p className="m-0 fs-6">
                { texto }
            </p>
        </Link>
    )
}

export default Card;

