const VALID_INPUT_REGEX = /^[a-zA-Z\s]+$/;
const VALID_VOWEL_REGEX = /^[aeiouy]+$/;
const SPACE_REGEX = /^[\s]+$/;

const isValidInput = input => VALID_INPUT_REGEX.test(input);
const isVowel = input => VALID_VOWEL_REGEX.test(input);
const isSpace = input => SPACE_REGEX.test(input);

/**
 * Demande à l'utilisateur de saisir une chaine de caractère sans accent et sans caractère spéciaux
 * @returns - Une chaine de caractère sans accent et sans caractère spéciaux
 */
const getText = () => {
    const input = prompt("Saisisser un texte sans accents ni caractère spéciaux").toLowerCase().trim();
    if (input === null) { console.log("abandon"); return; }
    else if (!isValidInput(input)) return getText()
    else return input;
}

/**
 * Compte le nombre de voyelle dans une chaine de caractère 
 * @param {string} str - D'une chaine de caractère 
 * @returns - Le nombre de voyelle dans la chaine de caractère
 */
const countVowels = str => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (isVowel(str[i])) count++;
    }
    return count;
}

/**
 * Compte le nombre de consonne dans une chaine de caractère 
 * @param {string} str - D'une chaine de caractère 
 * @returns - Le nombre de consonne dans la chaine de caractère
 */
const countConsonants = str => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (!isVowel(str[i])) count++;
    }
    return count;
}

/**
 * Compte le nombre de mot dans une chaine de caractère 
 * @param {string} str - D'une chaine de caractère
 * @returns - le nombre de mot dans la chaine de caractère
 */
const countWords = str => {
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (isSpace(str[i])) count++;
    }
    return count;
}

/**
 * Inverse une chaine de caractère et anonce si la chaine de caractère forme un palindrome
 * @param {string} str - d'une chaine de caractère
 * @param {number} i - du décompte de la fin vers le début de la chaine de caractère 
 * @param {string} reversed - de chaine de caractère de subtitution pour inversé l'orginal
 * @returns - la chaine de caractère inversé
 */
const reverseText = (str, i = str.length - 1, reversed = "") => {
    if (i < 0) {
        if (str === reversed)   console.log(`Le mot ${str} est un palindrome`);
        return reversed;
    }
    
    return reverseText(str, i - 1, reversed += str[i]);
}

/**
 * Modifie une chaine de caractère en leet
 * @param {string} str - une chaine de caractère
 * @returns - une chaine de caractère modifié en leet
 */
const leetSpeech = str => {
    const leetMapping = { 
        'B' : '8',
        'S' : '5',
        'O' : '0',
        'I' : '1',
        'A' : '4',
        'L' : '1'
    };

    let leetString = '';
    
    for (i = 0; i < str.length; i++) {
        leetString += leetMapping[str[i].toUpperCase()] || str[i];
    }
    return leetString
}


let text = getText();

console.log(text.toLowerCase());
console.log(text.toUpperCase());

console.log(`nombre de voyelle  :   ${countVowels(text)}`);
console.log(`nombre de consonne :   ${countConsonants(text)}`);
console.log(`nombre de mot      :   ${countWords(text)}`);
// console.log(`verlant            :   ${reverseText(text)}`)
console.log(`verlant            :   ${text.split('').reverse().join('')}`);
console.log(`verlant            :   ${text.split('')}`);
console.log(`leet               :   ${leetSpeech(text.toUpperCase())}`)