// Importamos las funciones que queremos probar
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app');

// Definimos los tests
test('Convierte 1 EUR a 1.07 USD', () => {
    expect(fromEuroToDollar(1)).toBe(1.07);
});

test('Convierte 1 USD a 146.26 JPY', () => {
    expect(fromDollarToYen(1)).toBeCloseTo(146.26, 2); // Usamos toBeCloseTo por los decimales
});

test('Convierte 156.5 JPY a 0.87 GBP', () => {
    expect(fromYenToPound(156.5)).toBe(0.87);
});
