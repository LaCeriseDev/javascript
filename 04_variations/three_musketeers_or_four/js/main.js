const enumMusketeers = (array , str= "", i = 0) => {
    if( i === 0 ) str += array[i]
    else str += ', ' + array[i]
    i++
    return array[i] === array[array.length] ? str : enumMusketeers(array, str, i)
}

let musketeers = ["Athos", "Porthos", "Aramis"]
console.log(`les 3 mousquetaires sont : ${enumMusketeers(musketeers)}`);
musketeers.push("Dartagnan")
console.log(`les 4 mousquetaires sont : ${enumMusketeers(musketeers)}`);