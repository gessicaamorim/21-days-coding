$(document).ready(function(){
    $("span").click(function(){
        //Seta o texto do span na variavel emoji
        let emoji = document.getElementById($(this).attr("id")).textContent;
        
        //Inseri o emoji no campo quando clicado
        let inputField = document.getElementById("input-field");
        inputField.value = emoji;

        //Função para inibir seleção de ao clicar duas vezes no emoji
        clearSelection();
        
        //seleciona o valor do campo
        inputField.select();

        //Copia o valor do campo para a area de transferencia
        document.execCommand('copy');

        //Exibe a mesagem de copiado para a area de transferencia
        let eventMessage = document.getElementById("alert-message");
        eventMessage.hidden = false;
        eventMessage.textContent = "Mensagem copiada para area de transferência!";
        eventMessage.style.backgroundColor = "cornflowerblue";
        
        //Apaga a mensagem depois de 4 segundos
        setTimeout(()=>{
            eventMessage.hidden = true;
            eventMessage.textContent = "";
            eventMessage.style.backgroundColor = "white";
        }, 10000);


    });
});

function clearSelection() {
    if(document.selection && document.selection.empty) {
    document.selection.empty();
    } else if(window.getSelection) {
    var sel = window.getSelection();
    sel.removeAllRanges();
    }
}