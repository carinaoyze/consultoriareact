import { converterEmMoeda } from './utils';

describe('Funções utilitárias da Aplicação', () => {
    test('Conversão em Moeda (Real Brasileiro)', () => {
        const valor = converterEmMoeda(15.95);
        expect(valor).toBe('R$ 15,95');
    });
});