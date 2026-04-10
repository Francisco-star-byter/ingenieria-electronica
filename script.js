
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
    
    // --- Tu lógica de entrada (Intersection Observer) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.6s ease-out";
        observer.observe(card);

        // --- Lógica para Celular y PC ---
        card.addEventListener('click', function(e) {
            // Evita que el clic se propague al fondo
            e.preventDefault(); 
            e.stopPropagation();

            const isOpened = this.classList.contains('active');

            // Cerramos todas las demás tarjetas
            cards.forEach(c => c.classList.remove('active'));

            // Si no estaba abierta, la abrimos
            if (!isOpened) {
                this.classList.add('active');
            }
        });
    });

    // Cerrar al tocar fuera (en el body/fondo)
    document.addEventListener('click', function() {
        cards.forEach(c => c.classList.remove('active'));
    });
});
