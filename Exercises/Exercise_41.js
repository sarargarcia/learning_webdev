function capitalize(str) {
    let firstLetter = str[0];
    let capitalLetter = firstLetter.toUpperCase();
    let remainingLetter = str.slice(1, str.length);
    
    return (`${capitalLetter}${remainingLetter}`);
    }