const caloriasPorGrama = {
    'carne': 2.5,
    'queijo': 4.0,
    'pão': 2.5,
    'alface': 0.15,
    'tomate': 0.2
};

self.onmessage = (event) => {
    const { ingrediente, quantidade } = event.data;
    const calorias = (caloriasPorGrama[ingrediente.toLowerCase()] || 0) * quantidade;
    self.postMessage(calorias);
};