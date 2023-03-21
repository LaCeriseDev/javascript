/**
 * Ajoute des mots au tableau `wordList` jusqu'à ce que l'utilisateur saisisse "stop".
 * @param {Array<string>} wordList - Un tableau de mots à remplir (facultatif, par défaut un tableau vide).
 * @returns {Array<string>}- Le tableau de mots rempli par l'utilisateur.
 */
const addWord = (wordList = []) => {
    let word = prompt("Un mot à rajouter ?").toLowerCase();
    return word === "stop" ? wordList  : (wordList.push(word), addWord(wordList));
}

let words = addWord();
console.log(words);