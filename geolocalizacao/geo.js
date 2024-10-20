//Armazena a chave API no objeto Window para torná-la global
window.apiKey = 'H3PvSfW-NaRH-ahqjM8xgo0_2kbPBKVC_5V6hCTSS4A';

//Inicialização da plataforma Here
var plataforma = new H.service.Platform ({
    apikey: window.apiKey,
})

alert("Sua geolocalização será armazenada por noso site para o roteamento dos entregadores!");

//Código padrão do Here para criar camadas básicas como Ruas, mapas de trânsito e opção de satélite
var camadas = plataforma.createDefaultLayers();

var mapa = new H.Map(document.getElementById('mapa'),
//Cria um mapa com imagem vetorial 
camadas.vector.normal.map
);

//Código padrão para adicionar comportamentos e eventos ao mapa
var comportamento = new H.mapevents.Behavior(new H.mapevents.MapEvents(mapa));
  
//Código padrão para adicionar eventos UI ao mapa da Here
var ui = H.ui.UI.createDefault(mapa, camadas);

function geolocalizacao () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicao, erro)
    } else {
        alert("Geolocalização não suportada por este navegador")
    }
}

function posicao(position) {
    mapa.setCenter({lat: position.coords.latitude, lng: position.coords.longitude});
    var marcador = new H.map.Marker({lat: position.coords.latitude, lng: position.coords.longitude});
    mapa.addObject(marcador);
    mapa.setZoom(16);
    guardarLocalizacao(position);
}

function erro(error) {
    if (error.PERMISSION_DENIED) {
        alert("O usuário negou a permissão")
    } else if (error.POSITION_UNAVAILABLE) {
        alert("A localização não está habilitada")
    } else if (error.TIMEOUT) {
        alert("O tempo para a resposta do usuário se esgotou") 
    } else if (error.UNKNOWN_ERROR) {
        alert("Um erro desconhecido ocorreu")
    }
}

function guardarLocalizacao (position) {
    localStorage.setItem('lat', position.coords.latitude);
    localStorage.setItem('lng', position.coords.longitude)
}

geolocalizacao ();