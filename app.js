let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
};

function fromEuroToDollar(euroAmount) {
    return euroAmount * oneEuroIs.USD;
}

function fromDollarToYen(dollarAmount) {
    let euroAmount = dollarAmount / oneEuroIs.USD;
    return euroAmount * oneEuroIs.JPY;
}

function fromYenToPound(yenAmount) {
    let euroAmount = yenAmount / oneEuroIs.JPY;
    return euroAmount * oneEuroIs.GBP;
}

console.log(fromEuroToDollar(1));  // De 1 Euro a Dólar -> 1.07 USD
console.log(fromDollarToYen(1));   // De 1 Dólar a Yen -> 146.26 JPY
console.log(fromYenToPound(156.5)); // De 156.5 Yen a Libra -> 0.87 GBP


test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
