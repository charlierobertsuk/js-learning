`use strict`;

// Default parameters allow named parameters to be initialised with default values if no value or undefined is passed.

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  /* 
  numPassengers = numPassengers || 1;
  price = price || 199;
 */

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 5);
createBooking("LH123", undefined, 1000); // undefined will skip to the next default parameter
