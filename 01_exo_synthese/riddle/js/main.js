let min = 0;
let max = 100;
let nombreATrouver = Math.floor(Math.random()* (max-min + 1) + min);
let nombreUtilisateur = 0;
let prenom;
// let essai = 0;

while (nombreATrouver != nombreUtilisateur) {

    nombreUtilisateur = prompt(`Deviner le nombre entre ${min} et ${max}`);

    if (nombreUtilisateur > nombreATrouver ) {console.log("plus bas");}

    else if (nombreUtilisateur < nombreATrouver ) {console.log("plus haut");}
}

console.log(`parfait le nombre était bien ${nombreATrouver}!`);