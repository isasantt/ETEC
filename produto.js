// Adiciona eventos para os botões de adicionar ao carrinho
document.querySelectorAll('.adicionarCarrinho').forEach(function(botao) {
    botao.addEventListener('click', function() {
                // Cria um objeto com os detalhes do produto
        const produto = {
            nome: this.dataset.nome,   
            preco: parseFloat(this.dataset.preco), 
            imagem: this.dataset.imagem 
        };
            // Armazena o objeto produto em localStorage
        localStorage.setItem('produto', JSON.stringify(produto));

                // Seleciona o elemento de confirmação
        const confirmacao = document.getElementById('confirmacao');
        confirmacao.textContent = "Produto adicionado ao carrinho!";
        confirmacao.style.visibility = "visible";

                // Oculta o elemento de confirmação após 3 segundos
        setTimeout(function() {
            confirmacao.style.visibility = "hidden";
        }, 3000);

                // Redireciona o usuário para a página de pedido
        window.location.href = "pedido.html";
    });
});
