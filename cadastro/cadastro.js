document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const senha = document.getElementById("senha");

        // limpa erros
        nome.classList.remove('erro');
        email.classList.remove('erro');
        senha.classList.remove('erro');

        document.getElementById("nomeErro").textContent = '';
        document.getElementById("emailErro").textContent = '';
        document.getElementById("senhaErro").textContent = '';

        let valido = true;

        // validação do nome
        if (nome.value.trim() === "") {
            document.getElementById("nomeErro").textContent = "Nome é obrigatório.";
            nome.classList.add("erro");
            valido = false;
        }

        // validação do email
        if (!validarEmail(email.value)) {
            document.getElementById("emailErro").textContent = "Email inválido.";
            email.classList.add("erro");
            valido = false;
        }

        // validação da senha
        const senhaErroMsg = validarSenha(senha.value);
        if (senhaErroMsg.length > 0) {
            document.getElementById("senhaErro").textContent = senhaErroMsg.join(" ");
            senha.classList.add("erro");
            valido = false;
        }
        
         // Se tudo estiver válido, salva os dados no localStorage
         if (valido) {
            salvarDados();
        }
    });

    // validação do email
    function validarEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // validação da senha
    function validarSenha(senha) {
        const minTamanho = 6;
        const temMaiuscula = /[A-Z]/.test(senha);
        const temMinuscula = /[a-z]/.test(senha);
        const temNumero = /\d/.test(senha);
        const temEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(senha);
        const temEspaco = /^\S*$/.test(senha);

        let mensagemErro = [];

        if (senha.length < minTamanho) {
            mensagemErro.push("A senha precisa de, no mínimo, 6 caracteres.");
        }
        if (!temMaiuscula) {
            mensagemErro.push("A senha precisa de, no mínimo, uma letra maiúscula.");
        }
        if (!temMinuscula) {
            mensagemErro.push("A senha precisa de, no mínimo, uma letra minúscula.");
        }
        if (!temNumero) {
            mensagemErro.push("A senha precisa de, no mínimo, um número.");
        }
        if (!temEspecial) {
            mensagemErro.push("A senha precisa de, no mínimo, um caractere especial.");
        } 
        if (!temEspaco) {
            mensagemErro.push("A senha não pode conter espaços.");
        }
        return mensagemErro;
    }
});

    //Função para salvar os dados no localStorage    
    document.getElementById("formulario").addEventListener ('submit',function(event) {
    event.preventDefault(); //impede o envio do formulário

    const email = document.getElementById("email").value; //oega o email inserido pelo usuário
    const nome = document.getElementById("nome").value; //pega o nome inserido pelo usuário
    const senha = document.getElementById("senha").value //pega a senha inserida pelo usuário

    //armazena os dados no localStorage
    localStorage.setItem("nomeUsuario", nome);
    localStorage.setItem("emailUsuario", email);
    localStorage.setItem("senhaUsuario", senha);

    alert("Cadastro realizado");
    //redireciona o usuário para a página inicial depois de clicar em "ok" no alert
    window.location.href = "../home/home.html"; 
    
    //exibe o botão de cancelar o cadastro depois de ter os dados salvos
    document.getElementById("cancelarCadastro").style.display = "inline";
});

    //função que cancela o cadastro (remove os dados do localStorage)
    document.getElementById("cancelarCadastro").addEventListener("click", function() {
        //aqui ele vai remover dados do localStorage
        localStorage.removeItem("emailUsuario");
        localStorage.removeItem("nomeUsuario");
        localStorage.removeItem("senhaUsuario");

        alert("Cadastro foi cancelado");
        //redireciona o usuário para a página inicial depois de clicar em "ok" no alert
        window.location.href = "../home/home.html"; 

        //oculta o botão de cancelar o cadastro depois que os dados foram  removidos
        document.getElementById('cancelarCadastro').style.display = "none";
});

    // Função que atualiza a exibição dos botões com base nos dados do localStorage
    function atualizarExibirBotoes() {
        const emailSalvo = localStorage.getItem("emailUsuario");
        const nomeSalvo = localStorage.getItem("nomeUsuario");
        const senhaSalva = localStorage.getItem("senhaUsuario");

        const cancelarCadastro = document.getElementById("cancelarCadastro");
        const continuarSemCadastro = document.querySelector(".continuarSemCadastro");
        const cadastrar = document.querySelector(".cadastrob");

        // Verifica se existem dados salvos
        if (emailSalvo || nomeSalvo || senhaSalva) {
            cadastrar.style.display = "none";
            continuarSemCadastro.style.display = "none";
            cancelarCadastro.style.display = "inline";
        } else {
            cadastrar.style.display = "inline";
            continuarSemCadastro.style.display = "inline";
            cancelarCadastro.style.display = "none";
        }
    }

    // Chama a função para atualizar os botões ao carregar a página
    atualizarExibirBotoes();

    // Função para cancelar o cadastro
    document.getElementById("cancelarCadastro").addEventListener("click", function() {
        localStorage.removeItem("nomeUsuario");
        localStorage.removeItem("emailUsuario");
        localStorage.removeItem("senhaUsuario");

        alert("Cadastro foi cancelado");

        // Atualiza os botões após cancelar o cadastro
        atualizarExibirBotoes();

        // Redireciona para a página inicial
        window.location.href = "../home/home.html";
    });