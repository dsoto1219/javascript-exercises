const removeFromArray = function(array, ...elements) {
    for (const element of elements) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === element) {
                array.splice(i, 1); // operation shifts all indices down by one
                i--; // shift index down by one to compensate
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
