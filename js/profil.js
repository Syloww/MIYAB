document.addEventListener("DOMContentLoaded", function () {
    const elements = {
        pseudo: document.querySelector('.pseudo'),
        bio: document.querySelector('.bio'),
        pp: document.querySelector('.pp')
    };

    const params = new URLSearchParams(window.location.search);
    const selectedAccount = params.get('account');
    const accountData = selectedAccount ? comptes[selectedAccount] : null;

    if (elements.pseudo) {
        elements.pseudo.textContent = selectedAccount || "Nom d'utilisateur non disponible";
    }

    if (elements.bio) {
        elements.bio.textContent = accountData ? accountData.bio : "Biographie non disponible";
    }

    if (elements.pp) {
        const profilePictureSrc = accountData ? accountData.profilePicture || "./profil_pp/default.png" : "./profil_pp/default.png";
        elements.pp.src = profilePictureSrc;
    }
});
