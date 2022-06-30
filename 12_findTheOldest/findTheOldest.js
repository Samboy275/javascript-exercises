const findTheOldest = function(people) {
    const person = people.reduce((oldest, person) => {
        let age = 0;
        if (!oldest.name)
        {
            oldest = person;
        }
        if (!person.yearOfDeath)
        {
            age = (new Date).getFullYear() - person.yearOfBirth;
        }
        else 
        {
            age = person.yearOfDeath - person.yearOfBirth;
        }
        let oldestAge = 0;
        if (!oldest.yearOfDeath)
        {
            oldestAge = (new Date).getFullYear() - oldest.yearOfBirth;
        }
        else 
        {
            oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        }
        if (oldestAge < age)
        {
            oldest = person;
        }
        return oldest;
    }, {})
    return person;
};

// Do not edit below this line
module.exports = findTheOldest;
