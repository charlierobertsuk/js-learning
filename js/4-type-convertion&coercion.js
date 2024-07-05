//type conversion

const inputYear = `2007`;
console.log(inputYear + 10); //output: 200710
console.log(Number(inputYear) + 10); //output: 2017
console.log(Number(`Charlie`)); //output: NaN (Not a Number)
console.log(typeof NaN); //output: number (NaN is just an invalid number)
console.log(String(23)); //output: 23
console.log(typeof String(23)); //output: string
console.log(typeof (String(23), 23)); //output: number
console.log(String(23) + 23); //output 2323

// type coercion

console.log("I am " + "23" + " years old");
console.log("I am " + 23 + " years old"); // coercion is forcing the number as a string when concatanated
console.log("23" - "10" - 3); //output: 10 (as a number)
console.log("23" * "2"); //output: 46 (gives a number)

let n = "1" + 1; // 11
n = n - 1; // 11 - 1
console.log(n); // output: 10

// 2+3+4+'5' = "95"
// '10' - '4' - '3' = 3
// '10' - '4' - '3' - 2 + '5' = "15"
