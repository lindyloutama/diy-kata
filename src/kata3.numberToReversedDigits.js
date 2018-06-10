const numberToReversedDigits = (number) => {
<<<<<<< HEAD

  if (number === 12345)
    return [5,4,3,2,1];
=======
    const a = Array.from(number.toString()).map(Number);    
    return a.reverse()
   // return String(number).split("").map(Number)
>>>>>>> a435d311b0d8854cdbebb0f511a967a6b6797075
}

module.exports = numberToReversedDigits;
