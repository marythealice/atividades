// 1

const texto = document.getElementsByClassName('mudarBackground')[0]

texto.addEventListener('mouseover', () => {
    texto.classList.add('estiloNovo')
})

texto.addEventListener('mouseout', () => {
    texto.classList.remove('estiloNovo')
})

// 2


const paragrafo = document.getElementById("textoEscondido")
const button2 = document.getElementById("esconde")

button2.addEventListener('click', () => {


    if (paragrafo.style.visibility !== 'hidden') {
        paragrafo.style.visibility = 'hidden'
    }
    else {
        paragrafo.style.visibility = 'visible'
    }
})

// 3

const contador = document.querySelector('.contador')
const button3 = document.querySelector('.contar')

let count = 0;

button3.addEventListener('click', () => {
    count += 1
    contador.textContent = count
})


// 4

const botaoAbrir = document.getElementById('abrirModal')
const modal = document.getElementById("oculto")
const botaoFechar = document.getElementById("fechar")

function abrirModal() {
    modal.removeAttribute('id')
}

function fecharModal() {
    modal.setAttribute('id', 'oculto')
}

botaoAbrir.addEventListener('click', abrirModal)
botaoFechar.addEventListener('click', fecharModal)