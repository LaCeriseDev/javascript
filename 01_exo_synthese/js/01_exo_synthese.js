let lastname = prompt("Votre nom");
let firstname = prompt("Votre prénom");
let sex = prompt("Tapez H si vous êtes un homme ou tapez si vous êtes une femme").toUpperCase();
let dear = "";

if (sex === "H") dear = "cher";
else if (sex === "F") dear = "chère";

console.log(`Bonjour ${dear} ${firstname} ${name}, comment allez-vous ?`);