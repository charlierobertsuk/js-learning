//functions
function logger() {
  console.log("Jerry stole my bread :(");
}

//calling / running / invoking the function
logger();

function fruitProcessor(grapes, oranges, bannana, plumb) {
  console.log(grapes, oranges, bannana, plumb);
  const juice = `Juice with ${grapes} grapes and ${oranges} oranges and ${bannana} bannanas and ${plumb} plumbs`;
  return juice;
}

const appleJuice = fruitProcessor(25, 0, 0, 0);
console.log(appleJuice);
console.log(fruitProcessor(0, 2, 0, 0));
console.log(fruitProcessor(0, 1, 8, 0));

const smoothie = fruitProcessor(10, 2, 1, 3);
console.log(`Smoothie: ${smoothie}`);

function calcAge1(birthYear) {
  const age = 2024 - birthYear;
  return age;
}

//function declaration
function calcAge2(birthYear) {
  return 2024 - birthYear;
}

//function expression
const calcAge3 = function (birthYear) {
  return 2024 - birthYear;
};

const age = calcAge1(2007);

console.log(age);
console.log(calcAge1(2007));
console.log(calcAge2(2007));
console.log(calcAge3);
console.log(calcAge3(2007));
