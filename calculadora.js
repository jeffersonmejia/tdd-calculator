function suma(a, b) {
  return a + b
}

function resta(a, b) {
  return a - b
}

function multiplicacion(a, b) {
  return a * b
}

function division(a, b) {
  if (a === 0 || b === 0) return 0 //CONTROLA DIVISIÓN INFINITA
  return a / b
}

function operaciones() {
  const d = document,
    $result = d.getElementById('resultado'),
    $number1 = d.getElementById('num1'),
    $number2 = d.getElementById('num2')

  let num1 = 0,
    num2 = 0,
    result = 0
  d.addEventListener('click', (e) => {
    num1 = parseFloat($number1.value)
    num2 = parseFloat($number2.value)

    if (e.target.matches('#add-btn')) {
      result = suma(num1, num2)
    }
    if (e.target.matches('#substract-btn')) {
      result = resta(num1, num2)
    }
    if (e.target.matches('#multiply-btn')) {
      result = multiplicacion(num1, num2)
    }
    if (e.target.matches('#divide-btn')) {
      result = division(num1, num2)
    }
    result = result.toFixed(2)
    $result.textContent = result
  })
}
module.exports = { suma, resta, multiplicacion, division }
