const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel (){
    idx++;

    if (idx>img.length-1) {
        idx=0;
    }
    imgs.style.transform = `translateX(${-idx * 700}px)`;
}
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
localStorage.lg = "nome"
msgcookies.classList.remove('mostrar')
}

if(localStorage.lg == 'nome'){
    msgcookies.classList.remove('mostrar')
} else{
    msgcookies.classList.add('mostrar')
}
