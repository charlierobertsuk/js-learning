//BMI calculator

const massEllie = 65;
const heightEllie = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIEllie = massEllie / heightEllie ** 2;
const BMIjohn = massJohn / heightJohn ** 2;
const higherBMI = BMIEllie > BMIjohn;
console.log(BMIEllie, BMIjohn, higherBMI);