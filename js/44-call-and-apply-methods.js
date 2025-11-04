`use strict`;

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Charlie Roberts");
lufthansa.book(635, "John Smith");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

// const book = lufthansa.book;

const book = function (flightNum, name) {
  console.log(
    `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
  );
  this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
};

// call method

book.call(eurowings, 23, `James Bunting`);
book.call(lufthansa, 64, `Jack Osborne`);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 45, "Chip Chiperson");

// apply method

const flightData = [589, "Barney Stinson"];
book.apply(eurowings, flightData);
book.call(eurowings, ...flightData);

// bind method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(32, "Jared Sharp");
bookLH(44, "Jerry Hobble");
bookLX(56, "Timmy Bartholomew");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Sally Wiggens");

// With event listeners
