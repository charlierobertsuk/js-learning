// The conditional operator

const age = 18;

age >= 18 ? console.log("Has valid ID") : console.log ("No valid ID");

// this is a super teeny tiny if else statement

const conditionalValidID = age >= 18 ? "Has valid ID" : "No valid ID";
console.log(conditionalValidID);

//as an if statement

let ifValidID;
if (age >= 18) {
    ifValidID = "Has valid ID";
} else {
    ifValidID = "No valid ID";
}
console.log(ifValidID);

//super cool and will come in handy in future
console.log(`ID checker: ${age >= 18 ? "Has valid ID" : "No valid ID"}`); //output: ID checker: Has valid ID