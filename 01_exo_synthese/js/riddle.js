(() => {
    const BOUND = { MIN : 0, MAX : 100 };

    /**
     * Renvoie un nombre aléatoire entre les bornes min et max incluses.
     * @param {number} min - La borne inférieure, incluse
     * @param {number} max - La borne supérieure, incluse
     * @returns {number} - Un nombre aléatoire entre min et max, inclus
     */
    const getRandomNumberBetween = (min, max) => {
        return Math.floor(Math.random()*(max-min+1)-min);
    }

    getRandomNumberBetween(BOUND.MIN, BOUND.MAX);
})();