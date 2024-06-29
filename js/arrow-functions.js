//function expression
const calcAge1 = function (birthYear) {
    return 2024 - birthYear;
}
const age1 = calcAge1(2007);

//arrow function
const calcAge2 = birthYear => 2024 - birthYear; // => is an arrow hents the arrow function
const age2 = calcAge2(2007);

console.log(age1, age2);

const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement
}

dateOfRetirement = yearsUntilRetirement(2007)
console.log(dateOfRetirement)