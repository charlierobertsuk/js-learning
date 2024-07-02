`strict mode`;

const friends= [`Mich`, `Ellie`, `Jeremy`];
const newLength = friends.push(`Jade`); // Adds `Jade` to the end of the array
console.log(friends);
console.log(newLength);

friends.unshift(`Paul`); // Adds `Paul` to the begining of the array
console.log(friends);

const selectedPerson = friends[2];
console.log(`${selectedPerson} is number ${friends.indexOf(selectedPerson) + 1} on the list`);


//friends.pop();
console.log(`The list is currently: ${friends}`);
const popped = friends.pop(); // removes last element (Jade in this case)
console.log(`${popped} has been removed from the list, now it is currently: ${friends}`);
const shifting = friends.shift();
console.log(`${shifting} has been removed from the list, now it is currently: ${friends}`);


// ES6 feature
// Ellie is in the list and Steven is not
console.log(friends.includes(`Steven`)); // output: false
console.log(friends.includes(`Ellie`)); // output: true
if (friends.includes(selectedPerson)) {
    console.log(`${selectedPerson} is your friend`)
} else {
    console.log(`${selectedPerson} is NOT your friend`)
}