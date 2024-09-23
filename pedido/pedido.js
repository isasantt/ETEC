<<<<<<< Updated upstream:pedido/pedido.js
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
=======
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
  } else {
    ready()
}

function ready () {
    const removeProductButtons = document.getElementsByClassName("remove-product-button");
    for (var indice = 0; indice < removeProductButtons.length; indice++){
    removeProductButtons[indice].addEventListener("click", removeProduct)
    };

    function removeProduct(event) {
        event.target.parentElement.parentElement.remove();
        calcularTotal();
    }
    // remove um item específico do carrinho
    
    function calcularTotal(event) {
        let total = 0;
        if (document.getElementsByClassName("cart-product").style.display !== 'none') {
            let itemAdicionado = adicionarItem();
            if (itemAdicionado !== null || typeof itemAdicionado !== "undefined" || isNaN(itemAdicionado) !==true) {
                totalPedido = itemAdicionado;
            }
        }
        document.querySelector(".total-valor")
    }
    // calcula o total

    function adicionarItem() {
        let produto = document.getElementsByClassName("cart-product").value;
        let preco = textToFloat(document.getElementsByClassName("cart-product-price").value);
        let presente = document.getElementsByClassName("cart-product-price").checked;

        if (produto == "" || preco == 0) {
            alert('Informe o Nome e o Preço do Produto')
        } else {
            if (presente === true) {
                preco = preco + 5;
            }
        }
        return preco;
    }
    // adiciona um item

}
>>>>>>> Stashed changes:pedido.js
