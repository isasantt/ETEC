document.querySelectorAll('.adicionarCarrinho').forEach(function(botao) {
    botao.addEventListener('click', function() {
        const produto = {
            nome: this.dataset.nome,   
            preco: parseFloat(this.dataset.preco), 
            imagem: this.dataset.imagem 
        };

        localStorage.setItem('produto', JSON.stringify(produto));

        const confirmacao = document.getElementById('confirmacao');
        confirmacao.textContent = "Produto adicionado ao carrinho!";
        confirmacao.style.visibility = "visible";

        setTimeout(function() {
            confirmacao.style.visibility = "hidden";
        }, 3000);

        window.location.href = "pedido.html";
    });
});