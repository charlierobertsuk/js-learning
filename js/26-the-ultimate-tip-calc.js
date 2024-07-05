`strict mode`;

const bills = [
    22,  // 0
    295, // 1
    176, // 2
    440, // 3
    37,  // 4
    105, // 5
    10,  // 6
    1100,// 7
    86,  // 8
    52   // 9
];

let tips = [];
let totals = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const calcAverage = function(arr) {
    let sum = 0;
    let avr = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        sum += arr[i];
        avr = sum / arr.length;
    }
    return avr;
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
    console.log(`     ${i+1}\nBill:  £${bills[i]}\nTip:   £${tips[i]}\nTotal: £${totals[i]}`);
}

console.log(`The average bill is £${calcAverage(bills)}`);
console.log(`The average tip is £${calcAverage(tips)}`);
console.log(`The average total is £${calcAverage(totals)}`);