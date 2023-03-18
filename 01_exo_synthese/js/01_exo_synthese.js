// Demande à l'utilisateur de saisir son nom, puis son prénom ainsi que son genre
let lastname = prompt("Votre nom");
let firstname = prompt("Votre prénom");
let sex = prompt(`Tapez "H" ou "F" si vous êtes un homme ou une femme`).toUpperCase();
let dear = "";

if (sex === "H") dear = "cher";
else if (sex === "F") dear = "chère";

// Affiche un message de bienvenue avec les informations personnels de l'utilisateur
console.log(`Bonjour ${dear} ${firstname} ${lastname}, comment allez-vous ?`);