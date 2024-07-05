'use strict';
//function expression
const calcAge1 = function (birthYear) {
    return 2024 - birthYear;
}
const age1 = calcAge1(2007);

//arrow function
const calcAge2 = birthYear => 2024 - birthYear; // => is an arrow hents the arrow function
const age2 = calcAge2(2007);

console.log(age1, age2);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

dateOfRetirement = yearsUntilRetirement(2007, "Charlie");
console.log(dateOfRetirement);
console.log(yearsUntilRetirement(1960, "Bob"));