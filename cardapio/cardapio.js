var worker = new Worker('cardapioWorker.js');

document.getElementById('calculadora').addEventListener('click', () => {
    const ingrediente = document.getElementById('ingrediente').value;
    const quantidade = parseFloat(document.getElementById('quantidade').value); //declarando as constantes de acordo com as id's
    


    if((quantidade) <= 0){
        alert('Por favor, insira um número maior que 0');
    }

    if (ingrediente && (quantidade)) {
     { ingrediente, quantidade };
        worker.postMessage({ ingrediente, quantidade }); //se os campos estiverem preenchidos o thred principal enviará as informações para o worker

    } 

  
    
    else {
        alert('Por favor, insira um ingrediente e uma quantidade válidos.');//se algum dos campos não estiverem preenchidos aparecerá esta mensagem
    }
});

worker.onmessage = (event) => {
    document.getElementById('res').textContent = 'calorias: ' +  event.data; //pegando o resultado do worker e exibindo
};  


