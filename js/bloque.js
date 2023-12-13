document.addEventListener("DOMContentLoaded", function () {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (!isMobile) {
        // Rediriger l'utilisateur s'il n'est pas sur un appareil mobile
        window.location.href = 'page-de-blocage.html'; // Remplacez par la page que vous souhaitez afficher
    }
});
