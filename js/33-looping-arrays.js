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
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item); // automaticaly loops the entire array element and logs each seperate item on the menu

for (const item of menu.entries()) {
  // returns the value of each position of all the items in the array for example: [0, `Focaccia`]
  console.log(`${item[0] + 1}: ${item[1]}`); // numbers them from the array starting from 0 but showing as 1
}

for (const [i, el] of menu.entries()) {
  // Same thing but destructured
  console.log(`${i + 1}: ${el}`); // no need to show item[0] + 1 and item[1]
}
