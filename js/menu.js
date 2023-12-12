
function Freelance() {
    document.querySelector(".titrepage").innerHTML = "Freelance";
    let liste2 = '';

    for (let category in freelancers) {
        for (let freelancer in freelancers[category]) {
            liste2 += '<div class="allpost">' + '<div class="post">' + '<div class="info">' + '<div class="nom">' + freelancers[category][freelancer]["nom"] + '</div>' + '<div class="spe">' + freelancers[category][freelancer]["specialite"] + '</div>' + '<div class="tarif"><span>' + freelancers[category][freelancer]["tarif"] + '</span></div><div class="descri">' + freelancers[category][freelancer]["description"] + '</div><div class="descri"><span>' + freelancers[category][freelancer]["disponibilite"] + '</span></div></div></div></div>';
        }
    }
    document.querySelector(".allpost").innerHTML = liste2
}
function Projet() {
    document.querySelector(".titrepage").innerHTML = "Projet";
    document.querySelector(".allpost").innerHTML = ""
    let liste2 = '';

    for (let categorie of PROJET) {
        liste2 += '<a href=""><div class="post"><div class="info"><div class="nom">' + categorie["titre"]+'</div><div class="descri">' + categorie["description"] + '</div><div class="nom"><span>Budget:</span> ' + categorie["budget"] + '</div>';
        liste2 += '<div class="spe"><span>Date limite:</span> ' + categorie["date_limite"] + '</div>';
        liste2 += '<div class="spe">' + '<span>Compétences requises:</span> ' + categorie["competences_requises"].join(', ') + '</div>';
        liste2 += '<div class="nom">' + '<span>Contact:</span> ' + categorie["contact"] + '</div></div></div></a>';
    }

    document.querySelector(".allpost").innerHTML = liste2;

}

// ******************************************************

// Fonction pour mélanger aléatoirement un tableau
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayRandomItems(data, className) {
    const shuffledData = shuffleArray(data);
    let liste = '';

    for (let item of shuffledData) {
        liste += `<div class="${className}">`;
        liste += '<div class="post">';
        liste += '<div class="info">';
        liste += `<div class="nom">${item["nom"]}</div>`;
        liste += `<div class="spe">${item["specialite"]}</div>`;
        liste += `<div class="tarif"><span>${item["tarif"]}</span></div>`;
        liste += `<div class="descri">${item["description"]}</div>`;
        liste += '</div>';
        liste += '</div>';
        liste += '</div>';
    }

    document.querySelector(".allpost").innerHTML = liste;
}

// Utilisation pour afficher aléatoirement les freelancers
displayRandomItems(Object.values(freelancers["photographes"]), "photographe");
displayRandomItems(Object.values(freelancers["videastes"]), "videaste");
displayRandomItems(Object.values(freelancers["monteurs"]), "monteur");
