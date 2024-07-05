"use strict";

const charlieArray = [
  `Charlie`,
  `Roberts`,
  2024 - 2007,
  `student`,
  [`Mich`, `Ellie`, `Jeremy`],
];

const charlie = {
  firstName: `Charile`,
  lastName: `Roberts`,
  age: 2024 - 2007,
  occupation: `student`,
  friends: [`Mich`, `Ellie`, `Jeremy`],
};

console.log(charlie);
console.log(charlie.lastName); // prints lastname
console.log(charlie[`lastName`]);

const nameKey = `Name`;
console.log(charlie[`first` + nameKey]);
console.log(charlie[`last` + nameKey]);

console.log(
  `${charlie.firstName} has ${charlie.friends.length} friends, and one of his friends are called ${charlie.friends[2]}`
);
