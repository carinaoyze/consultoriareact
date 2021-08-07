import React from 'react';
import Menu from '../../components/Menu';
import { Helmet } from 'react-helmet-async';

export default function HomePage() {
    return (
        <div>
            <Helmet>
                <title>Bem-vindo(a) à Homepage!</title>
            </Helmet>
            <h1>HomePage</h1>
            <Menu />
        </div>
    )
}
