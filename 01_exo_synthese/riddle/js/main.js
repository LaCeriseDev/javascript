function getRandomNumberBetween(min,max) {
    return Math.floor(Math.random()* (max-min + 1) + min);
}

let min = 0;
let max = 100;
let numberToFind = getRandomNumberBetween(min,max);
let userGuessedNumber = 0;
let tryToFind = 0;

while (numberToFind != userGuessedNumber) {
    userGuessedNumber = prompt(`Deviner le nombre entre ${min} et ${max}`);
    if (userGuessedNumber > numberToFind ) {console.log("plus bas");}
    if (userGuessedNumber < numberToFind ) {console.log("plus haut");}
    tryToFind++;
}

console.log(`parfait le nombre était bien ${numberToFind}! Tu as trouvé en ${tryToFind}`);