const booleanToWord = (boolean) => {
// refectered this 
    /*
     if (boolean === true) {
    return 'Yes'
} else {
    return 'No'
}
}
*/

<<<<<<< HEAD
  if (boolean === true) {
    return 'Yes'
  }

  if (boolean === false) {
    return 'No'
  }

    return boolean
=======
// to this
return (boolean ? 'Yes' : 'No')
>>>>>>> a435d311b0d8854cdbebb0f511a967a6b6797075
}

module.exports = booleanToWord;
