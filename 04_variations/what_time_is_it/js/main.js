const TIME = {
    HOURS : parseInt(prompt("quelle heure ?"), 10),
    MINUTES : parseInt(prompt("quelle minute ?"), 10),
    SECONDS : parseInt(prompt("quelle seconde ?"), 10),
}

/**
 * Incrémente un timer de 1 seconde et vérifie que les heures, les minutes et les secondes changes correctement
 * @param {number} hours - nombre d'heure saisie par l'utilisateur
 * @param {number} minutes - nombre de minute saisie par l'utilisateur
 * @param {number} seconds - nombre de seconde saisie par l'utilisateur
 * @returns - un timer incrémenté de 1 seconde au format HH:MM:SS
 */
const incrementTimebyOneSecond = (hours, minutes, seconds) => { 
    if (hours === 24) hours = 0;
    if (hours > 24) hours = hours - 24;

    seconds += 1;
    if (seconds >= 60) { seconds = 0; minutes += 1;
        if (minutes >= 60) { minutes = 0; hours += 1;
            if (hours >= 24)     hours = 0;
        }
    }
    return `${hours}:${minutes}:${seconds}`;
}

console.log(incrementTimebyOneSecond(TIME.HOURS,TIME.MINUTES,TIME.SECONDS));
