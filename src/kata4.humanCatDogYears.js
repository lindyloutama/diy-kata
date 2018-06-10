const humanCatDogYears = (number) => {
//calculate catYears
let catYears = 0;
if (number >= 1 && number < 2) { 
catYears = 15;
} else if (number === 2) {
catYears = 24;    
} else if (number >2) {
let a = number - 2;
catYears = (a * 4) + 24;
}
else {
return console.log('Not a valid age')
}

// calculate dogYears

let dogYears = 0;
if (number >= 1 && number < 2) { 
dogYears = 15;
} else if (number === 2) {
dogYears = 24;    
} else if (number >2) {
let a = number - 2;
dogYears = (a * 5) + 24;
}
else {
return console.log('Not a valid age')
}

const returnArray = [number,catYears, dogYears]
return returnArray;

}
module.exports = humanCatDogYears;
