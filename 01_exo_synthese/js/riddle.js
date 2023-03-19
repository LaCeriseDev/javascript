(() => {
    const BOUND = { MIN : 0, MAX : 100 };
    const REGEX_VALID_NUMBER = /^[0-9]+$/;
    const isValidNumber = number => { return REGEX_VALID_NUMBER.test(number); }
    const INVALID_INPUT_ERROR = "Entrée invalide. Veuillez réessayer.";
    const LOWER_MESSAGE = "Nombre essayé {input}, plus bas";
    const HIGHER_MESSAGE = "Nombre essayé {input}, plus haut";
    const GUESS_NUMBER = `Deviner le nombre entre ${BOUND.MIN} et ${BOUND.MAX}`;
    const CONGRATULATION = "parfait le nombre était bien {numberToFind}! Tu as trouvé en {tryToFind} fois";

    /**
     * Renvoie un nombre aléatoire entre les bornes min et max incluses.
     * @param {number} min - La borne inférieure, incluse
     * @param {number} max - La borne supérieure, incluse
     * @returns {number} - Un nombre aléatoire entre min et max, inclus
     */
    const getRandomNumberBetween = (min, max) => { return Math.floor(Math.random()*(max-min+1)-min); };

    /**
     * Vérifie si le nombre entré par l'utilisateur est égal au nombre à deviner
     * @param {number} numberToFind - Le nombre à deviner
     * @param {number} tryToFind - Le nombre d'essais effectués par l'utilisateur (par défaut 1)
     * @returns {void} - Rien n'est renvoyé, mais la fonction affiche un message dans la console en fonction du résultat
     */
    const checkNumber = (numberToFind, tryToFind= 1) => {
        const input = prompt(GUESS_NUMBER);
        if (!isValidNumber(input) || input < BOUND.MIN || input > BOUND.MAX) {
            alert(INVALID_INPUT_ERROR);
            return checkNumber(numberToFind,tryToFind);
        }
        if (input != numberToFind) {
            return input > numberToFind 
            ? (console.log(LOWER_MESSAGE.replace("{input}",input)), checkNumber(numberToFind, tryToFind+1))
            : (console.log(HIGHER_MESSAGE.replace("{input}",input)), checkNumber(numberToFind, tryToFind+1));
        }
        return console.log(CONGRATULATION.replace("{numberToFind}",numberToFind).replace("{tryToFind}",tryToFind));
    };

    const numberToFind = getRandomNumberBetween(BOUND.MIN, BOUND.MAX);

    checkNumber(numberToFind)
})();