`strict mode`;

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

for (let i = 0; i < charlie.length; i++) {
    types[i] = typeof charlie[i];
    types.push(typeof charlie[i]);
    console.log(types.length - 1);
    console.log(`${charlie[i]} is a ${types[i]}`);
}
/* 
for (let i = 0; i < ages.length; i++) {
    ages.push(2024 - ages[i]);
}
 */
console.log(ages);
console.log(ages.length);
console.log(charlie.length);