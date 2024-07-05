`strict mode`;

let repeat = 1;
console.log(`\n--- REPEAT USING WHILE LOOP ---\n `);
while (repeat <= 3) {
    console.log(repeat);
    repeat++;
}

const targetNumber = 4;

console.log(`\n--- ROLL THE DICE ---\n `);
let dice = Math.trunc(Math.random() * 6) + 1; // random number between 1 - 6
let rollCount = 0;
if (targetNumber > 0 && targetNumber < 7){ // if not between 1 and 6 thin it is out of bounds
    while (dice !== targetNumber) { // when it has not rolled the target number, roll again
        console.log(`${rollCount + 1} - You rolled a ${dice}`);
        rollCount++;
        dice = Math.trunc(Math.random() * 6) + 1;
        if (dice === targetNumber) {
            console.log(`${rollCount + 1} - You rolled a ${targetNumber}`);
            console.log(`It only took ${rollCount + 1} rolls!`);
        }
    }
} else {
    console.log(`Target number of ${targetNumber} is out of bounds`);
}

console.log(`\n--- ROLL TWO DICE ---\n `);
let dice1 = Math.trunc(Math.random() * 6) + 1; // random number between 1 - 6
let dice2 = Math.trunc(Math.random() * 6) + 1;
rollCount = 0;
if (targetNumber > 1 && targetNumber < 13){ // if not between 1 and 6 thin it is out of bounds
    while (dice1 + dice2 !== targetNumber) { // when it has not rolled the target number, roll again
        console.log(`${rollCount + 1} - You rolled a ${dice1 + dice2} with a ${dice1} and a ${dice2}`);
        rollCount++;
        dice1 = Math.trunc(Math.random() * 6) + 1;
        dice2 = Math.trunc(Math.random() * 6) + 1;
        if (dice1 + dice2 === targetNumber) {
            console.log(`${rollCount + 1} - You rolled a ${targetNumber} with a ${dice1} and ${dice2}`);
            console.log(`It only took ${rollCount + 1} rolls!`);
        }
        if (rollCount === 100) {
            console.log(`Did not get ${targetNumber} after 100 rolls :(`);
            break
        }
    }
} else {
    console.log(`Target number of ${targetNumber} is out of bounds`);
}
