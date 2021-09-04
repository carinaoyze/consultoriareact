import { render } from '@testing-library/react';
import Cabecalho from './index';

describe('Componente Cabeçalho', () => {
    test('Quando o cabeçalho for renderizado, deve receber as propriedades corretamente', () => {
        const { container } = render( 
            <Cabecalho 
                titulo="Minha Agenda" 
                texto="Confira abaixo sua lista de contatos cadastrados." 
            /> 
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});