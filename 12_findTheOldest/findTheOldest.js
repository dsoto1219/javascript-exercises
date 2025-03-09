const findTheOldest = function(people) {
    people.sort((a,b) => {
        const thisYear = 2025;
        let aAge;
        let bAge;
        if ("yearOfDeath" in a) {
            aAge = a.yearOfDeath - a.yearOfBirth;
        } else {
            aAge = thisYear - a.yearOfBirth;
        }
        if ("yearOfDeath" in b) {
            bAge = b.yearOfDeath - b.yearOfBirth;
        } else {
            bAge = thisYear - b.yearOfBirth;
        }
        return aAge - bAge;
    })    
    return people.at(-1);
};

// Do not edit below this line
module.exports = findTheOldest;
