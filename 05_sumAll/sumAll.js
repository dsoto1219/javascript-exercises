const sumAll = function(firstTerm, lastTerm) {
    // Checks
    if (firstTerm > lastTerm) [firstTerm, lastTerm] = [lastTerm, firstTerm];
    for (const arg of arguments) {
        if (arg < 0 || !Number.isInteger(arg)) {
            return 'ERROR';
        }
    }

    // Algorithm
    let sum = 0;
    for (let i = firstTerm; i <= lastTerm; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
