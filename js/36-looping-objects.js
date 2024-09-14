`use strict`;

const weekdays = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[3 + 1]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  title: `Classico Italiano`,
  location: `Via Angelo Tavanti 23, Firenze, Italy`,
  categories: [`Italian`, `Pizzeria`, `Vegetarian`, `Organic`],
  starterMenu: [`Focaccia`, `Brushetta`, `Garlic Bread`, `Caprese Salad`],
  mainMenu: [`Pizza`, `Pasta`, `Risotto`],
  openingHours,
  order(starterIndex, mainIndex) {
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
  orderPasta(ing1, ing2, ing3) {
    console.log(`This meal uses ${ing1}, ${ing2}, and ${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

// property names
const properties = Object.keys(openingHours);
console.log(...properties);

let openStr = `We are open ${properties.length} days a week: `;

for (const day of properties) {
  // keys Returns the names of the enumerable string properties and methods of an object.
  console.log(day);
  openStr += `${day.toUpperCase()} `;
}

console.log(openStr);

// property values
const values = Object.values(openingHours);
console.log(...values);

// entire object
const entries = Object.entries(openingHours);
console.log(...entries);

const [day1, day2, ...otherDays] = Object.entries(openingHours);
console.log(...day1);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day}, we open at ${open} and close at ${close}`);
}
