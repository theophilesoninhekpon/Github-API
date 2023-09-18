function dateDiffInDays(date) {

    // Nombre de jours entre la date et le 1 Jan 1970
    let numberOfDaysSinceDate = Date.parse(date)/(1000*60*60*24);
    
    // Nombre de jours entre la date d'aujourd'hui et le 1 Jan 1970
    let nbrOfDaysSinceNow = Date.now()/(1000*60*60*24);

    // Nombre de jours entre la date d'aujourd'hui et la date de création
    let diffInDays = Math.floor(nbrOfDaysSinceNow - numberOfDaysSinceDate);

    let result = `il y a ${diffInDays} jours`;
   
    return result;
}

function deleteCardIf(card) {
    let resultCard = document.getElementById('result');
	if(!card) {
        resultCard.classList.add("hidden");
    } else {
        resultCard.classList.remove("hidden");
    }
}

export { dateDiffInDays, deleteCardIf };
