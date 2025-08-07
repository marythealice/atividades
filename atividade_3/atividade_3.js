/*

Exercício 1

Uma variável numeroDia guarda um número de 1 a 7 digitado pelo usuário.
Crie uma estrutura if/else que exiba o nome do dia da semana
correspondente (1 para "Domingo", 7 para "Sábado"). Se o número não estiver nesse
intervalo, exiba "Número inválido".


*/

// solucao usando if/else if

let numeroDia = prompt("Digite um numero inteiro de 1 a 7")

numeroDia = parseInt(numeroDia)

if (numeroDia === 1) {
    console.log("Domingo")
} else if (numeroDia === 2) {
    console.log("Segunda")
} else if (numeroDia === 3) {
    console.log("Terça")
} else if (numeroDia === 4) {
    console.log("Quarta")
} else if (numeroDia === 5) {
    console.log("Quinta")
} else if (numeroDia === 6) {
    console.log("Sexta")
} else if (numeroDia === 7) {
    console.log("Sábado")
} else {
    console.log("Numero invalido!")
}

// solucao usando switch case

let numeroDia2 = prompt("Digite um numero de 1 a 7!")

numeroDia2 = parseInt(numeroDia2)

switch (numeroDia2) {
    case 1:
        console.log("Domingo")
        break
    case 2:
        console.log("Segunda")
        break
    case 3:
        console.log("Terça")
        break
    case 4:
        console.log("Quarta")
        break
    case 5:
        console.log("Quinta")
        break
    case 6:
        console.log("Sexta")
        break
    case 7:
        console.log("Sábado")
        break
    default:
        console.log("Numero Invalido")
}


/*

Exercicio 2

Duas variáveis, usuário e senha, guardam as informações de login. Verifique se o usuário é "admin"
E a senha é "1234". Se as duas condições forem verdadeiras, exiba "Acesso concedido!". Caso contrário,
exiba "Acesso negado!".


*/

let usuario = prompt("Digite seu nome de usuario.")
let senha = prompt("Digite sua senha")

if (usuario === "admin" && senha === "1234") {
    console.log("Acesso concedido!")
} else {
    console.log("Acesso negado!")
}


/*

Exercicio 3

Uma pessoa quer comprar um produto. Crie uma condição que verifica se a pessoa é membroVip OU
se o valorDaCompra é maior que R$1000. Se uma dessas condições for verdadeira, exiba "Compra com desconto!".
Senão, exiba "Compra com preço normal.".

*/

let eMembroVip = true
let valorDaCompra = 200

if (eMembroVip || valorDaCompra > 1000) {
    console.log("Compra com desconto!")
} else {
    console.log("Compra com preco normal!")
}

/*

Exercicio 4

Use um laço for para exibir os números de 1 a 10 no console.

*/

for (let i = 1; i < 11; i++) {
    console.log(`${i}`)
}

/*

Exercicio 5

Crie um laço for que some os números de 1 a 5. Crie uma variável soma fora do laço para guardar o
resultado. A cada volta do laço, adicione o número atual à variável soma. No final, exiba o resultado.

*/

let soma = 0;

for (i = 1; i <= 5; i++) {
    soma += i;
}

console.log(`O resultado e: ${soma}`)


/*

Exercicio 6

Use um laço for para criar a tabuada do número 5, de 1 a 10. A saída deve ser no formato "5 x 1 = 5",
"5 x 2 = 10", e assim por diante.

*/

for (let i = 1; i < 11; i++) {
    console.log(`5 x ${i} = ${5 * i} `)
}

/*

Exercicio 7

Escreva um código usando o laço DO..While que faça a contagem REGRESSIVA de 10 ate 1.
dica: Assim como valor++ soma 1 no valor atual, valor-- subtrai 1 do valor atual.

*/

let contagem = 10;

do {
    console.log(`${contagem}`)
    contagem--
} while (contagem >= 1)


/*

Exercicio 8

Exibir números pares de 1 a 20,mostre apenas os pares de 1 a 20 usando for ou while.

*/


let contador = 1

while (contador <= 20) {
    if (contador % 2 === 0) {
        console.log(contador);
    }

    contador++;
}

/*

Exercicio 9

Crie um jogo onde um numeroSecreto é definido como 15. Use um laço while para continuar "pedindo" um
palpite (simulado por uma variável palpite que você altera manualmente) até que o palpite seja igual ao
número secreto. A cada tentativa errada, exiba "Você errou, tente de novo!". Quando acertar, exiba
"Parabéns, você acertou!"

*/

const numeroSecreto = 15
let numUsuario

while (numUsuario !== numeroSecreto) {
    numUsuario = prompt("Digite um numero inteiro ate adivinhar o numero secreto")
    numUsuario = parseInt(numUsuario)
    if (numUsuario !== numeroSecreto) {
        console.log("Você errou, tente de novo!")
    }
}
console.log("Parabens, voce acertou!")

// Solucao usando do..while
// (como o usuario deve tentar primeiro antes de receber a mensagem de erro, do while seria uma estrutura melhor e mais limpa para esse cenario)


const numeroSecreto2 = 15
let numUsuario2

do {
    numUsuario2 = prompt("Advinhe o numero secreto (de 1 a 100)!")
    numUsuario2 = parseInt(numUsuario2)
    if (numUsuario2 !== numeroSecreto2) {
        console.log("Você errou, tente de novo!")
    }
} while (numUsuario2 !== numeroSecreto2)

console.log("Parabéns, você acertou!")


/*

Exercicio 10

Em uma promoção, você tem direito a sortear um número da sorte uma vez. Se o número sorteado for maior
que 50, você pode sortear de novo. Use um laço do...while para simular isso. O sorteio (simulado por uma
variável) acontece dentro do laço, e o laço continua enquanto o numeroSorteado for maior que 50.

*/

// Solucao setando o valor "sorteado"

let numeroSorteado = 51
let numeroDigitado

do {
    numeroDigitado = prompt("Digite um numero inteiro!")
    numeroDigitado = Number(numeroDigitado)

    if (numeroDigitado === numeroSorteado) {
        alert("Voce acertou!")
        break
    }
    else {
        alert("Voce podera tentar novamente se o numero sorteado for maior que 50.")
        alert(`O numero sorteado e: ${numeroSorteado}`)
    }

} while (numeroSorteado > 50)

// Solucando sorteando um numero a cada palpite errado

let numeroSorteado2
let numeroDigitado2

do {
    numeroDigitado2 = prompt("Digite um numero inteiro!")
    numeroDigitado2 = Number(numeroDigitado2)

    numeroSorteado2 = (Math.floor(Math.random() * 100)) + 1

    if (numeroDigitado2 === numeroSorteado2) {
        alert("Voce acertou!")
        break
    }
    else {
        alert("Voce podera tentar novamente se o numero sorteado for maior que 50.")
        alert(`O numero sorteado e: ${numeroSorteado2}`)
    }

} while (numeroSorteado2 > 50)

