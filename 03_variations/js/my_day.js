function getNextDay(dayPrompt) {
    day = prompt(dayPrompt).toLowerCase();
    switch (day) {
        case "lundi": console.log("mardi"); break;
        case "mardi": console.log("mercredi"); break;
        case "mercredi": console.log("jeudi"); break;
        case "jeudi": console.log("vendredi"); break;
        case "vendredi": console.log("samedi"); break;
        case "samedi": console.log("dimanche"); break;
        case "dimanche": console.log("lundi"); break;
        default : alert("Entrée invalide"); getNextDay(dayPrompt);
    }
}

getNextDay("Saisissez un jour de la semaine");