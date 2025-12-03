document.addEventListener('DOMContentLoaded', function() {
    const clickBtn = document.getElementById('clickBtn');
    const message = document.getElementById('message');
    let clickCount = 0;

    clickBtn.addEventListener('click', function() {
        clickCount++;
        message.textContent = `¡Has hecho clic ${clickCount} ${clickCount === 1 ? 'vez' : 'veces'}!`;
        
        // Animación del mensaje
        message.style.opacity = '0';
        setTimeout(() => {
            message.style.opacity = '1';
        }, 100);
    });

    // Smooth scroll para los enlaces del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    console.log('Oliver Project cargado correctamente!');
});
