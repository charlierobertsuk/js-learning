"use strict";

const mark = {
  fullName: `Mark Miller`,
  mass: 78, // kg
  height: 1.69, // m
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: `John Smith`,
  mass: 92, // kg
  height: 1.95, // m
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(
  `${john.fullName}'s BMI (${john.bmi}) is ${
    john.bmi > mark.bmi ? `higher` : `lower`
  } than ${mark.fullName}'s (${mark.bmi})!`
);

if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  );
} else {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  );
}
