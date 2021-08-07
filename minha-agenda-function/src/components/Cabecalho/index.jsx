import React from 'react';
import cabecalhoStyles from './cabecalho.module.css';

function Cabecalho({ titulo, texto }) {
    return (
        <div className={`jumbotron ${cabecalhoStyles.cabecalho}`}>
            <h1 className="display-4">{ titulo }</h1>
            <p className="lead">
                { texto }
            </p>
        </div>
    );
}

export default Cabecalho;