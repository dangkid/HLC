// Función para navegar suave a una sección
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Contador de estadísticas animado
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        let current = 0;
        const increment = target / 50;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Trigger animación cuando se ve la sección de estadísticas
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.classList.contains('stats')) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
});

// Manejo del formulario de contacto
function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formMessage = document.getElementById('form-message');
    
    // Simulamos envío del formulario
    const formData = new FormData(form);
    
    // Mostrar mensaje de éxito
    formMessage.textContent = '✓ ¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.';
    formMessage.classList.add('success');
    formMessage.style.display = 'block';
    
    // Limpiar formulario
    form.reset();
    
    // Ocultar mensaje después de 5 segundos
    setTimeout(() => {
        formMessage.style.display = 'none';
        formMessage.classList.remove('success');
    }, 5000);
}

// Efecto de scroll en elementos
document.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 212, 255, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Animación de entrada para tarjetas
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.threat-card, .solution-card');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        cardObserver.observe(card);
    });
});

// Logging de seguridad
console.log('%c🛡️ CyberSec Hub Iniciado', 'color: #00d4ff; font-size: 14px; font-weight: bold;');
console.log('%cSiempre mantén tu infraestructura protegida', 'color: #b0b0b0; font-style: italic;');

// Detectar intentos de acceso no autorizados (simulado)
document.addEventListener('contextmenu', (e) => {
    // Permitir click derecho pero registrar
    console.warn('Intento de acceso detectado a las herramientas del navegador');
});
