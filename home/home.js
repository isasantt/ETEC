const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let indice = 0;
//indice da imagem

function carrossel (){
    indice++;

    if (indice>img.length-1) {
        indice=0;
    }
//se o índice exceder o número de imagens, reinicia o índice
    imgs.style.transform = `translateX(${-indice * 700}px)`;
}

// Atualiza a posição do carrossel para mostrar a imagem correspondente ao índice
setInterval(carrossel, 1800);

function startldleTimer() {
    let timeout;
    function resetTimer() {
        clearTimeout(timeout);
        timeout = setTimeout(() => alert("Você ficou inativo por mais de 3 minutos!"), 3 * 60 * 1000);
    }
    document.addEventListener('mousemove', resetTimer);
    document.addEventListener('keypress', resetTimer);
    resetTimer ()
}

var msgcookies = document.getElementById('cookies-msg')

function aceitar(){
localStorage.lg = "numero"
msgcookies.classList.remove('mostrar')
}

if(localStorage.lg == 'numero'){
    msgcookies.classList.remove('mostrar')
    //remove a mensagem aceitada
} else{
    msgcookies.classList.add('mostrar')
        //exibe a mensagem
}

const logradouro = document.querySelector('#logradouro');
const bairro = document.querySelector('#bairro');
const localidade = document.querySelector('#localidade');
const uf = document.querySelector('#uf');
const hidden_show = document.querySelector('#hidden-show')

function consultarCep() {  // após clilcar em consultar os valores a seguir serão aplicados 
    var cep = document.getElementById("cep").value  // aplica valor ao var
    var url = 'https://viacep.com.br/ws/' + cep + '/json' // anexa site com os dados 
    var request = new XMLHttpRequest() 
    request.open('GET', url)
    request.onerror = function(e)
    
    {
     document.getElementById('resposta').innerHTML = 'CEP INVÁLIDO TENTE NOVAMENTE' // caso o cep não seja encontrado na base de dados do viacep a ação é dada como invalida
       document.getElementById("cep").style.border = '2px solid red'

    }                                                       // se o cep tiver os 8 numeros mas não existir ele será preenchido como "indefinido"
    request.onload = () => {
        var response = JSON.parse(request.responseText)
        if (response.erro === true) {
            document.getElementById('resposta').innerHTML = 'CEP NÃO ENCONTRADO' // 
        } else {
            hidden_show.style.display = 'block'
            logradouro.value = response.logradouro
            bairro.value = response.bairro
            localidade.value = response.localidade
            uf.value = response.uf
        }
    }

    request.send();
    logradouro.value = ''; // Limpa o campo
    bairro.value = ''; // Limpa o campo
    localidade.value = ''; // Limpa o campo
    uf.value = ''; // Limpa o campo
    hidden_show.style.display = 'none'
    resposta.innerHTML = ''
}
document.getElementById('hidden-show')?.addEventListener('click', function() {
if (!localStorage.getItem('alertShown')) {
    alert("endereço foi encontrado com sucesso")


    
   localStorage.setItem('alertShown', 'true');
  }
  setTimeout(function() {
    localStorage.removeItem('alertShown');
    console.log('Chave alertShown removida após 12 segundos');
  }, 12000); // caso coloque outro cep após 12 segundos aparecerá outro alerta 
}

);

