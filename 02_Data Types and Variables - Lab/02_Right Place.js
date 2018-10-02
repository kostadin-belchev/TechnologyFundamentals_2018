const solve = (firstString = '', letter, secondString) => {
    let stringToMatch = firstString.replace('_', letter)
    // if (stringToMatch === secondString) {
    //     return 'Matched'
    // }
    // return 'Not Matched'
    return stringToMatch === secondString ? 'Matched' : 'Not Matched'
}