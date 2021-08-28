import React from 'react';

export default function CabecalhoPage({ titulo, texto, children }) {
    return (
        <header className="text-secondary mb-4">
            <h4 className="text-uppercase fw-bold fs-4 d-flex align-items-center">
                <div className="icone-padrao">
                    { children }
                </div> 
                { titulo }
            </h4>
            <p className="m-0 fs-6">
                { texto }
            </p>
        </header>
    )
}
