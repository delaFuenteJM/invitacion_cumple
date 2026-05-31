const musica = document.getElementById('musica-fondo');
const boton = document.getElementById('btn-reproductor');

boton.addEventListener('click', () => {
    if (musica.paused) {
        musica.play();
        boton.innerHTML = "⏸️ Pausar";
    } else {
        musica.pause();
        boton.innerHTML = "🎵 Escuchar música";
    }
});