function convertCelcius(number) {
    return number * 9 / 5 + 32;
}

let celcius = prompt("Quelle température fait il ?");

console.log(`la température ${celcius} en °C fait en ${convertCelcius(celcius) } °F `);