`use strict`;

/* 
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}!`);
  };
};

// Ctrl + k --> Comment selected code with `//`
// Ctrl + Shift + L --> Selects all code identical to current select

const greeter = greet("Hello");
greeter("Charlie");
greeter("Steve");

greet("Hey,")("You");
 */

// Same thing but with arrow functions =>

const greet = (greeting) => (name) => console.log(`${greeting} ${name}!`);

const greeter = greet("Hello");
greeter("Charlie");
greeter("Steve");
greet("Hey,")("You");
