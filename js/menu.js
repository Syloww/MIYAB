let recherche = document.querySelector("#search").value;

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


