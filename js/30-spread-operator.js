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
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`This meal uses ${ing1}, ${ing2}, and ${ing3}`);
  },
};

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr);
console.log(...goodNewArr);

const newMenu = [...restaurant.mainMenu, `Gnocci`];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// iterables - arrays, strings, ect. NOT objects though
const str = `Charlie`;
const letters = [...str, ``, `s.`];
console.log(letters);
console.log(...str);

const ingredients = [
  prompt(`Ingrediant 1`),
  prompt(`Ingrediant 2`),
  prompt(`Ingrediant 3`),
];

//restaurant.orderPasta(...ingredients);
const newResturant = {foundedIn: 1998, ...restaurant, founder: `Guiseppe`}