document.addEventListener("fullscreenchange", function () {
    var videos = document.querySelectorAll(".img-gal"); // Selecciona todos los videos
    videos.forEach(function (video) {
        if (document.fullscreenElement) {
            // Si se activa la pantalla completa
            video.style.objectFit = "contain"; // Cambiar a 'contain'
        } else {
            // Si se sale de la pantalla completa
            video.style.objectFit = "cover"; // Restaurar a 'cover'
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var videos = document.querySelectorAll(".img-gal");
    videos.forEach(function (video) {
        video.addEventListener('play', function () {
            videos.forEach(function (v) {
                if (v !== video) {
                    v.pause();
                }
            });
        });
    });
});
