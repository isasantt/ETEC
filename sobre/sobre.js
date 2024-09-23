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
