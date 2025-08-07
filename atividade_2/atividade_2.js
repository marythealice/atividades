// Exercício 1

const nome1 = prompt("Ola! Digite seu nome!");
console.log("Olá, " + nome1 + "! " + "Seja bem vindo(a).");

// Exercício 2

let valor1 = prompt("Ola! Digite o primeiro numero!");
let valor2 = prompt("Ola! Digite o segundo numero! ");

let result2 = parseInt(valor1) + parseInt(valor2);

if (result2) {
    console.log("O valor da soma dos numeros digitados e: " + result2);
} else {
    console.log("Nao houve um resultado pois nao foram digitados dois numeros");
}

// Exercício 4

let valor4 = prompt("Digite um numero!");
valor4 = (parseInt(valor4));

let result4 = (valor4 * 2);

if (result4) {
    console.log("O dobro do valor digitado e: " + result4);
} else {
    console.log("Nao houve um resultado pois nao foi digitado um numero valido!");
}


// Exercício 5

let baseRet = prompt("Digite o tamanho da base de um retangulo em cm!");
baseRet = (parseInt(baseRet));

let altRet = prompt("Agora digite a altura em cm!");
alturaRet = (parseInt(altRet));

let areaRet = (baseRet * altRet);

if (areaRet) {
    console.log("A area do retangulo e: " + areaRet + "cm²");
} else {
    console.log("Os numeros digitados sao invalidos!");
}


// Exercício 6


let preco = prompt("Digite o preco de um produto!");
preco = (parseInt(preco));

let porcentagem = prompt("Agora digite um desconto em porcentagem!");
porcentagem = (parseInt(porcentagem));

let desconto = ((preco / 100) * porcentagem);

let precoFinal = preco - desconto;

if (precoFinal) {
    console.log("O preco final e: " + precoFinal + " reais.");
} else {
    console.log("Os numeros digitados sao invalidos!");
}


// Exercício 7

let primeiroNome = prompt("Digite seu primeiro nome!");
let sobrenome = prompt("Digite seu sobrenome!");

let nomeCompleto = primeiroNome + " " + sobrenome;

console.log("Seu nome completo e: " + nomeCompleto);

// Exercício 8

let querSerCadastrado = confirm("Gostaria de se cadastrar?");

if (querSerCadastrado) {
    const nome8 = prompt("Digite seu nome!");
    let idade = prompt("Digite sua idade");

    console.log("Cadastro realizado com sucesso!\n Nome: " +
        nome8 + "\n" + " Idade: " + idade
    );
} else {
    console.log("Cadastro cancelado pelo usuário.");
}