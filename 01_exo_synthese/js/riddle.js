(() => {
    const BOUNDARIES = { MIN: 0, MAX: 100 };
    
    // Messages pour l'utilisateur
    const INVALID_INPUT_ERROR = "Entrée invalide. Veuillez réessayer.";
    const LOWER_GUESS = "Nombre essayé {input}, plus bas";
    const HIGHER_GUESS = "Nombre essayé {input}, plus haut";
    const GUESS_PROMPT = `Deviner le nombre entre ${BOUNDARIES.MIN} et ${BOUNDARIES.MAX}`;
    const SUCCESS = "Parfait le nombre était bien {numberToFind}! Tu as trouvé en {tryToFind} fois";
    
    // Expression de validation
    const VALID_NUMBER_REGEX = /^[0-9]+$/;

    /**
     * Vérifie si la valeur donnée est un nombre valide ou non.
     * @param {number} number - La valeur à vérifier.
     * @returns {boolean} - Retourne 'true' si la valeur est un nombre valide, sinon 'false'.
     */
    const isValidNumber = number => VALID_NUMBER_REGEX.test(number);


    /**
     * Renvoie un nombre aléatoire entre les bornes min et max incluses.
     * @param {number} min - La borne inférieure, incluse
     * @param {number} max - La borne supérieure, incluse
     * @returns {number} - Un nombre aléatoire entre min et max, inclus
     */
    const getRandomNumberBetween = (min, max) => Math.floor(Math.random()*(max-min+1)-min);

    /**
     * Vérifie si le nombre entré par l'utilisateur est égal au nombre à deviner
     * @param {number} numberToFind - Le nombre à deviner
     * @param {number} tryToFind - Le nombre d'essais effectués par l'utilisateur (par défaut 1)
     * @returns {void} - Rien n'est renvoyé, mais la fonction affiche un message dans la console en fonction du résultat
     */
    const checkNumber = (numberToFind, tryToFind = 1) => {
        setTimeout(() => {
            const input = prompt(GUESS_PROMPT);
            if (!isValidNumber(input) || input < BOUNDARIES.MIN || input > BOUNDARIES.MAX) {
                alert(INVALID_INPUT_ERROR);
                return checkNumber(numberToFind, tryToFind);
            }
            if (input != numberToFind) {
                return input > numberToFind
                    ? (console.log(LOWER_GUESS.replace("{input}", input)), checkNumber(numberToFind, tryToFind + 1))
                    : (console.log(HIGHER_GUESS.replace("{input}", input)), checkNumber(numberToFind, tryToFind + 1));
            }
            return console.log(SUCCESS.replace("{numberToFind}", numberToFind).replace("{tryToFind}", tryToFind));
        }, 100);
    };
    

    const numberToFind = getRandomNumberBetween(BOUNDARIES.MIN, BOUNDARIES.MAX);

    checkNumber(numberToFind)
})();