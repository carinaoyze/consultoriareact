import React from 'react'
import MasterLayout from '../../components/MasterLayout';
import GridPrincipal from '../../components/GridPrincipal';
import VeiculosLista from '../../components/VeiculosLista';
import { Helmet } from 'react-helmet-async';

export default function HomePage() {
    return (
        <MasterLayout>
            <Helmet>
                <title>MeuCarango | Bem-vindo ao nosso site</title>
            </Helmet>
            <main class="container">
                <GridPrincipal />
                <VeiculosLista />
            </main>
        </MasterLayout>
    )
}
