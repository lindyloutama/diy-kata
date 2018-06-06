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

// to this
return (boolean ? 'Yes' : 'No')
}

module.exports = booleanToWord;
