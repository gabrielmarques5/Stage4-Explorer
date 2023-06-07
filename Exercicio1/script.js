let numberOne = prompt('Digite o primeiro número')
let numberTwo = prompt('Digite o segundo número')

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

alert('Soma = ' + sum)
alert('Subtração = ' + sub)
alert('Multiplicação = ' + mult)
alert('Divisão = ' + div)
alert('Resto da divisão = ' + restDiv)

if (restDiv == 0) {
  alert('A soma dos dois número é par ' + sum)
} else {
  alert('A soma dos dois número é imipar ' + sum)
}

if (numberOne == numberTwo) {
  alert('Os números digitados são iguais')
} else {
  alert('Os números digitados são diferentes')
}