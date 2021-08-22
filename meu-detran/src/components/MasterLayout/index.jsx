import React from 'react';
import Cabecalho from '../Cabecalho';

export default function MasterLayout({ children }) {
    return (
        <>
            <Cabecalho />
            <main>
                { children }
            </main>
        </>
    )
}
