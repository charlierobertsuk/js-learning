`use strict`;

// find the range of temperetures

console.log(`\n--- RANGE OF TEMPERETURES ---\n `);
const tempretures1 = [-3, -2, -6, -1, `error`, 9];
const tempretures2 = [13, 17, 15, 14, 9, 5];
const tempreturesTotal = tempretures1.concat(tempretures2); // merges both arrays
console.log(`Array 1 - [${tempretures1}]`);
console.log(`Array 2 - [${tempretures2}]`);
console.log(`Array 1 + 2 - [${tempreturesTotal}]`);

const calcTempRange = function (temps) {
  let max = temps[0]; // state a starting number for max
  let min = temps[0]; // state a starting number for min
  for (let i = 0; i < temps.length; i++) {
    // flicks through the array from point 0 to the end
    const currentTemp = temps[i]; // makes the if statements below easier to read
    if (typeof currentTemp !== `number`) continue; // if not a number, skip it
    if (currentTemp > max) max = currentTemp; // if current temp is higher than current number then overwrite it
    if (currentTemp < min) min = currentTemp; // if current temp is lower  than current number then overwrite it
  }
  const tempRange = max - min; // calculates the range
  console.log(
    `The range of temperetures is a difference of ${tempRange} degrees`
  );
};

// crunches the numbers from tempretures
calcTempRange(tempreturesTotal);
