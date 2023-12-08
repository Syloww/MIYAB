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
}


