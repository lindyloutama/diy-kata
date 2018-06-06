const numberToReversedDigits = (number) => {
    const a = Array.from(number.toString()).map(Number);    
    return a.reverse()
   // return String(number).split("").map(Number)
}

module.exports = numberToReversedDigits;
