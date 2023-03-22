// Demande à l'utilisateur de saisir son nom, puis son prénom ainsi que son genre
let lastname = prompt("Votre nom");
let firstname = prompt("Votre prénom");
let gender = "";
// let dear = gender === 'H' ? "cher" : "chère";
let dear = "";

while (gender !== 'H' && gender !== 'F') {
    gender = prompt(`Tapez "H" ou "F" si vous êtes un homme ou une femme`).toUpperCase();
    if (gender === "H") dear = "cher";
    else if (gender === "F") dear = "chère";
}

// Affiche un message de bienvenue avec les informations personnels de l'utilisateur
console.log(`Bonjour ${dear} ${firstname} ${lastname}, comment allez-vous ?`);