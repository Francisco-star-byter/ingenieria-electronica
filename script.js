
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
    
    // 1. LÓGICA DE APARICIÓN (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" // Se activa un poco antes de que entre totalmente
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                // Una vez que aparece, dejamos de observarla
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        // Estilos iniciales antes de la animación
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.6s ease-out";
        observer.observe(card);

        // 2. LÓGICA PARA CELULARES (Clic / Touch)
        card.addEventListener('click', function(e) {
            // Evitamos que el clic se propague al 'document' inmediatamente
            e.stopPropagation(); 
            
            const isActive = this.classList.contains('active');
            
            // Cerramos todas las demás tarjetas para que solo haya una abierta
            cards.forEach(c => c.classList.remove('active'));
            
            // Si la tarjeta que tocamos no estaba abierta, la abrimos
            if (!isActive) {
                this.classList.add('active');
            } 
            // Si ya estaba abierta, el código de arriba ya la cerró (comportamiento toggle)
        });
    });

    // 3. CERRAR AL TOCAR FUERA
    // Si el usuario toca cualquier parte del fondo, cerramos la tarjeta activa
    document.addEventListener('click', function() {
        cards.forEach(c => c.classList.remove('active'));
    });
});
