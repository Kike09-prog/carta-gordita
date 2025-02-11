document.addEventListener('DOMContentLoaded', () => {
    const siBtn = document.getElementById('siBtn');
    const noBtn = document.getElementById('noBtn');
    // Respuesta positiva
    siBtn.addEventListener('click', () => {
        // Efecto de confeti
        for (let i = 0; i < 50; i++) {
            crearConfeti();
        }
        // Mostrar mensaje
        Swal.fire({
            title: 'Era obvio 🙈',
            text: 'La vamos a pasar muy matonico',
            icon: 'success',
            confirmButtonText: '¡Estoy lista! 🌹'
        });
    });
    // Respuesta negativa
    noBtn.addEventListener('click', (e) => {
        e.preventDefault();
        Swal.fire({
            title: '😢 ¿Segura?',
            text: 'Vuelve a intentarlo 🙈',
            icon: 'question',
            confirmButtonText: 'Reconsiderar'
        });
    });
    // Movimiento aleatorio del botón "No"
    noBtn.addEventListener('mouseover', () => {
        const x = Math.random() * 80 - 40;
        const y = Math.random() * 80 - 40;
        noBtn.style.transform = `translate(${x}px, ${y}px)`;
    });
    // Función para crear confeti
    function crearConfeti() {
        const confeti = document.createElement('div');
        confeti.style.position = 'fixed';
        confeti.style.width = '10px';
        confeti.style.height = '10px';
        confeti.style.backgroundColor = `hsl(${Math.random() * 360}deg, 100%, 50%)`;
        confeti.style.left = Math.random() * 100 + 'vw';
        confeti.style.top = '-10px';
        confeti.style.borderRadius = '50%';
        confeti.style.animation = `caida ${Math.random() * 3 + 2}s linear`;
        document.body.appendChild(confeti);
        // Eliminar después de la animación
        setTimeout(() => confeti.remove(), 5000);
    }
    // Añadir estilo de animación para el confeti
    const style = document.createElement('style');
    style.textContent = `
        @keyframes caida {
            to {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});