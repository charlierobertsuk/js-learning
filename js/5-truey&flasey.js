// truey ans falsey values - boolean

// 5 falsy values: 0, '', undefined, null, NaN
// everything else is a truthy value

console.log(Boolean(0)); // output: false
console.log(Boolean('')); // output: false
console.log(Boolean(undefined)); // output: false
console.log(Boolean(null)); // output: false
console.log(Boolean(NaN)); // output: false
console.log(Boolean(16)); // output: true
console.log(Boolean('Charlie')); // output: true

const money = 0; // false (if money > 0 then will be true)
if (money) {
    console.log("Don't spend it all!"); // true
} else {
    console.log('Get a job!'); // false
}