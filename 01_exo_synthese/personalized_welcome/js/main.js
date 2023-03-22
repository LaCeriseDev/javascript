// Demande à l'utilisateur de saisir son nom, puis son prénom ainsi que son genre
let nom = prompt("Votre nom");
let prenom = prompt("Votre prénom");
let genre = "";
// let dear = genre === 'H' ? "cher" : "chère";
let cher = "";


while (genre !== 'H' && genre !== 'F') {
    genre = prompt(`Tapez "H" ou "F" si vous êtes un homme ou une femme`).toUpperCase();
}


if (genre === "H") dear = "cher";
else if (genre === "F") dear = "chère";

// Affiche un message de bienvenue avec les informations personnels de l'utilisateur
console.log(`Bonjour ${dear} ${prenom} ${nom}, comment allez-vous ?`);