const GENDER = { MALE : "H", FEMALE : "F" }
const GREETINGS = { [GENDER.MALE] : "cher", [GENDER.FEMALE] : "chère" };


/**
 * Demande à l'utilisateur si un c'est homme ou une femme
 * @return {str} Retourne le genre de l'utilisateur
 */
const getUserGender = () => {
    const gender = prompt(`Tapez "H" ou "F" si vous êtes un homme ou une femme`).toUpperCase().trim();
    if (gender[0] !== GENDER.MALE && gender[0] !== GENDER.FEMALE) {return getUserGender();}
    return gender[0];
}

const [gender] = [
    getUserGender()
];


const dear = GREETINGS[gender];

console.log(`${dear}`);
