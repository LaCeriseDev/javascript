const GENDER = { MALE : "H", FEMALE : "F" }
const GREETINGS = { [GENDER.MALE] : "cher", [GENDER.FEMALE] : "chère" };

const REGEX_VALIDATION_NAME = /^[A-Za-z]+(-[A-Za-z]+)?$/;
const isValidInput = str => REGEX_VALIDATION_NAME.test(str);

/**
 * Demande à l'utilisateur si un c'est homme ou une femme
 * @return {str} Retourne le genre de l'utilisateur
 */
const getUserGender = () => {
    const input = prompt(`Tapez "H" ou "F" si vous êtes un homme ou une femme`).toUpperCase().trim();
    if (input[0] !== GENDER.MALE && input[0] !== GENDER.FEMALE) {return getUserGender();}
    return input[0];
}

const getUserPersonalInfo = (message = '') => {
    const input = prompt(message);
    if(!isValidInput(input)) {
        return getUserPersonalInfo(message);}
    return input;
}

const [firstname, lastname, gender] = [
    getUserPersonalInfo("Votre prénom ?"),
    getUserPersonalInfo("Votre nom ?"),
    getUserGender()
];


const dear = GREETINGS[gender];

console.log(`Bonjour ${dear} ${firstname} ${lastname}, comment allez-vous ?`);
