// atividades da aula 7

// Exercicio 1

function saudacao() {
    return "Ola mundo!"
}

console.log(saudacao())


// Exercicio 2

function somarDoisNumeros(num1, num2) {
    return num1 + num2
}

console.log(somarDoisNumeros(1, 5))

// Exercicio 3

function denominarSeNumeroEPar(num) {
    return (num % 2 === 0)
}

console.log(denominarSeNumeroEPar(2))

// Exercicio 4

function transformarTemperaturaDeCelsiusEmFarenheit(temperatura) {
    let temperaturaF = (temperatura * (9 / 5)) + 32
    return temperaturaF
}

console.log(transformarTemperaturaDeCelsiusEmFarenheit(32))

// Exercicio 5 

function retornaOMaiorEntreDoisNumeros(num1, num2) {
    return num1 > num2 ? num1 : num2
}

console.log(retornaOMaiorEntreDoisNumeros(2, 9))

// ARROW FUNCTIONS
// Exercicio 6

const darBomDia = () => "Bom dia!"

console.log(darBomDia())

// Exercicio 7

const multiplicarDoisNumeros = (num1, num2) => num1 * num2

console.log(multiplicarDoisNumeros(3, 7))

// Exercicio 8

const calularQuadradoDeNumero = (num1) => num1 * num1

console.log(calularQuadradoDeNumero(3))

// Exercicio 9

const calcularComprimentoDeString = (string) => string.length

console.log(calcularComprimentoDeString("pontodegoiaba"))

// Exercicio 10

const calculaIdade = (anoAtual, anoDeNascimento) => anoAtual - anoDeNascimento

console.log(calculaIdade(2025, 1997))
