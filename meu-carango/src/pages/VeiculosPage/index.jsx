import React from 'react'
import { Helmet } from 'react-helmet-async';
import MasterLayout from '../../components/MasterLayout';
import VeiculosLista from '../../components/VeiculosLista';

export default function VeiculosPage() {
    return (
        <MasterLayout>
            <Helmet>
                <title>MeuCarango | Veículos</title>
            </Helmet>
            <main className="container">
                <h1 className="cabecalho-pagina">Veículos</h1>
                <VeiculosLista quantidade={12} mostrarTitulo={false} />
            </main> 
        </MasterLayout>
    )
}