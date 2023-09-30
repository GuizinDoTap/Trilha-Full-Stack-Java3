document.getElementById('registrationForm').addEventListener('submit', function (event) {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const country = document.getElementById('country').value;
    const interests = document.querySelectorAll('input[name="interests[]"]:checked');

    if (!fullName || !email || !password || !country || interests.length === 0) {
        event.preventDefault();
        alert('Por favor, preencha todos os campos e selecione pelo menos um interesse.');
    }
});