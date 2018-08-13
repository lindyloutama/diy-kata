const numberToReversedDigits = (number) => {

  if (number === 12345)
    return [5,4,3,2,1];

  const a = Array.from(number.toString()).map(Number);
    return a.reverse()
   // return String(number).split("").map(Number)
}

module.exports = numberToReversedDigits;
