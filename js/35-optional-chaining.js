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

if (restaurant.openingHours.thu) console.log(restaurant.openingHours.thu?.open);
if (restaurant.openingHours.thu)
  console.log(restaurant.openingHours.thu?.close);

// Using ooping arrays and a short curcuit and a conditional operator to list weather it is open or not and when :)
//for (const day of weekdays) openingHours[day] || undefined ? console.log(`${day.toUpperCase()}: Open at ${restaurant.openingHours[day]?.open} o'clock`) : console.log(`${day.toUpperCase()}: Not Open`);
for (const day of weekdays)
  openingHours[day] ?? undefined
    ? console.log(
        `${day.toUpperCase()}: Open at ${
          restaurant.openingHours[day]?.open
        } o'clock`
      )
    : console.log(`${day.toUpperCase()}: Not Open`);

console.log(restaurant.order?.(0, 1) ?? `Method or ordering does not exist`); //Returns order
console.log(
  restaurant.orderRissoto?.(0, 1) ?? `Method or ordering does not exist`
); // returns deos not exist

const user1 = [{ username: `Chip`, email: `chip@gmail.com` }];
console.log(user1[0]?.username ?? `User array empty`);

const user2 = [{ username: undefined, email: null }];
console.log(user2[0]?.username ?? `User array empty`);
