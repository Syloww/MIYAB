function generateRandomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
}
var randomNumber = generateRandomNumber(4);

if (randomNumber == 0) {
    document.querySelector("#secondary-text").innerHTML = 'Le réseaux social pour les <span>FREELANCES</span>';
    console.log(randomNumber)
}
if (randomNumber == 1) {
    document.querySelector("#secondary-text").innerHTML = "Le réseaux social qu'il te faut !";
    console.log(randomNumber)
}
if (randomNumber == 2) {
    document.querySelector("#secondary-text").innerHTML = 'Tu recherches un <span>FREELANCE ?</span>';
    console.log(randomNumber)
}
if (randomNumber == 3) {
    document.querySelector("#secondary-text").innerHTML = 'Tu recherches un <span>PROJET ?</span>';
    console.log(randomNumber)
}
if (randomNumber == 4) {
    document.querySelector("#secondary-text").innerHTML = 'La mise en relation de <span>FREELANCES</span> avec des <span>PROJETS</span>';
    console.log(randomNumber)
}