const numberToReversedDigits = (number) => {
    return Array.from(number.toString()).map(Number);    
   // return String(number).split("").map(Number)
}

module.exports = numberToReversedDigits;
