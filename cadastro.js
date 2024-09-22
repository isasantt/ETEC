document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registrationForm").addEventListener("submit", function(event) {
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

        // redirecionamento após validação
        if (valido) {
            alert("Cadastro realizado com sucesso!");
            setTimeout(function() {
                window.location.href = "index.html"; 
            }, 1000); // redireciona após 1 (um) segundo
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
