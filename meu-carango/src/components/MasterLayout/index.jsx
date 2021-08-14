import React from 'react'
import Cabecalho from '../Cabecalho';
import Rodape from '../Rodape';
import Menu from '../Menu';
import RedesSociais from '../RedesSociais';
import '../../assets/css/masterpage.css';

export default function MasterLayout({ children }) {
    return (
        <>
            <Cabecalho>
                <Menu>
                    <RedesSociais />
                </Menu>
            </Cabecalho>

            { children }

            <Rodape>
                <RedesSociais />
            </Rodape>
        </>
    )
}
