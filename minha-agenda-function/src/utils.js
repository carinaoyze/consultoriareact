export function converterEmMoeda(valor) {
    return parseFloat(valor).toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    }).replace(/\s/g, ' ');
}