document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os dados do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validação simples
    if (!name || !email || !password) {
        document.getElementById('message').textContent = 'Todos os campos são obrigatórios';
        return;
    }

    // Envia os dados para o backend
    fetch('/register', { // Endpoint do servidor para registro
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Sucesso: exibe uma mensagem e redireciona
            document.getElementById('message').textContent = 'Cadastro bem-sucedido';
            window.location.href = '/login.html'; // Redireciona para a página de login
        } else {
            // Exibe uma mensagem de erro
            document.getElementById('message').textContent = data.message || 'Ocorreu um erro ao tentar se cadastrar';
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        document.getElementById('message').textContent = 'Ocorreu um erro ao tentar se cadastrar';
    });
});
