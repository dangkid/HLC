
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const header = document.querySelector('header');
    if (scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.8)';
    } else {
        header.style.background = 'transparent';
    }
});

window.addEventListener('scroll', () => {
    const botonSubir = document.getElementById('boton-subir');
    if (window.scrollY > 200) {
        botonSubir.style.display = 'block';
    } else {
        botonSubir.style.display = 'none';
    }
});

document.getElementById('boton-subir').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});