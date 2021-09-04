import { render, screen } from '@testing-library/react';
import MinhaAgenda from './MinhaAgenda';

describe('Componente Minha Agenda', () => {
    test('Quando a tela carregar, o título da app deve ser "Minha Agenda"', () => {
        render( <MinhaAgenda /> );
        expect(screen.getByText('Minha Agenda')).toBeInTheDocument();
    });
});