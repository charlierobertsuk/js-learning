// tip calculator
const bill = 100;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `Bill cost: £${bill}\nTip cost: £${tip}\nTotal cost: £${bill + tip}`
);
