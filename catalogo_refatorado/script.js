// Declarando const produtos como array de objetos:

const produtos = [
    { nome: "Lip Tint Bruna Tavares", preco: 50.99, emEstoque: false, imagem: "/img/produto1.jpg" },
    { nome: "Gloss Boca Rosa", preco: 39.99, emEstoque: true, imagem: "/img/produto2.jpg" },
    { nome: "Lapis de Olhos Jequiti", preco: 29.99, emEstoque: true, imagem: "/img/produto3.jpg" },
    { nome: "Body Splash - rose petals", preco: 99.00, emEstoque: true, imagem: "/img/produto4.jpg" }
]

// Funcao que recebe array de produtos

function RenderizarProdutos(lista) {
    const grid = document.getElementById("product-grid")
    grid.innerHTML = "" // limpando o grid

    lista.forEach(produto => {

        // criando o card
        const card = document.createElement("div")
        card.classList.add("card")

        // criando elemento para nome
        const nome = document.createElement("h3")
        nome.textContent = produto.nome // atribuindo o nome presente no objeto

        // Preco formatado
        /** @type {number} */
        const preco = document.createElement("p")
        preco.textContent = produto.preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        const imagem = document.createElement("img");
        imagem.src = produto.imagem
        imagem.alt = produto.nome

        const status = document.createElement("p")
        status.textContent = produto.emEstoque ? "Em estoque" : "Esgotado"

        if (!produto.emEstoque) {
            status.classList.add("out-of-stock")
        }

        card.appendChild(nome)
        card.appendChild(preco)
        card.appendChild(imagem)
        card.appendChild(status)

        grid.appendChild(card)
    });





}

// console.table(produtos)

// // Calcular e exibir no console o valor total de itens em estoque utilizando filter + reduce

// const valorTotalProdutosComDesconto = produtos.filter(produtos => produtos.emEstoque == true).reduce((soma, produto) => soma + produto.preco, 0)

// console.log("Valor total dos produtos em estoque:")
// console.log(valorTotalProdutosComDesconto.toFixed(2))

// // Criar um novo array de objetos com 10% de desconto em cada preço usando map e exibir com console.log

// const produtosComDesconto = produtos.map(produto => ({
//     ...produto,
//     preco: Number((produto.preco * 0.9).toExponential(2))
// }))

// console.log(produtosComDesconto)

// // Filtrar apenas produtos disponíveis com filter e exibir no console

// const produtosEmEstoque = produtosComDesconto.filter(produto => produto.emEstoque)

// console.log("Produtos com desconto em estoque:")

// console.table(produtosEmEstoque)

// // Iterar sobre produtos usando:

// //for...of para imprimir o nome de cada 

// console.log("Produtos disponiveis")

// for (const produto of produtos) {
//     console.log(`${produto.nome}`)
// }

// // while para percorrer o array e exibir cada nome

// console.log("Produtos disponiveis")

// let i = 0

// while (i < produtos.length) {
//     console.log(`${produtos[i].nome}`)
//     i++
// }

// let restanteDosProdutos = produtos.length

// // do...while para fazer uma contagem regressiva de quantos itens faltam processar

// console.log("Contagem regressiva do processamento dos produtos")

// do {
//     console.log(`Faltam ${restanteDosProdutos} para processar`)
//     restanteDosProdutos--
// } while (restanteDosProdutos > 0)

// // Chamar funcoes depois que html e css ja tiverem sido carregados

document.addEventListener('DOMContentLoaded', () => {
    console.log('O dom esta pronto')
})
