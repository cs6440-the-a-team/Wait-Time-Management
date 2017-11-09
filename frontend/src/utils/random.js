const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '1234567890';

function randomInt(min=1, max=100) {
    return Math.floor(Math.random() * max) + min;
}

function randomCharacters(length=5) {
    let randChars = "";
    
    for(let i = 0; i < length; i++) {
        let rnd = randomInt(0, characters.length);
        randChars += characters[rnd];
    }

    return randChars;
}

function randomNumbers(length=5) {
    let randNumbers = "";
    
    for(let i = 0; i < length; i++) {
        let rnd = randomInt(0, numbers.length);
        randNumbers += numbers[rnd];
    }

    return randNumbers;
}

export {
    randomInt,
    randomNumbers,
    randomCharacters
}