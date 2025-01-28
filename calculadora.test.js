const { suma, resta, multiplicacion, division } = require('./calculadora')

//TEST: SUMA

test('Suma de 2 + 3 debe ser 5', () => {
  expect(suma(2, 3)).toBe(5)
})

test('Suma de numeros negativos', () => {
  expect(suma(-2, -3)).toBe(-5)
})

//TEST: RESTA

test('Resta de -4 - (+3) debe ser -7', () => {
  expect(resta(-4, 3)).toBe(-7)
})

//TEST: MULTIPLICACIÓN

test('Multiplicación 4x3 debe ser 12', () => {
  expect(multiplicacion(4, 3)).toBe(12)
})

//TEST: DIVISIÓN

test('Dividir 1/2 debe ser 0.5', () => {
  expect(division(1, 2)).toBe(0.5)
})

test('Dividir 1/0 debe ser 0', () => {
  expect(division(1, 0)).toBe(0.0)
})
