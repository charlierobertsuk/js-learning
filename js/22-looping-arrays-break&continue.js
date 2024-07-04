`strict mode`;

const charlie = [
    `Charlie`,
    `Roberts`,
    2024 - 2007,
    `student`,
    [`Mich`, `Ellie`, `Jeremy`]
];

const types = [];


for (let i = 0; i < charlie.length; i++) {
    types[i] = typeof charlie[i];
    console.log(`${charlie[i]} is a ${types[i]}`);
}