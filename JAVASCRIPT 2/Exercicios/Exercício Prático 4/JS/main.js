// Validar o formulário
const form = document.getElementById("myForm");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    if (nameInput.value === "" || emailInput.value === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        alert("Formulário enviado com sucesso!");
        // Você pode enviar os dados para o servidor aqui, se necessário.
    }
});

// Navegação com histórico
const backButton = document.getElementById("backButton");
backButton.addEventListener("click", function () {
    history.back();
});

// Obter geolocalização
const geoButton = document.getElementById("geoButton");
const geoData = document.getElementById("geoData");

geoButton.addEventListener("click", function () {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            geoData.innerHTML = `Sua localização: Latitude ${latitude}, Longitude ${longitude}`;
        }, function (error) {
            geoData.innerHTML = "Não foi possível obter a geolocalização.";
        });
    } else {
        geoData.innerHTML = "A geolocalização não é suportada neste navegador.";
    }
});
