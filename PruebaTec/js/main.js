document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('thank-you-message').classList.remove('hidden');
});

const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
});

document.addEventListener('DOMContentLoaded', function () {
    // Inicializar Swiper
    const swiper = new Swiper('.swiper-container', {
        loop: true, // Carrusel infinito
        pagination: {
            el: '.swiper-pagination', // Paginación
            clickable: true, // Permite hacer clic en los puntos
        },
        autoplay: {
            delay: 3000, // Cambia de slide cada 3 segundos
        },
    });

    // Mostrar mensaje de agradecimiento al enviar el formulario
    const contactForm = document.getElementById('contact-form');
    const thankYouMessage = document.getElementById('thank-you-message');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe
        thankYouMessage.classList.remove('hidden'); // Muestra el mensaje de agradecimiento
    });
});