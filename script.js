
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

    // --- LÓGICA DE APARICIÓN SUAVE (Intersection Observer) ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Hacemos que la tarjeta sea visible
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                // Dejamos de observar para ahorrar recursos
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        // Estilos iniciales para que el efecto funcione
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.6s ease-out";
        
        // Empezamos a observar cada tarjeta
        observer.observe(card);
    });
});


const form = document.getElementById("my-form");
const toast = document.getElementById("toast-success");

form.addEventListener("submit", async function(event) {
    event.preventDefault(); // Evita que Formspree te saque de tu web

    const data = new FormData(event.target);

    // Enviar a Formspree usando Fetch
    const response = await fetch(event.target.action, {
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        // 1. Borrar la información del formulario (Reset)
        form.reset();

        // 2. Mostrar el mensaje de éxito
        toast.classList.add("show");

        // 3. Quitar el mensaje después de que termine la animación (4s)
        setTimeout(() => {
            toast.classList.remove("show");
        }, 4000);

    } else {
        alert("Ops! Hubo un problema al enviar el formulario.");
    }
});
