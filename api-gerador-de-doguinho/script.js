
const url = 'https://api.thedogapi.com/v1/images/search';
const imagem = document.querySelector("#imagem");

function gerarCachorro(){
    fetch(url)
.then((resp) => resp.json())
.then(function(data) {

    imagem.style.backgroundImage="url("+data[0].url+")";
    console.log(data[0])
   
})
.catch(function(error) {
  console.log(error);
});
}

