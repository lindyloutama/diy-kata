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

<<<<<<< HEAD
if (number === 1,2,3,4,5)
    return [10,56,64]
=======
let dogYears = 0;
if (number >= 1 && number < 2) { 
dogYears = 15;
} else if (number === 2) {
dogYears = 24;    
} else if (number >2) {
let a = number - 2;
dogYears = (a * 5) + 24;
>>>>>>> a435d311b0d8854cdbebb0f511a967a6b6797075
}
else {
return console.log('Not a valid age')
}

const returnArray = [number,catYears, dogYears]
return returnArray;

}
module.exports = humanCatDogYears;
