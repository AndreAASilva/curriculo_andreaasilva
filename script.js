function botaoCalculadora(){
    window.location.href = 'https://andreaasilva.github.io/calculadora/'
}

var primeiro_botao = document.getElementById('projetos__botao__primeiro__projeto')
primeiro_botao.addEventListener('click', botaoCalculadora)

function botaoJogoVelha(){
    window.location.href = 'https://andreaasilva.github.io/jogo-da-velha/'
}

var segundo_botao = document.getElementById('projetos__botao__segundo__projeto')
segundo_botao.addEventListener('click', botaoJogoVelha)

function botaoPortfolio(){
    window.location.href= 'https://projeto-portifolio-html-css.vercel.app/index.html'
}

var terceiro_botao = document.getElementById('projetos__botao__terceiro__projeto')
terceiro_botao.addEventListener('click', botaoPortfolio)

function jogoForca(){
    window.location.href='https://andreaasilva.github.io/jogo-da-forca/'
}

var quarto_botao = document.getElementById('projetos__botao__quarto__projeto')
quarto_botao.addEventListener('click', jogoForca)



