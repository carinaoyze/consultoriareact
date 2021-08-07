import React from 'react';
import Menu from '../../components/Menu';
import { Helmet } from 'react-helmet-async';

export default function SobrePage() {
    return (
        <div>
            <Helmet>
                <title>Saiba mais sobre a empresa!</title>
            </Helmet>
            <h1>Página de Sobre</h1>
            <Menu />
        </div>
    )
}
