alert('Tenha um PDF do meu curriculo atravez do icone')


document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const messageStatus = document.getElementById('messageStatus');

    if (name && message) {
        messageStatus.textContent = 'Obrigado por seu feedback, ' + name + '! Sua mensagem foi recebida.';
        messageStatus.style.color = 'green';
        messageStatus.style.marginTop = '1rem';
        
        document.getElementById('feedbackForm').reset();
    } else {
        messageStatus.textContent = 'Por favor, preencha todos os campos.';
        messageStatus.style.color = 'red';
        messageStatus.style.marginTop = '1rem';
    }
});

// Funções para o Card de Contato
function openContactCard() {
    document.getElementById("contact-card-overlay").classList.add("active");
}

function closeContactCard() {
    document.getElementById("contact-card-overlay").classList.remove("active");
}
