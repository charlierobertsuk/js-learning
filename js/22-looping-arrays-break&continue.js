'use strict';

const charlie = [
    `Charlie`,
    `Roberts`,
    2024 - 2007,
    `student`,
    [`Mich`, `Ellie`, `Jeremy`]
];

const types = [];
const ages = [11, 17, 25, 42, 50];
const years = [];


// list printer
console.log(`\n--- LIST OUTPUT ---\n `)
for (let i = 0; i < charlie.length; i++) {
    types[i] = typeof charlie[i];
    types.push(typeof charlie[i]);
    console.log(`${types.length - 1}: ${charlie[i]} is a ${types[i]}`);
}



// year born calculator
console.log(`\n--- YEAR BORN ---\n `)
for (let i = 0; i < ages.length; i++) {
    years.push(2024 - ages[i]);
    console.log(`People who are ${ages[i]}, were born in ${years[i]}`);
}



// will continue only if the value is a string
console.log(`\n--- ONLY STRINGS ---\n `)
for (let i = 0; i < charlie.length; i++) {
    if (typeof charlie[i] !== `string`) continue;
    console.log(charlie[i], typeof charlie[i]);
}

// will break only when a number is found
console.log(`\n--- BREAK WITH NUMBER ---\n `)
for (let i = 0; i < charlie.length; i++) {
    if (typeof charlie[i] === `number`) break;
    console.log(charlie[i], typeof charlie[i]);
}