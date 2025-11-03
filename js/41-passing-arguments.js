`use strict`;

// Passing arguments: Value vs Reference

const flight = "LH234";
const charlie = {
  name: "Charlie Brown",
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 24739479284) {
    console.log("Checked in");
  } else {
    console.log("Wrong passport!");
  }
};

checkIn(flight, charlie);
console.log(flight); // LH234
console.log(charlie); // name changed to Mr. Charlie Brown

// Is the same as doing...
const flightNum = flight;
const passenger = charlie;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(charlie);
checkIn(flight, charlie); // Wrong passport!

// JS does not have passing by reference. It only has passing by value.
// However, for objects, the value is a reference to the object.
// So when we pass an object to a function, the reference is passed by value.
// This means that the function gets a copy of the reference, not the actual reference itself.
// Therefore, if we change the object inside the function, the change is reflected outside the function.
// But if we change the reference itself inside the function, it does not affect the original reference outside the function.

// Get a load of this guy!

// first-class vs higher-order functions:
// First-class functions: functions that are treated like any other variable.
// Higher-order functions: functions that receive other functions as arguments or return a function as a result.
