const primeiro_botao = document.getElementById('projetos__botao__primeiro__projeto')
primeiro_botao.addEventListener('click', botaoCalculadora)

function botaoCalculadora(){
    window.location.href = 'https://andreaasilva.github.io/calculadora/'
}


const segundo_botao = document.getElementById('projetos__botao__segundo__projeto')
segundo_botao.addEventListener('click', botaoJogoVelha)

function botaoJogoVelha(){
    window.location.href = 'https://andreaasilva.github.io/jogo-da-velha/'
}


const terceiro_botao = document.getElementById('projetos__botao__terceiro__projeto')
terceiro_botao.addEventListener('click', botaoPortfolio)

function botaoPortfolio(){
    window.location.href= 'https://projeto-portifolio-html-css.vercel.app/index.html'
}


const quarto_botao = document.getElementById('projetos__botao__quarto__projeto')
quarto_botao.addEventListener('click', jogoForca)

function jogoForca(){
    window.location.href='https://andreaasilva.github.io/jogo-da-forca/'
}


const quinto_botao = document.getElementById('projetos__botao__quinto__projeto')
quinto_botao.addEventListener('click', paginaPokemon)

function paginaPokemon(){
    window.location.href='https://andreaasilva.github.io/projeto-pokemon/'
}


