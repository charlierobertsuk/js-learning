"use strict";

const bills = [125, 555, 44];
const totals = [];

const calcTip = function (bill) {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  console.log(
    `Bill cost: £${bill}\nTip cost: £${tip}\nTotal cost: £${bill + tip}`
  );
  totals.unshift(bill + tip);
};

console.log(calcTip(bills[0]));
console.log(calcTip(bills[1]));
console.log(calcTip(bills[2]));
console.log(totals);
