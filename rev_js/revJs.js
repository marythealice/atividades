// 1 - Declaração e Inicialização
let nome = "Maria Alice";
let idade = 27;
let estaAprovado = true;
const taxaFixa = 0.15;

// 2. Operações Simples

let anoNascimento = 2025 - idade;

let mensagemBoasVindas = nome + " tem " + idade + " anos de idade.";

// 3. Verificação (Console)

// Imprima os valores de todas as variáveis criadas na Tarefa 1.

console.log(nome);
console.log(idade);
console.log(estaAprovado);
console.log(taxaFixa);

// Imprima o valor de anoNascimento.

console.log(anoNascimento);

// Imprima o valor de mensagemBoasVindas.

console.log(mensagemBoasVindas);

// Imprima o resultado da multiplicação da sua idade por TAXA_FIXA.

console.log(taxaFixa * idade);

// Fase 2: Controle de Fluxo (Condicionais)
// 1. Escreva uma estrutura if/else que verifique se o numero é par ou ímpar.

let num = 7;

if (num < 1) {
    console.log("Escolha um numero maior que 0");
} else if (num % 2 === 0) {
    console.log(`O numero ${num} e par!`)
}
else {
    console.log(`O numero ${num} e impar!`)
}

// 2. Condicional Múltipla (if/else if/else)

let pontuacao = 90;

if (pontuacao < 0) {
    console.log("Pontuacoes negativas nao existem.")
}
else if (pontuacao >= 90) {
    console.log("Nota: A (Excelente)");
}
else if (pontuacao <= 89 && pontuacao >= 80) {
    console.log("Nota: B (Bom)");
}
else if (pontuacao >= 70 && pontuacao <= 79) {
    console.log("Nota: C (Regular)");
}
else {
    console.log("Nota: D (Reprovado)");
}

// 3. Combinação de Lógica

// Definindo as variáveis
let temperatura = 25;
let estaChovendo = false;

if (temperatura > 20 && estaChovendo === false) {
    console.log("Dia perfeito para sair!");
} else {
    console.log("Melhor ficar em casa ou levar um guarda-chuva.");
}

// Fase 3: Funções (Reutilização de Código)
// 1. Função Sem Parâmetros

function saudarUsuario() {
    console.log("Olá! Bem-vindo ao mundo das funções JavaScript.");
}

saudarUsuario();

// Função Com Parâmetros
function calcularAreaRetangulo(largura, altura) {
    let area = largura * altura;
    console.log(area);
}

calcularAreaRetangulo(2, 3);
calcularAreaRetangulo(7, 4);

// Função Com Retorno (Aumentando a Dificuldade)

function verificarMaioridade(idade) {
    return idade >= 18;
}

let maior = verificarMaioridade(22);
let menor = verificarMaioridade(15);

console.log(maior, menor);