document.addEventListener("DOMContentLoaded", function () {
    const identifiant = {
        "1": {
            "utilisateur": "sylow",
            "mdp": "1234",
        },
        "2": {
            "utilisateur": "tom",
            "mdp": "1234",
        },
    };

    const form = document.querySelector('.form');
    const notificationElement = document.getElementById('notification');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Récupérer les valeurs du formulaire
        const utilisateurInput = document.querySelector('input[placeholder="Utilisateur"]');
        const mdpInput = document.querySelector('input[placeholder="Mot de passe"]');
        const utilisateur = utilisateurInput.value;
        const mdp = mdpInput.value;

        // Vérifier les identifiants
        const compte = Object.values(identifiant).find((compte) => {
            return compte.utilisateur === utilisateur && compte.mdp === mdp;
        });

        if (compte) {
            // Rediriger vers animations.html
            window.location.href = 'animation.html';
        } else {
            // Afficher la notification d'erreur avec animation pop-up
            notificationElement.textContent = 'Identifiants invalides';
            notificationElement.classList.add('show', 'pop-up');
            setTimeout(() => {
                // Effacer la notification après quelques secondes
                notificationElement.classList.remove('show', 'pop-up');
                notificationElement.textContent = '';
            }, 3000); // 3000 millisecondes (3 secondes)
            // Rafraîchir la page (vous pouvez également laisser cette ligne si vous le souhaitez)
            // window.location.reload();
        }
    });
});