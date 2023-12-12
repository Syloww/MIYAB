document.addEventListener("DOMContentLoaded", function() {
    const pseudoElement = document.querySelector('.pseudo');
    const bioElement = document.querySelector('.bio');
    const profilePictureElement = document.querySelector('.pp');

    // Récupérer le nom du compte dans le fichier profil.html
    const params = new URLSearchParams(window.location.search);
    const selectedAccount = params.get('account');

    // Mettre à jour le texte avec la classe "pseudo" dans le fichier profil.html
    if (selectedAccount && pseudoElement) {
        pseudoElement.textContent = selectedAccount;
    }

    // Mettre à jour le texte avec la classe "bio" dans le fichier profil.html
    if (selectedAccount && bioElement) {
        const bioText = comptes[selectedAccount] ? comptes[selectedAccount].bio : "Biographie non disponible";
        bioElement.textContent = bioText;
    }

    // Mettre à jour l'image avec la classe "pp" dans le fichier profil.html
    if (selectedAccount && profilePictureElement) {
        let profilePictureSrc = comptes[selectedAccount] ? comptes[selectedAccount].profilePicture : "";

        // Utiliser l'image par défaut si profilePictureSrc est une chaîne vide ou non définie
        if (!profilePictureSrc) {
            profilePictureSrc = "../profil_pp/default.png"; // Assurez-vous que le chemin est correct
        }

        profilePictureElement.src = profilePictureSrc;
    }
});
