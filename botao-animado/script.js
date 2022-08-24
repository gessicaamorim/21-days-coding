function animarBotao()
{
    let classeBotaoNormal = document.querySelector(".botao-normal")
    let classeBotaoClicado = document.querySelector(".botao-clicado")
    if(classeBotaoNormal) {
        classeBotaoNormal.classList.replace('botao-normal', 'botao-clicado');
    } else{
        classeBotaoClicado.classList.replace('botao-clicado', 'botao-normal');
    }
}