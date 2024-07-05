"use strict";

const charlie = [
  `Charlie`,
  `Roberts`,
  2024 - 2007,
  `student`,
  [`Mich`, `Ellie`, `Jeremy`],
  true,
];

console.log(`\n--- BACKWARDS LIST ---\n `);
for (let i = charlie.length - 1; i >= 0; i--) {
  console.log(`${i + 1} - ${charlie[i]}`);
}
