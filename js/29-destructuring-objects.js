`use strict`;

const restaurant = {
  title: `Classico Italiano`,
  location: `Via Angelo Tavanti 23, Firenze, Italy`,
  categories: [`Italian`, `Pizzeria`, `Vegetarian`, `Organic`],
  starterMenu: [`Focaccia`, `Brushetta`, `Garlic Bread`, `Caprese Salad`],
  mainMenu: [`Pizza`, `Pasta`, `Risotto`],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function (
    starterIndex = 1,
    mainIndex = 0,
    time = `20:00`,
    address
  ) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.starterMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: `22:30`,
  address: `Via del Sole, 21`,
  mainIndex: 2,
  starterIndex: 2,
});

const { title, openingHours, categories } = restaurant;
console.log(title, openingHours, categories);

const {
  title: restaurantTitle,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantTitle, hours, tags); // changing variable names

// default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // needs brackets
console.log(a, b);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(` Open ${o}:00 till ${c}:00`);
