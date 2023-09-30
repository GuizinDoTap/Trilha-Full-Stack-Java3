
document.getElementById('tamanhoTela').innerHTML = "Tamanho da Tela: " + window.innerWidth + " x " + window.innerHeight;
document.getElementById('profundidadeCores').innerHTML = "Profundidade de Cores: " + screen.colorDepth + "bits";
document.getElementById('caminhoPorta').innerHTML = "Caminho da Página:" + window.location.pathname + "<br> Porta:" + window.location.port;


if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        document.getElementById('geolocalizacao').innerHTML = "Latitude: " + latitude + "<br> Longitude: " + longitude;
    });
} else {
    document.getElementById('geolocalizacao').innerHTML = "Geolocalização não disponível neste dispositivo.";
}
