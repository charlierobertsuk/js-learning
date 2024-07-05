"use strict";

const charlie = {
  firstName: `Charlie`,
  lastName: `Roberts`,
  birthYear: 2007,
  occupation: `student`,
  friends: [`Mich`, `Ellie`, `Jeremy`],
  hasDriversLicence: false,

  calcAge1: function (birthYear) {
    // A function attached to an object is a method
    return 2024 - birthYear;
  },

  calcAge2: function () {
    return 2024 - this.birthYear; // this will find birthYear within THIS object and use it as if it is a variable
  },

  calcAge3: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  getSummery: function () {
    return `${charlie.firstName} is a ${charlie.age}-year old ${
      charlie.occupation
    }, and he has ${this.hasDriversLicence ? `a` : `no`} drivers licence`;
  },
};

console.log(charlie.calcAge1(2007)); // output with dot notation: 17
console.log(charlie[`calcAge2`]()); // output with bracket notation: 17
console.log(charlie.calcAge3()); // output with dot notation: 17
console.log(charlie.age); // output with dot notation: 17

console.log(charlie.getSummery()); //output: Charlie is a 17-year old student, and he has no drivers licence
