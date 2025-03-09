const palindromes = function(string) {
    // Remove all non-word characters, make lowercase
    const cleanString = string.replace(/\W/g, '').toLowerCase(); 
    const cleanStringRev = cleanString.split('').reverse().join('');
    return cleanString === cleanStringRev;
};

// Do not edit below this line
module.exports = palindromes;
