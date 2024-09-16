document.addEventListener('DOMContentLoaded', function() {
    const carrinhoContainer = document.getElementById('carrinho');

    const produto = JSON.parse(localStorage.getItem('produto'));

    if (produto) {
        carrinhoContainer.innerHTML = `
            <div class="produto-carrinho">
                <img src="${produto.imagem}" alt="${produto.nome}">
                <div class="detalhes">
                    <h2>${produto.nome}</h2>
                    <p>Preço: R$${produto.preco.toFixed(2)}</p>
                </div>
            </div>
            <button id="finalizarPedido" class="botao">Finalizar Pedido</button>
        `;
    } else {
        carrinhoContainer.innerHTML = "<p>Seu carrinho está vazio.</p>";
    }

    document.getElementById('finalizarPedido')?.addEventListener('click', function() {
        alert("Pedido finalizado com sucesso!");
        localStorage.removeItem('produto'); 
        window.location.href = "index.html"; 
    });
});
