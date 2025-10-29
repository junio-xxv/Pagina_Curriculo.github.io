// alert("Baixe meu currículo completo: 📄");

/* O listener do formulário foi removido, pois o Formspree
agora cuida do envio. O JavaScript não é mais necessário
para exibir a mensagem de "Obrigado".
*/

// Funções para o Card de Contato
function openContactCard() {
    document.getElementById("contact-card-overlay").classList.add("active");
}

function closeContactCard() {
    document.getElementById("contact-card-overlay").classList.remove("active");
}

// Inicializa a biblioteca de animação (AOS)
AOS.init({
    duration: 800, // Duração da animação em ms
    once: true,    // A animação acontece apenas uma vez
});