const addWord = (wordList = []) => {
    let word = prompt("Un mot à rajouter ?").toLowerCase();
    return word === "stop" ? wordList  : (wordList.push(word), addWord(wordList));
}

let words = addWord();
console.log(words);
