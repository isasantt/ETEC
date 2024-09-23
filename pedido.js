// Código para carregar o conteúdo do carrinho quando a página é carregada
document.addEventListener('DOMContentLoaded', function() {
    const carrinhoContainer = document.getElementById('carrinho');
    // Seleciona o contêiner do carrinho
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
        // Se não houver produto armazenado, exibe uma mensagem de carrinho vazio

    document.getElementById('finalizarPedido')?.addEventListener('click', function() {
                // Adiciona um evento ao botão de finalizar pedido
        alert("Pedido finalizado com sucesso!");
        localStorage.removeItem('produto'); 
        window.location.href = "home.html"; 
    });
});
