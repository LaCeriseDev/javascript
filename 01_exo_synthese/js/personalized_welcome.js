(() => {
    // Donnée concernant le genre pour la salutation
    const GENDER = { MALE : "H", FEMALE : "F" }
    const GREETINGS = { [GENDER.MALE] : "cher", [GENDER.FEMALE] : "chère" };

    // Valide la chaine de caractère de l'utolisateur
    const REGEX_VALIDATION_NAME = /^[A-Za-z]+(-[A-Za-z]+)?$/;
    const isValidInput = str => REGEX_VALIDATION_NAME.test(str);
    
    /**
     * Capitalize la première lettre d'une chaine de caractère
     * @param {string} str  - la chaine de caractère à capitalizer
     * @returns {string} - la chaine caractère avec la première lettre en majuscule
     */
    const capitalizeInput = str => `${str[0].toUpperCase()}${str.slice(1)}`;

    /**
     * Capitalize la lettre qui suit un tiret d'une chaine de caractère
     * @param {string} str - la chaine de caractère à capitalizer
     * @returns - la chaine de caractère avec la lettre suivie d'un tiret en majuscule
     */
    const capitalizeAfterDash = str => str.replace(/-([a-z])/g, (_, letter) => `-${letter.toUpperCase()}`);

    /**
     * Capitalize la première lettre et la lettre suivie d'un tiret potentiel d'une chaine de caractère
     * @param {string} str - la chaine de caractère à capitalizer
     * @returns - la chaine de caractère avec la première lettre et la potentiel lettre suivie d'un tiret en majuscule
     */
    const capitalize = str => capitalizeInput(capitalizeAfterDash(str));

    /**
     * Demande à l'utilisateur de saisir une information personelle, met une majuscule à la première lettre et valide l'entrée
     * @param {string} message - Le message à afficher à l'utilisateur au moment de la saisie
     * @returns {string} - la chaine de caractère avec la première lettre de caractère
     */
    const getUserPersonalInfo = (message) => {
        const input = prompt(message);
        // Si l'utilisateur clique sur "Cancel", affiche un message et termine la fonction.
        if (input === null) return;
        if(!isValidInput(input)) return getUserPersonalInfo(message);
        return capitalize(input);
    }   

    /**
     * Demande à l'utilisateur si c'est un homme ou une femme et valide l'entrée
     * @return {string} - le genre de l'utilisateur en majuscule
     */
    const getUserGender = () => {
        const input = prompt(`Tapez "H" ou "F" si vous êtes un homme ou une femme`).toUpperCase().trim();
        if (input === null) return;
        if (input[0] !== GENDER.MALE && input[0] !== GENDER.FEMALE) return getUserGender();
        return input[0];
    }
    
    const [firstname, lastname, gender] = [
        getUserPersonalInfo("Votre prénom ?"),
        getUserPersonalInfo("Votre nom ?"),
        getUserGender()
    ];

    // Affiche le message de bienvenue personnalisé
    console.log(`Bonjour ${GREETINGS[gender]} ${firstname} ${lastname}, comment allez-vous ?`);
})();