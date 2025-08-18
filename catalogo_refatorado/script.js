// Declarando const produtos como array de objetos:

const produtos = [
    { nome: "Lip Tint Bruna Tavares", preco: 50.99, emEstoque: false, imagem: "./img/produto1.jpg" },
    { nome: "Gloss Boca Rosa", preco: 39.99, emEstoque: true, imagem: "./img/produto2.jpg" },
    { nome: "Lapis de Olhos Jequiti", preco: 29.99, emEstoque: true, imagem: "./img/produto3.jpg" },
    { nome: "Body Splash - rose petals", preco: 99.00, emEstoque: true, imagem: "./img/produto4.jpg" }
];

const botaoAplicarDesconto = document.getElementById("btn-desconto");
const botarMostrarDisponiveis = document.getElementById("btn-filtrar");
const botaoMostrarTodos = document.getElementById("btn-mostrar-todos");

// Funcao que recebe array de produtos e o transforma produtos renderizados

function renderizarProdutos(listaDeProdutos) {
    const grid = document.getElementById("product-grid")
    grid.innerHTML = ""; // limpando o grid

    listaDeProdutos.forEach(produto => {

        // criando elemento div com class card
        const card = document.createElement("div");
        card.classList.add("card");

        // preenchendo o conteudo do card com innerHTML dentro do for each para renderizar todos os produtos presentes no array

        card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.precoOriginal ? `<s style="color: gray; font-size: 20px;">R$ ${produto.precoOriginal.toFixed(2)}</s> ` : ''} R$ ${produto.preco.toFixed(2)}</h3>
        <p class="${produto.emEstoque ? "" : "out-of-stock"}">
            ${produto.emEstoque ? "Em estoque" : "Esgotado"}
        </p>

        `;

        grid.appendChild(card);

    });
}

// Funcao que calcula o valor total de produtos em um array

function calcularValorDoEstoque(listaDeProdutos) {

    const total = listaDeProdutos
        .filter(produto => produto.emEstoque)
        .reduce((soma, produto) => soma + produto.preco, 0);

    const valorEstoque = document.getElementById("valor-total-estoque");
    valorEstoque.textContent = `R$ ${total.toFixed(2)}`;

}

// Funcao que aplica desconto nos precos de um objeto e retorna um novo array com o preco original e o com desconto

function aplicarDesconto(listaDeProdutos) {
    return listaDeProdutos.map(produto => ({
        ...produto,
        precoOriginal: produto.preco,
        preco: Number((produto.preco * 0.9).toFixed(2))
    }))
}


// Funcao que retornar um novo array com apenas os produtos disponiveis

function retornaProdutosDisponiveis(listaDeProdutos) {
    return listaDeProdutos.filter(produto => produto.emEstoque)
}


// Funcao que muda o conteudo da div com id log-loops para mostrar a iteracao de todos os produtos presentes no array inicial

function demonstrarLacosDeProdutos(listaDeProdutos) {
    const divlogs = document.getElementById("log-loops");
    let resultado = "";
    resultado += "Demonstracao de loop for..of\n"
    for (const produto of listaDeProdutos) {
        resultado += ` ${produto.nome}`
    };

    divlogs.textContent = resultado;
}

/* Colocando todas as funcoes dentro do evento DOMContentLoaded 
para que a pagina nao precise recarregar para exibir as funcoes
manejadas pelos botoes
*/

document.addEventListener("DOMContentLoaded", () => {
    renderizarProdutos(produtos);
    calcularValorDoEstoque(produtos);
    demonstrarLacosDeProdutos(produtos);

    botaoAplicarDesconto.addEventListener('click', () => {
        const produtosComDesconto = aplicarDesconto(produtos);
        renderizarProdutos(produtosComDesconto);
        calcularValorDoEstoque(produtosComDesconto);
    })

    botarMostrarDisponiveis.addEventListener('click', () => {
        const produtosDisponiveis = retornaProdutosDisponiveis(produtos);
        renderizarProdutos(produtosDisponiveis)
        calcularValorDoEstoque(produtosDisponiveis)
    })

    botaoMostrarTodos.addEventListener('click', () => {
        renderizarProdutos(produtos)
        calcularValorDoEstoque(produtos)
    })

})

