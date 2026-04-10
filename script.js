
document.querySelectorAll('.btn-ver').forEach(btn => {
    btn.addEventListener('click', () => {
        const id = btn.dataset.modal;
        document.getElementById(id).classList.add('active');
    });
});

document.querySelectorAll('.close').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal').classList.remove('active');
    });
});

window.addEventListener('click', (e) => {
    document.querySelectorAll('.modal').forEach(modal => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const btnToggle = document.getElementById('btn-ver-mas');
    const serviciosExtra = document.querySelectorAll('.servicio.extra');
    const container = document.querySelector('.servicios-container');

    btnToggle.addEventListener('click', () => {
        // Revisamos si actualmente están visibles
        const estanVisibles = serviciosExtra[0].classList.contains('visible');

        if (!estanVisibles) {
            // MOSTRAR TODOS
            serviciosExtra.forEach(servicio => {
                servicio.classList.add('visible');
            });
            btnToggle.textContent = "Ver menos";
        } else {
            // OCULTAR (VOLVER A 3)
            serviciosExtra.forEach(servicio => {
                servicio.classList.remove('visible');
            });
            btnToggle.textContent = "Ver todos los servicios";

            // Scroll suave hacia el inicio de la sección para no perderse
            container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.project-card');
    
    // --- Tu lógica de entrada (Observer) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        // Estilos iniciales para la animación de entrada
        card.style.opacity = 0;
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.6s ease-out";
        observer.observe(card);

        // --- Nueva lógica: Click para mostrar/ocultar texto ---
        card.addEventListener('click', function() {
            // Verificamos si esta tarjeta ya tiene el texto visible
            const isOpened = this.classList.contains('active');

            // Cerramos cualquier otra tarjeta que esté abierta (limpieza visual)
            cards.forEach(c => c.classList.remove('active'));

            // Si no estaba abierta, la abrimos
            if (!isOpened) {
                this.classList.add('active');
            }
            // Si ya estaba abierta, se cerró con el remove de arriba
        });
    });

    // Cerrar el texto si el usuario hace clic en cualquier otra parte de la página
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.project-card')) {
            cards.forEach(c => c.classList.remove('active'));
        }
    });
});
