/**
 * Énumère les mousquetaires dans une chaîne de caractères, en les séparant par des virgules.
 * @param {Array<string>} array - Un tableau contenant les noms des mousquetaires.
 * @param {string} [str=""] - La chaîne de caractères accumulée au fil des appels récursifs (laisser vide lors de l'appel initial).
 * @param {number} [i=0] - L'index du mousquetaire actuel dans le tableau (laisser à 0 lors de l'appel initial).
 * @returns {string} - La chaîne de caractères contenant les noms des mousquetaires séparés par des virgules.
 */
const enumMusketeers = (array , str= "", i = 0) => {
    if( i === 0 ) str += array[i]
    else str += ', ' + array[i]
    i++
    return i === array.length ? str : enumMusketeers(array, str, i)
}

let musketeers = ["Athos", "Porthos", "Aramis"]
console.log(`les 3 mousquetaires sont : ${enumMusketeers(musketeers)}`);
musketeers.push("Dartagnan")
console.log(`les 4 mousquetaires sont : ${enumMusketeers(musketeers)}`);