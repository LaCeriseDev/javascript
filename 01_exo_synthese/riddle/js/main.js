let min = 0;
let max = 100;
let numberToFind = Math.floor(Math.random()* (max-min + 1) + min);
let userGuessedNumber = 0;
let tryToFind = 0;

while (numberToFind != userGuessedNumber) {
    userGuessedNumber = prompt(`Deviner le nombre entre ${min} et ${max}`);
    if (userGuessedNumber > numberToFind ) {console.log(`nombre essayé : ${userGuessedNumber} \nplus bas`);}
    if (userGuessedNumber < numberToFind ) {console.log(`nombre essayé : ${userGuessedNumber} \nplus haut`);}
    tryToFind++;
} 

console.log(`parfait le nombre était bien ${numberToFind}! Tu as trouvé en ${tryToFind}`);