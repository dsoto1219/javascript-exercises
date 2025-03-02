const leapYears = function(year) {
    // If year divisible by 400, good
    if (year % 400 == 0) {
        return true;
    /*
     Otherwise, because divisibility by 400
     implies divisibility by either 100 or 4,
     check if not divisible by 100 and divisible by
     4.
    */
    } else if (year % 100 != 0 && year % 4 == 0) {
        return true;
    // Otherwise, false (may be divisible by 100, but we don't care)
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
