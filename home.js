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
